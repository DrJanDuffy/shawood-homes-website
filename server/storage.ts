import { 
  users, properties, marketData, leads, amenities, schools,
  type User, type InsertUser,
  type Property, type InsertProperty,
  type MarketData, type InsertMarketData,
  type Lead, type InsertLead,
  type Amenity, type InsertAmenity,
  type School, type InsertSchool
} from "@shared/schema";
import { drizzle } from "drizzle-orm/neon-serverless";
import { Pool } from "@neondatabase/serverless";
import { eq, desc } from "drizzle-orm";

export interface IStorage {
  // Users
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Properties
  getAllProperties(): Promise<Property[]>;
  getProperty(id: number): Promise<Property | undefined>;
  getPropertiesByStatus(status: string): Promise<Property[]>;
  createProperty(property: InsertProperty): Promise<Property>;
  updateProperty(id: number, updates: Partial<InsertProperty>): Promise<Property | undefined>;

  // Market Data
  getAllMarketData(): Promise<MarketData[]>;
  getLatestMarketData(): Promise<MarketData | undefined>;
  createMarketData(data: InsertMarketData): Promise<MarketData>;

  // Leads
  getAllLeads(): Promise<Lead[]>;
  createLead(lead: InsertLead): Promise<Lead>;

  // Amenities
  getAllAmenities(): Promise<Amenity[]>;
  getAmenitiesByCategory(category: string): Promise<Amenity[]>;

  // Schools
  getAllSchools(): Promise<School[]>;
  getSchoolsByLevel(level: string): Promise<School[]>;
}

// PostgreSQL Storage Implementation
export class PostgresStorage implements IStorage {
  private db: ReturnType<typeof drizzle>;

  constructor() {
    const pool = new Pool({ connectionString: process.env.DATABASE_URL });
    this.db = drizzle(pool);
    this.seedData();
  }

