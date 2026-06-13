import Image from "next/image";

const APP_LOGIN_URL = "https://app.theprogramsuite.com";

export function SiteFooter() {
  return (
    <footer className="border-t border-[color:var(--color-line)] bg-[color:var(--color-paper)] pt-16 pb-10">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div className="max-w-[380px]">
            <Image
              alt="The Program Suite - The Operating System for Winning Programs"
              className="h-auto w-full max-w-[340px]"
              height={176}
              src="/the-program-suite-wordmark.svg"
              width={900}
            />
            <p className="mt-4 text-[14.5px] leading-[1.5] text-[color:var(--color-ink-soft)]">
              The operating system for school sports: athletes, practice, training, schedule,
              inventory, budget, messages, and district oversight.
            </p>
          </div>

          <FooterCol
            title="Product"
            links={[
              { href: "/#product", label: "Product" },
              { href: "/#coaching-os", label: "Coach OS" },
              { href: "/#audiences", label: "Audiences" },
              { href: "/#pricing", label: "Pricing" },
            ]}
          />
          <FooterCol
            title="Company"
            links={[
              { href: "/#founder-access", label: "Founder access" },
              { href: "mailto:founders@theprogramsuite.com", label: "Contact" },
            ]}
          />
          <FooterCol
            title="Legal"
            links={[
              { href: "/privacy", label: "Privacy" },
              { href: "/terms", label: "Terms" },
              { href: APP_LOGIN_URL, label: "Login" },
            ]}
          />
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-[color:var(--color-line)] pt-8 text-[12px] tracking-wide text-[color:var(--color-muted)] md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} The Program Suite</span>
          <span>Made for coaches, ADs, and the people who run school sports.</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <div className="font-display mb-[14px] text-[12px] font-black uppercase tracking-[0.16em] text-[color:var(--color-ink-soft)]">
        {title}
      </div>
      <ul className="flex flex-col gap-[9px]">
        {links.map((link) => (
          <li key={link.href}>
            <a
              className="text-[14px] text-[color:var(--color-ink)] hover:text-[color:var(--color-accent)]"
              href={link.href}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
