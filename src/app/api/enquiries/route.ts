import { NextRequest, NextResponse } from "next/server";
import { enquirySchema } from "@/lib/validation/enquiry";
import { createEnquiry, getAllEnquiries } from "@/server/repositories/enquiryRepository";
import { checkRateLimit } from "@/lib/auth/rate-limiter";
import { getSession } from "@/lib/auth/session";

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for") || "local-ip";
    const rateCheck = checkRateLimit(`enquiry-${ip}`, 5, 60);

    if (!rateCheck.success) {
      return NextResponse.json(
        { error: "Too many submissions. Please wait a minute before submitting again." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const parseResult = enquirySchema.safeParse(body);

    if (!parseResult.success) {
      return NextResponse.json(
        { error: parseResult.error.errors[0]?.message || "Invalid input data." },
        { status: 400 }
      );
    }

    // Bot honeypot verification
    if (parseResult.data.websiteUrlHoneypot && parseResult.data.websiteUrlHoneypot.length > 0) {
      return NextResponse.json({ success: true, message: "Enquiry received." }); // Silent drop
    }

    const newEnquiry = await createEnquiry(parseResult.data);

    return NextResponse.json({
      success: true,
      message: "Thank you! Your enquiry has been received. Our engineering team will contact you shortly.",
      enquiryNumber: newEnquiry.enquiryNumber,
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: "Failed to submit enquiry. Please try again." },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized access" }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const status = searchParams.get("status") || undefined;
    const category = searchParams.get("category") || undefined;
    const source = searchParams.get("source") || undefined;
    const search = searchParams.get("search") || undefined;

    const enquiries = await getAllEnquiries({ status, category, source, search });
    return NextResponse.json({ enquiries });
  } catch (err: any) {
    return NextResponse.json({ error: "Failed to fetch enquiries" }, { status: 500 });
  }
}
