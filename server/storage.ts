import { subscribers, contactMessages, type Subscriber, type InsertSubscriber, type ContactMessage, type InsertContactMessage } from "@shared/schema";

export interface IStorage {
  // Subscribers
  getSubscribers(): Promise<Subscriber[]>;
  createSubscriber(subscriber: InsertSubscriber): Promise<Subscriber>;
  
  // Contact Messages
  getContactMessages(): Promise<ContactMessage[]>;
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
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
    };
    this.contactMessages.set(id, message);
    return message;
  }
}

export const storage = new MemStorage();
