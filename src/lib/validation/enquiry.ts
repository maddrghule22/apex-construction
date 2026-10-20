import { z } from "zod";

export const enquirySchema = z.object({
  customerName: z.string().min(2, "Name must be at least 2 characters").max(100),
  phone: z.string().min(7, "Please provide a valid phone number").max(20),
  email: z.string().email("Invalid email address").optional().or(z.literal("")),
  location: z.string().min(2, "Project location / city is required").max(150),
  category: z.enum(["RESIDENTIAL", "COMMERCIAL", "INDUSTRIAL", "RENOVATION"]).default("RESIDENTIAL"),
  approxArea: z.number().min(50, "Area must be at least 50 sq.ft").optional().nullable(),
  budgetRange: z.string().max(50).optional().nullable(),
  message: z.string().min(5, "Please provide a brief message or project details").max(2000),
  source: z.enum([
    "WEBSITE_FORM",
    "COST_ESTIMATOR",
    "WHATSAPP",
    "PHONE_CALL",
    "DIRECT_WALKIN",
    "REFERRAL",
  ]).default("WEBSITE_FORM"),
  // Honeypot field for bot spam detection
  websiteUrlHoneypot: z.string().max(0, "Bot detected").optional().or(z.literal("")),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;

export const enquiryUpdateStatusSchema = z.object({
  status: z.enum([
    "NEW",
    "CONTACTED",
    "SITE_VISIT_SCHEDULED",
    "QUOTATION_SENT",
    "NEGOTIATION",
    "CONVERTED",
    "LOST",
  ]),
  notes: z.string().max(1000).optional(),
  nextFollowUpDate: z.string().datetime().optional().nullable(),
});

export const enquiryInteractionSchema = z.object({
  type: z.enum(["CALL", "EMAIL", "WHATSAPP", "MEETING", "SITE_VISIT", "NOTE"]),
  summary: z.string().min(2).max(255),
  details: z.string().max(2000).optional(),
  conductedAt: z.string().datetime().optional(),
});
