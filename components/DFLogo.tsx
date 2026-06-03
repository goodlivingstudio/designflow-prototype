"use client";

// Canonical DesignFlow logo — red square with 2×2 grid icon + Lexend wordmark.
// Use everywhere instead of the "L" letter variant.

interface DFLogoIconProps {
  size?: number; // icon square size, default 28
}

export function DFLogoIcon({ size = 28 }: DFLogoIconProps) {
  const iconSize = Math.round(size * 0.5);
  return (
    <div style={{
      width: size, height: size,
      borderRadius: Math.round(size * 0.21),
      background: "#E1251B",
      display: "flex", alignItems: "center", justifyContent: "center",
      flexShrink: 0,
    }}>
      <svg width={iconSize} height={iconSize} viewBox="0 0 14 14" fill="none">
        <rect x="2" y="2" width="4" height="4" fill="white"/>
        <rect x="8" y="2" width="4" height="4" fill="rgba(255,255,255,0.5)"/>
        <rect x="2" y="8" width="4" height="4" fill="rgba(255,255,255,0.5)"/>
        <rect x="8" y="8" width="4" height="4" fill="white"/>
      </svg>
    </div>
  );
}

interface DFWordmarkProps {
  iconSize?: number;
  fontSize?: number;
  color?: string;
  gap?: number;
}

export function DFWordmark({ iconSize = 28, fontSize = 16, color = "#1A1A1A", gap = 10 }: DFWordmarkProps) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap, flexShrink: 0 }}>
      <DFLogoIcon size={iconSize} />
      <span style={{
        fontFamily: "'Lexend', system-ui, sans-serif",
        fontSize, fontWeight: 700,
        color,
        letterSpacing: "-0.2px",
        lineHeight: 1,
      }}>
        DesignFlow
      </span>
    </div>
  );
}
