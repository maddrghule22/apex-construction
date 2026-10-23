"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  HardHat,
  LayoutDashboard,
  Building,
  Inbox,
  Calculator,
  Receipt,
  CheckSquare,
  BarChart3,
  Settings,
  Shield,
  LogOut,
  Menu,
  X,
  ExternalLink,
} from "lucide-react";

interface DashboardSidebarProps {
  user: {
    userId: string;
    email: string;
    name: string;
    role: string;
  };
}

export default function DashboardSidebar({ user }: DashboardSidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: "Overview", href: "/dashboard", icon: LayoutDashboard },
    { label: "Projects", href: "/dashboard/projects", icon: Building },
    { label: "Enquiries", href: "/dashboard/enquiries", icon: Inbox },
    { label: "Cost Estimates", href: "/dashboard/estimates", icon: Calculator },
    { label: "Expenses & Budget", href: "/dashboard/expenses", icon: Receipt },
    { label: "Project Tracking", href: "/dashboard/tracking", icon: CheckSquare },
    { label: "Business Reports", href: "/dashboard/reports", icon: BarChart3 },
    { label: "Company Settings", href: "/dashboard/settings", icon: Settings },
    { label: "Account & Security", href: "/dashboard/account", icon: Shield },
  ];

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
    router.refresh();
  };

  const isActive = (href: string) => {
    if (href === "/dashboard") return pathname === "/dashboard";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Mobile Bar */}
      <div className="md:hidden bg-navy-900 text-white p-4 flex justify-between items-center sticky top-0 z-40 border-b border-navy-800">
        <Link href="/dashboard" className="flex items-center space-x-2">
          <HardHat className="w-6 h-6 text-construction-500" />
          <span className="font-bold text-base tracking-tight">Samarth Krupa OS</span>
        </Link>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-1.5 rounded-lg text-gray-300 hover:text-white hover:bg-navy-800"
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar Container */}
      <aside
        className={`${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 fixed md:static inset-y-0 left-0 z-50 w-64 bg-navy-900 text-gray-300 flex flex-col justify-between transition-transform duration-200 ease-in-out border-r border-navy-800`}
      >
        <div>
          {/* Header */}
          <div className="p-6 border-b border-navy-800 flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-xl bg-navy-800 flex items-center justify-center text-construction-500 border border-navy-700">
                <HardHat className="w-5 h-5" />
              </div>
              <div>
                <span className="font-extrabold text-xs tracking-tight text-white block">
                  SAMARTH KRUPA
                </span>
                <span className="text-[10px] uppercase font-bold text-construction-400">
                  ENTERPRISES
                </span>
              </div>
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              className="md:hidden text-gray-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Nav Items */}
          <nav className="p-4 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition ${
                    active
                      ? "bg-construction-500 text-white shadow-sm"
                      : "text-gray-300 hover:bg-navy-800 hover:text-white"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${active ? "text-white" : "text-gray-400"}`} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Footer / User Profile & Logout */}
        <div className="p-4 border-t border-navy-800 space-y-3">
          <div className="flex items-center justify-between px-2 text-xs">
            <div className="truncate">
              <p className="font-bold text-white truncate">{user.name}</p>
              <span className="text-[10px] text-construction-400 uppercase font-semibold tracking-wide">
                {user.role}
              </span>
            </div>
            <Link
              href="/"
              target="_blank"
              title="Open Public Website"
              className="text-gray-400 hover:text-white p-1 rounded-md hover:bg-navy-800 transition"
            >
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>

          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center space-x-2 py-2 px-3 rounded-lg text-xs font-semibold text-gray-300 hover:text-white bg-navy-800/80 hover:bg-navy-800 transition"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Backdrop for mobile */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 bg-navy-950/60 backdrop-blur-xs z-40 md:hidden"
        />
      )}
    </>
  );
}
