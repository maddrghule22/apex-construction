import React from "react";
import { Building2, ShieldCheck, Users, FileCheck2 } from "lucide-react";

export default function StatsSection() {
  const highlights = [
    {
      title: "Direct Proprietor Supervision",
      description: "Hands-on daily site inspection and contractor coordination by Dnyaneshwar & Shravan Pawale.",
      icon: Users,
    },
    {
      title: "Fixed BOQ Contracts",
      description: "Itemized material specifications and milestone billing with transparent, locked construction pricing.",
      icon: FileCheck2,
    },
    {
      title: "Certified Structural Materials",
      description: "Grade 53 OPC cement, tested Fe-550D TMT reinforcement steel, and certified structural design.",
      icon: ShieldCheck,
    },
    {
      title: "Turnkey Execution",
      description: "Full-lifecycle management from land excavation and RCC framing to plastering and finishing handover.",
      icon: Building2,
    },
  ];

  return (
    <section className="bg-surface py-12 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs flex items-start space-x-4 hover:border-gray-300 transition"
              >
                <div className="w-11 h-11 rounded-xl bg-navy-50 text-navy-900 flex items-center justify-center shrink-0 border border-navy-100">
                  <Icon className="w-5 h-5 text-construction-600" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-navy-950">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
