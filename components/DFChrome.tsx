"use client";

import React from "react";

// ─── Shared DesignFlow app chrome ───────────────────────────────────────────
// Header: 48px breadcrumb nav
// Sidebar: 280px intelligence panel
// Canvas: flex-1 right column
// All typography: IBM Plex Sans / IBM Plex Mono

interface BreadcrumbItem { label: string; muted?: boolean }

interface SidebarSection {
  label: string;
  dot?: string;
  children: React.ReactNode;
}

interface DFChromeProps {
  breadcrumb: BreadcrumbItem[];
  headerRight?: React.ReactNode;
  sidebar: React.ReactNode;
  canvas: React.ReactNode;
}

export function DFHeader({ breadcrumb, right }: { breadcrumb: BreadcrumbItem[]; right?: React.ReactNode }) {
  return (
    <div style={{
      display: "flex", alignItems: "center",
      height: 48, paddingInline: 24,
      borderBottom: "1px solid #EEEEEE",
      background: "#FFFFFF",
      flexShrink: 0,
    }}>
      {/* Left: workspace label */}
      <div style={{ display: "flex", alignItems: "center", gap: 8, width: 280, flexShrink: 0 }}>
        <span style={{ color: "#CCCCCC", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 13 }}>/</span>
        <span style={{ color: "#888888", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 13 }}>Workspace</span>
      </div>

      {/* Center: breadcrumb */}
      <div style={{ display: "flex", alignItems: "center", gap: 6, flex: 1 }}>
        {breadcrumb.map((item, i) => (
          <React.Fragment key={i}>
            {i > 0 && <span style={{ color: "#CCCCCC", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 13 }}>/</span>}
            <span style={{
              fontFamily: "'IBM Plex Sans', sans-serif",
              fontSize: 13,
              color: item.muted ? "#888888" : "#111111",
              fontWeight: item.muted ? 400 : 500,
            }}>{item.label}</span>
          </React.Fragment>
        ))}
      </div>

      {/* Right */}
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        {right ?? (
          <>
            <span style={{ color: "#888888", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 12 }}>MLR Review</span>
            <span style={{ color: "#888888", fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 12 }}>History</span>
            <Avatar initials="JG" />
          </>
        )}
      </div>
    </div>
  );
}

export function Avatar({ initials }: { initials: string }) {
  return (
    <div style={{
      width: 28, height: 28, borderRadius: "50%",
      background: "#EEEEEE",
      display: "flex", alignItems: "center", justifyContent: "center",
      flexShrink: 0,
    }}>
      <span style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 11, fontWeight: 600, color: "#666666" }}>
        {initials}
      </span>
    </div>
  );
}

export function SidebarSection({ label, dot, children }: SidebarSection) {
  return (
    <div style={{ borderTop: "1px solid #E8E8E8", paddingInline: 20, paddingTop: 20, paddingBottom: 20 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 14 }}>
        {dot && <div style={{ width: 6, height: 6, borderRadius: "50%", background: dot, flexShrink: 0 }} />}
        <span style={{
          fontFamily: "'IBM Plex Sans', sans-serif",
          fontSize: 10, fontWeight: 500,
          letterSpacing: "0.1em", lineHeight: "12px",
          textTransform: "uppercase", color: "#AAAAAA",
        }}>{label}</span>
      </div>
      {children}
    </div>
  );
}

export function MetaRow({ label, value, mono }: { label: string; value: string; mono?: boolean }) {
  return (
    <div style={{ marginBottom: 12 }}>
      <div style={{
        fontFamily: "'IBM Plex Sans', sans-serif",
        fontSize: 10, fontWeight: 500,
        letterSpacing: "0.08em", lineHeight: "12px",
        textTransform: "uppercase", color: "#AAAAAA", marginBottom: 3,
      }}>{label}</div>
      <div style={{
        fontFamily: mono ? "'IBM Plex Mono', monospace" : "'IBM Plex Sans', sans-serif",
        fontSize: 13, lineHeight: "16px", color: "#111111",
      }}>{value}</div>
    </div>
  );
}

export function StatusPill({ status }: { status: "approved" | "locked" | "review" | "draft" | "active" | "flagged" | "needs-signoff" | "enforced" }) {
  const map = {
    approved:       { bg: "#EDF6F0", fg: "#3A8C4E", label: "Approved" },
    locked:         { bg: "#EDF6F0", fg: "#3A8C4E", label: "Locked" },
    enforced:       { bg: "#EDF6F0", fg: "#3A8C4E", label: "Enforced" },
    review:         { bg: "#FBF4DF", fg: "#B07D00", label: "In review" },
    "needs-signoff":{ bg: "#FBF4DF", fg: "#B07D00", label: "Needs sign-off" },
    draft:          { bg: "#F0F0F0", fg: "#888888", label: "Draft" },
    active:         { bg: "#EEF3FA", fg: "#2B5EA7", label: "Active" },
    flagged:        { bg: "#FDECEA", fg: "#C0392B", label: "Flagged" },
  };
  const s = map[status];
  return (
    <div style={{
      display: "inline-flex", alignItems: "center",
      background: s.bg, borderRadius: 3,
      padding: "2px 7px",
      fontSize: 11, fontWeight: 500, lineHeight: "14px",
      fontFamily: "'IBM Plex Sans', sans-serif",
      color: s.fg, whiteSpace: "nowrap",
    }}>{s.label}</div>
  );
}

