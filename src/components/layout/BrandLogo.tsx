"use client";

import React from "react";
import Link from "next/link";

interface BrandLogoProps {
  className?: string;
  variant?: "light" | "dark";
  showTagline?: boolean;
}

export default function BrandLogo({
  className = "",
  variant = "dark",
  showTagline = true,
}: BrandLogoProps) {
  const isLight = variant === "light";

  return (
    <Link href="/" className={`inline-flex items-center gap-3 group ${className}`}>
      {/* Authentic High-Resolution SVG Architectural Emblem */}
      <div className="relative w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-2xl bg-gradient-to-br from-slate-900 via-navy-900 to-slate-950 p-2 shadow-lg shadow-navy-950/20 border border-slate-700/60 group-hover:scale-105 group-hover:border-construction-500/80 transition-all duration-300 flex items-center justify-center">
        {/* Ambient Glow */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-construction-500/10 via-transparent to-blue-500/15 opacity-0 group-hover:opacity-100 transition-opacity" />

        <svg
          viewBox="0 0 100 100"
          className="w-full h-full text-white"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Devanagari Shree Calligraphy Aura on top left */}
          <text
            x="14"
            y="32"
            fill="#EF4444"
            fontSize="22"
            fontWeight="900"
            fontFamily="serif"
          >
            श्री
          </text>

          {/* Arched Modern Bridge Cable */}
          <path
            d="M 12 72 Q 40 38 68 62"
            stroke="#94A3B8"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <path
            d="M 28 64 L 28 72 M 38 56 L 38 72 M 48 53 L 48 72 M 58 57 L 58 72"
            stroke="#64748B"
            strokeWidth="1.8"
          />

          {/* Skyscraper Towers */}
          {/* Tower 1 (Tall center-right) */}
          <path
            d="M 52 72 L 52 24 L 68 14 L 68 72 Z"
            fill="#F8FAFC"
            stroke="#0F172A"
            strokeWidth="2"
          />
          {/* Tower 1 roof spire */}
          <path d="M 60 14 L 60 7" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />

          {/* Tower 2 (Background Left) */}
          <path
            d="M 40 72 L 40 34 L 52 26 L 52 72 Z"
            fill="#CBD5E1"
            stroke="#0F172A"
            strokeWidth="1.8"
          />

          {/* Tower 3 (Right Wing) */}
          <path
            d="M 68 72 L 68 38 L 82 46 L 82 72 Z"
            fill="#94A3B8"
            stroke="#0F172A"
            strokeWidth="1.8"
          />

          {/* Architectural Window Grids */}
          <rect x="56" y="28" width="3" height="4" fill="#0284C7" />
          <rect x="62" y="28" width="3" height="4" fill="#0284C7" />
          <rect x="56" y="36" width="3" height="4" fill="#0284C7" />
          <rect x="62" y="36" width="3" height="4" fill="#0284C7" />
          <rect x="56" y="44" width="3" height="4" fill="#F59E0B" />
          <rect x="62" y="44" width="3" height="4" fill="#F59E0B" />
          <rect x="56" y="52" width="3" height="4" fill="#0284C7" />
          <rect x="62" y="52" width="3" height="4" fill="#0284C7" />

          {/* Ground Foundation Slab with Construction Orange accent */}
          <rect x="8" y="72" width="84" height="6" rx="2" fill="#F97316" />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col text-left">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-[10px] sm:text-xs font-black text-red-600 bg-red-50 px-1.5 py-0.5 rounded border border-red-200 tracking-wider">
            ॥ श्री ॥
          </span>
          <span
            className={`font-black text-base sm:text-lg lg:text-xl tracking-tight leading-none ${
              isLight ? "text-white" : "text-slate-900 group-hover:text-red-700"
            } transition-colors`}
          >
            SREE SAMARTH KRUPA
          </span>
        </div>

        {showTagline && (
          <div className="mt-1 flex items-center gap-1.5 text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest flex-wrap">
            <span className="text-construction-600 font-black">ENTERPRISES</span>
            <span className="text-slate-300">•</span>
            <span className={`${isLight ? "text-slate-300" : "text-slate-700"} font-bold`}>
              BUILDERS &amp; DEVELOPERS
            </span>
          </div>
        )}
      </div>
    </Link>
  );
}
