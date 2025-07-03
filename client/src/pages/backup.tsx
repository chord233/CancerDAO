import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Save, Undo, Database, Clock, CheckCircle, AlertCircle, Shield } from "lucide-react";
import { formatDateTime } from "@/lib/utils";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import type { Backup } from "@shared/schema";

export default function BackupPage() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [isCreatingBackup, setIsCreatingBackup] = useState(false);

  const { data: backups = [], isLoading } = useQuery({
    queryKey: ["/api/backups"],
  });

  const createBackupMutation = useMutation({
    mutationFn: () => apiRequest("POST", "/api/backups", {}),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/backups"] });
      toast({
        title: "Backup created",
        description: "Manual backup has been created successfully.",
      });
      setIsCreatingBackup(false);
    },
    onError: () => {
      toast({
        title: "Backup failed",
        description: "Failed to create backup.",
        variant: "destructive",
      });
      setIsCreatingBackup(false);
    },
  });

  const handleCreateBackup = async () => {
    setIsCreatingBackup(true);
    createBackupMutation.mutate();
  };

  const handleRestoreData = () => {
    toast({
      title: "Feature coming soon",
      description: "Data restoration will be available in the next update.",
    });
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success':
        return <CheckCircle className="text-green-600" size={16} />;
      case 'failed':
        return <AlertCircle className="text-red-600" size={16} />;
      default:
        return <Clock className="text-amber-600" size={16} />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success':
        return 'bg-green-100 text-green-700';
      case 'failed':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-amber-100 text-amber-700';
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-slate-500">Loading backup information...</div>
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
          <div>
            <h2 className="text-2xl font-bold text-slate-800">Backup & Recovery</h2>
            <p className="text-sm text-slate-500">Manage your data backups and recovery options</p>
          </div>
          <div className="flex items-center space-x-2">
            <Button onClick={handleCreateBackup} disabled={isCreatingBackup}>
              <Save className="w-4 h-4 mr-2" />
              {isCreatingBackup ? "Creating..." : "Manual Backup"}
            </Button>
            <Button variant="outline" onClick={handleRestoreData}>
              <Undo className="w-4 h-4 mr-2" />
              Restore Data
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6">
        {/* Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="text-green-600" size={24} />
                </div>
                <Badge variant="outline" className="bg-green-50 text-green-700">
                  Active
                </Badge>
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-1">
                Auto Backup
              </h3>
              <p className="text-sm text-slate-500">
                {lastBackup ? `Last: ${formatDateTime(lastBackup.createdAt)}` : 'No backups yet'}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Clock className="text-blue-600" size={24} />
                </div>
                <Badge variant="outline" className="bg-blue-50 text-blue-700">
                  Scheduled
                </Badge>
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-1">
                Next Backup
              </h3>
              <p className="text-sm text-slate-500">
                {nextBackup.toLocaleString()}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Database className="text-purple-600" size={24} />
                </div>
                <Badge variant="outline" className="bg-purple-50 text-purple-700">
                  {backups.length}
                </Badge>
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-1">
                Total Backups
              </h3>
              <p className="text-sm text-slate-500">
                Available for recovery
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Backup Information */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="w-5 h-5 mr-2" />
              Backup Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                <strong>Automatic Backups:</strong> Your data is automatically backed up every 24 hours. 
                Manual backups can be created at any time for additional protection. 
                All backups are stored securely and can be used to restore your data if needed.
              </AlertDescription>
            </Alert>
            
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-slate-800 mb-2">What's included in backups:</h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• All sales deals and pipeline data</li>
                  <li>• Activity logs and history</li>
                  <li>• System configuration</li>
                  <li>• User preferences</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-slate-800 mb-2">Backup schedule:</h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Daily automatic backups at 3:00 AM</li>
                  <li>• Manual backups available anytime</li>
                  <li>• 30-day retention policy</li>
                  <li>• Encrypted storage</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Backup History */}
        <Card>
          <CardHeader>
            <CardTitle>Backup History</CardTitle>
          </CardHeader>
          <CardContent>
            {backups.length === 0 ? (
              <div className="text-center py-8">
                <Database className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                <p className="text-slate-500">No backups available yet</p>
                <p className="text-sm text-slate-400 mt-2">
                  Create your first backup to get started
                </p>
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Filename</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Size</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {backups.map((backup: Backup) => (
                    <TableRow key={backup.id}>
                      <TableCell className="font-medium">
                        {backup.filename}
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className={
                          backup.type === 'auto' ? 'bg-blue-50 text-blue-700' : 'bg-green-50 text-green-700'
                        }>
                          {backup.type}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          {getStatusIcon(backup.status)}
                          <Badge variant="outline" className={getStatusColor(backup.status)}>
                            {backup.status}
                          </Badge>
                        </div>
                      </TableCell>
                      <TableCell>
                        {backup.size ? formatFileSize(backup.size) : 'N/A'}
                      </TableCell>
                      <TableCell>
                        {formatDateTime(backup.createdAt)}
                      </TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm" onClick={handleRestoreData}>
                          Restore
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
