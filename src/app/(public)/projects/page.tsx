import React from "react";
import Link from "next/link";
import { getPublicProjects } from "@/server/repositories/projectRepository";
import { MapPin, Layers, CheckCircle2, Clock, ArrowRight, Filter } from "lucide-react";

export const metadata = {
  title: "Featured Construction Portfolio | Residential & Commercial",
  description:
    "Explore our portfolio of completed and ongoing turnkey construction projects, including custom villas, commercial complexes, and industrial distribution hubs.",
};

export default async function ProjectsPage({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  const currentCategory = searchParams.category || "ALL";
  const projects = await getPublicProjects(currentCategory);

  const categories = [
    { label: "All Projects", value: "ALL" },
    { label: "Residential", value: "RESIDENTIAL" },
    { label: "Commercial", value: "COMMERCIAL" },
    { label: "Industrial", value: "INDUSTRIAL" },
    { label: "Renovation", value: "RENOVATION" },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Header Banner */}
      <section className="bg-navy-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold text-construction-400 uppercase tracking-wider bg-navy-800 px-3 py-1 rounded-full border border-navy-700">
              Verified Project Portfolio
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              Our Construction Landmarks
            </h1>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Explore our delivered and ongoing residential villas, corporate towers, and industrial facilities. Each project is engineered with high-precision structural standards.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs & Gallery Grid */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-gray-100">
          <div className="flex items-center text-xs font-bold text-gray-500 mr-2">
            <Filter className="w-3.5 h-3.5 mr-1" /> Filter:
          </div>
          {categories.map((cat) => {
            const isSelected = currentCategory === cat.value;
            return (
              <Link
                key={cat.value}
                href={cat.value === "ALL" ? "/projects" : `/projects?category=${cat.value}`}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition ${
                  isSelected
                    ? "bg-navy-800 text-white shadow-sm"
                    : "bg-surface text-charcoal-700 hover:bg-gray-200"
                }`}
              >
                {cat.label}
              </Link>
            );
          })}
        </div>

        {/* Project Cards Grid */}
        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project: any) => {
              const isOngoing = project.status === "ONGOING";
              return (
                <div
                  key={project.id}
                  className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
                >
                  {/* Cover Image */}
                  <div className="relative h-64 w-full bg-navy-900 overflow-hidden">
                    <img
                      src={
                        project.coverImage ||
                        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                      }
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 flex space-x-2">
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-navy-900/85 text-white backdrop-blur-xs">
                        {project.category}
                      </span>
                      <span
                        className={`px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider flex items-center ${
                          isOngoing ? "bg-amber-500 text-white" : "bg-emerald-600 text-white"
                        }`}
                      >
                        {isOngoing ? (
                          <>
                            <Clock className="w-3 h-3 mr-1" /> Ongoing
                          </>
                        ) : (
                          <>
                            <CheckCircle2 className="w-3 h-3 mr-1" /> Completed
                          </>
                        )}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center text-xs text-gray-500 mb-2">
                        <MapPin className="w-3.5 h-3.5 mr-1 text-construction-500 shrink-0" />
                        <span className="truncate">{project.location}</span>
                      </div>

                      <h3 className="text-xl font-bold text-navy-900 group-hover:text-construction-600 transition mb-2">
                        <Link href={`/projects/${project.slug}`}>{project.title}</Link>
                      </h3>

                      <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed mb-4">
                        {project.description}
                      </p>

                      {/* Specifications Summary */}
                      <div className="grid grid-cols-2 gap-2 text-xs py-2.5 px-3 bg-surface rounded-lg mb-4 border border-gray-100">
                        <div>
                          <span className="text-gray-400 block text-[10px]">BUILT-UP AREA</span>
                          <span className="font-bold text-navy-800">
                            {project.builtUpArea ? `${Number(project.builtUpArea).toLocaleString()} sq.ft` : "N/A"}
                          </span>
                        </div>
                        <div>
                          <span className="text-gray-400 block text-[10px]">FLOORS</span>
                          <span className="font-bold text-navy-800">{project.floors || 1} Levels</span>
                        </div>
                      </div>
                    </div>

                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center text-xs font-bold text-navy-800 hover:text-construction-600 transition"
                    >
                      View Project Case Study & Gallery
                      <ArrowRight className="w-3.5 h-3.5 ml-1 text-construction-500" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16 bg-surface rounded-2xl border border-gray-200">
            <p className="text-gray-500 text-sm">No projects found in this category.</p>
            <Link
              href="/projects"
              className="mt-3 inline-block text-xs font-bold text-construction-600 hover:underline"
            >
              View all projects
            </Link>
          </div>
        )}
      </section>
    </div>
  );
}
