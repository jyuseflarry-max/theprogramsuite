import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

export default function FounderAccessThanksPage() {
  return (
    <main className="min-h-screen bg-[color:var(--color-paper)] text-[color:var(--color-ink)]">
      <SiteNav />
      <section className="flex items-center justify-center px-5 py-20 md:py-28">
        <div
          className="w-full max-w-[640px] border bg-white p-8 text-center md:p-12"
          style={{ borderColor: "var(--color-line-strong)" }}
        >
          <Image
            alt="The Program Suite"
            className="mx-auto h-14 w-auto object-contain"
            height={176}
            priority
            src="/the-program-suite-wordmark.svg"
            width={900}
          />
          <CheckCircle2
            aria-hidden="true"
            className="mx-auto mt-10 size-14 text-[color:var(--color-accent)]"
            strokeWidth={1.5}
          />
          <h1
            className="display mt-6"
            style={{ fontSize: "clamp(32px, 4vw, 56px)" }}
          >
            Founder access
            <br />
            <span className="headline-italic">request received.</span>
          </h1>
          <p className="mt-5 text-[16px] leading-[1.55] text-[color:var(--color-ink-soft)]">
            We will follow up with the right setup path, founder pricing details, and payment link.
          </p>
          <div className="mt-10 flex flex-col items-stretch justify-center gap-2.5 sm:flex-row">
            <Link className="btn btn-primary" href="/">
              Back to home
            </Link>
            <a className="btn btn-ghost" href="https://app.theprogramsuite.com/login">
              Sign in
            </a>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
