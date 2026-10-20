"use client";

import React, { useState, useEffect } from "react";
import { Calculator, Settings2, Eye, CheckCircle2, Save, FileText, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function DashboardEstimatesPage() {
  const [activeTab, setActiveTab] = useState<"HISTORY" | "RATES">("RATES");
  const [estimates, setEstimates] = useState<any[]>([]);
  const [rateProfiles, setRateProfiles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedEstimate, setSelectedEstimate] = useState<any>(null);

  // Rate Editing State
  const [editingProfile, setEditingProfile] = useState<any>(null);
  const [savingRate, setSavingRate] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [resEst, resRates] = await Promise.all([
        fetch("/api/estimates"),
        fetch("/api/estimates/rates"),
      ]);

      const dataEst = await resEst.json();
      const dataRates = await resRates.json();

      if (dataEst.estimates) setEstimates(dataEst.estimates);
      if (dataRates.profiles) {
        setRateProfiles(dataRates.profiles);
        if (dataRates.profiles.length > 0 && !editingProfile) {
          setEditingProfile(dataRates.profiles[0]);
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
  }, []);

  const handleSaveRates = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProfile) return;
    setSavingRate(true);
    setSaveSuccess(false);

    try {
      const res = await fetch("/api/estimates/rates", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: editingProfile.id,
          baseCivilRate: Number(editingProfile.baseCivilRate),
          finishingRate: Number(editingProfile.finishingRate),
          electricalRate: Number(editingProfile.electricalRate),
          plumbingRate: Number(editingProfile.plumbingRate),
          waterproofingRate: Number(editingProfile.waterproofingRate),
          basicMultiplier: Number(editingProfile.basicMultiplier),
          standardMultiplier: Number(editingProfile.standardMultiplier),
          premiumMultiplier: Number(editingProfile.premiumMultiplier),
          luxuryMultiplier: Number(editingProfile.luxuryMultiplier),
          defaultContingencyPct: Number(editingProfile.defaultContingencyPct),
        }),
      });

      if (res.ok) {
        setSaveSuccess(true);
        setTimeout(() => setSaveSuccess(false), 3000);
        fetchData();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSavingRate(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-navy-900 tracking-tight">
            Cost Rate Profiles & Estimates
          </h1>
          <p className="text-xs text-gray-500 mt-1">
            Configure per-square-foot construction rates and review historical customer calculations.
          </p>
        </div>

        {/* Tab switchers */}
        <div className="flex bg-white p-1 rounded-xl border border-gray-200 shadow-xs">
          <button
            type="button"
            onClick={() => setActiveTab("RATES")}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition flex items-center space-x-1.5 ${
              activeTab === "RATES"
                ? "bg-navy-800 text-white"
                : "text-gray-600 hover:text-navy-900"
            }`}
          >
            <Settings2 className="w-3.5 h-3.5" />
            <span>Configurable Rates</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("HISTORY")}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition flex items-center space-x-1.5 ${
              activeTab === "HISTORY"
                ? "bg-navy-800 text-white"
                : "text-gray-600 hover:text-navy-900"
            }`}
          >
            <Calculator className="w-3.5 h-3.5" />
            <span>Saved Estimates ({estimates.length})</span>
          </button>
        </div>
      </div>

      {activeTab === "RATES" ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Select Profile (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-sm font-bold text-navy-900 uppercase tracking-wider">
              Select Rate Profile
            </h3>
            <div className="space-y-3">
              {rateProfiles.map((prof) => (
                <button
                  key={prof.id}
                  type="button"
                  onClick={() => setEditingProfile(prof)}
                  className={`w-full p-4 rounded-2xl border text-left transition ${
                    editingProfile?.id === prof.id
                      ? "border-construction-500 bg-construction-50/50 ring-2 ring-construction-500/20"
                      : "border-gray-200 bg-white hover:border-gray-300"
                  }`}
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-sm text-navy-900">{prof.name}</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-navy-100 text-navy-800">
                      {prof.projectType}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500">
                    Base Civil: ${prof.baseCivilRate}/sq.ft • Version: v{prof.version || 1}
                  </p>
                </button>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-surface border border-gray-200 text-xs text-gray-600 space-y-2">
              <span className="font-bold text-navy-900 block">Rate Architecture Notice</span>
              <p className="text-[11px] leading-relaxed">
                Updating these rates immediately applies to all future estimates and public calculator submissions without modifying code. Historical estimates keep their immutable rate snapshot.
              </p>
            </div>
          </div>

          {/* Right Column: Edit Profile Rates (8 cols) */}
          <div className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-xs">
            {editingProfile ? (
              <form onSubmit={handleSaveRates} className="space-y-6">
                <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                  <div>
                    <h3 className="text-base font-bold text-navy-900">
                      Edit {editingProfile.name}
                    </h3>
                    <p className="text-xs text-gray-500">Unit rates per square foot in USD</p>
                  </div>
                  {saveSuccess && (
                    <span className="text-xs font-semibold text-emerald-600 flex items-center">
                      <CheckCircle2 className="w-4 h-4 mr-1" /> Rates Updated Successfully!
                    </span>
                  )}
                </div>

                {/* Section A: Base Rates per component */}
                <div>
                  <h4 className="text-xs font-bold text-navy-800 uppercase tracking-wider mb-3">
                    A. Core Component Unit Rates ($ / Sq.Ft)
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                        Base Civil & Superstructure Rate*
                      </label>
                      <input
                        type="number"
                        min={100}
                        step={10}
                        required
                        value={editingProfile.baseCivilRate}
                        onChange={(e) =>
                          setEditingProfile({
                            ...editingProfile,
                            baseCivilRate: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                        Finishing & Architectural Rate*
                      </label>
                      <input
                        type="number"
                        min={50}
                        step={10}
                        required
                        value={editingProfile.finishingRate}
                        onChange={(e) =>
                          setEditingProfile({
                            ...editingProfile,
                            finishingRate: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                        Electrical Systems Rate*
                      </label>
                      <input
                        type="number"
                        min={20}
                        step={5}
                        required
                        value={editingProfile.electricalRate}
                        onChange={(e) =>
                          setEditingProfile({
                            ...editingProfile,
                            electricalRate: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                        Plumbing & Sanitation Rate*
                      </label>
                      <input
                        type="number"
                        min={20}
                        step={5}
                        required
                        value={editingProfile.plumbingRate}
                        onChange={(e) =>
                          setEditingProfile({
                            ...editingProfile,
                            plumbingRate: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                        Waterproofing System Rate*
                      </label>
                      <input
                        type="number"
                        min={10}
                        step={5}
                        required
                        value={editingProfile.waterproofingRate}
                        onChange={(e) =>
                          setEditingProfile({
                            ...editingProfile,
                            waterproofingRate: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                        Default Contingency Buffer (%)
                      </label>
                      <input
                        type="number"
                        min={0}
                        max={30}
                        step={0.5}
                        required
                        value={editingProfile.defaultContingencyPct}
                        onChange={(e) =>
                          setEditingProfile({
                            ...editingProfile,
                            defaultContingencyPct: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs"
                      />
                    </div>
                  </div>
                </div>

                {/* Section B: Quality Multipliers */}
                <div className="pt-4 border-t border-gray-100">
                  <h4 className="text-xs font-bold text-navy-800 uppercase tracking-wider mb-3">
                    B. Quality Tier Multipliers
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-charcoal-700 mb-1">
                        Basic Multiplier
                      </label>
                      <input
                        type="number"
                        step={0.05}
                        min={0.5}
                        max={1.0}
                        value={editingProfile.basicMultiplier}
                        onChange={(e) =>
                          setEditingProfile({
                            ...editingProfile,
                            basicMultiplier: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-charcoal-700 mb-1">
                        Standard (1.0x)
                      </label>
                      <input
                        type="number"
                        step={0.05}
                        min={1.0}
                        max={1.0}
                        disabled
                        value={editingProfile.standardMultiplier}
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs bg-gray-50"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-charcoal-700 mb-1">
                        Premium Multiplier
                      </label>
                      <input
                        type="number"
                        step={0.05}
                        min={1.05}
                        max={2.0}
                        value={editingProfile.premiumMultiplier}
                        onChange={(e) =>
                          setEditingProfile({
                            ...editingProfile,
                            premiumMultiplier: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-charcoal-700 mb-1">
                        Luxury Multiplier
                      </label>
                      <input
                        type="number"
                        step={0.05}
                        min={1.2}
                        max={3.0}
                        value={editingProfile.luxuryMultiplier}
                        onChange={(e) =>
                          setEditingProfile({
                            ...editingProfile,
                            luxuryMultiplier: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 flex justify-end">
                  <button
                    type="submit"
                    disabled={savingRate}
                    className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-xl font-bold text-xs text-white bg-construction-500 hover:bg-construction-600 transition shadow-sm disabled:opacity-50"
                  >
                    <Save className="w-4 h-4" />
                    <span>{savingRate ? "Updating Profile..." : "Save Rate Changes"}</span>
                  </button>
                </div>
              </form>
            ) : (
              <p className="text-gray-400 text-xs text-center py-12">Select a rate profile</p>
            )}
          </div>
        </div>
      ) : (
        /* Saved Estimates Table */
        <div className="bg-white rounded-2xl border border-gray-200 shadow-xs overflow-hidden">
          {estimates.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-surface text-gray-500 uppercase text-[10px] font-bold border-b border-gray-100">
                  <tr>
                    <th className="py-3 px-4">Estimate Number</th>
                    <th className="py-3 px-4">Customer</th>
                    <th className="py-3 px-4">Type</th>
                    <th className="py-3 px-4">Area (Sq.Ft)</th>
                    <th className="py-3 px-4">Quality Tier</th>
                    <th className="py-3 px-4">Rate / Sq.Ft</th>
                    <th className="py-3 px-4 text-right">Estimated Total</th>
                    <th className="py-3 px-4 text-right">Created</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {estimates.map((est) => (
                    <tr
                      key={est.id}
                      onClick={() => setSelectedEstimate(est)}
                      className="hover:bg-gray-50 transition cursor-pointer"
                    >
                      <td className="py-3 px-4 font-mono font-bold text-navy-900">
                        {est.estimateNumber}
                      </td>
                      <td className="py-3 px-4 font-semibold text-navy-900">
                        {est.customerName || "Anonymous Visitor"}
                        {est.customerPhone && (
                          <span className="block text-[11px] text-gray-400 font-normal">
                            {est.customerPhone}
                          </span>
                        )}
                      </td>
                      <td className="py-3 px-4">{est.projectType}</td>
                      <td className="py-3 px-4 font-medium text-navy-900">
                        {Number(est.builtUpArea).toLocaleString()} sq.ft
                      </td>
                      <td className="py-3 px-4">
                        <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-gray-100">
                          {est.qualityTier}
                        </span>
                      </td>
                      <td className="py-3 px-4 font-medium">${Number(est.costPerSqFt).toFixed(2)}</td>
                      <td className="py-3 px-4 text-right font-bold text-navy-900">
                        ${Number(est.totalEstimatedCost).toLocaleString()}
                      </td>
                      <td className="py-3 px-4 text-right text-gray-400 text-[11px]">
                        {new Date(est.createdAt).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="p-12 text-center text-xs text-gray-400">
              No estimates generated yet. Estimates submitted on the public website calculator will appear here.
            </div>
          )}
        </div>
      )}

      {/* Selected Estimate Modal */}
      {selectedEstimate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy-900/60 backdrop-blur-xs p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 shadow-2xl border border-gray-100 max-h-[90vh] overflow-y-auto space-y-4">
            <div className="flex justify-between items-center pb-3 border-b border-gray-100">
              <div>
                <span className="font-mono text-xs text-gray-400 uppercase font-bold">
                  {selectedEstimate.estimateNumber}
                </span>
                <h3 className="text-lg font-bold text-navy-900">
                  {selectedEstimate.customerName || "Estimate Breakdown"}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedEstimate(null)}
                className="text-gray-400 hover:text-gray-600 font-bold"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs bg-surface p-4 rounded-xl">
              <div>
                <span className="text-gray-400 block text-[10px]">BUILT-UP AREA</span>
                <span className="font-bold text-navy-900">
                  {Number(selectedEstimate.builtUpArea).toLocaleString()} sq.ft
                </span>
              </div>
              <div>
                <span className="text-gray-400 block text-[10px]">QUALITY TIER</span>
                <span className="font-bold text-navy-900">{selectedEstimate.qualityTier}</span>
              </div>
              <div>
                <span className="text-gray-400 block text-[10px]">RATE PER SQ.FT</span>
                <span className="font-bold text-navy-900">
                  ${Number(selectedEstimate.costPerSqFt).toFixed(2)}
                </span>
              </div>
              <div>
                <span className="text-gray-400 block text-[10px]">TOTAL ESTIMATE</span>
                <span className="font-bold text-construction-600 text-sm">
                  ${Number(selectedEstimate.totalEstimatedCost).toLocaleString()}
                </span>
              </div>
            </div>

            {selectedEstimate.lineItems && selectedEstimate.lineItems.length > 0 && (
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-navy-900 uppercase">Itemized Line Items</h4>
                <div className="border border-gray-100 rounded-xl overflow-hidden">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-surface text-gray-400 text-[10px]">
                      <tr>
                        <th className="p-2">Item</th>
                        <th className="p-2 text-right">Amount</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {selectedEstimate.lineItems.map((item: any, idx: number) => (
                        <tr key={idx}>
                          <td className="p-2">
                            <span className="font-semibold text-navy-900 block">{item.category}</span>
                            <span className="text-[11px] text-gray-500">{item.description}</span>
                          </td>
                          <td className="p-2 text-right font-bold text-navy-900">
                            ${Number(item.amount).toLocaleString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            <button
              type="button"
              onClick={() => setSelectedEstimate(null)}
              className="w-full py-2.5 rounded-xl text-xs font-bold text-navy-800 bg-gray-100 hover:bg-gray-200"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
