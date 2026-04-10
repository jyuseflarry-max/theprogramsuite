import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | The Program Suite",
  description: "Terms of Service for The Program Suite sports management platform.",
};

const EFFECTIVE_DATE = "April 10, 2026";
const CONTACT_EMAIL  = "privacy@theprogramsuite.com";
const CONTACT_ADDR   = "5900 Balcones Drive, Suite 29102, Austin, TX 78731";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* Header */}
      <div className="bg-[#0b0e14] border-b border-gray-800 px-6 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/">
            <Image src="/logo.png" alt="The Program Suite" width={130} height={34} className="h-8 w-auto object-contain" />
          </Link>
          <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
            Privacy Policy →
          </Link>
        </div>
      </div>

      {/* Document */}
      <div className="max-w-3xl mx-auto px-6 py-12">

        <h1 className="text-3xl font-black text-gray-950 mb-2">Terms of Service</h1>
        <p className="text-sm text-gray-500 mb-10">
          Effective: {EFFECTIVE_DATE} &nbsp;·&nbsp; Operator: The Program Suite &nbsp;·&nbsp; Jurisdiction: Texas, USA
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-xl px-5 py-4 text-sm text-blue-900 mb-10 leading-relaxed">
          <strong>Please read these Terms carefully before using the Service.</strong> By creating an account,
          accessing, or using The Program Suite, you agree to be bound by these Terms of Service and our{" "}
          <Link href="/privacy" className="underline font-medium">Privacy Policy</Link>. If you do not agree,
          do not use the Service.
        </div>

        <Section title="1. The Service">
          <p>
            The Program Suite ("we," "us," or "our") provides a cloud-based athletic program management
            platform accessible at <strong>tpscoach.com</strong>, with a marketing presence at{" "}
            <strong>theprogramsuite.com</strong>. Both sites are operated by The Program Suite, a Texas
            entity. The Service includes tools for practice planning, athlete management, attendance
            tracking, scheduling, strength and conditioning logging, scouting, communications, and
            related athletic program administration features (collectively, the "Service").
          </p>
          <p className="mt-3">
            The Service is intended for use by athletic programs, their coaching and administrative staff,
            athletes aged 13 and older, and the families of those athletes.
          </p>
        </Section>

        <Section title="2. Account Registration and Eligibility">
          <Subhead>Minimum Age</Subhead>
          <p>
            You must be at least 13 years of age to hold an account on the Service. The platform
            enforces this requirement at registration by requiring a date of birth. Accounts will not be
            created for individuals under 13. If we learn that an account has been created in violation
            of this requirement, we will terminate the account and delete associated data without notice.
          </p>

          <Subhead>Athlete Accounts</Subhead>
          <p>
            Athletes between the ages of 13 and 17 must provide a parent or legal guardian's name and
            email address at registration. An associated family account is automatically created for the
            guardian. By registering an athlete account for a minor, you represent that you are the
            parent or legal guardian of that minor, or that you have obtained authorization from a parent
            or legal guardian to register the minor.
          </p>

          <Subhead>Program Accounts (Tenants)</Subhead>
          <p>
            Organizations, schools, and coaching staff may create a program account ("tenant account")
            to manage their athletic program on the Service. The individual who creates the tenant
            account is the account owner and is responsible for all activity that occurs under that
            account, including activity by coaches, administrators, athletes, and family members they
            add to the program.
          </p>

          <Subhead>Account Security</Subhead>
          <p>
            You are responsible for maintaining the confidentiality of your login credentials. You agree
            to notify us immediately at {CONTACT_EMAIL} if you suspect unauthorized access to your
            account. We are not liable for any loss resulting from unauthorized use of your account.
          </p>
        </Section>

        <Section title="3. Acceptable Use">
          <p>You agree to use the Service only for lawful purposes and in accordance with these Terms. You agree not to:</p>
          <ul className="list-disc pl-5 space-y-1.5 mt-2">
            <li>Use the Service to violate any applicable federal, state, or local law or regulation</li>
            <li>Upload, transmit, or share any content that is unlawful, defamatory, harassing, abusive, fraudulent, or invasive of another person's privacy</li>
            <li>Impersonate any person or entity, or falsely state or misrepresent your affiliation with a person or entity</li>
            <li>Share, resell, or provide access to the Service to any third party without our authorization</li>
            <li>Attempt to gain unauthorized access to any portion of the Service or its related systems</li>
            <li>Introduce any viruses, malware, or other harmful code into the Service</li>
            <li>Use automated tools, scrapers, or bots to access, collect data from, or interact with the Service</li>
            <li>Use the Service to store or transmit any content that infringes any intellectual property right of any party</li>
            <li>Use health or medical information available through the Service for any purpose other than the legitimate athletic administration purposes for which it was submitted</li>
            <li>Use the Service in any manner that could disable, overburden, or impair the Service or interfere with any other party's use of the Service</li>
          </ul>
        </Section>

        <Section title="4. Medical Information Disclaimer">
          <p>
            <strong>The Program Suite is not a healthcare provider and does not provide medical advice,
            diagnosis, or treatment.</strong> The medical notes feature is provided solely as an
            administrative coordination tool to help athletic programs manage participation clearance
            status and facilitate communication between athletes, coaches, and athletic training staff.
          </p>
          <p className="mt-3">
            <strong>The Service is not a HIPAA-compliant medical records system.</strong> We are not
            a covered entity or business associate under the Health Insurance Portability and
            Accountability Act (HIPAA). Medical information submitted through the Service is treated
            with care but is not subject to HIPAA's technical or administrative safeguard requirements.
            Programs that are covered entities or that require HIPAA-compliant documentation systems
            should consult qualified legal and compliance counsel before using the medical notes feature
            as part of their compliance program.
          </p>
          <p className="mt-3">
            Participation clearance decisions, return-to-play determinations, and all medical judgments
            remain the sole responsibility of qualified healthcare professionals and the athletic training
            staff of each program. The Program Suite bears no responsibility for decisions made on the
            basis of information submitted through the medical notes feature.
          </p>
          <p className="mt-3">
            By submitting medical information through the Service, you consent to that information being
            accessible to your program's coaching staff and being transmitted by email to the athletic
            training contacts designated by your program.
          </p>
        </Section>

        <Section title="5. Content and Data Ownership">
          <Subhead>Your Content</Subhead>
          <p>
            You retain ownership of all content, data, and information you submit to the Service
            ("Your Content"). By submitting Your Content to the Service, you grant The Program Suite
            a limited, non-exclusive, royalty-free license to store, process, display, and transmit
            Your Content solely to the extent necessary to provide the Service to you.
          </p>
          <p className="mt-3">
            We do not use Your Content — including athlete data, medical information, practice plans,
            scouting reports, or communications — to train artificial intelligence or machine learning
            models, or to sell to third parties.
          </p>

          <Subhead>Our Content</Subhead>
          <p>
            The Service, including its design, code, features, and content created by The Program Suite,
            is protected by copyright, trademark, and other intellectual property laws. Nothing in these
            Terms grants you any right to use our trademarks, brand names, or proprietary content
            outside of your use of the Service.
          </p>

          <Subhead>Feedback</Subhead>
          <p>
            If you provide feedback, suggestions, or ideas about the Service, you grant us the right
            to use that feedback without restriction or compensation.
          </p>
        </Section>

        <Section title="6. Payment and Billing">
          <p>
            Paid features of the Service are billed on a subscription basis. By subscribing, you
            authorize us to charge your payment method on a recurring basis at the applicable rate.
          </p>
          <ul className="list-disc pl-5 space-y-1.5 mt-2">
            <li>
              <strong>30-Day Satisfaction Guarantee:</strong> If you are not satisfied with the Service,
              you may request a full refund within 30 days of your initial subscription payment by
              contacting {CONTACT_EMAIL}. This guarantee applies to your first payment only. Subsequent
              billing periods are non-refundable.
            </li>
            <li>
              <strong>Cancellation:</strong> You may cancel your subscription at any time. Cancellation
              stops future charges; it does not entitle you to a refund of any amounts already paid
              beyond the 30-day guarantee window.
            </li>
            <li>
              <strong>Delinquency:</strong> We reserve the right to suspend or terminate access to the
              Service if payment is not received within the applicable grace period after a failed charge.
            </li>
            <li>
              <strong>Price Changes:</strong> We will provide at least 30 days' advance notice of any
              price increases via email to the account owner.
            </li>
          </ul>
          <p className="mt-3">
            Payment processing is handled by Stripe. We do not store your full payment card number,
            CVV, or other sensitive card data on our servers.
          </p>
        </Section>

        <Section title="7. Account Suspension and Termination">
          <Subhead>Termination by You</Subhead>
          <p>
            You may cancel your account at any time through the account settings or by contacting us.
            Upon cancellation, your access to the Service will continue through the end of your current
            billing period.
          </p>

          <Subhead>Termination by Us</Subhead>
          <p>
            We may suspend or terminate your account immediately, without prior notice, if:
          </p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>You breach any provision of these Terms</li>
            <li>Payment remains delinquent after applicable notice and cure periods</li>
            <li>We are required to do so by law, court order, or governmental authority</li>
            <li>Your use of the Service causes harm or risk to other users, the Service, or third parties</li>
          </ul>

          <Subhead>Data After Termination</Subhead>
          <p className="mt-2">
            Following cancellation or termination of a tenant account, your program's data — including
            athlete records, practice plans, and uploaded files — will be retained for <strong>90 days</strong>.
            During this period, you may request a data export by contacting us. After 90 days, all
            personal data associated with the account is permanently deleted from our active systems.
            Backup copies cycle out within an additional 30 days.
          </p>
          <p className="mt-3">
            Individual user accounts created by athletes or family members that are not linked to an
            active program will be subject to the same 90-day retention period following deletion.
          </p>
        </Section>

        <Section title="8. Privacy">
          <p>
            Your use of the Service is also governed by our{" "}
            <Link href="/privacy" className="text-blue-600 underline">Privacy Policy</Link>, which
            is incorporated into these Terms by reference. Please review the Privacy Policy for
            information about how we collect, use, and share your personal information.
          </p>
        </Section>

        <Section title="9. Disclaimer of Warranties">
          <p className="uppercase font-semibold text-sm tracking-wide text-gray-600 mb-2">Read carefully</p>
          <p>
            The Service is provided <strong>"as is"</strong> and <strong>"as available"</strong> without
            warranty of any kind, express or implied. To the fullest extent permitted by applicable law,
            The Program Suite disclaims all warranties, including but not limited to implied warranties of
            merchantability, fitness for a particular purpose, and non-infringement.
          </p>
          <p className="mt-3">
            We do not warrant that the Service will be uninterrupted, error-free, or free from viruses
            or other harmful components. We do not warrant that any information provided through the
            Service, including health or athletic performance information, is accurate, complete, or
            suitable for any particular purpose.
          </p>
        </Section>

        <Section title="10. Limitation of Liability">
          <p className="uppercase font-semibold text-sm tracking-wide text-gray-600 mb-2">Read carefully</p>
          <p>
            To the maximum extent permitted by applicable law, The Program Suite and its officers,
            employees, agents, and licensors shall not be liable for any indirect, incidental, special,
            consequential, or punitive damages arising from or related to your use of or inability to use
            the Service, including but not limited to loss of data, loss of revenue, personal injury, or
            property damage — even if we have been advised of the possibility of such damages.
          </p>
          <p className="mt-3">
            In no event shall our total liability to you for all claims arising from or related to the
            Service exceed the greater of (a) the total amount paid by you to The Program Suite in the
            12 months preceding the claim, or (b) $100.
          </p>
          <p className="mt-3">
            Some jurisdictions do not allow the exclusion of certain warranties or limitation of liability
            for consequential damages. In such jurisdictions, our liability is limited to the greatest
            extent permitted by law.
          </p>
        </Section>

        <Section title="11. Indemnification">
          <p>
            You agree to indemnify, defend, and hold harmless The Program Suite and its officers,
            directors, employees, and agents from and against any claims, liabilities, damages, losses,
            and expenses, including reasonable legal fees, arising out of or in any way connected with
            (a) your access to or use of the Service; (b) your violation of these Terms; (c) Your Content;
            or (d) your violation of any third party's rights, including privacy or intellectual property rights.
          </p>
        </Section>

        <Section title="12. Governing Law and Dispute Resolution">
          <p>
            These Terms are governed by the laws of the State of Texas, without regard to its conflict-of-law
            principles. Any dispute arising out of or relating to these Terms or the Service shall be resolved
            exclusively in the state or federal courts located in Travis County, Texas, and you consent to
            the personal jurisdiction of those courts.
          </p>
          <p className="mt-3">
            Before filing any legal claim, you agree to first contact us at {CONTACT_EMAIL} and give us
            30 days to attempt to resolve the dispute informally. This requirement does not apply to
            claims for injunctive or other equitable relief.
          </p>
        </Section>

        <Section title="13. Educational Records (FERPA Notice)">
          <p>
            For programs operated by educational institutions, certain athlete records stored in the
            Service may constitute "education records" under the Family Educational Rights and Privacy Act
            (FERPA). The Program Suite acts as a service provider to educational institutions and processes
            educational records only on behalf of and under the direction of the institution. Institutions
            are responsible for ensuring their use of the Service complies with FERPA and any applicable
            state student privacy laws.
          </p>
        </Section>

        <Section title="14. Changes to These Terms">
          <p>
            We may modify these Terms at any time. Material changes will be communicated to account
            owners by email at least 14 days before they take effect. The updated Terms will also be
            posted at this URL with a revised effective date. Your continued use of the Service after
            the effective date of any changes constitutes acceptance of the updated Terms.
          </p>
          <p className="mt-3">
            If you do not agree to the updated Terms, you must stop using the Service and cancel your
            account before the effective date of the changes.
          </p>
        </Section>

        <Section title="15. General Provisions">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Entire Agreement:</strong> These Terms, together with the Privacy Policy and any
              additional terms applicable to specific features, constitute the entire agreement between
              you and The Program Suite regarding the Service.
            </li>
            <li>
              <strong>Severability:</strong> If any provision of these Terms is found to be unenforceable,
              the remaining provisions will continue in full force and effect.
            </li>
            <li>
              <strong>No Waiver:</strong> Our failure to enforce any right or provision of these Terms
              will not be considered a waiver of those rights.
            </li>
            <li>
              <strong>Assignment:</strong> You may not assign your rights or obligations under these Terms
              without our prior written consent. We may assign our rights and obligations without restriction.
            </li>
          </ul>
        </Section>

        <Section title="16. Contact">
          <p>Questions, concerns, or legal notices regarding these Terms should be directed to:</p>
          <div className="mt-3 bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-sm space-y-1">
            <p><strong>The Program Suite</strong></p>
            <p>Attn: Legal</p>
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
