"use client";

// S04 · Jordan · Select Workflow
// Surface: DesignFlow marketplace — Cookbook-style workflow catalog.
// Portal Redesign is recommended and selected.

import { useState, useEffect } from "react";
import DFMarketplace, { SkillCard, SkillsStatus } from "../DFMarketplace";
import { Search } from "lucide-react";

const IBM   = "'IBM Plex Sans', system-ui, sans-serif";
const MONO  = "'IBM Plex Mono', system-ui, monospace";
const LILLY = "#E1251B";

const WORKFLOWS = [
  {
    title: "Portal Redesign",
    step: "14-step workflow",
    description: "End-to-end patient portal redesign with compliance checkpoints, accessibility gates, and stakeholder review stages built in.",
    tags: ["HIPAA", "LDS", "508", "Patient-Journey"],
    recommended: true,
  },
  {
    title: "Component Design",
    step: "8-step workflow",
    description: "Build and document reusable components aligned to the Lilly Design System with variant specs and usage guidelines.",
    tags: ["LDS", "Figma", "Storybook"],
  },
  {
    title: "Content Strategy",
    step: "6-step workflow",
    description: "Define content hierarchy, tone guidelines, and copy frameworks for patient-facing healthcare digital products.",
    tags: ["Content", "Plain-Language", "HIPAA"],
  },
];

const ALL_SKILLS: Array<{ label: string; delay: number }> = [
  { label: "LDS",               delay: 400  },
  { label: "HIPAA",             delay: 900  },
  { label: "508",               delay: 1400 },
  { label: "Journey-Templates", delay: 2000 },
];

