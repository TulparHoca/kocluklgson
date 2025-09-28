import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Timer, Play, Pause, RotateCcw } from "lucide-react";

export const Stopwatch = () => {
  const [time, setTime] = useState(0); // Artık milisaniye tutuyor
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      // Zamanlayıcıyı daha hassas çalışması için 10ms'de bir çalıştır
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 10);
      }, 10);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const handleToggle = () => setIsRunning(prev => !prev);
  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
  };

  // Zaman formatlama fonksiyonunu milisaniyeyi içerecek şekilde güncelle
  const formatTime = (totalMilliseconds: number) => {
    const totalSeconds = Math.floor(totalMilliseconds / 1000);
    const hours = Math.floor(totalSeconds / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, '0');
    const seconds = (totalSeconds % 60).toString().padStart(2, '0');
    const milliseconds = Math.floor((totalMilliseconds % 1000) / 10).toString().padStart(2, '0');
    
    return `${hours}:${minutes}:${seconds}.${milliseconds}`;
  };

  return (
    <Card className="shadow-card border border-border/50 dark:border-white/10">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Timer className="h-5 w-5 text-primary" /> Kronometre
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        {/* Font boyutunu responsif yaptım */}
        <p className="text-3xl md:text-4xl font-bold text-center tracking-tighter font-mono mb-4">
          {formatTime(time)}
        </p>
        <div className="flex gap-4">
          <Button onClick={handleToggle} className="w-28">
            {isRunning ? <Pause className="h-4 w-4 mr-2" /> : <Play className="h-4 w-4 mr-2" />}
            {isRunning ? 'Durdur' : 'Başlat'}
          </Button>
          <Button variant="outline" onClick={handleReset}>
            <RotateCcw className="h-4 w-4 mr-2" /> Sıfırla
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};