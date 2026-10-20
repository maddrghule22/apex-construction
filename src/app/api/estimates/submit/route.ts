import { NextRequest, NextResponse } from "next/server";
import { submitEstimateAsEnquirySchema } from "@/lib/validation/estimate";
import { calculateConstructionEstimate } from "@/lib/calculations/estimator";
import { getRateProfileByType, saveCostEstimate } from "@/server/repositories/estimateRepository";
import { createEnquiry } from "@/server/repositories/enquiryRepository";
import { checkRateLimit } from "@/lib/auth/rate-limiter";

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for") || "local-ip";
    const rateCheck = checkRateLimit(`estimate-sub-${ip}`, 5, 60);

    if (!rateCheck.success) {
      return NextResponse.json(
        { error: "Too many requests. Please wait a moment before trying again." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const parseResult = submitEstimateAsEnquirySchema.safeParse(body);

    if (!parseResult.success) {
      return NextResponse.json(
        { error: parseResult.error.errors[0]?.message || "Invalid input data" },
        { status: 400 }
      );
    }

    const { estimateData, customerName, phone, email, notes } = parseResult.data;
    const rateProfile = await getRateProfileByType(estimateData.projectType);

    const calculation = calculateConstructionEstimate({
      ...estimateData,
      rateProfile: rateProfile
        ? {
            name: rateProfile.name,
            projectType: rateProfile.projectType,
            baseCivilRate: Number(rateProfile.baseCivilRate),
            finishingRate: Number(rateProfile.finishingRate),
            electricalRate: Number(rateProfile.electricalRate),
            plumbingRate: Number(rateProfile.plumbingRate),
            waterproofingRate: Number(rateProfile.waterproofingRate),
            basicMultiplier: Number(rateProfile.basicMultiplier),
            standardMultiplier: Number(rateProfile.standardMultiplier),
            premiumMultiplier: Number(rateProfile.premiumMultiplier),
            luxuryMultiplier: Number(rateProfile.luxuryMultiplier),
            defaultContingencyPct: Number(rateProfile.defaultContingencyPct),
            defaultTaxPct: Number(rateProfile.defaultTaxPct),
          }
        : undefined,
    });

    // 1. Create Enquiry record
    const enquiry = await createEnquiry({
      customerName,
      phone,
      email,
      location: estimateData.location,
      category: estimateData.projectType,
      approxArea: calculation.builtUpArea,
      budgetRange: `$${Math.round(calculation.totalEstimatedCost).toLocaleString()}`,
      message: `Online Cost Estimator Submission: ${calculation.builtUpArea} sq.ft (${estimateData.qualityTier} Quality). Total estimated cost: $${Math.round(calculation.totalEstimatedCost).toLocaleString()}.${notes ? ` Client Note: ${notes}` : ""}`,
      source: "COST_ESTIMATOR",
    });

    // 2. Save CostEstimate with rate snapshot & line items
    const savedEstimate = await saveCostEstimate(calculation, {
      customerName,
      customerPhone: phone,
      customerEmail: email,
      location: estimateData.location,
      enquiryId: enquiry.id,
    });

    return NextResponse.json({
      success: true,
      message: "Estimate saved and enquiry submitted successfully!",
      estimateNumber: savedEstimate.estimateNumber,
      enquiryNumber: enquiry.enquiryNumber,
      calculation,
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || "Failed to submit estimate" },
      { status: 500 }
    );
  }
}
