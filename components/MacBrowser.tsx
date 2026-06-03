"use client";

// macOS browser chrome — fills the full container edge-to-edge.
// The shadow lives on the PrototypeShell viewport card, not here.

import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface MacBrowserProps {
  tabIcon?: React.ReactNode;
  tabLabel: string;
  url: string;
  urlColor?: string;
  tabBarDark?: boolean;
  children: React.ReactNode;
}

export default function MacBrowser({
  tabIcon, tabLabel, url,
  tabBarDark = false,
  urlColor, children,
}: MacBrowserProps) {
  const tbg         = tabBarDark ? "#1F1F1F" : "#DEE1E6";
  const urlbg       = tabBarDark ? "#1A1A1A" : "#EFEFEF";
  const chevronColor = tabBarDark ? "#D0D0D0" : "#333333";

  return (
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
      <div style={{ flex: 1, overflow: "hidden", display: "flex", flexDirection: "column" }}>

        {/* Tab bar */}
        <div style={{ height: 38, background: tbg, display: "flex", alignItems: "flex-end", paddingInline: 12, flexShrink: 0 }}>
          {!tabBarDark && (
            <div style={{ display: "flex", gap: 6, paddingBottom: 10, marginRight: 12, flexShrink: 0 }}>
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#FF5F57" }} />
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#FEBC2E" }} />
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#28C840" }} />
            </div>
          )}
          <div style={{ display: "flex", alignItems: "center", gap: 6, background: tabBarDark ? "#2D2D2D" : "#FFFFFF", borderTopLeftRadius: 8, borderTopRightRadius: 8, height: 30, paddingInline: 14, minWidth: 180 }}>
            {tabIcon}
            <span style={{ fontFamily: "'IBM Plex Sans', system-ui, sans-serif", fontSize: 12, color: tabBarDark ? "#D0D0D0" : "#1A1A1A", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: 220 }}>{tabLabel}</span>
            <X size={11} color={tabBarDark ? "#888" : "#999"} style={{ marginLeft: "auto", flexShrink: 0 }} />
          </div>
        </div>

        {/* URL bar */}
        <div style={{ height: 36, background: tabBarDark ? "#292929" : "#F8F8F8", borderBottom: `1px solid ${tabBarDark ? "#222" : "#E0E0E0"}`, display: "flex", alignItems: "center", gap: 6, paddingInline: 12, flexShrink: 0 }}>
          <ChevronLeft size={16} color={chevronColor} style={{ opacity: 0.5 }} strokeWidth={1.8} />
          <ChevronRight size={16} color={chevronColor} style={{ opacity: 0.3 }} strokeWidth={1.8} />
          <div style={{ flex: 1, height: 24, background: urlbg, borderRadius: 12, display: "flex", alignItems: "center", paddingInline: 12 }}>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, lineHeight: "14px", color: urlColor ?? (tabBarDark ? "#888" : "#555") }}>{url}</span>
          </div>
        </div>

        {/* Page content */}
        <div style={{ flex: 1, overflow: "hidden", display: "flex", flexDirection: "column" }}>
          {children}
        </div>
      </div>
    </div>
  );
}
