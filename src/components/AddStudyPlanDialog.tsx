import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { StudyPlanEntry, StudyType } from "@/types";
import { subjects as allSubjects } from '@/data/subjects';
import { PlusCircle } from "lucide-react";

const weekDays = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"];

interface AddStudyPlanDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (newPlan: Omit<StudyPlanEntry, 'id' | 'notificationId'>) => void;
}

export function AddStudyPlanDialog({ open, onOpenChange, onSave }: AddStudyPlanDialogProps) {
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedStartTime, setSelectedStartTime] = useState('');
  const [selectedEndTime, setSelectedEndTime] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedStudyType, setSelectedStudyType] = useState<StudyType | ''>('');
  const [otherStudyType, setOtherStudyType] = useState('');

  const handleSave = () => {
    if (!selectedDay || !selectedStartTime || !selectedEndTime || !selectedSubject || !selectedStudyType) {
      return; // Formun dolu olduğundan emin ol
    }
    
    onSave({
      day: selectedDay,
      timeRange: `${selectedStartTime} - ${selectedEndTime}`,
      subjectId: selectedSubject,
      studyType: selectedStudyType,
      details: selectedStudyType === 'Diğer' ? otherStudyType : undefined
    });
    
    // Formu temizle ve kapat
    onOpenChange(false);
    setSelectedDay('');
    setSelectedStartTime('');
    setSelectedEndTime('');
    setSelectedSubject('');
    setSelectedStudyType('');
    setOtherStudyType('');
  };
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <PlusCircle className="h-5 w-5 text-primary" />
            Yeni Çalışma Etkinliği Ekle
          </DialogTitle>
          <DialogDescription>
            Çalışma planına yeni bir görev ekle ve hatırlatıcı kur.
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-4 py-4">
          <div className="space-y-2 col-span-2">
            <Label>Gün</Label>
            <Select value={selectedDay} onValueChange={setSelectedDay}>
              <SelectTrigger><SelectValue placeholder="Gün Seç" /></SelectTrigger>
              <SelectContent>
                {weekDays.map(day => <SelectItem key={day} value={day}>{day}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Başlangıç Saati</Label>
            <Input type="time" value={selectedStartTime} onChange={e => setSelectedStartTime(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label>Bitiş Saati</Label>
            <Input type="time" value={selectedEndTime} onChange={e => setSelectedEndTime(e.target.value)} />
          </div>
          <div className="space-y-2 col-span-2">
            <Label>Ders</Label>
            <Select value={selectedSubject} onValueChange={setSelectedSubject}>
              <SelectTrigger><SelectValue placeholder="Ders Seç" /></SelectTrigger>
              <SelectContent>
                {allSubjects.map(subject => <SelectItem key={subject.id} value={subject.id}>{subject.name}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2 col-span-2">
            <Label>Çalışma Türü</Label>
            <Select value={selectedStudyType} onValueChange={(value) => setSelectedStudyType(value as StudyType | '')}>
              <SelectTrigger><SelectValue placeholder="Çalışma Türü Seç" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="Konu Tekrarı">Konu Tekrarı</SelectItem>
                <SelectItem value="Soru Çözme">Soru Çözme</SelectItem>
                <SelectItem value="Test Çözme">Test Çözme</SelectItem>
                <SelectItem value="Ödev">Ödev</SelectItem>
                <SelectItem value="Diğer">Diğer</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {selectedStudyType === 'Diğer' && (
            <div className="space-y-2 col-span-2">
              <Label>Açıklama</Label>
              <Input 
                placeholder="Açıklama girin..." 
                value={otherStudyType} 
                onChange={e => setOtherStudyType(e.target.value)} 
              />
            </div>
          )}
        </div>
        <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => onOpenChange(false)}>İptal</Button>
            <Button onClick={handleSave}>Kaydet</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}