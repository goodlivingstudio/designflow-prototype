"use client";
import { Check } from "lucide-react";
import { DFLogoIcon } from "./DFLogo";

// Shared DesignFlow marketplace chrome — Cookbook-style, Lilly branded.
// Used for S02, S03, S04.

import MacBrowser from "./MacBrowser";

const IBM  = "'IBM Plex Sans', system-ui, sans-serif";
const MONO = "'IBM Plex Mono', system-ui, monospace";
const LEXEND = "'Lexend', system-ui, sans-serif";
const LILLY = "#E1251B";

interface DFMarketplaceProps {
  url: string;
  activeNav: "Kickoff" | "Library";
  stepLabel: string;
  breadcrumb: string;
  children: React.ReactNode;
}

function DFIcon() {
  return (
    <div style={{ width: 14, height: 14, borderRadius: 3, background: LILLY, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
      <span style={{ fontFamily: LEXEND, fontSize: 8, fontWeight: 700, color: "white", lineHeight: 1 }}>L</span>
    </div>
  );
}

export default function DFMarketplace({ url, activeNav, stepLabel, breadcrumb, children }: DFMarketplaceProps) {
  return (
    <MacBrowser
      tabIcon={<DFIcon />}
      tabLabel={`DesignFlow · ${breadcrumb}`}
      url={url}
    >
      <div style={{ display: "flex", flexDirection: "column", height: "100%", background: "#FFFFFF", fontFamily: IBM }}>
        {/* App header */}
        <div style={{ height: 52, borderBottom: "1px solid #E8E8E8", display: "flex", alignItems: "center", paddingInline: 24, gap: 24, flexShrink: 0 }}>
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginRight: 8 }}>
            <DFLogoIcon size={28} />
            <span style={{ fontFamily: LEXEND, fontSize: 16, fontWeight: 700, color: "#1A1A1A", letterSpacing: "-0.2px" }}>DesignFlow</span>
          </div>

          {/* Nav */}
          {(["Kickoff", "Library"] as const).map(nav => (
            <div key={nav} style={{
              display: "flex", alignItems: "center", height: 52, paddingInline: 14,
              borderBottom: nav === activeNav ? `2px solid ${LILLY}` : "2px solid transparent",
              cursor: "pointer",
            }}>
              <span style={{ fontSize: 13, fontWeight: nav === activeNav ? 600 : 400, color: nav === activeNav ? LILLY : "#888" }}>{nav}</span>
            </div>
          ))}

          <div style={{ flex: 1 }} />

          {/* Step chip */}
          <div style={{ display: "flex", alignItems: "center", gap: 6, background: "#FEF2F2", border: "1px solid #FECACA", borderRadius: 20, padding: "4px 12px" }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: LILLY }} />
            <span style={{ fontFamily: IBM, fontSize: 11, fontWeight: 600, color: LILLY, letterSpacing: "0.04em" }}>{stepLabel}</span>
          </div>

          {/* Avatar */}
          <div style={{ width: 30, height: 30, borderRadius: "50%", background: "#1A1A1A", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: "white" }}>JK</span>
          </div>
        </div>

        {/* Breadcrumb */}
        <div style={{ height: 36, background: "#FAFAFA", borderBottom: "1px solid #F0F0F0", display: "flex", alignItems: "center", paddingInline: 32, flexShrink: 0, gap: 6 }}>
          {breadcrumb.split(" / ").map((part, i, arr) => (
            <span key={i} style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ fontFamily: MONO, fontSize: 11, color: i === arr.length - 1 ? "#1A1A1A" : "#999", fontWeight: i === arr.length - 1 ? 500 : 400 }}>{part}</span>
              {i < arr.length - 1 && <span style={{ fontFamily: IBM, fontSize: 11, color: "#CCC" }}>/</span>}
            </span>
          ))}
        </div>

        {/* Page content */}
        <div style={{ flex: 1, overflow: "hidden" }}>
          {children}
        </div>
      </div>
    </MacBrowser>
  );
}

// ── Reusable skill/recipe card (Cookbook style) ──────────────────────────────

interface SkillCardProps {
  title: string;
  description: string;
  tags: string[];
  selected?: boolean;
  recommended?: boolean;
  step?: string;
  meta?: string;
  onClick?: () => void;
}

