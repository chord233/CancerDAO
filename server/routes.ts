import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertSubscriberSchema, insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";

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

  app.post("/api/contact", async (req, res) => {
    try {
      const messageData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(messageData);
      res.status(201).json({ success: true, message: "Message sent successfully" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: "Invalid message data", details: error.errors });
      }
      res.status(500).json({ error: "Failed to send message" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
