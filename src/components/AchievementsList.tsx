import { Achievement } from "@/types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trophy, Lock, Calendar, Target, Flame, Star, Award } from "lucide-react";

interface AchievementsListProps {
  achievements: Achievement[];
}

const getCategoryIcon = (category: Achievement['category']) => {
  switch (category) {
    case 'questions': return Target;
    case 'streak': return Flame;
    case 'subject': return Star;
    case 'special': return Award;
    default: return Trophy;
  }
};

const getCategoryName = (category: Achievement['category']) => {
  switch (category) {
    case 'questions': return 'Sorular';
    case 'streak': return 'Seri';
    case 'subject': return 'Dersler';
    case 'special': return 'Özel';
    default: return 'Genel';
  }
};

export default function AchievementsList({ achievements }: AchievementsListProps) {
  const unlockedAchievements = achievements.filter(a => a.unlocked);
  const lockedAchievements = achievements.filter(a => !a.unlocked);
  
  const achievementsByCategory = achievements.reduce((acc, achievement) => {
    const category = achievement.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(achievement);
    return acc;
  }, {} as Record<Achievement['category'], Achievement[]>);

  return (
    <div className="space-y-6 animate-slide-up p-4">
      <Tabs defaultValue="ozet" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-muted/50">
          <TabsTrigger value="ozet">Özet</TabsTrigger>
          <TabsTrigger value="kazanilanlar">Kazanılanlar ({unlockedAchievements.length})</TabsTrigger>
          <TabsTrigger value="kilitli">Kilitli ({lockedAchievements.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="ozet" className="mt-4">
          <Card className="shadow-card border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-primary" />
                Başarım İlerlemesi
              </CardTitle>
              <CardDescription>
                {unlockedAchievements.length} / {achievements.length} başarım kazandın!
              </CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(achievementsByCategory).map(([category, categoryAchievements]) => {
                const CategoryIcon = getCategoryIcon(category as Achievement['category']);
                const unlockedCount = categoryAchievements.filter(a => a.unlocked).length;
                const totalCount = categoryAchievements.length;
                
                return (
                  <div key={category} className="bg-muted/30 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <CategoryIcon className="h-5 w-5 text-muted-foreground" />
                      <span className="font-medium text-foreground">
                        {getCategoryName(category as Achievement['category'])}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                        <p className="text-2xl font-bold text-foreground">{unlockedCount} / {totalCount}</p>
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="kazanilanlar" className="mt-4">
          {/* GÜNCELLENDİ: grid-cols-1 md:grid-cols-2 yerine direkt grid-cols-2 kullanıldı */}
          <div className="grid grid-cols-2 gap-4">
            {unlockedAchievements.map((achievement) => (
              <Card key={achievement.id} className="p-4 flex flex-col items-center text-center bg-green-500/10 border border-green-500/20">
                <span className="text-4xl md:text-5xl mb-3">{achievement.icon}</span>
                <h3 className="text-sm md:text-base font-semibold text-foreground">{achievement.title}</h3>
                <p className="text-xs md:text-sm text-muted-foreground mt-1 flex-1">{achievement.description}</p>
                {achievement.unlockedAt && (
                  <div className="flex items-center gap-1 text-xs text-muted-foreground mt-3">
                    <Calendar className="h-3 w-3" />
                    {new Date(achievement.unlockedAt).toLocaleDateString('tr-TR')}
                  </div>
                )}
              </Card>
            ))}
          </div>
           {unlockedAchievements.length === 0 && (
             <div className="text-center py-10 text-muted-foreground">Henüz hiç başarım kazanmadın.</div>
           )}
        </TabsContent>

        <TabsContent value="kilitli" className="mt-4">
          {/* GÜNCELLENDİ: grid-cols-1 md:grid-cols-2 yerine direkt grid-cols-2 kullanıldı */}
          <div className="grid grid-cols-2 gap-4">
            {lockedAchievements.map((achievement) => (
              <Card key={achievement.id} className="p-4 flex flex-col items-center text-center bg-muted/50 opacity-70">
                <div className="p-3 md:p-4 bg-muted rounded-full mb-3">
                  <Lock className="h-5 w-5 md:h-6 md:h-6 text-muted-foreground" />
                </div>
                <h3 className="text-sm md:text-base font-semibold text-muted-foreground">{achievement.title}</h3>
                <p className="text-xs md:text-sm text-muted-foreground mt-1 flex-1">{achievement.requirement || achievement.description}</p>
              </Card>
            ))}
          </div>
           {lockedAchievements.length === 0 && (
             <div className="text-center py-10 text-muted-foreground">Tebrikler! Tüm başarımların kilidini açtın! 🏆</div>
           )}
        </TabsContent>
      </Tabs>
    </div>
  );
}