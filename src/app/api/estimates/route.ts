import { NextResponse } from "next/server";
import { requireAuth } from "@/lib/auth/session";
import { getAllCostEstimates } from "@/server/repositories/estimateRepository";

export async function GET() {
  try {
    await requireAuth();
    const estimates = await getAllCostEstimates();
    return NextResponse.json({ estimates });
  } catch (err: any) {
    if (err.message === "UNAUTHORIZED") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    return NextResponse.json({ error: "Failed to fetch estimates" }, { status: 500 });
  }
}
