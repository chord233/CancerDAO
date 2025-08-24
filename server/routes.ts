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

export async function registerRoutes(app: Express): Promise<Server> {
  // Subscribers endpoints
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
      const subscriberData = insertSubscriberSchema.parse(req.body);
      const subscriber = await storage.createSubscriber(subscriberData);
      res.status(201).json({ success: true, message: "Subscription successful" });
    } catch (error) {
      if (error instanceof Error && error.message === 'Email already subscribed') {
        return res.status(400).json({ error: "Email already subscribed" });
      }
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: "Invalid email format", details: error.errors });
      }
      res.status(500).json({ error: "Failed to create subscription" });
    }
  });

  // Contact messages endpoints
  app.get("/api/contact-messages", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      res.json(messages);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch contact messages" });
    }
  });

  app.post("/api/contact", handleContact);

  // 新增 API 路由
  app.get("/api/deals", getDeals);
  app.get("/api/metrics", getMetrics);
  app.get("/api/activities", getActivities);
  
  app.get("/api/backups", getBackups);
  app.post("/api/backups", createBackup);
  
  app.get("/api/forecast", getForecast);
  
  // 导出数据
  app.get("/api/export", (req, res) => {
    const data = {
      deals: storage.getDeals?.() || [],
      metrics: storage.getMetrics?.() || [],
      activities: storage.getActivities?.() || [],
    };
    res.json(data);
  });

  // 图片占位
  app.get("/api/placeholder/:width/:height", (req, res) => {
    const { width, height } = req.params;
    res.redirect(`https://via.placeholder.com/${width}x${height}`);
  });

  const httpServer = createServer(app);
  return httpServer;
}
