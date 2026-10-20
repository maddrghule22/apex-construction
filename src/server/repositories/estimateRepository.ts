import { prisma } from "@/lib/db/prisma";
import { SEED_RATE_PROFILES } from "../data/seedData";
import { CalculationResult } from "@/lib/calculations/estimator";

let localRateProfiles = JSON.parse(JSON.stringify(SEED_RATE_PROFILES));
let localEstimates: any[] = [];

export async function getRateProfiles() {
  try {
    const profiles = await prisma.costRateProfile.findMany({
      where: { isActive: true },
    });
    if (profiles.length > 0) return profiles;
  } catch (err) {
    // Fallback
  }
  return localRateProfiles;
}

export async function getRateProfileByType(projectType: "RESIDENTIAL" | "COMMERCIAL") {
  const profiles = await getRateProfiles();
  return (
    profiles.find((p: any) => p.projectType === projectType) ||
    localRateProfiles.find((p: any) => p.projectType === projectType)
  );
}

export async function updateRateProfile(id: string, data: any) {
  try {
    return await prisma.costRateProfile.update({
      where: { id },
      data,
    });
  } catch (err) {
    const idx = localRateProfiles.findIndex((p: any) => p.id === id);
    if (idx !== -1) {
      localRateProfiles[idx] = { ...localRateProfiles[idx], ...data, updatedAt: new Date().toISOString() };
      return localRateProfiles[idx];
    }
  }
}

export async function saveCostEstimate(
  calculation: CalculationResult,
  customerInfo?: {
    customerName?: string;
    customerPhone?: string;
    customerEmail?: string;
    location?: string;
    enquiryId?: string;
  }
) {
  const estimateNumber = `EST-${new Date().getFullYear()}-${String(
    localEstimates.length + 1
  ).padStart(3, "0")}`;

  try {
    const estimate = await prisma.costEstimate.create({
      data: {
        estimateNumber,
        projectType: calculation.rateSnapshot.projectType,
        location: customerInfo?.location || "Site Location",
        builtUpArea: calculation.builtUpArea,
        floors: 1,
        qualityTier: calculation.qualityTier as any,
        civilCost: calculation.civilCost,
        finishingCost: calculation.finishingCost,
        electricalCost: calculation.electricalCost,
        plumbingCost: calculation.plumbingCost,
        waterproofingCost: calculation.waterproofingCost,
        additionalCost: calculation.additionalCost,
        contingencyCost: calculation.contingencyCost,
        taxCost: calculation.taxCost,
        totalEstimatedCost: calculation.totalEstimatedCost,
        costPerSqFt: calculation.costPerSqFt,
        durationMonths: calculation.estimatedDurationMonths,
        customerName: customerInfo?.customerName || null,
        customerPhone: customerInfo?.customerPhone || null,
        customerEmail: customerInfo?.customerEmail || null,
        enquiryId: customerInfo?.enquiryId || null,
        rateSnapshotJson: JSON.stringify(calculation.rateSnapshot),
        lineItems: {
          create: calculation.lineItems.map((item) => ({
            category: item.category,
            description: item.description,
            rate: item.rate,
            quantity: item.quantity,
            unit: item.unit,
            amount: item.amount,
          })),
        },
      },
      include: {
        lineItems: true,
      },
    });
    return estimate;
  } catch (err) {
    // In-memory fallback
    const saved = {
      id: `est-${Date.now()}`,
      estimateNumber,
      projectType: calculation.rateSnapshot.projectType,
      location: customerInfo?.location || "Site Location",
      ...calculation,
      ...customerInfo,
      rateSnapshotJson: JSON.stringify(calculation.rateSnapshot),
      lineItems: calculation.lineItems,
      createdAt: new Date().toISOString(),
    };
    localEstimates.unshift(saved);
    return saved;
  }
}

export async function getAllCostEstimates() {
  try {
    const estimates = await prisma.costEstimate.findMany({
      include: { lineItems: true, enquiry: true },
      orderBy: { createdAt: "desc" },
    });
    if (estimates.length > 0) return estimates;
  } catch (err) {
    // Fallback
  }
  return localEstimates;
}

export async function getCostEstimateById(id: string) {
  try {
    const estimate = await prisma.costEstimate.findUnique({
      where: { id },
      include: { lineItems: true, enquiry: true },
    });
    if (estimate) return estimate;
  } catch (err) {
    // Fallback
  }
  return localEstimates.find((e: any) => e.id === id) || null;
}