  private async seedData() {
    try {
      // Check if data already exists
      const existingProperties = await this.db.select().from(properties).limit(1);
      if (existingProperties.length > 0) {
        return; // Data already seeded
      }

      // Seed Properties
      const sampleProperties: InsertProperty[] = [
        {
          address: "1247 Crimson Ridge Drive",
          status: "available",
          price: 2450000,
          bedrooms: 5,
          bathrooms: "4.5",
          squareFeet: 4250,
          lotSize: "0.42 acres",
          yearBuilt: 2023,
          mlsNumber: "2588426",
          photos: [
            "/api/placeholder/800/600",
            "/api/placeholder/800/600",
            "/api/placeholder/800/600",
            "/api/placeholder/800/600"
          ],
          description: "Stunning custom home in prestigious Arcadia Homes Las Vegas community featuring panoramic Red Rock Canyon views. This architectural masterpiece boasts soaring ceilings, premium finishes, and seamless indoor-outdoor living. Chef's kitchen with top-of-the-line appliances, spacious master suite with spa-like bathroom, and private backyard oasis with pool and outdoor kitchen.",
          features: [
            "Red Rock Canyon Views",
            "Custom Design",
            "Gourmet Kitchen",
            "Master Suite",
            "Pool & Spa",
            "3-Car Garage",
            "Smart Home Technology",
            "Premium Finishes"
          ],
          virtualTourUrl: "https://tours.example.com/property1"
        },
        {
          address: "1198 Sunset Ridge Court",
          status: "available", 
          price: 1875000,
          bedrooms: 4,
          bathrooms: "3.5",
          squareFeet: 3650,
          lotSize: "0.35 acres",
          yearBuilt: 2022,
          mlsNumber: "2588427",
          photos: [
            "/api/placeholder/800/600",
            "/api/placeholder/800/600",
            "/api/placeholder/800/600"
          ],
          description: "Elegant single-story home with sophisticated design and premium upgrades throughout. Open floor plan perfect for entertaining, gourmet kitchen with granite countertops, luxurious master retreat, and beautifully landscaped backyard with mountain views.",
          features: [
            "Single Story",
            "Open Floor Plan", 
            "Granite Countertops",
            "Mountain Views",
            "Landscaped Yard",
            "2-Car Garage",
            "Energy Efficient",
            "Designer Lighting"
          ],
          virtualTourUrl: "https://tours.example.com/property2"
        },
        {
          address: "1156 Desert Vista Lane",
          status: "available",
          price: 3200000,
          bedrooms: 6,
          bathrooms: "5.5", 
          squareFeet: 5200,
          lotSize: "0.58 acres",
          yearBuilt: 2024,
          mlsNumber: "2588428",
          photos: [
            "/api/placeholder/800/600",
            "/api/placeholder/800/600",
            "/api/placeholder/800/600",
            "/api/placeholder/800/600",
            "/api/placeholder/800/600"
          ],
          description: "Magnificent estate home featuring the finest in luxury living. Dramatic entry with grand staircase, formal dining and living areas, executive study, gourmet kitchen with butler's pantry, and expansive outdoor entertaining area with infinity pool overlooking the desert landscape.",
          features: [
            "Estate Home",
            "Grand Entry",
            "Executive Study",
            "Butler's Pantry", 
            "Infinity Pool",
            "Desert Views",
            "4-Car Garage",
            "Wine Cellar"
          ],
          virtualTourUrl: "https://tours.example.com/property3"
        }
      ];

      await this.db.insert(properties).values(sampleProperties);

      // Seed Market Data
      const sampleMarketData: InsertMarketData[] = [
        {
          month: "December",
          year: 2024,
          medianPrice: 2250000,
          averageDaysOnMarket: 28,
          homesSold: 12,
          activeListings: 8,
          pricePerSqft: 525,
          priceAppreciation: "12.5%",
          monthsOfInventory: "2.1"
        },
        {
          month: "November", 
          year: 2024,
          medianPrice: 2180000,
          averageDaysOnMarket: 32,
          homesSold: 15,
          activeListings: 10,
          pricePerSqft: 515,
          priceAppreciation: "11.8%",
          monthsOfInventory: "2.3"
        },
        {
          month: "October",
          year: 2024,
          medianPrice: 2125000,
          averageDaysOnMarket: 35,
          homesSold: 18,
          activeListings: 12,
          pricePerSqft: 508,
          priceAppreciation: "10.2%", 
          monthsOfInventory: "2.5"
        }
      ];

      await this.db.insert(marketData).values(sampleMarketData);

      // Seed Amenities
      const sampleAmenities: InsertAmenity[] = [
        {
          name: "Guard Gate Security",
          description: "24/7 manned guard gate providing exclusive access and enhanced security for all residents.",
          category: "Security",
          address: "Arcadia Homes Las Vegas Main Entrance",
          distance: "0.1 miles",
          imageUrl: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop&auto=format"
        },
        {
          name: "Red Rock Canyon National Conservation Area", 
          description: "World-renowned hiking trails, scenic drives, and breathtaking desert landscapes just minutes from your doorstep.",
          category: "Recreation",
          address: "1000 Scenic Loop Dr, Las Vegas, NV",
          distance: "2.5 miles",
          imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&auto=format"
        },
        {
          name: "TPC Las Vegas Golf Course",
          description: "Championship 18-hole golf course designed by Raymond Floyd, featuring stunning desert and mountain views.",
          category: "Golf",
          address: "9851 Canyon Run Dr, Las Vegas, NV",
          distance: "1.8 miles", 
          imageUrl: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=400&h=300&fit=crop&auto=format"
        },
        {
          name: "Downtown Summerlin",
          description: "Premier shopping, dining, and entertainment destination with over 125 stores and restaurants.",
          category: "Shopping",
          address: "1980 Festival Plaza Dr, Las Vegas, NV",
          distance: "3.2 miles",
          imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop&auto=format"
        },
        {
          name: "Red Rock Resort & Casino",
          description: "Luxury resort featuring gaming, dining, spa services, and entertainment in a stunning desert setting.", 
          category: "Entertainment",
          address: "11011 W Charleston Blvd, Las Vegas, NV",
          distance: "4.1 miles",
          imageUrl: "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=400&h=300&fit=crop&auto=format"
        },
        {
          name: "Trails Recreation Center",
          description: "State-of-the-art fitness facility with pools, courts, and fitness classes for all ages.",
          category: "Fitness", 
          address: "1180 N Buffalo Dr, Las Vegas, NV",
          distance: "2.7 miles",
          imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&auto=format"
        }
      ];

      await this.db.insert(amenities).values(sampleAmenities);

      // Seed Schools
      const sampleSchools: InsertSchool[] = [
        {
          name: "Red Rock Elementary School",
          level: "Elementary",
          district: "Clark County School District",
          address: "9825 W Flamingo Rd, Las Vegas, NV",
          website: "https://redrockes.ccsd.net",
          distance: "1.2 miles",
          rating: 9
        },
        {
          name: "Rogich Middle School", 
          level: "Middle",
          district: "Clark County School District",
          address: "10200 Gilespie St, Las Vegas, NV",
          website: "https://rogichms.ccsd.net",
          distance: "2.1 miles",
          rating: 8
        },
        {
          name: "Palo Verde High School",
          level: "High",
          district: "Clark County School District", 
          address: "333 Pavilion Center Dr, Las Vegas, NV",
          website: "https://paloverdehs.ccsd.net",
          distance: "3.5 miles",
          rating: 9
        },
        {
          name: "Faith Lutheran Middle School & High School",
          level: "Private",
          district: "Private School",
          address: "2015 S Hualapai Way, Las Vegas, NV",
          website: "https://www.faithlutheranlv.org",
          distance: "4.2 miles",
          rating: 10
        }
      ];

      await this.db.insert(schools).values(sampleSchools);

    } catch (error) {
      console.error('Error seeding data:', error);
    }
  }

