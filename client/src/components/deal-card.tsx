import { Card, CardContent } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";
import type { Deal } from "@shared/schema";

interface DealCardProps {
  deal: Deal;
  isDragging?: boolean;
  onDragStart?: (e: React.DragEvent, deal: Deal) => void;
  onDragEnd?: (e: React.DragEvent) => void;
}

export function DealCard({ deal, isDragging, onDragStart, onDragEnd }: DealCardProps) {
  return (
    <Card
      className={`deal-card ${isDragging ? 'opacity-50' : ''}`}
      draggable
      onDragStart={(e) => onDragStart?.(e, deal)}
      onDragEnd={onDragEnd}
    >
      <CardContent className="p-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-slate-800">
            {deal.company}
          </span>
          <span className="text-xs text-slate-500">
            {formatCurrency(deal.amount)}
          </span>
        </div>
        <p className="text-xs text-slate-600 mb-1">
          {deal.contact}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xs text-slate-500">
            {deal.probability}% probability
          </span>
          <span className="text-xs text-slate-500">
            {deal.expectedCloseDate ? new Date(deal.expectedCloseDate).toLocaleDateString() : 'No date'}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
