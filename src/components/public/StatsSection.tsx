import React from "react";
import { Building2, Droplets, ShieldCheck, Users } from "lucide-react";

export default function StatsSection() {
  const stats = [
    {
      label: "Turnkey Projects Delivered",
      value: "50+",
      description: "Residential bungalows, independent houses & commercial units",
      icon: Building2,
    },
    {
      label: "Water Tankers Dispatched",
      value: "10,000+",
      description: "Curing water & industrial bulk tankers supplied on time",
      icon: Droplets,
    },
    {
      label: "Direct Proprietor Supervision",
      value: "100%",
      description: "Direct on-site quality control by Dnyaneshwar & Shravan Pawale",
      icon: Users,
    },
    {
      label: "Years Construction Trust",
      value: "15+",
      description: "Reputed regional general contractors & industrial suppliers",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="bg-surface py-12 border-b border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start space-x-4 hover:shadow-md transition"
              >
                <div className="w-12 h-12 rounded-xl bg-navy-50 text-navy-800 flex items-center justify-center shrink-0 border border-navy-100">
                  <Icon className="w-6 h-6 text-construction-500" />
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-navy-950 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold text-charcoal-700 mt-0.5">{stat.label}</div>
                  <p className="text-[11px] text-gray-500 mt-1 leading-relaxed">
                    {stat.description}
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
