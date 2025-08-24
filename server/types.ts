// 定义前端需要的数据类型
export interface Deal {
    id: number;
    title: string;
    amount: number;
    status: string;
    date: string;
}

export interface Metric {
    id: number;
    name: string;
    value: number;
    change: number;
    trend: 'up' | 'down' | 'neutral';
}

export interface Activity {
    id: number;
    type: string;
    description: string;
    date: string;
    user: string;
}
