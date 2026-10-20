import { getAllProjects } from "./projectRepository";
import { getAllEnquiries } from "./enquiryRepository";
import { getAllExpenses } from "./expenseRepository";
import { calculateBudgetMetrics } from "@/lib/calculations/budget";

export async function getDashboardOverviewMetrics() {
  const [projects, enquiries, expenses] = await Promise.all([
    getAllProjects(),
    getAllEnquiries(),
    getAllExpenses(),
  ]);

  const totalProjects = projects.length;
  const ongoingProjects = projects.filter((p: any) => p.status === "ONGOING").length;
  const completedProjects = projects.filter((p: any) => p.status === "COMPLETED").length;

  const totalEnquiries = enquiries.length;
  const newEnquiries = enquiries.filter((e: any) => e.status === "NEW").length;
  const pendingFollowUps = enquiries.filter(
    (e: any) => e.nextFollowUpDate && new Date(e.nextFollowUpDate) >= new Date()
  ).length;

  let totalExpenses = 0;
  expenses.forEach((e: any) => {
    totalExpenses += Number(e.amount || 0);
  });

  let totalApprovedBudgets = 0;
  projects.forEach((p: any) => {
    totalApprovedBudgets += Number(p.approvedBudget || 0);
  });

  const overallBudgetMetrics = calculateBudgetMetrics(totalApprovedBudgets, totalExpenses);

  // Project Budget vs Actual comparison
  const projectComparisons = projects.map((p: any) => {
    const projExpenses = expenses
      .filter((e: any) => e.projectId === p.id)
      .reduce((sum: number, e: any) => sum + Number(e.amount || 0), 0);

    const metrics = calculateBudgetMetrics(Number(p.approvedBudget || 0), projExpenses);
    return {
      id: p.id,
      title: p.title,
      projectNumber: p.projectNumber,
      category: p.category,
      status: p.status,
      approvedBudget: metrics.approvedBudget,
      actualExpenses: metrics.actualExpenses,
      remainingBudget: metrics.remainingBudget,
      utilizationPct: metrics.budgetUtilizationPct,
      isOverBudget: metrics.isOverBudget,
    };
  });

  // Expense breakdown by category
  const categoryMap: { [cat: string]: number } = {};
  expenses.forEach((e: any) => {
    categoryMap[e.category] = (categoryMap[e.category] || 0) + Number(e.amount || 0);
  });

  const categoryBreakdown = Object.entries(categoryMap).map(([category, amount]) => ({
    category,
    amount,
  }));

  // Enquiries by Status
  const statusCounts: { [status: string]: number } = {};
  enquiries.forEach((e: any) => {
    statusCounts[e.status] = (statusCounts[e.status] || 0) + 1;
  });

  // Enquiries by Source
  const sourceCounts: { [source: string]: number } = {};
  enquiries.forEach((e: any) => {
    sourceCounts[e.source] = (sourceCounts[e.source] || 0) + 1;
  });

  return {
    totalProjects,
    ongoingProjects,
    completedProjects,
    totalEnquiries,
    newEnquiries,
    pendingFollowUps,
    totalExpenses,
    totalApprovedBudgets,
    overallBudgetMetrics,
    projectComparisons,
    categoryBreakdown,
    statusCounts,
    sourceCounts,
    recentEnquiries: enquiries.slice(0, 5),
    recentExpenses: expenses.slice(0, 5),
  };
}
