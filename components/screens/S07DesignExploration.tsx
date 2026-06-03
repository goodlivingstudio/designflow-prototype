"use client";

import FigmaChrome from "../FigmaChrome";

const INTER = "'Inter', system-ui, sans-serif";

const Canvas = () => (
  <div style={{ display: "flex", gap: 24, padding: 24 }}>
    {/* Direction A — selected */}
    <div style={{ position: "relative" }}>
      <div style={{ fontFamily: INTER, fontSize: 9, color: "#555", position: "absolute", top: -18, left: 0 }}>Direction A</div>
      <div style={{ width: 220, background: "white", borderRadius: 4, border: "1.5px solid #7B61FF", boxShadow: "0 2px 12px rgba(0,0,0,0.1)", overflow: "hidden" }}>
        <div style={{ padding: "10px 12px", display: "flex", flexDirection: "column", gap: 7 }}>
          <div style={{ height: 14, background: "#E8E8E8", borderRadius: 2, width: "80%" }} />
          <div style={{ height: 8, background: "#F0F0F0", borderRadius: 2 }} />
          <div style={{ height: 8, background: "#F0F0F0", borderRadius: 2, width: "90%" }} />
          <div style={{ height: 36, background: "#EFF3FF", border: "1px solid #D4CCFF", borderRadius: 3 }} />
          <div style={{ height: 8, background: "#F0F0F0", borderRadius: 2, width: "85%" }} />
          <div style={{ height: 8, background: "#F0F0F0", borderRadius: 2, width: "70%" }} />
          <div style={{ height: 28, background: "#F5F5F5", borderRadius: 3 }} />
        </div>
        <div style={{ background: "#0ACF83", borderRadius: 10, padding: "2px 7px", position: "absolute", right: 8, top: -16 }}>
          <span style={{ fontFamily: INTER, fontSize: 9, fontWeight: 700, color: "white" }}>SELECTED</span>
        </div>
      </div>
    </div>
    {/* Direction B */}
    <div style={{ position: "relative" }}>
      <div style={{ fontFamily: INTER, fontSize: 9, color: "#666", position: "absolute", top: -18, left: 0 }}>Direction B</div>
      <div style={{ width: 220, background: "white", borderRadius: 4, border: "1px solid #CCC", boxShadow: "0 2px 8px rgba(0,0,0,0.06)", overflow: "hidden" }}>
        <div style={{ padding: "10px 12px", display: "flex", flexDirection: "column", gap: 7 }}>
          <div style={{ height: 14, background: "#E8E8E8", borderRadius: 2, width: "70%" }} />
          <div style={{ display: "flex", gap: 5 }}>
            <div style={{ flex: 1, height: 46, background: "#F5F5F5", borderRadius: 3 }} />
            <div style={{ flex: 1, height: 46, background: "#F5F5F5", borderRadius: 3 }} />
          </div>
          <div style={{ height: 8, background: "#F0F0F0", borderRadius: 2 }} />
          <div style={{ height: 24, background: "#F5F5F5", borderRadius: 3 }} />
          <div style={{ height: 24, background: "#F5F5F5", borderRadius: 3 }} />
        </div>
      </div>
    </div>
    {/* Direction C */}
    <div style={{ position: "relative" }}>
      <div style={{ fontFamily: INTER, fontSize: 9, color: "#666", position: "absolute", top: -18, left: 0 }}>Direction C</div>
      <div style={{ width: 220, background: "white", borderRadius: 4, border: "1px solid #CCC", boxShadow: "0 2px 8px rgba(0,0,0,0.06)", overflow: "hidden" }}>
        <div style={{ padding: "10px 12px", display: "flex", flexDirection: "column", gap: 6 }}>
          <div style={{ height: 14, background: "#E8E8E8", borderRadius: 2, width: "75%" }} />
          <div style={{ height: 28, background: "rgba(123,97,255,0.12)", borderRadius: 3 }} />
          <div style={{ height: 8, background: "#F0F0F0", borderRadius: 2, width: "90%" }} />
          <div style={{ height: 20, background: "#F5F5F5", borderRadius: 2 }} />
          <div style={{ height: 20, background: "#F5F5F5", borderRadius: 2 }} />
          <div style={{ height: 20, background: "#F5F5F5", borderRadius: 2 }} />
        </div>
      </div>
    </div>
  </div>
);

export default function S07DesignExploration() {
  return (
    <FigmaChrome
      tabLabel="LillyConnect Portal Exploration — Figma"
      url="figma.com/design/LillyConnect-Exploration"
      fileTitle="LillyConnect Portal Exploration"
      collaborators={[
        { initials: "JK", bg: "#E1251B", fg: "white" },
        { initials: "MC", bg: "#7B68EE", fg: "white" },
      ]}
      layers={[
        { name: "Exploration Directions", active: false },
        { name: "Direction A Progressive Disclosure", indent: 1, active: true },
        { name: "Direction B Dashboard First", indent: 1 },
        { name: "Direction C Task First", indent: 1 },
      ]}
      canvas={<Canvas />}
      rightSections={[
        { title: "Frame", items: [["W","1440"],["H","900"],["X","0"],["Y","0"]].map(([l,v]) => ({ label: l, value: v })) },
        {
          title: "",
          items: [],
          alert: { title: "Direction B flagged", body: "Custom LDS component needed before investment — flagged to design system team" },
        },
        { title: "Notes", items: [{ label: "Direction A selected", value: "Progressive disclosure wins" }] },
      ]}
    />
  );
}
