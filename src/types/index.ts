// src/types/index.ts

export interface Subject {
  topics: any;
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  targetQuestions: number;
  correct: number;
  incorrect: number;
}

export interface StudySession {
  id: string;
  subjectId: string;
  duration: number; // in minutes
  questionsCompleted: number;
  date: Date;
  topic: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
  unlockedAt?: Date;
  category: 'questions' | 'streak' | 'subject' | 'special'; 
  requiredSubjectId?: string;
  requiredQuestions?: number;
  requirement?: string;
}

export interface Question {
  id: string;
  subjectId: string;
  topic: string;
  difficulty: 'easy' | 'medium' | 'hard';
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export interface ManualSchedule {
  [day: string]: { subject: string; teacher: string; }[];
}

export interface UserAvatars {
  current: string;
  unlocked: string[];
}

export interface LearnedWords {
  known: string[];
  unknown: string[];
}

export interface DailyWordData {
  id: string;
  unit: number;
  word: string;
  meaning: string;
  example: string;
  exampleMeaning: string;
}

// YENİ EKLENEN TİPLER
export type StudyType = 'Konu Tekrarı' | 'Soru Çözme' | 'Test Çözme' | 'Ödev' | 'Diğer';

export interface StudyPlanEntry {
  day: string;
  timeRange: string;
  subjectId: string;
  studyType: StudyType;
  details?: string;
}

export interface CustomStudyPlan {
  [day: string]: StudyPlanEntry[];
}