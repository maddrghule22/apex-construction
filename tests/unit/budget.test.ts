import { describe, it, expect } from "vitest";
import {
  calculateBudgetMetrics,
  calculateWeightedProjectProgress,
} from "../../src/lib/calculations/budget";

describe("Budget Metrics & Progress Calculations", () => {
  it("calculates budget metrics accurately when within budget", () => {
    const metrics = calculateBudgetMetrics(1000000, 650000);

    expect(metrics.approvedBudget).toBe(1000000);
    expect(metrics.actualExpenses).toBe(650000);
    expect(metrics.remainingBudget).toBe(350000);
    expect(metrics.budgetVariance).toBe(-350000);
    expect(metrics.budgetUtilizationPct).toBe(65.0);
    expect(metrics.isOverBudget).toBe(false);
  });

  it("calculates budget overrun flags and variance correctly", () => {
    const metrics = calculateBudgetMetrics(500000, 580000);

    expect(metrics.approvedBudget).toBe(500000);
    expect(metrics.actualExpenses).toBe(580000);
    expect(metrics.remainingBudget).toBe(-80000);
    expect(metrics.budgetVariance).toBe(80000);
    expect(metrics.budgetUtilizationPct).toBe(116.0);
    expect(metrics.isOverBudget).toBe(true);
  });

  it("computes weighted project progress accurately", () => {
    const milestones = [
      { progressPercent: 100, weight: 20 },
      { progressPercent: 100, weight: 30 },
      { progressPercent: 50, weight: 30 },
      { progressPercent: 0, weight: 20 },
    ];
    // Total weight = 100
    // Weighted progress = (100*20 + 100*30 + 50*30 + 0*20) = 2000 + 3000 + 1500 + 0 = 6500 / 100 = 65%
    const progress = calculateWeightedProjectProgress(milestones);
    expect(progress).toBe(65.0);
  });

  it("returns 0 progress when no milestones are present", () => {
    expect(calculateWeightedProjectProgress([])).toBe(0);
  });
});
