// src/components/ui/DailyQuote.tsx

import React, { useState, useEffect } from 'react';
import { ataturkQuotes } from '@/data/ataturkQuotes';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const DailyQuote = () => {
  const [dailyQuote, setDailyQuote] = useState('');

  useEffect(() => {
    const today = new Date();
    const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000);
    const quoteIndex = dayOfYear % ataturkQuotes.length;
    
    setDailyQuote(ataturkQuotes[quoteIndex].quote);
  }, []);

  return (
    <Card className="w-full shadow-card relative overflow-hidden mb-6 animate-slide-up">
      <div className="absolute inset-0 bg-[url('/assets/images/turkish-flag.jpg')] bg-cover bg-center opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
      <div className="absolute inset-0 bg-[url('/assets/images/ataturk-silhouette.png')] bg-contain bg-no-repeat bg-right-bottom mix-blend-screen opacity-10"></div>
      <CardContent className="relative z-10 p-6 flex flex-col justify-end min-h-[200px]">
        <div className="flex-1 flex items-start justify-center text-center">
            <h3 className="text-xl font-bold text-foreground italic mt-auto">
              "{dailyQuote}"
            </h3>
        </div>
      </CardContent>
    </Card>
  );
};

export default DailyQuote;