  // Users
  async getUser(id: number): Promise<User | undefined> {
    const result = await this.db.select().from(users).where(eq(users.id, id)).limit(1);
    return result[0];
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const result = await this.db.select().from(users).where(eq(users.username, username)).limit(1);
    return result[0];
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const result = await this.db.insert(users).values(insertUser).returning();
    return result[0];
  }

  // Properties
  async getAllProperties(): Promise<Property[]> {
    return await this.db.select().from(properties);
  }

  async getProperty(id: number): Promise<Property | undefined> {
    const result = await this.db.select().from(properties).where(eq(properties.id, id)).limit(1);
    return result[0];
  }

  async getPropertiesByStatus(status: string): Promise<Property[]> {
    return await this.db.select().from(properties).where(eq(properties.status, status));
  }

  async createProperty(insertProperty: InsertProperty): Promise<Property> {
    const result = await this.db.insert(properties).values(insertProperty).returning();
    return result[0];
  }

  async updateProperty(id: number, updates: Partial<InsertProperty>): Promise<Property | undefined> {
    const result = await this.db.update(properties)
      .set(updates)
      .where(eq(properties.id, id))
      .returning();
    return result[0];
  }

  // Market Data
  async getAllMarketData(): Promise<MarketData[]> {
    return await this.db.select().from(marketData).orderBy(desc(marketData.createdAt));
  }

  async getLatestMarketData(): Promise<MarketData | undefined> {
    const result = await this.db.select().from(marketData)
      .orderBy(desc(marketData.createdAt))
      .limit(1);
    return result[0];
  }

  async createMarketData(insertData: InsertMarketData): Promise<MarketData> {
    const result = await this.db.insert(marketData).values(insertData).returning();
    return result[0];
  }

  // Leads
  async getAllLeads(): Promise<Lead[]> {
    return await this.db.select().from(leads).orderBy(desc(leads.createdAt));
  }

  async createLead(insertLead: InsertLead): Promise<Lead> {
    const leadWithSource = { ...insertLead, source: "website" };
    const result = await this.db.insert(leads).values(leadWithSource).returning();
    return result[0];
  }

  // Amenities
  async getAllAmenities(): Promise<Amenity[]> {
    return await this.db.select().from(amenities);
  }

  async getAmenitiesByCategory(category: string): Promise<Amenity[]> {
    return await this.db.select().from(amenities).where(eq(amenities.category, category));
  }

  // Schools
  async getAllSchools(): Promise<School[]> {
    return await this.db.select().from(schools);
  }

  async getSchoolsByLevel(level: string): Promise<School[]> {
    return await this.db.select().from(schools).where(eq(schools.level, level));
  }
}

// Temporary in-memory storage for immediate functionality
class MemoryStorage implements IStorage {
  private users: User[] = [];
  private properties: Property[] = [];
  private marketDataList: MarketData[] = [];
  private leadsList: Lead[] = [];
  private amenitiesList: Amenity[] = [];
  private schoolsList: School[] = [];
  private nextId = 1;

  constructor() {
    this.seedData();
  }

