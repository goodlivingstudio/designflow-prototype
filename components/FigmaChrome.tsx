"use client";

import MacBrowser from "./MacBrowser";
import {
  MousePointer2, Frame, PenTool, Type, Square,
  Layers, Package, Share2,
} from "lucide-react";

const INTER  = "'Inter', system-ui, sans-serif";
const FIGMA_PURPLE = "#7B61FF";

// Figma brand logo — kept as SVG since it's a multicolor brand mark
const FigmaLogo = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size * 1.5} viewBox="0 0 38 57" fill="none">
    <path d="M19 28.5C19 25.98 20 23.56 21.78 21.78C23.56 20 25.98 19 28.5 19C31.02 19 33.44 20 35.22 21.78C37 23.56 38 25.98 38 28.5C38 31.02 37 33.44 35.22 35.22C33.44 37 31.02 38 28.5 38C25.98 38 23.56 37 21.78 35.22C20 33.44 19 31.02 19 28.5Z" fill="#1ABCFE"/>
    <path d="M0 47.5C0 44.98 1 42.56 2.78 40.78C4.56 39 6.98 38 9.5 38H19V47.5C19 50.02 18 52.44 16.22 54.22C14.44 56 12.02 57 9.5 57C6.98 57 4.56 56 2.78 54.22C1 52.44 0 50.02 0 47.5Z" fill="#0ACF83"/>
    <path d="M19 0V19H28.5C31.02 19 33.44 18 35.22 16.22C37 14.44 38 12.02 38 9.5C38 6.98 37 4.56 35.22 2.78C33.44 1 31.02 0 28.5 0H19Z" fill="#FF7262"/>
    <path d="M0 9.5C0 12.02 1 14.44 2.78 16.22C4.56 18 6.98 19 9.5 19H19V0H9.5C6.98 0 4.56 1 2.78 2.78C1 4.56 0 6.98 0 9.5Z" fill="#F24E1E"/>
    <path d="M0 28.5C0 31.02 1 33.44 2.78 35.22C4.56 37 6.98 38 9.5 38H19V19H9.5C6.98 19 4.56 20 2.78 21.78C1 23.56 0 25.98 0 28.5Z" fill="#A259FF"/>
  </svg>
);

const tools = [
  { icon: MousePointer2, label: "V" },
  { icon: Frame,         label: "F" },
  { icon: PenTool,       label: "P" },
  { icon: Type,          label: "T", active: true },
  { icon: Square,        label: "R" },
];

interface FigmaLayerItem {
  name: string;
  indent?: number;
  active?: boolean;
  badge?: { label: string; color: string };
}

interface FigmaRightPanelItem { label: string; value: string; color?: string }
interface FigmaRightSection {
  title: string;
  items: FigmaRightPanelItem[];
  alert?: { title: string; body: string };
}

interface FigmaProps {
  tabLabel: string;
  url: string;
  fileTitle: string;
  layers: FigmaLayerItem[];
  canvas: React.ReactNode;
  rightSections: FigmaRightSection[];
  collaborators?: Array<{ initials: string; bg: string; fg: string }>;
}

