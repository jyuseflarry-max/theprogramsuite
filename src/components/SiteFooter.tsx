import Link from "next/link";

const APP_LOGIN_URL = "https://app.theprogramsuite.com";

const COLS = [
  {
    h: "Explore",
    links: [
      { l: "Story", href: "/#story" },
      { l: "Capabilities", href: "/#capabilities" },
      { l: "Who it's for", href: "/#audiences" },
      { l: "Pricing", href: "/#pricing" },
    ],
  },
  {
    h: "Get started",
    links: [
      { l: "Start one program", href: "/#pricing" },
      { l: "Founder access", href: "/#access" },
      { l: "Log in", href: APP_LOGIN_URL },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <Link href="/" className="logo" aria-label="The Program Suite — home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="logo-img" src="/marketing/logo-mark.png" alt="" />
              <span className="logo-word">The Program Suite</span>
            </Link>
            <p>
              The operating system for school sports. One source of truth for staff, athletes, and
              families — built by a coach who lived the chaos.
            </p>
          </div>
          {COLS.map((c) => (
            <div className="footer-col" key={c.h}>
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
        <div className="footer-meta">
          <span>© 2026 The Program Suite</span>
          <span>Made for coaches, ADs, and the people who run school sports.</span>
        </div>
      </div>
    </footer>
  );
}
