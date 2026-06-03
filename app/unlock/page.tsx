"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const IBM = "'IBM Plex Sans', system-ui, sans-serif";
const MONO = "'IBM Plex Mono', system-ui, monospace";
const LEXEND = "'Lexend', system-ui, sans-serif";
const LILLY = "#E1251B";

export default function UnlockPage() {
  const [password, setPassword] = useState("");
  const [error,    setError]    = useState(false);
  const [loading,  setLoading]  = useState(false);
  const router = useRouter();

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(false);
    const res = await fetch("/api/unlock", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    if (res.ok) {
      router.replace("/");
    } else {
      setError(true);
      setLoading(false);
    }
  }

  return (
    <div style={{
      height: "100vh", background: "#F7F6F3",
      display: "flex", alignItems: "center", justifyContent: "center",
      fontFamily: IBM,
    }}>
      <div style={{ width: 380 }}>
        {/* Wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 40 }}>
          <div style={{ width: 32, height: 32, borderRadius: 7, background: LILLY, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
              <rect x="2" y="2" width="4" height="4" fill="white"/>
              <rect x="8" y="2" width="4" height="4" fill="rgba(255,255,255,0.5)"/>
              <rect x="2" y="8" width="4" height="4" fill="rgba(255,255,255,0.5)"/>
              <rect x="8" y="8" width="4" height="4" fill="white"/>
            </svg>
          </div>
          <span style={{ fontFamily: LEXEND, fontSize: 18, fontWeight: 700, color: "#1A1A1A", letterSpacing: "-0.2px" }}>
            DesignFlow
          </span>
        </div>

        {/* Card */}
        <div style={{ background: "#FFFFFF", borderRadius: 10, border: "1px solid #E8E8E8", boxShadow: "0 2px 24px rgba(0,0,0,0.08)", overflow: "hidden" }}>
          <div style={{ height: 4, background: LILLY }} />
          <form onSubmit={submit} style={{ padding: "28px 32px 24px" }}>
            <div style={{ fontSize: 20, fontWeight: 700, letterSpacing: "-0.3px", color: "#1A1217", marginBottom: 6 }}>
              Enter password
            </div>
            <div style={{ fontSize: 13, color: "#888", marginBottom: 24 }}>
              This prototype is password protected.
            </div>

            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Password"
              autoFocus
              style={{
                width: "100%", height: 44,
                background: "#F7F7F7",
                border: `1.5px solid ${error ? LILLY : "#E8E8E8"}`,
                borderRadius: 7,
                padding: "0 14px",
                fontFamily: IBM, fontSize: 14,
                color: "#1A1A1A",
                outline: "none",
                boxSizing: "border-box",
                marginBottom: error ? 8 : 16,
              }}
            />

            {error && (
              <div style={{ fontFamily: MONO, fontSize: 11, color: LILLY, marginBottom: 16, letterSpacing: "0.02em" }}>
                Incorrect password — try again
              </div>
            )}

            <button
              type="submit"
              disabled={loading || !password}
              style={{
                width: "100%", height: 44,
                background: loading || !password ? "#CCCCCC" : LILLY,
                color: "white", border: "none", borderRadius: 7,
                fontFamily: IBM, fontSize: 14, fontWeight: 600,
                cursor: loading || !password ? "default" : "pointer",
                transition: "background 150ms",
              }}
            >
              {loading ? "Checking…" : "Enter →"}
            </button>
          </form>
        </div>

        <div style={{ marginTop: 20, fontFamily: MONO, fontSize: 11, color: "#BBBBBB", textAlign: "center" as const }}>
          LILLY INTELLIGENCE · DESIGNFLOW PROTOTYPE
        </div>
      </div>
    </div>
  );
}
