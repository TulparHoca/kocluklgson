import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { getDailyQuote } from "@/data/motivationalQuotes";

export default function MotivationalQuote() {
  const quote = getDailyQuote();

  return (
    <Card className="shadow-card hover:shadow-elegant transition-all duration-300 border-border/50 hover:border-primary/20 animate-slide-up gradient-subtle">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="gradient-primary p-3 rounded-full shadow-glow flex-shrink-0">
            <Quote className="h-6 w-6 text-primary-foreground" />
          </div>
          <div className="space-y-3">
            <blockquote className="text-lg font-medium text-foreground italic leading-relaxed">
              "{quote.text}"
            </blockquote>
            <cite className="text-sm text-muted-foreground font-semibold block">
              — {quote.author}
            </cite>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}