"use client";

import React, { useState, useEffect } from "react";
import {
  Inbox,
  Search,
  Filter,
  Download,
  Phone,
  Mail,
  MapPin,
  Calendar,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
  Clock,
  Plus,
  Send,
  UserCheck,
} from "lucide-react";
import { generateWhatsAppUrl } from "@/lib/whatsapp/url";

export default function DashboardEnquiriesPage() {
  const [enquiries, setEnquiries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [categoryFilter, setCategoryFilter] = useState("ALL");
  const [sourceFilter, setSourceFilter] = useState("ALL");

  // Selected Enquiry Drawer / Modal
  const [selectedEnquiry, setSelectedEnquiry] = useState<any>(null);
  const [newStatus, setNewStatus] = useState("");
  const [internalNotes, setInternalNotes] = useState("");
  const [nextFollowUpDate, setNextFollowUpDate] = useState("");
  const [updating, setUpdating] = useState(false);

  // New Interaction Log State
  const [interactionType, setInteractionType] = useState("CALL");
  const [interactionSummary, setInteractionSummary] = useState("");
  const [interactionDetails, setInteractionDetails] = useState("");
  const [loggingInteraction, setLoggingInteraction] = useState(false);

  // Convert to Project Modal State
  const [isConvertModalOpen, setIsConvertModalOpen] = useState(false);
  const [convertTitle, setConvertTitle] = useState("");
  const [convertBudget, setConvertBudget] = useState("");
  const [converting, setConverting] = useState(false);

  const fetchEnquiries = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams();
      if (statusFilter !== "ALL") params.append("status", statusFilter);
      if (categoryFilter !== "ALL") params.append("category", categoryFilter);
      if (sourceFilter !== "ALL") params.append("source", sourceFilter);
      if (search) params.append("search", search);

      const res = await fetch(`/api/enquiries?${params.toString()}`);
      const data = await res.json();
      if (data.enquiries) {
        setEnquiries(data.enquiries);
        // Refresh selected enquiry if open
        if (selectedEnquiry) {
          const updatedSelected = data.enquiries.find((e: any) => e.id === selectedEnquiry.id);
          if (updatedSelected) setSelectedEnquiry(updatedSelected);
        }
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEnquiries();
  }, [statusFilter, categoryFilter, sourceFilter]);

  const openEnquiryDetails = (enquiry: any) => {
    setSelectedEnquiry(enquiry);
    setNewStatus(enquiry.status);
    setInternalNotes(enquiry.notes || "");
    setNextFollowUpDate(
      enquiry.nextFollowUpDate ? new Date(enquiry.nextFollowUpDate).toISOString().slice(0, 10) : ""
    );
  };

  const handleStatusUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedEnquiry) return;
    setUpdating(true);

    try {
      const res = await fetch(`/api/enquiries/${selectedEnquiry.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          status: newStatus,
          notes: internalNotes,
          nextFollowUpDate: nextFollowUpDate ? new Date(nextFollowUpDate).toISOString() : null,
        }),
      });

      if (res.ok) {
        fetchEnquiries();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setUpdating(false);
    }
  };

  const handleAddInteraction = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedEnquiry || !interactionSummary) return;
    setLoggingInteraction(true);

    try {
      const res = await fetch(`/api/enquiries/${selectedEnquiry.id}/interactions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: interactionType,
          summary: interactionSummary,
          details: interactionDetails || undefined,
        }),
      });

      if (res.ok) {
        setInteractionSummary("");
        setInteractionDetails("");
        fetchEnquiries();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoggingInteraction(false);
    }
  };

  const handleConvertToProject = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedEnquiry) return;
    setConverting(true);

    try {
      const res = await fetch(`/api/enquiries/${selectedEnquiry.id}/convert`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: convertTitle || `Project: ${selectedEnquiry.customerName}`,
          approvedBudget: Number(convertBudget || 0),
          category: selectedEnquiry.category,
          location: selectedEnquiry.location,
          builtUpArea: selectedEnquiry.approxArea ? Number(selectedEnquiry.approxArea) : undefined,
          description: selectedEnquiry.message,
        }),
      });

      if (res.ok) {
        setIsConvertModalOpen(false);
        fetchEnquiries();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setConverting(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-navy-900 tracking-tight">Customer Enquiries</h1>
          <p className="text-xs text-gray-500 mt-1">
            Track lead lifecycle from first website contact to site visit and converted contract.
          </p>
        </div>

        <a
          href="/api/enquiries/export"
          target="_blank"
          className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-charcoal-700 bg-white border border-gray-200 hover:bg-gray-50 transition shadow-xs"
        >
          <Download className="w-3.5 h-3.5 text-construction-500" />
          <span>Export CSV</span>
        </a>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-xs flex flex-col md:flex-row gap-4 items-center justify-between">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            fetchEnquiries();
          }}
          className="relative w-full md:w-80"
        >
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search name, phone, or ID..."
            className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-construction-500"
          />
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
        </form>

        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 py-2 border border-gray-200 rounded-xl text-xs bg-white focus:outline-none focus:ring-2 focus:ring-construction-500"
          >
            <option value="ALL">All Statuses</option>
            <option value="NEW">New</option>
            <option value="CONTACTED">Contacted</option>
            <option value="SITE_VISIT_SCHEDULED">Site Visit Scheduled</option>
            <option value="QUOTATION_SENT">Quotation Sent</option>
            <option value="NEGOTIATION">Negotiation</option>
            <option value="CONVERTED">Converted</option>
            <option value="LOST">Lost</option>
          </select>

          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="px-3 py-2 border border-gray-200 rounded-xl text-xs bg-white focus:outline-none focus:ring-2 focus:ring-construction-500"
          >
            <option value="ALL">All Categories</option>
            <option value="RESIDENTIAL">Residential</option>
            <option value="COMMERCIAL">Commercial</option>
            <option value="INDUSTRIAL">Industrial</option>
            <option value="RENOVATION">Renovation</option>
          </select>

          <select
            value={sourceFilter}
            onChange={(e) => setSourceFilter(e.target.value)}
            className="px-3 py-2 border border-gray-200 rounded-xl text-xs bg-white focus:outline-none focus:ring-2 focus:ring-construction-500"
          >
            <option value="ALL">All Sources</option>
            <option value="WEBSITE_FORM">Website Form</option>
            <option value="COST_ESTIMATOR">Cost Estimator</option>
            <option value="WHATSAPP">WhatsApp</option>
            <option value="DIRECT_WALKIN">Direct Walk-in</option>
          </select>
        </div>
      </div>

      {/* Enquiries Table */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-xs overflow-hidden">
        {loading ? (
          <div className="p-12 text-center text-xs text-gray-400">Loading enquiries...</div>
        ) : enquiries.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-surface text-gray-500 uppercase text-[10px] font-bold border-b border-gray-100">
                <tr>
                  <th className="py-3 px-4">Customer</th>
                  <th className="py-3 px-4">Location</th>
                  <th className="py-3 px-4">Category</th>
                  <th className="py-3 px-4">Area & Budget</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4">Next Follow-Up</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {enquiries.map((enq) => {
                  const isConverted = enq.status === "CONVERTED";
                  const isNew = enq.status === "NEW";
                  return (
                    <tr
                      key={enq.id}
                      onClick={() => openEnquiryDetails(enq)}
                      className="hover:bg-gray-50 transition cursor-pointer"
                    >
                      <td className="py-3.5 px-4">
                        <span className="font-bold text-navy-900 block">{enq.customerName}</span>
                        <span className="text-gray-400 text-[11px] font-mono">{enq.phone}</span>
                      </td>

                      <td className="py-3.5 px-4 text-charcoal-700">{enq.location}</td>

                      <td className="py-3.5 px-4">
                        <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-gray-100 text-gray-700">
                          {enq.category}
                        </span>
                      </td>

                      <td className="py-3.5 px-4">
                        <span className="font-semibold text-navy-900 block">
                          {enq.approxArea ? `${Number(enq.approxArea).toLocaleString()} sq.ft` : "—"}
                        </span>
                        <span className="text-[11px] text-gray-400">{enq.budgetRange || "—"}</span>
                      </td>

                      <td className="py-3.5 px-4">
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                            isConverted
                              ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                              : isNew
                              ? "bg-blue-50 text-blue-700 border border-blue-200"
                              : "bg-amber-50 text-amber-700 border border-amber-200"
                          }`}
                        >
                          {enq.status.replace(/_/g, " ")}
                        </span>
                      </td>

                      <td className="py-3.5 px-4 text-gray-500 text-[11px]">
                        {enq.nextFollowUpDate
                          ? new Date(enq.nextFollowUpDate).toLocaleDateString()
                          : "None scheduled"}
                      </td>

                      <td className="py-3.5 px-4 text-right">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            openEnquiryDetails(enq);
                          }}
                          className="text-xs font-bold text-construction-600 hover:text-construction-700"
                        >
                          View & Update →
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="p-12 text-center text-xs text-gray-400">
            No customer enquiries match the selected filters.
          </div>
        )}
      </div>

      {/* Enquiry Detail Slide-Over / Modal */}
      {selectedEnquiry && (
        <div className="fixed inset-0 z-50 flex items-center justify-end bg-navy-900/60 backdrop-blur-xs p-0 sm:p-4 animate-fadeIn">
          <div className="bg-white h-full sm:h-auto sm:max-h-[95vh] w-full max-w-xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 flex flex-col justify-between overflow-y-auto border border-gray-100">
            <div className="space-y-6">
              {/* Header */}
              <div className="flex justify-between items-start pb-4 border-b border-gray-100">
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-mono text-xs text-gray-400 uppercase font-bold">
                      {selectedEnquiry.enquiryNumber}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-navy-50 text-navy-800">
                      {selectedEnquiry.source}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mt-1">
                    {selectedEnquiry.customerName}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedEnquiry(null)}
                  className="text-gray-400 hover:text-gray-600 font-bold p-1"
                >
                  ✕
                </button>
              </div>

              {/* Direct WhatsApp Action */}
              <div className="flex space-x-2">
                <a
                  href={generateWhatsAppUrl({
                    phoneNumber: selectedEnquiry.phone,
                    type: "ENQUIRY_FOLLOWUP",
                    customerName: selectedEnquiry.customerName,
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center space-x-1.5 py-2 px-3 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Chat on WhatsApp</span>
                </a>

                <a
                  href={`tel:${selectedEnquiry.phone}`}
                  className="flex-1 flex items-center justify-center space-x-1.5 py-2 px-3 rounded-xl text-xs font-semibold text-charcoal-700 bg-surface border border-gray-200 hover:bg-gray-100 transition"
                >
                  <Phone className="w-3.5 h-3.5 text-construction-500" />
                  <span>Call {selectedEnquiry.phone}</span>
                </a>
              </div>

              {/* Lead Details */}
              <div className="bg-surface p-4 rounded-xl space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-500">Location / City:</span>
                  <span className="font-bold text-navy-900">{selectedEnquiry.location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Category:</span>
                  <span className="font-bold text-navy-900">{selectedEnquiry.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Approx Area:</span>
                  <span className="font-bold text-navy-900">
                    {selectedEnquiry.approxArea ? `${Number(selectedEnquiry.approxArea).toLocaleString()} sq.ft` : "N/A"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Budget Range:</span>
                  <span className="font-bold text-navy-900">{selectedEnquiry.budgetRange || "N/A"}</span>
                </div>
                <div className="pt-2 border-t border-gray-200">
                  <span className="text-gray-500 block mb-1">Customer Message / Requirements:</span>
                  <p className="text-charcoal-800 leading-relaxed bg-white p-2.5 rounded-lg border border-gray-100">
                    {selectedEnquiry.message}
                  </p>
                </div>
              </div>

              {/* Update Status Form */}
              <form onSubmit={handleStatusUpdate} className="p-4 bg-white rounded-xl border border-gray-200 space-y-3">
                <h4 className="text-xs font-bold text-navy-900 uppercase">Status & Follow-Up Date</h4>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-charcoal-700 mb-1">
                      Enquiry Status
                    </label>
                    <select
                      value={newStatus}
                      onChange={(e) => setNewStatus(e.target.value)}
                      className="w-full px-2.5 py-1.5 border border-gray-200 rounded-lg text-xs bg-white"
                    >
                      <option value="NEW">New</option>
                      <option value="CONTACTED">Contacted</option>
                      <option value="SITE_VISIT_SCHEDULED">Site Visit Scheduled</option>
                      <option value="QUOTATION_SENT">Quotation Sent</option>
                      <option value="NEGOTIATION">Negotiation</option>
                      <option value="CONVERTED">Converted</option>
                      <option value="LOST">Lost</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-charcoal-700 mb-1">
                      Next Follow-Up Date
                    </label>
                    <input
                      type="date"
                      value={nextFollowUpDate}
                      onChange={(e) => setNextFollowUpDate(e.target.value)}
                      className="w-full px-2.5 py-1.5 border border-gray-200 rounded-lg text-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-charcoal-700 mb-1">
                    Internal Engineer Notes
                  </label>
                  <textarea
                    rows={2}
                    value={internalNotes}
                    onChange={(e) => setInternalNotes(e.target.value)}
                    placeholder="Add internal notes about negotiation, client preferences..."
                    className="w-full px-2.5 py-1.5 border border-gray-200 rounded-lg text-xs"
                  ></textarea>
                </div>

                <div className="flex justify-between items-center pt-1">
                  {selectedEnquiry.status !== "CONVERTED" && (
                    <button
                      type="button"
                      onClick={() => {
                        setConvertTitle(`Project for ${selectedEnquiry.customerName}`);
                        setConvertBudget("5000000");
                        setIsConvertModalOpen(true);
                      }}
                      className="inline-flex items-center text-xs font-bold text-emerald-600 hover:text-emerald-700"
                    >
                      <UserCheck className="w-3.5 h-3.5 mr-1" />
                      Convert to Project
                    </button>
                  )}
                  <button
                    type="submit"
                    disabled={updating}
                    className="ml-auto px-3.5 py-1.5 rounded-lg text-xs font-bold text-white bg-construction-500 hover:bg-construction-600 transition"
                  >
                    {updating ? "Saving..." : "Update Status"}
                  </button>
                </div>
              </form>

              {/* Interaction Log History */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-navy-900 uppercase">Interaction History</h4>

                <form onSubmit={handleAddInteraction} className="flex gap-2">
                  <select
                    value={interactionType}
                    onChange={(e) => setInteractionType(e.target.value)}
                    className="px-2 py-1.5 border border-gray-200 rounded-lg text-xs bg-white"
                  >
                    <option value="CALL">Call</option>
                    <option value="WHATSAPP">WhatsApp</option>
                    <option value="EMAIL">Email</option>
                    <option value="SITE_VISIT">Site Visit</option>
                    <option value="NOTE">Note</option>
                  </select>
                  <input
                    type="text"
                    required
                    value={interactionSummary}
                    onChange={(e) => setInteractionSummary(e.target.value)}
                    placeholder="Log a call note or site visit summary..."
                    className="flex-1 px-3 py-1.5 border border-gray-200 rounded-lg text-xs"
                  />
                  <button
                    type="submit"
                    disabled={loggingInteraction}
                    className="px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-navy-800 hover:bg-navy-900"
                  >
                    Log
                  </button>
                </form>

                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {selectedEnquiry.interactions && selectedEnquiry.interactions.length > 0 ? (
                    selectedEnquiry.interactions.map((int: any) => (
                      <div
                        key={int.id}
                        className="p-2.5 rounded-lg bg-surface border border-gray-100 text-xs space-y-1"
                      >
                        <div className="flex justify-between items-center text-gray-500 text-[10px]">
                          <span className="font-bold text-navy-800 uppercase">{int.type}</span>
                          <span>{new Date(int.conductedAt || int.createdAt).toLocaleString()}</span>
                        </div>
                        <p className="font-semibold text-charcoal-800">{int.summary}</p>
                        {int.details && <p className="text-gray-500 text-[11px]">{int.details}</p>}
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-400 text-xs py-2 text-center">No interactions logged yet.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Convert To Project Modal */}
      {isConvertModalOpen && selectedEnquiry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy-900/60 backdrop-blur-xs p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-gray-100 space-y-4">
            <h3 className="text-lg font-bold text-navy-900">Convert Lead to Formal Project</h3>
            <p className="text-xs text-gray-500">
              This seamlessly creates a Customer profile and initiates a Project record linked to enquiry #{selectedEnquiry.enquiryNumber}.
            </p>

            <form onSubmit={handleConvertToProject} className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                  Project Title*
                </label>
                <input
                  type="text"
                  required
                  value={convertTitle}
                  onChange={(e) => setConvertTitle(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                  Approved Construction Budget ($)*
                </label>
                <input
                  type="number"
                  required
                  min={0}
                  step={1000}
                  value={convertBudget}
                  onChange={(e) => setConvertBudget(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs"
                />
              </div>

              <div className="pt-2 flex space-x-2">
                <button
                  type="button"
                  onClick={() => setIsConvertModalOpen(false)}
                  className="flex-1 py-2 rounded-xl text-xs text-gray-600 bg-gray-100 hover:bg-gray-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={converting}
                  className="flex-1 py-2 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700"
                >
                  {converting ? "Converting..." : "Confirm & Create Project"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
