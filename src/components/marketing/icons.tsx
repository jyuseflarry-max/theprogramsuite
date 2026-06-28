import type { SVGProps } from "react";

/* Icons (stroke, 1.6–1.9, currentColor) — ported from the design handoff */
export const Ico = {
  arrow: (p: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 16 16" fill="none" {...p}><path d="M2 8h11M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
  ),
  check: (p: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 16 16" fill="none" {...p}><path d="M3 8.5l3.2 3.2L13 4.5" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" /></svg>
  ),
  play: (p: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 16 16" fill="none" {...p}><path d="M5 3.5l8 4.5-8 4.5z" fill="currentColor" /></svg>
  ),
  bolt: (p: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 20 20" fill="none" {...p}><path d="M11 2L4 11h5l-1 7 7-9h-5z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /></svg>
  ),
  cash: (p: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 20 20" fill="none" {...p}><rect x="2" y="5" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="1.6" /><circle cx="10" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.6" /></svg>
  ),
  handshake: (p: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 20 20" fill="none" {...p}><path d="M2 7l3-1 4 3 1-1 5 1 3 1M10 8l2 2M2 7v6l3 1M18 7v6l-3 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
  ),
  heart: (p: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" {...p}><path d="M12 20s-7-4.3-7-9a4 4 0 017-2.6A4 4 0 0119 11c0 4.7-7 9-7 9z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /></svg>
  ),
  comment: (p: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" {...p}><path d="M21 12a8 8 0 01-11.5 7.2L4 20l1-4.5A8 8 0 1121 12z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /></svg>
  ),
  send: (p: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" {...p}><path d="M21 3L10 14M21 3l-7 18-4-7-7-4 18-7z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /></svg>
  ),
  clock: (p: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" {...p}><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" /><path d="M12 7v5l3.5 2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
  ),
  family: (p: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" {...p}><path d="M12 20s-6.5-4-6.5-8.4A3.6 3.6 0 0112 9.2a3.6 3.6 0 016.5 2.4C18.5 16 12 20 12 20z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /></svg>
  ),
  prep: (p: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" {...p}><path d="M8 4h8a2 2 0 012 2v13a2 2 0 01-2 2H8a2 2 0 01-2-2V6a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.6" /><path d="M9 4.5h6V3a1 1 0 00-1-1H10a1 1 0 00-1 1z" stroke="currentColor" strokeWidth="1.6" /><path d="M9 13l2 2 4-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
  ),
  impact: (p: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" {...p}><path d="M7 4h10v3a5 5 0 01-10 0z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /><path d="M7 5H4v2a3 3 0 003 3M17 5h3v2a3 3 0 01-3 3M10 13h4M9 20h6M12 13v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
  ),
  apps: (p: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" {...p}><rect x="3.5" y="3.5" width="7" height="7" rx="1.6" stroke="currentColor" strokeWidth="1.6" /><rect x="13.5" y="3.5" width="7" height="7" rx="1.6" stroke="currentColor" strokeWidth="1.6" /><rect x="3.5" y="13.5" width="7" height="7" rx="1.6" stroke="currentColor" strokeWidth="1.6" /><rect x="13.5" y="13.5" width="7" height="7" rx="1.6" stroke="currentColor" strokeWidth="1.6" /></svg>
  ),
  hourglass: (p: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" {...p}><path d="M6 3h12M6 21h12M7 3c0 5 10 6 10 9s-10 4-10 9M17 3c0 5-10 6-10 9s10 4 10 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
  ),
  chat: (p: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" {...p}><path d="M4 5h16v11H9l-4 3v-3H4z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /></svg>
  ),
  scatter: (p: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" {...p}><circle cx="6" cy="6" r="2" stroke="currentColor" strokeWidth="1.6" /><circle cx="18" cy="7" r="2" stroke="currentColor" strokeWidth="1.6" /><circle cx="5" cy="17" r="2" stroke="currentColor" strokeWidth="1.6" /><circle cx="17" cy="17" r="2" stroke="currentColor" strokeWidth="1.6" /><circle cx="12" cy="11" r="2" stroke="currentColor" strokeWidth="1.6" /></svg>
  ),
  shield: (p: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" {...p}><path d="M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /><path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
  ),
  lock: (p: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" {...p}><rect x="5" y="10" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.6" /><path d="M8 10V7a4 4 0 018 0v3" stroke="currentColor" strokeWidth="1.6" /></svg>
  ),
  whistle: (p: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" {...p}><path d="M3 11a5 5 0 005 5h3l4 3v-3a5 5 0 000-10H8a5 5 0 00-5 5z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /><circle cx="8" cy="11" r="1.4" fill="currentColor" /><path d="M16 6l2-2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
  ),
  devices: (p: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" {...p}><rect x="2.5" y="5" width="13" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.6" /><path d="M5 18h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /><rect x="16.5" y="9" width="5" height="10" rx="1.3" stroke="currentColor" strokeWidth="1.6" /></svg>
  ),
  star: (p: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M12 3l2.6 5.7 6.2.6-4.7 4.1 1.4 6.1L12 16.9 6.5 19.6l1.4-6.1L3.2 9.3l6.2-.6z" /></svg>
  ),
  quote: (p: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M10 7H5a2 2 0 00-2 2v4a2 2 0 002 2h2v1a2 2 0 01-2 2H4v2h1a4 4 0 004-4V9a2 2 0 00-2-2h3zm10 0h-5a2 2 0 00-2 2v4a2 2 0 002 2h2v1a2 2 0 01-2 2h-1v2h1a4 4 0 004-4V9a2 2 0 00-2-2h3z" opacity=".0" /><path d="M9.5 6H5a2 2 0 00-2 2v4a2 2 0 002 2h2.2c-.1 1.6-.9 2.6-2.4 3l.7 1.9C9.9 18 11 15.7 11 12V7.5A1.5 1.5 0 009.5 6zm10 0H15a2 2 0 00-2 2v4a2 2 0 002 2h2.2c-.1 1.6-.9 2.6-2.4 3l.7 1.9c2.4-.9 3.5-3.2 3.5-6.9V7.5A1.5 1.5 0 0019.5 6z" /></svg>
  ),
  chevL: (p: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" {...p}><path d="M15 5l-7 7 7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
  ),
  chevR: (p: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" {...p}><path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
  ),
  instagram: (p: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" {...p}><rect x="3.5" y="3.5" width="17" height="17" rx="4.5" stroke="currentColor" strokeWidth="1.6" /><circle cx="12" cy="12" r="3.8" stroke="currentColor" strokeWidth="1.6" /><circle cx="17" cy="7" r="1.1" fill="currentColor" /></svg>
  ),
  youtube: (p: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" {...p}><rect x="2.5" y="5.5" width="19" height="13" rx="4" stroke="currentColor" strokeWidth="1.6" /><path d="M10 9l5 3-5 3z" fill="currentColor" /></svg>
  ),
  linkedin: (p: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" {...p}><rect x="3.5" y="3.5" width="17" height="17" rx="2.5" stroke="currentColor" strokeWidth="1.6" /><path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 014 0v4M11 17v-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
  ),
  xSocial: (p: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" {...p}><path d="M4 4l16 16M20 4L4 20" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /></svg>
  ),
  picture: (p: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" {...p}><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" /><circle cx="8.5" cy="10" r="1.6" stroke="currentColor" strokeWidth="1.6" /><path d="M4 17l5-4.5 3.5 3L16 12l4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
  ),
};

