import { subscribers, contactMessages, type Subscriber, type InsertSubscriber, type ContactMessage, type InsertContactMessage } from "@shared/schema";
import type { Deal, Metric, Activity } from "./types";

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

  async getSubscribers(): Promise<Subscriber[]> {
    return Array.from(this.subscribers.values())
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

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

  async getContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values())
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

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

export const storage = new MemStorage();
