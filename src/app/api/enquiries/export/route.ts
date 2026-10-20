import { NextResponse } from "next/server";
import { requireAuth } from "@/lib/auth/session";
import { getAllEnquiries, generateEnquiriesCsv } from "@/server/repositories/enquiryRepository";

export async function GET() {
  try {
    await requireAuth();
    const enquiries = await getAllEnquiries();
    const csvContent = generateEnquiriesCsv(enquiries);

    return new NextResponse(csvContent, {
      status: 200,
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename="enquiries-export-${new Date().toISOString().slice(0, 10)}.csv"`,
      },
    });
  } catch (err: any) {
    if (err.message === "UNAUTHORIZED") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    return NextResponse.json({ error: "Export failed" }, { status: 500 });
  }
}
