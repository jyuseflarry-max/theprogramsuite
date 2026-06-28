import Link from "next/link";
import { Ico } from "@/components/marketing/icons";

const APP_LOGIN_URL = "https://app.theprogramsuite.com";

const COLS = [
  {
    h: "Platform",
    links: [
      { l: "Platform", href: "/#platform" },
      { l: "Features", href: "/#tools" },
      { l: "Pricing", href: "/#pricing" },
    ],
  },
  {
    h: "Company",
    links: [
      { l: "About", href: "/#story" },
      { l: "Resources", href: "/#faq" },
      { l: "Contact", href: "/#access" },
      { l: "Log in", href: APP_LOGIN_URL },
    ],
  },
];

const SOCIALS: { l: string; ico: keyof typeof Ico }[] = [
  { l: "Instagram", ico: "instagram" },
  { l: "YouTube", ico: "youtube" },
  { l: "LinkedIn", ico: "linkedin" },
  { l: "X", ico: "xSocial" },
];

export function SiteFooter() {
  return (
    <footer className="rx-footer">
      <div className="container">
        <div className="rx-footer-grid">
          <div className="rx-footer-about">
            <Link href="/" className="logo" aria-label="The Program Suite — home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="logo-img" src="/marketing/logo-mark.png" alt="" />
              <span className="logo-word">The Program Suite</span>
            </Link>
            <p>
              The all-in-one operating system for athletic programs — so coaches get the freedom to
              focus on changing lives. Built by a coach who lived the chaos.
            </p>
            <div className="rx-socials">
              {SOCIALS.map((s) => {
                const Glyph = Ico[s.ico];
                return (
                  <a key={s.l} href="#top" aria-label={s.l} className="rx-social">
                    <Glyph width="18" height="18" />
                  </a>
                );
              })}
            </div>
          </div>
          {COLS.map((c) => (
            <div className="rx-footer-col" key={c.h}>
              <h4>{c.h}</h4>
              <ul>
                {c.links.map((it) => (
                  <li key={it.l}>
                    <a href={it.href}>{it.l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="rx-footer-meta">
          <span>© 2026 The Program Suite</span>
          <span>
            <a href="/privacy">Privacy</a> · <a href="/terms">Terms</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
