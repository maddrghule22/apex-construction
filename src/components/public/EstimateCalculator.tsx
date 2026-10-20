"use client";

import React, { useState, useEffect, useMemo } from "react";
import {
  calculateConstructionEstimate,
  EstimatorInput,
  CalculationResult,
  QualityTier,
  ProjectType,
  AdditionalWorkOption,
  ESTIMATE_DISCLAIMER,
} from "@/lib/calculations/estimator";
import {
  Calculator,
  CheckCircle2,
  Building,
  Home,
  Layers,
  Sparkles,
  Printer,
  Send,
  MessageSquare,
  ShieldAlert,
  Calendar,
  DollarSign,
  Info,
} from "lucide-react";
import { generateWhatsAppUrl } from "@/lib/whatsapp/url";

const DEFAULT_ADDITIONAL_WORKS: AdditionalWorkOption[] = [
  {
    id: "add-solar",
    name: "Rooftop Solar PV Installation",
    description: "5kW Grid-Tied Solar Generation Array with Bi-directional Inverter",
    fixedCost: 350000,
    selected: false,
  },
  {
    id: "add-landscaping",
    name: "Landscape & Outdoor Paving",
    description: "Perimeter grass lawn, perimeter paving stones, exterior lighting",
    ratePerSqFt: 60,
    selected: false,
  },
  {
    id: "add-hvac",
    name: "HVAC / Ducting Provision",
    description: "Concealed copper line piping, drainage, and cassette AC points",
    ratePerSqFt: 110,
    selected: false,
  },
  {
    id: "add-interior",
    name: "Modular Kitchen & Wardrobes",
    description: "Factory-finish waterproof ply cabinetry, soft-close hardware",
    ratePerSqFt: 220,
    selected: false,
  },
];

