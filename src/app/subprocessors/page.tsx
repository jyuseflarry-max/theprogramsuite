import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { Eyebrow } from "@/components/primitives";

export const metadata: Metadata = {
  title: "Sub-processors | The Program Suite",
  description:
    "The third-party service providers The Program Suite uses to process personal and student data.",
};

const EFFECTIVE_DATE = "July 19, 2026";
const CONTACT_EMAIL  = "privacy@theprogramsuite.com";
const CONTACT_ADDR   = "5900 Balcones Drive, Suite 29102, Austin, TX 78731";

// Categories of data are described at a high level; see the Privacy Policy for the
// full definitions. Location reflects the provider's primary processing region.
const SUBPROCESSORS: {
  name: string;
  purpose: string;
  data: string;
  location: string;
}[] = [
  {
    name: "Supabase",
    purpose: "Database, file storage, and user authentication",
    data: "Account, athlete, program, communication, and health/medical records; uploaded files",
    location: "United States",
  },
  {
    name: "Vercel",
    purpose: "Application and marketing-site hosting; privacy-first page analytics",
    data: "HTTP request data; aggregate, non-identifying page analytics",
    location: "United States",
  },
  {
    name: "Resend",
    purpose: "Transactional and notification email delivery",
    data: "Recipient name and email address; email subject and body content",
    location: "United States",
  },
  {
    name: "Cloudflare",
    purpose: "CDN, DDoS protection, and security filtering",
    data: "IP address and request metadata (processed transiently for security)",
    location: "United States / global edge network",
  },
  {
    name: "Upstash",
    purpose: "API rate limiting",
    data: "IP address, held only for the duration of the rate-limit window",
    location: "United States",
  },
  {
    name: "Stripe",
    purpose: "Payment processing (when billing is enabled)",
    data: "Billing contact and payment card data (processed by Stripe; not stored by us)",
    location: "United States",
  },
  {
    name: "OpenAI",
    purpose: "AI image generation for Content Studio and athlete creations",
    data: "Prompts, captions, and any reference images the user provides",
    location: "United States",
  },
  {
    name: "Google",
    purpose: "AI analysis of coach-provided video links for drill and exercise import (Gemini)",
    data: "Coach-provided video URLs and derived drill/exercise metadata",
    location: "United States",
  },
  {
    name: "Apple",
    purpose: "Weather data for scheduling and event planning (WeatherKit)",
    data: "Event or venue location coordinates (no personal identifiers)",
    location: "United States",
  },
  {
    name: "Inngest",
    purpose: "Background job and workflow processing (scheduled and event-driven tasks)",
    data: "Data included in queued jobs, such as record identifiers and notification payloads",
    location: "United States",
  },
  {
    name: "Meta Platforms",
    purpose: "Publishing program-authored content to connected Facebook and Instagram accounts",
    data: "Content the program chooses to publish and the connected account's credentials/tokens",
    location: "United States / global",
  },
];

