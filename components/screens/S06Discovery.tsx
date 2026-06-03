"use client";

// S06 · Jordan · Discovery — Claude command center
// DesignFlow discovery skill surfaces synthesis, nav options, HIPAA flag.

import ClaudeChrome from "../ClaudeChrome";
import { Check, AlertTriangle } from "lucide-react";

const LILLY = "#E1251B";

const SynthesisCard = () => (
  <div style={{ maxWidth: 540, display: "flex", flexDirection: "column", gap: 10 }}>
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 13, color: "#D0D0D0", lineHeight: "20px" }}>
      Discovery synthesis ready. Here's what Maya's research found:
    </div>
    {/* Synthesis block */}
    <div style={{ background: "#252527", borderLeft: "4px solid #2D3B4F", borderTopRightRadius: 8, borderBottomRightRadius: 8, padding: "16px" }}>
      <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, fontWeight: 600, letterSpacing: "0.06em", color: "#2D3B4F", marginBottom: 14, textTransform: "uppercase" }}>Synthesis Ready</div>
      {[
        { icon: "📋", label: "Interview synthesis",    sub: "847 verbatims · themes extracted",    badge: "READY",    badgeBg: "#EEF2FF", badgeFg: "#4B6BFF" },
        { icon: "🗺️", label: "Nav options",           sub: "3 directions evaluated",              badge: "A · B · C", badgeBg: "#2D3B4F", badgeFg: "white" },
      ].map(row => (
        <div key={row.label} style={{ display: "flex", alignItems: "center", gap: 10, paddingBlock: 8, borderBottom: "1px solid #333" }}>
          <div style={{ width: 28, height: 28, borderRadius: 6, background: "#2D3B4F", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <div style={{ width: 12, height: 12, background: "rgba(255,255,255,0.3)", borderRadius: 2 }} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 12, fontWeight: 600, color: "#E0E0E0" }}>{row.label}</div>
            <div style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 11, color: "#888" }}>{row.sub}</div>
          </div>
          <div style={{ background: row.badgeBg, borderRadius: 4, padding: "2px 8px" }}>
            <span style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 10, fontWeight: 700, color: row.badgeFg }}>{row.badge}</span>
          </div>
        </div>
      ))}
      {/* HIPAA flag */}
      <div style={{ marginTop: 8, background: "#FEF9F9", borderLeft: `2px solid ${LILLY}`, borderRadius: 4, padding: "8px 10px" }}>
        <div style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 11, fontWeight: 700, color: LILLY, marginBottom: 2 }}>HIPAA FLAG</div>
        <div style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 11, color: "#666", lineHeight: "16px" }}>
          Education personalization requires consent gate · flagged Step 07
        </div>
      </div>
      {/* CTA */}
      <div style={{ marginTop: 14 }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: LILLY, borderRadius: 6, padding: "10px 16px", cursor: "pointer" }}>
          <Check size={14} color="white" strokeWidth={2.5} />
          <span style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 12, fontWeight: 700, color: "white", letterSpacing: "0.04em" }}>GREEN-LIGHT JOURNEY TO PM</span>
        </div>
      </div>
    </div>
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 13, color: "#D0D0D0", lineHeight: "20px" }}>
      Maya's research feeds directly into your exploration. Run <span style={{ color: LILLY, fontWeight: 600 }}>/start-exploration</span> when ready.
    </div>
  </div>
);

export default function S06Discovery() {
  return (
    <ClaudeChrome
      url="claude.ai/project/designflow-lillyconnect"
      projectTitle="LillyConnect Discovery"
      recentChats={["LillyConnect discovery", "Stakeholder tensions", "LDS gap analysis", "Consent flow audit"]}
      messages={[
        { role: "user",      content: "/discovery-synthesis Brief + Maya research attached. Surface key findings and flag any blockers before I move to design exploration." },
        { role: "assistant", content: <SynthesisCard /> },
      ]}
      inputPlaceholder="/start-exploration"
    />
  );
}
