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
    <Link href="/" className={`inline-flex items-center gap-2.5 sm:gap-3 group min-w-0 max-w-full ${className}`}>
      {/* Authentic High-Resolution SVG Architectural Emblem */}
      <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-13 md:h-13 shrink-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-slate-900 via-navy-900 to-slate-950 p-1.5 sm:p-2 shadow-md sm:shadow-lg shadow-navy-950/20 border border-slate-700/60 group-hover:scale-105 group-hover:border-construction-500/80 transition-all duration-300 flex items-center justify-center">
        {/* Ambient Glow */}
        <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-construction-500/10 via-transparent to-blue-500/15 opacity-0 group-hover:opacity-100 transition-opacity" />

        <svg
          viewBox="0 0 100 100"
          className="w-full h-full text-white"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Stylized Monogram on top left */}
          <text
            x="12"
            y="32"
            fill="#EF4444"
            fontSize="18"
            fontWeight="900"
            fontFamily="sans-serif"
            letterSpacing="0.5"
          >
            SK
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
      <div className="flex flex-col text-left min-w-0">
        <span
          className={`font-black text-xs sm:text-base lg:text-lg tracking-tight leading-tight truncate ${
            isLight ? "text-white" : "text-slate-900 group-hover:text-construction-600"
          } transition-colors`}
        >
          SHREE SAMARTH KRUPA
        </span>

        {showTagline && (
          <div className="mt-0.5 flex items-center gap-1 sm:gap-1.5 text-[8px] sm:text-[9.5px] font-extrabold uppercase tracking-wider sm:tracking-widest flex-wrap leading-tight">
            <span className="text-construction-600 font-black">ENTERPRISES</span>
            <span className="text-slate-300 hidden xs:inline">•</span>
            <span className={`${isLight ? "text-slate-300" : "text-slate-600"} font-bold hidden xs:inline`}>
              BUILDERS &amp; DEVELOPERS
            </span>
          </div>
        )}
      </div>
    </Link>
  );
}
