"use client";

import FigmaChrome from "../FigmaChrome";
import { CheckCircle } from "lucide-react";

const INTER = "'Inter', system-ui, sans-serif";

const Canvas = () => (
  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "center", width: "100%", height: "100%", padding: "40px 20px 20px", overflow: "hidden" }}>
    <div style={{ width: 700, background: "white", borderRadius: 8, boxShadow: "0 4px 20px rgba(0,0,0,0.1)", overflow: "hidden" }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 16px", borderBottom: "1px solid #EEE" }}>
        <div style={{ width: 120, height: 18, background: "#7B61FF", borderRadius: 3 }} />
        <div style={{ width: 1, height: 24, background: "#E8E8E8" }} />
        <span style={{ fontFamily: INTER, fontSize: 12, fontWeight: 500, color: "#444" }}>LillyConnect Portal</span>
        <div style={{ flex: 1 }} />
        <div style={{ background: "#7B61FF", borderRadius: 6, padding: "4px 12px" }}>
          <span style={{ fontFamily: INTER, fontSize: 11, fontWeight: 600, color: "white" }}>QA Triage</span>
        </div>
        <div style={{ width: 26, height: 26, borderRadius: "50%", background: "#E1251B", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontFamily: INTER, fontSize: 10, fontWeight: 700, color: "white" }}>JK</span>
        </div>
      </div>
      {/* Summary cards */}
      <div style={{ display: "flex", gap: 10, padding: "12px 14px" }}>
        {[
          { label: "Critical", value: "4",  sub: "Fixed ✓",  bg: "#F0FFF4", bdr: "#BBF7D0", fg: "#15803D" },
          { label: "Phase 2",  value: "8",  sub: "Deferred", bg: "#FFFBEB", bdr: "#FDE68A", fg: "#B45309" },
          { label: "Cosmetic", value: "4",  sub: "Accepted", bg: "#F8FAFC", bdr: "#E2E8F0", fg: "#475569" },
          { label: "Total",    value: "16", sub: "Deviations",bg: "#F5F3FF", bdr: "#DDD6FE", fg: "#4C1D95" },
        ].map(card => (
          <div key={card.label} style={{ flex: 1, background: card.bg, border: `1px solid ${card.bdr}`, borderRadius: 8, padding: 10 }}>
            <div style={{ fontFamily: INTER, fontSize: 10, fontWeight: 700, letterSpacing: "0.05em", color: card.fg, textTransform: "uppercase", marginBottom: 4 }}>{card.label}</div>
            <div style={{ fontFamily: INTER, fontSize: 20, fontWeight: 700, color: card.fg, lineHeight: "26px" }}>{card.value}</div>
            <div style={{ fontFamily: INTER, fontSize: 10, color: card.fg }}>{card.sub}</div>
          </div>
        ))}
      </div>
      {/* Issue list */}
      <div style={{ padding: "0 14px 12px", display: "flex", flexDirection: "column", gap: 6 }}>
        {[
          { label: "Refill button focus ring missing",     severity: "Critical", color: "#22C55E", badge: "Critical · Fixed",   badgeBg: "#DCFCE7", badgeFg: "#15803D" },
          { label: "Color contrast ratio 3.1:1 on alert", severity: "Critical", color: "#22C55E", badge: "Critical · Fixed",   badgeBg: "#DCFCE7", badgeFg: "#15803D" },
          { label: "Mobile tap target 36px (req. 44px)",  severity: "Phase 2",  color: "#F59E0B", badge: "Phase 2",            badgeBg: "#FEF9C3", badgeFg: "#A16207" },
          { label: "Icon stroke weight inconsistency",    severity: "Cosmetic", color: "#94A3B8", badge: "Cosmetic · Accepted", badgeBg: "#F1F5F9", badgeFg: "#64748B" },
        ].map(issue => (
          <div key={issue.label} style={{ display: "flex", alignItems: "center", gap: 10, padding: "9px 12px", background: "white", border: "1px solid #E2E8F0", borderRadius: 6 }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: issue.color, flexShrink: 0 }} />
            <span style={{ fontFamily: INTER, fontSize: 11, color: "#333", flex: 1 }}>{issue.label}</span>
            <div style={{ background: issue.badgeBg, borderRadius: 10, padding: "2px 7px" }}>
              <span style={{ fontFamily: INTER, fontSize: 10, fontWeight: 600, color: issue.badgeFg }}>{issue.badge}</span>
            </div>
          </div>
        ))}
      </div>
      {/* Ship banner */}
      <div style={{ display: "flex", alignItems: "center", gap: 16, background: "#16A34A", padding: "16px 24px" }}>
        <CheckCircle size={26} color="white" strokeWidth={2} />
        <div>
          <div style={{ fontFamily: INTER, fontSize: 17, fontWeight: 800, letterSpacing: "0.02em", color: "white" }}>GO FOR Q3 2026</div>
          <div style={{ fontFamily: INTER, fontSize: 11, color: "#BBF7D0" }}>All critical issues resolved · Ship-ready status confirmed</div>
        </div>
        <div style={{ marginLeft: "auto", background: "white", borderRadius: 8, padding: "7px 16px" }}>
          <span style={{ fontFamily: INTER, fontSize: 12, fontWeight: 700, color: "#16A34A" }}>SHIP IT</span>
        </div>
      </div>
    </div>
  </div>
);

export default function S13QACloseout() {
  return (
    <FigmaChrome
      tabLabel="LillyConnect Portal QA Triage — Figma"
      url="figma.com/design/LillyConnect-QA"
      fileTitle="LillyConnect Portal QA Triage"
      collaborators={[{ initials: "JK", bg: "#E1251B", fg: "white" }]}
      layers={[
        { name: "QA Results" },
        { name: "Critical",  indent: 1, badge: { label: "4 fixed",  color: "#22C55E" } },
        { name: "Phase 2",   indent: 1, badge: { label: "8",        color: "#F59E0B" } },
        { name: "Cosmetic",  indent: 1, badge: { label: "4 accepted",color: "#94A3B8" } },
        { name: "Dashboard Frame",    indent: 1 },
        { name: "Refill CTA Module",  indent: 1 },
        { name: "Ship Banner",        indent: 1, active: true },
      ]}
      canvas={<Canvas />}
      rightSections={[
        { title: "QA Issue Detail", items: [
          { label: "Component",   value: "CTA/Button/Primary" },
          { label: "Spec Ref",    value: "WCAG 2.4.7" },
          { label: "Status",      value: "Fixed", color: "#22C55E" },
        ]},
      ]}
    />
  );
}
