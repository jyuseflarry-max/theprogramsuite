import Link from "next/link";

const APP_LOGIN_URL = "https://app.theprogramsuite.com";

const NAV_LINKS = [
  { href: "/#platform", label: "Platform" },
  { href: "/#tools", label: "Features" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#story", label: "About" },
];

export function SiteNav() {
  return (
    <nav className="rx-nav" id="top">
      <div className="container rx-nav-inner">
        <div className="rx-nav-left">
          <Link href="/" className="logo" aria-label="The Program Suite — home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="logo-img" src="/marketing/logo-mark.png" alt="" />
            <span className="logo-word">The Program Suite</span>
          </Link>
          <div className="rx-nav-links">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="rx-nav-cta">
          <a href={APP_LOGIN_URL} className="rx-nav-login">
            Log in
          </a>
          <a href="/#access" className="btn btn-primary rx-nav-btn">
            Request a demo
          </a>
        </div>
      </div>
    </nav>
  );
}
