import { Subject } from "@/types";

export const subjects: Subject[] = [
  {
    id: 'math', name: 'Matematik', description: 'LGS Matematik Konuları', icon: '➗', color: 'primary',
    targetQuestions: 200, correct: 0, incorrect: 0,
    topics: [
      'Sayı Kümeleri',
      'Rasyonel Sayılar',
      'Üslü İfadeler',
      'Kareköklü İfadeler',
      'Cebirsel İfadeler',
      'Eşitlik ve Denklem',
      'Oran ve Orantı',
      'Yüzde Hesapları',
      'Basit Eşitsizlikler',
      'Doğrusal Denklemler',
      'Üçgenler',
      'Dörtgenler',
      'Çember ve Daire',
      'Prizmalar',
      'Geometrik Cisimler',
      'Veri Analizi',
      'Merkezi Eğilim',
      'Olasılık'
    ]
  },
  {
    id: 'science', name: 'Fen Bilimleri', description: 'LGS Fen Bilimleri Konuları', icon: '🔬', color: 'success',
    targetQuestions: 200, correct: 0, incorrect: 0,
    topics: [
      'Mevsimler ve İklimler',
      'DNA ve Genetik Kod',
      'Basınç',
      'Madde ve Endüstri',
      'Periyodik Sistem',
      'Fiziksel ve Kimyasal Değişimler',
      'Asitler ve Bazlar',
      'Madde ve Endüstri – Devam',
      'Basit Makineler',
      'Canlılar ve Enerji İlişkileri',
      'Enerji Dönüşümleri ve Çevre Bilimi',
      'Elektrik Yükleri ve Elektrik Enerjisi'
    ]
  },
  {
    id: 'turkish', name: 'Türkçe', description: 'LGS Türkçe Konuları', icon: '✍️', color: 'warning',
    targetQuestions: 250, correct: 0, incorrect: 0,
    topics: [
      'Okuma Anlama',
      'Sözcükte Anlam',
      'Cümlede Anlam',
      'Paragrafta Anlam',
      'Noktalama İşaretleri',
      'Yazım Kuralları',
      'Ses Bilgisi',
      'Sözcük Türleri',
      'Cümle Ögeleri',
      'Fiilde Çatı',
      'Fiilde Kip',
      'Fiilde Zaman'
    ]
  },
  {
    id: 'english', name: 'İngilizce', description: 'LGS İngilizce Konuları', icon: '🇬🇧', color: 'primary',
    targetQuestions: 100, correct: 0, incorrect: 0,
    topics: [
      'Friendship',
      'Teen Life',
      'In the Kitchen',
      'On the Phone',
      'The Internet',
      'Adventures',
      'Tourism',
      'Chores',
      'Science',
      'Natural Forces'
    ]
  },
  {
    id: 'revolution', name: 'T.C. İnkılap Tarihi', description: 'LGS İnkılap Tarihi Konuları', icon: '🇹🇷', color: 'success',
    targetQuestions: 100, correct: 0, incorrect: 0,
    topics: [
      'Bir Kahraman Doğuyor',
      'Milli Uyanış: Bağımsızlık Yolunda Atılan Adımlar',
      'Milli Bir Destan; Ya İstiklal Ya Ölüm',
      'Çağdaş Türkiye Yolunda Adımlar',
      'Demokratikleşme Çabaları',
      'Atatürkçülük',
      'Atatürk Dönemi Türk Dış Politikası ve Atatürk’ün Ölümü',
      'İkinci Dünya Savaşı Ve Sonrası'
    ]
  },
  {
    id: 'religion', name: 'Din Kültürü', description: 'LGS Din Kültürü Konuları', icon: '🕌', color: 'warning',
    targetQuestions: 100, correct: 0, incorrect: 0,
    topics: [
      'KUR’AN-I KERİM VE ÖZELLİKLERİ',
      'HZ. MUHAMMED VE ÖRNEKLİĞİ',
      'DİN VE HAYAT',
      'ZEKÂT VE SADAKA',
      'KADER İNANCI'
    ]
  }
];