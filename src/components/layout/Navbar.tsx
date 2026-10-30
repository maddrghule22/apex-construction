"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Phone,
  ChevronRight,
} from "lucide-react";
import { generateWhatsAppUrl } from "@/lib/whatsapp/url";
import BrandLogo from "./BrandLogo";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const whatsappUrl = generateWhatsAppUrl({ type: "GENERAL" });

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-2xs transition-all">
      {/* Top Contact Micro-Bar */}
      <div className="bg-navy-950 text-gray-300 text-xs py-1.5 sm:py-2 px-3 sm:px-4 border-b border-navy-900">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-1.5 sm:gap-2">
          {/* Company Identification */}
          <div className="flex items-center space-x-1.5 sm:space-x-2 text-construction-400 font-bold text-[10px] sm:text-xs tracking-wide">
            <span>Shree Samarth Krupa Enterprises</span>
            <span className="text-gray-600 hidden md:inline">•</span>
            <span className="text-gray-300 font-normal hidden md:inline">
              General Contractors &amp; Builders
            </span>
          </div>

          {/* Direct Proprietor Contact */}
          <div className="flex items-center space-x-2 sm:space-x-3 text-[10.5px] sm:text-xs">
            <div className="flex items-center space-x-1">
              <span className="text-gray-400 hidden sm:inline">Owner Direct:</span>
              <a
                href="tel:+919850291262"
                className="font-bold text-white hover:text-construction-400 transition flex items-center whitespace-nowrap"
              >
                <Phone className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1 text-construction-500" />
                +91 98502 91262
              </a>
            </div>
            <span className="text-gray-700 hidden lg:inline">|</span>
            <Link
              href="/login"
              className="text-gray-400 hover:text-white transition font-medium hidden lg:inline text-[11px]"
            >
              Owner Portal
            </Link>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20 gap-2">
          {/* Brand Logo Component */}
          <div className="min-w-0 flex-1 sm:flex-initial">
            <BrandLogo />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition flex items-center whitespace-nowrap ${
                    active
                      ? "text-construction-600 bg-construction-50 font-bold"
                      : "text-gray-700 hover:text-navy-950 hover:bg-gray-100"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Quick Action Buttons */}
          <div className="hidden sm:flex items-center space-x-2 shrink-0">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm transition-all duration-200 active:scale-95 gap-1.5"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-navy-950 hover:bg-navy-900 border border-navy-800 shadow-sm transition-all duration-200 active:scale-95 gap-1"
            >
              <span>Contact Us</span>
              <ChevronRight className="w-3.5 h-3.5 text-construction-400" />
            </Link>
          </div>

          {/* Mobile hamburger menu toggle */}
          <div className="flex items-center lg:hidden shrink-0">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 sm:p-2.5 rounded-xl text-gray-700 hover:text-navy-950 hover:bg-gray-100 transition cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drop-down drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[calc(theme(spacing.16)+37px)] sm:top-[calc(theme(spacing.20)+41px)] bottom-0 bg-white/98 backdrop-blur-md border-b border-gray-200 px-4 pt-4 pb-8 space-y-4 shadow-2xl overflow-y-auto z-50 animate-fadeIn">
          <div className="pb-3 border-b border-gray-100 space-y-2">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
              Owner Direct Assistance
            </p>
            <div className="flex justify-between items-center text-xs font-bold">
              <span className="text-gray-700">Dnyaneshwar Pawale (Owner):</span>
              <a href="tel:+919850291262" className="text-construction-600 font-bold p-1">
                +91 98502 91262
              </a>
            </div>
          </div>

          <nav className="flex flex-col space-y-1.5 pt-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-xl text-sm font-bold flex items-center justify-between ${
                  isActive(link.href)
                    ? "bg-navy-950 text-white shadow-sm"
                    : "bg-gray-50 text-gray-800 hover:bg-gray-100"
                }`}
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 opacity-50" />
              </Link>
            ))}
          </nav>

          <div className="pt-2 flex flex-col gap-2.5">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-3.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition shadow-sm flex items-center justify-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3.5 rounded-xl text-xs font-bold text-white bg-navy-950 hover:bg-navy-900 border border-navy-800 transition shadow-sm"
            >
              Contact Us Directly
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
