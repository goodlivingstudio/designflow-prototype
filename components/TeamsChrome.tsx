"use client";

import MacBrowser from "./MacBrowser";
import {
  Bell, MessageSquare, Users, Calendar, FileText,
  Mic, Video, Monitor, Smile, PhoneOff,
} from "lucide-react";
import { DFLogoIcon } from "./DFLogo";

const INTER  = "'Inter', system-ui, sans-serif";
const PURPLE = "#6264A7";

const TeamsIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 18 18" fill="none">
    <rect width="18" height="18" rx="3" fill={PURPLE}/>
    <text x="4" y="13" fontSize="11" fontFamily="Arial" fontWeight="bold" fill="white">T</text>
  </svg>
);

interface Participant {
  initials: string;
  name: string;
  color: string;
  speaking?: boolean;
  presenting?: boolean;
  label?: string;
}

interface TeamsSharedPanel {
  title: string;
  children: React.ReactNode;
}

interface TeamsMeetingProps {
  title: string;
  url: string;
  duration: string;
  participants: Participant[];
  sharedPanel?: TeamsSharedPanel;
}

const sidebarItems = [
  { icon: Bell,         label: "Activity" },
  { icon: MessageSquare,label: "Chat"     },
  { icon: Users,        label: "Teams",  active: true },
  { icon: Calendar,     label: "Calendar" },
  { icon: FileText,     label: "Files"   },
];

const controls = [
  { icon: Mic,      active: false },
  { icon: Video,    active: false },
  { icon: Monitor,  active: true  },
  { icon: Smile,    active: false },
  { icon: PhoneOff, active: false, red: true },
];

export default function TeamsMeeting({ title, url, duration, participants, sharedPanel }: TeamsMeetingProps) {
  return (
    <MacBrowser tabIcon={<TeamsIcon />} tabLabel={`${title} — Microsoft Teams`} url={url} tabBarDark>
      <div style={{ display: "flex", height: "100%", background: "#1B1B1B", fontFamily: INTER }}>
        {/* Left icon rail */}
        <div style={{ width: 68, background: "#201E1F", display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 12, gap: 4, flexShrink: 0 }}>
          <div style={{ width: 36, height: 36, borderRadius: 6, background: PURPLE, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 8 }}>
            <TeamsIcon size={20} />
          </div>
          {sidebarItems.map(({ icon: Icon, label, active }) => (
            <div key={label} style={{ width: 48, height: 48, borderRadius: 6, background: active ? PURPLE : "none", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 3 }}>
              <Icon size={18} color={active ? "white" : "#A9A9A9"} strokeWidth={1.5} />
              <span style={{ fontSize: 9, color: active ? "white" : "#A9A9A9", fontWeight: active ? 600 : 400 }}>{label}</span>
            </div>
          ))}
        </div>

        {/* Main content */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
          {/* Meeting header */}
          <div style={{ height: 52, background: "#1B1B1B", borderBottom: "1px solid #2A2A2A", display: "flex", alignItems: "center", paddingInline: 20, gap: 12, flexShrink: 0 }}>
            <span style={{ fontSize: 15, fontWeight: 600, color: "#FFFFFF" }}>{title}</span>
            <div style={{ width: 1, height: 20, background: "#444" }} />
            <span style={{ fontSize: 13, color: "#A0A0A0" }}>{participants.length} participants</span>
            <div style={{ flex: 1 }} />
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#E74C3C" }} />
              <span style={{ fontFamily: "'Courier New', monospace", fontSize: 13, color: "#E0E0E0" }}>{duration}</span>
            </div>
          </div>

          {/* Layout: compact participant strip on top, screenshare fills the rest */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8, padding: 12, overflow: "hidden" }}>

            {/* 4×1 participant strip */}
            <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
              {participants.map(p => (
                <div key={p.initials} style={{
                  flex: 1, height: 90,
                  background: "#2A2A2A",
                  borderRadius: 8,
                  border: p.speaking ? `2px solid ${PURPLE}` : "2px solid transparent",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  position: "relative", overflow: "hidden",
                }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: p.color, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontSize: 13, fontWeight: 700, color: "white" }}>{p.initials}</span>
                  </div>
                  <div style={{ position: "absolute", bottom: 6, left: 8, display: "flex", alignItems: "center", gap: 4 }}>
                    {p.speaking && <Mic size={8} color="#4CAF50" />}
                    <span style={{ fontSize: 9, fontWeight: 600, color: "rgba(255,255,255,0.8)" }}>{p.name.split(" ")[0]}</span>
                  </div>
                  {p.presenting && (
                    <div style={{ position: "absolute", top: 5, left: 6, background: PURPLE, borderRadius: 3, padding: "1px 5px" }}>
                      <span style={{ fontSize: 8, fontWeight: 700, color: "white" }}>PRESENTING</span>
                    </div>
                  )}
                  {p.speaking && !p.presenting && (
                    <div style={{ position: "absolute", top: 5, right: 6, background: PURPLE, borderRadius: 3, padding: "1px 5px" }}>
                      <span style={{ fontSize: 8, fontWeight: 700, color: "white" }}>SPEAKING</span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Screenshare / shared content — fills remaining height */}
            {sharedPanel ? (
              <div style={{ flex: 1, background: "#111111", borderRadius: 10, border: "1px solid #333", padding: "20px 24px", display: "flex", flexDirection: "column", gap: 12, overflow: "hidden" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
                  <DFLogoIcon size={32} />
                  <div>
                    <div style={{ fontSize: 11, color: "#888" }}>Jordan sharing</div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: "#E0E0E0" }}>{sharedPanel.title}</div>
                  </div>
                </div>
                <div style={{ flex: 1, overflow: "hidden" }}>
                  {sharedPanel.children}
                </div>
              </div>
            ) : (
              /* No screenshare — expand the participant tiles to fill height */
              <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: `repeat(${Math.ceil(participants.length / 2)}, 1fr)`, gap: 8 }}>
                {participants.map(p => (
                  <div key={`${p.initials}-expanded`} style={{ background: "#2A2A2A", borderRadius: 10, border: p.speaking ? `2px solid ${PURPLE}` : "2px solid transparent", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden", minHeight: 0 }}>
                    <div style={{ width: 56, height: 56, borderRadius: "50%", background: p.color, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ fontSize: 20, fontWeight: 700, color: "white" }}>{p.initials}</span>
                    </div>
                    <div style={{ position: "absolute", bottom: 10, left: 10, background: "rgba(0,0,0,0.6)", borderRadius: 4, padding: "3px 8px" }}>
                      <span style={{ fontSize: 11, fontWeight: 600, color: "white" }}>{p.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Controls bar */}
          <div style={{ height: 64, background: "#1B1B1B", borderTop: "1px solid #2A2A2A", display: "flex", alignItems: "center", justifyContent: "center", gap: 12, flexShrink: 0 }}>
            {controls.map(({ icon: Icon, active, red }, i) => (
              <div key={i} style={{ width: 44, height: 44, borderRadius: "50%", background: red ? "#E14040" : active ? PURPLE : "#2A2A2A", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                <Icon size={18} color="white" strokeWidth={1.5} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </MacBrowser>
  );
}