export default function FigmaChrome({ tabLabel, url, fileTitle, layers, canvas, rightSections, collaborators }: FigmaProps) {
  return (
    <MacBrowser tabIcon={<FigmaLogo size={14} />} tabLabel={tabLabel} url={url}>
      <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
        {/* Figma toolbar */}
        <div style={{ height: 40, background: "#2C2C2C", borderBottom: "1px solid #1A1A1A", display: "flex", alignItems: "center", paddingInline: 12, gap: 8, flexShrink: 0 }}>
          <FigmaLogo size={16} />
          <div style={{ width: 1, height: 20, background: "#444" }} />
          {tools.map(({ icon: Icon, label, active }) => (
            <div key={label} style={{ width: 28, height: 28, borderRadius: 4, background: active ? FIGMA_PURPLE : "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
              <Icon size={14} color={active ? "white" : "#888"} strokeWidth={1.5} />
            </div>
          ))}
          <div style={{ flex: 1, textAlign: "center" }}>
            <span style={{ fontFamily: INTER, fontSize: 12, fontWeight: 500, color: "#AAAAAA" }}>{fileTitle}</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            {collaborators?.map(c => (
              <div key={c.initials} style={{ width: 26, height: 26, borderRadius: "50%", background: c.bg, border: "2px solid #1E1E1E", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontFamily: INTER, fontSize: 9, fontWeight: 700, color: c.fg }}>{c.initials}</span>
              </div>
            ))}
            <div style={{ height: 26, background: FIGMA_PURPLE, borderRadius: 6, padding: "0 12px", display: "flex", alignItems: "center", gap: 6 }}>
              <Share2 size={11} color="white" strokeWidth={2} />
              <span style={{ fontFamily: INTER, fontSize: 11, fontWeight: 600, color: "white" }}>Share</span>
            </div>
          </div>
        </div>

        <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>
          {/* Layers panel */}
          <div style={{ width: 220, background: "#2C2C2C", borderRight: "1px solid #1A1A1A", display: "flex", flexDirection: "column", flexShrink: 0 }}>
            <div style={{ display: "flex", borderBottom: "1px solid #1A1A1A" }}>
              {[{ label: "Layers", icon: Layers }, { label: "Assets", icon: Package }].map(({ label, icon: Icon }, i) => (
                <div key={label} style={{ flex: 1, height: 32, display: "flex", alignItems: "center", justifyContent: "center", gap: 5, borderBottom: i === 0 ? `2px solid ${FIGMA_PURPLE}` : "2px solid transparent" }}>
                  <Icon size={12} color={i === 0 ? "white" : "#666"} strokeWidth={1.5} />
                  <span style={{ fontFamily: INTER, fontSize: 11, fontWeight: i === 0 ? 600 : 400, color: i === 0 ? "white" : "#666" }}>{label}</span>
                </div>
              ))}
            </div>
            <div style={{ flex: 1, overflowY: "auto", paddingBlock: 8 }}>
              {layers.map((layer, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 6, paddingBlock: 4, paddingLeft: 12 + (layer.indent || 0) * 14, paddingRight: 8, background: layer.active ? "rgba(123,97,255,0.15)" : "none", borderLeft: layer.active ? `2px solid ${FIGMA_PURPLE}` : "2px solid transparent" }}>
                  <Frame size={10} color={layer.active ? FIGMA_PURPLE : "#666"} strokeWidth={1.5} />
                  <span style={{ fontFamily: INTER, fontSize: 11, color: layer.active ? "white" : "#AAAAAA", flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{layer.name}</span>
                  {layer.badge && (
                    <div style={{ background: layer.badge.color, borderRadius: 3, padding: "1px 5px" }}>
                      <span style={{ fontFamily: INTER, fontSize: 9, fontWeight: 700, color: "white" }}>{layer.badge.label}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Canvas */}
          <div style={{ flex: 1, background: "#F0F0F0", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
            {canvas}
          </div>

          {/* Right panel */}
          <div style={{ width: 220, background: "#2C2C2C", borderLeft: "1px solid #1A1A1A", display: "flex", flexDirection: "column", flexShrink: 0, overflowY: "auto" }}>
            <div style={{ display: "flex", borderBottom: "1px solid #1A1A1A" }}>
              {["Design", "Prototype"].map((tab, i) => (
                <div key={tab} style={{ flex: 1, height: 32, display: "flex", alignItems: "center", justifyContent: "center", borderBottom: i === 0 ? `2px solid ${FIGMA_PURPLE}` : "2px solid transparent" }}>
                  <span style={{ fontFamily: INTER, fontSize: 11, fontWeight: i === 0 ? 600 : 400, color: i === 0 ? "white" : "#666" }}>{tab}</span>
                </div>
              ))}
            </div>
            {rightSections.map((section, si) => (
              <div key={si} style={{ padding: "12px", borderBottom: "1px solid #1A1A1A" }}>
                {section.title && <div style={{ fontFamily: INTER, fontSize: 10, letterSpacing: "0.06em", textTransform: "uppercase" as const, color: "#888", marginBottom: 8 }}>{section.title}</div>}
                {section.items.map(item => (
                  <div key={item.label} style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                    <span style={{ fontFamily: INTER, fontSize: 11, color: "#888" }}>{item.label}</span>
                    <span style={{ fontFamily: INTER, fontSize: 11, color: item.color ?? "#CCCCCC" }}>{item.value}</span>
                  </div>
                ))}
                {section.alert && (
                  <div style={{ marginTop: 8, background: "#FEF3F2", borderLeft: "3px solid #E1251B", borderRadius: 4, padding: "8px 10px" }}>
                    <div style={{ fontFamily: INTER, fontSize: 10, fontWeight: 700, color: "#E1251B", marginBottom: 3 }}>{section.alert.title}</div>
                    <div style={{ fontFamily: INTER, fontSize: 10, color: "#7A1A1A", lineHeight: "14px" }}>{section.alert.body}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </MacBrowser>
  );
}
