import { NextRequest, NextResponse } from "next/server";
import { requireAuth } from "@/lib/auth/session";
import { enquiryInteractionSchema } from "@/lib/validation/enquiry";
import { addEnquiryInteraction } from "@/server/repositories/enquiryRepository";

export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const session = await requireAuth();
    const body = await req.json();

    const parseResult = enquiryInteractionSchema.safeParse(body);
    if (!parseResult.success) {
      return NextResponse.json(
        { error: parseResult.error.errors[0]?.message || "Invalid interaction data" },
        { status: 400 }
      );
    }

    const interaction = await addEnquiryInteraction(params.id, {
      ...parseResult.data,
      createdBy: session.name,
    });

    return NextResponse.json({ success: true, interaction });
  } catch (err: any) {
    if (err.message === "UNAUTHORIZED") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    return NextResponse.json({ error: "Failed to log interaction" }, { status: 500 });
  }
}
