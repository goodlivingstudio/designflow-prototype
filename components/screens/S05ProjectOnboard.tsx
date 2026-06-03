"use client";
import TeamsMeeting from "../TeamsChrome";
export default function S05ProjectOnboard() {
  return (
    <TeamsMeeting
      title="LillyConnect Portal Refresh Project Kickoff"
      url="teams.microsoft.com/lillyconnect-kickoff"
      duration="0:08:22"
      participants={[
        { initials: "JK", name: "Jordan Kim",  color: "#E1251B", speaking: true, presenting: true },
        { initials: "MC", name: "Maya Chen",   color: "#7B68EE" },
        { initials: "JP", name: "Jamie Park",  color: "#27AE60", label: "Visual + LDS" },
        { initials: "ML", name: "Morgan Lee",  color: "#17A589", label: "Copy" },
      ]}
      sharedPanel={{
        title: "DesignFlow Portal Redesign Workflow",
        children: (
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: "#6264A7", marginTop: 2 }}>
            Step 04 · 14 steps · Skills active
          </div>
        ),
      }}
    />
  );
}