export function SkillCard({ title, description, tags, selected, recommended, step, meta }: SkillCardProps) {
  return (
    <div style={{
      border: `${selected ? "2px" : "1px"} solid ${selected ? LILLY : "#E8E8E8"}`,
      borderRadius: 10, padding: "18px 20px",
      background: selected ? "#FEF9F9" : "#FFFFFF",
      position: "relative", cursor: "pointer",
      width: "100%", display: "flex", flexDirection: "column",
    }}>
      {recommended && (
        <div style={{ position: "absolute", top: -1, right: 14, background: LILLY, borderRadius: "0 0 5px 5px", padding: "3px 9px" }}>
          <span style={{ fontSize: 10, fontWeight: 700, color: "white", letterSpacing: "0.04em" }}>RECOMMENDED</span>
        </div>
      )}
      <div style={{ marginBottom: 8 }}>
        <div style={{ fontSize: 15, fontWeight: 700, color: "#1A1A1A", marginBottom: 2 }}>{title}</div>
        {step && <div style={{ fontSize: 11, fontWeight: 600, color: LILLY }}>{step}</div>}
      </div>
      <div style={{ fontSize: 12, color: "#666", lineHeight: "18px", marginBottom: 14, flex: 1 }}>{description}</div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {tags.map(tag => (
          <span key={tag} style={{ fontFamily: IBM, fontSize: 11, fontWeight: 600, color: selected ? LILLY : "#555", background: selected ? "#FEF2F2" : "#F0F0F0", borderRadius: 20, padding: "2px 9px", border: selected ? `1px solid ${LILLY}` : "1px solid #E8E8E8" }}>{tag}</span>
        ))}
      </div>
      {selected && (
        <div style={{ marginTop: 14, borderTop: `1px solid #FECACA`, paddingTop: 10, display: "flex", alignItems: "center", gap: 6 }}>
          <div style={{ width: 13, height: 13, borderRadius: "50%", background: LILLY, display: "flex", alignItems: "center", justifyContent: "center" }}><Check size={8} color="white" strokeWidth={3} /></div>
          <span style={{ fontSize: 11, fontWeight: 700, color: LILLY }}>Selected</span>
        </div>
      )}
    </div>
  );
}

// ── Skills loading sidebar ────────────────────────────────────────────────────

interface SkillsStatusProps {
  skills: Array<{ label: string; status: "ready" | "loading" | "gap" }>;
  gates?: Array<{ step: string; label: string; sub: string }>;
  cta?: React.ReactNode;
}

export function SkillsStatus({ skills, gates, cta }: SkillsStatusProps) {
  return (
    <div style={{ width: 280, flexShrink: 0, borderLeft: "1px solid #EEEEEE", background: "#FFFFFF", display: "flex", flexDirection: "column", overflow: "hidden" }}>
      <div style={{ padding: "16px 20px 12px", borderBottom: "1px solid #F0F0F0" }}>
        <div style={{ fontFamily: IBM, fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: "#1A1A1A", textTransform: "uppercase" }}>Skills Loading</div>
      </div>
      <div style={{ padding: "14px 20px", display: "flex", flexDirection: "column", gap: 10 }}>
        {skills.map((s, i) => (
          <div key={s.label} className="step-in" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              {s.status === "loading"
                ? <div style={{ width: 14, height: 14, borderRadius: "50%", border: "2px solid rgba(245,158,11,0.2)", borderTopColor: "#F59E0B", flexShrink: 0 }} className="spin" />
                : <div className="check-pop" style={{ width: 14, height: 14, borderRadius: "50%", background: "#22C55E", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Check size={8} color="white" strokeWidth={3} />
                  </div>
              }
              <span style={{ fontSize: 13, color: "#1A1A1A" }}>{s.label}</span>
            </div>
            <span style={{ fontSize: 11, fontWeight: 600, color: s.status === "ready" ? "#22C55E" : "#F59E0B" }}>
              {s.status === "ready" ? "Ready" : "Loading…"}
            </span>
          </div>
        ))}
      </div>
      {gates && (
        <>
          <div className="fade-up-1" style={{ padding: "12px 20px 10px", borderTop: "1px solid #F0F0F0" }}>
            <div style={{ fontFamily: IBM, fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: "#1A1A1A", textTransform: "uppercase", marginBottom: 10 }}>Phase Gates</div>
            {gates.map(g => (
              <div key={g.label} className="step-in" style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                <div style={{ width: 28, height: 28, borderRadius: 6, background: "#FEF2F2", border: "1px solid #FECACA", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ fontSize: 10, fontWeight: 700, color: LILLY }}>{g.step}</span>
                </div>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: "#1A1A1A" }}>{g.label}</div>
                  <div style={{ fontSize: 10, color: "#888" }}>{g.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
      {cta && (
        <div style={{ marginTop: "auto", padding: "16px 20px", borderTop: "1px solid #F0F0F0" }}>
          {cta}
        </div>
      )}
    </div>
  );
}
