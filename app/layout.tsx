import type { Metadata } from "next";
import "./globals.css";
import { IBM_Plex_Sans, IBM_Plex_Mono, Inter, Lexend } from "next/font/google";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-ibm-plex-sans",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-lexend",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DesignFlow — Prototype",
  description: "DesignFlow user journey prototype",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full ${ibmPlexSans.variable} ${ibmPlexMono.variable} ${inter.variable} ${lexend.variable}`}>
      <head>
        <style dangerouslySetInnerHTML={{ __html: ANIMATIONS }} />
      </head>
      <body className="h-full">{children}</body>
    </html>
  );
}

const ANIMATIONS = `
/* ── Microinteractions ────────────────────────────────── */

/* Chrome nav buttons — subtle fade */
button {
  transition: opacity 140ms ease, transform 160ms ease;
}
button:hover:not(:disabled) {
  opacity: 0.65;
}
button:active:not(:disabled) {
  transform: scale(0.94);
  opacity: 0.5;
}

/* Primary CTA buttons (coloured backgrounds) — lift */
[style*="cursor: pointer"][style*="background: #E1251B"],
[style*="cursor: pointer"][style*="background: #0078D4"],
[style*="cursor: pointer"][style*="background: #16A34A"],
[style*="cursor: pointer"][style*="background: #22C55E"],
[style*="cursor: pointer"][style*="background: #111111"] {
  transition: transform 160ms ease, box-shadow 160ms ease, filter 140ms ease !important;
}
[style*="cursor: pointer"][style*="background: #E1251B"]:hover,
[style*="cursor: pointer"][style*="background: #0078D4"]:hover,
[style*="cursor: pointer"][style*="background: #16A34A"]:hover,
[style*="cursor: pointer"][style*="background: #22C55E"]:hover,
[style*="cursor: pointer"][style*="background: #111111"]:hover {
  transform: translateY(-1px) !important;
  filter: brightness(1.08) !important;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2) !important;
}
[style*="cursor: pointer"][style*="background: #E1251B"]:active,
[style*="cursor: pointer"][style*="background: #0078D4"]:active,
[style*="cursor: pointer"][style*="background: #111111"]:active {
  transform: translateY(0px) scale(0.98) !important;
  filter: brightness(0.94) !important;
}

/* List rows / email items — background shift */
[style*="cursor: pointer"][style*="border-bottom"],
[style*="cursor: pointer"][style*="paddingBlock"] {
  transition: background 140ms ease, opacity 140ms ease !important;
}
[style*="cursor: pointer"][style*="border-bottom"]:hover,
[style*="cursor: pointer"][style*="paddingBlock"]:hover {
  filter: brightness(0.97) !important;
}

/* Cards / workflow cards — gentle scale */
[style*="cursor: pointer"][style*="border-radius: 10px"],
[style*="cursor: pointer"][style*="border-radius: 12px"],
[style*="cursor: pointer"][style*="border-radius: 8px"] {
  transition: transform 180ms ease, box-shadow 180ms ease !important;
}
[style*="cursor: pointer"][style*="border-radius: 10px"]:hover,
[style*="cursor: pointer"][style*="border-radius: 12px"]:hover,
[style*="cursor: pointer"][style*="border-radius: 8px"]:hover {
  transform: translateY(-2px) scale(1.005) !important;
  box-shadow: 0 6px 20px rgba(0,0,0,0.1) !important;
}

/* Dark surface items (Claude sidebar, Figma layers) — brighten */
[style*="background: #2C2C2E"][style*="cursor: pointer"]:hover,
[style*="background: #3A3A3A"][style*="cursor: pointer"]:hover {
  filter: brightness(1.2) !important;
  transition: filter 140ms ease !important;
}

/* ── Screen entrance ─────────────────────────────────── */
@keyframes screen-enter {
  from { opacity: 0; }
  to   { opacity: 1; }
}
.screen-enter {
  animation: screen-enter 300ms ease both;
}

/* ── Processing step animations ─────────────────────── */
@keyframes spin {
  to { transform: rotate(360deg); }
}
.spin { animation: spin 0.65s linear infinite; }

@keyframes check-pop {
  0%   { transform: scale(0.3); opacity: 0; }
  65%  { transform: scale(1.25); }
  100% { transform: scale(1);   opacity: 1; }
}
.check-pop { animation: check-pop 280ms cubic-bezier(0.34,1.56,0.64,1) both; }

@keyframes step-in {
  from { opacity: 0; transform: translateX(-8px); }
  to   { opacity: 1; transform: translateX(0);    }
}
.step-in { animation: step-in 220ms ease both; }

/* ── Panel stagger ───────────────────────────────────── */
@keyframes fade-up {
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0);    }
}
.fade-up-1 { animation: fade-up 300ms  60ms cubic-bezier(0.16,1,0.3,1) both; }
.fade-up-2 { animation: fade-up 300ms 140ms cubic-bezier(0.16,1,0.3,1) both; }
.fade-up-3 { animation: fade-up 300ms 220ms cubic-bezier(0.16,1,0.3,1) both; }
.fade-up-4 { animation: fade-up 300ms 300ms cubic-bezier(0.16,1,0.3,1) both; }

/* ── Timeline node spring ────────────────────────────── */
@keyframes node-pop {
  0%   { transform: scale(0.5); opacity: 0; }
  65%  { transform: scale(1.2);             }
  100% { transform: scale(1);   opacity: 1; }
}
.node-pop { animation: node-pop 320ms cubic-bezier(0.34,1.56,0.64,1) both; }

/* ── LI shimmer ──────────────────────────────────────── */
@keyframes shimmer {
  0%   { background-position: -300% 0; }
  100% { background-position:  300% 0; }
}
.li-shimmer {
  background: linear-gradient(90deg,
    #1A0A0A 20%, #2A1210 50%, #1A0A0A 80%
  ) !important;
  background-size: 300% 100% !important;
  animation: shimmer 3.5s ease-in-out infinite;
}
`;
