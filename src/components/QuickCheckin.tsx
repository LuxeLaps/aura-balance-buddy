import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { 
  Moon, 
  Heart, 
  Users, 
  Send,
  Sparkles
} from "lucide-react";

const QuickCheckin = () => {
  const [sleep, setSleep] = useState([7]);
  const [mood, setMood] = useState([75]);
  const [social, setSocial] = useState([40]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    // Show success toast
  };

  const getSleepColor = (hours: number) => {
    if (hours >= 7) return "text-recovery";
    if (hours >= 6) return "text-energy-medium";
    return "text-energy-low";
  };

  const getMoodColor = (score: number) => {
    if (score >= 70) return "text-energy-high";
    if (score >= 40) return "text-energy-medium";
    return "text-energy-low";
  };

  const getSocialColor = (score: number) => {
    if (score >= 60) return "text-energy-high";
    if (score >= 30) return "text-energy-medium";
    return "text-energy-low";
  };

  return (
    <Card className="p-6 bg-gradient-card border-0 shadow-card-glow">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-energy-high" />
            Quick Check-in
          </h3>
          <p className="text-sm text-muted-foreground">
            How are you feeling right now?
          </p>
        </div>
        <Badge variant="outline" className="border-primary text-primary">
          30-sec update
        </Badge>
      </div>

      <div className="space-y-6">
        {/* Sleep */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Moon className="w-4 h-4 text-recovery" />
              <span className="font-medium">Sleep Quality</span>
            </div>
            <span className={`font-bold ${getSleepColor(sleep[0])}`}>
              {sleep[0]}h
            </span>
          </div>
          <Slider
            value={sleep}
            onValueChange={setSleep}
            max={12}
            min={3}
            step={0.5}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Poor (3h)</span>
            <span>Optimal (8h)</span>
            <span>Too much (12h)</span>
          </div>
        </div>

        {/* Mood */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-energy-high" />
              <span className="font-medium">Mood</span>
            </div>
            <span className={`font-bold ${getMoodColor(mood[0])}`}>
              {mood[0]}%
            </span>
          </div>
          <Slider
            value={mood}
            onValueChange={setMood}
            max={100}
            min={0}
            step={5}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Low</span>
            <span>Good</span>
            <span>Amazing</span>
          </div>
        </div>

        {/* Social Battery */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-energy-medium" />
              <span className="font-medium">Social Battery</span>
            </div>
            <span className={`font-bold ${getSocialColor(social[0])}`}>
              {social[0]}%
            </span>
          </div>
          <Slider
            value={social}
            onValueChange={setSocial}
            max={100}
            min={0}
            step={5}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Drained</span>
            <span>Balanced</span>
            <span>Energized</span>
          </div>
        </div>

        {/* Submit Button */}
        <Button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="w-full bg-gradient-energy hover:shadow-energy transition-all duration-300"
        >
          {isSubmitting ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Updating...
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Send className="w-4 h-4" />
              Update Energy Ledger
            </div>
          )}
        </Button>
      </div>

      {/* Privacy Note */}
      <p className="text-xs text-muted-foreground mt-4 text-center">
        All data stays on your device. No cloud sync required.
      </p>
    </Card>
  );
};

export default QuickCheckin;