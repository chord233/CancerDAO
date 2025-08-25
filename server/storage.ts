import { subscribers, contactMessages, type Subscriber, type InsertSubscriber, type ContactMessage, type InsertContactMessage } from "@shared/schema";
import type { Deal, Metric, Activity } from "./types";
import { eq, desc } from "drizzle-orm";

/**
 * 存储抽象与内存实现
 * ---------------------------------
 * 本模块定义了 `IStorage` 存储接口以及其内存实现 `MemStorage`。
 * 用途：
 * - 统一管理订阅者（subscribers）与联系消息（contact_messages）的读写操作。
 * - 提供模拟的交易（deals）、指标（metrics）、活动（activities）数据读取接口。
 * - 当前实现使用内存 Map 存储，适用于开发/演示环境；生产应替换为数据库实现。
 */
export interface IStorage {
  // Subscribers
  getSubscribers(): Promise<Subscriber[]>;
  createSubscriber(subscriber: InsertSubscriber): Promise<Subscriber>;
  
  // Contact Messages
  getContactMessages(): Promise<ContactMessage[]>;
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;

  // Additional Data
  getDeals(): Promise<Deal[]>;
  getMetrics(): Promise<Metric[]>;
  getActivities(): Promise<Activity[]>;
}

export class MemStorage implements IStorage {
  private subscribers: Map<number, Subscriber>;
  private contactMessages: Map<number, ContactMessage>;
  private currentSubscriberId: number;
  private currentContactMessageId: number;

  constructor() {
    this.subscribers = new Map();
    this.contactMessages = new Map();
    this.currentSubscriberId = 1;
    this.currentContactMessageId = 1;
  }

  /**
   * 获取所有订阅者，按创建时间倒序排列
   */
  async getSubscribers(): Promise<Subscriber[]> {
    return Array.from(this.subscribers.values())
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  /**
   * 创建订阅者
   * - 去重：若邮箱已存在则抛错
   * - 生成自增 id 与创建时间
   */
  async createSubscriber(insertSubscriber: InsertSubscriber): Promise<Subscriber> {
    // Check if email already exists
    const existingSubscriber = Array.from(this.subscribers.values())
      .find(sub => sub.email === insertSubscriber.email);
    
    if (existingSubscriber) {
      throw new Error('Email already subscribed');
    }

    const id = this.currentSubscriberId++;
    const subscriber: Subscriber = {
      ...insertSubscriber,
      id,
      createdAt: new Date(),
    };
    this.subscribers.set(id, subscriber);
    return subscriber;
  }

  /**
   * 获取所有联系消息，按创建时间倒序排列
   */
  async getContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values())
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  /**
   * 创建联系消息
   * - 生成自增 id 与创建时间
   * - 可选字段 `organization`/`phone` 若未提供存为 null
   */
  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = this.currentContactMessageId++;
    const message: ContactMessage = {
      ...insertMessage,
      id,
      createdAt: new Date(),
      organization: insertMessage.organization || null,
      phone: insertMessage.phone || null
    };
    this.contactMessages.set(id, message);
    return message;
  }

  // Mock data implementations
  /**
   * 获取模拟交易数据（用于前端演示）
   */
  async getDeals(): Promise<Deal[]> {
    return [
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
  }

  /**
   * 获取模拟指标数据（用于前端演示）
   */
  async getMetrics(): Promise<Metric[]> {
    return [
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
      }
    ];
  }

  /**
   * 获取模拟活动时间线数据（用于前端演示）
   */
  async getActivities(): Promise<Activity[]> {
    return [
      {
        id: 1,
        type: "donation",
        description: "New donation received",
        date: "2025-08-22",
        user: "Anonymous"
      },
      {
        id: 2,
        type: "project",
        description: "New research project started",
        date: "2025-08-21",
        user: "Research Team"
      }
    ];
  }
}

/**
 * 基于 Drizzle + Neon 的数据库实现
 * - 动态导入 `db`，避免在未配置数据库时模块加载阶段抛错
 */
export class DbStorage implements IStorage {
  private async getDb() {
    // 动态导入，只有在真正调用方法时才解析数据库依赖
    const mod = await import("./db");
    return mod.db;
  }

  async getSubscribers(): Promise<Subscriber[]> {
    const db = await this.getDb();
    const rows = await db.select().from(subscribers).orderBy(desc(subscribers.createdAt));
    return rows as Subscriber[];
  }

  async createSubscriber(insertSubscriber: InsertSubscriber): Promise<Subscriber> {
    const db = await this.getDb();
    // 去重检查
    const existing = await db.select().from(subscribers).where(eq(subscribers.email, insertSubscriber.email)).limit(1);
    if (existing.length > 0) {
      throw new Error('Email already subscribed');
    }
    const [row] = await db.insert(subscribers).values(insertSubscriber).returning();
    // returning() 包含 id/createdAt
    return row as Subscriber;
  }

  async getContactMessages(): Promise<ContactMessage[]> {
    const db = await this.getDb();
    const rows = await db.select().from(contactMessages).orderBy(desc(contactMessages.createdAt));
    return rows as ContactMessage[];
  }

  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const db = await this.getDb();
    const [row] = await db.insert(contactMessages).values(insertMessage).returning();
    return row as ContactMessage;
  }

  // 仍返回演示数据，后续可替换为真实表
  async getDeals(): Promise<Deal[]> { return new MemStorage().getDeals(); }
  async getMetrics(): Promise<Metric[]> { return new MemStorage().getMetrics(); }
  async getActivities(): Promise<Activity[]> { return new MemStorage().getActivities(); }
}

// 根据环境变量切换实现：默认内存，设置 USE_DB=true 使用数据库
export const storage: IStorage = process.env.USE_DB === 'true' ? new DbStorage() : new MemStorage();

