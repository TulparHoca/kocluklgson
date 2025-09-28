import { Button } from "@/components/ui/button";
import { Moon, Sun, Trophy, Flame, Target, Star, Volume2, VolumeX, ShoppingCart, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import { avatars } from "@/data/avatars";

// Progress bileşeni artık kullanılmadığı için importu kaldırıldı.

interface HeaderProps {
  userName: string | null;
  totalQuestions: number;
  streak: number;
  unlockedAchievements: number;
  totalPoints: number;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  currentAvatarId: string;
  isMuted: boolean;
  toggleMute: () => void;
  isHomePage: boolean;
}

export default function Header({ 
  userName, 
  totalQuestions, 
  streak, 
  unlockedAchievements,
  totalPoints,
  theme, 
  toggleTheme,
  currentAvatarId,
  isMuted,
  toggleMute,
  isHomePage
}: HeaderProps) {
  
  const currentAvatar = avatars.find(a => a.id === currentAvatarId) || avatars[0];
  const firstName = userName ? userName.split(' ')[0] : 'Misafir';

  // Seviye ve Puan ilerlemesi için gerekli hesaplamalar kaldırıldı.

  const renderHeaderContent = () => (
    <div className="flex items-center justify-between p-3 md:p-4 rounded-xl shadow-card bg-card">
      <div className="flex items-center gap-3 md:gap-4 flex-1 min-w-0">
        <Link to="/profile">
          <img 
            src={currentAvatar.image} 
            alt="Kullanıcı Avatarı" 
            className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-primary/50 shadow-md transition-transform duration-300 hover:scale-105 aspect-square object-cover flex-shrink-0" 
          />
        </Link>
        <div className="flex-1 min-w-0">
          <h1 className="text-xl md:text-2xl font-bold text-foreground truncate">Selam, {firstName}!</h1>
          <p className="text-xs md:text-sm text-muted-foreground">
            {isHomePage ? "Bugünkü hedeflerine ulaşmaya hazır mısın?" : "Başarımlarını ve istatistiklerini görüntüle."}
          </p>
          
          {/* KALDIRILDI: Seviye ve Puan ilerleme çubuğu buradan kaldırıldı. */}
        </div>
      </div>
      
      <div className="flex items-center gap-1 md:gap-2">
        <Link to="/market" title="Market" className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-colors h-8 w-8 md:h-9 md:w-9 hover:bg-accent hover:text-accent-foreground">
          <ShoppingCart className="h-4 w-4 md:h-5 md:w-5" />
        </Link>
        <Link to="/settings" title="Ayarlar" className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-colors h-8 w-8 md:h-9 md:w-9 hover:bg-accent hover:text-accent-foreground">
          <Settings className="h-4 w-4 md:h-5 md:w-5" />
        </Link>
        <Button variant="ghost" size="icon" className="rounded-full h-8 w-8 md:h-9 md:w-9" onClick={toggleMute} title={isMuted ? "Sesi Aç" : "Sesi Kapat"}>
          {isMuted ? <VolumeX className="h-4 w-4 md:h-5 md:w-5" /> : <Volume2 className="h-4 w-4 md:h-5 md:w-5" />}
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full h-8 w-8 md:h-9 md:w-9" onClick={toggleTheme} title="Temayı Değiştir">
          {theme === 'light' ? <Moon className="h-4 w-4 md:h-5 md:w-5" /> : <Sun className="h-4 w-4 md:h-5 md:w-5" />}
        </Button>
      </div>
    </div>
  );

  const renderStatsCards = () => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
      <div className="bg-card/50 backdrop-blur-sm p-3 md:p-4 rounded-lg border border-border/50 hover:shadow-card transition-all duration-300">
        <div className="flex items-center gap-2 md:gap-3">
          <div className="bg-primary/10 p-1.5 md:p-2 rounded-lg"><Target className="h-4 w-4 md:h-5 md:w-5 text-primary" /></div>
          <div>
            <p className="text-lg md:text-2xl font-bold text-foreground">{totalQuestions}</p>
            <p className="text-xs md:text-sm text-muted-foreground">Soru</p>
          </div>
        </div>
      </div>
      <div className="bg-card/50 backdrop-blur-sm p-3 md:p-4 rounded-lg border border-border/50 hover:shadow-card transition-all duration-300">
        <div className="flex items-center gap-2 md:gap-3">
          <div className="bg-sky-500/10 p-1.5 md:p-2 rounded-lg"><Star className="h-4 w-4 md:h-5 md:w-5 text-sky-500" /></div>
          <div>
            <p className="text-lg md:text-2xl font-bold text-foreground">{totalPoints}</p>
            <p className="text-xs md:text-sm text-muted-foreground">Puan</p>
          </div>
        </div>
      </div>
      <div className="bg-card/50 backdrop-blur-sm p-3 md:p-4 rounded-lg border border-border/50 hover:shadow-card transition-all duration-300">
        <div className="flex items-center gap-2 md:gap-3">
          <div className="bg-amber-500/10 p-1.5 md:p-2 rounded-lg"><Flame className="h-4 w-4 md:h-5 md:w-5 text-amber-500" /></div>
          <div>
            <p className="text-lg md:text-2xl font-bold text-foreground">{streak}</p>
            <p className="text-xs md:text-sm text-muted-foreground">Seri</p>
          </div>
        </div>
      </div>
      <div className="bg-card/50 backdrop-blur-sm p-3 md:p-4 rounded-lg border border-border/50 hover:shadow-card transition-all duration-300">
        <div className="flex items-center gap-2 md:gap-3">
          <div className="bg-emerald-500/10 p-1.5 md:p-2 rounded-lg"><Trophy className="h-4 w-4 md:h-5 md:w-5 text-emerald-500" /></div>
          <div>
            <p className="text-lg md:text-2xl font-bold text-foreground">{unlockedAchievements}</p>
            <p className="text-xs md:text-sm text-muted-foreground">Başarım</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <header className="space-y-4 md:space-y-6 mb-4 md:mb-6 animate-slide-up">
      {renderHeaderContent()}
      {isHomePage && renderStatsCards()}
    </header>
  );
}