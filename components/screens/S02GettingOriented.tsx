"use client";

import { useState, useEffect } from "react";
import DFMarketplace, { SkillsStatus } from "../DFMarketplace";
import { Check } from "lucide-react";

const IBM   = "'IBM Plex Sans', system-ui, sans-serif";
const MONO  = "'IBM Plex Mono', system-ui, monospace";
const LILLY = "#E1251B";

const AUDIT_ROWS = [
  { label: "Card layouts",               status: "Available", ok: true,  delay: 300  },
  { label: "Form controls + inputs",     status: "Available", ok: true,  delay: 700  },
  { label: "Navigation + tabs",          status: "Available", ok: true,  delay: 1100 },
  { label: "Medication timeline widget", status: "GAP",       ok: false, delay: 1500 },
  { label: "Dosing schedule view",       status: "GAP",       ok: false, delay: 1900 },
];

// Skills: first 3 load quickly, Journey-Templates completes last
const SKILL_DELAYS = [0, 0, 0, 3200]; // ms when each skill becomes "ready"

export default function S02GettingOriented() {
  const [visibleRows,   setVisibleRows]   = useState(0);
  const [showMemory,    setShowMemory]    = useState(false);
  const [loadedSkills,  setLoadedSkills]  = useState(3); // first 3 already ready
  const [showCTA,       setShowCTA]       = useState(false);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    // Audit rows cascade
    AUDIT_ROWS.forEach((_, i) => {
      timers.push(setTimeout(() => setVisibleRows(i + 1), AUDIT_ROWS[i].delay));
    });
    timers.push(setTimeout(() => setShowMemory(true), 2600));

    // Journey-Templates finishes loading
    timers.push(setTimeout(() => {
      setLoadedSkills(4);
      // CTA appears shortly after
      timers.push(setTimeout(() => setShowCTA(true), 600));
    }, SKILL_DELAYS[3]));

    return () => timers.forEach(clearTimeout);
  }, []);

  const allSkills = [
    { label: "LDS v3.2 Audit",           status: "ready" as const },
    { label: "HIPAA Compliance",          status: "ready" as const },
    { label: "Section 508 Accessibility", status: "ready" as const },
    { label: "Patient Journey Templates", status: loadedSkills >= 4 ? "ready" as const : "loading" as const },
  ];

  const canvas = (
    <div style={{ flex: 1, overflowY: "auto", padding: "28px 32px" }}>
      <div style={{ fontFamily: IBM, fontSize: 24, fontWeight: 700, letterSpacing: "-0.3px", color: "#1A1A1A", marginBottom: 6 }}>
        LillyConnect Patient Portal Refresh
      </div>
      <div style={{ fontSize: 13, color: "#888", marginBottom: 28 }}>
        Workspace staged · Brief loaded · Jordan Kim + Maya Chen
      </div>

      {/* LDS Audit — rows animate in */}
      <div style={{ border: "1px solid #E8E8E8", borderRadius: 8, overflow: "hidden", marginBottom: 20 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px", background: "#FAFAFA", borderBottom: "1px solid #E8E8E8" }}>
          <span style={{ fontFamily: MONO, fontSize: 11, fontWeight: 600, letterSpacing: "0.06em", color: "#333" }}>LDS COMPONENT AUDIT · v3.2</span>
          <div style={{ display: "flex", alignItems: "center", gap: 5, background: "#E8F5E9", borderRadius: 10, padding: "2px 10px" }}>
            <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#2E7D32" }} />
            <span style={{ fontFamily: MONO, fontSize: 10, color: "#2E7D32" }}>Loaded</span>
          </div>
        </div>
        {AUDIT_ROWS.slice(0, visibleRows).map((row, i) => (
          <div key={row.label} className="step-in" style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "9px 16px",
            background: row.ok ? "white" : "#FEF9F9",
            borderBottom: i < Math.min(visibleRows, AUDIT_ROWS.length) - 1 ? "1px solid #F5F5F5" : "none",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: row.ok ? "#2E7D32" : LILLY, flexShrink: 0 }} />
              <span style={{ fontSize: 13, color: row.ok ? "#333" : "#1A1A1A", fontWeight: row.ok ? 400 : 500 }}>{row.label}</span>
            </div>
            <span style={{ fontFamily: MONO, fontSize: 10, fontWeight: 600, color: row.ok ? "#888" : LILLY }}>{row.status}</span>
          </div>
        ))}
        {visibleRows < AUDIT_ROWS.length && (
          <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "9px 16px" }}>
            <div style={{ width: 14, height: 14, borderRadius: "50%", border: "2px solid rgba(225,37,27,0.2)", borderTopColor: LILLY, flexShrink: 0 }} className="spin" />
            <span style={{ fontSize: 13, color: "#AAAAAA" }}>Scanning components…</span>
          </div>
        )}
      </div>

      {/* Project memory */}
      {showMemory && (
        <div className="fade-up-1" style={{ background: "#F8F8F8", borderLeft: "4px solid #2D3B4F", borderRadius: 8, padding: "14px 16px", marginBottom: 20 }}>
          <div style={{ fontFamily: MONO, fontSize: 10, fontWeight: 600, letterSpacing: "0.06em", color: "#2D3B4F", marginBottom: 6 }}>PROJECT MEMORY INITIALISED</div>
          <div style={{ fontSize: 12, color: "#555", lineHeight: "18px" }}>
            Brief, metrics, stakeholder tensions, and LDS gaps are now logged. Every decision made from this point will be tracked and available at any handoff.
          </div>
        </div>
      )}

      {/* CTA — appears once Journey-Templates finishes */}
      {showCTA && (
        <button
          className="fade-up-1"
          onClick={() => window.dispatchEvent(new CustomEvent("df:next"))}
          style={{
            width: "100%", padding: "13px 0",
            background: LILLY, color: "white",
            border: "none", borderRadius: 7,
            fontFamily: IBM, fontSize: 14, fontWeight: 600,
            cursor: "pointer", letterSpacing: "0.01em",
          }}
        >
          Set up your project →
        </button>
      )}
    </div>
  );

  return (
    <DFMarketplace
      url="designflow.lilly.design/projects/lillyconnect-portal-refresh/workspace"
      activeNav="Kickoff"
      stepLabel="STEP 02 · ORIENTED"
      breadcrumb="Projects / LillyConnect Portal Refresh / Workspace"
    >
      <div style={{ display: "flex", height: "100%", overflow: "hidden" }}>
        {canvas}
        <SkillsStatus skills={allSkills} />
      </div>
    </DFMarketplace>
  );
}
