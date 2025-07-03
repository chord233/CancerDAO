import { Card, CardContent } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";
import { DollarSign, Handshake, HourglassIcon, Percent } from "lucide-react";

interface MetricsCardsProps {
  totalRevenue: number;
  dealsWon: number;
  activePipeline: number;
  conversionRate: number;
}

export function MetricsCards({ totalRevenue, dealsWon, activePipeline, conversionRate }: MetricsCardsProps) {
  const metrics = [
    {
      title: "Total Revenue",
      value: formatCurrency(totalRevenue),
      change: "+12%",
      icon: DollarSign,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      changeColor: "text-green-600",
    },
    {
      title: "Deals Won",
      value: dealsWon.toString(),
      change: "+8%",
      icon: Handshake,
      color: "text-green-600",
      bgColor: "bg-green-100",
      changeColor: "text-green-600",
    },
    {
      title: "Active Pipeline",
      value: formatCurrency(activePipeline),
      change: "23",
      icon: HourglassIcon,
      color: "text-amber-600",
      bgColor: "bg-amber-100",
      changeColor: "text-amber-600",
    },
    {
      title: "Conversion Rate",
      value: `${conversionRate}%`,
      change: "↑2%",
      icon: Percent,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
      changeColor: "text-green-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {metrics.map((metric, index) => (
        <Card key={index} className="metric-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${metric.bgColor}`}>
                <metric.icon className={`${metric.color}`} size={24} />
              </div>
              <span className={`text-sm font-medium ${metric.changeColor}`}>
                {metric.change}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-1">
              {metric.value}
            </h3>
            <p className="text-sm text-slate-500">{metric.title}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
