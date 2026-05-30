import Image from "next/image";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

type FounderAccessErrorPageProps = {
  searchParams?: Promise<{
    reason?: string;
  }>;
};

export default async function FounderAccessErrorPage({
  searchParams,
}: FounderAccessErrorPageProps) {
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
          <Image
            alt="The Program Suite"
            className="mx-auto h-12 w-auto object-contain"
            height={48}
            priority
            src="/the-program-suite-selected-blue-cropped.png"
            width={326}
          />
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
              : "Email delivery is not configured yet. Please email founders@theprogramsuite.com directly."}
          </p>
          <div className="mt-10 flex flex-col items-stretch justify-center gap-2.5 sm:flex-row">
            <Link className="btn btn-primary" href="/#founder-access">
              Try again
            </Link>
            <a className="btn btn-ghost" href="mailto:founders@theprogramsuite.com">
              Email us
            </a>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
