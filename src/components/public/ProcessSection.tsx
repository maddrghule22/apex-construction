import React from "react";

export default function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Plot Assessment & Feasibility",
      desc: "Topographic survey, soil bearing capacity test, municipal boundary verification, and master project timeline planning.",
      image:
        "https://images.unsplash.com/photo-1541888946425-d0fbb1861564?auto=format&fit=crop&w=600&q=80",
    },
    {
      number: "02",
      title: "Architectural & Structural Plans",
      desc: "Custom 3D elevations, structural column grid designs, plumbing/electrical layout schematics, and sanctioned municipal permits.",
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80",
    },
    {
      number: "03",
      title: "Certified Material Procurement",
      desc: "Direct procurement of primary-mill Fe-550D TMT reinforcement steel, Grade 53 OPC cement, and verified batch test certificates.",
      image:
        "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=600&q=80",
    },
    {
      number: "04",
      title: "Foundation & Substructure Casting",
      desc: "Anti-termite chemical barrier, deep isolated/raft footing casting, plinth beam reinforcement, and damp-proof course.",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=600&q=80",
    },
    {
      number: "05",
      title: "RCC Framing & Masonry Walls",
      desc: "Earthquake-resistant column-beam framing, dense concrete slab casting with mechanical vibrators, and precision brick masonry.",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80",
    },
    {
      number: "06",
      title: "Finishes, 120-Point QA & Handover",
      desc: "Multi-coat plastering, vitrified tile flooring, multi-layer waterproofing, 120-point audit by Dnyaneshwar Pawale, and keys handover.",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <section className="py-20 bg-surface border-y border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Our 6-Step Construction Journey
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Every project follows a standardized, transparent milestone framework ensuring structural longevity, certified materials, and punctual handover.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs relative group hover:shadow-xl transition-all duration-300 flex flex-col text-left"
            >
              {/* Construction Step Real Image replacing SVG icon */}
              <div className="relative h-48 w-full bg-navy-950 overflow-hidden">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent" />
                <span className="absolute top-3 right-3 text-2xl font-black text-white/90 bg-navy-950/70 px-3 py-1 rounded-xl backdrop-blur-xs border border-white/10">
                  {step.number}
                </span>
                <span className="absolute bottom-3 left-4 text-xs font-bold text-construction-300">
                  Phase {step.number}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-navy-950 mb-2 group-hover:text-construction-600 transition">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {step.desc}
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
