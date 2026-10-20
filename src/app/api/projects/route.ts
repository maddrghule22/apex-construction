import { NextRequest, NextResponse } from "next/server";
import { getPublicProjects, getAllProjects, createProject } from "@/server/repositories/projectRepository";
import { getSession, requireAuth } from "@/lib/auth/session";
import { projectSchema } from "@/lib/validation/project";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category") || undefined;
    const status = searchParams.get("status") || undefined;
    const search = searchParams.get("search") || undefined;
    const isPublicOnly = searchParams.get("public") === "true";

    const session = await getSession();

    if (isPublicOnly || !session) {
      const publicProjects = await getPublicProjects(category);
      return NextResponse.json({ projects: publicProjects });
    }

    const allProjects = await getAllProjects(status, category, search);
    return NextResponse.json({ projects: allProjects });
  } catch (err: any) {
    return NextResponse.json({ error: "Failed to fetch projects" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    await requireAuth();
    const body = await req.json();

    const parseResult = projectSchema.safeParse(body);
    if (!parseResult.success) {
      return NextResponse.json(
        { error: parseResult.error.errors[0]?.message || "Invalid project data" },
        { status: 400 }
      );
    }

    const project = await createProject(parseResult.data);
    return NextResponse.json({ success: true, project });
  } catch (err: any) {
    if (err.message === "UNAUTHORIZED") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    return NextResponse.json({ error: "Failed to create project" }, { status: 500 });
  }
}
