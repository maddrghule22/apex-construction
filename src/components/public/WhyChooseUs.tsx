import React from "react";
import { ShieldCheck, Scale, Award, Users2, Eye, Wrench } from "lucide-react";

export default function WhyChooseUs() {
  const points = [
    {
      title: "Strict Structural Engineering & Code Compliance",
      desc: "Every design is vetted by chartered structural engineers to withstand seismic zones, soil settlement, and wind loads before ground excavation.",
      icon: ShieldCheck,
    },
    {
      title: "100% Brand-Certified Construction Materials",
      desc: "We exclusively procure Fe-550D TMT reinforcement rebars, Grade 53 OPC cement, and ISI-certified piping from primary manufacturers with mill test certificates.",
      icon: Award,
    },
    {
      title: "Transparent Fixed Pricing - No Surprise Escalations",
      desc: "Our contracts feature crystal-clear itemized specifications. Rates are locked in the initial BOQ so you never face surprise hidden extras mid-project.",
      icon: Scale,
    },
    {
      title: "Digital Milestone Tracking & Weekly Progress",
      desc: "Receive weekly photo updates, drone inspection logs, and verified milestone completion certificates through our centralized management platform.",
      icon: Eye,
    },
    {
      title: "Direct Proprietor Supervision & Daily Site Presence",
      desc: "No inexperienced middle-men. Dnyaneshwar Pawale and Shravan Pawale oversee daily excavation, rebar tying, concrete pours, and finishing quality personally on every site.",
      icon: Users2,
    },
    {
      title: "Comprehensive Post-Handover Warranty",
      desc: "We provide extended waterproofing and structural warranty programs along with comprehensive MEP maintenance documentation.",
      icon: Wrench,
    },
  ];

  return (
    <section className="py-20 bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-construction-400 uppercase tracking-wider bg-navy-800 px-3 py-1 rounded-full border border-navy-700">
            Uncompromising Standards
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Why Discerning Clients Build With Us
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Constructing a building is one of your greatest lifetime investments. We protect your capital through rigorous engineering rigor and total accountability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={idx}
                className="bg-navy-800/80 border border-navy-700/80 rounded-2xl p-6 hover:bg-navy-800 transition"
              >
                <div className="w-12 h-12 rounded-xl bg-navy-900 text-construction-500 flex items-center justify-center border border-navy-700 mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{pt.title}</h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">{pt.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
