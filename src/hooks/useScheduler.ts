// src/hooks/useScheduler.ts
import { useState, useEffect } from 'react';
import { storage, NotificationSettings } from '@/utils/storage';
import { supabase } from '@/supabaseClient';
import { toast } from 'sonner';
import { ManualSchedule, CustomStudyPlan, StudyPlanEntry } from '@/types';
import { LocalNotifications } from '@capacitor/local-notifications';
import { subjects as allSubjectsData } from '@/data/subjects';

export const useScheduler = (isInitialized: boolean) => {
  const [notificationSettings, setNotificationSettings] = useState<NotificationSettings>(storage.loadNotificationSettings());
  const [manualSchedule, setManualSchedule] = useState<ManualSchedule | null>(storage.loadManualSchedule());
  const [customPlan, setCustomPlan] = useState<CustomStudyPlan | null>(storage.loadCustomStudyPlan());
  const userId = localStorage.getItem('lgs_app_user_id');

  const updateUserCloudData = async (dataToUpdate: object) => {
    if (!userId || !isInitialized) return;
    const { error } = await supabase.from('kullanicilar').update(dataToUpdate).eq('id', userId);
    if (error) console.error("Bulut planlama verisi güncellenirken hata oluştu:", error);
  };
  
  useEffect(() => {
    if(userId) {
       supabase
        .from('kullanicilar')
        .select('bildirim_ayarlari, calisma_programi')
        .eq('id', userId)
        .maybeSingle()
        .then(({ data }) => {
          if(data) {
            setNotificationSettings(data.bildirim_ayarlari || storage.loadNotificationSettings());
            setCustomPlan(data.calisma_programi || storage.loadCustomStudyPlan());
          }
        });
    }
  }, [userId]);

  useEffect(() => { if (isInitialized) { storage.saveNotificationSettings(notificationSettings); updateUserCloudData({ bildirim_ayarlari: notificationSettings }); } }, [notificationSettings, isInitialized]);
  useEffect(() => { if (isInitialized) { storage.saveCustomStudyPlan(customPlan); updateUserCloudData({ calisma_programi: customPlan }); } }, [customPlan, isInitialized]);

  const handleUpdateNotificationSettings = (settings: NotificationSettings) => setNotificationSettings(settings);
  
  const handleUpdateManualSchedule = (schedule: ManualSchedule) => {
    setManualSchedule(schedule);
    storage.saveManualSchedule(schedule);
  };
  
  const getSubjectName = (subjectId: string) => {
    return allSubjectsData.find(s => s.id === subjectId)?.name || subjectId;
  };

  const handleAddPlanEntry = async (newPlanData: Omit<StudyPlanEntry, 'id' | 'notificationId'>) => {
    const notificationId = Date.now();
    const newEntry: StudyPlanEntry = { ...newPlanData, id: notificationId.toString(), notificationId };
    
    if (notificationSettings.studyPlanReminder.enabled) {
      try {
        const weekDaysMap: { [key: string]: number } = { "Pazartesi": 1, "Salı": 2, "Çarşamba": 3, "Perşembe": 4, "Cuma": 5, "Cumartesi": 6, "Pazar": 0 };
        const today = new Date();
        const currentDayIndex = today.getDay();
        const targetDayIndex = weekDaysMap[newEntry.day];
        
        let dayDifference = targetDayIndex - currentDayIndex;
        if (dayDifference < 0) { dayDifference += 7; }
        
        const [hour, minute] = newEntry.timeRange.split(' - ')[0].split(':').map(Number);
        const scheduleDate = new Date();
        scheduleDate.setDate(today.getDate() + dayDifference);
        scheduleDate.setHours(hour, minute, 0, 0);

        if (dayDifference === 0 && scheduleDate.getTime() < today.getTime()) {
            scheduleDate.setDate(scheduleDate.getDate() + 7);
        }

        const reminderTime = notificationSettings.studyPlanReminder.minutesBefore * 60000;
        const reminderDate = new Date(scheduleDate.getTime() - reminderTime);

        if (reminderDate.getTime() > new Date().getTime()) {
          await LocalNotifications.schedule({
            notifications: [{
              id: notificationId,
              title: "🔔 Çalışma Zamanı!",
              body: `${getSubjectName(newEntry.subjectId)} etkinliğin ${notificationSettings.studyPlanReminder.minutesBefore} dakika sonra başlıyor.`,
              schedule: { at: reminderDate },
            }]
          });
          toast.success("Hatırlatıcı başarıyla kuruldu!");
        } else {
          toast.warning("Hatırlatıcı geçmiş bir zaman için kurulamaz.");
        }
      } catch (e) { 
        console.error("Bildirim hatası:", e); 
        toast.error("Hatırlatıcı kurulamadı."); 
      }
    }
    setCustomPlan(prevPlan => {
      const updatedPlan = { ...prevPlan };
      if (!updatedPlan[newEntry.day]) { updatedPlan[newEntry.day] = []; }
      updatedPlan[newEntry.day].push(newEntry);
      return updatedPlan;
    });
  };
  
  const handleRemovePlanEntry = async (planId: string) => {
    let notificationIdToCancel: number | undefined;
    setCustomPlan(prevPlan => {
      if (!prevPlan) return null;
      const updatedPlan = { ...prevPlan };
      for (const day in updatedPlan) {
        const entryToRemove = updatedPlan[day].find(entry => entry.id === planId);
        if(entryToRemove) { notificationIdToCancel = entryToRemove.notificationId; }
        updatedPlan[day] = updatedPlan[day].filter(entry => entry.id !== planId);
        if (updatedPlan[day].length === 0) { delete updatedPlan[day]; }
      }
      return updatedPlan;
    });
    if (notificationIdToCancel) {
      await LocalNotifications.cancel({ notifications: [{ id: notificationIdToCancel }] });
    }
    toast.info("Programdan silindi ve hatırlatıcı iptal edildi.");
  };

  return {
    notificationSettings,
    manualSchedule,
    customPlan,
    handleUpdateNotificationSettings,
    handleUpdateManualSchedule,
    handleAddPlanEntry,
    handleRemovePlanEntry
  };
};