export default function SubprocessorsPage() {
  return (
    <main className="min-h-screen bg-[color:var(--color-paper)] text-[color:var(--color-ink)]">
      <SiteNav />

      {/* Title band */}
      <section className="border-b" style={{ borderColor: "var(--color-line)" }}>
        <div className="mx-auto max-w-[1240px] px-5 py-16 md:px-8 md:py-20">
          <div className="mb-[18px]"><Eyebrow>Legal</Eyebrow></div>
          <h1 className="display" style={{ fontSize: "clamp(48px, 8vw, 120px)" }}>
            Sub-<span className="headline-italic">processors.</span>
          </h1>
          <p className="mt-6 text-[13px] font-semibold uppercase tracking-[0.08em] text-[color:var(--color-muted)]">
            Effective: {EFFECTIVE_DATE} · Operator: CJ3 Legacy Holdings, LLC · Jurisdiction: Texas, USA
          </p>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
            <Link
              href="/privacy"
              className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[color:var(--color-accent)] hover:text-[color:var(--color-ink)]"
            >
              Privacy Policy →
            </Link>
            <Link
              href="/terms"
              className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[color:var(--color-accent)] hover:text-[color:var(--color-ink)]"
            >
              Terms of Service →
            </Link>
          </div>
        </div>
      </section>

      {/* Document */}
      <div className="prose-doc mx-auto max-w-[820px] px-5 py-16 md:px-8 md:py-20">

        <div
          className="mb-12 p-5 text-[14px] leading-[1.6]"
          style={{
            background: "var(--color-paper-2)",
            borderLeft: "3px solid var(--color-accent)",
            color: "var(--color-ink)",
          }}
        >
          This page lists the third-party service providers ("sub-processors") that The Program Suite
          engages to process personal information, including student data, on our behalf. It supplements
          our{" "}
          <Link href="/privacy" className="underline font-medium">Privacy Policy</Link> and the data
          privacy agreements we sign with schools and districts. Each sub-processor is bound by contract
          to process data only on our documented instructions and to maintain appropriate security.
        </div>

        <Section title="1. What a Sub-processor Is">
          <p>
            A sub-processor is a company we use to help operate the Service that may process personal
            information on our behalf — for example, our hosting provider, our database, or our email
            delivery service. The Program Suite ("we," "us," or "our") remains responsible for the personal
            information these providers process for us. We do not sell personal information, and we do not
            authorize any sub-processor to use the data we entrust to it for its own purposes.
          </p>
          <p className="mt-3">
            Where a school or program authorizes our collection of student data on behalf of parents, our
            sub-processors process that student data only for the educational purpose the school directs,
            consistent with the Federal Trade Commission's COPPA school-authorization guidance and the{" "}
            <Link href="/privacy#childrens-privacy" className="underline font-medium">
              Children&apos;s Privacy (COPPA)
            </Link>{" "}
            section of our Privacy Policy.
          </p>
        </Section>

        <Section title="2. Current Sub-processors">
          <p>The following sub-processors are engaged as of the effective date above:</p>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-4 py-2 font-semibold text-gray-700">Sub-processor</th>
                  <th className="text-left px-4 py-2 font-semibold text-gray-700">Purpose</th>
                  <th className="text-left px-4 py-2 font-semibold text-gray-700">Categories of data</th>
                  <th className="text-left px-4 py-2 font-semibold text-gray-700">Location</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {SUBPROCESSORS.map((s) => (
                  <tr key={s.name} className="bg-white align-top">
                    <td className="px-4 py-2 font-medium whitespace-nowrap">{s.name}</td>
                    <td className="px-4 py-2 text-gray-600">{s.purpose}</td>
                    <td className="px-4 py-2 text-gray-600">{s.data}</td>
                    <td className="px-4 py-2 text-gray-600 whitespace-nowrap">{s.location}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm text-gray-600">
            Some sub-processors are engaged only when a related feature is used (for example, Stripe when
            billing is enabled, or Meta Platforms when a program connects a social account). Providers that
            act only as transient infrastructure for security or performance — and do not durably store
            personal information — are noted as such above.
          </p>
        </Section>

        <Section title="3. How We Vet Sub-processors">
          <p>Before engaging a sub-processor, and on an ongoing basis, we require that it:</p>
          <ul className="list-disc pl-5 space-y-1.5 mt-2">
            <li>Enters a written agreement (a data processing agreement or equivalent terms) that limits processing to our documented instructions</li>
            <li>Maintains administrative, technical, and physical safeguards appropriate to the data it processes</li>
            <li>Is bound by confidentiality obligations covering the personal information it handles</li>
            <li>Does not use personal information we provide for its own purposes, including advertising or model training</li>
            <li>Supports our obligations to schools and districts under applicable student-privacy law, including FERPA, COPPA, and state student-privacy statutes such as the Texas Education Code</li>
          </ul>
        </Section>

        <Section title="4. Changes to This List">
          <p>
            We may add or replace sub-processors as the Service evolves. When we do, we will update this
            page and revise the effective date above. Where a data privacy agreement with a school or
            district requires advance notice of new sub-processors and an opportunity to object, we will
            provide that notice as agreed in that contract.
          </p>
          <p className="mt-3">
            To be notified of changes to this list, or to ask about a specific sub-processor, contact us at{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-blue-600 underline">{CONTACT_EMAIL}</a>.
          </p>
        </Section>

        <Section title="5. Contact">
          <p>Questions about our sub-processors or data processing practices may be directed to:</p>
          <div className="mt-3 bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-sm space-y-1">
            <p><strong>The Program Suite</strong></p>
            <p>Attn: Privacy</p>
            <p>{CONTACT_ADDR}</p>
            <p>
              Email:{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-blue-600 underline">{CONTACT_EMAIL}</a>
            </p>
          </div>
        </Section>

      </div>

      {/* Footer */}
      <SiteFooter />
    </main>
  );
}

// ── Layout helpers ─────────────────────────────────────────────────────────

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2>{title}</h2>
      <div>{children}</div>
    </section>
  );
}
