"use client";

// S14 · Jordan · Track Drift — Claude command center, post-launch Day 30

import ClaudeChrome from "../ClaudeChrome";

const LILLY = "#E1251B";
const IBM   = "'IBM Plex Sans', system-ui, sans-serif";
const INTER  = "'Inter', system-ui, sans-serif";
const MONO   = "'IBM Plex Mono', system-ui, monospace";

const OutcomesCard = () => (
  <div style={{ maxWidth: 580 }}>
    <div style={{ fontFamily: INTER, fontSize: 13, color: "#D0D0D0", lineHeight: "20px", marginBottom: 14 }}>
      Post-launch Day 30 outcomes. Here's what the data is showing:
    </div>

    {/* Metric grid */}
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 14 }}>
      {[
        { label: "NPS SCORE",       value: "42 → 54", sub: "Target 65+ · On track" },
        { label: "REFILL RATE",     value: "+18%",    sub: "Ahead of target" },
        { label: "SUPPORT TICKETS", value: "-31%",    sub: "Support reduction" },
        { label: "SATISFACTION",    value: "4.1/5",   sub: "HCP rating" },
      ].map(m => (
        <div key={m.label} style={{ background: "#1E1E20", borderRadius: 8, padding: "14px 16px" }}>
          <div style={{ fontFamily: MONO, fontSize: 10, fontWeight: 500, letterSpacing: "0.08em", color: "#666", textTransform: "uppercase", marginBottom: 6 }}>{m.label}</div>
          <div style={{ fontFamily: INTER, fontSize: 22, fontWeight: 700, color: "#1A7A3A", lineHeight: "28px", marginBottom: 4 }}>{m.value}</div>
          <div style={{ fontFamily: INTER, fontSize: 11, color: "#888" }}>{m.sub}</div>
        </div>
      ))}
    </div>

    {/* Alert */}
    <div style={{ background: "#1A0A0A", borderLeft: `3px solid ${LILLY}`, borderTopRightRadius: 6, borderBottomRightRadius: 6, padding: "12px 14px", marginBottom: 12 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
        <div style={{ width: 6, height: 6, borderRadius: "50%", background: LILLY }} />
        <span style={{ fontFamily: IBM, fontSize: 11, fontWeight: 700, letterSpacing: "0.06em", color: LILLY }}>ALERT TO JORDAN</span>
      </div>
      <div style={{ fontFamily: IBM, fontSize: 13, fontWeight: 500, color: "#E0E0E0", marginBottom: 4 }}>
        Refill API timeout = lag cause. Flagged Step 12. 3 patterns to Marketplace.
      </div>
      <div style={{ fontFamily: MONO, fontSize: 11, color: "#888" }}>Refill flow — HIPAA consent progressive disclosure → Marketplace skill queued</div>
    </div>

    <div style={{ fontFamily: INTER, fontSize: 13, color: "#D0D0D0", lineHeight: "20px" }}>
      Phase 2 scope is ready: education personalization (5 deferred items). 3 new patterns have been queued to the DesignFlow Marketplace as reusable skills.
    </div>
  </div>
);

export default function S14TrackDrift() {
  return (
    <ClaudeChrome
      url="claude.ai/project/designflow-lillyconnect"
      projectTitle="LillyConnect Track Drift"
      recentChats={["Track drift · Day 30", "Engineering walkthrough", "Handoff package", "QA finalize"]}
      messages={[
        { role: "user",      content: "/track-drift Post-launch Day 30. Surface outcomes against original brief metrics. Flag any risks and queue learnings to Marketplace." },
        { role: "assistant", content: <OutcomesCard /> },
      ]}
      inputPlaceholder="Ask about Phase 2 scope…"
    />
  );
}
