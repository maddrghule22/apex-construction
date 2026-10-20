import React from "react";
import Link from "next/link";
import { Plus, Bell, ExternalLink, Calculator } from "lucide-react";

interface DashboardHeaderProps {
  user: {
    userId: string;
    email: string;
    name: string;
    role: string;
  };
}

export default function DashboardHeader({ user }: DashboardHeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8 py-3.5 flex justify-between items-center shadow-xs">
      <div className="flex items-center space-x-3">
        <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-navy-50 text-navy-800 border border-navy-100">
          Owner Portal
        </span>
        <span className="text-xs text-gray-400 hidden sm:inline">|</span>
        <span className="text-xs text-gray-500 hidden sm:inline">
          Apex Build & Infrastructure Management System
        </span>
      </div>

      <div className="flex items-center space-x-3">
        <Link
          href="/dashboard/estimates"
          className="hidden sm:inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-construction-700 bg-construction-50 hover:bg-construction-100 border border-construction-200 transition"
        >
          <Calculator className="w-3.5 h-3.5" />
          <span>Rates & Estimates</span>
        </Link>

        <Link
          href="/dashboard/projects"
          className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold text-white bg-navy-800 hover:bg-navy-900 transition shadow-xs"
        >
          <Plus className="w-3.5 h-3.5 text-construction-500" />
          <span>New Project</span>
        </Link>
      </div>
    </header>
  );
}
