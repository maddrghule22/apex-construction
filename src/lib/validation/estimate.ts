import { z } from "zod";

export const costEstimateInputSchema = z.object({
  projectType: z.enum(["RESIDENTIAL", "COMMERCIAL"]),
  location: z.string().min(2, "Location is required"),
  plotArea: z.number().min(0).optional().nullable(),
  builtUpArea: z.number().min(100, "Built-up area must be at least 100 sq.ft"),
  floors: z.number().int().min(1).max(50).default(1),
  qualityTier: z.enum(["BASIC", "STANDARD", "PREMIUM", "LUXURY"]).default("STANDARD"),
  includeCivil: z.boolean().default(true),
  includeFinishing: z.boolean().default(true),
  includeElectrical: z.boolean().default(true),
  includePlumbing: z.boolean().default(true),
  includeWaterproofing: z.boolean().default(true),
  additionalWorks: z
    .array(
      z.object({
        id: z.string(),
        name: z.string(),
        description: z.string(),
        ratePerSqFt: z.number().optional(),
        fixedCost: z.number().optional(),
        selected: z.boolean(),
      })
    )
    .optional(),
  customContingencyPct: z.number().min(0).max(50).optional(),
  customTaxPct: z.number().min(0).max(50).optional(),
});

export const submitEstimateAsEnquirySchema = z.object({
  estimateData: costEstimateInputSchema,
  customerName: z.string().min(2, "Name is required"),
  phone: z.string().min(7, "Valid phone is required"),
  email: z.string().email().optional().or(z.literal("")),
  notes: z.string().max(1000).optional(),
});

export type CostEstimateInput = z.infer<typeof costEstimateInputSchema>;