export default function EstimateCalculator() {
  const [projectType, setProjectType] = useState<ProjectType>("RESIDENTIAL");
  const [location, setLocation] = useState("Metropolitan Region");
  const [plotArea, setPlotArea] = useState<number>(2400);
  const [builtUpArea, setBuiltUpArea] = useState<number>(2000);
  const [floors, setFloors] = useState<number>(2);
  const [qualityTier, setQualityTier] = useState<QualityTier>("STANDARD");

  const [includeCivil, setIncludeCivil] = useState(true);
  const [includeFinishing, setIncludeFinishing] = useState(true);
  const [includeElectrical, setIncludeElectrical] = useState(true);
  const [includePlumbing, setIncludePlumbing] = useState(true);
  const [includeWaterproofing, setIncludeWaterproofing] = useState(true);

  const [additionalWorks, setAdditionalWorks] = useState<AdditionalWorkOption[]>(
    DEFAULT_ADDITIONAL_WORKS
  );
  const [contingencyPct, setContingencyPct] = useState<number>(5);

  // Submission modal state
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerNotes, setCustomerNotes] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<any>(null);
  const [submitError, setSubmitError] = useState("");

  const toggleAdditionalWork = (id: string) => {
    setAdditionalWorks((prev) =>
      prev.map((item) => (item.id === id ? { ...item, selected: !item.selected } : item))
    );
  };

  // Perform calculation
  const calculationResult: CalculationResult | null = useMemo(() => {
    try {
      if (!builtUpArea || builtUpArea <= 0) return null;
      return calculateConstructionEstimate({
        projectType,
        location,
        plotArea,
        builtUpArea,
        floors,
        qualityTier,
        includeCivil,
        includeFinishing,
        includeElectrical,
        includePlumbing,
        includeWaterproofing,
        additionalWorks,
        customContingencyPct: contingencyPct,
      });
    } catch (e) {
      return null;
    }
  }, [
    projectType,
    location,
    plotArea,
    builtUpArea,
    floors,
    qualityTier,
    includeCivil,
    includeFinishing,
    includeElectrical,
    includePlumbing,
    includeWaterproofing,
    additionalWorks,
    contingencyPct,
  ]);

  const whatsappUrl = generateWhatsAppUrl({
    type: "ESTIMATE",
    projectCategory: projectType,
  });

  const handleEstimateSubmission = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !customerPhone) {
      setSubmitError("Please provide your name and phone number.");
      return;
    }

    setSubmitting(true);
    setSubmitError("");

    try {
      const res = await fetch("/api/estimates/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          estimateData: {
            projectType,
            location,
            plotArea,
            builtUpArea,
            floors,
            qualityTier,
            includeCivil,
            includeFinishing,
            includeElectrical,
            includePlumbing,
            includeWaterproofing,
            additionalWorks,
            customContingencyPct: contingencyPct,
          },
          customerName,
          phone: customerPhone,
          email: customerEmail,
          notes: customerNotes,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to submit estimate.");
      }

      setSubmitSuccess(data);
    } catch (err: any) {
      setSubmitError(err.message || "Failed to submit estimate.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
      {/* Top Banner */}
      <div className="bg-navy-800 text-white p-6 sm:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-construction-500/20 text-construction-400 text-xs font-semibold mb-2 border border-construction-500/30">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Cost Calculator</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Transparent Construction Cost Estimator
          </h2>
          <p className="text-gray-300 text-sm mt-1 max-w-2xl">
            Configure your project parameters, select quality tiers, and receive an instant, itemized engineering estimate based on current verified market rates.
          </p>
        </div>

        {/* Project Type Switcher */}
        <div className="flex bg-navy-900/80 p-1.5 rounded-xl border border-navy-700 w-full sm:w-auto">
          <button
            type="button"
            onClick={() => setProjectType("RESIDENTIAL")}
            className={`flex-1 sm:flex-initial flex items-center justify-center space-x-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition ${
              projectType === "RESIDENTIAL"
                ? "bg-construction-500 text-white shadow-sm"
                : "text-gray-400 hover:text-white"
            }`}
          >
            <Home className="w-4 h-4" />
            <span>Residential</span>
          </button>
          <button
            type="button"
            onClick={() => setProjectType("COMMERCIAL")}
            className={`flex-1 sm:flex-initial flex items-center justify-center space-x-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition ${
              projectType === "COMMERCIAL"
                ? "bg-construction-500 text-white shadow-sm"
                : "text-gray-400 hover:text-white"
            }`}
          >
            <Building className="w-4 h-4" />
            <span>Commercial</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-gray-100">
        {/* Left Column: Form Configuration (7 cols) */}
        <div className="lg:col-span-7 p-6 sm:p-8 space-y-8">
          {/* Section 1: Dimensions & Location */}
          <div>
            <h3 className="text-base font-bold text-navy-800 uppercase tracking-wider mb-4 flex items-center">
              <span className="w-6 h-6 rounded-full bg-navy-100 text-navy-800 text-xs flex items-center justify-center font-bold mr-2">
                1
              </span>
              Project Parameters & Area
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                  Project Location / City
                </label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g. North Suburb, Metro"
                  className="w-full px-3.5 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-construction-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                  Number of Floors
                </label>
                <select
                  value={floors}
                  onChange={(e) => setFloors(Number(e.target.value))}
                  className="w-full px-3.5 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-construction-500 bg-white"
                >
                  <option value={1}>Ground Floor Only (G)</option>
                  <option value={2}>Ground + 1 Floor (G+1)</option>
                  <option value={3}>Ground + 2 Floors (G+2)</option>
                  <option value={4}>Ground + 3 Floors (G+3)</option>
                  <option value={5}>Ground + 4 Floors (G+4)</option>
                  <option value={6}>Ground + 5+ Floors</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                  Built-up Construction Area (Sq.Ft)*
                </label>
                <div className="relative">
                  <input
                    type="number"
                    min={100}
                    step={50}
                    value={builtUpArea}
                    onChange={(e) => setBuiltUpArea(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 border border-gray-200 rounded-lg text-sm font-semibold text-navy-800 focus:outline-none focus:ring-2 focus:ring-construction-500"
                  />
                  <span className="absolute right-3 top-2.5 text-xs text-gray-400 font-medium">
                    sq.ft
                  </span>
                </div>
                <p className="text-[11px] text-gray-500 mt-1">
                  Primary area used for construction cost calculation.
                </p>
              </div>

              <div>
                <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                  Plot Area (Sq.Ft)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    min={100}
                    step={100}
                    value={plotArea}
                    onChange={(e) => setPlotArea(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-construction-500"
                  />
                  <span className="absolute right-3 top-2.5 text-xs text-gray-400 font-medium">
                    sq.ft
                  </span>
                </div>
                <p className="text-[11px] text-gray-500 mt-1">Total physical ground land size.</p>
              </div>
            </div>
          </div>

          {/* Section 2: Quality Tier Selection */}
          <div>
            <h3 className="text-base font-bold text-navy-800 uppercase tracking-wider mb-4 flex items-center">
              <span className="w-6 h-6 rounded-full bg-navy-100 text-navy-800 text-xs flex items-center justify-center font-bold mr-2">
                2
              </span>
              Specification & Quality Tier
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                {
                  tier: "BASIC" as QualityTier,
                  title: "Basic",
                  multiplier: "0.85x",
                  desc: "Standard cement, red bricks, vitrified flooring, essential electrical.",
                },
                {
                  tier: "STANDARD" as QualityTier,
                  title: "Standard",
                  multiplier: "1.00x",
                  desc: "OPC 53 grade, premium tiles, branded sanitaryware, concealed copper.",
                },
                {
                  tier: "PREMIUM" as QualityTier,
                  title: "Premium",
                  multiplier: "1.35x",
                  desc: "High-grade steel, large-format glazed tiles, premium plumbing, modular fittings.",
                },
                {
                  tier: "LUXURY" as QualityTier,
                  title: "Luxury",
                  multiplier: "1.75x",
                  desc: "Italian marble, smart home automation, custom timber work, designer fixtures.",
                },
              ].map((item) => (
                <button
                  key={item.tier}
                  type="button"
                  onClick={() => setQualityTier(item.tier)}
                  className={`p-3.5 rounded-xl border text-left transition flex flex-col justify-between ${
                    qualityTier === item.tier
                      ? "border-construction-500 bg-construction-50/60 ring-2 ring-construction-500/20"
                      : "border-gray-200 hover:border-gray-300 bg-white"
                  }`}
                >
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-sm text-navy-800">{item.title}</span>
                      <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-gray-100 text-gray-600">
                        {item.multiplier}
                      </span>
                    </div>
                    <p className="text-[11px] text-gray-500 line-clamp-3">{item.desc}</p>
                  </div>
                  {qualityTier === item.tier && (
                    <div className="mt-2 text-xs font-semibold text-construction-600 flex items-center">
                      <CheckCircle2 className="w-3.5 h-3.5 mr-1" /> Selected
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Section 3: Scope of Construction */}
          <div>
            <h3 className="text-base font-bold text-navy-800 uppercase tracking-wider mb-4 flex items-center">
              <span className="w-6 h-6 rounded-full bg-navy-100 text-navy-800 text-xs flex items-center justify-center font-bold mr-2">
                3
              </span>
              Core Construction Components Included
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <label className="flex items-start space-x-3 p-3 rounded-lg border border-gray-100 hover:bg-gray-50 cursor-pointer">
                <input
                  type="checkbox"
                  checked={includeCivil}
                  onChange={(e) => setIncludeCivil(e.target.checked)}
                  className="mt-1 rounded text-construction-500 focus:ring-construction-500"
                />
                <div>
                  <span className="font-semibold text-charcoal-800 block">
                    Civil & RCC Superstructure
                  </span>
                  <span className="text-xs text-gray-500">
                    Excavation, foundation footings, columns, beams, slabs & masonry
                  </span>
                </div>
              </label>

              <label className="flex items-start space-x-3 p-3 rounded-lg border border-gray-100 hover:bg-gray-50 cursor-pointer">
                <input
                  type="checkbox"
                  checked={includeFinishing}
                  onChange={(e) => setIncludeFinishing(e.target.checked)}
                  className="mt-1 rounded text-construction-500 focus:ring-construction-500"
                />
                <div>
                  <span className="font-semibold text-charcoal-800 block">
                    Architectural Finishing
                  </span>
                  <span className="text-xs text-gray-500">
                    Plastering, flooring tiles, interior & exterior weatherproof paints
                  </span>
                </div>
              </label>

              <label className="flex items-start space-x-3 p-3 rounded-lg border border-gray-100 hover:bg-gray-50 cursor-pointer">
                <input
                  type="checkbox"
                  checked={includeElectrical}
                  onChange={(e) => setIncludeElectrical(e.target.checked)}
                  className="mt-1 rounded text-construction-500 focus:ring-construction-500"
                />
                <div>
                  <span className="font-semibold text-charcoal-800 block">
                    Concealed Electrical Work
                  </span>
                  <span className="text-xs text-gray-500">
                    FR conduits, copper wiring, distribution boards & switch plates
                  </span>
                </div>
              </label>

              <label className="flex items-start space-x-3 p-3 rounded-lg border border-gray-100 hover:bg-gray-50 cursor-pointer">
                <input
                  type="checkbox"
                  checked={includePlumbing}
                  onChange={(e) => setIncludePlumbing(e.target.checked)}
                  className="mt-1 rounded text-construction-500 focus:ring-construction-500"
                />
                <div>
                  <span className="font-semibold text-charcoal-800 block">
                    Plumbing & Sanitation
                  </span>
                  <span className="text-xs text-gray-500">
                    CPVC/PVC supply lines, sewage drainage, fixture connections
                  </span>
                </div>
              </label>

              <label className="flex items-start space-x-3 p-3 rounded-lg border border-gray-100 hover:bg-gray-50 cursor-pointer sm:col-span-2">
                <input
                  type="checkbox"
                  checked={includeWaterproofing}
                  onChange={(e) => setIncludeWaterproofing(e.target.checked)}
                  className="mt-1 rounded text-construction-500 focus:ring-construction-500"
                />
                <div>
                  <span className="font-semibold text-charcoal-800 block">
                    Advanced Waterproofing Membrane
                  </span>
                  <span className="text-xs text-gray-500">
                    Terrace elastomeric coating, sunken bathrooms, and foundation damp-proof course
                  </span>
                </div>
              </label>
            </div>
          </div>

          {/* Section 4: Optional Additional Add-ons */}
          <div>
            <h3 className="text-base font-bold text-navy-800 uppercase tracking-wider mb-4 flex items-center">
              <span className="w-6 h-6 rounded-full bg-navy-100 text-navy-800 text-xs flex items-center justify-center font-bold mr-2">
                4
              </span>
              Optional Specialized Works
            </h3>

            <div className="space-y-2.5">
              {additionalWorks.map((work) => (
                <label
                  key={work.id}
                  className={`flex items-center justify-between p-3 rounded-xl border transition cursor-pointer ${
                    work.selected
                      ? "border-construction-400 bg-construction-50/40"
                      : "border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={work.selected}
                      onChange={() => toggleAdditionalWork(work.id)}
                      className="rounded text-construction-500 focus:ring-construction-500"
                    />
                    <div>
                      <span className="font-semibold text-sm text-charcoal-800 block">
                        {work.name}
                      </span>
                      <span className="text-xs text-gray-500">{work.description}</span>
                    </div>
                  </div>
                  <div className="text-right text-xs font-semibold text-navy-800">
                    {work.ratePerSqFt ? `$${work.ratePerSqFt}/sq.ft` : `$${work.fixedCost?.toLocaleString()}`}
                  </div>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Real-Time Results & Summary (5 cols) */}
        <div className="lg:col-span-5 bg-surface p-6 sm:p-8 flex flex-col justify-between space-y-6">
          {calculationResult ? (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Indicative Project Cost
                </span>
                <div className="flex items-baseline space-x-2 mt-1">
                  <span className="text-3xl sm:text-4xl font-extrabold text-navy-900">
                    ${Math.round(calculationResult.totalEstimatedCost).toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center space-x-4 mt-2 text-xs text-gray-600 font-medium">
                  <span className="bg-white px-2.5 py-1 rounded border border-gray-200">
                    Rate: <strong>${calculationResult.costPerSqFt.toFixed(2)}</strong> / sq.ft
                  </span>
                  <span className="flex items-center bg-white px-2.5 py-1 rounded border border-gray-200">
                    <Calendar className="w-3.5 h-3.5 mr-1 text-construction-500" />
                    Est. Duration: <strong>{calculationResult.estimatedDurationMonths} Mos</strong>
                  </span>
                </div>
              </div>

              {/* Component breakdown list */}
              <div className="bg-white rounded-xl p-4 border border-gray-200/80 shadow-sm space-y-3">
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider pb-2 border-b border-gray-100">
                  Itemized Component Summary
                </h4>

                <div className="flex justify-between text-xs py-1">
                  <span className="text-charcoal-700">Civil & Structural Works</span>
                  <span className="font-semibold text-navy-900">
                    ${Math.round(calculationResult.civilCost).toLocaleString()}
                  </span>
                </div>

                <div className="flex justify-between text-xs py-1">
                  <span className="text-charcoal-700">Architectural Finishing</span>
                  <span className="font-semibold text-navy-900">
                    ${Math.round(calculationResult.finishingCost).toLocaleString()}
                  </span>
                </div>

                <div className="flex justify-between text-xs py-1">
                  <span className="text-charcoal-700">Concealed Electrical</span>
                  <span className="font-semibold text-navy-900">
                    ${Math.round(calculationResult.electricalCost).toLocaleString()}
                  </span>
                </div>

                <div className="flex justify-between text-xs py-1">
                  <span className="text-charcoal-700">Plumbing & Sanitation</span>
                  <span className="font-semibold text-navy-900">
                    ${Math.round(calculationResult.plumbingCost).toLocaleString()}
                  </span>
                </div>

                <div className="flex justify-between text-xs py-1">
                  <span className="text-charcoal-700">Waterproofing System</span>
                  <span className="font-semibold text-navy-900">
                    ${Math.round(calculationResult.waterproofingCost).toLocaleString()}
                  </span>
                </div>

                {calculationResult.additionalCost > 0 && (
                  <div className="flex justify-between text-xs py-1">
                    <span className="text-charcoal-700">Selected Specialized Works</span>
                    <span className="font-semibold text-navy-900">
                      ${Math.round(calculationResult.additionalCost).toLocaleString()}
                    </span>
                  </div>
                )}

                <div className="flex justify-between text-xs py-1 text-gray-500 border-t border-gray-100 pt-2">
                  <span>Contingency Buffer ({calculationResult.contingencyPct}%)</span>
                  <span className="font-medium">
                    ${Math.round(calculationResult.contingencyCost).toLocaleString()}
                  </span>
                </div>

                <div className="flex justify-between text-sm font-bold text-navy-900 border-t border-gray-200 pt-2">
                  <span>Total Estimated Cost</span>
                  <span className="text-construction-600">
                    ${Math.round(calculationResult.totalEstimatedCost).toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5">
                <button
                  type="button"
                  onClick={() => setIsSubmitModalOpen(true)}
                  className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl font-bold text-sm text-white bg-construction-500 hover:bg-construction-600 shadow-md transition active:scale-98"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Estimate for Formal Quotation</span>
                </button>

                <div className="flex space-x-2">
                  <button
                    type="button"
                    onClick={() => window.print()}
                    className="flex-1 flex items-center justify-center space-x-1.5 py-2.5 px-3 rounded-lg text-xs font-semibold text-charcoal-700 bg-white border border-gray-200 hover:bg-gray-50 transition"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Print Summary</span>
                  </button>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center space-x-1.5 py-2.5 px-3 rounded-lg text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 transition"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp Inquiry</span>
                  </a>
                </div>
              </div>

              {/* Required Legal Disclaimer */}
              <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200 text-amber-900 text-[11px] leading-relaxed flex items-start space-x-2.5">
                <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <p>
                  <strong>Notice:</strong> {ESTIMATE_DISCLAIMER}
                </p>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center py-12 text-gray-400">
              <Calculator className="w-12 h-12 mb-3 text-gray-300" />
              <p className="font-semibold text-sm">Enter construction area to view estimate</p>
            </div>
          )}
        </div>
      </div>

      {/* Submission Modal */}
      {isSubmitModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy-900/60 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-gray-100 max-h-[90vh] overflow-y-auto">
            {submitSuccess ? (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-navy-800">Estimate Submitted Successfully!</h3>
                <p className="text-sm text-gray-600 max-w-sm mx-auto">
                  Your estimate reference number is{" "}
                  <strong className="text-navy-900">{submitSuccess.estimateNumber}</strong>. Our senior project engineer has received your breakdown and will connect with you within 24 hours.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row gap-2">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-4 rounded-lg text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 text-center"
                  >
                    Chat on WhatsApp Now
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitModalOpen(false);
                      setSubmitSuccess(null);
                    }}
                    className="flex-1 py-2.5 px-4 rounded-lg text-sm font-semibold text-charcoal-700 bg-gray-100 hover:bg-gray-200"
                  >
                    Close
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleEstimateSubmission} className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                  <h3 className="text-lg font-bold text-navy-800">
                    Submit Estimate for Engineering Review
                  </h3>
                  <button
                    type="button"
                    onClick={() => setIsSubmitModalOpen(false)}
                    className="text-gray-400 hover:text-gray-600 font-bold"
                  >
                    ✕
                  </button>
                </div>

                <p className="text-xs text-gray-600">
                  We will link this <strong>{builtUpArea} sq.ft</strong> estimate to your enquiry and prepare a tailored structural schedule.
                </p>

                {submitError && (
                  <div className="p-3 rounded-lg bg-red-50 text-red-700 text-xs">
                    {submitError}
                  </div>
                )}

                <div>
                  <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                    Your Full Name*
                  </label>
                  <input
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="e.g. Johnathan Davis"
                    className="w-full px-3.5 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-construction-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                    Contact Phone Number*
                  </label>
                  <input
                    type="tel"
                    required
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-3.5 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-construction-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                    placeholder="your.email@example.com"
                    className="w-full px-3.5 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-construction-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                    Special Site Notes / Requirements
                  </label>
                  <textarea
                    rows={3}
                    value={customerNotes}
                    onChange={(e) => setCustomerNotes(e.target.value)}
                    placeholder="e.g. Corner plot with road access, looking to begin within 2 months"
                    className="w-full px-3.5 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-construction-500"
                  ></textarea>
                </div>

                <div className="pt-3 flex space-x-3">
                  <button
                    type="button"
                    onClick={() => setIsSubmitModalOpen(false)}
                    className="flex-1 py-2.5 rounded-lg text-sm font-semibold text-charcoal-700 bg-gray-100 hover:bg-gray-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="flex-1 py-2.5 rounded-lg text-sm font-semibold text-white bg-construction-500 hover:bg-construction-600 transition disabled:opacity-50"
                  >
                    {submitting ? "Submitting..." : "Confirm & Send"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
