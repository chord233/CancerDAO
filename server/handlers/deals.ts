import { Request, Response } from 'express';
import type { Deal } from '../../shared/types';

/**
 * 交易（Deal）相关处理器
 * ---------------------------------
 * - 提供获取资金/资助等交易列表的接口（当前为模拟数据）
 * - 类型定义参考 `shared/types.ts` 中的 `Deal`
 */
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

/**
 * GET /api/deals
 * 返回交易列表（模拟）。错误时返回 500。
 */
export const getDeals = async (req: Request, res: Response) => {
  try {
    res.json(mockDeals);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch deals" });
  }
};
