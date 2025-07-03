import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { formatCurrency } from "@/lib/utils";

export function RevenueChart() {
  const { data: forecastData, isLoading } = useQuery({
    queryKey: ["/api/forecast"],
  });

  if (isLoading) {
    return (
      <Card className="xl:col-span-2">
        <CardHeader>
          <CardTitle>Revenue Forecast</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80 flex items-center justify-center">
            <div className="text-slate-500">Loading...</div>
          </div>
        </CardContent>
      </Card>
    );
  }

  const chartData = forecastData?.months.map((month: string, index: number) => ({
    month,
    actual: forecastData.actualRevenue[index],
    forecast: forecastData.forecastedRevenue[index],
  })) || [];

  return (
    <Card className="xl:col-span-2">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Revenue Forecast</CardTitle>
          <div className="flex space-x-2">
            <Button size="sm" variant="default">6M</Button>
            <Button size="sm" variant="outline">1Y</Button>
            <Button size="sm" variant="outline">2Y</Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis 
                tickFormatter={(value) => formatCurrency(value)}
              />
              <Tooltip 
                formatter={(value) => [formatCurrency(value as number), ""]}
                labelFormatter={(label) => `Month: ${label}`}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="actual" 
                stroke="#2563eb" 
                name="Actual Revenue"
                strokeWidth={2}
                dot={{ fill: "#2563eb" }}
              />
              <Line 
                type="monotone" 
                dataKey="forecast" 
                stroke="#10b981" 
                name="Forecasted Revenue"
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={{ fill: "#10b981" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
