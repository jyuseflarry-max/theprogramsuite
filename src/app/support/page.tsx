import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { Eyebrow } from "@/components/primitives";

export const metadata: Metadata = {
  title: "Support | The Program Suite",
  description:
    "Get help with The Program Suite. Contact our support team, browse answers to common questions about accounts, billing, data, and privacy, or request account deletion.",
  alternates: { canonical: "/support" },
};

const SUPPORT_EMAIL = "coach@theprogramsuite.com";
const PRIVACY_EMAIL = "privacy@theprogramsuite.com";
const CONTACT_ADDR  = "5900 Balcones Drive, Suite 29102, Austin, TX 78731";
const APP_LOGIN_URL = "https://app.theprogramsuite.com";

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-[color:var(--color-paper)] text-[color:var(--color-ink)]">
      <SiteNav />

      {/* Title band */}
      <section className="border-b" style={{ borderColor: "var(--color-line)" }}>
        <div className="mx-auto max-w-[1240px] px-5 py-16 md:px-8 md:py-20">
          <div className="mb-[18px]"><Eyebrow>Support</Eyebrow></div>
          <h1 className="display" style={{ fontSize: "clamp(48px, 8vw, 120px)" }}>
            Help &amp; <span className="headline-italic">support.</span>
          </h1>
          <p className="mt-6 max-w-[640px] text-[16px] leading-[1.6] text-[color:var(--color-muted)]">
            We&apos;re here to help you and your program get the most out of The Program Suite.
            Reach out any time — a real person on our team will get back to you.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="btn btn-primary"
            >
              Email support
            </a>
            <a
              href={APP_LOGIN_URL}
              className="btn btn-ghost"
            >
              Log in to the app
            </a>
          </div>
        </div>
      </section>

      {/* Document */}
      <div className="prose-doc mx-auto max-w-[820px] px-5 py-16 md:px-8 md:py-20">

        {/* Contact card */}
        <div
          className="mb-12 p-5 text-[14px] leading-[1.6]"
          style={{
            background: "var(--color-paper-2)",
            borderLeft: "3px solid var(--color-accent)",
            color: "var(--color-ink)",
          }}
        >
          <p className="m-0">
            <strong>The fastest way to reach us is email.</strong> Write to{" "}
            <a href={`mailto:${SUPPORT_EMAIL}`} className="underline font-medium">{SUPPORT_EMAIL}</a>{" "}
            and we typically respond within <strong>1–2 business days</strong> (Monday–Friday).
            Please include your name, your program or school, and a description of what you need
            help with so we can resolve it as quickly as possible.
          </p>
        </div>

        <Section title="Contact us">
          <p>Choose the inbox that best fits what you need:</p>
          <div className="mt-3 bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-sm space-y-3">
            <div>
              <p className="m-0"><strong>General &amp; technical support</strong></p>
              <p className="m-0">
                Accounts, logging in, billing, and using the app —{" "}
                <a href={`mailto:${SUPPORT_EMAIL}`} className="text-blue-600 underline">{SUPPORT_EMAIL}</a>
              </p>
            </div>
            <div>
              <p className="m-0"><strong>Privacy &amp; data requests</strong></p>
              <p className="m-0">
                Data access, deletion, and privacy questions —{" "}
                <a href={`mailto:${PRIVACY_EMAIL}`} className="text-blue-600 underline">{PRIVACY_EMAIL}</a>
              </p>
            </div>
            <div>
              <p className="m-0"><strong>Mailing address</strong></p>
              <p className="m-0">The Program Suite · {CONTACT_ADDR}</p>
            </div>
          </div>
        </Section>

        <Section title="Frequently asked questions">

          <Subhead>How do I log in?</Subhead>
          <p>
            Coaches, staff, and families sign in at{" "}
            <a href={APP_LOGIN_URL} className="text-blue-600 underline">app.theprogramsuite.com</a>{" "}
            with the email address your program used to set up your account. If your program hasn&apos;t
            invited you yet, ask your coach or program administrator to add you.
          </p>

          <Subhead>I forgot my password.</Subhead>
          <p>
            Go to{" "}
            <a href={APP_LOGIN_URL} className="text-blue-600 underline">app.theprogramsuite.com</a>,
            choose <em>Forgot password</em>, and enter your email to receive a reset link. If the email
            doesn&apos;t arrive within a few minutes, check your spam folder or email us at{" "}
            <a href={`mailto:${SUPPORT_EMAIL}`} className="text-blue-600 underline">{SUPPORT_EMAIL}</a>.
          </p>

          <Subhead>How do I get started with my program?</Subhead>
          <p>
            The Program Suite is set up at the program level. If you&apos;re a coach or administrator
            evaluating the platform, the quickest path is to{" "}
            <Link href="/#access" className="text-blue-600 underline">request a demo</Link> — we&apos;ll
            walk you through setup, roster import, and getting your staff and families onboarded.
          </p>

          <Subhead>How does billing work?</Subhead>
          <p>
            Billing is handled at the program or organization level, not per individual user. For
            questions about your plan, an invoice, or a payment, email{" "}
            <a href={`mailto:${SUPPORT_EMAIL}`} className="text-blue-600 underline">{SUPPORT_EMAIL}</a>{" "}
            from the address associated with your account and we&apos;ll help.
          </p>

          <Subhead>Is my program&apos;s and my athletes&apos; data safe?</Subhead>
          <p>
            Yes. We take the privacy of students and families seriously. You can read exactly how we
            collect, use, and protect information in our{" "}
            <Link href="/privacy" className="text-blue-600 underline">Privacy Policy</Link>,{" "}
            <Link href="/childrens-privacy" className="text-blue-600 underline">Children&apos;s Privacy (COPPA) notice</Link>, and{" "}
            <Link href="/subprocessors" className="text-blue-600 underline">Sub-processors list</Link>.
            We do not sell personal information, and we do not use it to train AI models.
          </p>

          <Subhead>How do I report a bug or a problem?</Subhead>
          <p>
            Email{" "}
            <a href={`mailto:${SUPPORT_EMAIL}`} className="text-blue-600 underline">{SUPPORT_EMAIL}</a>{" "}
            with a description of what happened, what you expected, and — if you can — a screenshot and
            the device and app version you were using. That detail helps us reproduce and fix the issue
            faster.
          </p>
        </Section>

        <Section title="Account &amp; data deletion">
          <p>
            You can request deletion of your account and associated personal information at any time.
            Email{" "}
            <a href={`mailto:${PRIVACY_EMAIL}`} className="text-blue-600 underline">{PRIVACY_EMAIL}</a>{" "}
            from the address on your account (or ask your program administrator, who can request it on
            your behalf). We will verify the request and delete the data as described in the{" "}
            <Link href="/privacy#data-retention" className="text-blue-600 underline">Data Retention</Link>{" "}
            section of our Privacy Policy.
          </p>
          <p>
            Because The Program Suite is used by schools and athletic programs, some records may be
            retained by your program as the data controller, or as required by law, even after your
            individual account is removed. We&apos;ll explain what applies to your situation when you
            contact us.
          </p>
        </Section>

        <Section title="More resources">
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li><Link href="/privacy" className="text-blue-600 underline">Privacy Policy</Link></li>
            <li><Link href="/terms" className="text-blue-600 underline">Terms of Service</Link></li>
            <li><Link href="/childrens-privacy" className="text-blue-600 underline">Children&apos;s Privacy (COPPA)</Link></li>
            <li><Link href="/subprocessors" className="text-blue-600 underline">Sub-processors</Link></li>
          </ul>
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

function Subhead({ children }: { children: React.ReactNode }) {
  return <h3>{children}</h3>;
}
