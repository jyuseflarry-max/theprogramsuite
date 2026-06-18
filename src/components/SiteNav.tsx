import Link from "next/link";

const APP_LOGIN_URL = "https://app.theprogramsuite.com";

const NAV_LINKS = [
  { href: "/#story", label: "Story" },
  { href: "/#capabilities", label: "Capabilities" },
  { href: "/#audiences", label: "Who it's for" },
  { href: "/#pricing", label: "Pricing" },
];

export function SiteNav() {
  return (
    <nav className="nav" id="top">
      <div className="container nav-inner">
        <div className="nav-left">
          <Link href="/" className="logo" aria-label="The Program Suite — home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="logo-img" src="/marketing/logo-mark.png" alt="" />
            <span className="logo-word">The Program Suite</span>
          </Link>
          <div className="nav-links">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="nav-cta">
          <a href={APP_LOGIN_URL} className="nav-login">
            Log in
          </a>
          <a
            href="/#pricing"
            className="btn btn-primary"
            style={{ minHeight: 42, padding: "10px 18px", fontSize: 14.5 }}
          >
            Start one program
          </a>
        </div>
      </div>
    </nav>
  );
}
