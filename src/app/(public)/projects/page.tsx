import React from "react";
import { getPublicProjects } from "@/server/repositories/projectRepository";
import ProjectsGallery from "@/components/public/ProjectsGallery";

export const metadata = {
  title: "Featured Construction Portfolio | Residential & Commercial",
  description:
    "Explore our portfolio of completed and ongoing turnkey construction projects, including custom villas, commercial complexes, and industrial distribution hubs.",
};

export default async function ProjectsPage() {
  const projects = await getPublicProjects();

  return (
    <div className="bg-white min-h-screen">
      {/* Header Banner */}
      <section className="bg-navy-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl space-y-3">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              Our Construction Projects
            </h1>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Explore our delivered and ongoing residential villas, independent houses, and modern commercial developments across Maharashtra.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs & Gallery Grid */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProjectsGallery initialProjects={projects} />
      </section>
    </div>
  );
}
