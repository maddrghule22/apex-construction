import React from "react";

export default function StatsSection() {
  const highlights = [
    {
      title: "Direct Owner Supervision",
      description:
        "Daily on-site contractor coordination and quality checks conducted personally by founder Dnyaneshwar Pawale.",
      image:
        "https://images.unsplash.com/photo-1541888946425-d0fbb1861564?auto=format&fit=crop&w=600&q=80",
      tag: "100% On-Site",
    },
    {
      title: "Seismic & Structural Engineering",
      description:
        "Chartered engineering vetting with geotechnical soil testing, load calculations, and ductile earthquake detailing.",
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80",
      tag: "IS Code Compliant",
    },
    {
      title: "Brand-Certified Materials",
      description:
        "Exclusively primary-mill Fe-550D TMT steel and Grade 53 OPC cement with verified batch quality test certificates.",
      image:
        "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=600&q=80",
      tag: "Fe-550D & OPC 53",
    },
    {
      title: "Turnkey Project Execution",
      description:
        "Full lifecycle execution from ground excavation and RCC framing to fine interior plastering and handover.",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
      tag: "Foundation to Finish",
    },
  ];

  return (
    <section className="bg-surface py-12 sm:py-16 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-gray-200/90 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group text-left"
            >
              {/* Real Construction Image replacing SVG Icon */}
              <div className="relative h-44 w-full bg-navy-950 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
                <span className="absolute bottom-2.5 left-3 text-[10px] font-extrabold uppercase tracking-wider text-construction-300 bg-navy-950/80 px-2 py-0.5 rounded-md backdrop-blur-xs border border-white/10">
                  {item.tag}
                </span>
              </div>

              {/* Text Description */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <h3 className="text-base font-bold text-navy-950 group-hover:text-construction-600 transition">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed mt-1.5">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
