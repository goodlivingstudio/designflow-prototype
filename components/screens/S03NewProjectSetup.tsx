"use client";

import { useState, useEffect } from "react";
import DFMarketplace from "../DFMarketplace";
import { ArrowRight } from "lucide-react";

const IBM    = "'IBM Plex Sans', system-ui, sans-serif";
const INTER  = "'Inter', system-ui, sans-serif";
const MONO   = "'IBM Plex Mono', system-ui, monospace";
const LEXEND = "'Lexend', system-ui, sans-serif";
const LILLY  = "#E1251B";
const CLAUDE_GRADIENT = "linear-gradient(135deg, oklch(75.1% 0.094 0.152) 0%, oklch(61.9% 0.087 0.126) 100%)";

const TENSIONS = [
  { name: "PM · Chris Park",  detail: "Engagement NPS dashboard-first" },
  { name: "Patient Support",  detail: "Ticket reduction · simpler refill" },
  { name: "Marketing",        detail: "Education content · HIPAA consent gate required" },
];

export default function S03NewProjectSetup() {
  const [phase, setPhase] = useState(0);
  // 0 = nothing
  // 1 = user message visible
  // 2 = thinking dots
  // 3 = response heading visible
  // 4 = tensions 0 visible
  // 5 = tensions 1 visible
  // 6 = tensions 2 visible
  // 7 = follow-up line + CTA

  useEffect(() => {
    const schedule = [
      [500,  () => setPhase(1)],  // user message
      [1400, () => setPhase(2)],  // thinking
      [2800, () => setPhase(3)],  // "Brief processed. 3 stakeholder tensions:"
      [3400, () => setPhase(4)],  // tension 1
      [3900, () => setPhase(5)],  // tension 2
      [4400, () => setPhase(6)],  // tension 3
      [5200, () => setPhase(7)],  // follow-up + CTA
    ] as [number, () => void][];

    const timers = schedule.map(([t, fn]) => setTimeout(fn, t));
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <DFMarketplace
      url="designflow.lilly.design/projects/lillyconnect-portal-refresh/setup"
      activeNav="Kickoff"
      stepLabel="STEP 03 · SETUP"
      breadcrumb="Projects / LillyConnect Portal Refresh / Setup"
    >
      <div style={{ display: "flex", height: "100%", overflow: "hidden" }}>
        {/* Claude conversation */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", background: "#1C1C1E" }}>
          <div style={{ flex: 1, overflowY: "auto", padding: "28px 32px", display: "flex", flexDirection: "column", gap: 20, fontFamily: INTER }}>

            {/* User message */}
            {phase >= 1 && (
              <div className="step-in" style={{ display: "flex", justifyContent: "flex-end" }}>
                <div style={{ background: "#2C2C2E", borderRadius: "14px 14px 4px 14px", padding: "12px 16px", maxWidth: 520 }}>
                  <span style={{ fontSize: 13, color: "#D0D0D0", lineHeight: "20px" }}>
                    /make-to-project Brief attached. 3 stakeholder groups — competing priorities. Surface tensions before we select a workflow.
                  </span>
                </div>
              </div>
            )}

            {/* Thinking indicator */}
            {phase === 2 && (
              <div className="step-in" style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 28, height: 28, borderRadius: "50%", background: CLAUDE_GRADIENT, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <div style={{ width: 14, height: 14, borderRadius: "50%", border: "1.2px solid rgba(255,255,255,0.9)" }} />
                </div>
                <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
                  {[0, 1, 2].map(i => (
                    <div key={i} className="spin" style={{ width: 6, height: 6, borderRadius: "50%", background: "#555", animationDuration: "1s", animationDelay: `${i * 0.2}s`, animation: `beacon-breathe 1s ${i * 0.2}s ease-in-out infinite` }} />
                  ))}
                </div>
              </div>
            )}

            {/* Claude response */}
            {phase >= 3 && (
              <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                <div style={{ width: 28, height: 28, borderRadius: "50%", background: CLAUDE_GRADIENT, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                  <div style={{ width: 14, height: 14, borderRadius: "50%", border: "1.2px solid rgba(255,255,255,0.9)" }} />
                </div>
                <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 12 }}>
                  <div className="step-in" style={{ fontSize: 13, color: "#D0D0D0", lineHeight: "20px" }}>
                    Brief processed. 3 stakeholder tensions:
                  </div>

                  {/* Tension cards */}
                  {phase >= 4 && (
                    <div style={{ background: "#252527", borderLeft: `3px solid #C96800`, borderTopRightRadius: 8, borderBottomRightRadius: 8, padding: "14px 16px", display: "flex", flexDirection: "column", gap: 10, maxWidth: 520 }}>
                      <div style={{ fontFamily: LEXEND, fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", color: "#C96800", textTransform: "uppercase" as const, marginBottom: 2 }}>
                        Stakeholder Tension Analysis
                      </div>
                      {TENSIONS.slice(0, phase - 3).map((t, i, arr) => (
                        <div key={t.name} className="step-in">
                          <div style={{ fontFamily: LEXEND, fontSize: 12, fontWeight: 600, color: "#E0E0E0", marginBottom: 2 }}>{t.name}</div>
                          <div style={{ fontFamily: LEXEND, fontSize: 12, color: "#888" }}>{t.detail}</div>
                          {i < arr.length - 1 && <div style={{ height: 1, background: "#333", marginTop: 10 }} />}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Follow-up + CTA */}
                  {phase >= 7 && (
                    <>
                      <div className="step-in" style={{ fontSize: 13, color: "#D0D0D0", lineHeight: "20px" }}>
                        Run <span style={{ color: LILLY, fontWeight: 600 }}>/select-workflow</span> next — Portal Redesign covers all three tracks.
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Input bar */}
          <div style={{ flexShrink: 0, padding: "10px 24px 16px", background: "#1C1C1E" }}>
            <div style={{ height: 44, background: "#2C2C2E", border: "1px solid #3A3A3A", borderRadius: 12, display: "flex", alignItems: "center", paddingInline: 16, gap: 8 }}>
              <span style={{ fontSize: 13, color: "#555", flex: 1, fontFamily: INTER }}>Type / for skills</span>
              <ArrowRight size={16} color="#555" strokeWidth={1.5} />
            </div>
          </div>
        </div>

        {/* Right panel — project summary + pinned CTA */}
        <div style={{ width: 260, flexShrink: 0, borderLeft: "1px solid #EEEEEE", background: "#FFFFFF", display: "flex", flexDirection: "column", overflow: "hidden" }}>
          {/* Scrollable content */}
          <div style={{ flex: 1, overflowY: "auto", padding: "20px" }}>
            <div style={{ fontFamily: IBM, fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: "#1A1A1A", marginBottom: 14, textTransform: "uppercase" as const }}>Project Summary</div>
            {[
              ["Project", "LillyConnect Portal Refresh"],
              ["ID",      "LILLYCONNECT-PORTAL"],
              ["NPS now", "42"],
              ["Target",  "65+"],
              ["Refill",  "23% → improve"],
              ["Team",    "Jordan + Maya + Jamie + Morgan"],
            ].map(([label, value]) => (
              <div key={label} style={{ marginBottom: 12 }}>
                <div style={{ fontFamily: IBM, fontSize: 10, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase" as const, color: "#AAAAAA", marginBottom: 2 }}>{label}</div>
                <div style={{ fontFamily: label === "ID" ? MONO : IBM, fontSize: 12, color: "#1A1A1A", lineHeight: "16px" }}>{value}</div>
              </div>
            ))}
            <div style={{ marginTop: 8, background: "#F0F6FF", borderLeft: "3px solid #0070CC", borderRadius: 4, padding: "10px 12px" }}>
              <div style={{ fontFamily: MONO, fontSize: 10, fontWeight: 600, color: "#0070CC", marginBottom: 6, letterSpacing: "0.06em" }}>KEY METRICS</div>
              <div style={{ display: "flex", gap: 16 }}>
                {[["42", "NPS"], ["23%", "Refill"], ["65+", "Target"]].map(([val, lbl]) => (
                  <div key={lbl}>
                    <div style={{ fontFamily: IBM, fontSize: 18, fontWeight: 700, color: "#201F1E" }}>{val}</div>
                    <div style={{ fontSize: 10, color: "#666" }}>{lbl}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* CTA pinned to bottom — same pattern as S04 Skills rail */}
          {phase >= 7 && (
            <div style={{ flexShrink: 0, padding: "16px 20px", borderTop: "1px solid #F0F0F0" }}>
              <button
                className="fade-up-1"
                onClick={() => window.dispatchEvent(new CustomEvent("df:next"))}
                style={{
                  width: "100%", padding: "12px 0",
                  background: LILLY, color: "white",
                  border: "none", borderRadius: 7,
                  fontFamily: IBM, fontSize: 13, fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Review workflow →
              </button>
            </div>
          )}
        </div>
      </div>
    </DFMarketplace>
  );
}
