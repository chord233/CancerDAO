import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertSubscriberSchema, insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";
import { handleContact } from './handlers/contact';
import { getDeals } from './handlers/deals';
import { getMetrics } from './handlers/metrics';
import { getActivities } from './handlers/activities';
import { getBackups, createBackup } from './handlers/backups';
import { getForecast } from './handlers/forecast';

/**
 * 注册所有 API 路由并创建 HTTP 服务器
 * ---------------------------------
 * 路由概览：
 * - GET  /api/subscribers        → 列出订阅者
 * - POST /api/subscribe          → 新增订阅（使用 Zod 校验）
 * - GET  /api/contact-messages   → 列出联系表单消息
 * - POST /api/contact            → 处理联系表单并发送邮件
 * - GET  /api/deals              → 获取交易（模拟数据）
 * - GET  /api/metrics            → 获取指标（模拟数据）
 * - GET  /api/activities         → 获取活动（模拟数据）
 * - GET  /api/backups            → 列出备份（模拟数据）
 * - POST /api/backups            → 触发创建备份（模拟数据）
 * - GET  /api/forecast           → 获取预测（模拟数据）
 * - GET  /api/export             → 导出聚合数据（模拟数据）
 * - GET  /api/placeholder/:w/:h → 重定向到占位图
 */
export async function registerRoutes(app: Express): Promise<Server> {
  // 订阅者相关端点
  app.get("/api/subscribers", async (req, res) => {
    try {
      const subscribers = await storage.getSubscribers();
      res.json(subscribers);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch subscribers" });
    }
  });

  app.post("/api/subscribe", async (req, res) => {
    try {
      // 使用 Zod 对输入进行服务器端校验
      const subscriberData = insertSubscriberSchema.parse(req.body);
      const subscriber = await storage.createSubscriber(subscriberData);
      res.status(201).json({ success: true, message: "Subscription successful" });
    } catch (error) {
      // 业务错误：重复订阅
      if (error instanceof Error && error.message === 'Email already subscribed') {
        return res.status(400).json({ error: "Email already subscribed" });
      }
      // 校验错误：请求体字段不符合 Schema
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: "Invalid email format", details: error.errors });
      }
      res.status(500).json({ error: "Failed to create subscription" });
    }
  });

  // 联系消息相关端点
  app.get("/api/contact-messages", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      res.json(messages);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch contact messages" });
    }
  });

  app.post("/api/contact", handleContact);

  // 业务演示用的模拟数据端点
  app.get("/api/deals", getDeals);
  app.get("/api/metrics", getMetrics);
  app.get("/api/activities", getActivities);
  
  app.get("/api/backups", getBackups);
  app.post("/api/backups", createBackup);
  
  app.get("/api/forecast", getForecast);
  
  // 导出聚合后的模拟数据
  app.get("/api/export", (req, res) => {
    const data = {
      deals: storage.getDeals?.() || [],
      metrics: storage.getMetrics?.() || [],
      activities: storage.getActivities?.() || [],
    };
    res.json(data);
  });

  // 图片占位（重定向到第三方占位图服务）
  app.get("/api/placeholder/:width/:height", (req, res) => {
    const { width, height } = req.params;
    res.redirect(`https://via.placeholder.com/${width}x${height}`);
  });

  // 创建并返回 HTTP 服务器实例（便于与 Vite 或其他中间件集成）
  const httpServer = createServer(app);
  return httpServer;
}

