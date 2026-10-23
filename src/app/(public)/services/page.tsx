import React from "react";
import Link from "next/link";
import {
  Home,
  Building2,
  Droplets,
  Truck,
  Layers,
  ShieldCheck,
  Check,
  ArrowRight,
  Calculator,
  Phone,
  MessageSquare,
} from "lucide-react";
import { generateWhatsAppUrl } from "@/lib/whatsapp/url";

export const metadata = {
  title: "Turnkey Construction & Water Tanker Services | Sree Samarth Krupa Enterprises",
  description:
    "Explore our full capabilities: custom residential bungalows, commercial complexes, 24x7 water tanker supply for construction curing & drinking, and industrial materials supply.",
};

export default function ServicesPage() {
  const shravanWhatsApp = generateWhatsAppUrl({
    phoneNumber: "917276484671",
    type: "GENERAL",
  });
  const tankerWhatsApp = generateWhatsAppUrl({
    phoneNumber: "917276484671",
    type: "TANKER",
  });

  const residentialServices = [
    {
      id: "villas",
      title: "Custom Luxury Villas & Bungalows",
      desc: "Turnkey architectural construction tailored to private plots. We manage structural soil investigation, foundation footings, seismic-resistant RCC framing, double-height ceilings, and high-end finishing.",
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
      title: "Commercial Complexes & Showrooms",
      desc: "Spacious column-free commercial architecture engineered for high footfall, retail shopfronts, and multi-tenant offices.",
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
  ];

  const tankerServices = [
    {
      id: "curing-water",
      title: "Construction Site Curing & Concrete Mixing Water Tankers",
      desc: "The strength of concrete relies entirely on timely curing. We provide scheduled, reliable bulk water tankers for RCC slab water ponding, column curing, brick soaking, and plaster hydration.",
      benefits: [
        "Guaranteed on-time morning and evening curing delivery to prevent shrinkage cracks",
        "Clean water free from harmful salts, silt, or acids that corrode rebar",
        "Daily, weekly, and monthly contract arrangements with priority dispatch",
        "Fleet equipped with high-pressure booster pumps and discharge hoses",
      ],
      suitable: "Active construction projects, general contractors, slab casting contractors",
      image:
        "https://images.unsplash.com/photo-1584463699039-44439c288f6f?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "potable-water",
      title: "Potable / Drinking Water & Industrial Bulk Tankers",
      desc: "Hygienic, tested water tankers for industrial manufacturing plants, residential apartment societies, fabrication yards, and institutional facilities.",
      benefits: [
        "Food-grade and stainless steel / epoxy-coated tanker reservoirs",
        "Available in 5,000 to 12,000+ Litre capacity vehicles",
        "24x7 emergency delivery hotline for critical supply shortages",
        "Competitive bulk rates with GST billing and log receipts",
      ],
      suitable: "Housing societies, factories, industrial plants, commercial parks",
      image:
        "https://images.unsplash.com/photo-1541888946425-d0fbb1861564?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Header Banner */}
      <section className="bg-navy-950 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold text-construction-400 uppercase tracking-wider bg-navy-900 px-3 py-1 rounded-full border border-navy-800">
              ॥ श्री ॥ ॥ श्रीराम समर्थ ॥
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Our Comprehensive Services
            </h1>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Explore our dual strengths: Turnkey Building Development & Structural Civil Contracting paired with dedicated 24x7 Water Tanker & Industrial Material Logistics.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 1: WATER TANKER SERVICES (PROMINENT) */}
      <section id="tanker" className="py-20 bg-blue-50/50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 space-y-3">
            <div className="inline-flex items-center space-x-2 text-xs font-bold text-blue-800 bg-blue-100 px-3 py-1 rounded-full border border-blue-200">
              <Droplets className="w-4 h-4 text-blue-600" />
              <span>Dedicated 24x7 Fleet</span>
            </div>
            <h2 className="text-3xl font-extrabold text-navy-950">
              Water Tanker & Industrial Supply Division
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Never let water shortages delay your construction schedule. We manage an independent fleet of water tankers operating around the clock for building sites, concrete curing, and bulk industrial needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {tankerServices.map((svc) => (
              <div
                key={svc.id}
                className="bg-white rounded-2xl border border-blue-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="h-56 w-full bg-navy-900 relative">
                    <img
                      src={svc.image}
                      alt={svc.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-blue-600 text-white text-[11px] font-bold px-3 py-1 rounded-md shadow-md uppercase tracking-wide">
                      24x7 Express Service
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 space-y-4">
                    <h3 className="text-xl font-bold text-navy-950">{svc.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{svc.desc}</p>

                    <div>
                      <h4 className="text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">
                        Key Service Advantages:
                      </h4>
                      <ul className="space-y-2">
                        {svc.benefits.map((b, i) => (
                          <li key={i} className="flex items-start text-xs text-charcoal-700">
                            <Check className="w-4 h-4 text-blue-600 mr-2 shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-surface border-t border-gray-100 flex items-center justify-between">
                  <a
                    href={tankerWhatsApp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-bold text-blue-700 hover:text-blue-900"
                  >
                    <Truck className="w-4 h-4 mr-1 text-blue-600" />
                    Book Tanker on WhatsApp →
                  </a>
                  <a
                    href="tel:+917276484671"
                    className="inline-flex items-center text-xs font-bold text-navy-900 bg-white px-3 py-1.5 rounded-lg border border-gray-200 hover:bg-gray-50"
                  >
                    <Phone className="w-3.5 h-3.5 mr-1 text-construction-500" />
                    Call 72764 84671
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: RESIDENTIAL CONSTRUCTION */}
      <section id="residential" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-bold text-construction-700 bg-construction-50 px-3 py-1 rounded-full border border-construction-200">
            <Home className="w-4 h-4 text-construction-600" />
            <span>Turnkey Residential Division</span>
          </div>
          <h2 className="text-3xl font-extrabold text-navy-950">
            Bungalows, Villas & Residential Construction
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            From foundation excavation to architectural handover, we build private homes with unyielding structural integrity and transparent material billing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {residentialServices.map((svc) => (
            <div
              key={svc.id}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
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

              <div className="p-6 bg-surface border-t border-gray-100 flex items-center justify-between">
                <Link
                  href="/estimate"
                  className="inline-flex items-center text-xs font-bold text-construction-700 hover:text-construction-800"
                >
                  <Calculator className="w-4 h-4 mr-1 text-construction-600" />
                  Calculate Construction Cost (₹) →
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center text-xs font-bold text-white bg-navy-900 px-3 py-1.5 rounded-lg hover:bg-navy-800"
                >
                  Request Consultation
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: COMMERCIAL & INDUSTRIAL MATERIAL SUPPLY */}
      <section id="commercial" className="py-20 bg-surface border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 space-y-3">
            <div className="inline-flex items-center space-x-2 text-xs font-bold text-navy-800 bg-white px-3 py-1 rounded-full border border-gray-200">
              <Building2 className="w-4 h-4 text-construction-600" />
              <span>Commercial & Industrial</span>
            </div>
            <h2 className="text-3xl font-extrabold text-navy-950">
              Commercial Structures & Building Materials
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              We construct retail showrooms and commercial centers, along with procuring certified aggregates, sand, and steel.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {commercialServices.map((svc) => (
              <div
                key={svc.id}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition flex flex-col justify-between"
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

            {/* Industrial Materials Card */}
            <div
              id="materials"
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition flex flex-col justify-between"
            >
              <div>
                <div className="h-56 w-full bg-navy-900 relative">
                  <img
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
                    alt="Industrial Materials Supply"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-emerald-600 text-white text-[11px] font-bold px-3 py-1 rounded-md shadow-md uppercase tracking-wide">
                    Material Logistics
                  </div>
                </div>
                <div className="p-6 sm:p-8 space-y-4">
                  <h3 className="text-xl font-bold text-navy-950">
                    Industrial Suppliers & Material Logistics
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    Direct bulk supply of building materials and site preparation equipment: river sand, M-sand, crushed metal aggregates, and excavation machinery.
                  </p>
                  <ul className="space-y-2 text-xs text-charcoal-700">
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-emerald-600 mr-2 shrink-0" />
                      Crushed stone aggregate (10mm, 20mm, 40mm) and plaster sand
                    </li>
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-emerald-600 mr-2 shrink-0" />
                      Bulk cement and Fe-550D TMT reinforcement logistics
                    </li>
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-emerald-600 mr-2 shrink-0" />
                      JCB and dumper earthwork coordination for plot leveling
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-6 bg-surface border-t border-gray-100 flex items-center justify-between">
                <a
                  href={shravanWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-bold text-emerald-700 hover:text-emerald-900"
                >
                  <MessageSquare className="w-4 h-4 mr-1 text-emerald-600" />
                  Inquire Material Rates on WhatsApp →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
