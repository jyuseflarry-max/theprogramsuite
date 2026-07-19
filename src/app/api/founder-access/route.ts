import { NextResponse } from "next/server";
import { Resend } from "resend";

const requiredFields = ["name", "email", "school", "role", "sports", "plan"] as const;

function field(formData: FormData, name: string) {
  const value = formData.get(name);
  return typeof value === "string" ? value.trim() : "";
}

type Lead = {
  email: string;
  message: string;
  name: string;
  plan: string;
  role: string;
  school: string;
  sports: string;
};

/**
 * Forward the lead into the app's Company Ops CRM (/api/leads/ingest) so it
 * lands in the Opps pipeline, not just an inbox. Best-effort: any failure here
 * is swallowed so the founder-access email flow still completes. Requires
 * LEADS_INGEST_URL + LEADS_INGEST_SECRET; skips silently when unset.
 */
async function forwardToCrm(lead: Lead) {
  const url = process.env.LEADS_INGEST_URL;
  const secret = process.env.LEADS_INGEST_SECRET;

  if (!url || !secret) {
    return;
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 5000);

  try {
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${secret}`
      },
      body: JSON.stringify({ ...lead, source: "marketing-site" }),
      signal: controller.signal
    });
  } catch {
    // Non-blocking: the email flow below is the source of truth if the CRM is down.
  } finally {
    clearTimeout(timeout);
  }
}

function appUrl(request: Request) {
  const configured = process.env.NEXT_PUBLIC_SITE_URL;

  if (configured) {
    return configured.replace(/\/$/, "");
  }

  return new URL(request.url).origin;
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const missing = requiredFields.filter((name) => !field(formData, name));

  if (missing.length > 0) {
    const redirectUrl = new URL("/founder-access/error", appUrl(request));
    redirectUrl.searchParams.set("reason", "missing");
    return NextResponse.redirect(redirectUrl, { status: 303 });
  }

  const lead = {
    email: field(formData, "email"),
    message: field(formData, "message"),
    name: field(formData, "name"),
    plan: field(formData, "plan"),
    role: field(formData, "role"),
    school: field(formData, "school"),
    sports: field(formData, "sports")
  };

  await forwardToCrm(lead);

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.FOUNDER_LEADS_TO_EMAIL ?? "founders@theprogramsuite.com";
  const fromEmail = process.env.FOUNDER_LEADS_FROM_EMAIL ?? "The Program Suite <founders@theprogramsuite.com>";

  if (!apiKey) {
    const redirectUrl = new URL("/founder-access/error", appUrl(request));
    redirectUrl.searchParams.set("reason", "email");
    return NextResponse.redirect(redirectUrl, { status: 303 });
  }

  const resend = new Resend(apiKey);
  const result = await resend.emails.send({
    from: fromEmail,
    replyTo: lead.email,
    subject: `Founder access request - ${lead.plan}`,
    to: toEmail,
    text: [
      "New founder access request",
      "",
      `Name: ${lead.name}`,
      `Email: ${lead.email}`,
      `School: ${lead.school}`,
      `Role: ${lead.role}`,
      `Sport(s): ${lead.sports}`,
      `Plan: ${lead.plan}`,
      "",
      "Biggest thing they need help managing:",
      lead.message || "Not provided"
    ].join("\n")
  });

  if (result.error) {
    const redirectUrl = new URL("/founder-access/error", appUrl(request));
    redirectUrl.searchParams.set("reason", "email");
    return NextResponse.redirect(redirectUrl, { status: 303 });
  }

  return NextResponse.redirect(new URL("/founder-access/thanks", appUrl(request)), { status: 303 });
}
