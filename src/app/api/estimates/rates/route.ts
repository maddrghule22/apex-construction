import { NextRequest, NextResponse } from "next/server";
import { requireAuth } from "@/lib/auth/session";
import { getRateProfiles, updateRateProfile } from "@/server/repositories/estimateRepository";

export async function GET() {
  try {
    const profiles = await getRateProfiles();
    return NextResponse.json({ profiles });
  } catch (err: any) {
    return NextResponse.json({ error: "Failed to fetch rate profiles" }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  try {
    await requireAuth();
    const body = await req.json();
    const { id, ...data } = body;

    if (!id) {
      return NextResponse.json({ error: "Profile ID is required" }, { status: 400 });
    }

    const updated = await updateRateProfile(id, data);
    return NextResponse.json({ success: true, profile: updated });
  } catch (err: any) {
    if (err.message === "UNAUTHORIZED") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    return NextResponse.json({ error: "Failed to update rate profile" }, { status: 500 });
  }
}
