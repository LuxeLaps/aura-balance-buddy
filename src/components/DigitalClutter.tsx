import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Image, 
  FileText, 
  Calendar, 
  Users, 
  Receipt, 
  Ticket,
  Bell,
  Archive,
  Trash2,
  Sparkles,
  TrendingDown
} from "lucide-react";

const DigitalClutter = () => {
  const clutterStats = {
    screenshotsProcessed: 127,
    clutterReduced: 78,
    notificationsBundled: 156,
    timeReclaimed: "2.3h"
  };

  const actionableCards = [
    {
      type: "event",
      title: "Concert tickets for Friday",
      source: "Screenshot from Messages",
      action: "Add to calendar",
      icon: Calendar,
      color: "text-energy-high"
    },
    {
      type: "contact",
      title: "Sarah's new number",
      source: "Screenshot from WhatsApp",
      action: "Save contact",
      icon: Users,
      color: "text-recovery"
    },
    {
      type: "expense",
      title: "Coffee receipt - $4.50",
      source: "Photo from camera",
      action: "Track expense",
      icon: Receipt,
      color: "text-energy-medium"
    },
    {
      type: "task",
      title: "Submit project proposal",
      source: "PDF from email",
      action: "Create task",
      icon: FileText,
      color: "text-energy-low"
    }
  ];

  const muteList = [
    { app: "Instagram", type: "Story notifications", count: 23 },
    { app: "LinkedIn", type: "Post likes", count: 18 },
    { app: "Twitter", type: "Trending topics", count: 15 },
    { app: "YouTube", type: "Video recommendations", count: 12 },
    { app: "TikTok", type: "Live notifications", count: 8 }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Digital Clutter Detox</h2>
          <p className="text-muted-foreground">
            Auto-organized {clutterStats.screenshotsProcessed} items this week
          </p>
        </div>
        <Badge className="bg-gradient-recovery text-white border-0">
          <TrendingDown className="w-3 h-3 mr-1" />
          {clutterStats.clutterReduced}% clutter reduced
        </Badge>
      </div>

      {/* Weekly Progress */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="p-4 bg-gradient-card border-0 shadow-card-glow">
          <div className="text-center">
            <Image className="w-6 h-6 mx-auto mb-2 text-energy-high" />
            <p className="text-lg font-bold">{clutterStats.screenshotsProcessed}</p>
            <p className="text-xs text-muted-foreground">Screenshots organized</p>
          </div>
        </Card>

        <Card className="p-4 bg-gradient-card border-0 shadow-card-glow">
          <div className="text-center">
            <Bell className="w-6 h-6 mx-auto mb-2 text-energy-medium" />
            <p className="text-lg font-bold">{clutterStats.notificationsBundled}</p>
            <p className="text-xs text-muted-foreground">Notifications bundled</p>
          </div>
        </Card>

        <Card className="p-4 bg-gradient-card border-0 shadow-card-glow">
          <div className="text-center">
            <Archive className="w-6 h-6 mx-auto mb-2 text-recovery" />
            <p className="text-lg font-bold">{clutterStats.clutterReduced}%</p>
            <p className="text-xs text-muted-foreground">Clutter reduced</p>
          </div>
        </Card>

        <Card className="p-4 bg-gradient-card border-0 shadow-card-glow">
          <div className="text-center">
            <Sparkles className="w-6 h-6 mx-auto mb-2 text-energy-high" />
            <p className="text-lg font-bold">{clutterStats.timeReclaimed}</p>
            <p className="text-xs text-muted-foreground">Time reclaimed</p>
          </div>
        </Card>
      </div>

      {/* Actionable Cards */}
      <Card className="p-6 bg-gradient-card border-0 shadow-card-glow">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Smart Actions Ready</h3>
          <Badge variant="outline" className="border-energy-high text-energy-high">
            OCR processed
          </Badge>
        </div>
        <div className="space-y-3">
          {actionableCards.map((card, index) => (
            <div 
              key={index}
              className="flex items-center justify-between p-3 rounded-lg bg-secondary/20 transition-all duration-200 hover:bg-secondary/30 group"
            >
              <div className="flex items-center gap-3">
                <card.icon className={`w-5 h-5 ${card.color}`} />
                <div>
                  <p className="font-medium text-sm">{card.title}</p>
                  <p className="text-xs text-muted-foreground">{card.source}</p>
                </div>
              </div>
              <Button 
                size="sm" 
                variant="outline"
                className="opacity-0 group-hover:opacity-100 transition-opacity"
              >
                {card.action}
              </Button>
            </div>
          ))}
        </div>
      </Card>

      {/* Notification Management */}
      <Card className="p-6 bg-gradient-card border-0 shadow-card-glow">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Mute Suggestions</h3>
          <Badge variant="outline" className="border-energy-medium text-energy-medium">
            Top distractors
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground mb-4">
          These notifications have low engagement but high frequency:
        </p>
        <div className="space-y-2 mb-4">
          {muteList.slice(0, 5).map((item, index) => (
            <div 
              key={index}
              className="flex items-center justify-between p-2 rounded-md bg-secondary/10"
            >
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-energy-low" />
                <span className="text-sm font-medium">{item.app}</span>
                <span className="text-xs text-muted-foreground">{item.type}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">{item.count}/week</span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="flex-1">
            <Trash2 className="w-4 h-4 mr-2" />
            Mute selected (10)
          </Button>
          <Button className="flex-1 bg-gradient-energy">
            Apply smart muting
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default DigitalClutter;