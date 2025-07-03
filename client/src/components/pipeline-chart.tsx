import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { getPipelineStageColor } from "@/lib/utils";

interface PipelineChartProps {
  pipelineBreakdown: { [key: string]: number };
}

const COLORS = {
  lead: "#3b82f6",
  qualified: "#6366f1",
  proposal: "#f59e0b",
  negotiation: "#f97316",
  "closed-won": "#10b981",
  "closed-lost": "#ef4444",
};

const STAGE_LABELS = {
  lead: "Lead",
  qualified: "Qualified",
  proposal: "Proposal",
  negotiation: "Negotiation",
  "closed-won": "Closed Won",
  "closed-lost": "Closed Lost",
};

export function PipelineChart({ pipelineBreakdown }: PipelineChartProps) {
  const data = Object.entries(pipelineBreakdown).map(([stage, count]) => ({
    name: STAGE_LABELS[stage as keyof typeof STAGE_LABELS] || stage,
    value: count,
    stage,
  }));

  return (
    <Card>
      <CardHeader>
        <CardTitle>Pipeline Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4 mb-6">
          {Object.entries(pipelineBreakdown).map(([stage, count]) => (
            <div key={stage} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div 
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: COLORS[stage as keyof typeof COLORS] || "#64748b" }}
                />
                <span className="text-sm text-slate-600">
                  {STAGE_LABELS[stage as keyof typeof STAGE_LABELS] || stage}
                </span>
              </div>
              <span className="text-sm font-medium text-slate-800">
                {count}
              </span>
            </div>
          ))}
        </div>
        
        <div className="h-32">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={30}
                outerRadius={60}
                paddingAngle={2}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={COLORS[entry.stage as keyof typeof COLORS] || "#64748b"} 
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
