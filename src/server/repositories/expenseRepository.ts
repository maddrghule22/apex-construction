import { prisma } from "@/lib/db/prisma";
import { SEED_EXPENSES } from "../data/seedData";

let localExpenses = JSON.parse(JSON.stringify(SEED_EXPENSES));

export async function createExpense(data: any) {
  const expenseNumber = `EXP-${new Date().getFullYear()}-${String(
    localExpenses.length + 1
  ).padStart(3, "0")}`;

  try {
    const expense = await prisma.expense.create({
      data: {
        expenseNumber,
        projectId: data.projectId,
        category: data.category,
        description: data.description,
        vendor: data.vendor,
        amount: Number(data.amount),
        paymentMethod: data.paymentMethod || "BANK_TRANSFER",
        referenceNumber: data.referenceNumber || null,
        receiptUrl: data.receiptUrl || null,
        expenseDate: data.expenseDate ? new Date(data.expenseDate) : new Date(),
        notes: data.notes || null,
      },
      include: {
        project: { select: { title: true, projectNumber: true } },
      },
    });
    return expense;
  } catch (err) {
    // In-memory fallback
    const newExp = {
      id: `exp-${Date.now()}`,
      expenseNumber,
      ...data,
      amount: Number(data.amount),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    localExpenses.unshift(newExp);
    return newExp;
  }
}

export async function getAllExpenses(params?: {
  projectId?: string;
  category?: string;
  vendor?: string;
  startDate?: string;
  endDate?: string;
}) {
  const { projectId, category, vendor, startDate, endDate } = params || {};
  try {
    const where: any = {};
    if (projectId && projectId !== "ALL") where.projectId = projectId;
    if (category && category !== "ALL") where.category = category;
    if (vendor) where.vendor = { contains: vendor, mode: "insensitive" };
    if (startDate || endDate) {
      where.expenseDate = {};
      if (startDate) where.expenseDate.gte = new Date(startDate);
      if (endDate) where.expenseDate.lte = new Date(endDate);
    }

    const expenses = await prisma.expense.findMany({
      where,
      include: {
        project: { select: { title: true, projectNumber: true } },
      },
      orderBy: { expenseDate: "desc" },
    });
    if (expenses.length > 0) return expenses;
  } catch (err) {
    // Fallback
  }

  let list = [...localExpenses];
  if (projectId && projectId !== "ALL") list = list.filter((e: any) => e.projectId === projectId);
  if (category && category !== "ALL") list = list.filter((e: any) => e.category === category);
  if (vendor) list = list.filter((e: any) => e.vendor.toLowerCase().includes(vendor.toLowerCase()));
  return list;
}

export async function getExpensesByProject(projectId: string) {
  try {
    return await prisma.expense.findMany({
      where: { projectId },
      orderBy: { expenseDate: "desc" },
    });
  } catch (err) {
    return localExpenses.filter((e: any) => e.projectId === projectId);
  }
}

export function generateExpensesCsv(expenses: any[]): string {
  const headers = [
    "Expense ID",
    "Project",
    "Date",
    "Category",
    "Vendor / Payee",
    "Description",
    "Amount",
    "Payment Method",
    "Reference No",
  ];

  const escapeCsv = (str: string | number | null | undefined) => {
    if (str === null || str === undefined) return '""';
    const clean = String(str).replace(/"/g, '""');
    return `"${clean}"`;
  };

  const rows = expenses.map((e) => [
    escapeCsv(e.expenseNumber),
    escapeCsv(e.project?.title || e.projectId),
    escapeCsv(new Date(e.expenseDate).toLocaleDateString()),
    escapeCsv(e.category),
    escapeCsv(e.vendor),
    escapeCsv(e.description),
    escapeCsv(e.amount),
    escapeCsv(e.paymentMethod),
    escapeCsv(e.referenceNumber || ""),
  ]);

  return [headers.join(","), ...rows.map((r) => r.join(","))].join("\r\n");
}
