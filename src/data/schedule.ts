// src/data/schedule.ts

export interface Lesson {
  subject: string;
  teacher: string;
}

export interface WeeklySchedule {
  [day: string]: Lesson[];
}

export const scheduleData: WeeklySchedule = {
  Pazartesi: [
    { subject: "DİN", teacher: "ELİF" }, { subject: "DİN", teacher: "ELİF" },
    { subject: "İNG1", teacher: "COŞKUN" }, { subject: "İNG1", teacher: "COŞKUN" },
    { subject: "REH", teacher: "GİZEM" }, { subject: "FEN", teacher: "SERDAR" },
    { subject: "GÖRG. E.", teacher: "GMC" }, { subject: "", teacher: "" },
  ],
  Salı: [
    { subject: "MAT", teacher: "TAMER" }, { subject: "MAT", teacher: "TAMER" },
    { subject: "SİYER", teacher: "ELİF" }, { subject: "SİYER", teacher: "ELİF" },
    { subject: "AHLAK", teacher: "HİLAL K" }, { subject: "İNG1", teacher: "COŞKUN" },
    { subject: "İNG1", teacher: "COŞKUN" }, { subject: "", teacher: "" },
  ],
  Çarşamba: [
    { subject: "TÜRKÇ3", teacher: "ESRA" }, { subject: "TÜRKÇ3", teacher: "ESRA" },
    { subject: "MAT", teacher: "TAMER" }, { subject: "MAT", teacher: "TAMER" },
    { subject: "DİN", teacher: "ELİF" }, { subject: "DİN", teacher: "ELİF" },
    { subject: "İNK", teacher: "O.DAŞ" }, { subject: "İNK", teacher: "O.DAŞ" },
  ],
  Perşembe: [
    { subject: "TÜRKÇ3", teacher: "ESRA" }, { subject: "TÜRKÇ3", teacher: "ESRA" },
    { subject: "BEDEN1", teacher: "ŞEBNEM" }, { subject: "FEN", teacher: "SÜMEYYE" },
    { subject: "FEN", teacher: "SÜMEYYE" }, { subject: "KUR'AN", teacher: "HİLAL K" },
    { subject: "KUR'AN", teacher: "HİLAL K" }, { subject: "", teacher: "" },
  ],
  Cuma: [
    { subject: "FEN", teacher: "SÜMEYYE" }, { subject: "TÜRKÇ3", teacher: "ESRA" },
    { subject: "TÜRKÇ3", teacher: "ESRA" }, { subject: "MAT", teacher: "TAMER" },
    { subject: "MAT", teacher: "TAMER" }, { subject: "MÜZİK", teacher: "M.ÖĞR" },
    { subject: "RESİM", teacher: "ERSİN" }, { subject: "", teacher: "" },
  ],
  Cumartesi: [],
  Pazar: [],
};

// YENİ: emptySchedule sabiti buraya taşındı
export const emptySchedule: WeeklySchedule = {
  Pazartesi: Array(8).fill({ subject: "", teacher: "" }),
  Salı: Array(8).fill({ subject: "", teacher: "" }),
  Çarşamba: Array(8).fill({ subject: "", teacher: "" }),
  Perşembe: Array(8).fill({ subject: "", teacher: "" }),
  Cuma: Array(8).fill({ subject: "", teacher: "" }),
};