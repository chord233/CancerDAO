import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertDealSchema, insertActivitySchema, insertBackupSchema } from "@shared/schema";
import { z } from "zod";
import fs from "fs";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // Deals endpoints
  app.get("/api/deals", async (req, res) => {
    try {
      const deals = await storage.getDeals();
      res.json(deals);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch deals" });
    }
  });

  app.get("/api/deals/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const deal = await storage.getDeal(id);
      if (!deal) {
        return res.status(404).json({ error: "Deal not found" });
      }
      res.json(deal);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch deal" });
    }
  });

  app.post("/api/deals", async (req, res) => {
    try {
      const dealData = insertDealSchema.parse(req.body);
      const deal = await storage.createDeal(dealData);
      res.status(201).json(deal);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: "Invalid deal data", details: error.errors });
      }
      res.status(500).json({ error: "Failed to create deal" });
    }
  });

  app.put("/api/deals/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const updates = insertDealSchema.partial().parse(req.body);
      const deal = await storage.updateDeal(id, updates);
      if (!deal) {
        return res.status(404).json({ error: "Deal not found" });
      }
      res.json(deal);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: "Invalid deal data", details: error.errors });
      }
      res.status(500).json({ error: "Failed to update deal" });
    }
  });

  app.delete("/api/deals/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const success = await storage.deleteDeal(id);
      if (!success) {
        return res.status(404).json({ error: "Deal not found" });
      }
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ error: "Failed to delete deal" });
    }
  });

  // Activities endpoints
  app.get("/api/activities", async (req, res) => {
    try {
      const activities = await storage.getActivities();
      res.json(activities);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch activities" });
    }
  });

  app.get("/api/activities/deal/:dealId", async (req, res) => {
    try {
      const dealId = parseInt(req.params.dealId);
      const activities = await storage.getActivitiesForDeal(dealId);
      res.json(activities);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch activities" });
    }
  });

  // Metrics endpoint
  app.get("/api/metrics", async (req, res) => {
    try {
      const metrics = await storage.getMetrics();
      res.json(metrics);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch metrics" });
    }
  });

  // Backup endpoints
  app.get("/api/backups", async (req, res) => {
    try {
      const backups = await storage.getBackups();
      res.json(backups);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch backups" });
    }
  });

  app.post("/api/backups", async (req, res) => {
    try {
      const deals = await storage.getDeals();
      const activities = await storage.getActivities();
      const backups = await storage.getBackups();
      
      const backupData = {
        deals,
        activities,
        backups,
        timestamp: new Date().toISOString(),
      };
      
      const filename = `backup_${Date.now()}.json`;
      const backupPath = path.join(process.cwd(), "backups");
      
      // Ensure backups directory exists
      if (!fs.existsSync(backupPath)) {
        fs.mkdirSync(backupPath, { recursive: true });
      }
      
      const filePath = path.join(backupPath, filename);
      fs.writeFileSync(filePath, JSON.stringify(backupData, null, 2));
      
      const backup = await storage.createBackup({
        filename,
        type: "manual",
        status: "success",
        size: fs.statSync(filePath).size,
      });
      
      res.json(backup);
    } catch (error) {
      res.status(500).json({ error: "Failed to create backup" });
    }
  });

  // Data export endpoint
  app.get("/api/export", async (req, res) => {
    try {
      const deals = await storage.getDeals();
      const csvHeader = "ID,Company,Contact,Email,Phone,Amount,Stage,Probability,Expected Close Date,Created At\n";
      const csvData = deals.map(deal => [
        deal.id,
        deal.company,
        deal.contact,
        deal.email || "",
        deal.phone || "",
        deal.amount,
        deal.stage,
        deal.probability,
        deal.expectedCloseDate?.toISOString() || "",
        deal.createdAt.toISOString()
      ].join(",")).join("\n");
      
      res.setHeader("Content-Type", "text/csv");
      res.setHeader("Content-Disposition", "attachment; filename=deals_export.csv");
      res.send(csvHeader + csvData);
    } catch (error) {
      res.status(500).json({ error: "Failed to export data" });
    }
  });

  // Revenue forecast endpoint
  app.get("/api/forecast", async (req, res) => {
    try {
      const deals = await storage.getDeals();
      const now = new Date();
      const months = [];
      const actualRevenue = [];
      const forecastedRevenue = [];
      
      // Generate last 6 months of data
      for (let i = 5; i >= 0; i--) {
        const month = new Date(now.getFullYear(), now.getMonth() - i, 1);
        months.push(month.toLocaleDateString('en-US', { month: 'short' }));
        
        // Calculate actual revenue for closed deals in this month
        const monthlyRevenue = deals
          .filter(deal => deal.stage === "closed-won" && 
                  deal.updatedAt.getMonth() === month.getMonth() &&
                  deal.updatedAt.getFullYear() === month.getFullYear())
          .reduce((sum, deal) => sum + parseFloat(deal.amount), 0);
        
        actualRevenue.push(monthlyRevenue);
        
        // Simple forecast: actual + 10% growth
        forecastedRevenue.push(monthlyRevenue * 1.1);
      }
      
      res.json({
        months,
        actualRevenue,
        forecastedRevenue,
      });
    } catch (error) {
      res.status(500).json({ error: "Failed to generate forecast" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
