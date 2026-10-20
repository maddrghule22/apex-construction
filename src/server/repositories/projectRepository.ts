import { prisma } from "@/lib/db/prisma";
import { SEED_PROJECTS } from "../data/seedData";
import { calculateWeightedProjectProgress } from "@/lib/calculations/budget";

// Local in-memory fallback store if PostgreSQL is still being provisioned
let localProjects = JSON.parse(JSON.stringify(SEED_PROJECTS));

export async function getPublicProjects(category?: string) {
  try {
    const whereClause: any = { isPublic: true };
    if (category && category !== "ALL") {
      whereClause.category = category;
    }
    const projects = await prisma.project.findMany({
      where: whereClause,
      include: {
        milestones: true,
      },
      orderBy: { createdAt: "desc" },
    });
    if (projects.length > 0) return projects;
  } catch (err) {
    // Graceful fallback to local seed data
  }

  let filtered = localProjects.filter((p: any) => p.isPublic);
  if (category && category !== "ALL") {
    filtered = filtered.filter((p: any) => p.category === category);
  }
  return filtered;
}

export async function getPublicProjectBySlug(slug: string) {
  try {
    const project = await prisma.project.findUnique({
      where: { slug },
      include: {
        milestones: {
          orderBy: { orderIndex: "asc" },
        },
        images: {
          orderBy: { sortOrder: "asc" },
        },
      },
    });
    if (project) return project;
  } catch (err) {
    // Fallback
  }

  return localProjects.find((p: any) => p.slug === slug) || null;
}

export async function getAllProjects(statusFilter?: string, categoryFilter?: string, search?: string) {
  try {
    const where: any = {};
    if (statusFilter && statusFilter !== "ALL") where.status = statusFilter;
    if (categoryFilter && categoryFilter !== "ALL") where.category = categoryFilter;
    if (search) {
      where.OR = [
        { title: { contains: search, mode: "insensitive" } },
        { location: { contains: search, mode: "insensitive" } },
        { projectNumber: { contains: search, mode: "insensitive" } },
      ];
    }
    const projects = await prisma.project.findMany({
      where,
      include: {
        milestones: true,
        expenses: true,
        customer: true,
      },
      orderBy: { createdAt: "desc" },
    });
    if (projects.length > 0) return projects;
  } catch (err) {
    // Fallback
  }

  let list = [...localProjects];
  if (statusFilter && statusFilter !== "ALL") {
    list = list.filter((p: any) => p.status === statusFilter);
  }
  if (categoryFilter && categoryFilter !== "ALL") {
    list = list.filter((p: any) => p.category === categoryFilter);
  }
  if (search) {
    const q = search.toLowerCase();
    list = list.filter(
      (p: any) =>
        p.title.toLowerCase().includes(q) ||
        p.location.toLowerCase().includes(q) ||
        p.projectNumber.toLowerCase().includes(q)
    );
  }
  return list;
}

export async function getProjectById(id: string) {
  try {
    const project = await prisma.project.findUnique({
      where: { id },
      include: {
        milestones: { orderBy: { orderIndex: "asc" } },
        expenses: { orderBy: { expenseDate: "desc" } },
        progressUpdates: { orderBy: { recordedDate: "desc" } },
        customer: true,
        enquiry: true,
      },
    });
    if (project) return project;
  } catch (err) {
    // Fallback
  }

  return localProjects.find((p: any) => p.id === id) || null;
}

export async function createProject(data: any) {
  const projectNumber = `PRJ-${new Date().getFullYear()}-${String(
    localProjects.length + 1
  ).padStart(3, "0")}`;
  const slug =
    data.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "") + `-${Date.now().toString().slice(-4)}`;

  try {
    const project = await prisma.project.create({
      data: {
        projectNumber,
        title: data.title,
        slug,
        description: data.description,
        category: data.category,
        status: data.status || "PLANNING",
        isFeatured: data.isFeatured ?? false,
        isPublic: data.isPublic ?? true,
        location: data.location,
        plotArea: data.plotArea ? Number(data.plotArea) : null,
        builtUpArea: data.builtUpArea ? Number(data.builtUpArea) : null,
        floors: data.floors ? Number(data.floors) : 1,
        startDate: data.startDate ? new Date(data.startDate) : null,
        expectedEndDate: data.expectedEndDate ? new Date(data.expectedEndDate) : null,
        approvedBudget: Number(data.approvedBudget || 0),
        customerId: data.customerId || null,
        enquiryId: data.enquiryId || null,
        coverImage:
          data.coverImage ||
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      },
    });
    return project;
  } catch (err) {
    // In-memory fallback
    const newProj = {
      id: `proj-${Date.now()}`,
      projectNumber,
      slug,
      ...data,
      approvedBudget: Number(data.approvedBudget || 0),
      milestones: [],
      expenses: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    localProjects.unshift(newProj);
    return newProj;
  }
}

export async function updateMilestone(milestoneId: string, data: any) {
  try {
    return await prisma.projectMilestone.update({
      where: { id: milestoneId },
      data,
    });
  } catch (err) {
    for (const p of localProjects) {
      const idx = (p.milestones || []).findIndex((m: any) => m.id === milestoneId);
      if (idx !== -1) {
        p.milestones[idx] = { ...p.milestones[idx], ...data, updatedAt: new Date().toISOString() };
        return p.milestones[idx];
      }
    }
  }
}

export async function addMilestone(projectId: string, data: any) {
  try {
    return await prisma.projectMilestone.create({
      data: {
        projectId,
        title: data.title,
        description: data.description,
        orderIndex: Number(data.orderIndex || 0),
        weight: Number(data.weight || 10),
        plannedStartDate: data.plannedStartDate ? new Date(data.plannedStartDate) : null,
        plannedEndDate: data.plannedEndDate ? new Date(data.plannedEndDate) : null,
        status: data.status || "NOT_STARTED",
        progressPercent: Number(data.progressPercent || 0),
        delayReason: data.delayReason || null,
      },
    });
  } catch (err) {
    const proj = localProjects.find((p: any) => p.id === projectId);
    if (proj) {
      const newM = {
        id: `m-${Date.now()}`,
        projectId,
        ...data,
        createdAt: new Date().toISOString(),
      };
      if (!proj.milestones) proj.milestones = [];
      proj.milestones.push(newM);
      return newM;
    }
  }
}
