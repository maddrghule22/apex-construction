import React from "react";

export default function WhyChooseUs() {
  const points = [
    {
      title: "Strict Structural Engineering & Code Compliance",
      desc: "Every design is vetted by chartered structural engineers to withstand seismic zones, soil settlement, and wind loads before ground excavation.",
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "100% Brand-Certified Construction Materials",
      desc: "We exclusively procure Fe-550D TMT reinforcement rebars, Grade 53 OPC cement, and ISI-certified piping from primary manufacturers with mill test certificates.",
      image:
        "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Architectural Precision & Punctual Handover",
      desc: "Detailed CAD execution drawings, scheduled structural slab cycles, and disciplined on-site craftsmanship ensure timely project delivery.",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Milestone Documentation & Site Progress",
      desc: "Receive weekly photo updates, level inspection logs, and verified stage completion documentation for complete project clarity.",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Direct Owner Supervision & Daily Site Presence",
      desc: "No inexperienced middle-men. Founder Dnyaneshwar Pawale personally inspects daily excavation, rebar tying, concrete pours, and finishing quality on site.",
      image:
        "https://images.unsplash.com/photo-1541888946425-d0fbb1861564?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Comprehensive Post-Handover Warranty",
      desc: "We provide extended waterproofing and structural warranty assurance along with complete MEP maintenance documentation.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <section className="py-20 bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Our Engineering &amp; Construction Standards
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Constructing a home or commercial building requires technical discipline. We protect your investment through rigorous material quality and direct proprietor oversight.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((pt, idx) => (
            <div
              key={idx}
              className="bg-navy-800/80 border border-navy-700/80 rounded-2xl overflow-hidden hover:bg-navy-800 transition flex flex-col group text-left"
            >
              <div className="h-40 w-full overflow-hidden relative bg-navy-950">
                <img
                  src={pt.image}
                  alt={pt.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent" />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-construction-400 transition">
                    {pt.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    {pt.desc}
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
