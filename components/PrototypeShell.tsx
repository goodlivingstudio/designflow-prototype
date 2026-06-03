"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, Info, X, Zap } from "lucide-react";
import { JORDAN_SCREENS, SURFACE_LABELS, SURFACE_COLORS } from "./screens/types";
import { ANNOTATIONS } from "./screens/annotations";

import S01BriefArrives      from "./screens/S01BriefArrives";
import IntARouting           from "./screens/IntARouting";
import S02GettingOriented    from "./screens/S02GettingOriented";
import S03NewProjectSetup    from "./screens/S03NewProjectSetup";
import S04SelectWorkflow     from "./screens/S04SelectWorkflow";
import S05ProjectOnboard     from "./screens/S05ProjectOnboard";
import S06Discovery          from "./screens/S06Discovery";
import S07DesignExploration  from "./screens/S07DesignExploration";
import S08InternalReviews    from "./screens/S08InternalReviews";
import S09BuildIterate       from "./screens/S09BuildIterate";
import S10FinalizeDesign     from "./screens/S10FinalizeDesign";
import S11PackageHandoff     from "./screens/S11PackageHandoff";
import S12WalkThrough        from "./screens/S12WalkThrough";
import S13QACloseout         from "./screens/S13QACloseout";
import S14TrackDrift         from "./screens/S14TrackDrift";

const SCREEN_COMPONENTS: Record<string, React.ComponentType> = {
  "s01-brief-arrives":      S01BriefArrives,
  "int-a-routing":          IntARouting,
  "s02-getting-oriented":   S02GettingOriented,
  "s03-new-project-setup":  S03NewProjectSetup,
  "s04-select-workflow":    S04SelectWorkflow,
  "s05-project-onboard":    S05ProjectOnboard,
  "s06-discovery":          S06Discovery,
  "s07-design-exploration": S07DesignExploration,
  "s08-internal-reviews":   S08InternalReviews,
  "s09-build-iterate":      S09BuildIterate,
  "s10-finalize-design":    S10FinalizeDesign,
  "s11-package-handoff":    S11PackageHandoff,
  "s12-walk-through":       S12WalkThrough,
  "s13-qa-closeout":        S13QACloseout,
  "s14-track-drift":        S14TrackDrift,
};

const IBM  = "'IBM Plex Sans', system-ui, sans-serif";
const MONO = "'IBM Plex Mono', system-ui, monospace";
const LILLY = "#E1251B";

