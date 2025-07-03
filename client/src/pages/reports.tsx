import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Download, FileText, Calendar, DollarSign } from "lucide-react";
import { formatCurrency, formatDate, getPipelineStageColor } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import type { Deal } from "@shared/schema";

export default function Reports() {
  const { toast } = useToast();

  const { data: deals = [], isLoading } = useQuery({
    queryKey: ["/api/deals"],
  });

  const { data: metrics } = useQuery({
    queryKey: ["/api/metrics"],
  });

  const handleExportReport = async (format: 'csv' | 'pdf') => {
    try {
      if (format === 'csv') {
        const response = await fetch("/api/export", {
          credentials: "include",
        });
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.style.display = "none";
        a.href = url;
        a.download = `sales_report_${new Date().toISOString().split('T')[0]}.csv`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        toast({
          title: "Export successful",
          description: "Sales report exported to CSV.",
        });
      } else {
        toast({
          title: "Feature coming soon",
          description: "PDF export will be available in the next update.",
        });
      }
    } catch (error) {
      toast({
        title: "Export failed",
        description: "Failed to export report.",
        variant: "destructive",
      });
    }
  };

  // Calculate report metrics
  const totalDeals = deals.length;
  const wonDeals = deals.filter((deal: Deal) => deal.stage === "closed-won");
  const lostDeals = deals.filter((deal: Deal) => deal.stage === "closed-lost");
  const activeDeals = deals.filter((deal: Deal) => !["closed-won", "closed-lost"].includes(deal.stage));
  
  const wonValue = wonDeals.reduce((sum, deal) => sum + parseFloat(deal.amount), 0);
  const lostValue = lostDeals.reduce((sum, deal) => sum + parseFloat(deal.amount), 0);
  const activeValue = activeDeals.reduce((sum, deal) => sum + parseFloat(deal.amount), 0);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-slate-500">Loading reports...</div>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">Sales Reports</h2>
            <p className="text-sm text-slate-500">Comprehensive sales analytics and reporting</p>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" onClick={() => handleExportReport('csv')}>
              <Download className="w-4 h-4 mr-2" />
              Export CSV
            </Button>
            <Button variant="outline" onClick={() => handleExportReport('pdf')}>
              <FileText className="w-4 h-4 mr-2" />
              Export PDF
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <FileText className="text-blue-600" size={24} />
                </div>
                <span className="text-sm font-medium text-blue-600">Total</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-1">
                {totalDeals}
              </h3>
              <p className="text-sm text-slate-500">Total Deals</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <DollarSign className="text-green-600" size={24} />
                </div>
                <span className="text-sm font-medium text-green-600">Won</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-1">
                {formatCurrency(wonValue)}
              </h3>
              <p className="text-sm text-slate-500">Won Deals ({wonDeals.length})</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                  <Calendar className="text-amber-600" size={24} />
                </div>
                <span className="text-sm font-medium text-amber-600">Active</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-1">
                {formatCurrency(activeValue)}
              </h3>
              <p className="text-sm text-slate-500">Active Pipeline ({activeDeals.length})</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <FileText className="text-red-600" size={24} />
                </div>
                <span className="text-sm font-medium text-red-600">Lost</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-1">
                {formatCurrency(lostValue)}
              </h3>
              <p className="text-sm text-slate-500">Lost Deals ({lostDeals.length})</p>
            </CardContent>
          </Card>
        </div>

        {/* Deals Table */}
        <Card>
          <CardHeader>
            <CardTitle>All Deals</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Company</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Stage</TableHead>
                  <TableHead>Probability</TableHead>
                  <TableHead>Expected Close</TableHead>
                  <TableHead>Created</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {deals.map((deal: Deal) => (
                  <TableRow key={deal.id}>
                    <TableCell className="font-medium">{deal.company}</TableCell>
                    <TableCell>{deal.contact}</TableCell>
                    <TableCell>{formatCurrency(deal.amount)}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className={getPipelineStageColor(deal.stage)}>
                        {deal.stage.replace('-', ' ')}
                      </Badge>
                    </TableCell>
                    <TableCell>{deal.probability}%</TableCell>
                    <TableCell>
                      {deal.expectedCloseDate ? formatDate(deal.expectedCloseDate) : 'No date'}
                    </TableCell>
                    <TableCell>{formatDate(deal.createdAt)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
