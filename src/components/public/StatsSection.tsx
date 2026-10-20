import React from "react";
import { Building2, CheckCircle2, ShieldCheck, HardHat } from "lucide-react";

export default function StatsSection() {
  const stats = [
    {
      label: "Turnkey Projects Delivered",
      value: "45+",
      description: "Residential & commercial developments successfully completed",
      icon: Building2,
    },
    {
      label: "Built-up Area Constructed",
      value: "250K+",
      description: "Square feet of precision engineering and masonry executed",
      icon: CheckCircle2,
    },
    {
      label: "Zero Lost-Time Incidents",
      value: "100%",
      description: "Strict on-site safety gear and OSHA-compliant protocols",
      icon: ShieldCheck,
    },
    {
      label: "Years Engineering Experience",
      value: "14+",
      description: "Leadership team with senior structural and civil background",
      icon: HardHat,
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
                  <div className="text-3xl font-extrabold text-navy-900 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold text-charcoal-700 mt-0.5">{stat.label}</div>
                  <p className="text-[11px] text-gray-500 mt-1 leading-snug">{stat.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
