"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { MapPin, CheckCircle2, Clock, ArrowRight, Filter } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface ProjectsGalleryProps {
  initialProjects: any[];
}

function GalleryContent({ initialProjects }: ProjectsGalleryProps) {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "ALL";
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat) {
      setSelectedCategory(cat);
    }
  }, [searchParams]);

  const categories = [
    { label: "All Projects", value: "ALL" },
    { label: "Residential", value: "RESIDENTIAL" },
    { label: "Commercial", value: "COMMERCIAL" },
    { label: "Renovation & Civil", value: "RENOVATION" },
  ];

  const filteredProjects =
    selectedCategory === "ALL"
      ? initialProjects
      : initialProjects.filter((p) => p.category === selectedCategory);

  return (
    <>
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-gray-100">
        <div className="flex items-center text-xs font-bold text-gray-500 mr-2">
          <Filter className="w-3.5 h-3.5 mr-1" /> Filter:
        </div>
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat.value;
          return (
            <button
              key={cat.value}
              type="button"
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold cursor-pointer btn-spring ${
                isSelected
                  ? "bg-navy-800 text-white shadow-sm"
                  : "bg-surface text-charcoal-700 hover:bg-gray-200"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Project Cards Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project: any, idx: number) => {
            const isOngoing = project.status === "ONGOING";
            return (
              <ScrollReveal key={project.id} delayMs={idx * 80} direction="up" className="h-full">
                <div
                  className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover-lift flex flex-col group h-full"
                >
                  {/* Cover Image */}
                  <div className="relative h-64 w-full bg-navy-900 overflow-hidden">
                    <img
                      src={
                        project.coverImage ||
                        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                      }
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover hover-zoom-img"
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
                    className="inline-flex items-center text-xs font-bold text-navy-800 hover:text-construction-600 transition gap-1 group/link"
                  >
                    <span>View Project Case Study &amp; Gallery</span>
                    <ArrowRight className="w-3.5 h-3.5 text-construction-500 shrink-0 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
        </div>
      ) : (
        <div className="text-center py-16 bg-surface rounded-2xl border border-gray-200">
          <p className="text-gray-500 text-sm">No projects found in this category.</p>
          <button
            type="button"
            onClick={() => setSelectedCategory("ALL")}
            className="mt-3 inline-block text-xs font-bold text-construction-600 hover:underline cursor-pointer"
          >
            View all projects
          </button>
        </div>
      )}
    </>
  );
}

export default function ProjectsGallery({ initialProjects }: ProjectsGalleryProps) {
  return (
    <Suspense fallback={<div className="py-12 text-center text-gray-400">Loading projects...</div>}>
      <GalleryContent initialProjects={initialProjects} />
    </Suspense>
  );
}
