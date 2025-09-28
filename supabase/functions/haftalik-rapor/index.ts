import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { Resend } from 'https://esm.sh/resend';
import { corsHeaders } from '../_shared/cors.ts';

// Rapor verilerini tutacak arayüzler (veri tipleri)
interface KonuDetayi {
  toplam_soru: number;
  dogru_sayisi: number;
  yanlis_sayisi: number;
  basari_yuzdesi: number;
}
interface DersRaporu {
  toplam_soru: number;
  dogru_sayisi: number;
  yanlis_sayisi: number;
  basari_yuzdesi: number;
  konular: { [konu: string]: KonuDetayi };
}
interface OgrenciRaporu {
  ogrenci_adi: string;
  dersler: { [ders_id: string]: DersRaporu };
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }
  try {
    // Supabase istemcisini başlatıyoruz.
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );
    // Resend istemcisini kasaya koyduğumuz gizli anahtarla başlatıyoruz.
    const resend = new Resend(Deno.env.get('RESEND_API_KEY'));

    console.log("Raporlama ve E-posta gönderme fonksiyonu başlatıldı.");

    const { data: koclar, error: kocError } = await supabaseClient.from('koclar').select('eposta');
    if (kocError) throw kocError;

    for (const koc of koclar) {
      console.log(`--- ${koc.eposta} için rapor oluşturuluyor... ---`);
      const { data: ogrenciler, error: ogrenciError } = await supabaseClient
        .from('ogrenciler').select('ad_soyad, baglanan_kullanici_id')
        .eq('koc_eposta', koc.eposta).not('baglanan_kullanici_id', 'is', null);
      if (ogrenciError) throw ogrenciError;

      for (const ogrenci of ogrenciler) {
        const rapor: OgrenciRaporu = { ogrenci_adi: ogrenci.ad_soyad, dersler: {} };
        const birHaftaOnce = new Date();
        birHaftaOnce.setDate(birHaftaOnce.getDate() - 7);

        const { data: sorular, error: soruError } = await supabaseClient
          .from('cozulen_sorular').select('ders_id, konu, dogru_sayisi, yanlis_sayisi')
          .eq('kullanici_id', ogrenci.baglanan_kullanici_id).gte('created_at', birHaftaOnce.toISOString());
        
        if (soruError) throw soruError;
        if (sorular.length === 0) {
          console.log(`>>> ${ogrenci.ad_soyad} için son 7 günde veri bulunamadı.`);
          continue; 
        }
        
        for (const soru of sorular) {
          const dersId = soru.ders_id || 'Bilinmeyen Ders';
          const konu = soru.konu || 'Bilinmeyen Konu';
          if (!rapor.dersler[dersId]) { rapor.dersler[dersId] = { toplam_soru: 0, dogru_sayisi: 0, yanlis_sayisi: 0, basari_yuzdesi: 0, konular: {} }; }
          if (!rapor.dersler[dersId].konular[konu]) { rapor.dersler[dersId].konular[konu] = { toplam_soru: 0, dogru_sayisi: 0, yanlis_sayisi: 0, basari_yuzdesi: 0 }; }
          const dogru = soru.dogru_sayisi || 0;
          const yanlis = soru.yanlis_sayisi || 0;
          rapor.dersler[dersId].dogru_sayisi += dogru;
          rapor.dersler[dersId].yanlis_sayisi += yanlis;
          rapor.dersler[dersId].konular[konu].dogru_sayisi += dogru;
          rapor.dersler[dersId].konular[konu].yanlis_sayisi += yanlis;
        }

        for (const dersId in rapor.dersler) {
          const ders = rapor.dersler[dersId];
          for (const konuAdi in ders.konular) {
            const konu = ders.konular[konuAdi];
            konu.toplam_soru = konu.dogru_sayisi + konu.yanlis_sayisi;
            konu.basari_yuzdesi = konu.toplam_soru > 0 ? parseFloat(((konu.dogru_sayisi / konu.toplam_soru) * 100).toFixed(1)) : 0;
          }
          ders.toplam_soru = ders.dogru_sayisi + ders.yanlis_sayisi;
          ders.basari_yuzdesi = ders.toplam_soru > 0 ? parseFloat(((ders.dogru_sayisi / ders.toplam_soru) * 100).toFixed(1)) : 0;
        }

        console.log(`>>> ${ogrenci.ad_soyad} için rapor hazırlandı, e-posta gönderiliyor...`);
        
        let emailHtml = `<h1>Haftalık Gelişim Raporu</h1><h2>Öğrenci: ${rapor.ogrenci_adi}</h2>`;
        for (const dersId in rapor.dersler) {
          const ders = rapor.dersler[dersId];
          emailHtml += `<hr><h3>${dersId.toUpperCase()} (Genel Başarı: ${ders.basari_yuzdesi}%)</h3>`;
          emailHtml += `<table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%;">
            <tr style="background-color: #f2f2f2;"><th>Konu</th><th>Toplam Soru</th><th>Doğru</th><th>Yanlış</th><th>Başarı</th></tr>`;
          for (const konuAdi in ders.konular) {
            const konu = ders.konular[konuAdi];
            emailHtml += `<tr>
              <td>${konuAdi}</td>
              <td>${konu.toplam_soru}</td>
              <td>${konu.dogru_sayisi}</td>
              <td>${konu.yanlis_sayisi}</td>
              <td><b>${konu.basari_yuzdesi}%</b></td>
            </tr>`;
          }
          emailHtml += `</table>`;
        }
        
        await resend.emails.send({
          from: 'onboarding@resend.dev',
          to: koc.eposta,
          subject: `Haftalık Rapor: ${rapor.ogrenci_adi}`,
          html: emailHtml,
        });

        console.log(`>>> E-posta başarıyla ${koc.eposta} adresine gönderildi.`);
      }
    }
    return new Response(JSON.stringify({ message: "Raporlama ve e-posta gönderimi tamamlandı." }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400,
    });
  }
});