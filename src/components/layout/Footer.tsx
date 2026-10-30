import React from "react";
import Link from "next/link";
import {
  HardHat,
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  ShieldCheck,
  Building2,
} from "lucide-react";
import { generateWhatsAppUrl } from "@/lib/whatsapp/url";
import BrandLogo from "./BrandLogo";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = generateWhatsAppUrl({ type: "GENERAL" });

  return (
    <footer className="bg-navy-950 text-gray-300 pt-16 pb-8 border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-navy-800/80">
          {/* Company Bio */}
          <div className="space-y-4">
            <BrandLogo variant="light" />

            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              Premier civil construction firm delivering turnkey residential bungalows, modern villas, independent row houses, and commercial complexes with 15+ years of engineering rigor and dedicated structural craftsmanship.
            </p>

            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 bg-navy-900 px-3.5 py-2.5 rounded-xl border border-navy-800 transition w-full justify-center"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Chat with Us on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 tracking-wide uppercase">
              Our Core Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-400">
              <li>
                <Link href="/services#residential" className="hover:text-construction-400 transition">
                  Turnkey Bungalows &amp; Villa Construction
                </Link>
              </li>
              <li>
                <Link href="/services#residential" className="hover:text-construction-400 transition">
                  Independent Houses &amp; Row Houses
                </Link>
              </li>
              <li>
                <Link href="/services#commercial" className="hover:text-construction-400 transition">
                  Commercial Complexes &amp; Showrooms
                </Link>
              </li>
              <li>
                <Link href="/services#engineering" className="hover:text-construction-400 transition">
                  RCC Structural Framing &amp; Casting
                </Link>
              </li>
              <li>
                <Link href="/services#engineering" className="hover:text-construction-400 transition">
                  Civil Renovation &amp; Floor Additions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-construction-400 transition font-bold text-construction-400 inline-block pt-1">
                  Request Free Site Consultation →
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 tracking-wide uppercase">
              Company &amp; Projects
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-400">
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About Founders &amp; Leadership
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition">
                  Delivered &amp; Ongoing Projects
                </Link>
              </li>
              <li>
                <Link href="/about#safety" className="hover:text-white transition">
                  Quality Assurance &amp; Site Safety
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Request Free Site Consultation
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
              Owner &amp; Direct Contact
            </h4>
            
            <div className="p-3.5 rounded-xl bg-navy-900 border border-navy-800 space-y-2">
              <span className="text-[11px] font-bold text-construction-400 block uppercase tracking-wider">
                Founder &amp; Principal Proprietor
              </span>
              <p className="text-sm font-bold text-white">Dnyaneshwar Pawale</p>
              <a
                href="tel:+919850291262"
                className="text-xs text-construction-400 hover:text-construction-300 flex items-center font-bold"
              >
                <Phone className="w-3.5 h-3.5 mr-1.5 text-construction-500" />
                +91 98502 91262
              </a>
              <p className="text-[11px] text-gray-400">
                Direct on-site quality inspection &amp; architectural execution.
              </p>
            </div>

            <div className="flex items-center space-x-2 text-xs text-gray-400 pt-1">
              <Mail className="w-3.5 h-3.5 text-construction-500 shrink-0" />
              <a href="mailto:contact@shreesamarthkrupa.com" className="hover:text-white transition">
                contact@shreesamarthkrupa.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p>© {currentYear} Shree Samarth Krupa Enterprises. All rights reserved.</p>
          <p className="flex items-center space-x-2">
            <span>Builders &amp; Developers</span>
            <span>•</span>
            <span>Turnkey Civil Construction</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
