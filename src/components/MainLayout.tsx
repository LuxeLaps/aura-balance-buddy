import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Battery, 
  Smartphone, 
  BarChart3, 
  Settings,
  Shield,
  Sparkles
} from "lucide-react";
import EnergyDashboard from "./EnergyDashboard";
import QuickCheckin from "./QuickCheckin";
import RebalancePanel from "./RebalancePanel";
import DigitalClutter from "./DigitalClutter";

const MainLayout = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="min-h-screen bg-background p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-energy bg-clip-text text-transparent">
              Youth Lifestyle Copilot
            </h1>
            <p className="text-muted-foreground mt-2 flex items-center gap-2">
              <Shield className="w-4 h-4" />
              Privacy-first energy management & digital wellness
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Badge className="bg-gradient-recovery text-white border-0">
              <Sparkles className="w-3 h-3 mr-1" />
              AI-powered
            </Badge>
            <Button variant="outline" size="sm">
              <Settings className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Main Navigation */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-secondary/20 p-1">
            <TabsTrigger 
              value="dashboard" 
              className="flex items-center gap-2 data-[state=active]:bg-gradient-energy data-[state=active]:text-white"
            >
              <Battery className="w-4 h-4" />
              <span className="hidden sm:inline">Energy</span>
            </TabsTrigger>
            <TabsTrigger 
              value="checkin"
              className="flex items-center gap-2 data-[state=active]:bg-gradient-recovery data-[state=active]:text-white"
            >
              <Sparkles className="w-4 h-4" />
              <span className="hidden sm:inline">Check-in</span>
            </TabsTrigger>
            <TabsTrigger 
              value="clutter"
              className="flex items-center gap-2 data-[state=active]:bg-gradient-energy data-[state=active]:text-white"
            >
              <Smartphone className="w-4 h-4" />
              <span className="hidden sm:inline">Declutter</span>
            </TabsTrigger>
            <TabsTrigger 
              value="insights"
              className="flex items-center gap-2 data-[state=active]:bg-gradient-recovery data-[state=active]:text-white"
            >
              <BarChart3 className="w-4 h-4" />
              <span className="hidden sm:inline">Insights</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <EnergyDashboard />
              </div>
              <div className="space-y-6">
                <QuickCheckin />
                <RebalancePanel />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="checkin">
            <div className="max-w-2xl mx-auto">
              <QuickCheckin />
            </div>
          </TabsContent>

          <TabsContent value="clutter">
            <DigitalClutter />
          </TabsContent>

          <TabsContent value="insights">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 bg-gradient-card border-0 shadow-card-glow">
                <h3 className="text-lg font-semibold mb-4">Weekly Burnout Risk</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Before AI optimization</span>
                    <Badge className="bg-gradient-burnout text-white border-0">65% risk</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">After optimization</span>
                    <Badge className="bg-gradient-recovery text-white border-0">25% risk</Badge>
                  </div>
                  <div className="p-3 bg-energy-high/10 rounded-lg">
                    <p className="text-sm text-energy-high font-medium">
                      📈 40% improvement in burnout prevention
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-card border-0 shadow-card-glow">
                <h3 className="text-lg font-semibold mb-4">Recovery Time Gained</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Previous week</span>
                    <span className="text-sm text-muted-foreground">2.0h/day</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">This week</span>
                    <span className="text-sm text-recovery font-medium">4.5h/day</span>
                  </div>
                  <div className="p-3 bg-recovery/10 rounded-lg">
                    <p className="text-sm text-recovery font-medium">
                      ⏰ +2.5 hours daily for self-care
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-card border-0 shadow-card-glow">
                <h3 className="text-lg font-semibold mb-4">Digital Clutter Impact</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Notifications before</span>
                    <span className="text-sm text-energy-low">156/day</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Notifications after</span>
                    <span className="text-sm text-energy-high">23/day</span>
                  </div>
                  <div className="p-3 bg-energy-medium/10 rounded-lg">
                    <p className="text-sm text-energy-medium font-medium">
                      🔕 85% reduction in distractions
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-card border-0 shadow-card-glow">
                <h3 className="text-lg font-semibold mb-4">Privacy Score</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Data on-device</span>
                    <Badge className="bg-gradient-energy text-white border-0">100%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Cloud dependencies</span>
                    <Badge variant="outline" className="border-muted text-muted-foreground">0</Badge>
                  </div>
                  <div className="p-3 bg-energy-high/10 rounded-lg">
                    <p className="text-sm text-energy-high font-medium">
                      🔒 Complete privacy protection
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Demo Banner */}
        <Card className="mt-8 p-4 bg-gradient-energy border-0 shadow-glow">
          <div className="flex items-center justify-between text-white">
            <div>
              <h4 className="font-semibold">2-Minute Demo Complete</h4>
              <p className="text-sm opacity-90">
                Burnout risk ↓40% • Recovery time ↑125% • Clutter ↓85% • Privacy 100%
              </p>
            </div>
            <Button variant="secondary" size="sm">
              Try full version
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default MainLayout;