import Decimal from "decimal.js";

Decimal.set({ precision: 20, rounding: Decimal.ROUND_HALF_UP });

export interface BudgetMetrics {
  approvedBudget: number;
  actualExpenses: number;
  remainingBudget: number;
  budgetVariance: number;
  budgetUtilizationPct: number;
  isOverBudget: boolean;
}

export function calculateBudgetMetrics(
  approvedBudget: number | string,
  actualExpenses: number | string
): BudgetMetrics {
  const budget = new Decimal(approvedBudget || 0);
  const expenses = new Decimal(actualExpenses || 0);

  const remaining = budget.minus(expenses);
  const variance = expenses.minus(budget);

  let utilization = new Decimal(0);
  if (budget.gt(0)) {
    utilization = expenses.dividedBy(budget).times(100).toDecimalPlaces(2);
  }

  return {
    approvedBudget: budget.toDecimalPlaces(2).toNumber(),
    actualExpenses: expenses.toDecimalPlaces(2).toNumber(),
    remainingBudget: remaining.toDecimalPlaces(2).toNumber(),
    budgetVariance: variance.toDecimalPlaces(2).toNumber(),
    budgetUtilizationPct: utilization.toNumber(),
    isOverBudget: expenses.gt(budget) && budget.gt(0),
  };
}

export interface MilestoneProgressItem {
  progressPercent: number | string;
  weight: number | string;
}

export function calculateWeightedProjectProgress(
  milestones: MilestoneProgressItem[]
): number {
  if (!milestones || milestones.length === 0) return 0;

  let totalWeight = new Decimal(0);
  let weightedProgressSum = new Decimal(0);

  for (const item of milestones) {
    const weight = new Decimal(item.weight || 1);
    const progress = new Decimal(item.progressPercent || 0);

    totalWeight = totalWeight.plus(weight);
    weightedProgressSum = weightedProgressSum.plus(progress.times(weight));
  }

  if (totalWeight.lte(0)) return 0;

  const overallProgress = weightedProgressSum.dividedBy(totalWeight).toDecimalPlaces(1);
  return Math.min(100, Math.max(0, overallProgress.toNumber()));
}
