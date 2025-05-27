import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertLeadSchema, insertPropertySchema, insertMarketDataSchema } from "@shared/schema";
import { crmIntegration } from "./crm-integration";

export async function registerRoutes(app: Express): Promise<Server> {
  // Properties
  app.get("/api/properties", async (req, res) => {
    try {
      const status = req.query.status as string;
      const properties = status 
        ? await storage.getPropertiesByStatus(status)
        : await storage.getAllProperties();
      res.json(properties);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch properties" });
    }
  });

  app.get("/api/properties/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const property = await storage.getProperty(id);
      if (!property) {
        return res.status(404).json({ message: "Property not found" });
      }
      res.json(property);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch property" });
    }
  });

  app.post("/api/properties", async (req, res) => {
    try {
      const validatedData = insertPropertySchema.parse(req.body);
      const property = await storage.createProperty(validatedData);
      res.status(201).json(property);
    } catch (error) {
      res.status(400).json({ message: "Invalid property data" });
    }
  });

  // Market Data
  app.get("/api/market-data", async (req, res) => {
    try {
      const marketData = await storage.getAllMarketData();
      res.json(marketData);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch market data" });
    }
  });

  app.get("/api/market-data/latest", async (req, res) => {
    try {
      const latest = await storage.getLatestMarketData();
      if (!latest) {
        return res.status(404).json({ message: "No market data available" });
      }
      res.json(latest);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch latest market data" });
    }
  });

  app.post("/api/market-data", async (req, res) => {
    try {
      const validatedData = insertMarketDataSchema.parse(req.body);
      const marketData = await storage.createMarketData(validatedData);
      res.status(201).json(marketData);
    } catch (error) {
      res.status(400).json({ message: "Invalid market data" });
    }
  });

  // Leads
  app.get("/api/leads", async (req, res) => {
    try {
      const leads = await storage.getAllLeads();
      res.json(leads);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch leads" });
    }
  });

  app.post("/api/leads", async (req, res) => {
    try {
      const validatedData = insertLeadSchema.parse(req.body);
      
      // Create lead in local database
      const lead = await storage.createLead(validatedData);
      
      // Send lead to Follow Up Boss CRM
      const crmResult = await crmIntegration.createLead({
        name: `${validatedData.firstName} ${validatedData.lastName}`,
        email: validatedData.email,
        phone: validatedData.phone,
        source: `Shawood Homes Website - ${validatedData.source}`,
        message: validatedData.message || undefined,
        tags: ['Website Lead', 'Shawood Homes Inquiry'],
        customFields: {
          lead_source: validatedData.source,
          interest_type: validatedData.interest,
          capture_date: new Date().toISOString(),
          assigned_agent: 'Dr. Jan Duffy'
        }
      });

      if (crmResult.success) {
        console.log(`Lead ${lead.id} successfully sent to Follow Up Boss CRM with ID: ${crmResult.leadId}`);
      } else {
        console.error(`Failed to send lead ${lead.id} to Follow Up Boss CRM: ${crmResult.error}`);
      }
      
      res.status(201).json({ 
        ...lead, 
        crmSynced: crmResult.success,
        crmLeadId: crmResult.leadId 
      });
    } catch (error) {
      console.error('Error creating lead:', error);
      res.status(400).json({ message: "Invalid lead data", error: String(error) });
    }
  });

  // Amenities
  app.get("/api/amenities", async (req, res) => {
    try {
      const category = req.query.category as string;
      const amenities = category 
        ? await storage.getAmenitiesByCategory(category)
        : await storage.getAllAmenities();
      res.json(amenities);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch amenities" });
    }
  });

  // Schools
  app.get("/api/schools", async (req, res) => {
    try {
      const level = req.query.level as string;
      const schools = level 
        ? await storage.getSchoolsByLevel(level)
        : await storage.getAllSchools();
      res.json(schools);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch schools" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
