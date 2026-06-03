"use client";

import { useState, useEffect } from "react";
import { Check } from "lucide-react";
import { DFWordmark, DFLogoIcon } from "../DFLogo";

const IBM    = "'IBM Plex Sans', system-ui, sans-serif";
const MONO   = "'IBM Plex Mono', system-ui, monospace";
const LEXEND = "'Lexend', system-ui, sans-serif";
const LILLY  = "#E1251B";

const STEPS = [
  "Brief parsed · goals + constraints extracted",
  "Stakeholder tensions identified",
  "Team workspace created · Jordan + Maya",
  "Loading skills · Portal Redesign workflow",
  "Opening DesignFlow workspace",
];

// How long each step takes to "complete" before advancing (ms)
const DURATIONS = [800, 1000, 900, 1200, 1000];

export default function IntARouting() {
  const [done,    setDone]    = useState(0);
  const [shown,   setShown]   = useState(1);
  const [showCTA, setShowCTA] = useState(false);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    let elapsed = 0;

    STEPS.forEach((_, i) => {
      elapsed += DURATIONS[i];
      const capI = i;

      timers.push(setTimeout(() => {
        setDone(capI + 1);
        if (capI < STEPS.length - 1) {
          // Show next step
          timers.push(setTimeout(() => setShown(capI + 2), 180));
        } else {
          // All steps done — show CTA after a short pause
          timers.push(setTimeout(() => setShowCTA(true), 400));
        }
      }, elapsed));
    });

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div style={{ height: "100%", background: "#F7F6F3", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: IBM }}>
      <div style={{ width: 440 }}>

        {/* Wordmark */}
        <div style={{ marginBottom: 40 }}>
          <DFWordmark iconSize={32} fontSize={18} />
        </div>

        {/* Card */}
        <div style={{ background: "#FFFFFF", borderRadius: 10, border: "1px solid #E8E8E8", boxShadow: "0 2px 24px rgba(0,0,0,0.08)", overflow: "hidden" }}>
          <div style={{ height: 4, background: LILLY }} />
          <div style={{ padding: "28px 32px 24px" }}>

            {/* Project ID pill */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#F5F5F5", borderRadius: 20, padding: "4px 12px", marginBottom: 16 }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: LILLY }} />
              <span style={{ fontFamily: MONO, fontSize: 10, letterSpacing: "0.06em", color: "#555" }}>LILLYCONNECT-PORTAL-REFRESH</span>
            </div>

            <div style={{ fontFamily: IBM, fontSize: 22, fontWeight: 700, letterSpacing: "-0.3px", color: "#1A1217", marginBottom: 6 }}>Staging workspace</div>
            <div style={{ fontSize: 13, color: "#888", marginBottom: 24 }}>Configuring your workspace. This takes a moment.</div>

            {/* Animated steps */}
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {STEPS.slice(0, shown).map((label, i) => {
                const isDone   = i < done;
                const isActive = i === done && i < STEPS.length;
                const isLast   = i === STEPS.length - 1;

                return (
                  <div key={i} className="step-in" style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    {/* Indicator */}
                    <div style={{ width: 20, height: 20, flexShrink: 0, position: "relative" }}>
                      {isDone ? (
                        // Green check — pops in
                        <div className="check-pop" style={{ width: 20, height: 20, borderRadius: "50%", background: "#107C10", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <Check size={11} color="white" strokeWidth={2.5} />
                        </div>
                      ) : isActive ? (
                        // Spinner
                        <div style={{ width: 20, height: 20, borderRadius: "50%", border: `2px solid rgba(225,37,27,0.2)`, borderTopColor: LILLY, flexShrink: 0 }} className="spin" />
                      ) : (
                        // Pending (shouldn't render since we only show up to `shown`)
                        <div style={{ width: 20, height: 20, borderRadius: "50%", background: "#DDD", flexShrink: 0 }} />
                      )}
                    </div>

                    {/* Label */}
                    <span style={{
                      fontSize: 13,
                      color: isDone ? "#555" : isActive ? (isLast ? LILLY : "#1A1A1A") : "#AAA",
                      fontWeight: isActive && !isLast ? 500 : 400,
                    }}>
                      {label}
                      {isActive && (
                        <span style={{ fontFamily: MONO, fontSize: 11, color: LILLY, marginLeft: 8, letterSpacing: "0.04em" }}>
                          …
                        </span>
                      )}
                    </span>
                  </div>
                );
              })}
            </div>
            {/* CTA — appears after all steps complete */}
            {showCTA && (
              <button
                className="fade-up-1"
                onClick={() => window.dispatchEvent(new CustomEvent("df:next"))}
                style={{
                  marginTop: 28,
                  width: "100%",
                  padding: "12px 0",
                  background: LILLY,
                  color: "white",
                  border: "none",
                  borderRadius: 6,
                  fontFamily: IBM,
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: "pointer",
                  letterSpacing: "0.01em",
                }}
              >
                Open your workspace →
              </button>
            )}
          </div>

          <div style={{ background: "#FAFAFA", borderTop: "1px solid #F0F0F0", padding: "12px 32px" }}>
            <span style={{ fontFamily: MONO, fontSize: 9, letterSpacing: "0.06em", color: "#AAAAAA" }}>LILLY INTELLIGENCE · STAGING</span>
          </div>
        </div>

        {/* Footer */}
        <div style={{ marginTop: 28, fontFamily: MONO, fontSize: 11, color: "#AAAAAA", textAlign: "center" as const }}>
          Workspace configured in 4.2s · Brief parsed · Tensions logged · Skills loading
        </div>
      </div>
    </div>
  );
}
