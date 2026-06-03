"use client";

import FigmaChrome from "../FigmaChrome";

const INTER = "'Inter', system-ui, sans-serif";
const LILLY = "#E1251B";

const Canvas = () => (
  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%", position: "relative", background: "#F0F0F0" }}>
    <div style={{ width: 680, background: "white", borderRadius: 8, boxShadow: "0 4px 20px rgba(0,0,0,0.12)", overflow: "hidden" }}>
      {/* Portal header */}
      <div style={{ background: "#4A3FA0", height: 48, display: "flex", alignItems: "center", gap: 12, paddingInline: 20 }}>
        <div style={{ width: 24, height: 24, borderRadius: "50%", background: "#7B68EE", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "white" }} />
        </div>
        <span style={{ fontFamily: INTER, fontSize: 13, fontWeight: 700, color: "white" }}>LillyConnect Portal</span>
        <div style={{ flex: 1 }} />
        {["My Medications","Refills","Support"].map(item => (
          <div key={item} style={{ background: "rgba(255,255,255,0.2)", borderRadius: 6, padding: "3px 12px" }}>
            <span style={{ fontFamily: INTER, fontSize: 11, color: "white" }}>{item}</span>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", height: 392 }}>
        {/* Sidebar */}
        <div style={{ width: 200, background: "#F8F7FF", borderRight: "1px solid #E8E4F0", padding: 14, display: "flex", flexDirection: "column", gap: 4 }}>
          {["Dashboard","Medications","Refill History","Messages","Profile"].map((item, i) => (
            <div key={item} style={{ padding: "7px 10px", borderRadius: 6, background: i === 0 ? "#4A3FA0" : "none" }}>
              <span style={{ fontFamily: INTER, fontSize: 11, fontWeight: i === 0 ? 600 : 400, color: i === 0 ? "white" : "#555" }}>{item}</span>
            </div>
          ))}
        </div>
        {/* Content */}
        <div style={{ flex: 1, padding: 16, display: "flex", flexDirection: "column", gap: 12 }}>
          {/* Stat cards */}
          <div style={{ display: "flex", gap: 10 }}>
            {[
              { label: "Active Prescriptions", value: "3", color: "#4A3FA0", bg: "#F0EEF9", border: "#4A3FA0" },
              { label: "Next Refill",           value: "12d",color: "#0ACF83", bg: "#F0F9F4", border: "#0ACF83" },
              { label: "Messages",              value: "2",  color: "#F24E1E", bg: "#FFF8F0", border: "#F24E1E" },
            ].map(card => (
              <div key={card.label} style={{ flex: 1, background: card.bg, borderLeft: `3px solid ${card.border}`, borderRadius: 8, padding: 12 }}>
                <div style={{ fontFamily: INTER, fontSize: 10, color: "#888", marginBottom: 4 }}>{card.label}</div>
                <div style={{ fontFamily: INTER, fontSize: 22, fontWeight: 700, color: card.color }}>{card.value}</div>
              </div>
            ))}
          </div>
          {/* Medication list */}
          <div style={{ border: "1px solid #EEE", borderRadius: 8, overflow: "hidden" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 14px", borderBottom: "1px solid #EEE" }}>
              <span style={{ fontFamily: INTER, fontSize: 11, fontWeight: 700, color: "#222" }}>Current Medications</span>
              <div style={{ background: "#E8F4FD", border: "1px solid #1ABCFE", borderRadius: 4, padding: "2px 6px" }}>
                <span style={{ fontFamily: INTER, fontSize: 9, fontWeight: 600, color: "#0A8CC4" }}>4.8:1 AA</span>
              </div>
            </div>
            {[
              { name: "Zepbound 10mg",  sub: "Weekly injection · 28 days remaining", color: "#4A3FA0", bg: "#F0EEF9", status: "Active", statusBg: "#E8F4FD", statusFg: "#0A8CC4" },
              { name: "Insulin Lispro", sub: "Daily · Refill in 12 days",             color: "#0ACF83", bg: "#F0F9F4", status: "Active", statusBg: "#F0F9F4", statusFg: "#0A8CC4" },
            ].map(med => (
              <div key={med.name} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 14px", borderBottom: "1px solid #F5F5F5" }}>
                <div style={{ width: 32, height: 32, borderRadius: 6, background: med.bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <div style={{ width: 14, height: 14, border: `1.5px solid ${med.color}`, borderRadius: "50%" }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: INTER, fontSize: 11, fontWeight: 600, color: "#222" }}>{med.name}</div>
                  <div style={{ fontFamily: INTER, fontSize: 9, color: "#888" }}>{med.sub}</div>
                </div>
                <div style={{ background: med.statusBg, borderRadius: 4, padding: "2px 8px" }}>
                  <span style={{ fontFamily: INTER, fontSize: 9, color: med.statusFg }}>{med.status}</span>
                </div>
              </div>
            ))}
          </div>
          {/* Tab order annotation */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, background: "#FFFBF0", border: "1px solid #F24E1E", borderRadius: 6, padding: "7px 10px" }}>
            <div style={{ background: "#F24E1E", borderRadius: 3, padding: "2px 6px" }}>
              <span style={{ fontFamily: INTER, fontSize: 9, fontWeight: 700, color: "white" }}>Tab</span>
            </div>
            <span style={{ fontFamily: INTER, fontSize: 10, color: "#CC4444" }}>Tab order: 1 → Nav → Sidebar → Cards → Med list → Actions</span>
          </div>
        </div>
      </div>
    </div>
    {/* WCAG badge */}
    <div style={{ position: "absolute", right: 40, bottom: 48, background: "#1ABCFE", borderRadius: 4, padding: "3px 8px" }}>
      <span style={{ fontFamily: INTER, fontSize: 10, fontWeight: 700, color: "white" }}>4.8:1 AA ✓</span>
    </div>
  </div>
);

export default function S10FinalizeDesign() {
  return (
    <FigmaChrome
      tabLabel="LillyConnect Portal Final Sign-off v1.0 — Figma"
      url="figma.com/design/LillyConnect-Final"
      fileTitle="LillyConnect Portal Final Sign-off v1.0"
      collaborators={[{ initials: "JK", bg: "#E1251B", fg: "white" }]}
      layers={[
        { name: "Final v1.0",       active: false },
        { name: "Dashboard Web",    indent: 1 },
        { name: "Dashboard Mobile", indent: 1 },
        { name: "Refill Flow",      indent: 1 },
        { name: "WCAG Annotations", indent: 1, badge: { label: "AA", color: "#1ABCFE" } },
      ]}
      canvas={<Canvas />}
      rightSections={[
        {
          title: "Accessibility",
          items: [
            { label: "Contrast",     value: "4.8:1 AA" },
            { label: "WCAG 2.1",     value: "Pass",     color: "#0ACF83" },
            { label: "Section 508",  value: "Pass",     color: "#1ABCFE" },
          ],
        },
        { title: "Frame", items: [{ label: "W", value: "1440" }, { label: "H", value: "810" }] },
      ]}
    />
  );
}
