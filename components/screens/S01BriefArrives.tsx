"use client";

// S01 · Jordan · Brief Arrives — Outlook web
// Jordan receives the LillyConnect Portal Refresh brief by email.
// Surface: Outlook (Inter, Microsoft design language)

import MacBrowser from "../MacBrowser";
import { Mail, Calendar, Users, Reply, ArrowRight } from "lucide-react";
import { DFLogoIcon } from "../DFLogo";

const SEGOE = "'Inter', 'Segoe UI', system-ui, sans-serif";

const OutlookIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <rect width="14" height="14" rx="2" fill="#0078D4"/>
    <rect x="2" y="3.5" width="10" height="7" rx="1" fill="white"/>
    <path d="M2 4.5L7 8L12 4.5" stroke="#0078D4" strokeWidth="1.1"/>
  </svg>
);

const emails = [
  { from: "Laree Ross", initials: "LR", color: "#3D52A0", bg: "#E8EBF5", subject: "LillyConnect Portal Refresh — Design Brief", preview: "Jordan — brief is ready. Commercial identified engagement gaps we need to address before Q3. Everything is set up in...", time: "9:14 AM", unread: true },
  { from: "DesignFlow", initials: "DF", color: "#FFFFFF", bg: "#E1251B", subject: "Workspace staged for LillyConnect Portal Refresh", preview: "Brief parsed. LDS audit complete. Skills loaded. Your workspace is ready — open DesignFlow to begin.", time: "9:12 AM", unread: true },
  { from: "Chris Park", initials: "CP", color: "#FFFFFF", bg: "#1E6BB8", subject: "RE: LillyConnect — Q3 NPS targets", preview: "The 42 → 65+ target is aggressive but achievable if we nail the refill flow. Main stakeholder concern is...", time: "Yesterday", unread: false },
  { from: "LDS Team", initials: "LD", color: "#FFFFFF", bg: "#2E7D32", subject: "LDS v3.2 audit results — 2 component gaps", preview: "Medication timeline widget and dosing schedule view are not in the current component library. Flagged for...", time: "Yesterday", unread: false },
  { from: "Compliance", initials: "CO", color: "#FFFFFF", bg: "#6A1B9A", subject: "HIPAA — education personalization requires consent gate", preview: "Any personalized content delivery on LillyConnect will require explicit consent gating per our current...", time: "Mon", unread: false },
];

const openEmail = {
  from: "Laree Ross",
  to: "Jordan Kim",
  time: "Today at 9:14 AM",
  subject: "LillyConnect Portal Refresh — Design Brief",
  body: [
    "Jordan —",
    "Brief is live. Commercial has been tracking a meaningful engagement gap with LillyConnect — NPS is at 42, refill rate is down, and support tickets are up. We need a design-led intervention before Q3.",
    "Key metrics in scope: NPS 42 → 65+, refill rate improvement, support ticket reduction. Three stakeholder groups are involved — PM (Chris Park), Patient Support, and Marketing — and their priorities don't fully align, so expect some tension to navigate.",
    "DesignFlow has already parsed the brief and staged your workspace. LDS v3.2 is loaded, HIPAA constraints are flagged, and the recommended workflow is queued. You should be able to walk in cold and get oriented in minutes.",
    "Maya Chen is on IC design. Jamie Park has LDS. Morgan is on copy.",
    "— L",
  ],
};

