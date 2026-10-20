"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  CheckCircle2,
  ShieldCheck,
  AlertCircle,
} from "lucide-react";
import { generateWhatsAppUrl } from "@/lib/whatsapp/url";

function ContactFormContent() {
  const searchParams = useSearchParams();
  const prefillProject = searchParams.get("project") || "";
  const prefillService = searchParams.get("service") || "";

  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("RESIDENTIAL");
  const [approxArea, setApproxArea] = useState("");
  const [budgetRange, setBudgetRange] = useState("");
  const [preferredContact, setPreferredContact] = useState("PHONE");
  const [message, setMessage] = useState(
    prefillProject
      ? `Hello, I am interested in inquiring about the "${prefillProject}" project design and specifications.`
      : prefillService
      ? `Hello, I would like to schedule a consultation regarding your "${prefillService}" services.`
      : ""
  );
  const [honeypot, setHoneypot] = useState("");

  const [loading, setLoading] = useState(false);
  const [successResponse, setSuccessResponse] = useState<any>(null);
  const [errorMessage, setErrorMessage] = useState("");

  const whatsappUrl = generateWhatsAppUrl({
    type: "GENERAL",
    projectCategory: category,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customerName,
          phone,
          email,
          location,
          category,
          approxArea: approxArea ? Number(approxArea) : undefined,
          budgetRange: budgetRange || undefined,
          message: `${message}${preferredContact ? ` (Preferred Contact: ${preferredContact})` : ""}`,
          source: "WEBSITE_FORM",
          websiteUrlHoneypot: honeypot,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to submit enquiry.");
      }

      setSuccessResponse(data);
    } catch (err: any) {
      setErrorMessage(err.message || "An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Top Banner */}
      <section className="bg-navy-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold text-construction-400 uppercase tracking-wider bg-navy-800 px-3 py-1 rounded-full border border-navy-700">
              Direct Technical Consultation
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              Connect With Our Engineering Team
            </h1>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Whether you possess finalized architectural blueprints or are evaluating initial plot feasibility, our senior engineers are ready to assist.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content: Info & Form */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Info & Map (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-navy-900 mb-2">Corporate Office & Studio</h2>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Visit our headquarters for blueprint reviews, material sample inspections, and contract discussions.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-4 p-4 rounded-xl bg-surface border border-gray-100">
                <MapPin className="w-5 h-5 text-construction-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-navy-900 uppercase">Office Address</h4>
                  <p className="text-xs sm:text-sm text-charcoal-700 mt-0.5">
                    452 Milestone Boulevard, Commercial District, Suite 500
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-xl bg-surface border border-gray-100">
                <Phone className="w-5 h-5 text-construction-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-navy-900 uppercase">Direct Phone Line</h4>
                  <a
                    href="tel:+15552345678"
                    className="text-xs sm:text-sm font-semibold text-navy-900 hover:text-construction-600 transition"
                  >
                    +1 (555) 234-5678
                  </a>
                  <p className="text-[11px] text-gray-500">Mon - Sat: 8:00 AM - 6:30 PM</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-xl bg-surface border border-gray-100">
                <Mail className="w-5 h-5 text-construction-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-navy-900 uppercase">Electronic Mail</h4>
                  <a
                    href="mailto:contact@apexbuildinfra.com"
                    className="text-xs sm:text-sm text-navy-900 hover:text-construction-600 transition"
                  >
                    contact@apexbuildinfra.com
                  </a>
                  <p className="text-[11px] text-gray-500">Engineering tenders & inquiries</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-xl bg-surface border border-gray-100">
                <Clock className="w-5 h-5 text-construction-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-navy-900 uppercase">Operational Hours</h4>
                  <p className="text-xs sm:text-sm text-charcoal-700">Monday – Saturday: 8:00 AM – 6:30 PM</p>
                  <p className="text-[11px] text-gray-500">Sunday: Closed for site maintenance</p>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-3">
              <div className="flex items-center space-x-2 text-emerald-800 font-bold text-sm">
                <MessageSquare className="w-5 h-5 text-emerald-600" />
                <span>Immediate WhatsApp Channel</span>
              </div>
              <p className="text-xs text-emerald-900/80 leading-relaxed">
                Need a rapid feasibility check or want to send CAD sketches? Connect directly with our on-duty engineer.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition shadow-sm"
              >
                Chat on WhatsApp (+1 555-234-5678)
              </a>
            </div>

            {/* Configured Map Embed Visual Placeholder */}
            <div className="rounded-2xl overflow-hidden border border-gray-200 h-48 bg-gray-100 relative shadow-inner">
              <div
                className="w-full h-full bg-cover bg-center opacity-85"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80')",
                }}
              />
              <div className="absolute inset-0 bg-navy-900/40 flex items-center justify-center p-4">
                <div className="bg-white/95 backdrop-blur-sm px-4 py-2.5 rounded-xl shadow-md text-center">
                  <p className="text-xs font-bold text-navy-900 flex items-center justify-center">
                    <MapPin className="w-3.5 h-3.5 text-construction-500 mr-1" />
                    452 Milestone Boulevard, Commercial District
                  </p>
                  <span className="text-[10px] text-gray-500">Google Maps Verified Office Location</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Server-Validated Enquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border border-gray-200 shadow-md">
            {successResponse ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-navy-900">Enquiry Successfully Received!</h3>
                <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                  Your reference ID is{" "}
                  <strong className="text-navy-900 font-mono">{successResponse.enquiryNumber}</strong>. Your project requirements have been safely stored in our central engineering management database.
                </p>
                <p className="text-xs text-gray-500">
                  Our chief project engineer will review your plot parameters and reach out within 24 hours.
                </p>
                <div className="pt-6 flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition"
                  >
                    <MessageSquare className="w-4 h-4 mr-1.5" />
                    Connect via WhatsApp Now
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setSuccessResponse(null);
                      setMessage("");
                    }}
                    className="px-5 py-2.5 rounded-xl text-xs font-semibold text-charcoal-700 bg-gray-100 hover:bg-gray-200 transition"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-navy-900 tracking-tight">
                    Request a Construction Proposal
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">
                    Fill in your project parameters. Every submission is reviewed directly by our chartered engineering staff.
                  </p>
                </div>

                {errorMessage && (
                  <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center space-x-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Honeypot field (hidden from real users to prevent spam bot submissions) */}
                <input
                  type="text"
                  name="websiteUrlHoneypot"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  className="hidden"
                  aria-hidden="true"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                      Full Name*
                    </label>
                    <input
                      type="text"
                      required
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="e.g. Robert Sterling"
                      className="w-full px-3.5 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-construction-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                      Phone Number*
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-3.5 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-construction-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="robert@example.com"
                      className="w-full px-3.5 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-construction-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                      Project Location / City*
                    </label>
                    <input
                      type="text"
                      required
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="e.g. Metro North Corridor"
                      className="w-full px-3.5 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-construction-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                      Project Category*
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full px-3.5 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-construction-500 bg-white"
                    >
                      <option value="RESIDENTIAL">Residential (Villas & Houses)</option>
                      <option value="COMMERCIAL">Commercial (Offices & Showrooms)</option>
                      <option value="INDUSTRIAL">Industrial (Warehouses & PEB)</option>
                      <option value="RENOVATION">Structural Renovation & Remodeling</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                      Approximate Built-up Area (Sq.Ft)
                    </label>
                    <input
                      type="number"
                      min={50}
                      step={50}
                      value={approxArea}
                      onChange={(e) => setApproxArea(e.target.value)}
                      placeholder="e.g. 3500"
                      className="w-full px-3.5 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-construction-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                      Estimated Budget Range (Optional)
                    </label>
                    <select
                      value={budgetRange}
                      onChange={(e) => setBudgetRange(e.target.value)}
                      className="w-full px-3.5 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-construction-500 bg-white"
                    >
                      <option value="">Select an approximate range</option>
                      <option value="Under $500,000">Under $500,000</option>
                      <option value="$500,000 - $1,500,000">$500,000 - $1,500,000</option>
                      <option value="$1,500,000 - $3,000,000">$1,500,000 - $3,000,000</option>
                      <option value="$3,000,000 - $10,000,000">$3,000,000 - $10,000,000</option>
                      <option value="$10,000,000+">$10,000,000+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                      Preferred Contact Channel
                    </label>
                    <select
                      value={preferredContact}
                      onChange={(e) => setPreferredContact(e.target.value)}
                      className="w-full px-3.5 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-construction-500 bg-white"
                    >
                      <option value="PHONE">Phone Call</option>
                      <option value="WHATSAPP">WhatsApp Message</option>
                      <option value="EMAIL">Email</option>
                      <option value="OFFICE_VISIT">Office Consultation Visit</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                    Project Scope & Requirements*
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your plot size, number of planned floors, target start date, or any drawings you already possess..."
                    className="w-full px-3.5 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-construction-500"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center space-x-2 py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-construction-500 hover:bg-construction-600 transition shadow-md active:scale-98 disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{loading ? "Transmitting Requirements..." : "Submit Enquiry to Engineering Team"}</span>
                  </button>
                </div>

                <p className="text-[11px] text-gray-400 text-center">
                  Your information is kept strictly confidential and used solely for estimating and consulting on your construction project.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="py-20 text-center text-gray-400 text-xs">Loading contact information...</div>}>
      <ContactFormContent />
    </Suspense>
  );
}