export default function S04SelectWorkflow() {
  const [loadedSkills,    setLoadedSkills]    = useState(0);
  const [selectedTitle,   setSelectedTitle]   = useState<string | null>(null);

  useEffect(() => {
    const timers = ALL_SKILLS.map((s, i) =>
      setTimeout(() => setLoadedSkills(i + 1), s.delay)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  const skillStatuses = ALL_SKILLS.map((s, i) => ({
    label: s.label,
    status: (i < loadedSkills ? "ready" : i === loadedSkills ? "loading" : "loading") as "ready" | "loading",
  }));

  return (
    <DFMarketplace
      url="designflow.lilly.design/projects/lillyconnect-portal-refresh/marketplace/workflows"
      activeNav="Library"
      stepLabel="STEP 04 · WORKFLOW"
      breadcrumb="Projects / LillyConnect Portal Refresh / Library / Workflows"
    >
      <div style={{ display: "flex", height: "100%", overflow: "hidden" }}>
        {/* Main catalog */}
        <div style={{ flex: 1, overflowY: "auto", padding: "28px 32px" }}>
          {/* Page header */}
          <div style={{ marginBottom: 28 }}>
            <div style={{ fontFamily: "'IBM Plex Sans', system-ui, sans-serif", fontSize: 24, fontWeight: 700, color: "#1A1A1A", marginBottom: 4 }}>Select Workflow</div>
            <div style={{ fontSize: 14, color: "#888" }}>Choose a workflow — skills load automatically based on your project brief.</div>
          </div>

          {/* Search + filter row */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
            <div style={{ flex: 1, display: "flex", alignItems: "center", height: 36, background: "#F7F7F7", border: "1px solid #E8E8E8", borderRadius: 6, paddingInline: 12, gap: 8 }}>
              <Search size={14} color="#888" strokeWidth={1.5} />
              <span style={{ fontFamily: IBM, fontSize: 13, color: "#AAA" }}>Search workflows…</span>
            </div>
            {["All", "HIPAA", "LDS", "508", "Patient-Journey"].map((tag, i) => (
              <div key={tag} style={{ padding: "5px 12px", borderRadius: 20, background: i === 0 ? "#1A1A1A" : "#F0F0F0", border: `1px solid ${i === 0 ? "#1A1A1A" : "#E8E8E8"}`, cursor: "pointer" }}>
                <span style={{ fontFamily: IBM, fontSize: 12, fontWeight: 500, color: i === 0 ? "white" : "#555" }}>{tag}</span>
              </div>
            ))}
          </div>

          {/* Workflow cards — equal height, click to select */}
          <div style={{ display: "flex", alignItems: "stretch", gap: 16, marginBottom: selectedTitle ? 16 : 0 }}>
            {WORKFLOWS.map(wf => (
              <div key={wf.title} style={{ flex: 1, display: "flex" }} onClick={() => setSelectedTitle(wf.title)}>
                <SkillCard
                  {...wf}
                  selected={selectedTitle === wf.title}
                />
              </div>
            ))}
          </div>

          {/* CTA — appears after user selects a workflow */}
          {selectedTitle && (
            <button
              className="fade-up-1"
              onClick={() => window.dispatchEvent(new CustomEvent("df:next"))}
              style={{
                width: "100%", padding: "13px 0",
                background: LILLY, color: "white",
                border: "none", borderRadius: 7,
                fontFamily: IBM, fontSize: 14, fontWeight: 600,
                cursor: "pointer", marginBottom: 28,
              }}
            >
              Kick off your team in Teams →
            </button>
          )}

          {/* All workflows table (Cookbook-style) */}
          <div style={{ marginTop: 36 }}>
            <div style={{ fontFamily: IBM, fontSize: 13, fontWeight: 600, color: "#1A1A1A", marginBottom: 14 }}>All Workflows</div>
            <div style={{ border: "1px solid #E8E8E8", borderRadius: 8, overflow: "hidden" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr auto auto", background: "#FAFAFA", borderBottom: "1px solid #E8E8E8", padding: "10px 16px", gap: 16 }}>
                {["Workflow", "Categories", "Steps"].map(col => (
                  <span key={col} style={{ fontFamily: IBM, fontSize: 11, fontWeight: 700, letterSpacing: "0.06em", color: "#888", textTransform: "uppercase" }}>{col}</span>
                ))}
              </div>
              {[
                { name: "Portal Redesign",        tags: ["HIPAA", "LDS", "508"],       steps: "14", active: true },
                { name: "Component Design",       tags: ["LDS", "Figma"],              steps: "8",  active: false },
                { name: "Content Strategy",       tags: ["Content", "Plain-Language"], steps: "6",  active: false },
                { name: "Design System Audit",    tags: ["LDS", "Tokens"],             steps: "5",  active: false },
                { name: "Accessibility Sprint",   tags: ["508", "WCAG"],               steps: "4",  active: false },
                { name: "Stakeholder Workshop",   tags: ["Research"],                  steps: "3",  active: false },
              ].map((row, i, arr) => (
                <div key={row.name} style={{ display: "grid", gridTemplateColumns: "1fr auto auto", padding: "11px 16px", borderBottom: i < arr.length - 1 ? "1px solid #F5F5F5" : "none", alignItems: "center", gap: 16, background: row.active ? "#FEF9F9" : "white" }}>
                  <span style={{ fontFamily: IBM, fontSize: 13, color: row.active ? LILLY : "#1A1A1A", fontWeight: row.active ? 600 : 400 }}>
                    {row.active && "✓ "}{row.name}
                  </span>
                  <div style={{ display: "flex", gap: 5 }}>
                    {row.tags.map(t => (
                      <span key={t} style={{ fontFamily: IBM, fontSize: 11, color: "#555", background: "#F0F0F0", borderRadius: 10, padding: "1px 7px" }}>{t}</span>
                    ))}
                  </div>
                  <span style={{ fontFamily: MONO, fontSize: 11, color: "#AAAAAA", textAlign: "right" }}>{row.steps} steps</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills sidebar — animates in as each skill loads */}
        <SkillsStatus
          skills={skillStatuses.slice(0, loadedSkills + 1)}
          gates={loadedSkills >= 3 ? [
            { step: "07", label: "HIPAA Review",    sub: "Compliance checkpoint" },
            { step: "10", label: "508 Audit",        sub: "Accessibility gate" },
          ] : undefined}
        />
      </div>
    </DFMarketplace>
  );
}
