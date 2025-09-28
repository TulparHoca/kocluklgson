// src/hooks/useStudyData.ts
import { useState, useEffect } from 'react';
import { storage } from '@/utils/storage';
import { supabase } from '@/supabaseClient';
import { toast } from 'sonner';
import { Subject, StudySession, SolvedStat } from '@/types';
import { subjects as initialSubjects } from '@/data/subjects';
import { playSuccessSound } from '@/utils/sounds';

type QuizCompletionResult = {
  correct: number;
  incorrect: number;
};

export const useStudyData = (
  isInitialized: boolean, 
  isMuted: boolean, 
  onQuizCompleted: (result: QuizCompletionResult, newDailySolvedCount: number) => void
) => {
  const [subjects, setSubjects] = useState<Subject[]>(initialSubjects);
  const [sessions, setSessions] = useState<StudySession[]>([]);
  const [dailySolvedSubjects, setDailySolvedSubjects] = useState<string[]>([]);
  const [lastActiveDate, setLastActiveDate] = useState<string | null>(null);
  const userId = localStorage.getItem('lgs_app_user_id');

  useEffect(() => {
    const todayStr = new Date().toLocaleDateString();
    setDailySolvedSubjects(storage.loadDailySolvedSubjects(todayStr));
    setLastActiveDate(storage.loadLastActiveDate());

    if (lastActiveDate && lastActiveDate !== todayStr) {
      storage.clearDailySolvedSubjects();
      setDailySolvedSubjects([]);
    }

    if(userId) {
      const fetchStudyData = async () => {
        const { data: solvedData, error } = await supabase
          .from('cozulen_sorular')
          .select('id, ders_id, dogru_sayisi, yanlis_sayisi, konu, eklenme_zamani')
          .eq('kullanici_id', userId);

        if (error) {
          console.error("Çözülen soru verileri çekilemedi:", error);
          setSubjects(storage.loadSubjects().length > 0 ? storage.loadSubjects() : initialSubjects);
          setSessions(storage.loadSessions());
        } else if (solvedData) {
          const syncedSubjects = JSON.parse(JSON.stringify(initialSubjects));
          const syncedSessions: StudySession[] = [];
          solvedData.forEach(solved => {
            const subject = syncedSubjects.find((s: Subject) => s.id === solved.ders_id);
            if (subject) {
              subject.correct += solved.dogru_sayisi;
              subject.incorrect += solved.yanlis_sayisi;
              if (solved.konu && !subject.topics.includes(solved.konu)) {
                subject.topics.push(solved.konu);
              }
            }
            syncedSessions.push({
              id: solved.id.toString(),
              subjectId: solved.ders_id,
              correctCount: solved.dogru_sayisi,
              incorrectCount: solved.yanlis_sayisi,
              questionsCompleted: solved.dogru_sayisi + solved.yanlis_sayisi,
              topic: solved.konu,
              date: new Date(solved.eklenme_zamani || Date.now()),
              duration: 0,
            });
          });
          setSubjects(syncedSubjects);
          setSessions(syncedSessions);
        }
      };
      fetchStudyData();
    }
  }, [userId, lastActiveDate]);
  
  useEffect(() => { if (isInitialized) storage.saveSubjects(subjects); }, [subjects, isInitialized]);
  useEffect(() => { if (isInitialized) storage.saveSessions(sessions); }, [sessions, isInitialized]);
  useEffect(() => { if (isInitialized && lastActiveDate) storage.saveLastActiveDate(lastActiveDate); }, [lastActiveDate, isInitialized]);
  useEffect(() => { storage.saveDailySolvedSubjects(dailySolvedSubjects); }, [dailySolvedSubjects]);

  const handleAddQuestions = async (subjectId: string, counts: { correct: number, incorrect: number }, topic: string) => {
    const { correct, incorrect } = counts;
    const newSession: StudySession = {
      id: Date.now().toString(), subjectId, correctCount: correct, incorrectCount: incorrect,
      questionsCompleted: correct + incorrect, topic, date: new Date(), duration: 0,
    };
    setSessions(prev => [...prev, newSession]);
    setSubjects(prev => prev.map(s => s.id === subjectId ? { ...s, correct: s.correct + correct, incorrect: s.incorrect + incorrect, topics: [...new Set([...s.topics, topic])] } : s));
    toast.success(`${correct + incorrect} soru eklendi! ✨`);
    playSuccessSound(isMuted);
    
    if (userId) {
      await supabase.from('cozulen_sorular').insert({ kullanici_id: userId, ders_id: subjectId, dogru_sayisi: correct, yanlis_sayisi: incorrect, konu: topic });
    }
  };

  const handleQuizCompletion = async (correctlySolved: SolvedStat[], subjectId: string) => {
    const todayStr = new Date().toLocaleDateString();
    if (dailySolvedSubjects.includes(subjectId)) return;
    
    const newDailySolved = [...dailySolvedSubjects, subjectId];
    setDailySolvedSubjects(newDailySolved);
    
    const correctCount = correctlySolved.length;
    const incorrectCount = 6 - correctCount;

    setSubjects(prev => prev.map(s => s.id === subjectId ? { ...s, correct: s.correct + correctCount, incorrect: s.incorrect + incorrectCount } : s));
    const newSession: StudySession = {
      id: Date.now().toString(), subjectId, correctCount, incorrectCount, questionsCompleted: 6,
      topic: "Günlük Test", date: new Date(), duration: 0,
    };
    setSessions(prev => [...prev, newSession]);
    setLastActiveDate(todayStr);
    
    onQuizCompleted({ correct: correctCount, incorrect: incorrectCount }, newDailySolved.length);

    if (userId) {
      await supabase.from('cozulen_sorular').insert({ kullanici_id: userId, ders_id: subjectId, dogru_sayisi: correctCount, yanlis_sayisi: incorrectCount, konu: "Günlük Test" });
    }
  };

  return {
    subjects,
    sessions,
    dailySolvedSubjects,
    lastActiveDate,
    setLastActiveDate,
    handleAddQuestions,
    handleQuizCompletion
  };
};