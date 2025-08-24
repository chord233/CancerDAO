import { Request, Response } from 'express';
import type { Metric } from '../../shared/types';

const mockMetrics: Metric[] = [
  {
    id: 1,
    name: "Total Donations",
    value: 1250000,
    change: 12.5,
    trend: "up"
  },
  {
    id: 2,
    name: "Active Projects",
    value: 8,
    change: 33.3,
    trend: "up"
  },
  {
    id: 3,
    name: "Community Members",
    value: 3500,
    change: 15.7,
    trend: "up"
  }
];

export const getMetrics = async (req: Request, res: Response) => {
  try {
    res.json(mockMetrics);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch metrics" });
  }
};
