import { NextRequest, NextResponse } from "next/server";
import { getProjectById } from "@/server/repositories/projectRepository";
import { getSession } from "@/lib/auth/session";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const project = await getProjectById(params.id);
    if (!project) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    const session = await getSession();

    // If user is not logged in, redact confidential financial and customer details
    if (!session) {
      const { approvedBudget, expenses, customer, ...publicData } = project as any;
      return NextResponse.json({ project: publicData });
    }

    return NextResponse.json({ project });
  } catch (err: any) {
    return NextResponse.json({ error: "Failed to fetch project" }, { status: 500 });
  }
}
