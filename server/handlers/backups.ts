import { Request, Response } from 'express';
import type { Backup } from '../../shared/types';

/**
 * 备份（Backup）相关处理器
 * ---------------------------------
 * - 提供查询备份列表与创建备份的接口（当前为内存模拟数据）
 * - 类型定义参考 `shared/types.ts` 中的 `Backup`
 */
const mockBackups: Backup[] = [
  {
    id: 1,
    filename: "backup_2025_08_22.zip",
    size: 1024576, // 1MB
    createdAt: "2025-08-22T10:00:00Z",
    status: "completed"
  }
];

/**
 * GET /api/backups
 * 返回备份列表（模拟）。错误时返回 500。
 */
export const getBackups = async (req: Request, res: Response) => {
  try {
    res.json(mockBackups);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch backups" });
  }
};

/**
 * POST /api/backups
 * 创建新的备份记录（模拟），随机生成大小与时间戳。
 * 成功返回 201 + 新备份记录。错误时返回 500。
 */
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

