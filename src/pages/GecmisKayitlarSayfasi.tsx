import { useEffect, useState } from "react";
import { supabase } from "@/supabaseClient";
import { useAppContext } from "./AppLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Clock, Check, X, Pencil, Lock } from "lucide-react";
import { toast } from "sonner"; // toast eklendi

// Veri tipini tanımlıyoruz
interface SoruKaydi {
  id: number;
  ders_id: string;
  dogru_sayisi: number;
  yanlis_sayisi: number;
  eklenme_zamani: string;
}

export default function GecmisKayitlarSayfasi() {
  const { subjects } = useAppContext();
  const [kayitlar, setKayitlar] = useState<SoruKaydi[]>([]);
  const [loading, setLoading] = useState(true);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState<SoruKaydi | null>(null);
  const [newCorrect, setNewCorrect] = useState("");
  const [newIncorrect, setNewIncorrect] = useState("");

  const getSubjectName = (subjectId: string) => {
    const subject = subjects.find(s => s.id === subjectId);
    return subject ? subject.name : "Bilinmeyen Ders";
  };
  
  const fetchKayitlar = async () => {
    setLoading(true);
    const userId = localStorage.getItem('lgs_app_user_id');
    if (!userId) { setLoading(false); return; }

    const { data, error } = await supabase
      .from('cozulen_sorular')
      .select('id, ders_id, dogru_sayisi, yanlis_sayisi, eklenme_zamani')
      .eq('kullanici_id', userId)
      .order('eklenme_zamani', { ascending: false })
      .limit(10);

    if (error) { console.error("Geçmiş kayıtlar çekilirken hata:", error); } 
    else if (data) { setKayitlar(data); }
    setLoading(false);
  };

  useEffect(() => {
    fetchKayitlar();
  }, []);
  
  const handleEditClick = (kayit: SoruKaydi) => {
    setSelectedRecord(kayit);
    setNewCorrect(kayit.dogru_sayisi.toString());
    setNewIncorrect(kayit.yanlis_sayisi.toString());
    setIsDialogOpen(true);
  };

  // =================================================================
  // GÜNCELLENEN KAYDETME FONKSİYONU
  // =================================================================
  const handleSaveChanges = async () => {
    if (!selectedRecord) return;

    const correct = parseInt(newCorrect) || 0;
    const incorrect = parseInt(newIncorrect) || 0;

    const { error } = await supabase
      .from('cozulen_sorular')
      .update({ dogru_sayisi: correct, yanlis_sayisi: incorrect })
      .eq('id', selectedRecord.id);

    if (error) {
      toast.error("Kayıt güncellenirken bir hata oluştu.");
      console.error("Güncelleme hatası:", error);
    } else {
      // Başarılı olursa, ekrandaki listeyi de anında güncelle (optimistic update)
      setKayitlar(prevKayitlar => 
        prevKayitlar.map(k => 
          k.id === selectedRecord.id 
            ? { ...k, dogru_sayisi: correct, yanlis_sayisi: incorrect } 
            : k
        )
      );
      toast.success("Kayıt başarıyla güncellendi!");
      setIsDialogOpen(false);
    }
  };
  // =================================================================

  if (loading) {
    return <div className="text-center p-8">Yükleniyor...</div>;
  }

  return (
    <div className="p-4 space-y-6 animate-slide-up">
      <Card>
        <CardHeader>
          <CardTitle>Son İşlemler</CardTitle>
          <CardDescription>Son eklediğin 10 soru kaydı aşağıda listelenmiştir. Kayıtları eklendikten sonraki 1 saat içinde düzenleyebilirsin.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {kayitlar.length === 0 ? (
            <p className="text-muted-foreground">Henüz hiç kayıt eklememişsin.</p>
          ) : (
            kayitlar.map(kayit => {
              const eklenmeZamani = new Date(kayit.eklenme_zamani);
              const birSaatOnce = new Date(new Date().getTime() - (60 * 60 * 1000));
              const isEditable = eklenmeZamani > birSaatOnce;
              
              return (
                <div key={kayit.id} className="p-4 border rounded-lg flex justify-between items-center">
                  <div>
                    <p className="font-bold text-lg">{getSubjectName(kayit.ders_id)}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                      <span className="flex items-center gap-1"><Check className="h-4 w-4 text-green-500" /> {kayit.dogru_sayisi} Doğru</span>
                      <span className="flex items-center gap-1"><X className="h-4 w-4 text-red-500" /> {kayit.yanlis_sayisi} Yanlış</span>
                    </div>
                  </div>
                  <div className="text-right flex flex-col items-end gap-2">
                    {isEditable ? (
                      <Button variant="outline" size="sm" className="gap-2" onClick={() => handleEditClick(kayit)}>
                        <Pencil className="h-4 w-4" />
                        Düzenle
                      </Button>
                    ) : (
                      <div className="flex items-center gap-2 text-muted-foreground cursor-not-allowed">
                        <Lock className="h-4 w-4" />
                        <span className="text-sm">Kilitli</span>
                      </div>
                    )}
                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {new Date(kayit.eklenme_zamani).toLocaleString('tr-TR')}
                    </p>
                  </div>
                </div>
              );
            })
          )}
        </CardContent>
      </Card>
      
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Kaydı Düzenle: {selectedRecord ? getSubjectName(selectedRecord.ders_id) : ''}</DialogTitle>
            <DialogDescription>
              Doğru ve yanlış sayılarını güncelleyebilirsiniz.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="correct" className="text-right">Doğru</Label>
              <Input id="correct" type="number" value={newCorrect} onChange={(e) => setNewCorrect(e.target.value)} className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="incorrect" className="text-right">Yanlış</Label>
              <Input id="incorrect" type="number" value={newIncorrect} onChange={(e) => setNewIncorrect(e.target.value)} className="col-span-3" />
            </div>
          </div>
          <DialogFooter>
            <Button type="button" onClick={handleSaveChanges}>Değişiklikleri Kaydet</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}