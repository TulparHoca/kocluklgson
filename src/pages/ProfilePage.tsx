import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Lock, Trophy, UserRound } from "lucide-react";
import { useAppContext } from "@/pages/AppLayout";
import { avatars as allAvatars } from "@/data/avatars";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Achievement } from "@/types";

export const ProfilePage = () => {
  const { userAvatars, handleSetAvatar, achievements } = useAppContext();
  const [showAvatars, setShowAvatars] = useState(true);
  const [showAchievements, setShowAchievements] = useState(false);

  const sortedAvatars = useMemo(() => {
    const unlockedAvatars = allAvatars.filter(avatar => 
      (userAvatars?.unlocked || []).includes(avatar.id)
    );
    
    return [...unlockedAvatars].sort((a, b) => {
      if (a.id === 'default') return -1;
      if (b.id === 'default') return 1;
      return 0;
    });
  }, [userAvatars?.unlocked]);
  
  const sortedAchievements = useMemo(() => {
    const safeAchievements = achievements || [];
    return [...safeAchievements].sort((a, b) => {
      if (a.unlocked && !b.unlocked) {
        return -1;
      }
      if (!a.unlocked && b.unlocked) {
        return 1;
      }
      return 0;
    });
  }, [achievements]);

  const renderAchievements = () => {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {sortedAchievements.map((achievement: Achievement) => (
          <Card 
            key={achievement.id} 
            className={cn(
              "relative transition-all duration-300", 
              achievement.unlocked ? "bg-card/90" : "bg-card/50 opacity-60"
            )}
          >
            <CardContent className="flex flex-col items-center justify-center text-center p-4">
              <span className="text-4xl">
                {achievement.unlocked ? achievement.icon : <Lock className="h-10 w-10 text-muted-foreground" />}
              </span>
              <p className="font-semibold mt-2">{achievement.title}</p>
              <p className="text-xs text-muted-foreground mt-1">{achievement.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-6 animate-slide-up">
      <div className="flex justify-center gap-4 mt-6">
        <Button 
          onClick={() => setShowAvatars(!showAvatars)}
          className="gap-2 w-full max-w-sm"
          variant={showAvatars ? "default" : "outline"}
        >
          <UserRound className="h-5 w-5" />
          {showAvatars ? "Avatarları Gizle" : "Avatarlarımı Görüntüle"}
        </Button>
        <Button 
          onClick={() => setShowAchievements(!showAchievements)}
          className="gap-2 w-full max-w-sm"
          variant={showAchievements ? "default" : "outline"}
        >
          <Trophy className="h-5 w-5" />
          {showAchievements ? "Başarımları Gizle" : "Başarımlarımı Görüntüle"}
        </Button>
      </div>

      {showAvatars && (
        <Card className="card-canli gradient-mor shadow-lg border-none">
          <CardHeader>
            <CardTitle className="text-2xl metin-beyaz">Profil ve Avatarlar</CardTitle>
            <CardDescription className="metin-acik-gri">Mevcut avatarını seç.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4">
              {sortedAvatars.map(avatar => {
                const isCurrent = userAvatars?.current === avatar.id;
                
                return (
                  <div 
                    key={avatar.id} 
                    className={cn(
                      "relative flex flex-col items-center gap-2 p-2 rounded-lg border-2 transition-all duration-300",
                      isCurrent ? 'border-white shadow-lg scale-105 bg-white/20' : 'border-transparent',
                      'cursor-pointer hover:border-white/50'
                    )}
                    onClick={() => handleSetAvatar(avatar.id)}
                  >
                    <img 
                      src={avatar.image} 
                      alt={avatar.name} 
                      className="w-24 h-24 rounded-full" 
                    />
                    {isCurrent && (
                      <div className="absolute top-0 right-0 bg-white text-violet-500 rounded-full p-1">
                        <CheckCircle className="h-5 w-5" />
                      </div>
                    )}
                    <p className="text-xs text-center font-medium metin-beyaz">{avatar.name}</p>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      )}

      {showAchievements && (
        <Card className="card-canli gradient-yesil shadow-lg border-none">
          <CardHeader>
            <CardTitle className="metin-beyaz">Başarımlarım</CardTitle>
            <CardDescription className="metin-acik-gri">Kazandığın tüm başarımları buradan görebilirsin.</CardDescription>
          </CardHeader>
          <CardContent>
            {renderAchievements()}
          </CardContent>
        </Card>
      )}
    </div>
  );
};