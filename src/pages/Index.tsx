// src/pages/Index.tsx

import SubjectCard from '@/components/SubjectCard';
import DailyQuote from '@/components/ui/DailyQuote';
import { useAppContext } from '@/pages/AppLayout';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Briefcase } from 'lucide-react';

const Index = () => {
  // Zaman kontrolü için olan useState ve useEffect kaldırıldı.
  // Veriler doğrudan context'ten alınıyor.
  const { subjects, handleAddQuestions, tomorrowSubjects, isEvening } = useAppContext();

  return (
    <div className="space-y-6">
      {/* Yanıp sönen çanta hatırlatma kartı */}
      {/* Koşul, artık doğrudan context'ten gelen 'isEvening'e bağlı */}
      {isEvening && tomorrowSubjects.length > 0 && (
        <div className="animate-pulse">
          <Card className="card-canli gradient-turuncu shadow-lg border-none">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium metin-beyaz">
                Yarınki Derslerin
              </CardTitle>
              <Briefcase className="h-4 w-4 metin-acik-gri" />
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold metin-beyaz">{tomorrowSubjects.join(', ')}</p>
              <p className="text-xs metin-acik-gri">Çantan hazır mı?</p>
            </CardContent>
          </Card>
        </div>
      )}

      <DailyQuote />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {subjects.map((subject) => (
          <SubjectCard 
            key={subject.id} 
            subject={subject} 
            onAddQuestions={handleAddQuestions} 
          />
        ))}
      </div>
    </div>
  );
};

export default Index;