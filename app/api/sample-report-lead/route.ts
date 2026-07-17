import { NextResponse } from "next/server";

type LeadPayload = {
  name?: string;
  email?: string;
  phone?: string;
  source?: string;
};

function clean(value: unknown) {
  return typeof value === "string" ? value.trim().slice(0, 500) : "";
}

export async function POST(request: Request) {
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

  if (!webhookUrl) {
    return NextResponse.json({ ok: true, captureConfigured: false });
  }

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
    page: "/sample-report",
    userAgent: request.headers.get("user-agent") || "",
    submittedAt: new Date().toISOString(),
  };

  if (!lead.name || !lead.email || !lead.phone) {
    return NextResponse.json(
      { error: "Name, email and phone are required." },
      { status: 400 },
    );
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(lead),
  });

  if (!response.ok) {
    return NextResponse.json(
      { error: "Could not save lead. Please try again." },
      { status: 502 },
    );
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
        event: "sample_report_requested",
        properties: {
          distinct_id: lead.email,
          name: lead.name,
          email: lead.email,
          phone: lead.phone,
          source: lead.source,
          page: lead.page,
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
