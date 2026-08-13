import Link from "next/link";
import { AlertTriangle } from "lucide-react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

type RequestAccessErrorPageProps = {
  searchParams?: Promise<{
    reason?: string;
  }>;
};

export default async function RequestAccessErrorPage({
  searchParams,
}: RequestAccessErrorPageProps) {
  const params = await searchParams;
  const isMissing = params?.reason === "missing";

  return (
    <main className="min-h-screen bg-[color:var(--color-paper)] text-[color:var(--color-ink)]">
      <SiteNav />
      <section className="flex items-center justify-center px-5 py-20 md:py-28">
        <div
          className="w-full max-w-[640px] border bg-white p-8 text-center md:p-12"
          style={{ borderColor: "var(--color-line-strong)" }}
        >
          <div className="flex items-center justify-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="The Program Suite"
              className="h-12 w-auto object-contain"
              src="/marketing/logo-mark.png"
            />
            <span className="logo-word" style={{ color: "var(--color-ink)", fontSize: 26 }}>
              The Program Suite
            </span>
          </div>
          <AlertTriangle
            aria-hidden="true"
            className="mx-auto mt-10 size-14 text-[color:var(--color-accent)]"
            strokeWidth={1.5}
          />
          <h1
            className="display mt-6"
            style={{ fontSize: "clamp(32px, 4vw, 56px)" }}
          >
            Request <span className="headline-italic">not sent.</span>
          </h1>
          <p className="mt-5 text-[16px] leading-[1.55] text-[color:var(--color-ink-soft)]">
            {isMissing
              ? "Please complete every required field and try again."
              : "Something went wrong sending your request. Please try again, or email coach@theprogramsuite.com directly."}
          </p>
          <div className="mt-10 flex flex-col items-stretch justify-center gap-2.5 sm:flex-row">
            <Link className="btn btn-primary" href="/#access">
              Try again
            </Link>
            <a className="btn btn-ghost" href="mailto:coach@theprogramsuite.com">
              Email us
            </a>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
