import { useState, useEffect } from 'react';
import { storage } from '@/utils/storage';
import { supabase } from '@/supabaseClient';
import { toast } from 'sonner';
import { Achievement, UserAvatars, Subject } from '@/types';
import { achievements as initialAchievementsData } from '@/data/achievements';
import { avatars as allAvatars } from "@/data/avatars";
import { playPurchaseSound, playConfirmSound, playFailSound } from "@/utils/sounds";

export const useCoreData = (isInitialized: boolean, isMuted: boolean, lastActiveDate: string | null) => {
  const [totalPoints, setTotalPoints] = useState(0);
  const [streak, setStreak] = useState(0);
  const [streakFreezes, setStreakFreezes] = useState(0);
  const [achievements, setAchievements] = useState<Achievement[]>(() => {
    const localData = storage.loadAchievements();
    return localData.length > 0 ? localData : initialAchievementsData;
  });
  const [userAvatars, setUserAvatars] = useState<UserAvatars>({ current: 'default', unlocked: ['default'] });
  const [isCloudDataLoaded, setIsCloudDataLoaded] = useState(false);
  const userId = localStorage.getItem('lgs_app_user_id');

  const updateUserCloudData = async (dataToUpdate: object) => {
    if (!userId || !isInitialized || !isCloudDataLoaded) return;
    
    const { error } = await supabase.from('kullanicilar').update(dataToUpdate).eq('id', userId);
    if (error) console.error("Bulut verisi güncellenirken hata oluştu:", error);
  };

  useEffect(() => {
    if (userId) {
      const fetchCoreData = async () => {
        const { data: cloudData, error } = await supabase
          .from('kullanicilar')
          .select('puan, seri, seri_dondurma, avatar, kazanilan_basarimlar')
          .eq('id', userId)
          .maybeSingle();

        if (error || !cloudData) {
          console.error("Bulut çekirdek verileri çekilemedi, lokal veriler kullanılacak:", error);
          setTotalPoints(storage.loadPoints());
          setStreak(storage.loadStreak());
          setStreakFreezes(storage.loadStreakFreezes());
          setUserAvatars(storage.loadUserAvatars());
          setAchievements(storage.loadAchievements().length > 0 ? storage.loadAchievements() : initialAchievementsData);
        } else {
          setTotalPoints(cloudData.puan ?? 0);
          setStreak(cloudData.seri ?? 0);
          setStreakFreezes(cloudData.seri_dondurma ?? 0);
          try {
            setUserAvatars(typeof cloudData.avatar === 'string' ? JSON.parse(cloudData.avatar) : (cloudData.avatar || storage.loadUserAvatars()));
          } catch (e) {
            setUserAvatars(storage.loadUserAvatars());
          }
          const unlockedAchievementIds = new Set(cloudData.kazanilan_basarimlar || []);
          const syncedAchievements = initialAchievementsData.map(ach => ({ ...ach, unlocked: unlockedAchievementIds.has(ach.id) }));
          setAchievements(syncedAchievements);
        }
        setIsCloudDataLoaded(true);
      };
      fetchCoreData();
    } else {
      setIsCloudDataLoaded(true);
    }
  }, [userId]);

  useEffect(() => {
    const today = new Date();
    const todayStr = today.toLocaleDateString();
    if (lastActiveDate && lastActiveDate !== todayStr) {
      const lastDate = new Date(lastActiveDate);
      const yesterday = new Date();
      yesterday.setDate(today.getDate() - 1);
      const yesterdayStart = new Date(yesterday.setHours(0, 0, 0, 0));

      if (lastDate.getTime() < yesterdayStart.getTime()) {
        if (streakFreezes > 0) {
          setStreakFreezes(prev => prev - 1);
          storage.saveLastActiveDate(yesterday.toLocaleDateString());
          toast.info("Bir gün ara verdin ama Seri Dondurma serini kurtardı! ❄️");
        } else {
          setStreak(0);
          playFailSound(isMuted);
        }
      }
    }
  }, [lastActiveDate, isMuted, streakFreezes]);

  useEffect(() => {
    if (!isInitialized || achievements.length === 0) return;
    const unlockedAchievements = achievements.filter(a => a.unlocked);
    const avatarsToUnlock = allAvatars.filter(avatar => 
      avatar.unlockMethod === 'achievement' &&
      unlockedAchievements.some(ach => ach.id === avatar.achievementId)
    );
    const newAvatarIds = avatarsToUnlock.map(avatar => avatar.id);
    if (newAvatarIds.length > 0) {
      setUserAvatars(currentAvatars => {
        const allUnlockedIds = [...new Set([...currentAvatars.unlocked, ...newAvatarIds])];
        if (allUnlockedIds.length > currentAvatars.unlocked.length) {
          toast.success("Yeni bir avatar kazandın! 🥳");
          return { ...currentAvatars, unlocked: allUnlockedIds };
        }
        return currentAvatars;
      });
    }
  }, [achievements, isInitialized]);

  useEffect(() => { if (isInitialized) { storage.savePoints(totalPoints); updateUserCloudData({ puan: totalPoints }); } }, [totalPoints, isInitialized]);
  useEffect(() => { if (isInitialized) { storage.saveStreak(streak); updateUserCloudData({ seri: streak }); } }, [streak, isInitialized]);
  useEffect(() => { if (isInitialized) { storage.saveStreakFreezes(streakFreezes); updateUserCloudData({ seri_dondurma: streakFreezes }); } }, [streakFreezes, isInitialized]);
  useEffect(() => { if (isInitialized && userAvatars) { storage.saveUserAvatars(userAvatars); updateUserCloudData({ avatar: JSON.stringify(userAvatars) }); } }, [userAvatars, isInitialized]);
  useEffect(() => {
    if (isInitialized && achievements.length > 0) {
      storage.saveAchievements(achievements);
      const unlockedIds = achievements.filter(a => a.unlocked).map(a => a.id);
      if (unlockedIds.length > 0) updateUserCloudData({ kazanilan_basarimlar: unlockedIds });
    }
  }, [achievements, isInitialized]);

  const handleBuyStreakFreeze = () => {
    const price = 200;
    if (totalPoints >= price) {
      setTotalPoints(prev => prev - price);
      setStreakFreezes(prev => prev + 1);
      playPurchaseSound(isMuted);
      toast.success("Seri Dondurma satın alındı! ❄️");
    } else {
      toast.error("Yetersiz puan!");
    }
  };

  const handleBuyAvatar = (avatarId: string) => {
    const avatar = allAvatars.find(a => a.id === avatarId);
    if (!avatar || avatar.unlockMethod !== 'purchase') return;
    const price = avatar.price || 0;
    if (totalPoints >= price && !(userAvatars?.unlocked || []).includes(avatarId)) {
      setTotalPoints(prev => prev - price);
      setUserAvatars(prev => ({ ...prev, unlocked: [...(prev?.unlocked || []), avatarId] }));
      toast.success(`${avatar.name} avatarı satın alındı!`);
      playPurchaseSound(isMuted);
    } else {
      toast.error("Yetersiz puan veya bu avatara zaten sahipsin.");
    }
  };

  const handleSetAvatar = (avatarId: string) => {
    if ((userAvatars?.unlocked || []).includes(avatarId)) {
      setUserAvatars(prev => ({ ...prev, current: avatarId }));
      toast.success("Avatarın değiştirildi!");
      playConfirmSound(isMuted);
    }
  };

  const checkAchievements = (subjects: Subject[], trigger: { type: 'quiz' | 'questions' | 'english_unit', data?: any }) => {
    const locked = achievements.filter(a => !a.unlocked);
    if (locked.length === 0) return;

    const totalQuestions = subjects.reduce((sum, s) => sum + s.correct + s.incorrect, 0);
    let newAchievementsUnlocked = false;
    const now = new Date();

    const updatedAchievements = achievements.map(ach => {
      if (ach.unlocked) return ach;
      let conditionMet = false;

      switch (ach.category) {
        case 'questions':
          if (ach.requiredQuestions && totalQuestions >= ach.requiredQuestions) conditionMet = true;
          break;
        case 'streak':
          if (ach.requiredQuestions && streak >= ach.requiredQuestions) conditionMet = true;
          break;
        case 'subject':
          const subjectData = subjects.find(s => s.id === ach.requiredSubjectId);
          if (subjectData && ach.requiredQuestions && (subjectData.correct + subjectData.incorrect) >= ach.requiredQuestions) {
            conditionMet = true;
          }
          break;
      }

      if (trigger.type === 'quiz') {
        const quizResult: {correct: number, incorrect: number} = trigger.data.quizResult;
        
        if (ach.id === 'perfect-performance' && quizResult.incorrect === 0) conditionMet = true;
        if (ach.id === 'night-owl' && now.getHours() < 5) conditionMet = true;
        if (ach.id === 'early-bird' && now.getHours() >= 5 && now.getHours() < 7) conditionMet = true;
        
        const day = now.getDay();
        if(ach.id === 'weekend-warrior' && (day === 0 || day === 6)) {
          // Bu başarımı daha anlamlı kılmak için state'e hafta sonu çözülen günleri ekleyebiliriz.
        }
      }
      
      if (trigger.type === 'english_unit') {
        if (ach.id === 'english-unit-unlocked') conditionMet = true;
      }
      
      if (conditionMet) {
        newAchievementsUnlocked = true;
        toast.info(`Başarım Kazanıldı: ${ach.title}`);
        return { ...ach, unlocked: true, unlockedAt: new Date() };
      }
      return ach;
    });

    if (newAchievementsUnlocked) {
      setAchievements(updatedAchievements);
    }
  };

  return {
    totalPoints, setTotalPoints,
    streak, setStreak,
    streakFreezes,
    achievements,
    userAvatars,
    handleBuyStreakFreeze,
    handleBuyAvatar,
    handleSetAvatar,
    checkAchievements
  };
};