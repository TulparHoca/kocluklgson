import { useState, useMemo } from 'react';
import { Subject, StudySession } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown, BarChart3, TrendingUp, TrendingDown } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface StatisticsProps {
  subjects: Subject[];
  sessions: StudySession[];
}

export default function Statistics({ subjects, sessions }: StatisticsProps) {
  // =================================================================
  // KONTROL NOKTASI: Bileşene gelen verileri kontrol et
  console.log("Statistics bileşenine gelen 'subjects':", subjects);
  console.log("Statistics bileşenine gelen 'sessions':", sessions);
  // =================================================================

  const [openSubjectId, setOpenSubjectId] = useState<string | null>(null);

  const getTopicStats = useMemo(() => {
    return (subjectId: string, topic: string) => {
      const topicSessions = sessions.filter(s => s.subjectId === subjectId && s.topic === topic);
      const correct = topicSessions.reduce((sum, s) => sum + s.correctCount, 0);
      const incorrect = topicSessions.reduce((sum, s) => sum + s.incorrectCount, 0);
      const total = correct + incorrect;
      const accuracy = total > 0 ? (correct / total) * 100 : 0;
      return { correct, incorrect, total, accuracy };
    };
  }, [sessions]);

  return (
    <div className="space-y-6 animate-slide-up">
      <Card className="shadow-card border border-border/50 dark:border-white/10 bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-white">
            <BarChart3 className="h-5 w-5" /> İstatistikler
          </CardTitle>
          <p className="text-sm text-white/80">Konu bazlı ilerlemeni takip et.</p>
        </CardHeader>
      </Card>
      
      <div className="space-y-4">
        {subjects.map(subject => {
          const totalSolved = subject.correct + subject.incorrect;
          const overallProgress = subject.targetQuestions > 0 ? (totalSolved / subject.targetQuestions) * 100 : 0;

          return (
            <Card
              key={subject.id}
              className="shadow-card border border-border/50 dark:border-white/10 cursor-pointer"
              onClick={() => setOpenSubjectId(openSubjectId === subject.id ? null : subject.id)}
            >
              <CardHeader className="py-4 px-6 flex flex-row items-center justify-between">
                <div className="flex flex-col flex-1 gap-2">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{subject.icon}</div>
                    <div>
                      <h3 className="font-bold text-lg">{subject.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        Toplam Soru: {totalSolved} / {subject.targetQuestions}
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 w-full">
                    <Progress 
                      value={overallProgress} 
                      className={cn("h-2", {
                        "bg-primary": subject.color === "primary",
                        "bg-success": subject.color === "success",
                        "bg-warning": subject.color === "warning"
                      })}
                    />
                  </div>
                </div>
                <ChevronDown
                  className={cn(
                    `h-5 w-5 transition-transform duration-300`, 
                    openSubjectId === subject.id ? 'rotate-180' : ''
                  )}
                />
              </CardHeader>
              {openSubjectId === subject.id && (
                <CardContent className="px-6 pb-6 space-y-4">
                  <hr className="border-t border-border/50" />
                  <h4 className="font-semibold text-foreground">Konulara Göre İstatistikler</h4>
                  <div className="space-y-3">
                    {subject.topics.map(topic => {
                      const stats = getTopicStats(subject.id, topic);
                      const progressValue = stats.total > 0 ? (stats.correct / stats.total) * 100 : 0;
                      return (
                        <div key={topic} className="flex flex-col gap-2 p-3 bg-muted/30 rounded-lg">
                          <div className="flex justify-between items-center text-sm">
                            <span className="font-medium">{topic}</span>
                            <span className="font-semibold">%{Math.round(progressValue)}</span>
                          </div>
                          <Progress value={progressValue} className={cn("h-2", {
                            "bg-primary": subject.color === "primary",
                            "bg-success": subject.color === "success",
                            "bg-warning": subject.color === "warning"
                          })} />
                          <div className="flex justify-between text-xs text-muted-foreground mt-1">
                            <div className="flex items-center gap-1 text-success">
                              <TrendingUp className="h-3 w-3" /> {stats.correct} Doğru
                            </div>
                            <div className="flex items-center gap-1 text-destructive">
                              <TrendingDown className="h-3 w-3" /> {stats.incorrect} Yanlış
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              )}
            </Card>
          );
        })}
      </div>
    </div>
  );
}