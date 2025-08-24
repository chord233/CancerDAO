import { Request, Response } from 'express';
import type { Forecast } from '../../shared/types';

const mockForecasts: Forecast[] = [
  {
    id: 1,
    period: "Q3 2025",
    prediction: 1500000,
    confidence: 0.85,
    trend: "increasing"
  },
  {
    id: 2,
    period: "Q4 2025",
    prediction: 2000000,
    confidence: 0.75,
    trend: "increasing"
  }
];

export const getForecast = async (req: Request, res: Response) => {
  try {
    res.json(mockForecasts);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch forecast" });
  }
};
