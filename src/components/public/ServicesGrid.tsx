import React from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export default function ServicesGrid() {
  const serviceCategories = [
    {
      category: "Residential Construction",
      tagline: "Turnkey Villas, Bungalows & Homes",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      accentColor: "border-construction-500",
      items: [
        {
          title: "Custom Luxury Villas & Bungalows",
          desc: "Complete turnkey structural casting from foundation to premium interior finishes for plot owners.",
        },
        {
          title: "Independent Houses & Row Houses",
          desc: "High-grade RCC column-beam framing, precision brick masonry, and seismic-resistant standards.",
        },
        {
          title: "Architectural Planning & Blueprints",
          desc: "3D elevations, structural analysis, Vaastu-compliant layouts, and municipal sanction documentation.",
        },
        {
          title: "Turnkey Interior Finishing",
          desc: "Flooring, premium electrical wiring, concealed plumbing, designer false ceilings, and paint.",
        },
      ],
      link: "/services#residential",
      ctaText: "Explore Residential Services",
    },
    {
      category: "Commercial Construction",
      tagline: "Corporate Complexes & Retail Spaces",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      accentColor: "border-navy-600",
      items: [
        {
          title: "Commercial Complexes & Showrooms",
          desc: "Spacious column-free commercial architecture engineered for maximum retail footfall and high longevity.",
        },
        {
          title: "Corporate Offices & Business Parks",
          desc: "Modern office towers with integrated elevator shafts, fire sprinkler grids, and HVAC ducting coordination.",
        },
        {
          title: "Retail Shops & Commercial Buildings",
          desc: "Durable RCC framing, high-visibility commercial layouts, and fire-safety compliant civil structures.",
        },
        {
          title: "Turnkey Commercial Fit-Outs",
          desc: "Facade structural glazing, exterior cladding, entrance foyers, and parking lot civil works.",
        },
      ],
      link: "/services#commercial",
      ctaText: "Explore Commercial Projects",
    },
    {
      category: "Civil & Structural Engineering",
      tagline: "Renovation, Structural Works & Retrofitting",
      image:
        "https://images.unsplash.com/photo-1541888946425-d0fbb1861564?auto=format&fit=crop&w=800&q=80",
      accentColor: "border-amber-500",
      items: [
        {
          title: "RCC Framework & Structural Casting",
          desc: "Earthwork excavation, isolated and raft footings, plinth beams, columns, and slab pours.",
        },
        {
          title: "Building Renovation & Remodeling",
          desc: "Floor additions, structural strengthening, wall dismantling, modern expansions, and facade upgrades.",
        },
        {
          title: "Waterproofing & Anti-Termite Treatment",
          desc: "Multi-layer terrace and sunken slab waterproofing warranties, chemical injection, and pest barriers.",
        },
        {
          title: "MEP Coordination & Site Infrastructure",
          desc: "Comprehensive civil stormwater drainage, septic tanks, underground sump tanks, and boundary walls.",
        },
      ],
      link: "/services#engineering",
      ctaText: "Explore Civil Engineering",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
            Our Construction Services
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Shree Samarth Krupa Enterprises delivers turnkey construction excellence for residential bungalows, commercial landmarks, and structural civil projects across Maharashtra.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {serviceCategories.map((group, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-2xl border-t-4 ${group.accentColor} border-x border-b border-gray-200/80 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group text-left`}
            >
              <div>
                {/* Real Construction Photography replacing SVG icon placeholder */}
                <div className="relative h-48 w-full bg-navy-950 overflow-hidden">
                  <img
                    src={group.image}
                    alt={group.category}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <h3 className="text-lg sm:text-xl font-extrabold text-white">{group.category}</h3>
                    <p className="text-xs text-construction-300 font-medium">{group.tagline}</p>
                  </div>
                </div>

                <div className="p-6">
                  <ul className="space-y-3.5 text-left">
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
              </div>

              <div className="p-6 pt-0 border-t border-gray-100 text-left mt-2">
                <Link
                  href={group.link}
                  className="inline-flex items-center text-xs font-bold text-navy-900 hover:text-construction-600 transition"
                >
                  <span>{group.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 text-construction-500" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
