import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star, CheckCircle, Lock, Award } from "lucide-react";
import { useAppContext } from "./AppLayout";
import { toast } from "sonner";
import { avatars as allAvatars } from "@/data/avatars";
import { achievements as initialAchievementsData } from "@/data/achievements";

export const MarketPage = () => {
  const { totalPoints, streakFreezes, userAvatars, handleBuyStreakFreeze, handleBuyAvatar, achievements } = useAppContext();
  const freezePrice = 200;

  const purchasableAvatars = allAvatars.filter(a => a.unlockMethod === 'purchase');
  const achievementAvatars = allAvatars.filter(a => a.unlockMethod === 'achievement');

  return (
    <div className="space-y-6 animate-slide-up">
      <Card className="shadow-card border border-border/50 dark:border-white/10 bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
        <CardHeader className="flex-row items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5 text-white" />
            <CardTitle className="text-white">Market</CardTitle>
          </div>
          <div className="flex items-center gap-2 font-bold text-white/90 text-lg">
            <Star className="h-5 w-5" /> {totalPoints} Puan
          </div>
        </CardHeader>
      </Card>
      
      <Card className="shadow-card border border-border/50 dark:border-white/10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5 text-primary" /> Puanla Alınabilir Avatarlar
          </CardTitle>
          <CardDescription>Kazandığın puanlarla bu avatarlara sahip olabilirsin.</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {purchasableAvatars.map(avatar => {
            const isUnlocked = (userAvatars?.unlocked || []).includes(avatar.id);
            const canAfford = totalPoints >= (avatar.price || 0);
            return (
              <div key={avatar.id} className="flex flex-col items-center gap-2 p-4 bg-muted/30 rounded-lg">
                <img src={avatar.image} alt={avatar.name} className="w-20 h-20 rounded-full border-2 border-border" />
                <h4 className="font-semibold text-sm text-center">{avatar.name}</h4>
                {isUnlocked ? (
                  <Button variant="outline" disabled className="w-full">
                    <CheckCircle className="h-4 w-4 mr-2" /> Sahipsin
                  </Button>
                ) : (
                  <Button className="w-full" disabled={!canAfford} onClick={() => handleBuyAvatar(avatar.id)}>
                    <Star className="h-4 w-4 mr-2" /> {avatar.price}
                  </Button>
                )}
              </div>
            );
          })}
        </CardContent>
      </Card>

      <Card className="shadow-card border border-border/50 dark:border-white/10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5 text-yellow-500" /> Başarımla Açılan Avatarlar
          </CardTitle>
          <CardDescription>Bu avatarları özel başarımları tamamlayarak kazanabilirsin.</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {achievementAvatars.map(avatar => {
            const isUnlocked = (userAvatars?.unlocked || []).includes(avatar.id);
            const achievement = initialAchievementsData.find(a => a.id === avatar.achievementId);
            return (
              <div key={avatar.id} className="flex flex-col items-center gap-2 p-4 bg-muted/30 rounded-lg">
                <img src={avatar.image} alt={avatar.name} className={`w-20 h-20 rounded-full border-2 border-border ${!isUnlocked ? 'filter grayscale opacity-50' : ''}`} />
                <h4 className="font-semibold text-sm text-center">{avatar.name}</h4>
                {achievement && (
                  <p className="text-xs text-muted-foreground text-center mt-1">
                    {achievement.requirement}
                  </p>
                )}
                {!achievement && (
                    <p className="text-xs text-muted-foreground text-center mt-1">
                       Gereksinim: Başarım verisi bulunamadı.
                    </p>
                )}
                {isUnlocked ? (
                  <Button variant="outline" disabled className="w-full">
                    <CheckCircle className="h-4 w-4 mr-2" /> Sahipsin
                  </Button>
                ) : (
                  <Button variant="outline" disabled className="w-full">
                    <Lock className="h-4 w-4 mr-2" /> Başarımla Açılır
                  </Button>
                )}
              </div>
            );
          })}
        </CardContent>
      </Card>
      
      <Card className="shadow-card border border-border/50 dark:border-white/10">
        <CardHeader><CardTitle>Seri Dondurma ❄️</CardTitle></CardHeader>
        <CardContent>
          <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
            <div>
              <p className="font-semibold">Mevcut Hak: {streakFreezes}</p>
              <p className="text-sm text-muted-foreground">Fiyat: {freezePrice} Puan</p>
            </div>
            <Button onClick={handleBuyStreakFreeze} disabled={totalPoints < freezePrice}>Satın Al</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};