export default function S01BriefArrives() {
  return (
    <MacBrowser
      tabIcon={<OutlookIcon />}
      tabLabel="Outlook — Mail"
      url="outlook.cloud.microsoft.com/mail/inbox"
    >
      <div style={{ display: "flex", height: "100%", fontFamily: SEGOE, fontSize: 13 }}>
        {/* Left icon rail */}
        <div style={{ width: 64, background: "#0078D4", display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 14, gap: 6, flexShrink: 0 }}>
          {[
            { icon: Mail,     active: true  },
            { icon: Calendar, active: false },
            { icon: Users,    active: false },
          ].map(({ icon: Icon, active }, i) => (
            <div key={i} style={{ width: 40, height: 40, borderRadius: 4, background: active ? "rgba(255,255,255,0.2)" : "none", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Icon size={18} color="white" strokeWidth={1.5} style={{ opacity: active ? 1 : 0.6 }} />
            </div>
          ))}
        </div>

        {/* Folder nav */}
        <div style={{ width: 200, background: "#FAF9F8", borderRight: "1px solid #EDEBE9", paddingTop: 0, flexShrink: 0 }}>
          <div style={{ padding: "16px 16px 10px", fontSize: 16, fontWeight: 600, color: "#201F1E" }}>Mail</div>
          {[
            { label: "Inbox", count: 2, active: true },
            { label: "Drafts", count: null, active: false },
            { label: "Sent",   count: null, active: false },
            { label: "Archive",count: null, active: false },
          ].map(f => (
            <div key={f.label} data-h="1" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", margin: "1px 8px", padding: "6px 8px", borderRadius: 4, background: f.active ? "#EBF3FB" : "none", cursor: "pointer" }}>
              <span style={{ fontSize: 13, fontWeight: f.active ? 600 : 400, color: f.active ? "#0078D4" : "#201F1E" }}>{f.label}</span>
              {f.count && <span style={{ fontSize: 12, fontWeight: 600, color: "#0078D4" }}>{f.count}</span>}
            </div>
          ))}
        </div>

        {/* Email list */}
        <div style={{ width: 300, background: "#FFFFFF", borderRight: "1px solid #EDEBE9", flexShrink: 0, overflowY: "auto" }}>
          <div style={{ padding: "12px 16px 8px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #EDEBE9" }}>
            <span style={{ fontSize: 13, fontWeight: 600, color: "#201F1E" }}>Inbox</span>
            <span style={{ fontSize: 11, color: "#605E5C" }}>Filter</span>
          </div>
          {emails.map((e, i) => (
            <div key={i} data-h="1" style={{ padding: "11px 14px", borderBottom: "1px solid #F3F2F1", background: i === 0 ? "#EBF3FB" : "white", cursor: "pointer" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 5 }}>
                <div style={{ width: 30, height: 30, borderRadius: "50%", background: e.bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ fontSize: 10, fontWeight: 700, color: e.color }}>{e.initials}</span>
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ fontSize: 13, fontWeight: e.unread ? 700 : 400, color: "#201F1E", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{e.from}</span>
                    <span style={{ fontSize: 11, color: "#605E5C", flexShrink: 0, marginLeft: 6 }}>{e.time}</span>
                  </div>
                </div>
              </div>
              <div style={{ fontSize: 13, fontWeight: e.unread ? 600 : 400, color: "#201F1E", marginBottom: 2, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{e.subject}</div>
              <div style={{ fontSize: 12, color: "#605E5C", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{e.preview}</div>
            </div>
          ))}
        </div>

        {/* Reading pane */}
        <div style={{ flex: 1, background: "#FFFFFF", display: "flex", flexDirection: "column", overflow: "hidden" }}>
          <div style={{ padding: "20px 28px 18px", borderBottom: "1px solid #EDEBE9", flexShrink: 0 }}>
            <div style={{ fontSize: 20, fontWeight: 600, color: "#201F1E", marginBottom: 14 }}>{openEmail.subject}</div>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#E8EBF5", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: "#3D52A0" }}>LR</span>
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#201F1E" }}>{openEmail.from}</div>
                <div style={{ fontSize: 12, color: "#605E5C" }}>To: {openEmail.to} · {openEmail.time}</div>
              </div>
            </div>
          </div>
          <div style={{ flex: 1, overflowY: "auto", padding: "24px 28px" }}>
            <div style={{ maxWidth: 540 }}>
              {openEmail.body.map((para, i) => (
                <p key={i} style={{ fontSize: 14, lineHeight: "22px", color: "#201F1E", marginBottom: i === openEmail.body.length - 1 ? 0 : 14 }}>{para}</p>
              ))}
              {/* DesignFlow add-in card */}
              <div style={{ marginTop: 24, background: "#F8F8F8", border: "1px solid #EDEBE9", borderRadius: 6, padding: "12px 16px", display: "flex", alignItems: "center", gap: 12 }}>
                <DFLogoIcon size={28} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: "'Lexend', system-ui, sans-serif", fontSize: 11, fontWeight: 500, color: "#2D3B4F", marginBottom: 2 }}>DesignFlow</div>
                  <div style={{ fontSize: 12, color: "#605E5C" }}>Brief detected — workspace staged for LillyConnect Portal Refresh</div>
                </div>
                <div
                  data-h="1"
                  onClick={() => window.dispatchEvent(new CustomEvent("df:next"))}
                  style={{ background: "#E1251B", borderRadius: 4, padding: "6px 14px", fontSize: 11, fontWeight: 600, color: "white", cursor: "pointer", whiteSpace: "nowrap" }}
                >Open →</div>
              </div>
            </div>
          </div>
          <div style={{ padding: "14px 28px", borderTop: "1px solid #EDEBE9", display: "flex", gap: 10, flexShrink: 0 }}>
            <button style={{ padding: "7px 18px", background: "#0078D4", color: "white", border: "none", borderRadius: 4, fontSize: 13, fontWeight: 500, cursor: "pointer", fontFamily: SEGOE }}>Reply</button>
            <button style={{ padding: "7px 18px", background: "white", color: "#201F1E", border: "1px solid #D2D0CE", borderRadius: 4, fontSize: 13, cursor: "pointer", fontFamily: SEGOE }}>Forward</button>
          </div>
        </div>
      </div>
    </MacBrowser>
  );
}
