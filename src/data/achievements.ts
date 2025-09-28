import { Achievement } from "@/types";

export const achievements: Achievement[] = [
  // --- TOPLAM SORU BAŞARIMLARI (GÜNCELLENDİ) ---
  { 
    id: 'first-question', title: 'İlk Adım', description: 'İlk sorunu çözdün!', icon: '🚀', unlocked: false, category: 'questions', requiredQuestions: 1,
    requirement: 'Toplam 1 soru çözmek'
  },
  { 
    id: 'ten-questions', title: 'Isınma Turları', description: 'Toplam 25 soru çözdün.', icon: '🔥', unlocked: false, category: 'questions', requiredQuestions: 25,
    requirement: 'Toplam 25 soru çözmek'
  },
  { 
    id: 'fifty-questions', title: 'Soru Canavarı', description: 'Toplam 100 soruya ulaştın.', icon: '👾', unlocked: false, category: 'questions', requiredQuestions: 100,
    requirement: 'Toplam 100 soru çözmek'
  },
  { 
    id: 'hundred-questions', title: 'Yüzler Kulübü', description: 'Toplam 250 soruya ulaştın!', icon: '💯', unlocked: false, category: 'questions', requiredQuestions: 250,
    requirement: 'Toplam 250 soru çözmek'
  },
  { 
    id: '250-questions', title: 'Soru Koleksiyoncusu', description: 'Toplam 500 soru çözdün.', icon: '📚', unlocked: false, category: 'questions', requiredQuestions: 500,
    requirement: 'Toplam 500 soru çözmek'
  },
  { 
    id: '500-questions', title: 'Soru Profesörü', description: 'Toplam 1000 soruya ulaştın!', icon: '🎓', unlocked: false, category: 'questions', requiredQuestions: 1000,
    requirement: 'Toplam 1000 soru çözmek'
  },

  // --- DERSE ÖZEL BAŞARIMLAR (GÜNCELLENDİ) ---
  { 
    id: 'math-novice', title: 'Matematik Çırağı', description: 'Matematik dersinden 50 soru çöz.', icon: '🧮', unlocked: false, category: 'subject', requiredSubjectId: 'math', requiredQuestions: 50,
    requirement: 'Matematik dersinden 50 soru çözmek'
  },
  { 
    id: 'science-explorer', title: 'Fen Kaşifi', description: 'Fen Bilimleri dersinden 50 soru çöz.', icon: '🔬', unlocked: false, category: 'subject', requiredSubjectId: 'science', requiredQuestions: 50,
    requirement: 'Fen Bilimleri dersinden 50 soru çözmek'
  },
  { 
    id: 'turkish-master', title: 'Türkçe Virtüözü', description: 'Türkçe dersinden 50 soru çöz.', icon: '✍️', unlocked: false, category: 'subject', requiredSubjectId: 'turkish', requiredQuestions: 50,
    requirement: 'Türkçe dersinden 50 soru çözmek'
  },
  { 
    id: 'english-speaker', title: 'English Speaker', description: 'İngilizce dersinden 50 soru çöz.', icon: '🇬🇧', unlocked: false, category: 'subject', requiredSubjectId: 'english', requiredQuestions: 50,
    requirement: 'İngilizce dersinden 50 soru çözmek'
  },
  { 
    id: 'historian', title: 'Tarihçi', description: 'T.C. İnkılap Tarihi dersinden 50 soru çöz.', icon: '🇹🇷', unlocked: false, category: 'subject', requiredSubjectId: 'revolution', requiredQuestions: 50,
    requirement: 'T.C. İnkılap Tarihi dersinden 50 soru çözmek'
  },
  { 
    id: 'religion-scholar', title: 'Alim', description: 'Din Kültürü dersinden 50 soru çöz.', icon: '🕌', unlocked: false, category: 'subject', requiredSubjectId: 'religion', requiredQuestions: 50,
    requirement: 'Din Kültürü dersinden 50 soru çözmek'
  },
  // İSTEDİĞİNİZ İNGİLİZCE KART BAŞARIMI
  { 
    id: 'english-unit-unlocked', title: 'Yeni Ufuklar', description: 'İngilizce\'de yeni bir ünitenin kilidini açtın!', icon: '🗺️', unlocked: false, category: 'subject', requiredSubjectId: 'english', 
    requirement: "İngilizce kelime kartlarında bir ünitede %90 başarıya ulaşmak" 
  },

  // --- SERİ (STREAK) BAŞARIMLARI (TAM LİSTE) ---
  { 
    id: 'streak-3', title: 'Alışkanlık Başlıyor', description: '3 günlük seriye ulaştın.', icon: '🌱', unlocked: false, category: 'streak', requiredQuestions: 3,
    requirement: '3 günlük seri oluşturmak'
  },
  { 
    id: 'streak-7', title: 'Haftanın Azmi', description: '7 günlük seriye ulaştın. Harika!', icon: '🗓️', unlocked: false, category: 'streak', requiredQuestions: 7,
    requirement: '7 günlük seri oluşturmak'
  },
  { 
    id: 'streak-10', title: 'On Günlük Seri', description: '10 günlük seriye ulaştın.', icon: '🔟', unlocked: false, category: 'streak', requiredQuestions: 10,
    requirement: '10 günlük seri oluşturmak'
  },
  { 
    id: 'streak-15', title: 'On Beş Günlük Seri', description: 'Tam 15 günlük seriye ulaştın!', icon: '💥', unlocked: false, category: 'streak', requiredQuestions: 15,
    requirement: '15 günlük seri oluşturmak'
  },
  { 
    id: 'streak-20', title: 'Yirmi Günlük Efsane', description: '20 günlük seriye ulaştın!', icon: '⚡️', unlocked: false, category: 'streak', requiredQuestions: 20,
    requirement: '20 günlük seri oluşturmak'
  },
  { 
    id: 'streak-30', title: 'Ayın Şampiyonu', description: 'Tam 30 günlük seriye ulaştın!', icon: '👑', unlocked: false, category: 'streak', requiredQuestions: 30,
    requirement: '30 günlük seri oluşturmak'
  },

  // --- ÖZEL BAŞARIMLAR (TAM LİSTE + YENİ EKLENENLER) ---
  { 
    id: 'daily-quiz-champ', title: 'Günün Yıldızı', description: 'Günün LGS sorularını başarıyla tamamladın.', icon: '🌟', unlocked: false, category: 'special',
    requirement: 'Günlük görevi tamamlamak'
  },
  // İSTEDİĞİNİZ YARATICI GÖREVLER
  { 
    id: 'perfect-performance', title: 'Kusursuz Performans', description: 'Bir günlük testi hiç yanlış yapmadan tamamladın.', icon: '🎯', unlocked: false, category: 'special', 
    requirement: 'Bir günlük testi hatasız tamamla' 
  },
  { 
    id: 'weekend-warrior', title: 'Hafta Sonu Savaşçısı', description: 'Aynı hafta sonu hem Cumartesi hem de Pazar günü test çözdün.', icon: '🤺', unlocked: false, category: 'special', 
    requirement: 'Cumartesi ve Pazar test çöz' 
  },
  { 
    id: 'night-owl', title: 'Baykuş', description: 'Gece yarısından sonra test çözdün.', icon: '🦉', unlocked: false, category: 'special', 
    requirement: 'Gizli Görev' 
  },
  { 
    id: 'early-bird', title: 'Erken Kalkan', description: 'Sabah 7\'den önce test çözdün.', icon: '🌅', unlocked: false, category: 'special', 
    requirement: 'Gizli Görev' 
  },
  { 
    id: 'all-subjects', title: 'Tüm Derslerde Uzman', description: 'Tüm derslerden 250 soru çözdün.', icon: '🎯', unlocked: false, category: 'special', 
    requirement: 'Her dersten 250 soru çözmek'
  },
  { 
    id: 'daily-quiz-10', title: '10 Günlük Görev Serisi', description: '10 gün üst üste günlük görevi tamamladın.', icon: '🥇', unlocked: false, category: 'special', requiredQuestions: 10,
    requirement: '10 gün üst üste günlük görevi tamamlamak'
  },
  { 
    id: 'daily-quiz-15', title: '15 Günlük Görev Serisi', description: '15 gün üst üste günlük görevi tamamladın.', icon: '💎', unlocked: false, category: 'special', requiredQuestions: 15,
    requirement: '15 gün üst üste günlük görevi tamamlamak'
  },
  { 
    id: 'daily-quiz-20', title: '20 Günlük Görev Serisi', description: '20 gün üst üste günlük görevi tamamladın.', icon: '🔥', unlocked: false, category: 'special', requiredQuestions: 20,
    requirement: '20 gün üst üste günlük görevi tamamlamak'
  },
  { 
    id: 'daily-quiz-100', title: '100 Günlük Görev Serisi', description: '100 gün üst üste günlük görevi tamamladın.', icon: '🏆', unlocked: false, category: 'special', requiredQuestions: 25,
    requirement: '100 gün üst üste günlük görevi tamamlamak'
  },
  { 
    id: 'daily-quiz-50', title: '50 Günlük Görev Serisi', description: '50 gün üst üste günlük görevi tamamladın.', icon: '🏅', unlocked: false, category: 'special', requiredQuestions: 30,
    requirement: '50 gün üst üste günlük görevi tamamlamak'
  },
];