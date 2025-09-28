// src/utils/storage.ts

import { Subject, StudySession, Achievement, ManualSchedule, UserAvatars, LearnedWords, CustomStudyPlan } from '@/types';
import { supabase } from '@/supabaseClient';

const THEME_KEY = 'lgs_app_theme';
const SUBJECTS_KEY = 'lgs_app_subjects';
const SESSIONS_KEY = 'lgs_app_sessions';
const ACHIEVEMENTS_KEY = 'lgs_app_achievements';
const STREAK_KEY = 'lgs_app_streak';
const USERNAME_KEY = 'lgs_app_username';
const POINTS_KEY = 'lgs_app_points';
const LEARNED_WORDS_KEY = 'lgs_app_learned_words';
const STREAK_FREEZES_KEY = 'lgs_app_streak_freezes';
const LAST_ACTIVE_DATE_KEY = 'lgs_app_last_active_date';
const USER_AVATARS_KEY = 'lgs_app_user_avatars';
const IS_MUTED_KEY = 'lgs_app_is_muted';
const MANUAL_SCHEDULE_KEY = 'lgs_app_manual_schedule';
const CUSTOM_STUDY_PLAN_KEY = 'lgs_app_custom_study_plan';
const DAILY_SOLVED_SUBJECTS_KEY = 'lgs_app_daily_solved_subjects';
const USER_ID_KEY = 'lgs_app_user_id';
const NOTIFICATION_SETTINGS_KEY = 'lgs_app_notification_settings';

export interface NotificationSettings {
  studyPlanReminder: {
    enabled: boolean;
    minutesBefore: number;
  };
  bagReminder: {
    enabled: boolean;
    hour: number;
    minute: number;
  };
  streakReminder: boolean;
}

