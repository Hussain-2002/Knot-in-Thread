import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const contactMessages = pgTable("contact_messages", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  projectType: text("project_type"),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertContactMessageSchema = createInsertSchema(contactMessages).omit({
  id: true,
  createdAt: true,
});

export type InsertContactMessage = z.infer<typeof insertContactMessageSchema>;
export type ContactMessage = typeof contactMessages.$inferSelect;

// Gallery item type for frontend use
export type GalleryItem = {
  id: string;
  title: string;
  description: string;
  category: 'toys' | 'home-decor' | 'accessories' | 'wearables';
  imageUrl: string;
  featured?: boolean;
};

// Testimonial type for frontend use
export type Testimonial = {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
};
