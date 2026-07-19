import { NextResponse } from "next/server";

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
 * Forward the lead to the app's Company Ops CRM (/api/leads/ingest). The app is
 * the single system of record: it stores the lead in company_ops.leads AND
 * sends the one notification email (LEADS_NOTIFY_EMAIL). This route no longer
 * emails directly. Returns whether the lead was accepted so the caller can send
 * the visitor to the thanks or error page instead of silently dropping a lead.
 */
async function forwardToCrm(lead: Lead): Promise<boolean> {
  const url = process.env.LEADS_INGEST_URL;
  const secret = process.env.LEADS_INGEST_SECRET;

  if (!url || !secret) {
    return false;
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${secret}`
      },
      body: JSON.stringify({ ...lead, source: "marketing-site" }),
      signal: controller.signal
    });

    return response.ok;
  } catch {
    return false;
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

  const accepted = await forwardToCrm(lead);

  if (!accepted) {
    const redirectUrl = new URL("/founder-access/error", appUrl(request));
    redirectUrl.searchParams.set("reason", "send");
    return NextResponse.redirect(redirectUrl, { status: 303 });
  }

  return NextResponse.redirect(new URL("/founder-access/thanks", appUrl(request)), { status: 303 });
}