  private seedData() {
    // Seed sample properties
    const sampleProperties: Property[] = [
      {
        id: 1,
        title: "Luxury Estate with Red Rock Views",
        description: "Stunning 4,200 sq ft custom home with panoramic Red Rock Canyon views in guard-gated Arcadia Homes Las Vegas.",
        price: 2850000,
        bedrooms: 5,
        bathrooms: 4,
        squareFeet: 4200,
        address: "123 Desert Vista Drive",
        city: "Las Vegas",
        state: "NV",
        zipCode: "89135",
        status: "available",
        imageUrl: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop",
        amenities: ["Pool", "Spa", "3-car garage", "Wine cellar"],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        title: "Contemporary Desert Oasis",
        description: "Modern 3,800 sq ft home featuring open floor plan and resort-style backyard.",
        price: 2450000,
        bedrooms: 4,
        bathrooms: 3,
        squareFeet: 3800,
        address: "456 Canyon Ridge Court",
        city: "Las Vegas",
        state: "NV",
        zipCode: "89135",
        status: "available",
        imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
        amenities: ["Pool", "Outdoor kitchen", "Smart home"],
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];
    this.properties = sampleProperties;

    // Seed amenities with the authentic images we updated
    const sampleAmenities: Amenity[] = [
      {
        id: 1,
        name: "Guard Gate Security",
        description: "24/7 manned guard gate providing exclusive access and enhanced security for all residents.",
        category: "Security",
        address: "Arcadia Homes Las Vegas Main Entrance",
        distance: "0.1 miles",
        imageUrl: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop&auto=format"
      },
      {
        id: 2,
        name: "Red Rock Canyon National Conservation Area",
        description: "World-renowned hiking trails, scenic drives, and breathtaking desert landscapes just minutes from your doorstep.",
        category: "Recreation",
        address: "1000 Scenic Loop Dr, Las Vegas, NV",
        distance: "2.5 miles",
        imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&auto=format"
      }
    ];
    this.amenitiesList = sampleAmenities;

    // Seed market data
    const marketData: MarketData[] = [
      {
        id: 1,
        averagePrice: 2650000,
        medianPrice: 2500000,
        totalSales: 18,
        averageDaysOnMarket: 45,
        pricePerSquareFoot: 650,
        inventoryCount: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];
    this.marketDataList = marketData;
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.find(u => u.id === id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return this.users.find(u => u.username === username);
  }

  async createUser(user: InsertUser): Promise<User> {
    const newUser: User = {
      id: this.nextId++,
      ...user,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.users.push(newUser);
    return newUser;
  }

  // Property methods
  async getAllProperties(): Promise<Property[]> {
    return this.properties;
  }

  async getProperty(id: number): Promise<Property | undefined> {
    return this.properties.find(p => p.id === id);
  }

  async getPropertiesByStatus(status: string): Promise<Property[]> {
    return this.properties.filter(p => p.status === status);
  }

  async createProperty(property: InsertProperty): Promise<Property> {
    const newProperty: Property = {
      id: this.nextId++,
      ...property,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.properties.push(newProperty);
    return newProperty;
  }

  async updateProperty(id: number, updates: Partial<InsertProperty>): Promise<Property | undefined> {
    const index = this.properties.findIndex(p => p.id === id);
    if (index === -1) return undefined;
    
    this.properties[index] = {
      ...this.properties[index],
      ...updates,
      updatedAt: new Date()
    };
    return this.properties[index];
  }

  // Market Data methods
  async getAllMarketData(): Promise<MarketData[]> {
    return this.marketDataList;
  }

  async getLatestMarketData(): Promise<MarketData | undefined> {
    return this.marketDataList[this.marketDataList.length - 1];
  }

  async createMarketData(data: InsertMarketData): Promise<MarketData> {
    const newData: MarketData = {
      id: this.nextId++,
      ...data,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.marketDataList.push(newData);
    return newData;
  }

  // Lead methods
  async getAllLeads(): Promise<Lead[]> {
    return this.leadsList;
  }

  async createLead(lead: InsertLead): Promise<Lead> {
    const newLead: Lead = {
      id: this.nextId++,
      ...lead,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.leadsList.push(newLead);
    console.log(`NEW LEAD CAPTURED: ${lead.firstName} ${lead.lastName} - ${lead.email} - Interest: ${lead.interest}`);
    return newLead;
  }

  // Amenity methods
  async getAllAmenities(): Promise<Amenity[]> {
    return this.amenitiesList;
  }

  async getAmenitiesByCategory(category: string): Promise<Amenity[]> {
    return this.amenitiesList.filter(a => a.category === category);
  }

  // School methods
  async getAllSchools(): Promise<School[]> {
    return this.schoolsList;
  }

  async getSchoolsByLevel(level: string): Promise<School[]> {
    return this.schoolsList.filter(s => s.level === level);
  }
}

export const storage = new MemoryStorage();