export type IcoName = keyof typeof Ico;

/* Module glyphs for capability grid — simple geometric, brand-safe */
const MOD_MAPS = {
  athlete: <g><circle cx="17" cy="11" r="5" /><path d="M7 28c0-5.5 4.5-9 10-9s10 3.5 10 9" /></g>,
  season: <g><rect x="5" y="7" width="24" height="22" rx="2.5" /><path d="M5 13h24M11 4v6M23 4v6" /><path d="M11 19h4M19 19h4M11 24h4" /></g>,
  practice: <g><path d="M6 6v22M6 28h22" /><path d="M6 19l6-6 5 4 9-9" /></g>,
  training: <g><path d="M4 17h3M27 17h3M9 12v10M25 12v10" /><rect x="9" y="13.5" width="4" height="7" rx="1" /><rect x="21" y="13.5" width="4" height="7" rx="1" /><path d="M13 17h8" /></g>,
  inventory: <g><path d="M5 11l12-6 12 6-12 6z" /><path d="M5 11v12l12 6 12-6V11" /><path d="M17 17v12" /></g>,
  district: <g><rect x="5" y="14" width="10" height="15" rx="1.5" /><rect x="19" y="6" width="10" height="23" rx="1.5" /><path d="M8 19h4M8 24h4M23 11h2M23 16h2M23 21h2" /></g>,
  mobile: <g><rect x="10" y="4" width="14" height="26" rx="3" /><path d="M15 26h4" /></g>,
};

export type ModName = keyof typeof MOD_MAPS;

export function ModIcon({ name }: { name: ModName }) {
  return (
    <svg
      width={34}
      height={34}
      viewBox="0 0 34 34"
      fill="none"
      className="cap-ico"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {MOD_MAPS[name]}
    </svg>
  );
}
