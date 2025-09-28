import { useState, useEffect } from "react";
import { Question, Subject } from "@/types";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { X, CheckCircle, XCircle, Clock, ArrowRight } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { playYaySound, playFailSound } from "@/utils/sounds";
import { useAppContext } from "@/pages/AppLayout";

export interface SolvedStat {
  subjectId: string;
  topic: string;
  correct: boolean;
}

interface QuestionSolverProps {
  questions: Question[];
  subjects: Subject[];
  onFinish: (correctlySolved: SolvedStat[]) => void;
  onClose: () => void;
}

export default function QuestionSolver({ questions, subjects, onFinish, onClose }: QuestionSolverProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [solvedStats, setSolvedStats] = useState<SolvedStat[]>([]);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isFinished, setIsFinished] = useState(false);
  const [showExplanationModal, setShowExplanationModal] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  
  const { isMuted } = useAppContext();

  useEffect(() => {
    if (showResult || isFinished) return;
    
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleAnswerClick(-1);
          return 30;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentQuestionIndex, showResult, isFinished]);

  useEffect(() => {
    setTimeLeft(30);
  }, [currentQuestionIndex]);
  
  const handleOpenModal = (isCorrect: boolean) => {
    const stat: SolvedStat = {
      subjectId: currentQuestion.subjectId,
      topic: currentQuestion.topic,
      correct: isCorrect,
    };
    setSolvedStats(prev => [...prev, stat]);

    if (isCorrect) {
      playYaySound(isMuted);
    } else {
      playFailSound(isMuted);
    }

    setShowResult(true);
    setShowExplanationModal(true);
  };

  const getSubjectName = (subjectId: string) => {
    const subject = subjects.find(s => s.id === subjectId);
    return subject?.name || subjectId;
  };

  const handleAnswerClick = (answerIndex: number) => {
    if (showResult) return;
    setSelectedAnswer(answerIndex);
    handleOpenModal(answerIndex === currentQuestion.correctAnswer);
  };

  const handleNext = () => {
    setShowExplanationModal(false);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setIsFinished(true);
    }
  };

  const handleFinish = () => {
    const correctStats = solvedStats.filter(stat => stat.correct);
    onFinish(correctStats);
  };

  if (isFinished) {
    const correctCount = solvedStats.filter(stat => stat.correct).length;
    const accuracy = Math.round((correctCount / questions.length) * 100);

    return (
      <div className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl shadow-elegant animate-bounce-in">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">
              Quiz Tamamlandı! 🎉
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-success/10 rounded-lg">
                <p className="text-3xl font-bold text-success">{correctCount}</p>
                <p className="text-sm text-muted-foreground">Doğru Cevap</p>
              </div>
              <div className="text-center p-4 bg-destructive/10 rounded-lg">
                <p className="text-3xl font-bold text-destructive">{questions.length - correctCount}</p>
                <p className="text-sm text-muted-foreground">Yanlış Cevap</p>
              </div>
              <div className="text-center p-4 bg-warning/10 rounded-lg">
                <p className="text-3xl font-bold text-warning">%{accuracy}</p>
                <p className="text-sm text-muted-foreground">Başarı Oranı</p>
              </div>
            </div>

            <div className="text-center space-y-2">
              {accuracy >= 80 && (
                <Badge variant="outline" className="gradient-success text-success-foreground border-0 text-lg px-4 py-2">
                  Mükemmel! 🏆
                </Badge>
              )}
              {accuracy >= 60 && accuracy < 80 && (
                <Badge variant="outline" className="gradient-warning text-warning-foreground border-0 text-lg px-4 py-2">
                  İyi iş! 👏
                </Badge>
              )}
              {accuracy < 60 && (
                <Badge variant="outline" className="bg-secondary text-secondary-foreground text-lg px-4 py-2">
                  Daha çok çalışmalısın! 💪
                </Badge>
              )}
            </div>

            <Button variant="hero" size="lg" className="w-full" onClick={handleFinish}>
              Devam Et
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!currentQuestion) return null;
  const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

  return (
    <div className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-start justify-center p-4 md:pt-12">
      <Card className="w-full max-w-4xl shadow-elegant animate-slide-up">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="bg-primary/10 text-primary">
                  {getSubjectName(currentQuestion.subjectId)}
                </Badge>
                <Badge variant="outline" className="bg-secondary/10 text-secondary-foreground">
                  {currentQuestion.topic}
                </Badge>
                <Badge variant="outline" className={`
                  ${currentQuestion.difficulty === 'easy' ? 'bg-success/10 text-success' : ''}
                  ${currentQuestion.difficulty === 'medium' ? 'bg-warning/10 text-warning' : ''}
                  ${currentQuestion.difficulty === 'hard' ? 'bg-destructive/10 text-destructive' : ''}
                `}>
                  {currentQuestion.difficulty === 'easy' ? 'Kolay' : 
                   currentQuestion.difficulty === 'medium' ? 'Orta' : 'Zor'}
                </Badge>
              </div>
              <CardTitle className="text-xl">
                Soru {currentQuestionIndex + 1} / {questions.length}
              </CardTitle>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Clock className={`h-5 w-5 ${timeLeft <= 10 ? 'text-destructive animate-pulse' : 'text-warning'}`} />
                <span className={`font-bold ${timeLeft <= 10 ? 'text-destructive' : 'text-warning'}`}>
                  {timeLeft}s
                </span>
              </div>
              <Button variant="ghost" size="icon" onClick={onClose}>
                <X className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <Progress value={progress} className="h-2" />
        </CardHeader>
        
        {/* Scrollable CardContent */}
        <CardContent className="space-y-6 px-6 py-4 max-h-[75vh] overflow-y-auto">
          <div className="bg-muted/30 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              {currentQuestion.question}
            </h3>
          </div>

          <div className="grid gap-3">
            {currentQuestion.options.map((option, index) => {
              let buttonVariant: "outline" | "success" | "destructive" = "outline";
              let extraClasses = "";

              if (showResult) {
                if (index === currentQuestion.correctAnswer) {
                  buttonVariant = "success";
                  extraClasses = "animate-pulse-glow";
                } else if (index === selectedAnswer && selectedAnswer !== currentQuestion.correctAnswer) {
                  buttonVariant = "destructive";
                }
              } else if (selectedAnswer === index) {
                extraClasses = "ring-2 ring-primary ring-offset-2";
              }

              return (
                <Button
                  key={index}
                  variant={buttonVariant}
                  className={`h-auto p-4 text-left justify-start text-wrap transition-all duration-300 ${extraClasses}`}
                  onClick={() => handleAnswerClick(index)}
                  disabled={showResult}
                >
                  <div className="flex items-center gap-3 w-full">
                    <span className="font-bold text-lg min-w-[32px] h-8 rounded-full bg-muted flex items-center justify-center">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className="flex-1 text-base text-wrap">{option}</span>
                    {showResult && index === currentQuestion.correctAnswer && (
                      <CheckCircle className="h-5 w-5 text-success-foreground" />
                    )}
                    {showResult && index === selectedAnswer && selectedAnswer !== currentQuestion.correctAnswer && (
                      <XCircle className="h-5 w-5 text-destructive-foreground" />
                    )}
                  </div>
                </Button>
              );
            })}
          </div>
        </CardContent>
      </Card>
      {/* Explanation Modal */}
      {showExplanationModal && (
        <Dialog open={showExplanationModal} onOpenChange={setShowExplanationModal}>
          <DialogContent className="max-w-md animate-slide-up-fade">
            <DialogHeader>
              <DialogTitle className={`text-xl ${isCorrect ? 'text-success' : 'text-destructive'}`}>
                {isCorrect ? 'Doğru!' : 'Yanlış!'}
              </DialogTitle>
              {currentQuestion.explanation && (
                <DialogDescription>
                  {currentQuestion.explanation}
                </DialogDescription>
              )}
            </DialogHeader>
            <Button onClick={handleNext} className="mt-4 w-full">
              {currentQuestionIndex < questions.length - 1 ? 'İleri' : 'Bitir'}
            </Button>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}