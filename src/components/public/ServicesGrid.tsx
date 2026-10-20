import React from "react";
import Link from "next/link";
import { Home, Building2, Factory, Hammer, ArrowRight, ShieldCheck, Check } from "lucide-react";

export default function ServicesGrid() {
  const serviceCategories = [
    {
      category: "Residential Construction",
      tagline: "Custom Living Spaces Built for Longevity",
      icon: Home,
      items: [
        {
          title: "Custom Luxury Villas & Bungalows",
          desc: "Bespoke contemporary residential villas with double-height atriums and high-end materials.",
        },
        {
          title: "Individual Independent Houses",
          desc: "Complete turnkey structural execution from foundation footing to handover for plot owners.",
        },
        {
          title: "Multi-Storey Residential Apartments",
          desc: "Multi-unit apartment buildings with structural lift shafts and basement car parking.",
        },
        {
          title: "Complete Home Remodeling & Extensions",
          desc: "Floor additions, structural remodeling, modern architectural facade upgrades.",
        },
      ],
      link: "/services#residential",
    },
    {
      category: "Commercial Infrastructure",
      tagline: "Grade-A Workspaces & High-Traffic Retail",
      icon: Building2,
      items: [
        {
          title: "Corporate Offices & Business Towers",
          desc: "Post-tensioned RCC framing, curtain wall glass facades, and modern MEP integrations.",
        },
        {
          title: "Showrooms & Retail Complexes",
          desc: "Spacious column-free commercial spaces engineered for high footfall and retail aesthetics.",
        },
        {
          title: "Turnkey Commercial Fit-Outs",
          desc: "End-to-end electrical grids, acoustic ceilings, fire suppression systems, and HVAC.",
        },
        {
          title: "Industrial Warehouses & PEB Sheds",
          desc: "Heavy-duty laser-screed concrete floors, pre-engineered steel frames, and loading docks.",
        },
      ],
      link: "/services#commercial",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-construction-600 uppercase tracking-wider bg-construction-50 px-3 py-1 rounded-full border border-construction-200">
            Comprehensive Building Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Engineered Construction Services
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            From single-family estate villas to multi-storey corporate towers, our engineering methodology guarantees strict adherence to building codes, material grades, and contractual timelines.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {serviceCategories.map((group, idx) => {
            const Icon = group.icon;
            return (
              <div
                key={idx}
                className="bg-surface rounded-2xl p-8 border border-gray-200 shadow-sm flex flex-col justify-between hover:shadow-md transition"
              >
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-navy-800 text-construction-500 flex items-center justify-center shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-navy-900">{group.category}</h3>
                      <p className="text-xs text-gray-500">{group.tagline}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                    {group.items.map((item, itemIdx) => (
                      <div
                        key={itemIdx}
                        className="bg-white p-4 rounded-xl border border-gray-100 shadow-xs"
                      >
                        <h4 className="text-sm font-bold text-navy-800 flex items-start">
                          <Check className="w-4 h-4 text-emerald-500 mr-1.5 shrink-0 mt-0.5" />
                          {item.title}
                        </h4>
                        <p className="text-xs text-gray-500 mt-1 pl-5.5 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-gray-200/60 flex items-center justify-between">
                  <Link
                    href={group.link}
                    className="inline-flex items-center text-sm font-bold text-navy-800 hover:text-construction-600 transition"
                  >
                    Explore detailed specifications & scope
                    <ArrowRight className="w-4 h-4 ml-1.5 text-construction-500" />
                  </Link>

                  <Link
                    href="/contact"
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-navy-800 text-white hover:bg-navy-900 transition"
                  >
                    Enquire Now
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
