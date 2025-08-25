import { Request, Response } from 'express';
import type { Metric } from '../../shared/types';

/**
 * 指标（Metric）相关处理器
 * ---------------------------------
 * - 提供核心指标（如捐赠总额、活跃项目数、社区成员数）
 * - 当前返回模拟数据，类型见 `shared/types.ts` 中的 `Metric`
 */
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

/**
 * GET /api/metrics
 * 返回指标数据（模拟）。错误时返回 500。
 */
export const getMetrics = async (req: Request, res: Response) => {
  try {
    res.json(mockMetrics);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch metrics" });
  }
};
