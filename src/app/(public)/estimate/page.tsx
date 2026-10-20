import React from "react";
import EstimateCalculator from "@/components/public/EstimateCalculator";
import { Calculator, ShieldCheck, Scale, FileText } from "lucide-react";

export const metadata = {
  title: "Online Construction Cost Estimator | Instant Residential & Commercial Rates",
  description:
    "Calculate instant construction costs for residential and commercial projects. Customize built-up area, floors, and specifications with itemized line items.",
};

export default function EstimatePage() {
  return (
    <div className="bg-surface min-h-screen py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-bold text-construction-600 bg-construction-50 px-3 py-1 rounded-full border border-construction-200">
            <Calculator className="w-4 h-4" />
            <span>Interactive Estimating Engine</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight">
            Construction Cost Estimator
          </h1>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Configure your project parameters, select quality tiers, and receive an instant, itemized engineering estimate based on current verified market rates.
          </p>
        </div>

        {/* Embedded Calculator */}
        <EstimateCalculator />

        {/* Estimation Guidelines & Transparency */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-navy-50 text-navy-800 flex items-center justify-center font-bold text-construction-600">
              <Scale className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-navy-900">Per Square Foot Engineering Formula</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Calculations are derived from built-up slab area multiplied by verified bill-of-quantities unit rates for concrete, steel, labor, and finishing fixtures.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-navy-50 text-navy-800 flex items-center justify-center font-bold text-construction-600">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-navy-900">Configurable Quality Tiers</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Choose between Basic, Standard, Premium, and Luxury specifications to inspect how material grades impact total structural and architectural budget requirements.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-navy-50 text-navy-800 flex items-center justify-center font-bold text-construction-600">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-navy-900">Formal Quotation Conversion</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Submitting an estimate saves its full rate snapshot into our database so our structural team can convert it into an official engineering tender.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
