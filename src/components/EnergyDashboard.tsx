import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Battery, 
  Users, 
  Moon, 
  Heart, 
  Zap, 
  RefreshCw,
  TrendingDown,
  TrendingUp,
  Shield
} from "lucide-react";

const EnergyDashboard = () => {
  const energyData = {
    current: 65,
    sleep: 7.5,
    social: 40,
    mood: 75,
    burnoutRisk: 25
  };

  const todayTasks = [
    { id: 1, title: "Team standup", type: "hard", time: "09:00", energy: 20 },
    { id: 2, title: "Project review", type: "soft", time: "14:00", energy: 30 },
    { id: 3, title: "Gym workout", type: "recovery", time: "18:00", energy: -10 },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-energy bg-clip-text text-transparent">
            Energy Dashboard
          </h1>
          <p className="text-muted-foreground mt-1">
            <Shield className="inline w-4 h-4 mr-1" />
            All data processed on-device
          </p>
        </div>
        <Button className="bg-gradient-energy hover:shadow-energy transition-all duration-300">
          <RefreshCw className="w-4 h-4 mr-2" />
          Rebalance Day
        </Button>
      </div>

      {/* Energy Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-6 bg-gradient-card border-0 shadow-card-glow transition-all duration-300 hover:shadow-glow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Energy Level</p>
              <p className="text-2xl font-bold text-energy-medium">{energyData.current}%</p>
            </div>
            <Battery className="w-8 h-8 text-energy-medium" />
          </div>
          <Progress value={energyData.current} className="mt-3" />
        </Card>

        <Card className="p-6 bg-gradient-card border-0 shadow-card-glow transition-all duration-300 hover:shadow-glow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Sleep Quality</p>
              <p className="text-2xl font-bold text-recovery">{energyData.sleep}h</p>
            </div>
            <Moon className="w-8 h-8 text-recovery" />
          </div>
          <Progress value={(energyData.sleep / 9) * 100} className="mt-3" />
        </Card>

        <Card className="p-6 bg-gradient-card border-0 shadow-card-glow transition-all duration-300 hover:shadow-glow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Social Battery</p>
              <p className="text-2xl font-bold text-energy-low">{energyData.social}%</p>
            </div>
            <Users className="w-8 h-8 text-energy-low" />
          </div>
          <Progress value={energyData.social} className="mt-3" />
        </Card>

        <Card className="p-6 bg-gradient-card border-0 shadow-card-glow transition-all duration-300 hover:shadow-glow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Mood</p>
              <p className="text-2xl font-bold text-energy-high">{energyData.mood}%</p>
            </div>
            <Heart className="w-8 h-8 text-energy-high" />
          </div>
          <Progress value={energyData.mood} className="mt-3" />
        </Card>
      </div>

      {/* Burnout Risk & Recovery */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6 bg-gradient-card border-0 shadow-card-glow">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Burnout Risk</h3>
            <Badge variant="secondary" className="bg-gradient-burnout text-white border-0">
              <TrendingDown className="w-3 h-3 mr-1" />
              {energyData.burnoutRisk}%
            </Badge>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span>This Week</span>
              <span className="text-burnout">35% → {energyData.burnoutRisk}%</span>
            </div>
            <Progress value={energyData.burnoutRisk} className="h-2" />
            <p className="text-xs text-muted-foreground">
              Great progress! Your rebalancing has reduced burnout risk by 10%.
            </p>
          </div>
        </Card>

        <Card className="p-6 bg-gradient-card border-0 shadow-card-glow">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Recovery Time</h3>
            <Badge variant="secondary" className="bg-gradient-recovery text-white border-0">
              <TrendingUp className="w-3 h-3 mr-1" />
              +2.5h gained
            </Badge>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span>Daily Average</span>
              <span className="text-recovery">4.5h</span>
            </div>
            <Progress value={75} className="h-2" />
            <p className="text-xs text-muted-foreground">
              Smart scheduling freed up 2.5 hours for recovery this week.
            </p>
          </div>
        </Card>
      </div>

      {/* Today's Schedule */}
      <Card className="p-6 bg-gradient-card border-0 shadow-card-glow">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Today's Energy Budget</h3>
          <div className="flex gap-2">
            <Badge variant="outline" className="border-energy-high text-energy-high">
              <Zap className="w-3 h-3 mr-1" />
              65% remaining
            </Badge>
          </div>
        </div>
        <div className="space-y-3">
          {todayTasks.map((task) => (
            <div 
              key={task.id}
              className="flex items-center justify-between p-3 rounded-lg bg-secondary/20 transition-all duration-200 hover:bg-secondary/30"
            >
              <div className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${
                  task.type === 'hard' ? 'bg-energy-low' :
                  task.type === 'soft' ? 'bg-energy-medium' :
                  'bg-recovery'
                }`} />
                <div>
                  <p className="font-medium">{task.title}</p>
                  <p className="text-xs text-muted-foreground">{task.time}</p>
                </div>
              </div>
              <div className="text-right">
                <p className={`text-sm font-medium ${
                  task.energy > 0 ? 'text-energy-low' : 'text-recovery'
                }`}>
                  {task.energy > 0 ? '-' : '+'}{Math.abs(task.energy)}%
                </p>
                <p className="text-xs text-muted-foreground">energy</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default EnergyDashboard;