export const storage = {
  getUserId: async (userName: string, coachEmail: string): Promise<string> => {
    let userId = localStorage.getItem(USER_ID_KEY);
    if (userId) return userId;
    const { data, error } = await supabase
      .from('kullanicilar')
      .insert([{ ad_soyad: userName, koc_eposta: coachEmail }])
      .select('id')
      .single();
    if (error) {
      console.error('Supabase kullanıcı oluşturma hatası:', error);
      throw error;
    }
    if (data && data.id) {
      userId = data.id;
      localStorage.setItem(USER_ID_KEY, userId);
      return userId;
    }
    throw new Error('Yeni kullanıcı ID\'si alınamadı.');
  },

  loadTheme: (): 'light' | 'dark' => (localStorage.getItem(THEME_KEY) as 'light' | 'dark') || 'dark',
  saveTheme: (theme: 'light' | 'dark') => localStorage.setItem(THEME_KEY, theme),

  loadSubjects: (): Subject[] => {
    const data = localStorage.getItem(SUBJECTS_KEY);
    return data ? JSON.parse(data) : [];
  },
  saveSubjects: (subjects: Subject[]) => localStorage.setItem(SUBJECTS_KEY, JSON.stringify(subjects)),

  loadSessions: (): StudySession[] => {
    const data = localStorage.getItem(SESSIONS_KEY);
    if (!data) return [];
    return JSON.parse(data).map((s: any) => ({ ...s, date: new Date(s.date) }));
  },
  saveSessions: (sessions: StudySession[]) => localStorage.setItem(SESSIONS_KEY, JSON.stringify(sessions)),

  loadAchievements: (): Achievement[] => {
    const data = localStorage.getItem(ACHIEVEMENTS_KEY);
    if (!data) return [];
    return JSON.parse(data).map((a: any) => ({ ...a, unlockedAt: a.unlockedAt ? new Date(a.unlockedAt) : undefined }));
  },
  saveAchievements: (achievements: Achievement[]) => localStorage.setItem(ACHIEVEMENTS_KEY, JSON.stringify(achievements)),

  loadStreak: (): number => parseInt(localStorage.getItem(STREAK_KEY) || '0', 10),
  saveStreak: (streak: number) => localStorage.setItem(STREAK_KEY, streak.toString()),

  loadUserName: (): string | null => localStorage.getItem(USERNAME_KEY),
  saveUserName: (name: string) => localStorage.setItem(USERNAME_KEY, name),

  loadPoints: (): number => parseInt(localStorage.getItem(POINTS_KEY) || '0', 10),
  savePoints: (points: number) => localStorage.setItem(POINTS_KEY, points.toString()),

  loadLearnedWords: (): LearnedWords => {
    const data = localStorage.getItem(LEARNED_WORDS_KEY);
    return data ? JSON.parse(data) : { known: [], unknown: [] };
  },
  saveLearnedWords: (words: LearnedWords) => localStorage.setItem(LEARNED_WORDS_KEY, JSON.stringify(words)),

  loadStreakFreezes: (): number => parseInt(localStorage.getItem(STREAK_FREEZES_KEY) || '0', 10),
  saveStreakFreezes: (freezes: number) => localStorage.setItem(STREAK_FREEZES_KEY, freezes.toString()),

  loadLastActiveDate: (): string | null => localStorage.getItem(LAST_ACTIVE_DATE_KEY),
  saveLastActiveDate: (date: string) => localStorage.setItem(LAST_ACTIVE_DATE_KEY, date),

  loadUserAvatars: (): UserAvatars => {
    const data = localStorage.getItem(USER_AVATARS_KEY);
    return data ? JSON.parse(data) : { current: 'default', unlocked: ['default'] };
  },
  saveUserAvatars: (avatars: UserAvatars) => localStorage.setItem(USER_AVATARS_KEY, JSON.stringify(avatars)),

  loadIsMuted: (): boolean => JSON.parse(localStorage.getItem(IS_MUTED_KEY) || 'false'),
  saveIsMuted: (isMuted: boolean) => localStorage.setItem(IS_MUTED_KEY, JSON.stringify(isMuted)),

  loadNotificationSettings: (): NotificationSettings => {
    const data = localStorage.getItem(NOTIFICATION_SETTINGS_KEY);
    const defaults: NotificationSettings = {
      studyPlanReminder: { enabled: true, minutesBefore: 15 },
      bagReminder: { enabled: true, hour: 20, minute: 0 },
      streakReminder: true
    };
    if (data) {
      const parsed = JSON.parse(data);
      return {
        ...defaults,
        ...parsed,
        studyPlanReminder: { ...defaults.studyPlanReminder, ...parsed.studyPlanReminder },
        bagReminder: { ...defaults.bagReminder, ...parsed.bagReminder },
      };
    }
    return defaults;
  },
  saveNotificationSettings: (settings: NotificationSettings) => localStorage.setItem(NOTIFICATION_SETTINGS_KEY, JSON.stringify(settings)),

  saveDailySolvedSubjects: (subjects: string[]) => {
    const today = new Date().toLocaleDateString();
    localStorage.setItem(DAILY_SOLVED_SUBJECTS_KEY, JSON.stringify({ date: today, subjects }));
  },
  loadDailySolvedSubjects: (todayStr: string): string[] => {
    const storedData = localStorage.getItem(DAILY_SOLVED_SUBJECTS_KEY);
    if (storedData) {
      const data = JSON.parse(storedData);
      if (data.date === todayStr) return data.subjects;
    }
    return [];
  },
  clearDailySolvedSubjects: () => localStorage.removeItem(DAILY_SOLVED_SUBJECTS_KEY),

  loadManualSchedule: (): ManualSchedule | null => {
    const data = localStorage.getItem(MANUAL_SCHEDULE_KEY);
    return data ? JSON.parse(data) : null;
  },
  saveManualSchedule: (schedule: ManualSchedule) => localStorage.setItem(MANUAL_SCHEDULE_KEY, JSON.stringify(schedule)),
  removeManualSchedule: () => localStorage.removeItem(MANUAL_SCHEDULE_KEY),

  loadCustomStudyPlan: (): CustomStudyPlan | null => {
    const data = localStorage.getItem(CUSTOM_STUDY_PLAN_KEY);
    return data ? JSON.parse(data) : null;
  },
  saveCustomStudyPlan: (plan: CustomStudyPlan) => localStorage.setItem(CUSTOM_STUDY_PLAN_KEY, JSON.stringify(plan)),
  removeCustomStudyPlan: () => localStorage.removeItem(CUSTOM_STUDY_PLAN_KEY),
};