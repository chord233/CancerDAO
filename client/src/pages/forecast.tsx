import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RevenueChart } from "@/components/revenue-chart";
import { formatCurrency } from "@/lib/utils";
import { TrendingUp, TrendingDown, DollarSign, Target } from "lucide-react";

export default function Forecast() {
  const { data: forecastData, isLoading } = useQuery({
    queryKey: ["/api/forecast"],
  });

  const { data: metrics } = useQuery({
    queryKey: ["/api/metrics"],
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-slate-500">Loading forecast...</div>
      </div>
    );
  }

  const currentMonthForecast = forecastData?.forecastedRevenue[forecastData.forecastedRevenue.length - 1] || 0;
  const lastMonthActual = forecastData?.actualRevenue[forecastData.actualRevenue.length - 1] || 0;
  const growthRate = lastMonthActual > 0 ? ((currentMonthForecast - lastMonthActual) / lastMonthActual) * 100 : 0;

  return (
    <div className="flex-1 overflow-y-auto">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">Revenue Forecast</h2>
            <p className="text-sm text-slate-500">Analyze revenue trends and future projections</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6">
        {/* Forecast Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Target className="text-blue-600" size={24} />
                </div>
                <span className="text-sm font-medium text-green-600">
                  {growthRate > 0 ? '+' : ''}{growthRate.toFixed(1)}%
                </span>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-1">
                {formatCurrency(currentMonthForecast)}
              </h3>
              <p className="text-sm text-slate-500">Forecasted Revenue</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <DollarSign className="text-green-600" size={24} />
                </div>
                <span className="text-sm font-medium text-blue-600">Current</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-1">
                {formatCurrency(lastMonthActual)}
              </h3>
              <p className="text-sm text-slate-500">Actual Revenue</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="text-amber-600" size={24} />
                </div>
                <span className="text-sm font-medium text-green-600">Pipeline</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-1">
                {formatCurrency(metrics?.activePipeline || 0)}
              </h3>
              <p className="text-sm text-slate-500">Pipeline Value</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <TrendingDown className="text-purple-600" size={24} />
                </div>
                <span className="text-sm font-medium text-slate-600">Confidence</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-1">
                {metrics?.conversionRate || 0}%
              </h3>
              <p className="text-sm text-slate-500">Conversion Rate</p>
            </CardContent>
          </Card>
        </div>

        {/* Chart */}
        <div className="grid grid-cols-1 gap-6">
          <RevenueChart />
          
          <Card>
            <CardHeader>
              <CardTitle>Forecast Methodology</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-medium text-blue-600">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-800">Historical Analysis</h4>
                    <p className="text-sm text-slate-600">
                      Revenue forecasts are based on historical deal closure patterns and seasonal trends.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-medium text-green-600">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-800">Pipeline Probability</h4>
                    <p className="text-sm text-slate-600">
                      Active deals are weighted by their probability of closing and expected timeline.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-medium text-amber-600">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-800">Market Conditions</h4>
                    <p className="text-sm text-slate-600">
                      Forecasts account for current market conditions and conversion rate trends.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
