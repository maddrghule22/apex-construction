import { NextRequest, NextResponse } from "next/server";
import { requireAuth } from "@/lib/auth/session";
import { addMilestone, updateMilestone } from "@/server/repositories/projectRepository";
import { milestoneSchema } from "@/lib/validation/project";

export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    await requireAuth();
    const body = await req.json();

    const parseResult = milestoneSchema.safeParse(body);
    if (!parseResult.success) {
      return NextResponse.json(
        { error: parseResult.error.errors[0]?.message || "Invalid milestone data" },
        { status: 400 }
      );
    }

    const milestone = await addMilestone(params.id, parseResult.data);
    return NextResponse.json({ success: true, milestone });
  } catch (err: any) {
    if (err.message === "UNAUTHORIZED") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    return NextResponse.json({ error: "Failed to add milestone" }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  try {
    await requireAuth();
    const body = await req.json();
    const { milestoneId, ...updates } = body;

    if (!milestoneId) {
      return NextResponse.json({ error: "Milestone ID required" }, { status: 400 });
    }

    const updated = await updateMilestone(milestoneId, updates);
    return NextResponse.json({ success: true, milestone: updated });
  } catch (err: any) {
    if (err.message === "UNAUTHORIZED") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    return NextResponse.json({ error: "Failed to update milestone" }, { status: 500 });
  }
}
