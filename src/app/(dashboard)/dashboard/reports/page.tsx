import React from "react";
import { getDashboardOverviewMetrics } from "@/server/repositories/reportingRepository";
import {
  BarChart3,
  Download,
  Receipt,
  Inbox,
  TrendingUp,
  Building,
  CheckCircle2,
  Calendar,
} from "lucide-react";

export const metadata = {
  title: "Executive Business Reports | Finances & Conversions",
};

export default async function DashboardReportsPage() {
  const metrics = await getDashboardOverviewMetrics();

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-navy-900 tracking-tight">Executive Reports</h1>
          <p className="text-xs text-gray-500 mt-1">
            Auditable financial summaries, budget utilization, and lead conversion analytics.
          </p>
        </div>

        <div className="flex space-x-2">
          <a
            href="/api/expenses/export"
            target="_blank"
            className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-charcoal-700 bg-white border border-gray-200 hover:bg-gray-50 transition shadow-xs"
          >
            <Download className="w-3.5 h-3.5 text-construction-500" />
            <span>Download Expenses CSV</span>
          </a>

          <a
            href="/api/enquiries/export"
            target="_blank"
            className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-charcoal-700 bg-white border border-gray-200 hover:bg-gray-50 transition shadow-xs"
          >
            <Download className="w-3.5 h-3.5 text-construction-500" />
            <span>Download Leads CSV</span>
          </a>
        </div>
      </div>

      {/* Report 1: Project Budget vs Actual Expenditure */}
      <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs space-y-4">
        <div>
          <h2 className="text-base font-bold text-navy-900">
            Report 1: Project Budget vs. Recorded Expenditure
          </h2>
          <p className="text-xs text-gray-500">
            Comparison of approved capital budgets against cumulative recorded vouchers.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-surface text-gray-500 uppercase text-[10px] font-bold border-b border-gray-100">
              <tr>
                <th className="py-2.5 px-3">Project Number & Title</th>
                <th className="py-2.5 px-3">Category</th>
                <th className="py-2.5 px-3">Approved Budget</th>
                <th className="py-2.5 px-3">Actual Expenses</th>
                <th className="py-2.5 px-3">Remaining Budget</th>
                <th className="py-2.5 px-3">Budget Variance</th>
                <th className="py-2.5 px-3 text-right">Utilization %</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {metrics.projectComparisons.map((proj) => (
                <tr key={proj.id} className="hover:bg-gray-50 transition">
                  <td className="py-3 px-3">
                    <span className="font-bold text-navy-900 block">{proj.title}</span>
                    <span className="text-[10px] font-mono text-gray-400">{proj.projectNumber}</span>
                  </td>
                  <td className="py-3 px-3">{proj.category}</td>
                  <td className="py-3 px-3 font-semibold text-navy-900">
                    ${Math.round(proj.approvedBudget).toLocaleString()}
                  </td>
                  <td className="py-3 px-3 font-semibold text-charcoal-800">
                    ${Math.round(proj.actualExpenses).toLocaleString()}
                  </td>
                  <td className="py-3 px-3 font-semibold text-emerald-700">
                    ${Math.round(proj.remainingBudget).toLocaleString()}
                  </td>
                  <td
                    className={`py-3 px-3 font-semibold ${
                      proj.actualExpenses - proj.approvedBudget > 0
                        ? "text-red-600"
                        : "text-gray-500"
                    }`}
                  >
                    ${Math.round(proj.actualExpenses - proj.approvedBudget).toLocaleString()}
                  </td>
                  <td className="py-3 px-3 text-right">
                    <span
                      className={`font-bold ${
                        proj.isOverBudget
                          ? "text-red-600"
                          : proj.utilizationPct > 80
                          ? "text-amber-600"
                          : "text-emerald-600"
                      }`}
                    >
                      {proj.utilizationPct}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Row: Expense Category Distribution & Lead Source Conversion */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Report 2: Expenditure by Category */}
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs space-y-4">
          <div>
            <h2 className="text-base font-bold text-navy-900">Report 2: Expense Allocation by Category</h2>
            <p className="text-xs text-gray-500">Breakdown of capital deployment across materials & labor</p>
          </div>

          <div className="space-y-3">
            {metrics.categoryBreakdown.map((item, idx) => {
              const pct =
                metrics.totalExpenses > 0
                  ? Math.round((item.amount / metrics.totalExpenses) * 100)
                  : 0;
              return (
                <div key={idx} className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="font-semibold text-charcoal-800">{item.category}</span>
                    <span className="font-bold text-navy-900">
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
        </div>

        {/* Report 3: Lead Sources & Status Distribution */}
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs space-y-4">
          <div>
            <h2 className="text-base font-bold text-navy-900">
              Report 3: Customer Pipeline & Inbound Sources
            </h2>
            <p className="text-xs text-gray-500">Lead attribution and conversion status breakdown</p>
          </div>

          <div className="space-y-4">
            <div>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-2">
                Leads by Source
              </span>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {Object.entries(metrics.sourceCounts).map(([src, count]) => (
                  <div key={src} className="p-3 rounded-xl bg-surface border border-gray-100">
                    <span className="text-gray-500 text-[11px] block">{src.replace(/_/g, " ")}</span>
                    <span className="text-lg font-bold text-navy-900">{count} Leads</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 border-t border-gray-100">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-2">
                Leads by Current Status
              </span>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {Object.entries(metrics.statusCounts).map(([st, count]) => (
                  <div key={st} className="p-3 rounded-xl bg-surface border border-gray-100">
                    <span className="text-gray-500 text-[11px] block">{st.replace(/_/g, " ")}</span>
                    <span className="text-lg font-bold text-navy-900">{count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
