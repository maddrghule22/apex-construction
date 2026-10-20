import { z } from "zod";

export const projectSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters").max(150),
  description: z.string().min(10, "Description must be at least 10 characters"),
  category: z.enum(["RESIDENTIAL", "COMMERCIAL", "INDUSTRIAL", "RENOVATION"]).default("RESIDENTIAL"),
  status: z.enum(["PLANNING", "ONGOING", "ON_HOLD", "COMPLETED", "CANCELLED"]).default("PLANNING"),
  isFeatured: z.boolean().default(false),
  isPublic: z.boolean().default(true),
  location: z.string().min(2, "Location is required"),
  plotArea: z.number().min(0).optional().nullable(),
  builtUpArea: z.number().min(0).optional().nullable(),
  floors: z.number().int().min(1).default(1),
  startDate: z.string().optional().nullable(),
  expectedEndDate: z.string().optional().nullable(),
  actualEndDate: z.string().optional().nullable(),
  approvedBudget: z.number().min(0, "Approved budget must be positive"),
  customerId: z.string().optional().nullable(),
  enquiryId: z.string().optional().nullable(),
  coverImage: z.string().url().optional().or(z.literal("")).nullable(),
});

export const milestoneSchema = z.object({
  title: z.string().min(2, "Milestone title is required"),
  description: z.string().optional().nullable(),
  orderIndex: z.number().int().default(0),
  weight: z.number().min(1).max(100).default(10),
  plannedStartDate: z.string().optional().nullable(),
  plannedEndDate: z.string().optional().nullable(),
  actualEndDate: z.string().optional().nullable(),
  status: z.enum(["NOT_STARTED", "IN_PROGRESS", "COMPLETED", "DELAYED"]).default("NOT_STARTED"),
  progressPercent: z.number().min(0).max(100).default(0),
  delayReason: z.string().optional().nullable(),
});

export const progressUpdateSchema = z.object({
  milestoneId: z.string().optional().nullable(),
  title: z.string().min(2, "Title is required"),
  description: z.string().optional().nullable(),
  progressPercent: z.number().min(0).max(100),
  recordedDate: z.string().optional(),
});
