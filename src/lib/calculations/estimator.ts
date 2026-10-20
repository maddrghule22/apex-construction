import Decimal from "decimal.js";

// Set precision for decimal calculations
Decimal.set({ precision: 20, rounding: Decimal.ROUND_HALF_UP });

export type QualityTier = "BASIC" | "STANDARD" | "PREMIUM" | "LUXURY";
export type ProjectType = "RESIDENTIAL" | "COMMERCIAL";

export interface RateProfileConfig {
  name: string;
  projectType: ProjectType;
  baseCivilRate: number;      // per sq ft
  finishingRate: number;      // per sq ft
  electricalRate: number;     // per sq ft
  plumbingRate: number;       // per sq ft
  waterproofingRate: number;  // per sq ft
  basicMultiplier: number;    // e.g. 0.85
  standardMultiplier: number; // e.g. 1.00
  premiumMultiplier: number;  // e.g. 1.30
  luxuryMultiplier: number;   // e.g. 1.70
  defaultContingencyPct: number; // e.g. 5.0
  defaultTaxPct: number;         // e.g. 0.0 or 18.0
}

export const DEFAULT_RESIDENTIAL_RATES: RateProfileConfig = {
  name: "Standard Residential Profile",
  projectType: "RESIDENTIAL",
  baseCivilRate: 1450,
  finishingRate: 650,
  electricalRate: 180,
  plumbingRate: 160,
  waterproofingRate: 70,
  basicMultiplier: 0.85,
  standardMultiplier: 1.00,
  premiumMultiplier: 1.35,
  luxuryMultiplier: 1.75,
  defaultContingencyPct: 5.0,
  defaultTaxPct: 0.0,
};

export const DEFAULT_COMMERCIAL_RATES: RateProfileConfig = {
  name: "Standard Commercial Profile",
  projectType: "COMMERCIAL",
  baseCivilRate: 1850,
  finishingRate: 850,
  electricalRate: 260,
  plumbingRate: 210,
  waterproofingRate: 95,
  basicMultiplier: 0.90,
  standardMultiplier: 1.00,
  premiumMultiplier: 1.30,
  luxuryMultiplier: 1.65,
  defaultContingencyPct: 6.0,
  defaultTaxPct: 0.0,
};

export interface AdditionalWorkOption {
  id: string;
  name: string;
  description: string;
  ratePerSqFt?: number;
  fixedCost?: number;
  selected: boolean;
}

export interface EstimatorInput {
  projectType: ProjectType;
  location: string;
  plotArea?: number | null;
  builtUpArea: number; // In sq ft - must be > 0
  floors: number;
  qualityTier: QualityTier;
  includeCivil?: boolean;
  includeFinishing?: boolean;
  includeElectrical?: boolean;
  includePlumbing?: boolean;
  includeWaterproofing?: boolean;
  additionalWorks?: AdditionalWorkOption[];
  customContingencyPct?: number;
  customTaxPct?: number;
  rateProfile?: RateProfileConfig;
}

export interface EstimateLineItem {
  category: string;
  description: string;
  unit: string;
  quantity: number;
  rate: number;
  amount: number;
}

export interface CalculationResult {
  builtUpArea: number;
  qualityTier: QualityTier;
  qualityMultiplier: number;
  civilCost: number;
  finishingCost: number;
  electricalCost: number;
  plumbingCost: number;
  waterproofingCost: number;
  subtotalBaseWork: number;
  additionalCost: number;
  contingencyPct: number;
  contingencyCost: number;
  taxPct: number;
  taxCost: number;
  totalEstimatedCost: number;
  costPerSqFt: number;
  estimatedDurationMonths: number;
  lineItems: EstimateLineItem[];
  rateSnapshot: RateProfileConfig;
  disclaimer: string;
}

export const ESTIMATE_DISCLAIMER =
  "Indicative estimate only. Final construction cost depends on approved drawings, structural design, site conditions, material specifications, local requirements, and the final scope of work. This estimate is not a binding quotation.";

export function getQualityMultiplier(tier: QualityTier, profile: RateProfileConfig): Decimal {
  switch (tier) {
    case "BASIC":
      return new Decimal(profile.basicMultiplier);
    case "PREMIUM":
      return new Decimal(profile.premiumMultiplier);
    case "LUXURY":
      return new Decimal(profile.luxuryMultiplier);
    case "STANDARD":
    default:
      return new Decimal(profile.standardMultiplier);
  }
}

