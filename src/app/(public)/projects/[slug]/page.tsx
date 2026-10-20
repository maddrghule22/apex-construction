import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPublicProjectBySlug } from "@/server/repositories/projectRepository";
import {
  MapPin,
  Calendar,
  Layers,
  CheckCircle2,
  Clock,
  ArrowLeft,
  MessageSquare,
  ShieldCheck,
  Building,
  Check,
} from "lucide-react";
import { generateWhatsAppUrl } from "@/lib/whatsapp/url";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = await getPublicProjectBySlug(params.slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | Construction Case Study`,
    description: project.description.slice(0, 160),
  };
}

export default async function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = await getPublicProjectBySlug(params.slug);
  if (!project) notFound();

  const isOngoing = project.status === "ONGOING";
  const whatsappUrl = generateWhatsAppUrl({
    type: "PROJECT",
    projectTitle: project.title,
    projectCategory: project.category,
  });

  return (
    <div className="bg-white min-h-screen">
      {/* Top Breadcrumb & Hero */}
      <section className="bg-navy-900 text-white pt-10 pb-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/projects"
            className="inline-flex items-center text-xs font-semibold text-gray-400 hover:text-white transition mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-1.5" /> Back to Project Portfolio
          </Link>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <div className="flex items-center space-x-3">
                <span className="px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-navy-800 text-construction-400 border border-navy-700">
                  {project.category}
                </span>
                <span
                  className={`px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider flex items-center ${
                    isOngoing ? "bg-amber-500 text-white" : "bg-emerald-600 text-white"
                  }`}
                >
                  {isOngoing ? (
                    <>
                      <Clock className="w-3.5 h-3.5 mr-1" /> Ongoing Construction
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 mr-1" /> Completed Landmark
                    </>
                  )}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
                {project.title}
              </h1>

              <div className="flex items-center text-sm text-gray-300">
                <MapPin className="w-4 h-4 mr-1.5 text-construction-500" />
                <span>{project.location}</span>
              </div>
            </div>

            {/* Quick Action Button */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-3 rounded-xl text-xs font-bold bg-emerald-500 hover:bg-emerald-600 text-white transition shadow-md"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Inquire on WhatsApp
              </a>
              <Link
                href={`/contact?project=${encodeURIComponent(project.title)}`}
                className="inline-flex items-center justify-center px-5 py-3 rounded-xl text-xs font-bold bg-construction-500 hover:bg-construction-600 text-white transition shadow-md"
              >
                Request Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Cover & Details */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Visuals & Narrative (8 cols) */}
          <div className="lg:col-span-8 space-y-10">
            {/* Main Featured Photo */}
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-navy-900 h-[400px] sm:h-[480px]">
              <img
                src={
                  project.coverImage ||
                  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                }
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Project Overview Narrative */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-navy-900">Project Overview & Scope</h2>
              <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Engineering Highlights */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-navy-900">Key Construction Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Seismic Zone Compliant RCC Superstructure with Fe-550D TMT Reinforcement",
                  "Ultrasonic & Compressive Cube Strength Tested Concrete (M-25/M-30 Design Mix)",
                  "Multi-Layer Polymer-Modified Terrace & Sunken Area Waterproofing",
                  "Concealed Fire-Retardant Copper Conduits with Independent Circuit Breakers",
                  "Underground Rainwater Harvesting & Dual Sump Tank Infrastructure",
                  "Energy Efficient Double Glazed Windows for Acoustic & Thermal Insulation",
                ].map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-surface border border-gray-100 flex items-start text-xs text-charcoal-800"
                  >
                    <Check className="w-4 h-4 text-emerald-500 mr-2 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Milestones / Execution Timeline (if public) */}
            {project.milestones && project.milestones.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-navy-900">Construction Milestones & Progress</h3>
                <div className="space-y-3">
                  {project.milestones.map((m: any, idx: number) => {
                    const isCompleted = m.status === "COMPLETED";
                    const isInProgress = m.status === "IN_PROGRESS";
                    return (
                      <div
                        key={m.id || idx}
                        className="p-4 rounded-xl border border-gray-200 bg-white shadow-xs flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3"
                      >
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2">
                            <span className="w-5 h-5 rounded-full bg-navy-100 text-navy-800 text-[11px] font-bold flex items-center justify-center">
                              {idx + 1}
                            </span>
                            <span className="font-bold text-sm text-navy-900">{m.title}</span>
                          </div>
                          {m.description && (
                            <p className="text-xs text-gray-500 pl-7">{m.description}</p>
                          )}
                        </div>

                        <div className="flex items-center space-x-3 w-full sm:w-auto justify-between sm:justify-end">
                          <span
                            className={`px-2.5 py-1 rounded text-[11px] font-semibold ${
                              isCompleted
                                ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                                : isInProgress
                                ? "bg-amber-50 text-amber-700 border border-amber-200"
                                : "bg-gray-100 text-gray-600"
                            }`}
                          >
                            {isCompleted ? "Completed (100%)" : isInProgress ? `In Progress (${m.progressPercent || 50}%)` : "Scheduled"}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Key Specifications & CTA (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-surface rounded-2xl p-6 border border-gray-200 shadow-sm space-y-6">
              <h3 className="text-base font-bold text-navy-900 uppercase tracking-wider pb-3 border-b border-gray-200">
                Technical Specifications
              </h3>

              <div className="space-y-4 text-xs">
                <div className="flex justify-between items-center py-1 border-b border-gray-100">
                  <span className="text-gray-500 font-medium">PROJECT NUMBER</span>
                  <span className="font-bold text-navy-900">{project.projectNumber}</span>
                </div>

                <div className="flex justify-between items-center py-1 border-b border-gray-100">
                  <span className="text-gray-500 font-medium">PROJECT CATEGORY</span>
                  <span className="font-bold text-navy-900">{project.category}</span>
                </div>

                <div className="flex justify-between items-center py-1 border-b border-gray-100">
                  <span className="text-gray-500 font-medium">BUILT-UP AREA</span>
                  <span className="font-bold text-navy-900">
                    {project.builtUpArea ? `${Number(project.builtUpArea).toLocaleString()} sq.ft` : "N/A"}
                  </span>
                </div>

                <div className="flex justify-between items-center py-1 border-b border-gray-100">
                  <span className="text-gray-500 font-medium">PLOT AREA</span>
                  <span className="font-bold text-navy-900">
                    {project.plotArea ? `${Number(project.plotArea).toLocaleString()} sq.ft` : "N/A"}
                  </span>
                </div>

                <div className="flex justify-between items-center py-1 border-b border-gray-100">
                  <span className="text-gray-500 font-medium">NUMBER OF FLOORS</span>
                  <span className="font-bold text-navy-900">{project.floors || 1} Levels</span>
                </div>

                <div className="flex justify-between items-center py-1 border-b border-gray-100">
                  <span className="text-gray-500 font-medium">START DATE</span>
                  <span className="font-bold text-navy-900">
                    {project.startDate ? new Date(project.startDate).toLocaleDateString() : "Initiated"}
                  </span>
                </div>

                <div className="flex justify-between items-center py-1">
                  <span className="text-gray-500 font-medium">COMPLETION STATUS</span>
                  <span className="font-bold text-navy-900">
                    {project.actualEndDate
                      ? `Delivered ${new Date(project.actualEndDate).toLocaleDateString()}`
                      : project.expectedEndDate
                      ? `Target ${new Date(project.expectedEndDate).toLocaleDateString()}`
                      : "On Schedule"}
                  </span>
                </div>
              </div>

              {/* Consultation Card */}
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <h4 className="text-xs font-bold text-navy-900 uppercase tracking-wide">
                  Planning a Similar Construction?
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Our chief project architect and structural team can review your plot dimensions and draft a preliminary BOQ.
                </p>

                <Link
                  href={`/contact?project=${encodeURIComponent(project.title)}`}
                  className="w-full inline-flex items-center justify-center py-3 px-4 rounded-xl text-xs font-bold text-white bg-construction-500 hover:bg-construction-600 transition shadow-sm"
                >
                  Consult on this Project Type
                </Link>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center py-2.5 px-4 rounded-xl text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition"
                >
                  <MessageSquare className="w-3.5 h-3.5 mr-1.5" />
                  Ask Question on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
