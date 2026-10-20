import { NextRequest, NextResponse } from "next/server";
import { getCompanySettings, updateCompanySettings } from "@/server/repositories/settingsRepository";
import { requireAuth } from "@/lib/auth/session";

export async function GET() {
  try {
    const settings = await getCompanySettings();
    return NextResponse.json({ settings });
  } catch (err: any) {
    return NextResponse.json({ error: "Failed to fetch settings" }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  try {
    await requireAuth();
    const body = await req.json();
    const updated = await updateCompanySettings(body);
    return NextResponse.json({ success: true, settings: updated });
  } catch (err: any) {
    if (err.message === "UNAUTHORIZED") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    return NextResponse.json({ error: "Failed to update settings" }, { status: 500 });
  }
}
