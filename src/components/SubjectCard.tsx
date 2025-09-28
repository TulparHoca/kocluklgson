import { useState } from "react";
import { Subject } from "@/types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, BookOpen } from "lucide-react";
import { lgsTopics } from "@/data/lgsTopics";
import { toast } from 'sonner';

// =================================================================
// GEREKLİ CAPACITOR KÜTÜPHANELERİ
// =================================================================
import { AppLauncher } from '@capacitor/app-launcher';
import { Browser } from '@capacitor/browser';
import { Capacitor } from '@capacitor/core';
// =================================================================

interface SubjectCardProps {
  subject: Subject;
  onAddQuestions: (subjectId: string, counts: { correct: number, incorrect: number }, topic: string) => void;
}

const getColorVariant = (color: string) => {
  switch (color) {
    case 'primary': return 'gradient-primary';
    case 'success': return 'gradient-success';
    case 'warning': return 'gradient-warning';
    default: return 'bg-secondary';
  }
};

export default function SubjectCard({ subject, onAddQuestions }: SubjectCardProps) {
  const [open, setOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<string>("");
  const [correctCount, setCorrectCount] = useState<string>("");
  const [incorrectCount, setIncorrectCount] = useState<string>("");
  
  const totalCompleted = subject.correct + subject.incorrect;

  const getTopicsForSubject = (subjectId: string) => {
    return lgsTopics[subjectId as keyof typeof lgsTopics] || [];
  };

  const handleSubmit = () => {
    const correct = parseInt(correctCount) || 0;
    const incorrect = parseInt(incorrectCount) || 0;
    if (selectedTopic && (correct > 0 || incorrect > 0)) {
      onAddQuestions(subject.id, { correct, incorrect }, selectedTopic);
      setOpen(false);
      setSelectedTopic("");
      setCorrectCount("");
      setIncorrectCount("");
    }
  };
  
  // =================================================================
  // DÜZELTİLMİŞ MEB UYGULAMA AÇMA FONKSİYONU
  // =================================================================
  const handleOpenMebiApp = async () => {
    // Doğru MEB EBA uygulamasının mağaza linkleri
    const androidStoreUrl = 'https://play.google.com/store/apps/details?id=tr.gov.eba.mebi';
    const iosStoreUrl = 'https://apps.apple.com/tr/app/id1438258386'; // MEB Mobil Bilgi Servisi ID'si

    const platform = Capacitor.getPlatform();
    
    let storeUrl = '';
    if (platform === 'ios') {
      storeUrl = iosStoreUrl;
    } else { // Android ve diğer platformlar
      storeUrl = androidStoreUrl;
    }

    try {
      // Doğrudan mağaza URL'sini açmayı deniyoruz.
      // Android kendi içinde uygulamanın yüklü olup olmadığını kontrol eder.
      await Browser.open({ url: storeUrl });
      toast.success("MEB uygulaması açılıyor...");

    } catch (e) {
      console.error('Uygulama açılırken hata oluştu:', e);
      toast.error("Uygulama açılamadı. Lütfen tekrar deneyin.");
    }
  };

  return (
    <Card className="group shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-[1.02] animate-bounce-in border border-border/50 hover:border-primary/20 dark:border-white/10">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`${getColorVariant(subject.color)} p-3 rounded-xl shadow-glow text-2xl`}>
              {subject.icon}
            </div>
            <div>
              <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                {subject.name}
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                {subject.description}
              </CardDescription>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className={`h-6 w-full rounded-full flex items-center justify-center ${getColorVariant(subject.color)}`}>
          <span className="text-white font-bold text-sm drop-shadow-[0_1px_1px_rgba(0,0,0,0.7)]">
            {totalCompleted} Soru Çözüldü
          </span>
        </div>

        <div className="flex gap-2">
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button variant="card" className="flex-1 group/button">
                <Plus className="h-4 w-4 mr-2 group-hover/button:rotate-90 transition-transform duration-300" />
                Soru Ekle
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Soru Ekle - {subject.name}</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="topic">LGS Konusu</Label>
                  <Select value={selectedTopic} onValueChange={setSelectedTopic}>
                    <SelectTrigger><SelectValue placeholder="LGS konusu seçin..." /></SelectTrigger>
                    <SelectContent>
                      {getTopicsForSubject(subject.id).map((topic) => (
                        <SelectItem key={topic} value={topic}>{topic}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="correct">Doğru Sayısı</Label>
                    <Input id="correct" type="number" min="0" value={correctCount} onChange={(e) => setCorrectCount(e.target.value)} placeholder=" örn: 18" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="incorrect">Yanlış Sayısı</Label>
                    <Input id="incorrect" type="number" min="0" value={incorrectCount} onChange={(e) => setIncorrectCount(e.target.value)} placeholder=" örn: 2" />
                  </div>
                </div>
                <div className="flex gap-2 pt-4">
                  <Button variant="outline" className="flex-1" onClick={() => setOpen(false)}>İptal</Button>
                  <Button className="flex-1" onClick={handleSubmit} disabled={!selectedTopic || (!correctCount && !incorrectCount)}>Ekle</Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
          <Button 
            variant="outline" 
            size="icon" 
            className="hover:gradient-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
            onClick={handleOpenMebiApp}
          >
            <BookOpen className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}