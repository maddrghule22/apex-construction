import React from "react";
import Link from "next/link";
import { MapPin, ArrowRight, Layers, CheckCircle2, Clock } from "lucide-react";
import { getPublicProjects } from "@/server/repositories/projectRepository";

export default async function FeaturedProjects() {
  const projects = await getPublicProjects();
  const featured = projects.slice(0, 6);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
              Featured Construction Projects
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-xl leading-relaxed">
              Explore our turnkey residential villas, independent houses, and modern commercial developments across Maharashtra.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center text-sm font-bold text-navy-900 hover:text-construction-600 transition mt-4 md:mt-0"
          >
            View all projects &amp; portfolio
            <ArrowRight className="w-4 h-4 ml-1.5 text-construction-500" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((project: any) => {
            const isOngoing = project.status === "ONGOING";
            return (
              <div
                key={project.id}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group"
              >
                {/* Cover Image Container */}
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
                        isOngoing
                          ? "bg-amber-500 text-white"
                          : "bg-emerald-600 text-white"
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

                {/* Content */}
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

                    {/* Specifications mini bar */}
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
      </div>
    </section>
  );
}
