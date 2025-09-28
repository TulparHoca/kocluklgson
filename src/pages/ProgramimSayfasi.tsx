import { useState, useMemo } from "react";
import { useAppContext } from "./AppLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Plus, Trash2, Pencil } from "lucide-react";
import { AddStudyPlanDialog } from "@/components/AddStudyPlanDialog";
import { cn } from "@/lib/utils";
import { StudyPlanEntry, ManualSchedule } from "@/types";
import { toast } from "sonner";
import { subjects as allSubjects } from '@/data/subjects';
import { emptySchedule } from '@/data/schedule'; 

const weekDays = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma"];
const lessonHours = [1, 2, 3, 4, 5, 6, 7, 8];

export default function ProgramimSayfasi() {
  const { manualSchedule, customPlan, handleUpdateManualSchedule, handleAddPlanEntry, handleRemovePlanEntry } = useAppContext();
  
  const todayIndex = new Date().getDay();
  const todayKey = weekDays[todayIndex - 1] || weekDays[0];
  
  const [selectedDay, setSelectedDay] = useState(todayKey);
  const [isPlanDialogOpen, setIsPlanDialogOpen] = useState(false);
  const [isEditingManual, setIsEditingManual] = useState(false);

  const lessonsForSelectedDay = useMemo(() => {
    const schedule = manualSchedule || emptySchedule;
    return schedule[selectedDay] || [];
  }, [manualSchedule, selectedDay]);
  
  const getSubjectName = (subjectId: string) => {
    return allSubjects.find(s => s.id === subjectId)?.name || subjectId;
  };

  const handleSaveNewPlan = (newPlanData: Omit<StudyPlanEntry, 'id' | 'notificationId'>) => {
    handleAddPlanEntry(newPlanData as any);
    toast.success("Çalışma planına yeni etkinlik eklendi!");
  };

  const handleChangeManual = (
    hourIndex: number,
    field: "subject" | "teacher",
    value: string
  ) => {
    const currentSchedule = manualSchedule || emptySchedule;
    const updatedSchedule = JSON.parse(JSON.stringify(currentSchedule));
    if (!updatedSchedule[selectedDay]) {
      updatedSchedule[selectedDay] = Array(8).fill({ subject: "", teacher: "" });
    }
    updatedSchedule[selectedDay][hourIndex] = { ...updatedSchedule[selectedDay][hourIndex], [field]: value };
    handleUpdateManualSchedule(updatedSchedule);
  };

  const toggleEditManual = () => {
    if (isEditingManual) {
      toast.success("Değişiklikler kaydedildi!");
    }
    setIsEditingManual(!isEditingManual);
  };

  return (
    <div className="p-4">
      <Tabs defaultValue="ders-programim" className="w-full">
        {/* ================================================================= */}
        {/* DEĞİŞİKLİK BURADA: Sekme başlıkları renklendirildi */}
        {/* ================================================================= */}
        <TabsList className="grid w-full grid-cols-2 card-canli gradient-mor metin-beyaz">
          <TabsTrigger value="ders-programim" className="text-white">Ders Programım</TabsTrigger>
          <TabsTrigger value="calisma-planim" className="text-white">Çalışma Planım</TabsTrigger>
        </TabsList>

        {/* DERS PROGRAMIM SEKMESİ */}
        <TabsContent value="ders-programim" className="mt-4">
          <div className="space-y-4">
            <div className="grid grid-cols-5 gap-2">
              {weekDays.map(day => (
                <Button 
                  key={day}
                  onClick={() => setSelectedDay(day)}
                  variant={selectedDay === day ? "default" : "outline"}
                  className={cn(
                    "transition-all duration-300",
                    selectedDay === day && "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg"
                  )}
                >
                  {day.slice(0, 3)}
                </Button>
              ))}
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between px-2">
                  <h2 className="text-xl font-bold">{selectedDay}</h2>
                  <Button onClick={toggleEditManual} variant="outline" size="sm" className="gap-2">
                    <Pencil className="h-4 w-4" />
                    {isEditingManual ? "Kaydet" : "Düzenle"}
                  </Button>
              </div>

              {lessonsForSelectedDay.length > 0 ? (
                lessonsForSelectedDay.map((lesson, index) => (
                  <Card key={index} className="bg-background/80">
                    <CardContent 
                      className={cn(
                        "p-4 flex items-center justify-between",
                        index % 2 === 0 ? "bg-indigo-50 text-indigo-900" : "bg-white text-gray-800",
                        'dark:text-foreground'
                      )}
                    >
                      {isEditingManual ? (
                        <div className="flex w-full items-center gap-2">
                          <span className="text-sm font-bold w-16 dark:text-muted-foreground">{index + 1}. Ders</span>
                          <Input 
                            value={lesson.subject}
                            onChange={(e) => handleChangeManual(index, "subject", e.target.value)}
                            placeholder="Ders"
                            className="flex-1 h-8 dark:text-foreground dark:placeholder-foreground"
                          />
                          <Input 
                            value={lesson.teacher}
                            onChange={(e) => handleChangeManual(index, "teacher", e.target.value)}
                            placeholder="Öğretmen"
                            className="flex-1 h-8 text-xs dark:text-foreground dark:placeholder-foreground"
                          />
                        </div>
                      ) : (
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-bold w-16 dark:text-muted-foreground">{index + 1}. Ders</span>
                          <div>
                            <p className="font-semibold">{lesson.subject || "-"}</p>
                            <p className="text-xs text-muted-foreground">{lesson.teacher}</p>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className="text-center text-muted-foreground py-10">
                  <p>Seçili gün için ders programı bulunmuyor.</p>
                </div>
              )}
            </div>
          </div>
        </TabsContent>

        {/* ÇALIŞMA PLANIM SEKMESİ */}
        <TabsContent value="calisma-planim" className="mt-4 relative min-h-[60vh]">
           <Card className="bg-gradient-to-br from-purple-500 to-indigo-600 text-white">
            <CardHeader>
              <CardTitle>Kişisel Çalışma Planın</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {customPlan && Object.values(customPlan).flat().length > 0 ? (
                Object.entries(customPlan).map(([day, entries]) => (
                  entries.length > 0 && <div key={day}>
                    <h3 className="font-bold mb-2 border-b border-white/20 pb-1">{day}</h3>
                    <div className="space-y-2">
                      {(entries as StudyPlanEntry[]).map(entry => (
                        <div key={entry.id} className="flex items-center justify-between bg-white/10 p-3 rounded-lg">
                          <div>
                            <p className="font-semibold">{getSubjectName(entry.subjectId)} - {entry.studyType}</p>
                            <p className="text-sm text-white/80">{entry.timeRange}</p>
                          </div>
                          <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 hover:text-white" onClick={() => handleRemovePlanEntry(entry.id)}>
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center text-white/80 py-10">
                  <p>Henüz kişisel çalışma planı oluşturmadın.</p>
                  <p className="text-sm">Yeni etkinlik eklemek için (+) butonuna tıkla.</p>
                </div>
              )}
            </CardContent>
          </Card>

          <Button 
            onClick={() => setIsPlanDialogOpen(true)}
            className="absolute bottom-4 right-4 h-14 w-14 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 text-white shadow-lg"
          >
            <Plus className="h-6 w-6" />
          </Button>
        </TabsContent>
      </Tabs>
      
      <AddStudyPlanDialog 
        open={isPlanDialogOpen}
        onOpenChange={setIsPlanDialogOpen}
        onSave={handleSaveNewPlan}
      />
    </div>
  );
}