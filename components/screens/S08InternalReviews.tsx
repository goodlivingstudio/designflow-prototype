"use client";

import TeamsMeeting from "../TeamsChrome";

const INTER = "'Inter', system-ui, sans-serif";

const FeedbackPanel = () => (
  <div style={{ fontFamily: INTER }}>
    <div style={{ display: "flex", gap: 10, marginBottom: 8 }}>
      {[
        { n: "3",  lbl: "STAKEHOLDER\nTRACKS", color: "#6264A7" },
        { n: "47", lbl: "FEEDBACK\nITEMS",     color: "#4CAF50" },
        { n: "8",  lbl: "DUPES\nRESOLVED",     color: "#FFA726" },
      ].map(s => (
        <div key={s.n} style={{ flex: 1, background: "#1E1E1E", borderRadius: 6, padding: "8px", textAlign: "center" }}>
          <div style={{ fontSize: 18, fontWeight: 700, color: s.color }}>{s.n}</div>
          <div style={{ fontSize: 9, letterSpacing: "0.05em", color: "#A9A9A9", whiteSpace: "pre" }}>{s.lbl}</div>
        </div>
      ))}
    </div>
    <div style={{ background: "#2A1A1A", border: "1px solid #E1251B", borderRadius: 6, padding: "8px 10px", marginBottom: 8 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
        <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#E1251B" }} />
        <span style={{ fontSize: 11, fontWeight: 700, color: "#E1251B" }}>2 CONFLICTS → JORDAN</span>
      </div>
      <div style={{ fontSize: 11, color: "#C0C0C0" }}>Escalated for adjudication</div>
    </div>
  </div>
);

export default function S08InternalReviews() {
  return (
    <TeamsMeeting
      title="LillyConnect Stakeholder Reviews"
      url="teams.microsoft.com/lillyconnect-stakeholder-reviews"
      duration="1:24:08"
      participants={[
        { initials: "JK", name: "Jordan K",     color: "#E1251B", speaking: true, label: "Host" },
        { initials: "CP", name: "Chris Park",   color: "#1E6BB8" },
        { initials: "SL", name: "Support Lead", color: "#2E7D32" },
        { initials: "MK", name: "Marketing",    color: "#E65100" },
      ]}
      sharedPanel={{
        title: "DesignFlow · Live Feedback Aggregation",
        children: <FeedbackPanel />,
      }}
    />
  );
}
