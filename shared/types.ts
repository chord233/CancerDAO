// 定义前后端共享的数据类型（前端视图/接口返回）
// -------------------------------------------------
// 这些类型用于 Express 接口与前端页面/组件之间的数据传递，
// 有助于在开发阶段获得更好的类型提示与编译期校验。
export interface Deal {
  id: number;
  title: string;   // 交易标题（如资助项目名称）
  amount: number;  // 金额（单位：整数，具体含义由前端自行展示）
  status: string;  // 状态（如 pending/completed 等）
  date: string;    // 日期（ISO 字符串或 YYYY-MM-DD）
}

export interface Metric {
  id: number;
  name: string;                          // 指标名称
  value: number;                         // 指标当前值
  change: number;                        // 相对变化（百分比数值，如 12.5 表示 +12.5%）
  trend: 'up' | 'down' | 'neutral';      // 趋势
}

export interface Activity {
  id: number;
  type: string;        // 活动类型（如 donation/project 等）
  description: string; // 活动描述
  date: string;        // 活动日期（ISO 字符串或 YYYY-MM-DD）
  user: string;        // 触发该活动的用户/主体
}

export interface Backup {
  id: number;
  filename: string; // 备份文件名
  size: number;     // 大小（字节）
  createdAt: string;// 创建时间（ISO 字符串）
  status: string;   // 状态（如 completed/failed 等）
}

export interface Forecast {
  id: number;
  period: string;     // 预测周期（如 Q3 2025）
  prediction: number; // 预测值
  confidence: number; // 置信度（0~1）
  trend: string;      // 趋势说明（如 increasing/decreasing）
}
