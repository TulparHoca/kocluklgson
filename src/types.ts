import React from 'react';

export type StudyType = 'Konu Tekrarı' |'Test Çözme' | 'Ödev' | 'Diğer';

export interface Subject {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: 'primary' | 'success' | 'warning';
  targetQuestions: number;
  correct: number;
  incorrect: number;
  topics: string[];
}

export interface StudySession {
  id: string;
  subjectId: string;
  duration: number; // in minutes
  questionsCompleted: number;
  correctCount: number;
  incorrectCount: number;
  date: Date;
  topic: string;
}

export interface Question {
  id: string;
  subjectId: string;
  topic: string;
  difficulty: 'easy' | 'medium' | 'hard';
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
  unlockedAt?: Date;
  category: 'questions' | 'subject' | 'streak' | 'special';
  requiredQuestions?: number;
  requiredSubjectId?: string;
  requirement?: string;
}

export interface SolvedStat {
  subjectId: string;
  topic: string;
  correct: boolean;
}

export interface ManualScheduleEntry {
  subject: string;
  teacher: string;
}

export interface ManualSchedule {
  [day: string]: ManualScheduleEntry[];
}

export interface UserAvatars {
  current: string;
  unlocked: string[];
}

export interface LearnedWords {
  known: string[];
  unknown: string[];
}

export interface StudyPlanEntry {
  id: string;
  day: string;
  timeRange: string;
  subjectId: string;
  studyType: StudyType;
  details?: string;
  notificationId?: number;
}

export interface CustomStudyPlan {
  [day: string]: StudyPlanEntry[];
}

export interface DailyWordData {
  id: string;
  unit: number;
  word: string;
  meaning: string;
  example: string;
  exampleMeaning: string;
}

export interface NotificationSettings {
  bagReminder: {
    enabled: boolean;
    hour: number;
    minute: number;
  };
  streakReminder: boolean;
  studyPlanReminder: {
    enabled: boolean;
    minutesBefore: number;
  };
}

export type AppContextType = {
  // useAuth'dan gelenler
  userName: string | null;
  showNameModal: boolean;
  tempName: string;
  setTempName: (value: string) => void;
  className: string;
  setClassName: (value: string) => void;
  coachCode: string;
  setCoachCode: (value: string) => void;
  handleRegistration: () => Promise<void>;

  // useStudyData'dan gelenler
  subjects: Subject[];
  sessions: StudySession[];
  dailySolvedSubjects: string[];
  lastActiveDate: string | null;
  setLastActiveDate: React.Dispatch<React.SetStateAction<string | null>>;
  handleAddQuestions: (subjectId: string, counts: { correct: number; incorrect: number; }, topic: string) => Promise<void>;
  handleQuizCompletion: (correctlySolved: SolvedStat[], subjectId: string) => Promise<void>;

  // useCoreData'dan gelenler
  totalPoints: number;
  setTotalPoints: React.Dispatch<React.SetStateAction<number>>;
  streak: number;
  setStreak: React.Dispatch<React.SetStateAction<number>>;
  streakFreezes: number;
  achievements: Achievement[];
  userAvatars: UserAvatars;
  handleBuyStreakFreeze: () => void;
  handleBuyAvatar: (avatarId: string) => void;
  handleSetAvatar: (avatarId: string) => void;
  checkAchievements: (subjects: Subject[], trigger: { type: 'quiz' | 'questions' | 'english_unit', data?: any }) => void;

  // useScheduler'dan gelenler
  notificationSettings: NotificationSettings;
  manualSchedule: ManualSchedule | null;
  customPlan: CustomStudyPlan | null;
  handleUpdateNotificationSettings: (settings: NotificationSettings) => void;
  handleUpdateManualSchedule: (schedule: ManualSchedule) => void;
  handleAddPlanEntry: (newPlanData: Omit<StudyPlanEntry, 'id' | 'notificationId'>) => Promise<void>;
  handleRemovePlanEntry: (planId: string) => Promise<void>;
  
  // AppLayout'tan gelenler
  isMuted: boolean;
  toggleMute: () => void;
  handleEnglishUnitUnlocked: () => void;
};