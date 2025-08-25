import { Pool, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import ws from "ws";
import * as schema from "@shared/schema";

/**
 * 数据库初始化（Neon + Drizzle）
 * ---------------------------------
 * - 使用 Neon 的 serverless 连接池（基于 WebSocket）
 * - 通过 drizzle-orm 提供类型安全的数据库访问
 * - 从 `@shared/schema` 注入表结构与 Zod 校验
 */
neonConfig.webSocketConstructor = ws;

/**
 * 环境变量校验
 * -------------
 * - 确保 DATABASE_URL 环境变量已设置
 * - 如果未设置，则抛出错误提示
 */
if (!process.env.DATABASE_URL) {
  throw new Error(
    "DATABASE_URL must be set. Did you forget to provision a database?",
  );
}

// 基于环境变量创建连接池
export const pool = new Pool({ connectionString: process.env.DATABASE_URL });
// 将连接池与表结构交由 drizzle 管理，提供类型安全的查询能力
export const db = drizzle({ client: pool, schema });
