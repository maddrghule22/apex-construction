import React from "react";
import Link from "next/link";
import {
  Home,
  Building2,
  Factory,
  Hammer,
  Layers,
  ShieldCheck,
  Check,
  ArrowRight,
  Calculator,
} from "lucide-react";

export const metadata = {
  title: "Turnkey Construction Services | Residential & Commercial",
  description:
    "Explore our complete suite of construction services: custom villas, residential apartments, commercial corporate offices, retail complexes, and pre-engineered warehouses.",
};

export default function ServicesPage() {
  const residentialServices = [
    {
      id: "villas",
      title: "Custom Luxury Villas & Bungalows",
      desc: "Turnkey architectural construction tailored to private plots. We manage structural soil investigation, foundation raft or footings, RCC frame casting, double-height ceilings, and premium European finishes.",
      benefits: [
        "End-to-end turnkey delivery from foundation to interior handover",
        "Seismic-resistant RCC frame with Fe-550D TMT reinforcement",
        "Pre-installed provisions for solar rooftop, EV charging, and rainwater harvesting",
        "Dedicated site engineer providing weekly progress logs",
      ],
      suitable: "Private landowners, luxury homeowners, duplex estates",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "individual-homes",
      title: "Individual Independent Houses",
      desc: "Designed for families seeking maximum utility and durability on standard residential plots. Complete civil masonry, weather-proof exterior treatments, and optimized natural lighting layouts.",
      benefits: [
        "Rigid adherence to local building bylaws and setback norms",
        "Termite-proof foundation treatments and damp-proof courses",
        "Concealed copper wiring with dedicated circuit breakers per room",
        "10-year structural warranty on concrete elements",
      ],
      suitable: "Plot owners building single or two-storey independent homes",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "apartments",
      title: "Multi-Storey Apartment Buildings",
      desc: "Comprehensive engineering for residential multi-unit housing. We construct basement parking, high-speed elevator structural shafts, fire staircase enclosures, and independent utility grids.",
      benefits: [
        "Post-tensioned slabs for large column-free living areas",
        "Underground water sump and centralized overhead tank structural design",
        "Comprehensive fire NOC and life-safety compliance",
        "Coordinated MEP drawings for individual sub-meters",
      ],
      suitable: "Real estate developers, landowner joint ventures, investors",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "renovation",
      title: "Structural Remodeling & Floor Extensions",
      desc: "Specialized retrofitting, foundation underpinning, and additional floor construction over existing structures without compromising load-bearing integrity.",
      benefits: [
        "Non-destructive testing (NDT) to evaluate existing concrete health",
        "Carbon-fiber wrapping and steel jacketing for structural strengthening",
        "Minimal disturbance to adjoining living zones",
        "Seamless aesthetic blending of old and new architecture",
      ],
      suitable: "Homeowners expanding upwards or re-configuring layouts",
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const commercialServices = [
    {
      id: "offices",
      title: "Corporate Offices & Commercial Towers",
      desc: "Grade-A office buildings engineered for corporate headquarters, IT campuses, and commercial co-working hubs with energy-efficient envelopes and HVAC coordination.",
      benefits: [
        "Double-glazed curtain wall facade engineering for acoustic & thermal insulation",
        "High-load server room concrete flooring with anti-static flooring prep",
        "Automated fire suppression sprinkler grids and smoke evacuation systems",
        "LEED-ready energy efficient building envelopes",
      ],
      suitable: "Corporations, IT companies, commercial property developers",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "retail",
      title: "Retail Showrooms & Commercial Complexes",
      desc: "Column-free expansive retail floorplates designed for heavy customer footfall, wide display storefronts, customer escalators, and basement valet parking.",
      benefits: [
        "Heavy-duty slab loading capacities for retail machinery and inventory",
        "Wide column spans utilizing post-tensioned beam technologies",
        "High-visibility clear glass structural spider facades",
        "Centralized electrical distribution and backup generator infrastructure",
      ],
      suitable: "Automobile dealerships, retail brands, shopping complexes",
      image:
        "https://images.unsplash.com/photo-1555636222-cae831e670b3?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "industrial",
      title: "Pre-Engineered Warehouses & PEB Buildings",
      desc: "Industrial manufacturing plants and logistics hubs built using high-strength structural steel frames and laser-screed jointless concrete floors.",
      benefits: [
        "Laser-screed FM2 high-tolerance industrial flooring for forklift traffic",
        "Clear internal heights up to 12 meters with automated loading dock levellers",
        "Thermal insulated metal roofing with daylight polycarbonate panels",
        "Rapid PEB erection reducing on-site construction timelines by 40%",
      ],
      suitable: "Logistics companies, manufacturing units, distribution hubs",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-navy-900 text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold text-construction-400 uppercase tracking-wider bg-navy-800 px-3 py-1 rounded-full border border-navy-700">
              Our Capabilities & Disciplines
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              Turnkey Construction Services
            </h1>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              We provide full turnkey execution across residential estates, commercial office complexes, and industrial pre-engineered facilities.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href="#residential"
                className="px-4 py-2 rounded-lg text-xs font-semibold bg-navy-800 hover:bg-navy-750 border border-navy-700 transition"
              >
                Residential Construction ↓
              </a>
              <a
                href="#commercial"
                className="px-4 py-2 rounded-lg text-xs font-semibold bg-navy-800 hover:bg-navy-750 border border-navy-700 transition"
              >
                Commercial Infrastructure ↓
              </a>
              <Link
                href="/estimate"
                className="px-4 py-2 rounded-lg text-xs font-semibold bg-construction-500 hover:bg-construction-600 text-white transition flex items-center"
              >
                <Calculator className="w-3.5 h-3.5 mr-1.5" />
                Estimate Project Cost
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Residential Services Section */}
      <section id="residential" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 border-b border-gray-100 pb-6">
          <div className="inline-flex items-center space-x-2 text-xs font-bold text-construction-600 bg-construction-50 px-3 py-1 rounded-full border border-construction-200 mb-2">
            <Home className="w-4 h-4" />
            <span>Residential Division</span>
          </div>
          <h2 className="text-3xl font-extrabold text-navy-900 tracking-tight">
            Residential Construction & Villas
          </h2>
          <p className="text-gray-600 text-sm mt-1 max-w-2xl">
            Custom living spaces built with precision engineering, premium materials, and transparent milestone reporting.
          </p>
        </div>

        <div className="space-y-12">
          {residentialServices.map((svc) => (
            <div
              key={svc.id}
              className="bg-surface rounded-2xl border border-gray-200 overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-0"
            >
              <div className="lg:col-span-5 h-64 lg:h-auto relative bg-navy-900">
                <img
                  src={svc.image}
                  alt={svc.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-navy-900">{svc.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                    {svc.desc}
                  </p>

                  <div className="mt-4">
                    <h4 className="text-xs font-bold text-navy-800 uppercase tracking-wider mb-2">
                      Key Technical Highlights:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {svc.benefits.map((b, bIdx) => (
                        <div key={bIdx} className="flex items-start text-xs text-charcoal-700">
                          <Check className="w-4 h-4 text-emerald-500 mr-1.5 shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-gray-200/60 text-xs text-gray-500">
                    <strong>Suitable For:</strong> {svc.suitable}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Link
                    href={`/contact?service=${encodeURIComponent(svc.title)}`}
                    className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-xs font-bold text-white bg-construction-500 hover:bg-construction-600 transition"
                  >
                    Request Consultation for this Service
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </Link>

                  <Link
                    href="/estimate"
                    className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-xs font-semibold text-navy-800 bg-white border border-gray-200 hover:bg-gray-50 transition"
                  >
                    Calculate Cost Estimate
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Commercial Services Section */}
      <section id="commercial" className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 border-b border-gray-200 pb-6">
            <div className="inline-flex items-center space-x-2 text-xs font-bold text-navy-800 bg-white px-3 py-1 rounded-full border border-gray-200 mb-2">
              <Building2 className="w-4 h-4 text-construction-500" />
              <span>Commercial Division</span>
            </div>
            <h2 className="text-3xl font-extrabold text-navy-900 tracking-tight">
              Commercial & Industrial Infrastructure
            </h2>
            <p className="text-gray-600 text-sm mt-1 max-w-2xl">
              High-traffic retail, corporate headquarters, and heavy-duty pre-engineered industrial warehouses.
            </p>
          </div>

          <div className="space-y-12">
            {commercialServices.map((svc) => (
              <div
                key={svc.id}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-0"
              >
                <div className="lg:col-span-5 h-64 lg:h-auto relative bg-navy-900">
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-navy-900">{svc.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                      {svc.desc}
                    </p>

                    <div className="mt-4">
                      <h4 className="text-xs font-bold text-navy-800 uppercase tracking-wider mb-2">
                        Key Technical Highlights:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {svc.benefits.map((b, bIdx) => (
                          <div key={bIdx} className="flex items-start text-xs text-charcoal-700">
                            <Check className="w-4 h-4 text-emerald-500 mr-1.5 shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-gray-100 text-xs text-gray-500">
                      <strong>Suitable For:</strong> {svc.suitable}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <Link
                      href={`/contact?service=${encodeURIComponent(svc.title)}`}
                      className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-xs font-bold text-white bg-construction-500 hover:bg-construction-600 transition"
                    >
                      Request Commercial Tender / Proposal
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                    </Link>

                    <Link
                      href="/estimate"
                      className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-xs font-semibold text-navy-800 bg-surface border border-gray-200 hover:bg-gray-100 transition"
                    >
                      Online Cost Estimator
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
