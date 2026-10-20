import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectById } from "@/server/repositories/projectRepository";
import { getExpensesByProject } from "@/server/repositories/expenseRepository";
import { calculateBudgetMetrics, calculateWeightedProjectProgress } from "@/lib/calculations/budget";
import {
  Building,
  ArrowLeft,
  Calendar,
  Layers,
  MapPin,
  Clock,
  CheckCircle2,
  DollarSign,
  TrendingUp,
  Receipt,
  Plus,
  AlertTriangle,
  User,
  Phone,
} from "lucide-react";
import MilestoneManager from "@/components/dashboard/MilestoneManager";

export default async function DashboardProjectDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const project = await getProjectById(params.id);
  if (!project) notFound();

  const expenses = await getExpensesByProject(project.id);
  const totalExpenses = expenses.reduce((sum: number, e: any) => sum + Number(e.amount || 0), 0);
  const budgetMetrics = calculateBudgetMetrics(Number(project.approvedBudget || 0), totalExpenses);

  const weightedProgress = calculateWeightedProjectProgress(project.milestones || []);

  return (
    <div className="space-y-8">
      {/* Top Breadcrumb & Header */}
      <div>
        <Link
          href="/dashboard/projects"
          className="inline-flex items-center text-xs font-semibold text-gray-500 hover:text-navy-900 transition mb-3"
        >
          <ArrowLeft className="w-3.5 h-3.5 mr-1" /> Back to Project List
        </Link>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <div className="flex items-center space-x-3 mb-1">
              <span className="font-mono text-xs text-gray-400 font-bold uppercase">
                {project.projectNumber}
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-navy-100 text-navy-800">
                {project.category}
              </span>
              <span
                className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                  project.status === "ONGOING"
                    ? "bg-amber-100 text-amber-800"
                    : "bg-emerald-100 text-emerald-800"
                }`}
              >
                {project.status}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-navy-900">{project.title}</h1>
            <div className="flex items-center text-xs text-gray-500 mt-1">
              <MapPin className="w-3.5 h-3.5 mr-1 text-construction-500" />
              <span>{project.location}</span>
            </div>
          </div>

          <div className="flex space-x-2">
            <Link
              href={`/dashboard/expenses?projectId=${project.id}`}
              className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-charcoal-700 bg-white border border-gray-200 hover:bg-gray-50 transition shadow-xs"
            >
              <Receipt className="w-3.5 h-3.5 text-construction-500" />
              <span>View All Expenses</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Row 1: Financial & Progress Health Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs space-y-2">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
            Approved Budget
          </span>
          <div className="text-2xl font-black text-navy-900">
            ${budgetMetrics.approvedBudget.toLocaleString()}
          </div>
          <p className="text-[11px] text-gray-500">Contractual limit</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs space-y-2">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
            Recorded Expenses
          </span>
          <div className="text-2xl font-black text-navy-900">
            ${budgetMetrics.actualExpenses.toLocaleString()}
          </div>
          <p className="text-[11px] text-gray-500">{expenses.length} invoices / vouchers</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs space-y-2">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
            Budget Utilization
          </span>
          <div className="text-2xl font-black text-navy-900">
            {budgetMetrics.budgetUtilizationPct}%
          </div>
          <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden mt-1">
            <div
              className={`h-full ${
                budgetMetrics.isOverBudget
                  ? "bg-red-500"
                  : budgetMetrics.budgetUtilizationPct > 85
                  ? "bg-amber-500"
                  : "bg-emerald-500"
              }`}
              style={{ width: `${Math.min(100, budgetMetrics.budgetUtilizationPct)}%` }}
            />
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs space-y-2">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
            Weighted Physical Progress
          </span>
          <div className="text-2xl font-black text-navy-900">{weightedProgress}%</div>
          <p className="text-[11px] text-gray-500">
            Calculated across {project.milestones?.length || 0} weighted milestones
          </p>
        </div>
      </div>

      {/* Row 2: Milestone Tracker & Site Management */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Interactive Milestone Manager (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          <MilestoneManager
            projectId={project.id}
            initialMilestones={project.milestones || []}
          />

          {/* Recent Site Expenses for this Project */}
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-base font-bold text-navy-900">Recent Project Expenses</h3>
                <p className="text-xs text-gray-500">Directly attributed to {project.projectNumber}</p>
              </div>
              <Link
                href={`/dashboard/expenses?projectId=${project.id}`}
                className="text-xs font-semibold text-construction-600 hover:underline"
              >
                + Add / View All
              </Link>
            </div>

            {expenses.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-surface text-gray-500 uppercase text-[10px]">
                    <tr>
                      <th className="py-2 px-3">Date</th>
                      <th className="py-2 px-3">Category</th>
                      <th className="py-2 px-3">Vendor</th>
                      <th className="py-2 px-3">Description</th>
                      <th className="py-2 px-3">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {expenses.slice(0, 5).map((exp: any) => (
                      <tr key={exp.id} className="hover:bg-gray-50">
                        <td className="py-2.5 px-3 text-gray-500 text-[11px]">
                          {new Date(exp.expenseDate).toLocaleDateString()}
                        </td>
                        <td className="py-2.5 px-3 font-semibold text-navy-900">{exp.category}</td>
                        <td className="py-2.5 px-3 text-charcoal-700">{exp.vendor}</td>
                        <td className="py-2.5 px-3 text-gray-500 truncate max-w-xs">
                          {exp.description}
                        </td>
                        <td className="py-2.5 px-3 font-bold text-navy-900">
                          ${Number(exp.amount).toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-xs text-gray-400 py-4 text-center">
                No expenses logged for this project yet.
              </p>
            )}
          </div>
        </div>

        {/* Right Column: Specifications & Client Profile (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          {/* Specifications */}
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs space-y-4 text-xs">
            <h3 className="text-sm font-bold text-navy-900 uppercase tracking-wider pb-2 border-b border-gray-100">
              Technical Details
            </h3>

            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-500">Built-Up Area:</span>
                <span className="font-bold text-navy-900">
                  {project.builtUpArea ? `${Number(project.builtUpArea).toLocaleString()} sq.ft` : "N/A"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Plot Area:</span>
                <span className="font-bold text-navy-900">
                  {project.plotArea ? `${Number(project.plotArea).toLocaleString()} sq.ft` : "N/A"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Floors:</span>
                <span className="font-bold text-navy-900">{project.floors || 1} Levels</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Start Date:</span>
                <span className="font-bold text-navy-900">
                  {project.startDate ? new Date(project.startDate).toLocaleDateString() : "Pending"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Target Handover:</span>
                <span className="font-bold text-navy-900">
                  {project.expectedEndDate
                    ? new Date(project.expectedEndDate).toLocaleDateString()
                    : "Not specified"}
                </span>
              </div>
            </div>

            <div className="pt-3 border-t border-gray-100">
              <h4 className="font-bold text-navy-900 mb-1">Description:</h4>
              <p className="text-gray-600 leading-relaxed text-[11px]">{project.description}</p>
            </div>
          </div>

          {/* Linked Customer Profile */}
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs space-y-3">
            <h3 className="text-sm font-bold text-navy-900 uppercase tracking-wider pb-2 border-b border-gray-100 flex items-center">
              <User className="w-4 h-4 mr-1.5 text-construction-500" />
              Client Reference
            </h3>

            {project.customer ? (
              <div className="space-y-2 text-xs">
                <p className="font-bold text-navy-900 text-sm">{project.customer.name}</p>
                <p className="text-gray-500 flex items-center">
                  <Phone className="w-3.5 h-3.5 mr-1" /> {project.customer.phone}
                </p>
                {project.customer.email && (
                  <p className="text-gray-500">{project.customer.email}</p>
                )}
              </div>
            ) : (
              <p className="text-xs text-gray-400">Directly registered enterprise project.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
