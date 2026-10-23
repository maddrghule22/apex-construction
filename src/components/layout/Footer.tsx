import React from "react";
import Link from "next/link";
import {
  HardHat,
  Droplets,
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { generateWhatsAppUrl } from "@/lib/whatsapp/url";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = generateWhatsAppUrl({ type: "GENERAL" });
  const tankerWhatsApp = generateWhatsAppUrl({ type: "TANKER" });

  return (
    <footer className="bg-navy-950 text-gray-300 pt-16 pb-8 border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Invocation Bar */}
        <div className="pb-8 mb-8 border-b border-navy-800 flex flex-wrap items-center justify-between gap-4 text-center sm:text-left">
          <div className="text-construction-400 font-bold text-sm tracking-wide">
            ॥ श्री ॥ ॥ श्रीराम समर्थ ॥ ॥ जय जय रघुवीर समर्थ ॥
          </div>
          <div className="text-xs text-gray-400">
            Registered General Contractors, Builders, Developers & Industrial Water Tanker Suppliers
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-navy-800/80">
          {/* Company Bio */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-11 h-11 rounded-xl bg-navy-900 flex items-center justify-center text-construction-500 border border-navy-700 shadow-sm relative">
                <HardHat className="w-6 h-6 text-construction-500" />
                <Droplets className="w-4 h-4 text-blue-400 absolute bottom-1 right-1" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-base tracking-tight text-white leading-tight">
                  SREE SAMARTH KRUPA
                </span>
                <span className="text-[10px] uppercase text-construction-400 font-bold tracking-wider">
                  ENTERPRISES
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              Leading civil construction company and trusted industrial water tanker supplier. We deliver premium turnkey residential bungalows, commercial buildings, structural development, and reliable 24x7 water tanker logistics.
            </p>

            <div className="pt-2 space-y-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 bg-navy-900 px-3 py-2 rounded-lg border border-navy-800 transition w-full"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Chat on WhatsApp: +91 72764 84671</span>
              </a>

              <a
                href={tankerWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs font-semibold text-blue-400 hover:text-blue-300 bg-navy-900 px-3 py-2 rounded-lg border border-navy-800 transition w-full"
              >
                <Truck className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Book Water Tanker (24x7 Fleet)</span>
              </a>
            </div>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 tracking-wide uppercase">
              Our Core Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
              <li>
                <Link href="/services#residential" className="hover:text-construction-400 transition">
                  Turnkey Bungalows & Villa Construction
                </Link>
              </li>
              <li>
                <Link href="/services#residential" className="hover:text-construction-400 transition">
                  Independent Houses & Row Houses
                </Link>
              </li>
              <li>
                <Link href="/services#commercial" className="hover:text-construction-400 transition">
                  Commercial Complexes & Retail Spaces
                </Link>
              </li>
              <li>
                <Link href="/services#tanker" className="hover:text-blue-400 transition font-medium text-blue-300 flex items-center">
                  <Droplets className="w-3.5 h-3.5 mr-1 text-blue-400" />
                  Construction Site Curing Water Tankers
                </Link>
              </li>
              <li>
                <Link href="/services#tanker" className="hover:text-blue-400 transition font-medium text-blue-300 flex items-center">
                  <Truck className="w-3.5 h-3.5 mr-1 text-blue-400" />
                  Potable & Industrial Bulk Water Tankers
                </Link>
              </li>
              <li>
                <Link href="/services#materials" className="hover:text-construction-400 transition">
                  Industrial Materials, Sand & Aggregate Supply
                </Link>
              </li>
              <li>
                <Link href="/estimate" className="hover:text-construction-400 transition font-bold text-construction-400 inline-block pt-1">
                  Instant Construction Cost Estimator (₹) →
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 tracking-wide uppercase">
              Company & Projects
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About Founders & Proprietary Leadership
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition">
                  Delivered & Ongoing Projects
                </Link>
              </li>
              <li>
                <Link href="/about#safety" className="hover:text-white transition">
                  Quality Assurance & On-Site Safety
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Request Site Visit & Blueprints Review
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:text-white transition">
                  Owner Management Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Contact Info */}
          <div className="space-y-3.5">
            <h4 className="text-white font-bold text-sm mb-4 tracking-wide uppercase">
              Proprietors & Contact
            </h4>
            
            <div className="p-3 rounded-xl bg-navy-900 border border-navy-800 space-y-1.5">
              <span className="text-[11px] font-bold text-construction-400 block uppercase">
                Senior Proprietor
              </span>
              <p className="text-xs font-bold text-white">ज्ञानेश्वर पवळे (Dnyaneshwar Pawale)</p>
              <a
                href="tel:+919850291262"
                className="text-xs text-gray-300 hover:text-construction-400 flex items-center font-semibold"
              >
                <Phone className="w-3.5 h-3.5 mr-1.5 text-construction-500" />
                +91 98502 91262
              </a>
            </div>

            <div className="p-3 rounded-xl bg-navy-900 border border-navy-800 space-y-1.5">
              <span className="text-[11px] font-bold text-construction-400 block uppercase">
                Managing Partner
              </span>
              <p className="text-xs font-bold text-white">श्रवण पवळे (Shravan Pawale)</p>
              <a
                href="tel:+917276484671"
                className="text-xs text-gray-300 hover:text-construction-400 flex items-center font-semibold"
              >
                <Phone className="w-3.5 h-3.5 mr-1.5 text-construction-500" />
                +91 72764 84671
              </a>
            </div>

            <div className="flex items-center space-x-2 text-xs text-gray-400 pt-1">
              <Mail className="w-3.5 h-3.5 text-construction-500 shrink-0" />
              <a href="mailto:contact@sreesamarthkrupa.com" className="hover:text-white transition">
                contact@sreesamarthkrupa.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p>© {currentYear} Sree Samarth Krupa Enterprises. All rights reserved.</p>
          <p className="flex items-center space-x-2">
            <span>Builders & Developers</span>
            <span>•</span>
            <span>Water Tanker & Industrial Suppliers</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