export function DecisionRow({ label, status, meta }: { label: string; status: "approved" | "locked" | "enforced" | "review" | "needs-signoff" | "draft" | "active" | "flagged"; meta: string }) {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 8 }}>
        <span style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 13, lineHeight: "16px", color: "#111111", flexGrow: 1 }}>{label}</span>
        <StatusPill status={status} />
      </div>
      <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, lineHeight: "14px", color: "#BBBBBB", marginTop: 3, marginBottom: 12 }}>{meta}</div>
    </div>
  );
}

export function ConstraintRow({ label, value, muted }: { label: string; value: string; muted?: boolean }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 9 }}>
      <div style={{ width: 3, height: 3, borderRadius: "50%", background: muted ? "#BBBBBB" : "#111111", flexShrink: 0 }} />
      <span style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 13, lineHeight: "16px", color: muted ? "#888888" : "#111111", flexGrow: 1 }}>{label}</span>
      <span style={{ fontFamily: muted ? "'IBM Plex Sans', sans-serif" : "'IBM Plex Mono', monospace", fontSize: 11, lineHeight: "14px", color: muted ? "#BBBBBB" : "#888888", whiteSpace: "nowrap" }}>{value}</span>
    </div>
  );
}

export function ActivityRow({ initials, text, meta, action }: { initials: string; text: string; meta: string; action?: string }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: 16, paddingBlock: 14, borderBottom: "1px solid #F2F2F2" }}>
      <div style={{
        width: 28, height: 28, borderRadius: "50%", background: "#EEEEEE",
        display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
      }}>
        <span style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 10, fontWeight: 600, color: "#666666" }}>{initials}</span>
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 13, lineHeight: "140%", color: "#111111" }}>{text}</div>
        <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, lineHeight: "14px", color: "#AAAAAA", marginTop: 4 }}>{meta}</div>
      </div>
      {action && (
        <div style={{ paddingTop: 4, fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 11, fontWeight: 500, lineHeight: "14px", color: "#111111", textDecoration: "underline", textDecorationColor: "#CCCCCC", cursor: "pointer", whiteSpace: "nowrap" }}>{action}</div>
      )}
    </div>
  );
}

// Standard sidebar used on most DesignFlow screens
export function StandardSidebar({ projectCode, molecule, indication, market, filing, children }: {
  projectCode: string;
  molecule: string;
  indication: string;
  market: string;
  filing: string;
  children?: React.ReactNode;
}) {
  return (
    <div style={{
      width: 280, flexShrink: 0,
      background: "#F7F7F7",
      borderRight: "1px solid #EEEEEE",
      display: "flex", flexDirection: "column",
      overflow: "hidden",
    }}>
      {/* Project identity */}
      <div style={{ padding: "24px 20px 20px", borderBottom: "1px solid #E8E8E8" }}>
        <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, letterSpacing: "0.06em", lineHeight: "12px", color: "#AAAAAA", marginBottom: 8 }}>{projectCode}</div>
        <div style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 18, fontWeight: 600, letterSpacing: "-0.02em", lineHeight: "120%", color: "#111111" }}>{molecule}</div>
        <div style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 13, lineHeight: "16px", color: "#888888", marginTop: 3 }}>{indication}</div>
      </div>

      <div style={{ overflowY: "auto", flex: 1 }}>
        {/* Brief context */}
        <div style={{ padding: "20px 20px 0" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 16 }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#D3170F", flexShrink: 0 }} />
            <span style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 10, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "#888888" }}>Brief Context</span>
          </div>
          <MetaRow label="Molecule" value={molecule} />
          <MetaRow label="Indication" value={indication} />
          <MetaRow label="Market" value={market} />
          <MetaRow label="Filing" value={filing} mono />
        </div>

        {children}
      </div>
    </div>
  );
}

export function DFChrome({ breadcrumb, headerRight, sidebar, canvas }: DFChromeProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: "#FFFFFF", fontFamily: "'IBM Plex Sans', sans-serif" }}>
      <DFHeader breadcrumb={breadcrumb} right={headerRight} />
      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
        {sidebar}
        {canvas}
      </div>
    </div>
  );
}
