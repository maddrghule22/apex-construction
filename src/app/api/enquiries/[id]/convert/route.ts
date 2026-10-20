import { NextRequest, NextResponse } from "next/server";
import { requireAuth } from "@/lib/auth/session";
import { convertEnquiryToProject } from "@/server/repositories/enquiryRepository";

export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    await requireAuth();
    const body = await req.json();

    const newProject = await convertEnquiryToProject(params.id, body);
    return NextResponse.json({ success: true, project: newProject });
  } catch (err: any) {
    if (err.message === "UNAUTHORIZED") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    return NextResponse.json({ error: err.message || "Failed to convert enquiry" }, { status: 500 });
  }
}
