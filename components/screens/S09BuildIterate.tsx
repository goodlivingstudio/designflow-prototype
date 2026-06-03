"use client";

import FigmaChrome from "../FigmaChrome";

const INTER = "'Inter', system-ui, sans-serif";
const LILLY = "#E1251B";

const Canvas = () => (
  <div style={{ display: "flex", flexDirection: "column", width: "100%", height: "100%", alignItems: "center", justifyContent: "center", position: "relative", padding: 20 }}>
    <div style={{ fontFamily: INTER, fontSize: 10, color: "#888", position: "absolute", top: 8, left: 12 }}>Dashboard Frame — Build v0.4</div>

    {/* LillyConnect app mockup */}
    <div style={{ width: 640, background: "white", borderRadius: 8, boxShadow: "0 2px 20px rgba(0,0,0,0.12)", overflow: "hidden", border: "1.5px solid #7B61FF" }}>
      {/* App header */}
      <div style={{ background: LILLY, height: 48, display: "flex", alignItems: "center", paddingInline: 20, gap: 16 }}>
        <span style={{ fontFamily: INTER, fontSize: 14, fontWeight: 700, color: "white", letterSpacing: "0.02em" }}>LillyConnect</span>
        <div style={{ flex: 1 }} />
        {["Dashboard","Medications","Education","Support"].map(item => (
          <span key={item} style={{ fontFamily: INTER, fontSize: 11, color: "rgba(255,255,255,0.8)" }}>{item}</span>
        ))}
        <div style={{ width: 28, height: 28, borderRadius: "50%", background: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontFamily: INTER, fontSize: 10, fontWeight: 700, color: LILLY }}>JK</span>
        </div>
      </div>
      {/* Stat cards */}
      <div style={{ display: "flex", gap: 12, padding: 16 }}>
        {[
          { label: "NEXT REFILL",  value: "Mounjaro",  sub: "Due in 3 days",    subColor: LILLY,      border: LILLY },
          { label: "ADHERENCE",    value: "94%",        sub: "On track",         subColor: "#10B981",  border: "#10B981" },
          { label: "EDUCATION",    value: "Paused",     sub: "HIPAA gate",       subColor: "#F59E0B",  border: "#F59E0B" },
        ].map(card => (
          <div key={card.label} style={{ flex: 1, background: "#F8F9FA", borderLeft: `3px solid ${card.border}`, borderRadius: 6, padding: 12 }}>
            <div style={{ fontFamily: INTER, fontSize: 10, color: "#666", marginBottom: 4 }}>{card.label}</div>
            <div style={{ fontFamily: INTER, fontSize: 16, fontWeight: 700, color: "#1A1A1A" }}>{card.value}</div>
            <div style={{ fontFamily: INTER, fontSize: 11, fontWeight: 600, color: card.subColor, marginTop: 2 }}>{card.sub}</div>
          </div>
        ))}
      </div>
      {/* Medication timeline placeholder */}
      <div style={{ margin: "0 16px 16px", background: "#FFF8F8", border: `2px dashed ${LILLY}`, borderRadius: 6, height: 80, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 4 }}>
        <span style={{ fontFamily: INTER, fontSize: 11, fontWeight: 600, color: LILLY }}>Medication Timeline</span>
        <span style={{ fontFamily: INTER, fontSize: 10, color: "#999" }}>Frame in progress — Sprint 3</span>
      </div>
    </div>

    {/* PM comment bubble */}
    <div style={{ position: "absolute", right: 32, bottom: 40, background: "white", borderRadius: 8, boxShadow: "0 2px 12px rgba(0,0,0,0.15)", padding: "8px 12px", display: "flex", gap: 8, maxWidth: 180 }}>
      <div style={{ width: 20, height: 20, borderRadius: "50%", background: "#7B68EE", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        <span style={{ fontFamily: INTER, fontSize: 8, fontWeight: 700, color: "white" }}>CP</span>
      </div>
      <div>
        <div style={{ fontFamily: INTER, fontSize: 9, fontWeight: 700, color: "#333", marginBottom: 2 }}>Chris P.</div>
        <div style={{ fontFamily: INTER, fontSize: 9, color: "#555", lineHeight: "13px" }}>Refill flow confirmed ✓</div>
      </div>
    </div>
  </div>
);

export default function S09BuildIterate() {
  return (
    <FigmaChrome
      tabLabel="LillyConnect Portal Build v0.4 — Figma"
      url="figma.com/design/LillyConnect-Build"
      fileTitle="LillyConnect Portal Build v0.4"
      collaborators={[
        { initials: "JK", bg: "#E1251B", fg: "white" },
        { initials: "CP", bg: "#7B68EE", fg: "white" },
      ]}
      layers={[
        { name: "Build v0.4" },
        { name: "Dashboard Frame", indent: 1 },
        { name: "Refill Flow", indent: 2, active: true },
        { name: "Schedule View", indent: 2 },
        { name: "Education Hub", indent: 2, badge: { label: "PAUSED", color: "#F59E0B" } },
      ]}
      canvas={<Canvas />}
      rightSections={[
        { title: "Fill", items: [{ label: "#E1251B", value: "100%" }] },
        {
          title: "",
          items: [],
          alert: { title: "HIPAA", body: "Education content consent gate required" },
        },
        { title: "Frame", items: [{ label: "W", value: "1440" }, { label: "H", value: "900" }] },
      ]}
    />
  );
}
