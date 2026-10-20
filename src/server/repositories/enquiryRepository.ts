import { prisma } from "@/lib/db/prisma";
import { SEED_ENQUIRIES } from "../data/seedData";

let localEnquiries = JSON.parse(JSON.stringify(SEED_ENQUIRIES));

export async function createEnquiry(data: any) {
  const enquiryNumber = `ENQ-${new Date().getFullYear()}-${String(
    localEnquiries.length + 1
  ).padStart(3, "0")}`;

  try {
    const enquiry = await prisma.enquiry.create({
      data: {
        enquiryNumber,
        customerName: data.customerName,
        phone: data.phone,
        email: data.email || null,
        location: data.location,
        category: data.category || "RESIDENTIAL",
        approxArea: data.approxArea ? Number(data.approxArea) : null,
        budgetRange: data.budgetRange || null,
        message: data.message,
        source: data.source || "WEBSITE_FORM",
        status: "NEW",
        priority: "NORMAL",
        notes: data.notes || null,
      },
    });
    return enquiry;
  } catch (err) {
    // In-memory fallback
    const newEnq = {
      id: `enq-${Date.now()}`,
      enquiryNumber,
      ...data,
      status: "NEW",
      priority: "NORMAL",
      interactions: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    localEnquiries.unshift(newEnq);
    return newEnq;
  }
}

export async function getAllEnquiries(params?: {
  status?: string;
  category?: string;
  source?: string;
  search?: string;
}) {
  const { status, category, source, search } = params || {};
  try {
    const where: any = {};
    if (status && status !== "ALL") where.status = status;
    if (category && category !== "ALL") where.category = category;
    if (source && source !== "ALL") where.source = source;
    if (search) {
      where.OR = [
        { customerName: { contains: search, mode: "insensitive" } },
        { phone: { contains: search, mode: "insensitive" } },
        { enquiryNumber: { contains: search, mode: "insensitive" } },
      ];
    }
    const results = await prisma.enquiry.findMany({
      where,
      include: {
        interactions: { orderBy: { conductedAt: "desc" } },
        customer: true,
      },
      orderBy: { createdAt: "desc" },
    });
    if (results.length > 0) return results;
  } catch (err) {
    // Fallback
  }

  let list = [...localEnquiries];
  if (status && status !== "ALL") list = list.filter((e: any) => e.status === status);
  if (category && category !== "ALL") list = list.filter((e: any) => e.category === category);
  if (source && source !== "ALL") list = list.filter((e: any) => e.source === source);
  if (search) {
    const q = search.toLowerCase();
    list = list.filter(
      (e: any) =>
        e.customerName.toLowerCase().includes(q) ||
        e.phone.toLowerCase().includes(q) ||
        e.enquiryNumber.toLowerCase().includes(q)
    );
  }
  return list;
}

export async function getEnquiryById(id: string) {
  try {
    const enq = await prisma.enquiry.findUnique({
      where: { id },
      include: {
        interactions: { orderBy: { conductedAt: "desc" } },
        customer: true,
        estimates: true,
        projects: true,
      },
    });
    if (enq) return enq;
  } catch (err) {
    // Fallback
  }

  return localEnquiries.find((e: any) => e.id === id) || null;
}

export async function updateEnquiryStatus(
  id: string,
  data: {
    status: string;
    notes?: string;
    nextFollowUpDate?: string | null;
  }
) {
  try {
    return await prisma.enquiry.update({
      where: { id },
      data: {
        status: data.status as any,
        notes: data.notes !== undefined ? data.notes : undefined,
        nextFollowUpDate: data.nextFollowUpDate ? new Date(data.nextFollowUpDate) : null,
      },
    });
  } catch (err) {
    const enq = localEnquiries.find((e: any) => e.id === id);
    if (enq) {
      enq.status = data.status;
      if (data.notes !== undefined) enq.notes = data.notes;
      if (data.nextFollowUpDate !== undefined) enq.nextFollowUpDate = data.nextFollowUpDate;
      enq.updatedAt = new Date().toISOString();
      return enq;
    }
  }
}

export async function addEnquiryInteraction(
  enquiryId: string,
  data: {
    type: string;
    summary: string;
    details?: string;
    conductedAt?: string;
    createdBy?: string;
  }
) {
  try {
    return await prisma.enquiryInteraction.create({
      data: {
        enquiryId,
        type: data.type as any,
        summary: data.summary,
        details: data.details || null,
        conductedAt: data.conductedAt ? new Date(data.conductedAt) : new Date(),
        createdBy: data.createdBy || "Owner",
      },
    });
  } catch (err) {
    const enq = localEnquiries.find((e: any) => e.id === enquiryId);
    if (enq) {
      if (!enq.interactions) enq.interactions = [];
      const newInt = {
        id: `int-${Date.now()}`,
        enquiryId,
        type: data.type,
        summary: data.summary,
        details: data.details || "",
        conductedAt: data.conductedAt || new Date().toISOString(),
      };
      enq.interactions.unshift(newInt);
      return newInt;
    }
  }
}

export async function convertEnquiryToProject(enquiryId: string, projectData: any) {
  const enq = await getEnquiryById(enquiryId);
  if (!enq) throw new Error("Enquiry not found");

  // Import createProject dynamically to avoid circular dependencies
  const { createProject } = await import("./projectRepository");

  const newProject = await createProject({
    ...projectData,
    enquiryId: enq.id,
    title: projectData.title || `Project for ${enq.customerName}`,
    category: enq.category,
    location: enq.location,
    builtUpArea: enq.approxArea ? Number(enq.approxArea) : undefined,
  });

  await updateEnquiryStatus(enquiryId, {
    status: "CONVERTED",
    notes: `Converted to project ${newProject.projectNumber} on ${new Date().toLocaleDateString()}`,
  });

  return newProject;
}

export function generateEnquiriesCsv(enquiries: any[]): string {
  const headers = [
    "Enquiry ID",
    "Customer Name",
    "Phone",
    "Email",
    "Location",
    "Category",
    "Approx Area (sq.ft)",
    "Budget Range",
    "Status",
    "Source",
    "Created Date",
  ];

  const escapeCsv = (str: string | number | null | undefined) => {
    if (str === null || str === undefined) return '""';
    const clean = String(str).replace(/"/g, '""');
    return `"${clean}"`;
  };

  const rows = enquiries.map((e) => [
    escapeCsv(e.enquiryNumber),
    escapeCsv(e.customerName),
    escapeCsv(e.phone),
    escapeCsv(e.email),
    escapeCsv(e.location),
    escapeCsv(e.category),
    escapeCsv(e.approxArea),
    escapeCsv(e.budgetRange),
    escapeCsv(e.status),
    escapeCsv(e.source),
    escapeCsv(new Date(e.createdAt).toLocaleDateString()),
  ]);

  return [headers.join(","), ...rows.map((r) => r.join(","))].join("\r\n");
}
