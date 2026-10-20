import React from "react";
import Link from "next/link";
import { getAllProjects } from "@/server/repositories/projectRepository";
import { calculateWeightedProjectProgress } from "@/lib/calculations/budget";
import {
  CheckSquare,
  AlertTriangle,
  Clock,
  CheckCircle2,
  Calendar,
  Building,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Site Milestone Tracking & Delays | Operations",
};

export default async function DashboardTrackingPage() {
  const projects = await getAllProjects();
  const ongoingProjects = projects.filter((p: any) => p.status === "ONGOING" || p.status === "PLANNING");

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-navy-900 tracking-tight">
          Site Milestone & Progress Tracking
        </h1>
        <p className="text-xs text-gray-500 mt-1">
          Monitor physical milestones, identify delayed tasks, and review on-site hindrance logs.
        </p>
      </div>

      <div className="space-y-8">
        {ongoingProjects.map((proj: any) => {
          const milestones = proj.milestones || [];
          const progress = calculateWeightedProjectProgress(milestones);
          const delayedMilestones = milestones.filter((m: any) => m.status === "DELAYED");

          return (
            <div
              key={proj.id}
              className="bg-white rounded-2xl border border-gray-200 shadow-xs p-6 space-y-6"
            >
              {/* Project Header */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pb-4 border-b border-gray-100">
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-mono text-xs text-gray-400 font-bold">
                      {proj.projectNumber}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-navy-50 text-navy-800">
                      {proj.category}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-amber-50 text-amber-700">
                      {proj.status}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-navy-900 mt-1">{proj.title}</h2>
                  <p className="text-xs text-gray-500">{proj.location}</p>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <span className="text-[10px] font-bold text-gray-400 uppercase block">
                      Weighted Progress
                    </span>
                    <span className="text-2xl font-black text-navy-900">{progress}%</span>
                  </div>
                  <Link
                    href={`/dashboard/projects/${proj.id}`}
                    className="p-2 rounded-xl bg-surface hover:bg-gray-200 text-charcoal-700 transition"
                    title="Open Project"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Delayed Alerts */}
              {delayedMilestones.length > 0 && (
                <div className="p-4 rounded-xl bg-red-50 border border-red-200 space-y-2">
                  <div className="flex items-center space-x-2 text-red-800 font-bold text-xs">
                    <AlertTriangle className="w-4 h-4 text-red-600 shrink-0" />
                    <span>{delayedMilestones.length} Milestone(s) Flagged Delayed</span>
                  </div>
                  <div className="space-y-1 pl-6 text-xs text-red-700">
                    {delayedMilestones.map((m: any) => (
                      <p key={m.id}>
                        • <strong>{m.title}:</strong> {m.delayReason || "Reason pending documentation."}
                      </p>
                    ))}
                  </div>
                </div>
              )}

              {/* Milestones Flow */}
              <div className="space-y-2">
                <h3 className="text-xs font-bold text-navy-800 uppercase tracking-wider mb-2">
                  Active Milestone Sequence ({milestones.length})
                </h3>

                {milestones.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {milestones.map((m: any, idx: number) => {
                      const isCompleted = m.status === "COMPLETED";
                      const isDelayed = m.status === "DELAYED";
                      return (
                        <div
                          key={m.id || idx}
                          className={`p-3.5 rounded-xl border text-xs space-y-2 ${
                            isDelayed
                              ? "border-red-200 bg-red-50/20"
                              : isCompleted
                              ? "border-emerald-200 bg-emerald-50/20"
                              : "border-gray-100 bg-surface"
                          }`}
                        >
                          <div className="flex justify-between items-center">
                            <span className="font-bold text-navy-900 truncate">{m.title}</span>
                            <span className="text-[10px] px-1.5 py-0.5 rounded bg-white text-gray-500 border border-gray-100">
                              W: {m.weight}
                            </span>
                          </div>

                          <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                            <div
                              className={`h-full ${
                                isDelayed
                                  ? "bg-red-500"
                                  : isCompleted
                                  ? "bg-emerald-500"
                                  : "bg-navy-800"
                              }`}
                              style={{ width: `${Number(m.progressPercent || 0)}%` }}
                            />
                          </div>

                          <div className="flex justify-between items-center text-[10px] text-gray-500">
                            <span className="uppercase font-semibold">{m.status}</span>
                            <span>{Number(m.progressPercent || 0)}%</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <p className="text-xs text-gray-400 py-2">No milestones defined for this site.</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
