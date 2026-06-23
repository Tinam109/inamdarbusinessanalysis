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
    return NextResponse.json(
      { error: "Lead capture is not configured yet." },
      { status: 503 },
    );
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

  return NextResponse.json({ ok: true });
}
