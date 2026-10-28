import React from "react";
import Link from "next/link";
import {
  Home,
  Building2,
  Wrench,
  Layers,
  ShieldCheck,
  Check,
  ArrowRight,
  Phone,
  MessageSquare,
  Calendar,
} from "lucide-react";
import { generateWhatsAppUrl } from "@/lib/whatsapp/url";

export const metadata = {
  title: "Turnkey Construction Services | Sree Samarth Krupa Enterprises",
  description:
    "Explore our civil construction services: turnkey residential bungalows, modern villas, independent row houses, commercial complexes, and structural engineering in Maharashtra.",
};

export default function ServicesPage() {
  const shravanWhatsApp = generateWhatsAppUrl({
    phoneNumber: "917276484671",
    type: "GENERAL",
  });
  const dnyaneshwarWhatsApp = generateWhatsAppUrl({
    phoneNumber: "919850291262",
    type: "GENERAL",
  });

  const residentialServices = [
    {
      id: "villas",
      title: "Custom Luxury Villas & Bungalows",
      desc: "Turnkey architectural construction tailored to private plots. We manage structural soil investigation, isolated foundation footings, seismic-resistant RCC framing, double-height ceilings, and premium interior finishing.",
      benefits: [
        "End-to-end turnkey delivery from foundation to final paint & electrification",
        "Seismic-resistant RCC frame with certified Fe-550D TMT reinforcement",
        "Dedicated weekly on-site oversight by proprietors",
        "Full plumbing, concealed wiring, and waterproof slab casting",
      ],
      suitable: "Private plot owners, bungalows, row houses, duplex villas",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "independent-homes",
      title: "Individual Independent Houses & Row Houses",
      desc: "Designed for families seeking maximum floor efficiency and structural durability. Complete civil masonry, termite-proof foundation, and weatherproof exterior treatments.",
      benefits: [
        "Strict adherence to municipal setback norms and local building codes",
        "High-strength Damp Proof Course (DPC) and waterproofing barrier",
        "Concealed copper electrical circuits with circuit breakers",
        "Durable, cost-effective Indian construction market rates",
      ],
      suitable: "Independent plot owners building G+1 or G+2 residential houses",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const commercialServices = [
    {
      id: "commercial-complexes",
      title: "Commercial Complexes & Retail Showrooms",
      desc: "Spacious column-free commercial architecture engineered for high footfall, retail shopfronts, and multi-tenant corporate offices.",
      benefits: [
        "Heavy-duty load-bearing structural design with reinforced beams",
        "Provision for wide glass display facades and roll-up shutters",
        "Centralized electrical panel design and fire safety provisions",
        "Punctual commercial handover to minimize rental vacancy",
      ],
      suitable: "Commercial plot owners, retail showroom developers, corporate offices",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "industrial-sheds",
      title: "Industrial PEB Warehouses & Sheds",
      desc: "Pre-engineered industrial steel buildings, heavy laser-screed concrete flooring, loading bays, and administrative annexes.",
      benefits: [
        "Heavy-load floor casting designed to withstand fork-truck movements",
        "Fast-track structural steel assembly and weather-tight roofing",
        "Integrated stormwater channels, rainwater sumps, and boundary walls",
        "Approved industrial fire hydrant and ventilation clearances",
      ],
      suitable: "Logistics companies, manufacturing units, industrial park plots",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const civilEngineeringServices = [
    {
      id: "structural-casting",
      title: "RCC Structural Framing & Civil Works",
      desc: "Engineered foundation footings, plinth beams, column casting, and slab casting using grade 53 OPC cement and certified Fe-550D TMT steel.",
      benefits: [
        "Strict cube-strength testing for every concrete pour",
        "Proper cover blocks and shuttering alignment inspection",
        "Adequate wet curing protocols for crack-free monolithic strength",
        "Certified chartered structural engineer approvals",
      ],
      suitable: "Plot owners seeking structural civil contractors",
      image:
        "https://images.unsplash.com/photo-1541888946425-d0fbb1861564?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "renovation",
      title: "Building Renovation & Structural Strengthening",
      desc: "Vertical floor additions, structural beam underpinning, room remodeling, terrace waterproofing, and modern facade rejuvenation.",
      benefits: [
        "Load-bearing assessment before adding additional floors",
        "Multi-layer polymer membrane waterproofing with 5-year guarantee",
        "Clean demolition and debris disposal coordination",
        "Modernization of concealed plumbing and electrical conduits",
      ],
      suitable: "Existing bungalow, row house, or commercial building owners",
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Header Banner */}
      <section className="bg-navy-950 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl space-y-3 text-left">
            <span className="text-xs font-bold text-construction-400 uppercase tracking-wider bg-navy-900 px-3 py-1 rounded-full border border-navy-800">
              Turnkey Civil Construction &amp; Contracting
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Our Construction Services
            </h1>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Comprehensive turnkey building development and structural civil contracting. Built with certified materials, transparent itemized BOQ contracts, and dedicated proprietor supervision.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 1: RESIDENTIAL CONSTRUCTION */}
      <section id="residential" className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 space-y-3 text-left">
          <div className="inline-flex items-center space-x-2 text-xs font-bold text-construction-700 bg-construction-50 px-3 py-1 rounded-full border border-construction-200">
            <Home className="w-4 h-4 text-construction-600" />
            <span>Turnkey Residential Division</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950">
            Bungalows, Villas &amp; Independent Houses
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            From foundation excavation to architectural handover, we build private homes with unyielding structural integrity, quality materials, and transparent billing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {residentialServices.map((svc) => (
            <div
              key={svc.id}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-left"
            >
              <div>
                <div className="h-56 w-full bg-navy-900 relative">
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-navy-900/90 text-white text-[11px] font-bold px-3 py-1 rounded-md shadow-md uppercase tracking-wide">
                    Turnkey Contract
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-4">
                  <h3 className="text-xl font-bold text-navy-950">{svc.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{svc.desc}</p>

                  <div>
                    <h4 className="text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">
                      Execution Highlights:
                    </h4>
                    <ul className="space-y-2">
                      {svc.benefits.map((b, i) => (
                        <li key={i} className="flex items-start text-xs text-charcoal-700">
                          <Check className="w-4 h-4 text-emerald-600 mr-2 shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-surface border-t border-gray-100 flex flex-wrap items-center justify-between gap-3">
                <Link
                  href={`/contact?service=${encodeURIComponent(svc.title)}`}
                  className="inline-flex items-center text-xs font-bold text-construction-700 hover:text-construction-800"
                >
                  <ArrowRight className="w-4 h-4 mr-1 text-construction-600" />
                  Get Service Quote →
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center text-xs font-bold text-white bg-navy-900 px-3.5 py-2 rounded-xl hover:bg-navy-800 transition"
                >
                  Request Consultation
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2: COMMERCIAL CONSTRUCTION */}
      <section id="commercial" className="py-16 sm:py-20 bg-surface border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 space-y-3 text-left">
            <div className="inline-flex items-center space-x-2 text-xs font-bold text-navy-800 bg-white px-3 py-1 rounded-full border border-gray-200">
              <Building2 className="w-4 h-4 text-construction-600" />
              <span>Commercial Division</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950">
              Commercial Complexes &amp; Showrooms
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Engineered for high footfall, retail shopfronts, and multi-tenant corporate offices with punctual commercial handover.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {commercialServices.map((svc) => (
              <div
                key={svc.id}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-left"
              >
                <div>
                  <div className="h-56 w-full bg-navy-900 relative">
                    <img
                      src={svc.image}
                      alt={svc.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 sm:p-8 space-y-4">
                    <h3 className="text-xl font-bold text-navy-950">{svc.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{svc.desc}</p>
                    <ul className="space-y-2">
                      {svc.benefits.map((b, i) => (
                        <li key={i} className="flex items-start text-xs text-charcoal-700">
                          <Check className="w-4 h-4 text-emerald-600 mr-2 shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-6 bg-surface border-t border-gray-100 flex items-center justify-between">
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-xs font-bold text-navy-950 hover:text-construction-600"
                  >
                    Discuss Commercial Requirements →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: CIVIL & STRUCTURAL ENGINEERING */}
      <section id="engineering" className="py-16 sm:py-20 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 space-y-3 text-left">
            <div className="inline-flex items-center space-x-2 text-xs font-bold text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              <Wrench className="w-4 h-4 text-amber-600" />
              <span>Civil &amp; Structural Engineering</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950">
              RCC Structural Works, Renovation &amp; Waterproofing
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Precision structural casting, building extensions, floor additions, and guaranteed terrace/basement waterproofing systems.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {civilEngineeringServices.map((svc) => (
              <div
                key={svc.id}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-left"
              >
                <div>
                  <div className="h-56 w-full bg-navy-900 relative">
                    <img
                      src={svc.image}
                      alt={svc.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 sm:p-8 space-y-4">
                    <h3 className="text-xl font-bold text-navy-950">{svc.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{svc.desc}</p>
                    <ul className="space-y-2">
                      {svc.benefits.map((b, i) => (
                        <li key={i} className="flex items-start text-xs text-charcoal-700">
                          <Check className="w-4 h-4 text-emerald-600 mr-2 shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-6 bg-surface border-t border-gray-100 flex items-center justify-between">
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-xs font-bold text-navy-950 hover:text-construction-600"
                  >
                    Inquire Structural Engineering →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
