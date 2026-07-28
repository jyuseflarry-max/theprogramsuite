import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { Eyebrow } from "@/components/primitives";

export const metadata: Metadata = {
  title: "Privacy Policy | The Program Suite",
  description: "Privacy Policy for The Program Suite sports management platform.",
};

const EFFECTIVE_DATE = "July 19, 2026";
const LAST_UPDATED   = "July 27, 2026";
const CONTACT_EMAIL  = "privacy@theprogramsuite.com";
const CONTACT_ADDR   = "5900 Balcones Drive, Suite 29102, Austin, TX 78731";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[color:var(--color-paper)] text-[color:var(--color-ink)]">
      <SiteNav />

      {/* Title band */}
      <section className="border-b" style={{ borderColor: "var(--color-line)" }}>
        <div className="mx-auto max-w-[1240px] px-5 py-16 md:px-8 md:py-20">
          <div className="mb-[18px]"><Eyebrow>Legal</Eyebrow></div>
          <h1 className="display" style={{ fontSize: "clamp(48px, 8vw, 120px)" }}>
            Privacy <span className="headline-italic">policy.</span>
          </h1>
          <p className="mt-6 text-[13px] font-semibold uppercase tracking-[0.08em] text-[color:var(--color-muted)]">
            Effective: {EFFECTIVE_DATE} · Last updated: {LAST_UPDATED} · Operator: CJ3 Legacy Holdings, LLC · Jurisdiction: Texas, USA
          </p>
          <div className="mt-4">
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

        <Section title="1. Who We Are">
          <p>
            The Program Suite ("we," "us," or "our") is a Texas-based sports management platform that provides
            coaching, athletic administration, and program management tools to high school and college athletic
            programs. The Program Suite is owned and operated by <strong>CJ3 Legacy Holdings, LLC</strong>, a Texas
            limited liability company. We operate the application at <strong>app.theprogramsuite.com</strong> and the marketing website at{" "}
            <strong>theprogramsuite.com</strong> (collectively, the "Service"). Both sites are owned and operated
            by CJ3 Legacy Holdings, LLC under the laws of the State of Texas.
          </p>
          <p className="mt-3">
            Questions about this Policy may be directed to:{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-blue-600 underline">{CONTACT_EMAIL}</a>
            <br />
            Mailing address: {CONTACT_ADDR}
          </p>
        </Section>

        <Section title="2. Information We Collect">
          <p>We collect the following categories of personal information:</p>

          <Subhead>Account and Identity Information</Subhead>
          <ul className="list-disc pl-5 space-y-1">
            <li>Full name, email address, and password (hashed — we never store plaintext passwords)</li>
            <li>Role within a program (coach, admin, athlete, family member)</li>
            <li>Profile photo (optional, uploaded by the user)</li>
            <li>Jersey number and athletic position (athlete accounts)</li>
            <li>Date of birth (collected for athlete accounts to administer age-appropriate features and rosters)</li>
          </ul>

          <Subhead>Guardian and Family Information</Subhead>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              When an athlete registers, we collect the name and email address of at least one
              parent or legal guardian. This information is used to create an associated family
              account and to send an invitation to that guardian.
            </li>
            <li>
              Family members may also add themselves to an athlete's account using an invitation
              link provided by the coaching staff or generated through the platform.
            </li>
          </ul>

          <Subhead>Health and Medical Information</Subhead>
          <ul className="list-disc pl-5 space-y-1">
            <li>Doctor's notes, medical clearance status, and participation restrictions submitted by athletes or coaching staff</li>
            <li>Injury status flags set by coaching staff for scheduling and attendance purposes</li>
            <li>Body weight and other athletic performance and health metrics — such as readiness, training load, and strength and conditioning entries — recorded in the strength and conditioning module (stored encrypted at rest)</li>
          </ul>

          <Subhead>Program and Performance Data</Subhead>
          <ul className="list-disc pl-5 space-y-1">
            <li>Attendance records and participation history</li>
            <li>Practice plans, drill libraries, and session notes</li>
            <li>Scouting reports and opponent information</li>
            <li>Strength training logs and nutrition data</li>
            <li>Disciplinary or behavioral notes entered by coaching staff</li>
          </ul>

          <Subhead>Communications</Subhead>
          <ul className="list-disc pl-5 space-y-1">
            <li>Messages and announcements sent through the platform</li>
            <li>Files and attachments uploaded to announcements or events</li>
          </ul>

          <Subhead>Technical and Usage Data</Subhead>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Page-level analytics collected by Vercel Analytics (page views, referrer, country-level
              location). Vercel Analytics does not use cookies and does not track individual users across
              sessions or sites.
            </li>
            <li>IP addresses processed by Cloudflare for security, DDoS protection, and rate limiting</li>
            <li>IP addresses temporarily held by Upstash for API rate limiting (not retained beyond the rate-limit window)</li>
            <li>Browser type and device type inferred from your User-Agent header</li>
            <li>Login timestamps</li>
          </ul>
          <p className="mt-3">
            The analytics and usage data described above is collected only through our websites
            (theprogramsuite.com and the app.theprogramsuite.com web interface). Our native iOS app,
            <strong> The Program Suite — Coach</strong>, does not include Vercel Analytics or any other
            third-party analytics, usage-tracking, or advertising SDK.
          </p>
        </Section>

        <Section title="3. How We Use Your Information">
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>To operate the Service</strong> — providing coaching tools, attendance tracking, scheduling, scouting, and all other platform features</li>
            <li><strong>To manage accounts</strong> — creating and authenticating user accounts, sending password resets, managing role-based access</li>
            <li><strong>To coordinate medical information</strong> — routing doctor's notes to athletic training staff and notifying coaches of clearance status changes</li>
            <li><strong>To send transactional emails</strong> — account invitations, password resets, notification of submitted medical notes, and other service-driven communications. These emails are sent to all user types.</li>
            <li><strong>To send marketing communications</strong> — we send promotional emails about The Program Suite only to head coaches who are account holders. Athletes, family members, and other staff are never sent marketing or promotional email. Coaches may opt out at any time.</li>
            <li><strong>To manage accounts for minors</strong> — we use date of birth and enrollment details to administer accounts for athletes, including minors and children under 13, who are enrolled through a school, program, parent, or legal guardian. See our <a href="/childrens-privacy" className="text-blue-600 underline">Children's Privacy (COPPA)</a> notice for how we obtain consent and limit our use of children's information.</li>
            <li><strong>To improve the Service</strong> — aggregate, anonymized usage data helps us understand how the platform is used and where to focus improvements</li>
            <li><strong>To comply with legal obligations</strong> — we may use or retain data as required by applicable law, court order, or governmental authority</li>
          </ul>
        </Section>

        <Section title="4. How We Share Your Information">
          <p>
            We do not sell your personal information. We do not share your personal information
            with third parties for their own marketing purposes. Where a school or program authorizes
            our collection of student data on behalf of parents, we process that student data only for
            the educational purpose the school directs and never for our own commercial purposes,
            consistent with the Federal Trade Commission's COPPA school-authorization guidance and our{" "}
            <a href="/childrens-privacy" className="text-blue-600 underline">Children's Privacy (COPPA)</a>{" "}
            notice.
          </p>
          <p className="mt-3">We share information in the following limited circumstances:</p>

          <Subhead>Within Your Program</Subhead>
          <p>
            Coaches, administrators, and authorized staff within your athletic program can view
            information about athletes and family members in that program. This is the core function
            of the Service. Athletes can view their own data. Family members can view data associated
            with their linked athlete.
          </p>

          <Subhead>Training Staff (Medical Notes)</Subhead>
          <p>
            When a doctor's note is submitted, the platform emails a notification and a copy of
            the attached file to the athletic training staff contacts designated by the program's
            coaching staff. These contacts are stored in the system by the coaching staff and may
            not have accounts on the platform.
          </p>

          <Subhead>Data Processors (Service Providers)</Subhead>
          <p>
            We use a set of third-party sub-processors to operate the Service — for hosting, our
            database, email delivery, security, payments, and related functions. Each is bound to process
            data only on our documented instructions and to maintain appropriate security. Where a school
            or program authorizes our collection of student data, our sub-processors process that data only
            for the educational purpose the school directs.
          </p>
          <p className="mt-3">
            Our current sub-processors, the purpose of each, the categories of data they process, and their
            processing location are listed on our{" "}
            <Link href="/subprocessors" className="text-blue-600 underline">Sub-processors</Link> page,
            which we keep up to date as the Service evolves.
          </p>

          <Subhead>Push Notifications (Mobile App)</Subhead>
          <p>
            Our native iOS app, <strong>The Program Suite — Coach</strong>, can send push notifications
            to your device to deliver Service-related messages such as announcements, schedule changes,
            and clearance updates. Push delivery relies on two providers: Apple Push Notification service
            (APNs) and Firebase Cloud Messaging, a Google service. To route a notification to the correct
            device, these services use a device-level push token that identifies your specific device. We
            use this token only to deliver Service notifications, and you can turn notifications off at any
            time in your device settings.
          </p>
          <p className="mt-3">
            We use Firebase Cloud Messaging solely to deliver these messages. We do not use Firebase
            Analytics, Firebase Crashlytics, or any other third-party analytics or advertising SDK inside
            the app, and the push token is not used to track you across apps or websites.
          </p>

          <Subhead>Legal Requirements</Subhead>
          <p>
            We may disclose information if required to do so by law, regulation, legal process,
            or governmental request, or when we believe disclosure is necessary to protect our rights,
            protect your safety or the safety of others, or investigate fraud.
          </p>

          <Subhead>Business Transfers</Subhead>
          <p>
            If The Program Suite is involved in a merger, acquisition, or sale of assets, your
            information may be transferred. We will provide notice before your information is
            transferred and becomes subject to a different privacy policy.
          </p>
        </Section>

        <Section title="5. Medical Information">
          <p>
            <strong>The Program Suite is not a HIPAA-covered entity and does not provide
            HIPAA-compliant medical record storage.</strong> The medical notes feature is an
            administrative coordination tool designed to help athletic programs manage participation
            clearance status and communicate between athletes, coaches, and athletic training staff.
            It is not a medical records system, an electronic health record (EHR), or a substitute
            for clinical documentation.
          </p>
          <p className="mt-3">
            Users who submit doctor's notes or medical information through the platform acknowledge
            that this information will be accessible to their program's coaching staff and will be
            emailed to the athletic training contacts designated by that program. By submitting
            medical information, you consent to this disclosure within your athletic program.
          </p>
          <p className="mt-3">
            Programs that are covered entities under HIPAA or that require HIPAA-compliant handling
            of health information should not use the medical notes feature as a substitute for their
            existing compliant systems and should consult with their legal counsel regarding appropriate
            use.
          </p>
          <p className="mt-3">
            Nothing in the Service constitutes medical advice. Participation clearance decisions remain
            the responsibility of qualified healthcare and athletic training professionals.
          </p>
        </Section>

        <Section title="6. Children's Privacy (COPPA)" id="childrens-privacy">
          <p>
            The Program Suite is offered to schools and athletic programs, not directly to children,
            and it is not a general-audience service. Children do not sign up on their own. We collect
            personal information about a child under the age of 13 only when a school or athletic program
            enrolls the child, or when a parent or legal guardian registers the child.
          </p>
          <p className="mt-3">
            Our full notice for children under 13 — how we obtain consent (school authorization and
            verifiable parental consent), what we collect from children and why, what we never do with
            that information, and how parents, guardians, and schools can review or delete it — is
            published as a dedicated page:
          </p>
          <p className="mt-3">
            <Link href="/childrens-privacy" className="text-blue-600 underline font-medium">
              Children&apos;s Privacy (COPPA) →
            </Link>
          </p>
        </Section>

        <Section title="7. Cookies and Tracking">
          <p>We use the following technologies on the Service:</p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>
              <strong>Authentication cookies</strong> — set by Supabase to maintain your login session.
              These are strictly necessary for the Service to function. They are session cookies and
              expire when you sign out or when your session times out.
            </li>
            <li>
              <strong>Vercel Analytics</strong> — measures page views and performance using a
              privacy-preserving method that does not set cookies and does not use persistent identifiers.
              Data is collected at the aggregate level.
            </li>
            <li>
              <strong>Vercel Speed Insights</strong> — measures real-user page performance (load times,
              Core Web Vitals). No cookies are set.
            </li>
          </ul>
          <p className="mt-3">
            We do not use advertising cookies, cross-site tracking cookies, or third-party behavioral
            tracking on the Service.
          </p>
        </Section>

        <Section title="8. Data Retention" id="data-retention">
          <p>
            We retain your personal information for as long as your account is active and for a
            period following account closure or program cancellation as described below:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>
              <strong>Active accounts:</strong> Data is retained for the duration of the account
              and updated as the Service is used.
            </li>
            <li>
              <strong>Student data:</strong> Where a school or program enrolls a student, we retain the
              student's personal information only as long as needed for the educational purpose it was
              collected for and as set out in our agreement with the institution. It is deleted on the
              same 90-day post-cancellation schedule described here (with backups cycling out within an
              additional 30 days), unless the school, parent, or guardian asks us to delete it sooner.
            </li>
            <li>
              <strong>After cancellation or deletion:</strong> We retain your data for <strong>90 days</strong>{" "}
              following cancellation or account deletion. During this period, you may request a data
              export or reactivate your account to recover your data. After 90 days, personal data is
              permanently deleted from our active systems.
            </li>
            <li>
              <strong>Backup systems:</strong> Deleted data may remain in encrypted backup snapshots
              for up to an additional 30 days before cycling out of backup rotation.
            </li>
            <li>
              <strong>Anonymized data:</strong> Aggregated, de-identified usage data with no personal
              identifiers may be retained indefinitely for product improvement purposes.
            </li>
            <li>
              <strong>Legal holds:</strong> We may retain certain data for longer periods if required
              by law, regulation, or ongoing legal proceedings.
            </li>
          </ul>
        </Section>

        <Section title="9. Your Privacy Rights">
          <p>
            Depending on where you live, you may have the following rights regarding your personal
            information:
          </p>

          <Subhead>Texas Residents (Texas Data Privacy and Security Act)</Subhead>
          <ul className="list-disc pl-5 space-y-1">
            <li>Right to know what personal data we have collected about you</li>
            <li>Right to correct inaccurate personal data</li>
            <li>Right to delete personal data we hold about you</li>
            <li>Right to obtain a portable copy of your personal data</li>
            <li>Right to opt out of the sale of personal data (we do not sell personal data)</li>
            <li>Right to opt out of profiling for decisions that produce legal or similarly significant effects (we do not engage in such profiling)</li>
          </ul>

          <Subhead>California Residents (CCPA/CPRA)</Subhead>
          <ul className="list-disc pl-5 space-y-1">
            <li>Right to know the categories and specific pieces of personal information collected</li>
            <li>Right to delete personal information</li>
            <li>Right to correct inaccurate personal information</li>
            <li>Right to opt out of the sale or sharing of personal information (we do not sell or share)</li>
            <li>Right to non-discrimination for exercising your privacy rights</li>
          </ul>

          <p className="mt-4">
            To exercise any of these rights, contact us at{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-blue-600 underline">{CONTACT_EMAIL}</a>.
            We will respond within 45 days. For complex requests, we may extend this period by an
            additional 45 days and will notify you of the extension. We may need to verify your
            identity before processing your request.
          </p>
          <p className="mt-3">
            If you are an athlete or family member and your account was created by a coach or
            administrator, some data may be part of that program's records. Deletion requests for
            program-level records may require coordination with the program's coaching staff.
          </p>
        </Section>

        <Section title="10. Data Security">
          <p>
            We implement industry-standard security measures to protect your personal information:
          </p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>All data is transmitted over encrypted HTTPS connections</li>
            <li>Passwords are hashed using industry-standard algorithms and are never stored in plaintext</li>
            <li>Sensitive data fields (athletic performance and health metrics) are encrypted at rest using AES-256-GCM</li>
            <li>File storage is hosted in private, access-controlled buckets; sensitive files are served via short-lived signed URLs</li>
            <li>Database access is governed by row-level security policies tied to each program's tenant context</li>
            <li>Access to production systems is restricted to authorized personnel</li>
          </ul>
          <p className="mt-3">
            No security system is impenetrable. In the event of a data breach that affects your
            personal information, we will notify affected users in accordance with applicable law.
          </p>
        </Section>

        <Section title="11. Marketing Opt-Out">
          <p>
            We send marketing and promotional emails only to head coaches who are account holders.
            Athletes, family members, and non-head-coach staff are not sent promotional emails.
          </p>
          <p className="mt-3">
            Coaches may opt out of marketing communications at any time by clicking the unsubscribe
            link in any marketing email or by emailing{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-blue-600 underline">{CONTACT_EMAIL}</a>.
            Opting out of marketing emails does not affect transactional and service-related emails,
            which are necessary for the operation of your account.
          </p>
        </Section>

        <Section title="12. Changes to This Policy">
          <p>
            We may update this Privacy Policy from time to time. When we make material changes, we
            will update the "Last Updated" date at the top of this page and, where appropriate,
            notify account holders by email or through an in-app notice. Your continued use of the
            Service after any changes take effect constitutes your acceptance of the updated Policy.
          </p>
        </Section>

        <Section title="13. Contact Us">
          <p>For privacy-related questions, requests, or concerns:</p>
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

function Section({ title, children, id }: { title: string; children: React.ReactNode; id?: string }) {
  return (
    <section id={id} className={id ? "scroll-mt-24" : undefined}>
      <h2>{title}</h2>
      <div>{children}</div>
    </section>
  );
}

function Subhead({ children }: { children: React.ReactNode }) {
  return <h3>{children}</h3>;
}
