"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { HardHat, Lock, Mail, ArrowRight, ShieldCheck, AlertCircle } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Invalid email or password.");
      }

      router.push("/dashboard");
      router.refresh();
    } catch (err: any) {
      setErrorMessage(err.message || "Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-navy-900 flex flex-col justify-center items-center p-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(#1E476C_1px,transparent_1px)] [background-size:24px_24px] opacity-25" />

      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 sm:p-10 relative z-10 border border-gray-100">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-2.5 mb-4 group">
            <div className="w-12 h-12 rounded-xl bg-navy-800 flex items-center justify-center text-construction-500 shadow-md">
              <HardHat className="w-7 h-7" />
            </div>
            <div className="text-left">
              <span className="font-extrabold text-xl tracking-tight text-navy-900 block leading-none">
                APEX <span className="text-construction-500">BUILD</span>
              </span>
              <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">
                Management Portal
              </span>
            </div>
          </Link>
          <h1 className="text-2xl font-bold text-navy-900">Owner & Staff Login</h1>
          <p className="text-xs text-gray-500 mt-1">
            Access secure projects, financial expenses, and customer enquiries.
          </p>
        </div>

        {errorMessage && (
          <div className="mb-6 p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center space-x-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-charcoal-700 mb-1">
              Authorized Email Address
            </label>
            <div className="relative">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="owner@constructioncompany.com"
                className="w-full pl-10 pr-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-construction-500"
              />
              <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-charcoal-700 mb-1">
              Secret Password
            </label>
            <div className="relative">
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full pl-10 pr-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-construction-500"
              />
              <Lock className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl font-bold text-sm text-white bg-construction-500 hover:bg-construction-600 transition shadow-md active:scale-98 disabled:opacity-50"
            >
              <span>{loading ? "Verifying Credentials..." : "Access Owner Dashboard"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>

        <div className="mt-8 pt-6 border-t border-gray-100 text-center">
          <p className="text-[11px] text-gray-400">
            Internal owner and staff access only. Public user registration is disabled for system security.
          </p>
          <div className="mt-3">
            <Link href="/" className="text-xs font-bold text-navy-800 hover:underline">
              ← Return to Public Website
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
