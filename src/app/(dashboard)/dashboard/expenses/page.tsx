"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  Receipt,
  Plus,
  Search,
  Filter,
  Download,
  DollarSign,
  Calendar,
  Building,
  AlertCircle,
  FileText,
} from "lucide-react";
import { EXPENSE_CATEGORIES } from "@/lib/validation/expense";

function ExpensesContent() {
  const searchParams = useSearchParams();
  const initialProjectId = searchParams.get("projectId") || "ALL";

  const [expenses, setExpenses] = useState<any[]>([]);
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Filters
  const [selectedProject, setSelectedProject] = useState(initialProjectId);
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [vendorFilter, setVendorFilter] = useState("");

  // Record Expense Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formProject, setFormProject] = useState("");
  const [formCategory, setFormCategory] = useState<string>(EXPENSE_CATEGORIES[0]);
  const [formVendor, setFormVendor] = useState("");
  const [formDescription, setFormDescription] = useState("");
  const [formAmount, setFormAmount] = useState("");
  const [formPaymentMethod, setFormPaymentMethod] = useState("BANK_TRANSFER");
  const [formReference, setFormReference] = useState("");
  const [formExpenseDate, setFormExpenseDate] = useState(new Date().toISOString().slice(0, 10));
  const [formNotes, setFormNotes] = useState("");
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState("");

  const fetchData = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams();
      if (selectedProject !== "ALL") params.append("projectId", selectedProject);
      if (selectedCategory !== "ALL") params.append("category", selectedCategory);
      if (vendorFilter) params.append("vendor", vendorFilter);

      const [resExp, resProj] = await Promise.all([
        fetch(`/api/expenses?${params.toString()}`),
        fetch("/api/projects"),
      ]);

      const dataExp = await resExp.json();
      const dataProj = await resProj.json();

      if (dataExp.expenses) setExpenses(dataExp.expenses);
      if (dataProj.projects) {
        setProjects(dataProj.projects);
        if (dataProj.projects.length > 0 && !formProject) {
          setFormProject(dataProj.projects[0].id);
        }
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [selectedProject, selectedCategory]);

  const handleRecordExpense = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formProject || !formAmount || Number(formAmount) <= 0) {
      setSaveError("Please select a project and enter a valid positive amount.");
      return;
    }

    setSaving(true);
    setSaveError("");

    try {
      const res = await fetch("/api/expenses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          projectId: formProject,
          category: formCategory,
          vendor: formVendor,
          description: formDescription,
          amount: Number(formAmount),
          paymentMethod: formPaymentMethod,
          referenceNumber: formReference || undefined,
          expenseDate: new Date(formExpenseDate).toISOString(),
          notes: formNotes || undefined,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to record expense");
      }

      setIsModalOpen(false);
      // Reset form
      setFormDescription("");
      setFormVendor("");
      setFormAmount("");
      setFormReference("");
      setFormNotes("");
      fetchData();
    } catch (err: any) {
      setSaveError(err.message || "Failed to record expense");
    } finally {
      setSaving(false);
    }
  };

  const totalFilteredExpenditure = expenses.reduce(
    (sum, exp) => sum + Number(exp.amount || 0),
    0
  );

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-navy-900 tracking-tight">
            Expense & Budget Tracking
          </h1>
          <p className="text-xs text-gray-500 mt-1">
            Project-linked cost vouchers, material procurement billing, and vendor disbursements.
          </p>
        </div>

        <div className="flex space-x-2">
          <a
            href="/api/expenses/export"
            target="_blank"
            className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-charcoal-700 bg-white border border-gray-200 hover:bg-gray-50 transition shadow-xs"
          >
            <Download className="w-3.5 h-3.5 text-construction-500" />
            <span>Export CSV</span>
          </a>

          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-construction-500 hover:bg-construction-600 transition shadow-sm"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Record Expense</span>
          </button>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-xs flex flex-wrap gap-4 items-center justify-between">
        <div className="flex flex-wrap items-center gap-3">
          <div>
            <label className="block text-[10px] font-bold text-gray-400 uppercase mb-1">
              Filter by Project
            </label>
            <select
              value={selectedProject}
              onChange={(e) => setSelectedProject(e.target.value)}
              className="px-3 py-1.5 border border-gray-200 rounded-xl text-xs bg-white focus:outline-none focus:ring-2 focus:ring-construction-500"
            >
              <option value="ALL">All Projects</option>
              {projects.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.title}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-[10px] font-bold text-gray-400 uppercase mb-1">
              Category
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-1.5 border border-gray-200 rounded-xl text-xs bg-white focus:outline-none focus:ring-2 focus:ring-construction-500"
            >
              <option value="ALL">All Categories</option>
              {EXPENSE_CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="text-right">
          <span className="text-[10px] font-bold text-gray-400 uppercase block">
            Filtered Total Spend
          </span>
          <span className="text-xl font-black text-navy-900">
            ${totalFilteredExpenditure.toLocaleString()}
          </span>
        </div>
      </div>

      {/* Expenses Table */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-xs overflow-hidden">
        {loading ? (
          <div className="p-12 text-center text-xs text-gray-400">Loading expense vouchers...</div>
        ) : expenses.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-surface text-gray-500 uppercase text-[10px] font-bold border-b border-gray-100">
                <tr>
                  <th className="py-3 px-4">Expense ID & Date</th>
                  <th className="py-3 px-4">Project</th>
                  <th className="py-3 px-4">Category</th>
                  <th className="py-3 px-4">Vendor / Payee</th>
                  <th className="py-3 px-4">Description</th>
                  <th className="py-3 px-4">Payment Method</th>
                  <th className="py-3 px-4 text-right">Amount ($)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {expenses.map((exp) => (
                  <tr key={exp.id} className="hover:bg-gray-50 transition">
                    <td className="py-3 px-4">
                      <span className="font-mono font-bold text-navy-900 block">
                        {exp.expenseNumber}
                      </span>
                      <span className="text-gray-400 text-[11px]">
                        {new Date(exp.expenseDate).toLocaleDateString()}
                      </span>
                    </td>

                    <td className="py-3 px-4 font-semibold text-navy-900">
                      {exp.project?.title || exp.projectId}
                    </td>

                    <td className="py-3 px-4">
                      <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-gray-100 text-gray-700">
                        {exp.category}
                      </span>
                    </td>

                    <td className="py-3 px-4 font-medium text-charcoal-700">{exp.vendor}</td>

                    <td className="py-3 px-4 text-gray-500 truncate max-w-xs">{exp.description}</td>

                    <td className="py-3 px-4 text-gray-500 text-[11px]">
                      {exp.paymentMethod.replace(/_/g, " ")}
                      {exp.referenceNumber && (
                        <span className="block font-mono text-[10px] text-gray-400">
                          Ref: {exp.referenceNumber}
                        </span>
                      )}
                    </td>

                    <td className="py-3 px-4 text-right font-bold text-navy-900">
                      ${Number(exp.amount).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="p-12 text-center text-xs text-gray-400">
            No expenses found matching the selected filters.
          </div>
        )}
      </div>

      {/* Record Expense Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy-900/60 backdrop-blur-xs p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-gray-100 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center pb-3 border-b border-gray-100 mb-4">
              <h3 className="text-lg font-bold text-navy-900">Record Construction Expense</h3>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 font-bold"
              >
                ✕
              </button>
            </div>

            {saveError && (
              <div className="mb-4 p-3 rounded-lg bg-red-50 text-red-700 text-xs">{saveError}</div>
            )}

            <form onSubmit={handleRecordExpense} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                  Target Project*
                </label>
                <select
                  required
                  value={formProject}
                  onChange={(e) => setFormProject(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs bg-white"
                >
                  <option value="">Select Project</option>
                  {projects.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.title} ({p.projectNumber})
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                    Expense Category*
                  </label>
                  <select
                    value={formCategory}
                    onChange={(e) => setFormCategory(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs bg-white"
                  >
                    {EXPENSE_CATEGORIES.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                    Amount ($)*
                  </label>
                  <input
                    type="number"
                    required
                    min={1}
                    step={1}
                    value={formAmount}
                    onChange={(e) => setFormAmount(e.target.value)}
                    placeholder="e.g. 85000"
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                    Vendor / Payee Name*
                  </label>
                  <input
                    type="text"
                    required
                    value={formVendor}
                    onChange={(e) => setFormVendor(e.target.value)}
                    placeholder="e.g. UltraTech Cement Supplies"
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                    Date of Expense*
                  </label>
                  <input
                    type="date"
                    required
                    value={formExpenseDate}
                    onChange={(e) => setFormExpenseDate(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                    Payment Method
                  </label>
                  <select
                    value={formPaymentMethod}
                    onChange={(e) => setFormPaymentMethod(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs bg-white"
                  >
                    <option value="BANK_TRANSFER">Bank Transfer / NEFT</option>
                    <option value="CHEQUE">Cheque</option>
                    <option value="UPI_CARD">UPI / Card</option>
                    <option value="CASH">Cash Voucher</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                    Ref / Cheque / Invoice #
                  </label>
                  <input
                    type="text"
                    value={formReference}
                    onChange={(e) => setFormReference(e.target.value)}
                    placeholder="e.g. INV-90412"
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                  Description of Materials or Services*
                </label>
                <textarea
                  required
                  rows={2}
                  value={formDescription}
                  onChange={(e) => setFormDescription(e.target.value)}
                  placeholder="e.g. 400 Bags OPC 53 Grade Cement for slab casting lot B"
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs"
                ></textarea>
              </div>

              <div className="pt-2 flex space-x-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 py-2.5 rounded-xl text-xs text-gray-600 bg-gray-100 hover:bg-gray-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="flex-1 py-2.5 rounded-xl text-xs font-bold text-white bg-construction-500 hover:bg-construction-600"
                >
                  {saving ? "Recording..." : "Save Expense Record"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default function DashboardExpensesPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-xs text-gray-400">Loading expense vouchers...</div>}>
      <ExpensesContent />
    </Suspense>
  );
}
