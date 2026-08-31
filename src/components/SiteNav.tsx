import Link from "next/link";
import Image from "next/image";

const APP_LOGIN_URL = "https://app.theprogramsuite.com";
const GET_STARTED_URL = "https://app.theprogramsuite.com/get-started";

const NAV_LINKS = [
  { href: "/#platform", label: "Platform" },
  { href: "/#pricing", label: "Pricing" },
];

export function SiteNav() {
  return (
    <nav className="rx-nav" id="top">
      <div className="container rx-nav-inner">
        <div className="rx-nav-left">
          <Link href="/" className="logo" aria-label="The Program Suite — home">
            <Image className="logo-img" src="/marketing/logo-mark.png" alt="" width={60} height={30} priority />
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
          <a href="/#access" className="btn btn-ghost rx-nav-btn rx-nav-demo">
            Request a demo
          </a>
          <a href={GET_STARTED_URL} className="btn btn-primary rx-nav-btn">
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}
