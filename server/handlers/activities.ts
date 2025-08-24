import { Request, Response } from 'express';
import type { Activity } from '../../shared/types';

const mockActivities: Activity[] = [
  {
    id: 1,
    type: "donation",
    description: "New donation received",
    date: "2025-08-22",
    user: "Anonymous"
  },
  {
    id: 2,
    type: "project",
    description: "New research project started",
    date: "2025-08-21",
    user: "Research Team"
  }
];

export const getActivities = async (req: Request, res: Response) => {
  try {
    res.json(mockActivities);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch activities" });
  }
};
