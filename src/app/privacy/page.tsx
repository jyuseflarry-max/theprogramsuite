import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | The Program Suite",
  description: "Privacy Policy for The Program Suite sports management platform.",
};

const EFFECTIVE_DATE = "April 10, 2026";
const CONTACT_EMAIL  = "privacy@theprogramsuite.com";
const CONTACT_ADDR   = "5900 Balcones Drive, Suite 29102, Austin, TX 78731";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* Header */}
      <div className="bg-[#0b0e14] border-b border-gray-800 px-6 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/">
            <Image src="/logo.png" alt="The Program Suite" width={130} height={34} className="h-8 w-auto object-contain" />
          </Link>
          <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
            Terms of Service →
          </Link>
        </div>
      </div>

      {/* Document */}
      <div className="max-w-3xl mx-auto px-6 py-12">

        <h1 className="text-3xl font-black text-gray-950 mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-10">
          Effective: {EFFECTIVE_DATE} &nbsp;·&nbsp; Operator: The Program Suite &nbsp;·&nbsp; Jurisdiction: Texas, USA
        </p>

        <Section title="1. Who We Are">
          <p>
            The Program Suite ("we," "us," or "our") is a Texas-based sports management platform that provides
            coaching, athletic administration, and program management tools to high school and college athletic
            programs. We operate the application at <strong>tpscoach.com</strong> and the marketing website at{" "}
            <strong>theprogramsuite.com</strong> (collectively, the "Service"). Both sites are owned and operated
            by the same entity under the laws of the State of Texas.
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
            <li>Date of birth (required for athlete accounts to verify minimum age)</li>
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
            <li>Body weight and biometric data entered in the strength and conditioning module (stored encrypted at rest)</li>
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
        </Section>

        <Section title="3. How We Use Your Information">
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>To operate the Service</strong> — providing coaching tools, attendance tracking, scheduling, scouting, and all other platform features</li>
            <li><strong>To manage accounts</strong> — creating and authenticating user accounts, sending password resets, managing role-based access</li>
            <li><strong>To coordinate medical information</strong> — routing doctor's notes to athletic training staff and notifying coaches of clearance status changes</li>
            <li><strong>To send transactional emails</strong> — account invitations, password resets, notification of submitted medical notes, and other service-driven communications. These emails are sent to all user types.</li>
            <li><strong>To send marketing communications</strong> — we send promotional emails about The Program Suite only to head coaches who are account holders. Athletes, family members, and other staff are never sent marketing or promotional email. Coaches may opt out at any time.</li>
            <li><strong>To enforce age requirements</strong> — we use date of birth to verify that athlete accounts meet the minimum age of 13 years. We do not create accounts for individuals under 13.</li>
            <li><strong>To improve the Service</strong> — aggregate, anonymized usage data helps us understand how the platform is used and where to focus improvements</li>
            <li><strong>To comply with legal obligations</strong> — we may use or retain data as required by applicable law, court order, or governmental authority</li>
          </ul>
        </Section>

        <Section title="4. How We Share Your Information">
          <p>
            We do not sell your personal information. We do not share your personal information
            with third parties for their own marketing purposes.
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
          <p>We use the following sub-processors to operate the Service. Each is bound to process data only on our instructions:</p>
          <table className="w-full text-sm mt-3 border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-4 py-2 font-semibold text-gray-700">Provider</th>
                <th className="text-left px-4 py-2 font-semibold text-gray-700">Purpose</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[
                ["Supabase", "Database, file storage, and user authentication"],
                ["Vercel", "Application hosting and privacy-first page analytics"],
                ["Resend", "Transactional and notification email delivery"],
                ["Cloudflare", "CDN, DDoS protection, and security filtering"],
                ["Upstash", "API rate limiting (temporary IP processing)"],
                ["Stripe", "Payment processing (when billing is enabled — card data is processed by Stripe and never stored by us)"],
              ].map(([name, purpose]) => (
                <tr key={name} className="bg-white">
                  <td className="px-4 py-2 font-medium">{name}</td>
                  <td className="px-4 py-2 text-gray-600">{purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>

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

        <Section title="6. Children's Privacy">
          <p>
            The Service is designed for use by athletic programs, coaches, and athletes. <strong>We
            do not knowingly create accounts for children under the age of 13.</strong> Athlete
            account registration requires entry of a date of birth, and the platform will not permit
            account creation for individuals who are younger than 13 years of age.
          </p>
          <p className="mt-3">
            For athletes between the ages of 13 and 17, we require a parent or legal guardian's
            name and email address at the time of registration. An account is automatically created
            for the guardian, and an invitation is sent to the provided email address. We encourage
            parents and guardians to stay involved in their athlete's account and to contact us
            at {" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-blue-600 underline">{CONTACT_EMAIL}</a>
            {" "} with any concerns.
          </p>
          <p className="mt-3">
            If we learn that we have inadvertently collected personal information from a child under
            13 without verifiable parental consent, we will delete that information promptly. If you
            believe a child under 13 has provided us with personal information, please contact us
            immediately.
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

        <Section title="8. Data Retention">
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
            <li>Sensitive data fields (biometric measurements) are encrypted at rest using AES-256-GCM</li>
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
      <div className="border-t border-gray-200 py-8 mt-4">
        <div className="max-w-3xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-500">
          <span>© {new Date().getFullYear()} The Program Suite. All rights reserved.</span>
          <div className="flex gap-4">
            <Link href="/terms" className="hover:text-gray-900 transition-colors">Terms of Service</Link>
            <Link href="/privacy" className="hover:text-gray-900 transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Layout helpers ─────────────────────────────────────────────────────────

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold text-gray-950 mb-4 pb-2 border-b border-gray-200">{title}</h2>
      <div className="text-gray-700 leading-relaxed text-sm space-y-1">{children}</div>
    </section>
  );
}

function Subhead({ children }: { children: React.ReactNode }) {
  return <h3 className="font-semibold text-gray-900 mt-4 mb-1.5">{children}</h3>;
}
