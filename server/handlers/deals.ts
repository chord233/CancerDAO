import { Request, Response } from 'express';
import type { Deal } from '../../shared/types';

const mockDeals: Deal[] = [
  {
    id: 1,
    title: "Research Grant #1",
    amount: 50000,
    status: "completed",
    date: "2025-08-01"
  },
  {
    id: 2,
    title: "Clinical Trial Funding",
    amount: 100000,
    status: "pending",
    date: "2025-08-15"
  }
];

export const getDeals = async (req: Request, res: Response) => {
  try {
    res.json(mockDeals);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch deals" });
  }
};