export default function PrototypeShell() {
  const screens = JORDAN_SCREENS;
  const [current, setCurrent]     = useState(0);
  const [scale, setScale]         = useState(1);
  const [panelOpen, setPanelOpen] = useState(false);
  const [screenKey, setScreenKey] = useState(0);  // triggers re-mount for enter anim
  const [panelKey, setPanelKey]   = useState(0);  // triggers panel content re-anim
  const viewportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateScale = () => {
      const CHROME_H = 44 + 36; // top bar + bottom label
      // Reserve ~1.5% vertical, ~5% horizontal — targets ~0.95 scale at typical screen sizes
      const padV = window.innerHeight * 0.015;
      const padH = window.innerWidth  * 0.05;
      const scaleH = (window.innerHeight - CHROME_H - padV * 2) / 900;
      const scaleW = (window.innerWidth  - padH * 2) / 1440;
      setScale(Math.min(scaleH, scaleW, 1));
    };
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  const goTo = useCallback((i: number) => {
    setCurrent(i);
    setScreenKey(k => k + 1);
  }, []);

  const prev = useCallback(() => goTo(Math.max(0, current - 1)), [goTo, current]);
  const next = useCallback(() => goTo(Math.min(screens.length - 1, current + 1)), [goTo, current, screens.length]);

  // Allow any screen component to trigger navigation via a custom event
  useEffect(() => {
    const handler = () => next();
    window.addEventListener("df:next", handler);
    return () => window.removeEventListener("df:next", handler);
  }, [next]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft")  prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape")     setPanelOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  // Re-animate panel content when screen changes while panel is open
  useEffect(() => {
    if (panelOpen) setPanelKey(k => k + 1);
  }, [current, panelOpen]);

  const screen      = screens[current];
  const annotation  = ANNOTATIONS[screen.id];
  const prevScreen  = current > 0 ? screens[current - 1] : null;
  const nextScreen  = current < screens.length - 1 ? screens[current + 1] : null;
  const ScreenComp  = SCREEN_COMPONENTS[screen.id];


  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh", background: "#D8D8D8", overflow: "hidden" }}>

      {/* ── Top chrome ─────────────────────────── */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 44, paddingInline: 24, background: "#1A1A1A", flexShrink: 0, zIndex: 20 }}>

        <div style={{ fontFamily: "'Lexend', sans-serif", fontSize: 13, fontWeight: 500, letterSpacing: "0.02em", color: "#FFFFFF", width: 180 }}>
          DesignFlow
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <button onClick={prev} disabled={current === 0} style={{ width: 24, height: 24, display: "flex", alignItems: "center", justifyContent: "center", background: "none", border: "none", cursor: current === 0 ? "default" : "pointer", padding: 0, transition: "opacity 150ms" }}>
            <ChevronLeft size={16} color={current === 0 ? "#333" : "#999"} strokeWidth={2} />
          </button>
          <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
            {screens.map((s, i) => (
              <button key={s.id} onClick={() => goTo(i)} style={{ width: i === current ? 16 : 5, height: 5, borderRadius: 3, background: i === current ? "#FFFFFF" : i < current ? "#555" : "#333", border: "none", padding: 0, cursor: "pointer", transition: "width 200ms cubic-bezier(0.34,1.56,0.64,1), background 200ms" }} />
            ))}
          </div>
          <button onClick={next} disabled={current === screens.length - 1} style={{ width: 24, height: 24, display: "flex", alignItems: "center", justifyContent: "center", background: "none", border: "none", cursor: current === screens.length - 1 ? "default" : "pointer", padding: 0 }}>
            <ChevronRight size={16} color={current === screens.length - 1 ? "#333" : "#999"} strokeWidth={2} />
          </button>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 10, width: 180, justifyContent: "flex-end" }}>
          {SURFACE_LABELS[screen.surface] && (
            <div style={{ fontSize: 10, fontFamily: MONO, letterSpacing: "0.06em", color: SURFACE_COLORS[screen.surface], background: "rgba(255,255,255,0.08)", padding: "2px 7px", borderRadius: 3, transition: "color 300ms" }}>
              {SURFACE_LABELS[screen.surface]}
            </div>
          )}
          <div style={{ fontSize: 11, fontFamily: IBM, color: "#666", whiteSpace: "nowrap" }}>
            {current + 1} / {screens.length}
          </div>
          <button
            onClick={() => { setPanelOpen(o => !o); setPanelKey(k => k + 1); }}
            style={{ width: 26, height: 26, borderRadius: 5, background: panelOpen ? "rgba(255,255,255,0.12)" : "none", border: `1px solid ${panelOpen ? "rgba(255,255,255,0.18)" : "transparent"}`, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", padding: 0, transition: "background 150ms, border-color 150ms" }}
            title="Toggle screen notes"
          >
            <Info size={14} color={panelOpen ? "#FFFFFF" : "#555"} strokeWidth={1.8} />
          </button>
        </div>
      </div>

      {/* ── Viewport layer ─────────────────────── */}
      <div ref={viewportRef} style={{ flex: 1, position: "relative", overflow: "hidden" }}>

        {/* Scaled screen — centered absolutely so transform doesn't affect layout */}
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div
            key={screenKey}
            className="screen-enter"
            style={{
              width: 1440, height: 900,
              background: "#FFFFFF",
              boxShadow: "0 4px 60px rgba(0,0,0,0.22), 0 1px 4px rgba(0,0,0,0.12)",
              overflow: "hidden",
              flexShrink: 0,
              transform: `scale(${scale})`,
              transformOrigin: "center center",
              borderRadius: 2,
            }}
          >
            {ScreenComp
              ? <ScreenComp />
              : <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", color: "#888", fontFamily: IBM, fontSize: 13 }}>{screen.label}</div>
            }
          </div>
        </div>

        {/* Flyout panel */}
        <div style={{
          position: "absolute", top: 0, right: 0, bottom: 0,
          width: 340,
          background: "#111111",
          borderLeft: "1px solid #1E1E1E",
          transform: panelOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 280ms cubic-bezier(0.16, 1, 0.3, 1)",
          display: "flex", flexDirection: "column",
          zIndex: 10,
          boxShadow: panelOpen ? "-16px 0 48px rgba(0,0,0,0.4)" : "none",
          fontFamily: IBM,
        }}>
          {/* Panel header */}
          <div className={panelOpen ? "fade-up-1" : ""} style={{ padding: "18px 20px 14px", borderBottom: "1px solid #1A1A1A", display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexShrink: 0 }}>
            <div>
              <div style={{ fontFamily: MONO, fontSize: 10, letterSpacing: "0.08em", color: "#3A3A3A", marginBottom: 4, textTransform: "uppercase" as const }}>
                Step {current + 1} of {screens.length}
              </div>
              <div style={{ fontSize: 16, fontWeight: 700, color: "#FFFFFF", letterSpacing: "-0.2px" }}>
                {screen.label}
              </div>
              {SURFACE_LABELS[screen.surface] && (
                <div style={{ marginTop: 6, display: "inline-flex", alignItems: "center", gap: 5, background: `${SURFACE_COLORS[screen.surface]}14`, border: `1px solid ${SURFACE_COLORS[screen.surface]}33`, borderRadius: 4, padding: "3px 9px" }}>
                  <div style={{ width: 5, height: 5, borderRadius: "50%", background: SURFACE_COLORS[screen.surface] }} />
                  <span style={{ fontFamily: MONO, fontSize: 10, color: SURFACE_COLORS[screen.surface], letterSpacing: "0.04em" }}>{SURFACE_LABELS[screen.surface]}</span>
                </div>
              )}
            </div>
            <button onClick={() => setPanelOpen(false)} style={{ background: "none", border: "none", cursor: "pointer", padding: 4, marginTop: -2, borderRadius: 4, transition: "background 120ms" }}>
              <X size={15} color="#444" strokeWidth={1.8} />
            </button>
          </div>

          {/* Scrollable body */}
          <div key={panelKey} style={{ flex: 1, overflowY: "auto", padding: "20px" }}>

            <div className="fade-up-2" style={{ marginBottom: 22 }}>
              <div style={{ fontFamily: MONO, fontSize: 10, fontWeight: 600, letterSpacing: "0.1em", color: "#3A3A3A", textTransform: "uppercase" as const, marginBottom: 10 }}>
                What's happening
              </div>
              <p style={{ fontSize: 13, color: "#AAA", lineHeight: "21px", margin: 0 }}>
                {annotation.what}
              </p>
            </div>

            {annotation.li && (
              <div className="fade-up-3" style={{ marginBottom: 22 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 10 }}>
                  <div style={{ width: 18, height: 18, borderRadius: 4, background: LILLY, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: `0 0 8px ${LILLY}66` }}>
                    <Zap size={10} color="white" strokeWidth={2.5} fill="white" />
                  </div>
                  <div style={{ fontFamily: MONO, fontSize: 10, fontWeight: 600, letterSpacing: "0.1em", color: LILLY, textTransform: "uppercase" as const }}>
                    Lilly Intelligence
                  </div>
                </div>
                {annotation.liLabel && (
                  <div style={{ fontFamily: MONO, fontSize: 10, color: "#444", marginBottom: 9, letterSpacing: "0.04em" }}>
                    {annotation.liLabel}
                  </div>
                )}
                <div className="li-shimmer" style={{ borderLeft: `3px solid ${LILLY}`, borderRadius: "0 6px 6px 0", padding: "12px 14px" }}>
                  <p style={{ fontSize: 13, color: "#999", lineHeight: "21px", margin: 0 }}>
                    {annotation.li}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Timeline */}
          <div className="fade-up-4" style={{ borderTop: "1px solid #1A1A1A", padding: "14px 20px 18px", flexShrink: 0 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 4, opacity: prevScreen ? 1 : 0, transition: "opacity 200ms" }}>
                <ChevronLeft size={10} color="#444" strokeWidth={2} />
                <span style={{ fontFamily: IBM, fontSize: 11, color: "#444" }}>{prevScreen?.label}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 4, opacity: nextScreen ? 1 : 0, transition: "opacity 200ms" }}>
                <span style={{ fontFamily: IBM, fontSize: 11, color: "#444" }}>{nextScreen?.label}</span>
                <ChevronRight size={10} color="#444" strokeWidth={2} />
              </div>
            </div>

            {/* Step nodes */}
            <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
              {screens.map((s, i) => {
                const isActive = i === current;
                const isPast   = i < current;
                const color    = SURFACE_COLORS[s.surface];
                return (
                  <button
                    key={`${s.id}-${isActive ? "active" : "idle"}`}
                    onClick={() => goTo(i)}
                    title={s.label}
                    className={isActive ? "node-pop" : ""}
                    style={{
                      flexShrink: 0,
                      width:  isActive ? 28 : 8,
                      height: isActive ? 28 : 8,
                      borderRadius: isActive ? 6 : "50%",
                      background: isActive ? color : isPast ? `${color}55` : "#222",
                      border: isActive ? `2px solid ${color}` : "none",
                      padding: 0, cursor: "pointer",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      transition: "width 220ms cubic-bezier(0.34,1.56,0.64,1), height 220ms cubic-bezier(0.34,1.56,0.64,1), border-radius 220ms",
                      boxShadow: isActive ? `0 0 0 3px ${color}22` : "none",
                    }}
                  >
                    {isActive && (
                      <span style={{ fontFamily: MONO, fontSize: 10, fontWeight: 700, color: "white" }}>
                        {i + 1}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            <div style={{ marginTop: 10, display: "flex", alignItems: "center", gap: 7 }}>
              <span style={{ fontFamily: IBM, fontSize: 11, color: "#3A3A3A" }}>{screen.label}</span>
              {SURFACE_LABELS[screen.surface] && (
                <>
                  <span style={{ color: "#2A2A2A" }}>·</span>
                  <span style={{ fontFamily: MONO, fontSize: 10, color: SURFACE_COLORS[screen.surface] }}>
                    {SURFACE_LABELS[screen.surface]}
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom label ───────────────────────── */}
      <div style={{ height: 36, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, zIndex: 20 }}>
        <div style={{ fontSize: 11, fontFamily: IBM, color: "#888", letterSpacing: "0.01em", transition: "opacity 200ms" }}>
          {screen.label}
        </div>
      </div>
    </div>
  );
}
