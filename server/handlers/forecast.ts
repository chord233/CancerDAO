import { Request, Response } from 'express';
import type { Forecast } from '../../shared/types';

/**
 * 预测（Forecast）相关处理器
 * ---------------------------------
 * - 提供获取财务/指标预测数据的接口（当前为模拟数据）
 * - 类型定义参考 `shared/types.ts` 中的 `Forecast`
 */
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

/**
 * GET /api/forecast
 * 返回预测数据（模拟）。错误时返回 500。
 */
export const getForecast = async (req: Request, res: Response) => {
  try {
    res.json(mockForecasts);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch forecast" });
  }
};
