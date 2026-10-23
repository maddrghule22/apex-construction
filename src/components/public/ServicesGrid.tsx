import React from "react";
import Link from "next/link";
import {
  Home,
  Building2,
  Droplets,
  Truck,
  ArrowRight,
  ShieldCheck,
  Check,
  Sparkles,
} from "lucide-react";

export default function ServicesGrid() {
  const serviceCategories = [
    {
      category: "Builders & Developers",
      tagline: "Turnkey Residential & Commercial Construction",
      icon: Home,
      accentColor: "border-construction-500",
      badgeColor: "bg-construction-50 text-construction-700 border-construction-200",
      items: [
        {
          title: "Custom Luxury Villas & Bungalows",
          desc: "Complete turnkey structural casting from foundation to premium interior handover for plot owners.",
        },
        {
          title: "Individual Independent Houses & Row Houses",
          desc: "High-grade RCC column-beam framing, precision brick masonry, and seismic-resistant standards.",
        },
        {
          title: "Commercial Complexes & Showrooms",
          desc: "Spacious column-free commercial architecture engineered for high footfall and retail longevity.",
        },
        {
          title: "Structural Renovation & Extensions",
          desc: "Floor additions, slab casting, waterproofing, and structural strengthening.",
        },
      ],
      link: "/services#residential",
      ctaText: "Explore Construction Services",
    },
    {
      category: "Water Tanker Services",
      tagline: "24x7 Reliable Fleet for Sites & Industry",
      icon: Droplets,
      accentColor: "border-blue-500",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
      items: [
        {
          title: "Construction Site Curing Water Tankers",
          desc: "Continuous scheduled bulk water supply for RCC slab curing, brickwork washing, and plaster hydration.",
        },
        {
          title: "Concrete Mixing & Batching Supply",
          desc: "Clean quality water delivered directly to on-site concrete mixers and RMC batches.",
        },
        {
          title: "Potable / Drinking Water Tankers",
          desc: "Hygienic potable water tankers for residential societies, commercial facilities, and emergency requirements.",
        },
        {
          title: "Industrial Bulk Water Supply Contracts",
          desc: "Dedicated daily and monthly fleet agreements for factories, warehouses, and fabrication yards.",
        },
      ],
      link: "/services#tanker",
      ctaText: "Book Water Tanker Now",
    },
    {
      category: "Industrial Suppliers & Logistics",
      tagline: "Raw Building Materials & Industrial Equipment",
      icon: Truck,
      accentColor: "border-emerald-500",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      items: [
        {
          title: "Construction Raw Materials Supply",
          desc: "High-grade river sand, crushed stone sand (M-Sand), blue metal aggregates (10mm/20mm/40mm).",
        },
        {
          title: "TMT Steel & Cement Procurement",
          desc: "Bulk certified Fe-550D TMT bars and 43/53 grade OPC/PPC cement direct from authorized manufacturers.",
        },
        {
          title: "Site Earthwork & Excavation Coordination",
          desc: "JCB, excavators, dumper transport, and plot leveling for foundation groundwork.",
        },
        {
          title: "Industrial Spares & Material Logistics",
          desc: "Heavy material handling and industrial supplies for production plants and infrastructure projects.",
        },
      ],
      link: "/services#materials",
      ctaText: "Inquire Industrial Supply",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-navy-800 uppercase tracking-wider bg-surface px-3 py-1 rounded-full border border-gray-200">
            End-To-End Infrastructure Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
            Our Business Specializations
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Sree Samarth Krupa Enterprises bridges civil construction expertise with rapid on-demand water logistics and raw material supply across Maharashtra.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {serviceCategories.map((group, idx) => {
            const Icon = group.icon;
            return (
              <div
                key={idx}
                className={`bg-white rounded-2xl border-t-4 ${group.accentColor} border-x border-b border-gray-200/80 p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group`}
              >
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-navy-50 text-navy-900 flex items-center justify-center group-hover:scale-105 transition shadow-xs">
                      <Icon className="w-6 h-6 text-construction-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-navy-950">{group.category}</h3>
                      <p className="text-xs text-gray-500 font-medium">{group.tagline}</p>
                    </div>
                  </div>

                  <ul className="space-y-4 my-6">
                    {group.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start space-x-3 text-xs sm:text-sm">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-charcoal-900 block font-semibold">
                            {item.title}
                          </strong>
                          <span className="text-gray-500 text-xs leading-relaxed">
                            {item.desc}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <Link
                    href={group.link}
                    className="inline-flex items-center text-xs font-bold text-navy-900 hover:text-construction-600 transition"
                  >
                    <span>{group.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1 text-construction-500" />
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
