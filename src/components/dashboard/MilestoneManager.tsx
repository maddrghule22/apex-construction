"use client";

import React, { useState } from "react";
import { CheckCircle2, Clock, AlertTriangle, Plus, Save, Edit3 } from "lucide-react";

interface Milestone {
  id: string;
  title: string;
  description?: string;
  orderIndex: number;
  weight: number;
  status: "NOT_STARTED" | "IN_PROGRESS" | "COMPLETED" | "DELAYED";
  progressPercent: number;
  delayReason?: string;
}

interface MilestoneManagerProps {
  projectId: string;
  initialMilestones: Milestone[];
}

export default function MilestoneManager({
  projectId,
  initialMilestones,
}: MilestoneManagerProps) {
  const [milestones, setMilestones] = useState<Milestone[]>(initialMilestones);
  const [editingMilestoneId, setEditingMilestoneId] = useState<string | null>(null);
  const [editStatus, setEditStatus] = useState<any>("");
  const [editProgress, setEditProgress] = useState<number>(0);
  const [editDelayReason, setEditDelayReason] = useState<string>("");
  const [saving, setSaving] = useState(false);

  // New Milestone State
  const [isAdding, setIsAdding] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newWeight, setNewWeight] = useState("10");

  const startEdit = (m: Milestone) => {
    setEditingMilestoneId(m.id);
    setEditStatus(m.status);
    setEditProgress(Number(m.progressPercent || 0));
    setEditDelayReason(m.delayReason || "");
  };

  const saveEdit = async (milestoneId: string) => {
    setSaving(true);
    try {
      const res = await fetch(`/api/projects/${projectId}/milestones`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          milestoneId,
          status: editStatus,
          progressPercent: Number(editProgress),
          delayReason: editStatus === "DELAYED" ? editDelayReason : null,
        }),
      });

      if (res.ok) {
        setMilestones((prev) =>
          prev.map((m) =>
            m.id === milestoneId
              ? {
                  ...m,
                  status: editStatus,
                  progressPercent: Number(editProgress),
                  delayReason: editStatus === "DELAYED" ? editDelayReason : undefined,
                }
              : m
          )
        );
        setEditingMilestoneId(null);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSaving(false);
    }
  };

  const handleAddMilestone = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle) return;
    setSaving(true);

    try {
      const res = await fetch(`/api/projects/${projectId}/milestones`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: newTitle,
          description: newDescription,
          weight: Number(newWeight || 10),
          orderIndex: milestones.length + 1,
          status: "NOT_STARTED",
          progressPercent: 0,
        }),
      });

      const data = await res.json();
      if (res.ok && data.milestone) {
        setMilestones([...milestones, data.milestone]);
        setIsAdding(false);
        setNewTitle("");
        setNewDescription("");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs space-y-4">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-base font-bold text-navy-900">Project Milestones & Progress</h2>
          <p className="text-xs text-gray-500">
            Weighted milestone schedule and on-site completion verification
          </p>
        </div>

        <button
          type="button"
          onClick={() => setIsAdding(!isAdding)}
          className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg text-xs font-semibold text-construction-700 bg-construction-50 hover:bg-construction-100 border border-construction-200"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Add Milestone</span>
        </button>
      </div>

      {isAdding && (
        <form onSubmit={handleAddMilestone} className="p-4 bg-surface rounded-xl border border-gray-200 space-y-3 animate-fadeIn">
          <h4 className="text-xs font-bold text-navy-900 uppercase">New Milestone Definition</h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="sm:col-span-2">
              <label className="block text-[11px] font-semibold text-charcoal-700 mb-1">
                Milestone Title*
              </label>
              <input
                type="text"
                required
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                placeholder="e.g. 2nd Floor Slab Casting"
                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-construction-500"
              />
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-charcoal-700 mb-1">
                Weight (1-100)*
              </label>
              <input
                type="number"
                min={1}
                max={100}
                required
                value={newWeight}
                onChange={(e) => setNewWeight(e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-construction-500"
              />
            </div>

            <div className="sm:col-span-3">
              <label className="block text-[11px] font-semibold text-charcoal-700 mb-1">
                Description (Optional)
              </label>
              <input
                type="text"
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
                placeholder="Specific inspection or quality criteria..."
                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-construction-500"
              />
            </div>
          </div>

          <div className="flex space-x-2 justify-end pt-1">
            <button
              type="button"
              onClick={() => setIsAdding(false)}
              className="px-3 py-1.5 rounded-lg text-xs text-gray-600 bg-gray-100 hover:bg-gray-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={saving}
              className="px-3.5 py-1.5 rounded-lg text-xs font-bold text-white bg-construction-500 hover:bg-construction-600"
            >
              {saving ? "Saving..." : "Save Milestone"}
            </button>
          </div>
        </form>
      )}

      {/* Milestones List */}
      <div className="space-y-3">
        {milestones.length > 0 ? (
          milestones.map((m, idx) => {
            const isEditing = editingMilestoneId === m.id;
            const isDelayed = m.status === "DELAYED";
            const isCompleted = m.status === "COMPLETED";

            return (
              <div
                key={m.id || idx}
                className={`p-4 rounded-xl border transition ${
                  isDelayed
                    ? "border-red-200 bg-red-50/30"
                    : isCompleted
                    ? "border-emerald-200 bg-emerald-50/20"
                    : "border-gray-200 bg-white"
                }`}
              >
                {isEditing ? (
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-sm text-navy-900">{m.title}</span>
                      <span className="text-xs text-gray-400">Weight: {m.weight}</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-semibold text-gray-600 mb-1">
                          Status
                        </label>
                        <select
                          value={editStatus}
                          onChange={(e) => setEditStatus(e.target.value)}
                          className="w-full px-2.5 py-1.5 border border-gray-200 rounded-lg text-xs bg-white"
                        >
                          <option value="NOT_STARTED">Not Started</option>
                          <option value="IN_PROGRESS">In Progress</option>
                          <option value="COMPLETED">Completed</option>
                          <option value="DELAYED">Delayed</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-gray-600 mb-1">
                          Progress Percentage ({editProgress}%)
                        </label>
                        <input
                          type="range"
                          min={0}
                          max={100}
                          value={editProgress}
                          onChange={(e) => setEditProgress(Number(e.target.value))}
                          className="w-full"
                        />
                      </div>

                      {editStatus === "DELAYED" && (
                        <div className="sm:col-span-2">
                          <label className="block text-[11px] font-semibold text-red-700 mb-1">
                            Reason for Site Delay*
                          </label>
                          <input
                            type="text"
                            required
                            value={editDelayReason}
                            onChange={(e) => setEditDelayReason(e.target.value)}
                            placeholder="e.g. Heavy monsoon rain, supplier delay in steel rebars..."
                            className="w-full px-3 py-1.5 border border-red-300 rounded-lg text-xs bg-red-50/50"
                          />
                        </div>
                      )}
                    </div>

                    <div className="flex space-x-2 justify-end pt-1">
                      <button
                        type="button"
                        onClick={() => setEditingMilestoneId(null)}
                        className="px-3 py-1 text-xs text-gray-600 bg-gray-100 rounded-lg"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        onClick={() => saveEdit(m.id)}
                        disabled={saving}
                        className="px-3 py-1 text-xs font-bold text-white bg-construction-500 rounded-lg"
                      >
                        {saving ? "Saving..." : "Save Progress"}
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="w-5 h-5 rounded-full bg-navy-100 text-navy-800 text-[10px] font-bold flex items-center justify-center">
                          {idx + 1}
                        </span>
                        <span className="font-bold text-sm text-navy-900">{m.title}</span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-gray-100 text-gray-500">
                          Weight: {m.weight}
                        </span>
                      </div>
                      {m.description && (
                        <p className="text-xs text-gray-500 pl-7">{m.description}</p>
                      )}
                      {m.delayReason && (
                        <div className="flex items-center space-x-1.5 text-xs text-red-600 pl-7">
                          <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                          <span>Delay Note: {m.delayReason}</span>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center space-x-3 w-full sm:w-auto justify-between sm:justify-end">
                      <div className="text-right">
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                            isCompleted
                              ? "bg-emerald-50 text-emerald-700"
                              : isDelayed
                              ? "bg-red-50 text-red-700"
                              : m.status === "IN_PROGRESS"
                              ? "bg-amber-50 text-amber-700"
                              : "bg-gray-100 text-gray-600"
                          }`}
                        >
                          {m.status} ({Number(m.progressPercent || 0)}%)
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() => startEdit(m)}
                        className="p-1 text-gray-400 hover:text-navy-900"
                        title="Edit progress"
                      >
                        <Edit3 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <p className="text-xs text-gray-400 py-3 text-center">
            No milestones configured yet. Click "Add Milestone" above to schedule project phases.
          </p>
        )}
      </div>
    </div>
  );
}
