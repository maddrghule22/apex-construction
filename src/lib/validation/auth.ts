import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const changePasswordSchema = z.object({
  currentPassword: z.string().min(1, "Current password is required"),
  newPassword: z.string().min(8, "New password must be at least 8 characters"),
  confirmPassword: z.string().min(8, "Confirm password is required"),
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: "New password and confirmation do not match",
  path: ["confirmPassword"],
});

export const companySettingsSchema = z.object({
  companyName: z.string().min(2, "Company name is required"),
  companyPhone: z.string().min(7, "Phone number is required"),
  companyEmail: z.string().email("Valid email is required"),
  officeAddress: z.string().min(5, "Office address is required"),
  businessHours: z.string().min(2, "Business hours are required"),
  whatsAppNumber: z.string().min(7, "WhatsApp number is required"),
  currencySymbol: z.string().min(1).max(5).default("$"),
  serviceAreas: z.string().optional(),
});
