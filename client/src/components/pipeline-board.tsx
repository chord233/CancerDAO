import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { DealCard } from "./deal-card";
import { AddDealDialog } from "./add-deal-dialog";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import type { Deal } from "@shared/schema";

const PIPELINE_STAGES = [
  { id: "lead", name: "Lead", color: "bg-blue-100 text-blue-700" },
  { id: "qualified", name: "Qualified", color: "bg-indigo-100 text-indigo-700" },
  { id: "proposal", name: "Proposal", color: "bg-amber-100 text-amber-700" },
  { id: "negotiation", name: "Negotiation", color: "bg-orange-100 text-orange-700" },
  { id: "closed-won", name: "Closed Won", color: "bg-green-100 text-green-700" },
];

export function PipelineBoard() {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [draggedDeal, setDraggedDeal] = useState<Deal | null>(null);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: deals = [], isLoading } = useQuery({
    queryKey: ["/api/deals"],
  });

  const updateDealMutation = useMutation({
    mutationFn: ({ id, ...data }: { id: number } & Partial<Deal>) =>
      apiRequest("PUT", `/api/deals/${id}`, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/deals"] });
      queryClient.invalidateQueries({ queryKey: ["/api/metrics"] });
      toast({
        title: "Deal updated",
        description: "Deal has been moved to the new stage.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to update deal.",
        variant: "destructive",
      });
    },
  });

  const handleDragStart = (e: React.DragEvent, deal: Deal) => {
    setDraggedDeal(deal);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragEnd = () => {
    setDraggedDeal(null);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const handleDrop = (e: React.DragEvent, newStage: string) => {
    e.preventDefault();
    if (draggedDeal && draggedDeal.stage !== newStage) {
      updateDealMutation.mutate({
        id: draggedDeal.id,
        stage: newStage,
      });
    }
    setDraggedDeal(null);
  };

  const getDealsForStage = (stage: string) => {
    return deals.filter((deal: Deal) => deal.stage === stage);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-slate-500">Loading pipeline...</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Sales Pipeline</h2>
          <p className="text-sm text-slate-500">Drag and drop deals to update their stage</p>
        </div>
        <Button onClick={() => setIsAddDialogOpen(true)}>
          <Plus className="w-4 h-4 mr-2" />
          Add Deal
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {PIPELINE_STAGES.map((stage) => {
          const stageDeals = getDealsForStage(stage.id);
          return (
            <div
              key={stage.id}
              className="pipeline-stage"
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, stage.id)}
            >
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium text-slate-700">{stage.name}</h4>
                <span className={`text-xs px-2 py-1 rounded-full ${stage.color}`}>
                  {stageDeals.length}
                </span>
              </div>
              <div className="space-y-3">
                {stageDeals.map((deal: Deal) => (
                  <DealCard
                    key={deal.id}
                    deal={deal}
                    isDragging={draggedDeal?.id === deal.id}
                    onDragStart={handleDragStart}
                    onDragEnd={handleDragEnd}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <AddDealDialog
        open={isAddDialogOpen}
        onOpenChange={setIsAddDialogOpen}
      />
    </div>
  );
}
