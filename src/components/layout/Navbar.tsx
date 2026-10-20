"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HardHat, Menu, X, Phone, Calculator, ChevronRight } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Cost Estimator", href: "/estimate", highlight: true },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all">
      {/* Top micro-bar */}
      <div className="bg-navy-800 text-gray-300 text-xs py-2 px-4 border-b border-navy-700 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center text-gray-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 mr-2 animate-pulse"></span>
              Licensed & Insured General Contractors
            </span>
            <span className="text-gray-400">|</span>
            <span>Residential & Commercial Projects</span>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="tel:+15552345678"
              className="flex items-center text-gray-300 hover:text-construction-400 transition"
            >
              <Phone className="w-3.5 h-3.5 mr-1 text-construction-500" />
              +1 (555) 234-5678
            </a>
            <span className="text-gray-500">|</span>
            <Link
              href="/login"
              className="text-gray-300 hover:text-white transition font-medium"
            >
              Owner Portal
            </Link>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-11 h-11 rounded-lg bg-navy-800 flex items-center justify-center text-construction-500 shadow-sm group-hover:bg-navy-900 transition">
              <HardHat className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-tight text-navy-800">
                APEX <span className="text-construction-500">BUILD</span>
              </span>
              <span className="text-[10px] tracking-wider uppercase text-gray-500 font-semibold">
                Infrastructure & Construction
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              if (link.highlight) {
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center px-3.5 py-2 rounded-md text-sm font-semibold bg-construction-50 text-construction-700 hover:bg-construction-100 transition border border-construction-200"
                  >
                    <Calculator className="w-4 h-4 mr-1.5 text-construction-600" />
                    {link.label}
                  </Link>
                );
              }
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition ${
                    active
                      ? "text-construction-600 font-semibold"
                      : "text-charcoal-600 hover:text-navy-800 hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action Button */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              href="/contact"
              className="inline-flex items-center px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-construction-500 hover:bg-construction-600 shadow-sm transition active:scale-95"
            >
              Get a Free Consultation
              <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          {/* Mobile hamburger menu toggle */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-charcoal-600 hover:text-navy-800 hover:bg-gray-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 pt-2 pb-6 space-y-2 shadow-lg animate-fadeIn">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2.5 rounded-md text-base font-medium transition ${
                isActive(link.href)
                  ? "bg-navy-50 text-navy-800 font-semibold"
                  : "text-charcoal-700 hover:bg-gray-50"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-gray-100 flex flex-col space-y-2">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-lg font-semibold text-white bg-construction-500 hover:bg-construction-600 transition"
            >
              Get a Free Consultation
            </Link>
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2 text-sm text-gray-500 hover:text-navy-800"
            >
              Owner Portal Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
