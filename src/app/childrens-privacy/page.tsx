import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { Eyebrow } from "@/components/primitives";

export const metadata: Metadata = {
  title: "Children's Privacy (COPPA)",
  description:
    "How The Program Suite collects and protects the personal information of children under 13, under COPPA and school authorization.",
};

const EFFECTIVE_DATE = "July 19, 2026";
const CONTACT_EMAIL  = "privacy@theprogramsuite.com";
const CONTACT_ADDR   = "5900 Balcones Drive, Suite 29102, Austin, TX 78731";

export default function ChildrensPrivacyPage() {
  return (
    <main className="min-h-screen bg-[color:var(--color-paper)] text-[color:var(--color-ink)]">
      <SiteNav />

      {/* Title band */}
      <section className="border-b" style={{ borderColor: "var(--color-line)" }}>
        <div className="mx-auto max-w-[1240px] px-5 py-16 md:px-8 md:py-20">
          <div className="mb-[18px]"><Eyebrow>Legal</Eyebrow></div>
          <h1 className="display" style={{ fontSize: "clamp(48px, 8vw, 120px)" }}>
            Children&apos;s <span className="headline-italic">privacy.</span>
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
          This notice explains how The Program Suite handles the personal information of children under
          the age of 13. It forms part of, and should be read together with, our{" "}
          <Link href="/privacy" className="underline font-medium">Privacy Policy</Link>.
        </div>

        <Section title="Children's Privacy (COPPA)">
          <p>
            The Program Suite is offered to schools and athletic programs, not directly to children,
            and it is not a general-audience service. Children do not sign up on their own. We collect
            personal information about a child under the age of 13 only when a school or athletic program
            enrolls the child, or when a parent or legal guardian registers the child.
          </p>

          <Subhead>How we obtain consent</Subhead>
          <p>
            For children under 13, we rely on one of two bases permitted by the Children's Online
            Privacy Protection Act ("COPPA"):
          </p>
          <ol className="list-decimal pl-5 space-y-2 mt-2">
            <li>
              <strong>School authorization.</strong> When a school or program uses the Service for an
              educational purpose, the school may authorize the collection of a student's personal
              information on behalf of the student's parents (acting in loco parentis), consistent with
              the guidance of the Federal Trade Commission. In that case, the school is responsible for
              providing any notice to and obtaining any consent from parents that applicable law requires,
              and our collection is limited to the educational purpose the school directs.
            </li>
            <li>
              <strong>Verifiable parental consent.</strong> When a parent or legal guardian registers a
              child directly, we obtain the parent's or guardian's consent at registration.
            </li>
          </ol>

          <Subhead>What we collect from children and why</Subhead>
          <p>
            We collect only the information needed to run the athletic program — for example, name, team
            and roster details, date of birth, attendance, scheduling, training and participation records,
            and, where a guardian is linked, guardian contact information. We use this information solely
            to provide the Service to the school, program, and family.
          </p>

          <Subhead>What we do not do</Subhead>
          <p>
            We do not use children's personal information for targeted advertising, and we do not sell or
            rent it. We do not use children's information to train artificial intelligence or
            machine-learning models. We do not condition a child's participation on disclosing more
            information than is reasonably necessary. We do not use a child's name, image, likeness, or
            content in promotional, sponsorship, or publicly published marketing materials without
            separate, specific consent from the child's parent, legal guardian, or authorizing school.
          </p>

          <Subhead>Parent and guardian rights</Subhead>
          <p>
            A parent or legal guardian (or the authorizing school on their behalf) may review the personal
            information we have collected from their child, request that we delete it, and refuse to permit
            its further collection or use. To exercise these rights, contact us at{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-blue-600 underline">{CONTACT_EMAIL}</a>, or
            ask your child's school or program, which can act on your behalf. We will honor a request to
            stop collecting a child's information, understanding that doing so may mean the child can no
            longer use the Service.
          </p>

          <Subhead>Data minimization and retention</Subhead>
          <p>
            We retain a child's personal information only as long as needed for the educational purpose it
            was collected for, and we delete it on the schedule described in the{" "}
            <Link href="/privacy#data-retention" className="text-blue-600 underline">Data Retention</Link>{" "}
            section of our Privacy Policy (and in our agreement with the school), unless the school, parent,
            or guardian asks us to delete it sooner.
          </p>

          <p className="mt-3">
            If you believe we have collected information from a child without the required school
            authorization or parental consent, contact us at{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-blue-600 underline">{CONTACT_EMAIL}</a>{" "}
            and we will promptly delete it or obtain the required consent.
          </p>
        </Section>

        <Section title="Contact">
          <p>Questions about this notice or about a child's information may be directed to:</p>
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

function Subhead({ children }: { children: React.ReactNode }) {
  return <h3>{children}</h3>;
}
