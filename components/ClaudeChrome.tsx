"use client";

// Claude command-center chrome — Inter throughout (third-party tool).

import MacBrowser from "./MacBrowser";
import { Plus, MoreHorizontal, ArrowRight } from "lucide-react";

const INTER  = "'Inter', system-ui, sans-serif";
const CLAUDE_GRADIENT = "linear-gradient(135deg, oklch(75.1% 0.094 0.152) 0%, oklch(61.9% 0.087 0.126) 100%)";

const ClaudeIcon = ({ size = 14 }: { size?: number }) => (
  <div style={{ width: size, height: size, borderRadius: size / 4, background: CLAUDE_GRADIENT, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
    <div style={{ width: size * 0.55, height: size * 0.55, borderRadius: "50%", background: "rgba(255,255,255,0.9)" }} />
  </div>
);

export interface ClaudeMessage {
  role: "user" | "assistant";
  content: React.ReactNode;
}

interface ClaudeProps {
  url: string;
  projectTitle: string;
  recentChats: string[];
  messages: ClaudeMessage[];
  inputPlaceholder?: string;
}

export default function ClaudeChrome({ url, projectTitle, recentChats, messages, inputPlaceholder = "Type / for skills" }: ClaudeProps) {
  return (
    <MacBrowser tabIcon={<ClaudeIcon />} tabLabel={`Claude · ${projectTitle}`} url={url} tabBarDark>
      <div style={{ display: "flex", height: "100%", background: "#1C1C1E", fontFamily: INTER }}>
        {/* Left sidebar */}
        <div style={{ width: 260, background: "#1C1C1E", borderRight: "1px solid #2A2A2A", display: "flex", flexDirection: "column", flexShrink: 0 }}>
          {/* Mode tabs */}
          <div style={{ display: "flex", gap: 4, padding: "12px 12px 8px" }}>
            {["Chat", "Cowork", "Code"].map((tab, i) => (
              <div key={tab} style={{ flex: 1, height: 28, borderRadius: 6, background: i === 0 ? "#2C2C2E" : "none", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontSize: 11, fontWeight: i === 0 ? 600 : 400, color: i === 0 ? "#FF8C00" : "#666" }}>{tab}</span>
              </div>
            ))}
          </div>

          {/* New chat */}
          <div style={{ margin: "0 12px 8px", height: 32, background: "#2C2C2E", borderRadius: 8, display: "flex", alignItems: "center", paddingInline: 10, gap: 8, cursor: "pointer" }}>
            <Plus size={14} color="#888" strokeWidth={1.5} />
            <span style={{ fontSize: 12, color: "#888" }}>New chat</span>
          </div>

          {/* Recents label */}
          <div style={{ padding: "4px 14px 6px" }}>
            <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.08em", color: "#555", textTransform: "uppercase" as const }}>Recents</span>
          </div>

          {/* Recent chats */}
          {recentChats.map((chat, i) => (
            <div key={chat} style={{ margin: "1px 8px", padding: "8px 10px", borderRadius: 8, background: i === 0 ? "#2C2C2E" : "none", cursor: "pointer" }}>
              <span style={{ fontSize: 12, fontWeight: i === 0 ? 500 : 400, color: i === 0 ? "#E0E0E0" : "#555" }}>{chat}</span>
            </div>
          ))}

          {/* Footer */}
          <div style={{ marginTop: "auto", borderTop: "1px solid #2A2A2A", padding: "10px 12px", display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 30, height: 30, borderRadius: "50%", background: CLAUDE_GRADIENT, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: "white" }}>J</span>
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 12, fontWeight: 500, color: "#D0D0D0", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>Jordan Kim</div>
              <div style={{ fontSize: 10, color: "#555" }}>Max</div>
            </div>
            <MoreHorizontal size={14} color="#555" />
          </div>
        </div>

        {/* Chat area */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
          <div style={{ flex: 1, overflowY: "auto", padding: "24px 32px", display: "flex", flexDirection: "column", gap: 20 }}>
            {messages.map((msg, i) => (
              msg.role === "user" ? (
                <div key={i} style={{ display: "flex", justifyContent: "flex-end" }}>
                  <div style={{ background: "#2C2C2E", borderRadius: "14px 14px 4px 14px", padding: "12px 16px", maxWidth: 520 }}>
                    <span style={{ fontSize: 13, color: "#D0D0D0", lineHeight: "20px" }}>{msg.content}</span>
                  </div>
                </div>
              ) : (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                  <div style={{ width: 28, height: 28, borderRadius: "50%", background: CLAUDE_GRADIENT, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                    <div style={{ width: 14, height: 14, borderRadius: "50%", border: "1.2px solid rgba(255,255,255,0.9)" }} />
                  </div>
                  <div style={{ flex: 1, fontSize: 13, color: "#D0D0D0", lineHeight: "20px" }}>
                    {msg.content}
                  </div>
                </div>
              )
            ))}
          </div>

          {/* Input */}
          <div style={{ flexShrink: 0, padding: "10px 24px 16px" }}>
            <div style={{ height: 44, background: "#2C2C2E", border: "1px solid #3A3A3A", borderRadius: 12, display: "flex", alignItems: "center", paddingInline: 16, gap: 8 }}>
              <span style={{ fontSize: 13, color: "#555", flex: 1 }}>{inputPlaceholder}</span>
              <ArrowRight size={16} color="#555" strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </div>
    </MacBrowser>
  );
}
