import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Activity, Clock, Check, Calendar } from "lucide-react";
import { MetricsCards } from "@/components/metrics-cards";
import { RevenueChart } from "@/components/revenue-chart";
import { PipelineChart } from "@/components/pipeline-chart";
import { formatCurrency, getRelativeTime } from "@/lib/utils";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export default function Dashboard() {
  const { toast } = useToast();

  const { data: metrics, isLoading: metricsLoading } = useQuery({
    queryKey: ["/api/metrics"],
  });

  const { data: activities = [], isLoading: activitiesLoading } = useQuery({
    queryKey: ["/api/activities"],
  });

  const { data: backups = [], isLoading: backupsLoading } = useQuery({
    queryKey: ["/api/backups"],
  });

  const handleExportData = async () => {
    try {
      const response = await fetch("/api/export", {
        credentials: "include",
      });
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.style.display = "none";
      a.href = url;
      a.download = "deals_export.csv";
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      toast({
        title: "Export successful",
        description: "Your data has been exported to CSV.",
      });
    } catch (error) {
      toast({
        title: "Export failed",
        description: "Failed to export data.",
        variant: "destructive",
      });
    }
  };

  if (metricsLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-slate-500">Loading dashboard...</div>
      </div>
    );
  }

  const lastBackup = backups[0];
  const nextBackup = new Date();
  nextBackup.setHours(nextBackup.getHours() + 24);

  return (
    <div className="flex-1 overflow-y-auto">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div>
              <h2 className="text-2xl font-bold text-slate-800">Sales Dashboard</h2>
              <p className="text-sm text-slate-500">Monitor your sales pipeline and revenue forecasts</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              Auto-backup Active
            </Badge>
            <Button onClick={handleExportData}>
              <Download className="w-4 h-4 mr-2" />
              Export Data
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6">
        {/* Metrics Cards */}
        <MetricsCards
          totalRevenue={metrics?.totalRevenue || 0}
          dealsWon={metrics?.dealsWon || 0}
          activePipeline={metrics?.activePipeline || 0}
          conversionRate={metrics?.conversionRate || 0}
        />

        {/* Charts */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
          <RevenueChart />
          <PipelineChart pipelineBreakdown={metrics?.pipelineBreakdown || {}} />
        </div>

        {/* Recent Activity & Backup Status */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activitiesLoading ? (
                  <div className="text-slate-500">Loading activities...</div>
                ) : activities.length === 0 ? (
                  <div className="text-slate-500">No recent activities</div>
                ) : (
                  activities.slice(0, 5).map((activity: any) => (
                    <div key={activity.id} className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <Activity className="text-blue-600" size={16} />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-slate-800">{activity.description}</p>
                        <p className="text-xs text-slate-500">
                          {getRelativeTime(activity.createdAt)}
                        </p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>

          {/* Backup Status */}
          <Card>
            <CardHeader>
              <CardTitle>Backup & Recovery</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {lastBackup && (
                  <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <Check className="text-green-600" size={16} />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-green-800">Last Backup</p>
                        <p className="text-xs text-green-600">
                          {getRelativeTime(lastBackup.createdAt)}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs text-green-600">Success</span>
                  </div>
                )}
                
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <Clock className="text-blue-600" size={16} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-blue-800">Next Backup</p>
                      <p className="text-xs text-blue-600">
                        {nextBackup.toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs text-blue-600">Scheduled</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
