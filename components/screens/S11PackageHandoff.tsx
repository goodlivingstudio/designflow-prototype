"use client";

// S11 · Jordan · Package + Handoff — Claude command center
// DesignFlow skill auto-generates the handoff package inside Claude.

import ClaudeChrome from "../ClaudeChrome";
import { CheckCircle } from "lucide-react";

const LILLY = "#E1251B";
const IBM   = "'IBM Plex Sans', system-ui, sans-serif";
const INTER = "'Inter', system-ui, sans-serif";

const HandoffPackage = () => (
  <div style={{ maxWidth: 560 }}>
    <div style={{ fontFamily: INTER, fontSize: 13, color: "#D0D0D0", lineHeight: "20px", marginBottom: 12 }}>
      Handoff package generated. Here's what shipped to engineering:
    </div>

    {/* 2×2 package cards */}
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 14 }}>
      {[
        { title: "Annotated Spec Doc",  value: "127 specs generated",   color: "#22C55E" },
        { title: "LDS Component Map",   value: "Mapped to LDS tokens",  color: "#22C55E" },
        { title: "HIPAA Handling Guide",value: "Auto-included",          color: "#22C55E" },
        { title: "WCAG QA Checklist",   value: "All criteria passed",    color: "#22C55E" },
      ].map(card => (
        <div key={card.title} style={{ border: "1px solid #3A3A3A", borderRadius: 7, padding: "12px 14px" }}>
          <div style={{ fontFamily: INTER, fontSize: 12, fontWeight: 600, color: "#E0E0E0", marginBottom: 6 }}>{card.title}</div>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <CheckCircle size={13} color="#22C55E" strokeWidth={2} fill="none" />
            <span style={{ fontFamily: INTER, fontSize: 11, fontWeight: 600, color: card.color }}>{card.value}</span>
          </div>
        </div>
      ))}
    </div>

    {/* Ship confirmation */}
    <div style={{ display: "flex", alignItems: "center", gap: 12, background: "#16A34A", borderRadius: 8, padding: "14px 20px" }}>
      <CheckCircle size={24} color="white" strokeWidth={2} />
      <div>
        <div style={{ fontFamily: IBM, fontSize: 15, fontWeight: 800, letterSpacing: "0.02em", color: "white" }}>PACKAGE SHIPPED TO ENG</div>
        <div style={{ fontFamily: INTER, fontSize: 11, color: "#BBF7D0", marginTop: 2 }}>Delivered 2026-06-02 · Engineering notified via Slack</div>
      </div>
    </div>
  </div>
);

export default function S11PackageHandoff() {
  return (
    <ClaudeChrome
      url="claude.ai/project/designflow-lillyconnect"
      projectTitle="LillyConnect Handoff"
      recentChats={["LillyConnect handoff", "QA finalize", "Build v0.4 review", "Discovery synthesis"]}
      messages={[
        { role: "user",      content: "/package-handoff Generate the full engineering handoff package from the decision log and Figma file. Include HIPAA guide and WCAG checklist." },
        { role: "assistant", content: <HandoffPackage /> },
      ]}
      inputPlaceholder="Ask about the handoff package…"
    />
  );
}
