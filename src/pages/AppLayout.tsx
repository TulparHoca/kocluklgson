import { Outlet, useOutletContext, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { storage } from "@/utils/storage";
import { toast } from 'sonner';
import { AppContextType, SolvedStat, Subject } from '@/types';
import { LocalNotifications } from '@capacitor/local-notifications';

// UI Bileşenleri
import Header from '@/components/Header';
import BottomNav from '@/components/BottomNav';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Oluşturduğumuz Hook'lar
import { useAuth } from '@/hooks/useAuth';
import { useStudyData } from '@/hooks/useStudyData';
import { useCoreData } from '@/hooks/useCoreData';
import { useScheduler } from '@/hooks/useScheduler';

const AppLayout = () => {
  const [isInitialized, setIsInitialized] = useState(false);
  const [isMuted, setIsMuted] = useState(() => storage.loadIsMuted());
  const [theme, setTheme] = useState<'light' | 'dark'>(() => storage.loadTheme() || 'dark');
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const auth = useAuth(isMuted);

  const studyData = useStudyData(isInitialized, isMuted, (result, newDailySolvedCount) => {
    coreData.setTotalPoints(prev => prev + (result.correct * 10));
    if (newDailySolvedCount >= 3) {
      coreData.setStreak(prev => prev + 1);
      toast.success("Günlük seri arttı! 🔥");
    } else {
      toast.info("Harika bir paket tamamladın, devam et! 🎉");
    }
  });

  const { lastActiveDate } = studyData;
  const coreData = useCoreData(isInitialized, isMuted, lastActiveDate);
  const scheduler = useScheduler(isInitialized);

  // Başarım kontrolünü, ilgili veriler her güncellendiğinde yapmak en güvenilir yoldur.
  useEffect(() => {
    if (isInitialized) {
      // Bu genel kontrol, soru sayısı ve seri gibi state'e bağlı başarımları yakalar.
      coreData.checkAchievements(studyData.subjects, { type: 'questions' });
    }
  }, [studyData.subjects, coreData.streak, isInitialized]);
  
  const handleAddQuestions = async (subjectId: string, counts: { correct: number; incorrect: number; }, topic: string) => {
    // Soru ekleme işlemi studyData hook'u tarafından yönetilir.
    // Yukarıdaki useEffect, subjects state'i değiştiğinde kontrolü zaten yapacaktır.
    await studyData.handleAddQuestions(subjectId, counts, topic);
  };
  
  const handleQuizCompletion = async (correctlySolved: SolvedStat[], subjectId: string) => {
    // Quiz tamamlama studyData tarafından yönetilir.
    await studyData.handleQuizCompletion(correctlySolved, subjectId);
    
    // Quiz'e özel başarımları (kusursuz performans, günün saati vb.) kontrol etmek için
    // hakemi burada anlık verilerle tekrar çağırıyoruz.
    const incorrectCount = correctlySolved.filter(s => !s.correct).length;
    coreData.checkAchievements(studyData.subjects, {
      type: 'quiz',
      data: { quizResult: { correct: 6 - incorrectCount, incorrect: incorrectCount } }
    });
  };

  const handleEnglishUnitUnlocked = () => {
    // İngilizce ünitesi açıldığında bu özel olayı tetikliyoruz.
    coreData.checkAchievements(studyData.subjects, { type: 'english_unit' });
  };

  useEffect(() => {
    LocalNotifications.requestPermissions().then(() => setIsInitialized(true));
  }, []);

  useEffect(() => { storage.saveIsMuted(isMuted); }, [isMuted]);
  useEffect(() => { 
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    storage.saveTheme(theme); 
  }, [theme]);

  const toggleMute = () => setIsMuted(prev => !prev);
  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  const totalQuestions = studyData.subjects.reduce((sum, s) => sum + s.correct + s.incorrect, 0);
  const unlockedAchievements = coreData.achievements.filter(a => a.unlocked).length;
  
  const contextValue: AppContextType = { 
    ...auth,
    ...studyData,
    ...coreData,
    ...scheduler,
    handleAddQuestions,
    handleQuizCompletion,
    handleEnglishUnitUnlocked,
    isMuted,
    toggleMute
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 dark:from-gray-900 dark:to-slate-800 text-foreground transition-colors duration-300">
      <Dialog open={auth.showNameModal}>
        <DialogContent onPointerDownOutside={(e) => e.preventDefault()}>
          <DialogHeader>
            <DialogTitle className="text-2xl">Sisteme Giriş</DialogTitle>
            <DialogDescription>Devam etmek için bilgilerini ve koç kodunu gir.</DialogDescription>
          </DialogHeader>
          <div className="py-4 space-y-4">
            <Input placeholder="Adın Soyadın..." value={auth.tempName} onChange={(e) => auth.setTempName(e.target.value)} />
            <Input placeholder="Sınıfın (Örn: 8A)" value={auth.className} onChange={(e) => auth.setClassName(e.target.value)} />
            <Input placeholder="Koç Kodu" value={auth.coachCode} onChange={(e) => auth.setCoachCode(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && auth.handleRegistration()} />
            <Button onClick={auth.handleRegistration} disabled={!auth.tempName.trim() || !auth.className.trim() || !auth.coachCode.trim()} className="w-full">Giriş Yap</Button>
          </div>
        </DialogContent>
      </Dialog>
    
      <div className="max-w-7xl mx-auto p-4 pb-24">
        <Header 
          userName={auth.userName}
          totalQuestions={totalQuestions}
          streak={coreData.streak}
          unlockedAchievements={unlockedAchievements}
          totalPoints={coreData.totalPoints}
          theme={theme}
          toggleTheme={toggleTheme}
          currentAvatarId={coreData.userAvatars.current}
          isMuted={isMuted}
          toggleMute={toggleMute}
          isHomePage={isHomePage}
        />
        <main>
          <div className="animate-slide-up">
            <Outlet context={contextValue} />
          </div>
        </main>
      </div>
      <BottomNav isMuted={isMuted} />
    </div>
  );
};

export function useAppContext(): AppContextType {
  return useOutletContext<AppContextType>();
}

export default AppLayout;