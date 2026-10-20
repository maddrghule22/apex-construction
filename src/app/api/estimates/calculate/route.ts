import { NextRequest, NextResponse } from "next/server";
import { costEstimateInputSchema } from "@/lib/validation/estimate";
import { calculateConstructionEstimate } from "@/lib/calculations/estimator";
import { getRateProfileByType } from "@/server/repositories/estimateRepository";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parseResult = costEstimateInputSchema.safeParse(body);

    if (!parseResult.success) {
      return NextResponse.json(
        { error: parseResult.error.errors[0]?.message || "Invalid estimate input" },
        { status: 400 }
      );
    }

    const input = parseResult.data;
    const rateProfile = await getRateProfileByType(input.projectType);

    const calculation = calculateConstructionEstimate({
      ...input,
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

    return NextResponse.json({ success: true, calculation });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || "Failed to calculate estimate" },
      { status: 400 }
    );
  }
}
