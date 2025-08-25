import { pgTable, text, serial, integer, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

/**
 * 数据库表结构定义（Drizzle ORM）与校验（Zod）
 * ---------------------------------
 * - `subscribers`：订阅者表，记录邮箱与创建时间
 * - `contact_messages`：联系表单消息，记录用户提交的详细内容
 * - `createInsertSchema`：基于表结构自动生成插入用的 Zod Schema
 */
export const subscribers = pgTable("subscribers", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const contactMessages = pgTable("contact_messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  organization: text("organization"),
  phone: text("phone"),
  privacyAgreed: integer("privacy_agreed").notNull(), // 1 表示同意，0 表示不同意
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// 订阅者插入 Schema：省略自增主键与创建时间
export const insertSubscriberSchema = createInsertSchema(subscribers).omit({
  id: true,
  createdAt: true,
});

// 联系消息插入 Schema：省略自增主键与创建时间；隐私同意需为 1（true）
export const insertContactMessageSchema = createInsertSchema(contactMessages).omit({
  id: true,
  createdAt: true,
}).extend({
  privacyAgreed: z.number().min(1, "您必须同意隐私政策才能提交"), // 必须为 1 才视为同意
});

// 推断类型：用于服务端/客户端的类型提示
export type Subscriber = typeof subscribers.$inferSelect;
export type InsertSubscriber = z.infer<typeof insertSubscriberSchema>;
export type ContactMessage = typeof contactMessages.$inferSelect;
export type InsertContactMessage = z.infer<typeof insertContactMessageSchema>;