export function calculateConstructionEstimate(input: EstimatorInput): CalculationResult {
  const area = new Decimal(input.builtUpArea || 0);

  if (area.lte(0)) {
    throw new Error("Built-up construction area must be greater than zero.");
  }

  const profile =
    input.rateProfile ||
    (input.projectType === "COMMERCIAL" ? DEFAULT_COMMERCIAL_RATES : DEFAULT_RESIDENTIAL_RATES);

  const multiplier = getQualityMultiplier(input.qualityTier, profile);

  const includeCivil = input.includeCivil !== false;
  const includeFinishing = input.includeFinishing !== false;
  const includeElectrical = input.includeElectrical !== false;
  const includePlumbing = input.includePlumbing !== false;
  const includeWaterproofing = input.includeWaterproofing !== false;

  const lineItems: EstimateLineItem[] = [];

  // Civil Work: Area * baseCivilRate * multiplier
  let civilCost = new Decimal(0);
  if (includeCivil) {
    const effectiveCivilRate = new Decimal(profile.baseCivilRate).times(multiplier).toDecimalPlaces(2);
    civilCost = area.times(effectiveCivilRate).toDecimalPlaces(2);
    lineItems.push({
      category: "Civil & Structural",
      description: `Foundations, columns, beams, brickwork, slabs (${input.qualityTier} grade)`,
      unit: "sq.ft",
      quantity: area.toNumber(),
      rate: effectiveCivilRate.toNumber(),
      amount: civilCost.toNumber(),
    });
  }

  // Finishing Work: Area * finishingRate * multiplier
  let finishingCost = new Decimal(0);
  if (includeFinishing) {
    const effectiveFinishingRate = new Decimal(profile.finishingRate).times(multiplier).toDecimalPlaces(2);
    finishingCost = area.times(effectiveFinishingRate).toDecimalPlaces(2);
    lineItems.push({
      category: "Architectural Finishing",
      description: `Flooring, tiles, plastering, interior/exterior paint, doors & windows (${input.qualityTier})`,
      unit: "sq.ft",
      quantity: area.toNumber(),
      rate: effectiveFinishingRate.toNumber(),
      amount: finishingCost.toNumber(),
    });
  }

  // Electrical Work
  let electricalCost = new Decimal(0);
  if (includeElectrical) {
    const effectiveElectricalRate = new Decimal(profile.electricalRate).times(multiplier).toDecimalPlaces(2);
    electricalCost = area.times(effectiveElectricalRate).toDecimalPlaces(2);
    lineItems.push({
      category: "Electrical Systems",
      description: `Concealed conduit, wiring, distribution boards, switches, protective gear`,
      unit: "sq.ft",
      quantity: area.toNumber(),
      rate: effectiveElectricalRate.toNumber(),
      amount: electricalCost.toNumber(),
    });
  }

  // Plumbing Work
  let plumbingCost = new Decimal(0);
  if (includePlumbing) {
    const effectivePlumbingRate = new Decimal(profile.plumbingRate).times(multiplier).toDecimalPlaces(2);
    plumbingCost = area.times(effectivePlumbingRate).toDecimalPlaces(2);
    lineItems.push({
      category: "Plumbing & Sanitation",
      description: `Supply lines, drainage pipes, sanitary fixtures, overhead tank lines`,
      unit: "sq.ft",
      quantity: area.toNumber(),
      rate: effectivePlumbingRate.toNumber(),
      amount: plumbingCost.toNumber(),
    });
  }

  // Waterproofing Work
  let waterproofingCost = new Decimal(0);
  if (includeWaterproofing) {
    const effectiveWPRate = new Decimal(profile.waterproofingRate).toDecimalPlaces(2);
    waterproofingCost = area.times(effectiveWPRate).toDecimalPlaces(2);
    lineItems.push({
      category: "Waterproofing",
      description: `Terrace, sunken slabs, exterior walls, chemical sealants & membrane`,
      unit: "sq.ft",
      quantity: area.toNumber(),
      rate: effectiveWPRate.toNumber(),
      amount: waterproofingCost.toNumber(),
    });
  }

  // Additional Works
  let additionalCost = new Decimal(0);
  if (input.additionalWorks && input.additionalWorks.length > 0) {
    for (const addWork of input.additionalWorks) {
      if (addWork.selected) {
        let itemAmount = new Decimal(0);
        let itemRate = 0;
        let itemQty = 1;
        let unit = "ls";

        if (addWork.ratePerSqFt && addWork.ratePerSqFt > 0) {
          itemRate = addWork.ratePerSqFt;
          itemQty = area.toNumber();
          unit = "sq.ft";
          itemAmount = area.times(itemRate).toDecimalPlaces(2);
        } else if (addWork.fixedCost && addWork.fixedCost > 0) {
          itemRate = addWork.fixedCost;
          itemAmount = new Decimal(addWork.fixedCost).toDecimalPlaces(2);
        }

        additionalCost = additionalCost.plus(itemAmount);
        lineItems.push({
          category: "Additional Work",
          description: `${addWork.name}: ${addWork.description}`,
          unit,
          quantity: itemQty,
          rate: itemRate,
          amount: itemAmount.toNumber(),
        });
      }
    }
  }

  const subtotal = civilCost
    .plus(finishingCost)
    .plus(electricalCost)
    .plus(plumbingCost)
    .plus(waterproofingCost)
    .plus(additionalCost);

  // Contingency
  const contingencyPct = new Decimal(
    input.customContingencyPct !== undefined ? input.customContingencyPct : profile.defaultContingencyPct
  );
  const contingencyCost = subtotal.times(contingencyPct.dividedBy(100)).toDecimalPlaces(2);

  if (contingencyCost.gt(0)) {
    lineItems.push({
      category: "Contingency Reserve",
      description: `Unforeseen site variations and market price buffer (${contingencyPct.toNumber()}%)`,
      unit: "%",
      quantity: contingencyPct.toNumber(),
      rate: subtotal.toNumber(),
      amount: contingencyCost.toNumber(),
    });
  }

  // Taxes
  const taxPct = new Decimal(
    input.customTaxPct !== undefined ? input.customTaxPct : profile.defaultTaxPct
  );
  const taxableBase = subtotal.plus(contingencyCost);
  const taxCost = taxableBase.times(taxPct.dividedBy(100)).toDecimalPlaces(2);

  if (taxCost.gt(0)) {
    lineItems.push({
      category: "Applicable Taxes",
      description: `Government taxes & levies (${taxPct.toNumber()}%)`,
      unit: "%",
      quantity: taxPct.toNumber(),
      rate: taxableBase.toNumber(),
      amount: taxCost.toNumber(),
    });
  }

  const totalEstimatedCost = subtotal.plus(contingencyCost).plus(taxCost);
  const costPerSqFt = totalEstimatedCost.dividedBy(area).toDecimalPlaces(2);

  // Estimated Duration: base 6 months + (area / 1200) + (floors * 1.5)
  const baseMonths = 5;
  const areaFactor = area.dividedBy(1500).toNumber();
  const floorFactor = Math.max(1, input.floors || 1) * 1.5;
  const estimatedDurationMonths = Math.max(4, Math.round(baseMonths + areaFactor + floorFactor));

  return {
    builtUpArea: area.toNumber(),
    qualityTier: input.qualityTier,
    qualityMultiplier: multiplier.toNumber(),
    civilCost: civilCost.toNumber(),
    finishingCost: finishingCost.toNumber(),
    electricalCost: electricalCost.toNumber(),
    plumbingCost: plumbingCost.toNumber(),
    waterproofingCost: waterproofingCost.toNumber(),
    subtotalBaseWork: subtotal.toNumber(),
    additionalCost: additionalCost.toNumber(),
    contingencyPct: contingencyPct.toNumber(),
    contingencyCost: contingencyCost.toNumber(),
    taxPct: taxPct.toNumber(),
    taxCost: taxCost.toNumber(),
    totalEstimatedCost: totalEstimatedCost.toNumber(),
    costPerSqFt: costPerSqFt.toNumber(),
    estimatedDurationMonths,
    lineItems,
    rateSnapshot: profile,
    disclaimer: ESTIMATE_DISCLAIMER,
  };
}
