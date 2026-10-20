import React from "react";
import { FileText, Compass, CheckCircle2, ShieldAlert, Key, HardHat } from "lucide-react";

export default function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Consultation & Feasibility",
      desc: "Initial plot assessment, soil condition reviews, municipal zoning analysis, and preliminary budget roadmap.",
      icon: Compass,
    },
    {
      number: "02",
      title: "Architectural & Structural Drawings",
      desc: "Preparation of 2D/3D elevations, structural column grid designs, plumbing/electrical layouts, and authority permits.",
      icon: FileText,
    },
    {
      number: "03",
      title: "Itemized Cost Agreement",
      desc: "Transparent Bill of Quantities (BOQ) with zero hidden clauses, material grade specifications, and milestone schedule.",
      icon: CheckCircle2,
    },
    {
      number: "04",
      title: "Excavation & Substructure",
      desc: "Anti-termite treatment, isolated footing casting, plinth beam reinforcement, and below-ground damp-proof course.",
      icon: HardHat,
    },
    {
      number: "05",
      title: "Superstructure & MEP Rough-In",
      desc: "RCC columns, beams, slab casting, precision masonry walls, concealed copper electrical and CPVC piping lines.",
      icon: ShieldAlert,
    },
    {
      number: "06",
      title: "Finishing, QA & Handover",
      desc: "Plastering, premium tiling, painting, fixture installation, 120-point quality audit, deep clean, and keys handover.",
      icon: Key,
    },
  ];

  return (
    <section className="py-20 bg-surface border-y border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-navy-800 uppercase tracking-wider bg-white px-3 py-1 rounded-full border border-gray-200 shadow-xs">
            Systematic Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Our 6-Step Construction Journey
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Every project follows a standardized, transparent milestone framework so you have complete visibility over budget, materials, and timeline from day one.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm relative group hover:shadow-md transition"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-navy-50 text-navy-800 flex items-center justify-center border border-navy-100 group-hover:bg-navy-800 group-hover:text-construction-500 transition">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-3xl font-black text-gray-200 group-hover:text-construction-400/40 transition">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-base font-bold text-navy-900 mb-2">{step.title}</h3>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
