import { z } from "zod";

export const EXPENSE_CATEGORIES = [
  "Cement & Materials",
  "Steel",
  "Bricks & Blocks",
  "Sand & Aggregates",
  "Electrical Materials",
  "Plumbing Materials",
  "Labour",
  "Contractors & Subcontractors",
  "Machinery & Equipment Rental",
  "Transportation",
  "Site Expenses",
  "Finishing Materials",
  "Permits & Professional Services",
  "Miscellaneous",
] as const;

export const expenseSchema = z.object({
  projectId: z.string().min(1, "Project is required"),
  category: z.string().min(1, "Category is required"),
  description: z.string().min(3, "Description is required"),
  vendor: z.string().min(2, "Vendor / Payee name is required"),
  amount: z.number().positive("Amount must be greater than zero"),
  paymentMethod: z.enum(["CASH", "BANK_TRANSFER", "CHEQUE", "UPI_CARD"]).default("BANK_TRANSFER"),
  referenceNumber: z.string().optional().nullable(),
  receiptUrl: z.string().optional().nullable(),
  expenseDate: z.string().min(1, "Expense date is required"),
  notes: z.string().optional().nullable(),
});

export type ExpenseInput = z.infer<typeof expenseSchema>;
