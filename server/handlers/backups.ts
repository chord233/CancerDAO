import { Request, Response } from 'express';
import type { Backup } from '../../shared/types';

const mockBackups: Backup[] = [
  {
    id: 1,
    filename: "backup_2025_08_22.zip",
    size: 1024576, // 1MB
    createdAt: "2025-08-22T10:00:00Z",
    status: "completed"
  }
];

export const getBackups = async (req: Request, res: Response) => {
  try {
    res.json(mockBackups);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch backups" });
  }
};

export const createBackup = async (req: Request, res: Response) => {
  try {
    const newBackup: Backup = {
      id: mockBackups.length + 1,
      filename: `backup_${new Date().toISOString().split('T')[0].replace(/-/g, '_')}.zip`,
      size: Math.floor(Math.random() * 1000000) + 500000, // Random size between 500KB and 1.5MB
      createdAt: new Date().toISOString(),
      status: "completed"
    };
    mockBackups.push(newBackup);
    res.status(201).json(newBackup);
  } catch (error) {
    res.status(500).json({ error: "Failed to create backup" });
  }
};
