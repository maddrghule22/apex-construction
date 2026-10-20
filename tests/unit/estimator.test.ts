import { describe, it, expect } from "vitest";
import {
  calculateConstructionEstimate,
  DEFAULT_RESIDENTIAL_RATES,
  DEFAULT_COMMERCIAL_RATES,
  ESTIMATE_DISCLAIMER,
} from "../../src/lib/calculations/estimator";

describe("Cost Estimator Calculations", () => {
  it("calculates basic residential estimate correctly with default rates", () => {
    const result = calculateConstructionEstimate({
      projectType: "RESIDENTIAL",
      location: "Metro City",
      builtUpArea: 1000,
      floors: 1,
      qualityTier: "STANDARD",
      customContingencyPct: 5,
      customTaxPct: 0,
    });

    // STANDARD multiplier is 1.00
    // Civil: 1000 * 1450 = 1,450,000
    // Finishing: 1000 * 650 = 650,000
    // Electrical: 1000 * 180 = 180,000
    // Plumbing: 1000 * 160 = 160,000
    // Waterproofing: 1000 * 70 = 70,000
    // Subtotal = 2,510,000
    // Contingency 5% = 125,500
    // Total = 2,635,500
    // Cost per sq ft = 2,635.50
    expect(result.builtUpArea).toBe(1000);
    expect(result.civilCost).toBe(1450000);
    expect(result.finishingCost).toBe(650000);
    expect(result.electricalCost).toBe(180000);
    expect(result.plumbingCost).toBe(160000);
    expect(result.waterproofingCost).toBe(70000);
    expect(result.subtotalBaseWork).toBe(2510000);
    expect(result.contingencyCost).toBe(125500);
    expect(result.totalEstimatedCost).toBe(2635500);
    expect(result.costPerSqFt).toBe(2635.5);
    expect(result.disclaimer).toBe(ESTIMATE_DISCLAIMER);
  });

  it("applies quality multipliers accurately (PREMIUM tier)", () => {
    const result = calculateConstructionEstimate({
      projectType: "RESIDENTIAL",
      location: "Metro City",
      builtUpArea: 1000,
      floors: 1,
      qualityTier: "PREMIUM", // 1.35x
      customContingencyPct: 0,
      customTaxPct: 0,
    });

    // Civil: 1000 * (1450 * 1.35) = 1000 * 1957.50 = 1,957,500
    expect(result.qualityMultiplier).toBe(1.35);
    expect(result.civilCost).toBe(1957500);
  });

  it("throws validation error for zero or negative construction area", () => {
    expect(() =>
      calculateConstructionEstimate({
        projectType: "RESIDENTIAL",
        location: "Metro City",
        builtUpArea: 0,
        floors: 1,
        qualityTier: "STANDARD",
      })
    ).toThrow("Built-up construction area must be greater than zero.");

    expect(() =>
      calculateConstructionEstimate({
        projectType: "RESIDENTIAL",
        location: "Metro City",
        builtUpArea: -500,
        floors: 1,
        qualityTier: "STANDARD",
      })
    ).toThrow("Built-up construction area must be greater than zero.");
  });

  it("handles taxes and contingency independently without double counting", () => {
    const result = calculateConstructionEstimate({
      projectType: "COMMERCIAL",
      location: "Downtown",
      builtUpArea: 2000,
      floors: 2,
      qualityTier: "STANDARD",
      customContingencyPct: 10,
      customTaxPct: 18,
    });

    // Subtotal + 10% contingency + 18% tax on (subtotal + contingency)
    const expectedTax = (result.subtotalBaseWork + result.contingencyCost) * 0.18;
    expect(Math.abs(result.taxCost - Math.round(expectedTax * 100) / 100)).toBeLessThanOrEqual(0.02);
    expect(result.totalEstimatedCost).toBe(
      Math.round((result.subtotalBaseWork + result.contingencyCost + result.taxCost) * 100) / 100
    );
  });
});
