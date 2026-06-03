"use client";

import TeamsMeeting from "../TeamsChrome";

const INTER = "'Inter', system-ui, sans-serif";

const PackagePanel = () => (
  <div style={{ fontFamily: INTER }}>
    <div style={{ display: "flex", gap: 10, marginBottom: 8 }}>
      {[
        { label: "Specs",      value: "127",          color: "#E0E0E0" },
        { label: "Decisions",  value: "34 answered",  color: "#4CAF50" },
      ].map(s => (
        <div key={s.label} style={{ flex: 1, background: "#1A1A1A", borderRadius: 6, padding: "8px 12px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 12, color: "#A9A9A9" }}>{s.label}</span>
          <span style={{ fontSize: 14, fontWeight: 700, color: s.color }}>{s.value}</span>
        </div>
      ))}
    </div>
    <div style={{ background: "#2A1A1A", border: "1px solid #4A2A2A", borderRadius: 6, padding: "8px 10px" }}>
      <div style={{ fontSize: 11, fontWeight: 600, color: "#E0A0A0", marginBottom: 4 }}>Risks Flagged</div>
      {["Schedule timing", "Refill API timeout"].map(r => (
        <div key={r} style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#E1251B", flexShrink: 0 }} />
          <span style={{ fontSize: 11, color: "#E0A0A0" }}>{r}</span>
        </div>
      ))}
    </div>
  </div>
);

export default function S12WalkThrough() {
  return (
    <TeamsMeeting
      title="LillyConnect Engineering Walkthrough"
      url="teams.microsoft.com/lillyconnect-engineering-walkthrough"
      duration="2:14:33"
      participants={[
        { initials: "JK", name: "Jordan",       color: "#E1251B", speaking: true, label: "Host" },
        { initials: "LE", name: "Lead Engineer", color: "#1565C0" },
        { initials: "BE", name: "Backend",       color: "#2E7D32" },
        { initials: "QA", name: "QA Lead",       color: "#E65100" },
      ]}
      sharedPanel={{
        title: "DesignFlow Handoff Package",
        children: <PackagePanel />,
      }}
    />
  );
}
