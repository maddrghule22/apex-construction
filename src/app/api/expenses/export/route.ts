import { NextResponse } from "next/server";
import { requireAuth } from "@/lib/auth/session";
import { getAllExpenses, generateExpensesCsv } from "@/server/repositories/expenseRepository";

export async function GET() {
  try {
    await requireAuth();
    const expenses = await getAllExpenses();
    const csvContent = generateExpensesCsv(expenses);

    return new NextResponse(csvContent, {
      status: 200,
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename="expenses-export-${new Date().toISOString().slice(0, 10)}.csv"`,
      },
    });
  } catch (err: any) {
    if (err.message === "UNAUTHORIZED") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    return NextResponse.json({ error: "Export failed" }, { status: 500 });
  }
}
