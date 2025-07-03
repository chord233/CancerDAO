import { deals, activities, backups, type Deal, type InsertDeal, type Activity, type InsertActivity, type Backup, type InsertBackup } from "@shared/schema";

export interface IStorage {
  // Deals
  getDeals(): Promise<Deal[]>;
  getDeal(id: number): Promise<Deal | undefined>;
  createDeal(deal: InsertDeal): Promise<Deal>;
  updateDeal(id: number, deal: Partial<InsertDeal>): Promise<Deal | undefined>;
  deleteDeal(id: number): Promise<boolean>;
  
  // Activities
  getActivities(): Promise<Activity[]>;
  getActivitiesForDeal(dealId: number): Promise<Activity[]>;
  createActivity(activity: InsertActivity): Promise<Activity>;
  
  // Backups
  getBackups(): Promise<Backup[]>;
  createBackup(backup: InsertBackup): Promise<Backup>;
  
  // Analytics
  getMetrics(): Promise<{
    totalRevenue: number;
    dealsWon: number;
    activePipeline: number;
    conversionRate: number;
    pipelineBreakdown: { [key: string]: number };
  }>;
}

export class MemStorage implements IStorage {
  private deals: Map<number, Deal>;
  private activities: Map<number, Activity>;
  private backups: Map<number, Backup>;
  private currentDealId: number;
  private currentActivityId: number;
  private currentBackupId: number;

  constructor() {
    this.deals = new Map();
    this.activities = new Map();
    this.backups = new Map();
    this.currentDealId = 1;
    this.currentActivityId = 1;
    this.currentBackupId = 1;
    
    // Initialize with some sample data for demonstration
    this.initializeSampleData();
  }

  private initializeSampleData() {
    const sampleDeals: Deal[] = [
      {
        id: 1,
        company: "TechCorp Inc.",
        contact: "John Smith",
        email: "john@techcorp.com",
        phone: "+1-555-0101",
        amount: "15000.00",
        stage: "lead",
        probability: 25,
        expectedCloseDate: new Date("2024-08-15"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        company: "RetailMax",
        contact: "Sarah Johnson",
        email: "sarah@retailmax.com",
        phone: "+1-555-0102",
        amount: "8000.00",
        stage: "lead",
        probability: 20,
        expectedCloseDate: new Date("2024-08-20"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        company: "MegaStore",
        contact: "Lisa Wong",
        email: "lisa@megastore.com",
        phone: "+1-555-0103",
        amount: "45000.00",
        stage: "qualified",
        probability: 50,
        expectedCloseDate: new Date("2024-09-01"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        company: "ShopEasy",
        contact: "Anna Martinez",
        email: "anna@shopeasy.com",
        phone: "+1-555-0104",
        amount: "32000.00",
        stage: "proposal",
        probability: 70,
        expectedCloseDate: new Date("2024-08-25"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        company: "SuperMart",
        contact: "Robert Garcia",
        email: "robert@supermart.com",
        phone: "+1-555-0105",
        amount: "75000.00",
        stage: "negotiation",
        probability: 80,
        expectedCloseDate: new Date("2024-09-10"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 6,
        company: "EliteRetail",
        contact: "Emma Thompson",
        email: "emma@eliteretail.com",
        phone: "+1-555-0106",
        amount: "95000.00",
        stage: "closed-won",
        probability: 100,
        expectedCloseDate: new Date("2024-07-15"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    sampleDeals.forEach(deal => {
      this.deals.set(deal.id, deal);
    });
    
    this.currentDealId = 7;
  }

  async getDeals(): Promise<Deal[]> {
    return Array.from(this.deals.values());
  }

  async getDeal(id: number): Promise<Deal | undefined> {
    return this.deals.get(id);
  }

  async createDeal(insertDeal: InsertDeal): Promise<Deal> {
    const id = this.currentDealId++;
    const deal: Deal = {
      ...insertDeal,
      id,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.deals.set(id, deal);
    
    // Create activity
    await this.createActivity({
      dealId: id,
      type: "created",
      description: `Deal created with ${deal.company}`,
    });
    
    return deal;
  }

  async updateDeal(id: number, updates: Partial<InsertDeal>): Promise<Deal | undefined> {
    const deal = this.deals.get(id);
    if (!deal) return undefined;

    const updatedDeal: Deal = {
      ...deal,
      ...updates,
      updatedAt: new Date(),
    };
    
    this.deals.set(id, updatedDeal);
    
    // Create activity for stage changes
    if (updates.stage && updates.stage !== deal.stage) {
      await this.createActivity({
        dealId: id,
        type: "moved",
        description: `Deal moved from ${deal.stage} to ${updates.stage}`,
        oldValue: deal.stage,
        newValue: updates.stage,
      });
    }
    
    return updatedDeal;
  }

  async deleteDeal(id: number): Promise<boolean> {
    return this.deals.delete(id);
  }

  async getActivities(): Promise<Activity[]> {
    return Array.from(this.activities.values())
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  async getActivitiesForDeal(dealId: number): Promise<Activity[]> {
    return Array.from(this.activities.values())
      .filter(activity => activity.dealId === dealId)
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  async createActivity(insertActivity: InsertActivity): Promise<Activity> {
    const id = this.currentActivityId++;
    const activity: Activity = {
      ...insertActivity,
      id,
      createdAt: new Date(),
    };
    this.activities.set(id, activity);
    return activity;
  }

  async getBackups(): Promise<Backup[]> {
    return Array.from(this.backups.values())
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  async createBackup(insertBackup: InsertBackup): Promise<Backup> {
    const id = this.currentBackupId++;
    const backup: Backup = {
      ...insertBackup,
      id,
      createdAt: new Date(),
    };
    this.backups.set(id, backup);
    return backup;
  }

  async getMetrics(): Promise<{
    totalRevenue: number;
    dealsWon: number;
    activePipeline: number;
    conversionRate: number;
    pipelineBreakdown: { [key: string]: number };
  }> {
    const deals = Array.from(this.deals.values());
    
    const closedWonDeals = deals.filter(deal => deal.stage === "closed-won");
    const totalRevenue = closedWonDeals.reduce((sum, deal) => sum + parseFloat(deal.amount), 0);
    const dealsWon = closedWonDeals.length;
    
    const activeDeals = deals.filter(deal => deal.stage !== "closed-won" && deal.stage !== "closed-lost");
    const activePipeline = activeDeals.reduce((sum, deal) => sum + parseFloat(deal.amount), 0);
    
    const totalDeals = deals.length;
    const conversionRate = totalDeals > 0 ? Math.round((dealsWon / totalDeals) * 100) : 0;
    
    const pipelineBreakdown: { [key: string]: number } = {};
    deals.forEach(deal => {
      pipelineBreakdown[deal.stage] = (pipelineBreakdown[deal.stage] || 0) + 1;
    });
    
    return {
      totalRevenue,
      dealsWon,
      activePipeline,
      conversionRate,
      pipelineBreakdown,
    };
  }
}

export const storage = new MemStorage();
