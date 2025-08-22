import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  RotateCcw, 
  Clock, 
  MessageSquare, 
  CheckCircle,
  AlertTriangle,
  Zap,
  ChevronRight
} from "lucide-react";

const RebalancePanel = () => {
  const [rebalancing, setRebalancing] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const suggestions = [
    {
      type: "move",
      title: "Move project review to tomorrow",
      impact: "+15% energy",
      reason: "Social battery low, this can wait",
      action: "Reschedule"
    },
    {
      type: "recovery",
      title: "Add 30min recovery block at 3pm",
      impact: "+20% energy",
      reason: "Gap between meetings perfect for recharge",
      action: "Insert"
    },
    {
      type: "decline",
      title: "Decline optional team lunch",
      impact: "+10% energy",
      reason: "Social overload detected",
      action: "Draft message"
    }
  ];

  const declineMessage = `Hey team! I'm managing my energy levels today and need to skip the lunch. Hope you all have a great time! Maybe we can catch up over coffee later this week? 😊`;

  const handleRebalance = () => {
    setRebalancing(true);
    setTimeout(() => {
      setRebalancing(false);
      setShowSuggestions(true);
    }, 2000);
  };

  const getIconForType = (type: string) => {
    switch (type) {
      case "move": return <Clock className="w-4 h-4" />;
      case "recovery": return <Zap className="w-4 h-4" />;
      case "decline": return <MessageSquare className="w-4 h-4" />;
      default: return <CheckCircle className="w-4 h-4" />;
    }
  };

  const getColorForType = (type: string) => {
    switch (type) {
      case "move": return "border-energy-medium text-energy-medium bg-energy-medium/10";
      case "recovery": return "border-recovery text-recovery bg-recovery/10";
      case "decline": return "border-energy-low text-energy-low bg-energy-low/10";
      default: return "border-energy-high text-energy-high bg-energy-high/10";
    }
  };

  return (
    <Card className="p-6 bg-gradient-card border-0 shadow-card-glow">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <RotateCcw className="w-5 h-5 text-energy-high" />
            Smart Rebalance
          </h3>
          <p className="text-sm text-muted-foreground">
            AI-powered schedule optimization for your energy
          </p>
        </div>
        <Badge variant="outline" className="border-energy-high text-energy-high">
          Energy OS
        </Badge>
      </div>

      {!showSuggestions ? (
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-gradient-energy rounded-full flex items-center justify-center mx-auto mb-4">
            <RotateCcw className={`w-8 h-8 text-white ${rebalancing ? 'animate-spin' : ''}`} />
          </div>
          <h4 className="font-semibold mb-2">
            {rebalancing ? "Analyzing your day..." : "Ready to optimize?"}
          </h4>
          <p className="text-sm text-muted-foreground mb-6">
            {rebalancing 
              ? "Finding the best adjustments for your energy levels"
              : "I'll suggest smart changes to reduce burnout and maximize recovery"
            }
          </p>
          <Button
            onClick={handleRebalance}
            disabled={rebalancing}
            className="bg-gradient-energy hover:shadow-energy transition-all duration-300"
          >
            {rebalancing ? "Processing..." : "Rebalance My Day"}
          </Button>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle className="w-5 h-5 text-energy-high" />
            <span className="font-medium">3 optimizations found</span>
            <Badge className="bg-gradient-energy text-white border-0 ml-auto">
              +45% energy boost
            </Badge>
          </div>

          {suggestions.map((suggestion, index) => (
            <div key={index} className="group">
              <div className={`p-4 rounded-lg border transition-all duration-200 hover:shadow-sm ${getColorForType(suggestion.type)}`}>
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    {getIconForType(suggestion.type)}
                    <div className="flex-1">
                      <h5 className="font-medium text-sm">{suggestion.title}</h5>
                      <p className="text-xs text-muted-foreground mt-1">
                        {suggestion.reason}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <Badge variant="secondary" className="text-xs">
                          {suggestion.impact}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    {suggestion.action}
                    <ChevronRight className="w-3 h-3 ml-1" />
                  </Button>
                </div>
              </div>

              {suggestion.type === "decline" && (
                <div className="mt-2 ml-7 p-3 bg-secondary/20 rounded-lg border border-secondary/30">
                  <p className="text-xs font-medium mb-2">Suggested message:</p>
                  <p className="text-xs text-muted-foreground italic">
                    "{declineMessage}"
                  </p>
                  <div className="flex gap-2 mt-2">
                    <Button size="sm" variant="outline" className="text-xs h-7">
                      Edit message
                    </Button>
                    <Button size="sm" className="text-xs h-7 bg-gradient-energy">
                      Send & decline
                    </Button>
                  </div>
                </div>
              )}
            </div>
          ))}

          <Separator className="my-4" />

          <div className="flex gap-2">
            <Button 
              variant="outline" 
              className="flex-1"
              onClick={() => setShowSuggestions(false)}
            >
              Start over
            </Button>
            <Button className="flex-1 bg-gradient-energy hover:shadow-energy">
              Apply all changes
            </Button>
          </div>

          <div className="flex items-center gap-2 text-xs text-muted-foreground justify-center mt-4">
            <AlertTriangle className="w-3 h-3" />
            Hard constraints respected (meetings with others won't move)
          </div>
        </div>
      )}
    </Card>
  );
};

export default RebalancePanel;