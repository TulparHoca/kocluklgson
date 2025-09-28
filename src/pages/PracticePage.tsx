import { useState } from "react";
import { Question } from "@/types";
import { questions as allQuestions } from "@/data/questions";
import { useAppContext } from "./AppLayout";
import QuestionSolver, { SolvedStat } from "@/components/QuestionSolver";
import DailyQuestions from "@/components/DailyQuestions";
import MotivationalQuote from "@/components/MotivationalQuote";
import WordSwiper from "@/components/WordSwiper";
import { Stopwatch } from "@/components/Stopwatch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PracticePage = () => {
  const [dailyQuestions, setDailyQuestions] = useState<Question[]>([]);
  const [isSolving, setIsSolving] = useState(false);
  const [selectedSubjectId, setSelectedSubjectId] = useState<string | null>(null);
  
  const { handleQuizCompletion, subjects, dailySolvedSubjects } = useAppContext();

  const handleSelectSubject = (subjectId: string) => {
    const questionsForSubject = allQuestions.filter(q => q.subjectId === subjectId);
    const shuffledQuestions = [...questionsForSubject].sort(() => 0.5 - Math.random()).slice(0, 6);
    setDailyQuestions(shuffledQuestions);
    setSelectedSubjectId(subjectId);
    setIsSolving(true);
  };
  
  const handleFinishSolving = (correctlySolved: SolvedStat[]) => {
    setIsSolving(false);
    if (selectedSubjectId) {
      handleQuizCompletion(correctlySolved, selectedSubjectId);
    }
    setSelectedSubjectId(null);
  };
  
  const availableSubjects = subjects.filter(s => 
    (s.id === 'turkish' || s.id === 'math' || s.id === 'science' || s.id === 'religion' || s.id === 'english' || s.id === 'revolution') &&
    !dailySolvedSubjects.includes(s.id)
  );

  if (isSolving) {
    return <QuestionSolver questions={dailyQuestions} subjects={subjects} onFinish={handleFinishSolving} onClose={() => setIsSolving(false)} />;
  }

  return (
    <div className="p-4 space-y-6 animate-slide-up">
      <Tabs defaultValue="gunluk-gorev" className="w-full">
        {/* SEKMELER (TABS) */}
        {/* GÜNCELLENDİ: TabsList'in rengi daha belirgin bir hale getirildi */}
        <TabsList className="grid w-full grid-cols-3 bg-primary text-primary-foreground shadow-md">
          <TabsTrigger value="gunluk-gorev">Günlük Görev</TabsTrigger>
          <TabsTrigger value="kelime-ezberle">Kelime Ezberle</TabsTrigger>
          <TabsTrigger value="araclar">Araçlar</TabsTrigger>
        </TabsList>

        {/* GÜNCELLENDİ: Özlü Söz artık tüm sekmelerin altında yer alıyor */}
        <div className="mt-4">
          <MotivationalQuote />
        </div>

        {/* GÜNLÜK GÖREV SEKMESİ İÇERİĞİ */}
        <TabsContent value="gunluk-gorev" className="mt-4 space-y-6">
          <DailyQuestions 
            dailyQuestionsCount={36}
            availableSubjects={availableSubjects} 
            onSelectSubject={handleSelectSubject}
            solvedCount={dailySolvedSubjects.length}
          />
        </TabsContent>

        {/* KELİME EZBERLE SEKMESİ İÇERİĞİ */}
        <TabsContent value="kelime-ezberle" className="mt-4">
          <WordSwiper />
        </TabsContent>

        {/* ARAÇLAR SEKMESİ İÇERİĞİ */}
        <TabsContent value="araclar" className="mt-4">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Stopwatch />
              {/* Buraya gelecekte başka bir araç daha eklenebilir */}
           </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PracticePage;