import Image from "next/image";
import Link from "next/link";

const APP_LOGIN_URL = "https://app.theprogramsuite.com";

const NAV_LINKS = [
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#product", label: "Product" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#faq", label: "FAQ" },
];

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--color-line)] bg-[color:var(--color-paper)]/85 backdrop-blur-md backdrop-saturate-150">
      <div className="mx-auto flex h-[68px] max-w-[1240px] items-center justify-between px-5 md:px-8">
        <Link aria-label="The Program Suite home" href="/" className="flex items-center gap-3">
          <Image
            alt="The Program Suite"
            src="/the-program-suite-wordmark.svg"
            width={920}
            height={190}
            priority
            className="h-11 w-auto object-contain"
          />
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-[22px] lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium tracking-tight text-[color:var(--color-ink-soft)] hover:text-[color:var(--color-ink)] whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-[10px]">
          <a
            href={APP_LOGIN_URL}
            className="btn btn-ghost hidden lg:inline-flex"
            style={{ padding: "10px 16px", fontSize: 13, minHeight: 38 }}
          >
            Login
          </a>
          <a
            href="/#founder-access"
            className="btn btn-primary"
            style={{ padding: "10px 16px", fontSize: 13, minHeight: 38 }}
          >
            <span className="hidden sm:inline">Request access</span>
            <span className="sm:hidden">Start</span>
          </a>
        </div>
      </div>
    </header>
  );
}
