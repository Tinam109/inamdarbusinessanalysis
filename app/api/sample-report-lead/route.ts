import { NextResponse } from "next/server";

type LeadPayload = {
  name?: string;
  email?: string;
  phone?: string;
  source?: string;
  entityName?: string;
  tier?: string;
  turnaround?: string;
  notes?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  gclid?: string;
  referrer?: string;
  landing_page?: string;
};

function clean(value: unknown) {
  return typeof value === "string" ? value.trim().slice(0, 500) : "";
}

export async function POST(request: Request) {
  let payload: LeadPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const lead = {
    name: clean(payload.name),
    email: clean(payload.email),
    phone: clean(payload.phone),
    source: clean(payload.source) || "sample-report",
    entityName: clean(payload.entityName),
    tier: clean(payload.tier),
    turnaround: clean(payload.turnaround),
    notes: clean(payload.notes),
    utm_source: clean(payload.utm_source) || "direct",
    utm_medium: clean(payload.utm_medium) || "none",
    utm_campaign: clean(payload.utm_campaign) || "none",
    utm_term: clean(payload.utm_term),
    utm_content: clean(payload.utm_content),
    gclid: clean(payload.gclid),
    referrer: clean(payload.referrer) || "direct",
    landing_page: clean(payload.landing_page) || "/sample-report",
    userAgent: request.headers.get("user-agent") || "",
    submittedAt: new Date().toISOString(),
  };

  if (!lead.name || !lead.email) {
    return NextResponse.json(
      { error: "Name and email are required." },
      { status: 400 },
    );
  }

  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(lead),
      });
    } catch (e) {
      console.error("Failed to forward lead to Google Sheets webhook:", e);
    }
  }

  // Capturing event to PostHog asynchronously (non-blocking)
  const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  if (posthogKey) {
    const posthogHost = process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.posthog.com";
    const ip = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "";

    fetch(`${posthogHost}/capture/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        api_key: posthogKey,
        event: lead.source === "order_page" ? "order_requested" : "sample_report_requested",
        properties: {
          distinct_id: lead.email,
          name: lead.name,
          email: lead.email,
          phone: lead.phone,
          source: lead.source,
          entity_name: lead.entityName,
          tier: lead.tier,
          turnaround: lead.turnaround,
          utm_source: lead.utm_source,
          utm_medium: lead.utm_medium,
          utm_campaign: lead.utm_campaign,
          utm_term: lead.utm_term,
          utm_content: lead.utm_content,
          referrer: lead.referrer,
          landing_page: lead.landing_page,
          $ip: ip,
          $user_agent: lead.userAgent,
        },
      }),
    }).catch((err) => {
      console.error("Failed to capture event to PostHog:", err);
    });
  }

  return NextResponse.json({ ok: true });
}
