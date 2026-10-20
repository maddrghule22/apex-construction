import { NextResponse } from "next/server";
import { requireAuth } from "@/lib/auth/session";
import { getDashboardOverviewMetrics } from "@/server/repositories/reportingRepository";

export async function GET() {
  try {
    await requireAuth();
    const metrics = await getDashboardOverviewMetrics();
    return NextResponse.json({ metrics });
  } catch (err: any) {
    if (err.message === "UNAUTHORIZED") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    return NextResponse.json({ error: "Failed to generate report metrics" }, { status: 500 });
  }
}
