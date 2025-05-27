import { pgTable, text, serial, integer, boolean, decimal, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const properties = pgTable("properties", {
  id: serial("id").primaryKey(),
  address: text("address").notNull(),
  price: integer("price").notNull(),
  bedrooms: integer("bedrooms").notNull(),
  bathrooms: decimal("bathrooms", { precision: 3, scale: 1 }).notNull(),
  squareFeet: integer("square_feet").notNull(),
  lotSize: decimal("lot_size", { precision: 10, scale: 2 }),
  yearBuilt: integer("year_built").notNull(),
  mlsNumber: text("mls_number").notNull().unique(),
  status: text("status").notNull(), // 'active', 'pending', 'sold'
  photos: text("photos").array().notNull().default([]),
  description: text("description").notNull(),
  features: text("features").array().notNull().default([]),
  virtualTourUrl: text("virtual_tour_url"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const marketData = pgTable("market_data", {
  id: serial("id").primaryKey(),
  month: text("month").notNull(),
  year: integer("year").notNull(),
  medianPrice: integer("median_price").notNull(),
  averageDaysOnMarket: integer("average_days_on_market").notNull(),
  homesSold: integer("homes_sold").notNull(),
  activeListings: integer("active_listings").notNull(),
  pricePerSqft: integer("price_per_sqft").notNull(),
  priceAppreciation: decimal("price_appreciation", { precision: 5, scale: 2 }),
  monthsOfInventory: decimal("months_of_inventory", { precision: 4, scale: 1 }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const leads = pgTable("leads", {
  id: serial("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  interest: text("interest").notNull(), // 'buying', 'selling', 'market_analysis', 'investment'
  message: text("message"),
  source: text("source").notNull().default("website"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const amenities = pgTable("amenities", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  category: text("category").notNull(), // 'recreation', 'shopping', 'dining', 'education', 'healthcare'
  description: text("description").notNull(),
  distance: text("distance"), // e.g., "5 minutes drive"
  address: text("address"),
  imageUrl: text("image_url"),
});

export const schools = pgTable("schools", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  level: text("level").notNull(), // 'elementary', 'middle', 'high'
  rating: integer("rating"), // out of 10
  district: text("district").notNull(),
  address: text("address"),
  website: text("website"),
  distance: text("distance"),
});

// Insert schemas
export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertPropertySchema = createInsertSchema(properties).omit({
  id: true,
  createdAt: true,
});

export const insertMarketDataSchema = createInsertSchema(marketData).omit({
  id: true,
  createdAt: true,
});

export const insertLeadSchema = createInsertSchema(leads).omit({
  id: true,
  createdAt: true,
});

export const insertAmenitySchema = createInsertSchema(amenities).omit({
  id: true,
});

export const insertSchoolSchema = createInsertSchema(schools).omit({
  id: true,
});

// Types
export type User = typeof users.$inferSelect;
export type InsertUser = z.infer<typeof insertUserSchema>;

export type Property = typeof properties.$inferSelect;
export type InsertProperty = z.infer<typeof insertPropertySchema>;

export type MarketData = typeof marketData.$inferSelect;
export type InsertMarketData = z.infer<typeof insertMarketDataSchema>;

export type Lead = typeof leads.$inferSelect;
export type InsertLead = z.infer<typeof insertLeadSchema>;

export type Amenity = typeof amenities.$inferSelect;
export type InsertAmenity = z.infer<typeof insertAmenitySchema>;

export type School = typeof schools.$inferSelect;
export type InsertSchool = z.infer<typeof insertSchoolSchema>;
