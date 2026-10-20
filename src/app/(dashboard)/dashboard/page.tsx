import React from "react";
import Link from "next/link";
import { getDashboardOverviewMetrics } from "@/server/repositories/reportingRepository";
import {
  Building,
  CheckCircle2,
  Clock,
  Inbox,
  AlertCircle,
  Receipt,
  DollarSign,
  TrendingUp,
  ArrowRight,
  Plus,
  Calendar,
} from "lucide-react";

export const metadata = {
  title: "Dashboard Overview | Operations & Finances",
};

export default async function DashboardOverviewPage() {
  const metrics = await getDashboardOverviewMetrics();

  return (
    <div className="space-y-8">
      {/* Page Title & Quick Actions */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight">
            Construction Operations Overview
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Real-time project tracking, expense logs, and customer enquiry pipeline.
          </p>
        </div>

        <div className="flex space-x-2">
          <Link
            href="/dashboard/expenses"
            className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-charcoal-700 bg-white border border-gray-200 hover:bg-gray-50 transition shadow-xs"
          >
            <Receipt className="w-3.5 h-3.5 text-construction-500" />
            <span>Record Expense</span>
          </Link>
          <Link
            href="/dashboard/projects"
            className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-construction-500 hover:bg-construction-600 transition shadow-sm"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Create Project</span>
          </Link>
        </div>
      </div>

      {/* Row 1: Key Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Projects Card */}
        <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
              Project Portfolio
            </span>
            <div className="w-8 h-8 rounded-lg bg-navy-50 text-navy-800 flex items-center justify-center">
              <Building className="w-4 h-4 text-construction-500" />
            </div>
          </div>
          <div className="text-3xl font-black text-navy-900">{metrics.totalProjects}</div>
          <div className="flex items-center space-x-3 text-xs text-gray-500 pt-1 border-t border-gray-100">
            <span className="text-amber-600 font-semibold">{metrics.ongoingProjects} Active</span>
            <span>•</span>
            <span className="text-emerald-600 font-semibold">{metrics.completedProjects} Completed</span>
          </div>
        </div>

        {/* Enquiries Card */}
        <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
              Client Enquiries
            </span>
            <div className="w-8 h-8 rounded-lg bg-navy-50 text-navy-800 flex items-center justify-center">
              <Inbox className="w-4 h-4 text-construction-500" />
            </div>
          </div>
          <div className="text-3xl font-black text-navy-900">{metrics.totalEnquiries}</div>
          <div className="flex items-center space-x-3 text-xs text-gray-500 pt-1 border-t border-gray-100">
            <span className="text-blue-600 font-semibold">{metrics.newEnquiries} New Leads</span>
            <span>•</span>
            <span className="text-amber-600 font-semibold">{metrics.pendingFollowUps} Follow-ups</span>
          </div>
        </div>

        {/* Expenses Card */}
        <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
              Recorded Expenditure
            </span>
            <div className="w-8 h-8 rounded-lg bg-navy-50 text-navy-800 flex items-center justify-center">
              <Receipt className="w-4 h-4 text-construction-500" />
            </div>
          </div>
          <div className="text-3xl font-black text-navy-900">
            ${Math.round(metrics.totalExpenses).toLocaleString()}
          </div>
          <div className="text-xs text-gray-500 pt-1 border-t border-gray-100 truncate">
            Across {metrics.totalProjects} projects
          </div>
        </div>

        {/* Budget Utilization Card */}
        <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
              Overall Budget Health
            </span>
            <div className="w-8 h-8 rounded-lg bg-navy-50 text-navy-800 flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-construction-500" />
            </div>
          </div>
          <div className="text-3xl font-black text-navy-900">
            {metrics.overallBudgetMetrics.budgetUtilizationPct}%
          </div>
          <div className="text-xs text-gray-500 pt-1 border-t border-gray-100 truncate">
            Remaining: ${Math.round(metrics.overallBudgetMetrics.remainingBudget).toLocaleString()}
          </div>
        </div>
      </div>

      {/* Row 2: Budget vs Actual Project Breakdown & Category Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Project Budget Variance Table (7 cols) */}
        <div className="lg:col-span-7 bg-white p-6 rounded-2xl border border-gray-200 shadow-xs space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-base font-bold text-navy-900">Project Budgets vs. Expenses</h2>
              <p className="text-xs text-gray-500">
                Track financial utilization and overrun risk per project
              </p>
            </div>
            <Link
              href="/dashboard/projects"
              className="text-xs font-semibold text-construction-600 hover:underline flex items-center"
            >
              View all <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-surface text-gray-500 uppercase text-[10px] font-bold">
                <tr>
                  <th className="py-2.5 px-3 rounded-l-lg">Project</th>
                  <th className="py-2.5 px-3">Budget</th>
                  <th className="py-2.5 px-3">Expenses</th>
                  <th className="py-2.5 px-3">Utilization</th>
                  <th className="py-2.5 px-3 rounded-r-lg">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {metrics.projectComparisons.map((proj) => (
                  <tr key={proj.id} className="hover:bg-gray-50 transition">
                    <td className="py-3 px-3 font-semibold text-navy-900">
                      <Link href={`/dashboard/projects/${proj.id}`} className="hover:underline">
                        {proj.title}
                      </Link>
                      <span className="block text-[10px] text-gray-400 font-normal">
                        {proj.projectNumber}
                      </span>
                    </td>
                    <td className="py-3 px-3 font-medium text-charcoal-700">
                      ${Math.round(proj.approvedBudget).toLocaleString()}
                    </td>
                    <td className="py-3 px-3 font-medium text-navy-900">
                      ${Math.round(proj.actualExpenses).toLocaleString()}
                    </td>
                    <td className="py-3 px-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-16 bg-gray-100 h-2 rounded-full overflow-hidden">
                          <div
                            className={`h-full ${
                              proj.isOverBudget
                                ? "bg-red-500"
                                : proj.utilizationPct > 85
                                ? "bg-amber-500"
                                : "bg-emerald-500"
                            }`}
                            style={{ width: `${Math.min(100, proj.utilizationPct)}%` }}
                          />
                        </div>
                        <span className="text-[11px] font-semibold">{proj.utilizationPct}%</span>
                      </div>
                    </td>
                    <td className="py-3 px-3">
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                          proj.status === "ONGOING"
                            ? "bg-amber-50 text-amber-700"
                            : "bg-emerald-50 text-emerald-700"
                        }`}
                      >
                        {proj.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Expense Category Breakdown (5 cols) */}
        <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-gray-200 shadow-xs space-y-4">
          <div>
            <h2 className="text-base font-bold text-navy-900">Spending by Category</h2>
            <p className="text-xs text-gray-500">Material and labor cost allocation</p>
          </div>

          <div className="space-y-3">
            {metrics.categoryBreakdown.map((item, idx) => {
              const pct =
                metrics.totalExpenses > 0
                  ? Math.round((item.amount / metrics.totalExpenses) * 100)
                  : 0;
              return (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-charcoal-800">{item.category}</span>
                    <span className="text-navy-900">
                      ${Math.round(item.amount).toLocaleString()} ({pct}%)
                    </span>
                  </div>
                  <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-navy-800 h-full rounded-full"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-4 border-t border-gray-100">
            <Link
              href="/dashboard/expenses"
              className="text-xs font-bold text-navy-800 hover:text-construction-600 transition flex items-center justify-between"
            >
              <span>Manage all itemized expenses & receipts</span>
              <ArrowRight className="w-4 h-4 text-construction-500" />
            </Link>
          </div>
        </div>
      </div>

      {/* Row 3: Recent Inbound Enquiries Pipeline */}
      <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs space-y-4">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-base font-bold text-navy-900">Recent Customer Enquiries</h2>
            <p className="text-xs text-gray-500">
              Inbound website leads, cost estimator submissions, and WhatsApp requests
            </p>
          </div>
          <Link
            href="/dashboard/enquiries"
            className="text-xs font-semibold text-construction-600 hover:underline flex items-center"
          >
            Open lead manager <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-surface text-gray-500 uppercase text-[10px] font-bold">
              <tr>
                <th className="py-2.5 px-3 rounded-l-lg">Customer</th>
                <th className="py-2.5 px-3">Location</th>
                <th className="py-2.5 px-3">Category</th>
                <th className="py-2.5 px-3">Area</th>
                <th className="py-2.5 px-3">Status</th>
                <th className="py-2.5 px-3">Source</th>
                <th className="py-2.5 px-3 rounded-r-lg">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {metrics.recentEnquiries.map((enq: any) => (
                <tr key={enq.id} className="hover:bg-gray-50 transition">
                  <td className="py-3 px-3">
                    <span className="font-bold text-navy-900 block">{enq.customerName}</span>
                    <span className="text-gray-400 text-[11px]">{enq.phone}</span>
                  </td>
                  <td className="py-3 px-3 text-charcoal-700">{enq.location}</td>
                  <td className="py-3 px-3">
                    <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-gray-100 text-gray-700">
                      {enq.category}
                    </span>
                  </td>
                  <td className="py-3 px-3 font-medium text-navy-900">
                    {enq.approxArea ? `${Number(enq.approxArea).toLocaleString()} sq.ft` : "—"}
                  </td>
                  <td className="py-3 px-3">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-blue-50 text-blue-700">
                      {enq.status}
                    </span>
                  </td>
                  <td className="py-3 px-3 text-gray-500 text-[11px]">{enq.source}</td>
                  <td className="py-3 px-3 text-gray-400 text-[11px]">
                    {new Date(enq.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
