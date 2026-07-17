import dotenv from "dotenv";
import path from "path";
import fs from "fs";
import nodemailer from "nodemailer";

// Load environment variables from .env.local (Next.js default) or .env
const envLocalPath = path.resolve(process.cwd(), ".env.local");
if (fs.existsSync(envLocalPath)) {
  dotenv.config({ path: envLocalPath });
} else {
  dotenv.config();
}

/**
 * Helper to query PostHog via the HogQL Query API
 */
async function queryPostHog(queryStr: string): Promise<any[]> {
  const host = process.env.POSTHOG_API_HOST || "https://us.posthog.com";
  const projectId = process.env.POSTHOG_PROJECT_ID;
  const apiKey = process.env.POSTHOG_PERSONAL_API_KEY;

  if (!projectId || !apiKey) {
    console.warn("⚠️ Warning: Missing POSTHOG_PROJECT_ID or POSTHOG_PERSONAL_API_KEY. Using mock data.");
    return getMockDataForQuery(queryStr);
  }

  const url = `${host}/api/projects/${projectId}/query/`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: {
        kind: "HogQLQuery",
        query: queryStr
      }
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`PostHog query failed: Status ${response.status} - ${errorText}`);
  }

  const json = (await response.json()) as { results: any[] };
  return json.results || [];
}

/**
 * Helper to query the OpenAI-compatible LLM API (e.g., Kimi 3, OpenAI, Groq, etc.)
 */
async function queryLLM(prompt: string, systemPrompt: string): Promise<string> {
  const apiKey = process.env.LLM_API_KEY;
  const baseUrl = process.env.LLM_BASE_URL || "https://api.openai.com/v1";
  const model = process.env.LLM_MODEL || "gpt-4o-mini";

  if (!apiKey) {
    console.warn("⚠️ Warning: LLM_API_KEY is not defined. Using dry-run mode and generating a local report.");
    return `### Executive Summary
Today was a highly active day on the website, seeing steady growth in sessions and a solid increase in sample report requests.

### Performance Trends & Comparison
* **Unique Visitors**: 142 (+12% compared to previous day)
* **Sessions**: 160 (+8% compared to previous day)
* **Pageviews**: 412 (+15% compared to previous day)
* **Bounce Rate**: 41.2% (-3.4% compared to previous day, indicating improved session length)

### Conversion & Funnel Insights
* **Sample Report Requests**: 12 completions (a substantial lift from the typical average of 8 per day).
* **Consultation Page Clicks**: 5 users clicked to schedule a cal.com/WhatsApp consultation.
* **Top Landing Pages**: The '/sample-report' landing page is the primary driver of engagement, representing 45% of total pageviews.

### Suggested Blog/Content Topics
1. **Verifying Manpower Agencies in India**: A guide for HR and procurement heads to avoid tax-defaulting or unregistered manpower vendors.
2. **Beyond MCA filings**: 5 crucial litigation risk checks investors must run before funding Indian seed-stage startups.
3. **CESTAT Customs Disputes**: How to review pending indirect tax litigation records for manufacturing counterparties.

### Actionable Next Steps
* **Landing Page Hook**: Add a short visual screenshot snippet of the "ABC Industrial Supplies Pvt Ltd" sample report directly on the '/sample-report' landing page above the fold to double conversion rates.
* **Conversion Optimization**: Include a direct "WhatsApp Us" floating chat widget on the '/methodology' page to capture high-intent readers.`;
  }

  const url = `${baseUrl.replace(/\/$/, "")}/chat/completions`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: model,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: prompt }
      ],
      temperature: 0.2
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`LLM API failed: Status ${response.status} - ${errorText}`);
  }

  const json = (await response.json()) as { choices?: Array<{ message?: { content?: string } }> };
  const content = json.choices?.[0]?.message?.content;
  if (!content) {
    throw new Error("LLM response did not contain message content.");
  }

  return content;
}

/**
 * Simple Regex-based Markdown-to-HTML parser for clean, responsive emails.
 * Avoids bulky npm dependencies and produces structured HTML.
 */
function parseMarkdownToHtml(markdown: string): string {
  let html = markdown;

  // Escape headers
  html = html.replace(/^### (.*?)$/gm, '<h3 style="color: #22d3ee; font-family: Sora, sans-serif; font-size: 16px; font-weight: 600; margin-top: 18px; margin-bottom: 8px;">$1</h3>');
  html = html.replace(/^## (.*?)$/gm, '<h2 style="color: #d4a13c; font-family: Sora, sans-serif; font-size: 18px; font-weight: 600; margin-top: 22px; margin-bottom: 12px; border-bottom: 1px solid #16203a; padding-bottom: 6px;">$1</h2>');
  html = html.replace(/^# (.*?)$/gm, '<h1 style="color: #ffffff; font-family: Sora, sans-serif; font-size: 22px; font-weight: 700; margin-top: 24px; margin-bottom: 14px;">$1</h1>');

  // Bold text
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong style="color: #ffffff; font-weight: 600;">$1</strong>');

  // List items
  html = html.replace(/^\s*[\-\*]\s+(.*?)$/gm, '<li style="margin-bottom: 6px; color: #e2e8f0; font-size: 14px; line-height: 1.5; font-family: Inter, sans-serif;">$1</li>');

  // Paragraphs
  const lines = html.split("\n");
  let inList = false;
  const processedLines = lines.map((line) => {
    const trimmed = line.trim();
    if (trimmed.startsWith("<li")) {
      if (!inList) {
        inList = true;
        return '<ul style="padding-left: 20px; margin-top: 8px; margin-bottom: 8px;">' + line;
      }
      return line;
    } else {
      if (inList) {
        inList = false;
        return "</ul>" + line;
      }
    }

    if (
      trimmed &&
      !trimmed.startsWith("<h") &&
      !trimmed.startsWith("<ul") &&
      !trimmed.startsWith("</ul") &&
      !trimmed.startsWith("<li")
    ) {
      return `<p style="color: #94a3b8; font-size: 14px; line-height: 1.6; margin-top: 6px; margin-bottom: 12px; font-family: Inter, sans-serif;">${line}</p>`;
    }
    return line;
  });

  if (inList) {
    processedLines.push("</ul>");
  }

  return processedLines.join("\n");
}

/**
 * Formats the HTML email using brand guideline colors.
 */
function buildBrandedHtmlEmail(
  dateStr: string,
  metrics: {
    yesterday: { visitors: number; sessions: number; pageviews: number; bounceRate: number };
    previous: { visitors: number; sessions: number; pageviews: number; bounceRate: number };
  },
  topPages: Array<{ path: string; views: number; sessions: number }>,
  topSources: Array<{ source: string; sessions: number }>,
  devices: Array<{ device: string; sessions: number }>,
  conversions: Array<{ event: string; count: number }>,
  aiNarrative: string
): string {
  // Helpers for up/down percent comparison formatting
  const getChangePercent = (current: number, prev: number) => {
    if (prev === 0) return current > 0 ? "+100%" : "0%";
    const pct = ((current - prev) / prev) * 100;
    const sign = pct >= 0 ? "+" : "";
    return `${sign}${pct.toFixed(1)}%`;
  };

  const getChangeStyle = (current: number, prev: number) => {
    return current >= prev ? "color: #10b981;" : "color: #f87171;"; // Green vs Soft Red
  };

  // Convert markdown LLM report to HTML
  const aiReportHtml = parseMarkdownToHtml(aiNarrative);

  // Render top pages rows
  const topPagesRows = topPages
    .map(
      (p) => `
    <tr>
      <td style="padding: 8px 10px; font-size: 13px; color: #e2e8f0; border-bottom: 1px solid #16203a; font-family: monospace;">${p.path}</td>
      <td style="padding: 8px 10px; font-size: 13px; color: #22d3ee; text-align: right; border-bottom: 1px solid #16203a;">${p.views}</td>
      <td style="padding: 8px 10px; font-size: 13px; color: #94a3b8; text-align: right; border-bottom: 1px solid #16203a;">${p.sessions}</td>
    </tr>
  `
    )
    .join("");

  // Render traffic source rows
  const sourcesRows = topSources
    .map(
      (s) => `
    <tr>
      <td style="padding: 8px 10px; font-size: 13px; color: #e2e8f0; border-bottom: 1px solid #16203a;">${s.source}</td>
      <td style="padding: 8px 10px; font-size: 13px; color: #22d3ee; text-align: right; border-bottom: 1px solid #16203a;">${s.sessions}</td>
    </tr>
  `
    )
    .join("");

  // Render conversions rows
  const conversionsRows = conversions.length > 0
    ? conversions
        .map(
          (c) => `
    <tr>
      <td style="padding: 8px 10px; font-size: 13px; color: #e2e8f0; border-bottom: 1px solid #16203a;">${c.event}</td>
      <td style="padding: 8px 10px; font-size: 13px; color: #d4a13c; text-align: right; border-bottom: 1px solid #16203a; font-weight: 600;">${c.count}</td>
    </tr>
  `
        )
        .join("")
    : `<tr><td colspan="2" style="padding: 12px 10px; font-size: 13px; color: #94a3b8; text-align: center;">No conversions logged yesterday.</td></tr>`;

  // Standard disclaimer text matching guide
  const disclaimer = `This report is based on public records, information provided by the client and records available from official or credible sources as of the date of search. It is not a credit rating, legal opinion, private investigation, certificate of good standing or guarantee of future conduct.`;

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Daily Web Analytics - Inamdar Legal</title>
</head>
<body style="background-color: #05080f; margin: 0; padding: 20px; font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
  <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 680px; background-color: #0a0f1c; border: 1px solid #16203a; border-radius: 16px; overflow: hidden; padding: 0; box-shadow: 0 4px 20px rgba(0,0,0,0.4);">
    <!-- Header -->
    <tr>
      <td style="background-color: #0f1626; padding: 24px; text-align: center; border-bottom: 1px solid #16203a;">
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td align="center">
              <span style="font-family: Sora, sans-serif; font-size: 18px; font-weight: 700; color: #ffffff; letter-spacing: 1px;">
                INAMDAR LEGAL
              </span>
              <div style="font-family: Inter, sans-serif; font-size: 11px; text-transform: uppercase; letter-spacing: 2px; color: #22d3ee; margin-top: 4px;">
                AI GROWTH & ANALYTICS REPORT
              </div>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- Date Eyebrow -->
    <tr>
      <td style="padding: 20px 24px 0 24px; text-align: right; font-size: 12px; color: #94a3b8; font-family: monospace;">
        Report Date: ${dateStr}
      </td>
    </tr>

    <!-- Summary Metrics Cards Grid -->
    <tr>
      <td style="padding: 16px 24px;">
        <table width="100%" cellpadding="0" cellspacing="12" style="margin: -12px 0;">
          <tr>
            <!-- Visitors -->
            <td width="50%" style="background-color: #0f1626; border: 1px solid #16203a; border-radius: 12px; padding: 16px; text-align: left; vertical-align: top;">
              <div style="font-size: 11px; text-transform: uppercase; color: #94a3b8; letter-spacing: 1px; font-weight: 500;">Unique Visitors</div>
              <div style="font-size: 24px; font-weight: 700; color: #ffffff; margin-top: 6px; font-family: Sora, sans-serif;">
                ${metrics.yesterday.visitors}
              </div>
              <div style="font-size: 12px; margin-top: 4px; ${getChangeStyle(metrics.yesterday.visitors, metrics.previous.visitors)} font-weight: 500;">
                ${getChangePercent(metrics.yesterday.visitors, metrics.previous.visitors)} vs prev day
              </div>
            </td>
            <!-- Sessions -->
            <td width="50%" style="background-color: #0f1626; border: 1px solid #16203a; border-radius: 12px; padding: 16px; text-align: left; vertical-align: top;">
              <div style="font-size: 11px; text-transform: uppercase; color: #94a3b8; letter-spacing: 1px; font-weight: 500;">Sessions</div>
              <div style="font-size: 24px; font-weight: 700; color: #ffffff; margin-top: 6px; font-family: Sora, sans-serif;">
                ${metrics.yesterday.sessions}
              </div>
              <div style="font-size: 12px; margin-top: 4px; ${getChangeStyle(metrics.yesterday.sessions, metrics.previous.sessions)} font-weight: 500;">
                ${getChangePercent(metrics.yesterday.sessions, metrics.previous.sessions)} vs prev day
              </div>
            </td>
          </tr>
          <tr>
            <!-- Pageviews -->
            <td width="50%" style="background-color: #0f1626; border: 1px solid #16203a; border-radius: 12px; padding: 16px; text-align: left; vertical-align: top;">
              <div style="font-size: 11px; text-transform: uppercase; color: #94a3b8; letter-spacing: 1px; font-weight: 500;">Pageviews</div>
              <div style="font-size: 24px; font-weight: 700; color: #ffffff; margin-top: 6px; font-family: Sora, sans-serif;">
                ${metrics.yesterday.pageviews}
              </div>
              <div style="font-size: 12px; margin-top: 4px; ${getChangeStyle(metrics.yesterday.pageviews, metrics.previous.pageviews)} font-weight: 500;">
                ${getChangePercent(metrics.yesterday.pageviews, metrics.previous.pageviews)} vs prev day
              </div>
            </td>
            <!-- Bounce Rate -->
            <td width="50%" style="background-color: #0f1626; border: 1px solid #16203a; border-radius: 12px; padding: 16px; text-align: left; vertical-align: top;">
              <div style="font-size: 11px; text-transform: uppercase; color: #94a3b8; letter-spacing: 1px; font-weight: 500;">Bounce Rate</div>
              <div style="font-size: 24px; font-weight: 700; color: #ffffff; margin-top: 6px; font-family: Sora, sans-serif;">
                ${metrics.yesterday.bounceRate.toFixed(1)}%
              </div>
              <!-- Lower bounce rate is better, so color code green if current is lower than prev -->
              <div style="font-size: 12px; margin-top: 4px; ${metrics.yesterday.bounceRate <= metrics.previous.bounceRate ? "color: #10b981;" : "color: #f87171;"} font-weight: 500;">
                ${metrics.yesterday.bounceRate.toFixed(1)}% vs ${metrics.previous.bounceRate.toFixed(1)}%
              </div>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- AI Insights Box -->
    <tr>
      <td style="padding: 16px 24px;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #0f1626; border: 1px solid #16203a; border-left: 4px solid #d4a13c; border-radius: 8px 12px 12px 8px; padding: 20px;">
          <tr>
            <td>
              <div style="font-family: Sora, sans-serif; font-size: 15px; font-weight: 700; color: #d4a13c; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 12px;">
                💡 AI Growth Analytics Summary
              </div>
              <div style="color: #e2e8f0; font-size: 14px; line-height: 1.6;">
                ${aiReportHtml}
              </div>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- Tables Grid Section -->
    <tr>
      <td style="padding: 16px 24px;">
        <table width="100%" cellpadding="0" cellspacing="12" style="margin: -12px 0;">
          <tr>
            <!-- Top Pages Table -->
            <td width="100%" style="background-color: #0f1626; border: 1px solid #16203a; border-radius: 12px; padding: 16px; vertical-align: top;">
              <div style="font-family: Sora, sans-serif; font-size: 13px; font-weight: 700; color: #ffffff; letter-spacing: 0.5px; margin-bottom: 10px; border-bottom: 1px solid #16203a; padding-bottom: 6px;">
                Top Pages Visited
              </div>
              <table width="100%" cellpadding="0" cellspacing="0">
                <thead>
                  <tr>
                    <th style="padding: 6px 10px; text-align: left; font-size: 11px; text-transform: uppercase; color: #94a3b8; font-weight: 500;">Path</th>
                    <th style="padding: 6px 10px; text-align: right; font-size: 11px; text-transform: uppercase; color: #94a3b8; font-weight: 500; width: 60px;">Views</th>
                    <th style="padding: 6px 10px; text-align: right; font-size: 11px; text-transform: uppercase; color: #94a3b8; font-weight: 500; width: 70px;">Sessions</th>
                  </tr>
                </thead>
                <tbody>
                  ${topPagesRows}
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <!-- Conversions & Traffic Sources Split -->
            <td width="100%">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <!-- Traffic Sources -->
                  <td width="50%" style="background-color: #0f1626; border: 1px solid #16203a; border-radius: 12px; padding: 16px; vertical-align: top; padding-right: 8px;">
                    <div style="font-family: Sora, sans-serif; font-size: 13px; font-weight: 700; color: #ffffff; letter-spacing: 0.5px; margin-bottom: 10px; border-bottom: 1px solid #16203a; padding-bottom: 6px;">
                      Traffic Sources
                    </div>
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <thead>
                        <tr>
                          <th style="padding: 6px 10px; text-align: left; font-size: 11px; text-transform: uppercase; color: #94a3b8; font-weight: 500;">Source Domain</th>
                          <th style="padding: 6px 10px; text-align: right; font-size: 11px; text-transform: uppercase; color: #94a3b8; font-weight: 500; width: 70px;">Sessions</th>
                        </tr>
                      </thead>
                      <tbody>
                        ${sourcesRows}
                      </tbody>
                    </table>
                  </td>
                  <!-- Spacer -->
                  <td width="4%">&nbsp;</td>
                  <!-- Conversions -->
                  <td width="46%" style="background-color: #0f1626; border: 1px solid #16203a; border-radius: 12px; padding: 16px; vertical-align: top; padding-left: 8px;">
                    <div style="font-family: Sora, sans-serif; font-size: 13px; font-weight: 700; color: #ffffff; letter-spacing: 0.5px; margin-bottom: 10px; border-bottom: 1px solid #16203a; padding-bottom: 6px;">
                      Conversions
                    </div>
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <thead>
                        <tr>
                          <th style="padding: 6px 10px; text-align: left; font-size: 11px; text-transform: uppercase; color: #94a3b8; font-weight: 500;">Conversion Event</th>
                          <th style="padding: 6px 10px; text-align: right; font-size: 11px; text-transform: uppercase; color: #94a3b8; font-weight: 500; width: 60px;">Count</th>
                        </tr>
                      </thead>
                      <tbody>
                        ${conversionsRows}
                      </tbody>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- Footer Disclaimer -->
    <tr>
      <td style="padding: 24px; background-color: #0f1626; border-top: 1px solid #16203a; text-align: center;">
        <div style="font-size: 11px; color: #94a3b8; line-height: 1.5; text-align: justify; margin-bottom: 12px;">
          <strong>Disclaimer:</strong> ${disclaimer}
        </div>
        <div style="font-size: 11px; color: #52637a; font-family: monospace; margin-top: 12px;">
          Generated automatically by Inamdar Risk Intelligence Assistant.
        </div>
      </td>
    </tr>
  </table>
</body>
</html>
`;
}

/**
 * Mock data fallback for clean local runs without API keys
 */
function getMockDataForQuery(query: string): any[] {
  if (query.includes("subtractDays(today(), 1)") && query.includes("person_id")) {
    // Yesterday core metrics
    return [[142, 160, 412]];
  }
  if (query.includes("subtractDays(today(), 2)") && query.includes("person_id")) {
    // Previous day core metrics
    return [[126, 148, 358]];
  }
  if (query.includes("pathname") && query.includes("views")) {
    // Top Pages
    return [
      ["/sample-report", 185, 92],
      ["/", 120, 105],
      ["/methodology", 48, 30],
      ["/vendor-risk-report", 32, 18],
      ["/investor-red-flag-report", 27, 15]
    ];
  }
  if (query.includes("$referring_domain") && query.includes("sessions")) {
    // Traffic Sources
    return [
      ["Direct/None", 88],
      ["google.com", 42],
      ["linkedin.com", 21],
      ["t.co", 6],
      ["bing.com", 3]
    ];
  }
  if (query.includes("device") && query.includes("sessions")) {
    // Devices
    return [
      ["Desktop", 112],
      ["Mobile", 45],
      ["Tablet", 3]
    ];
  }
  if (query.includes("browser") && query.includes("sessions")) {
    // Browsers
    return [
      ["Chrome", 95],
      ["Safari", 41],
      ["Firefox", 12],
      ["Edge", 10],
      ["Unknown", 2]
    ];
  }
  if (query.includes("session_id") && query.includes("event_count")) {
    if (query.includes("subtractDays(today(), 2)")) {
      // Previous day bounce: total_sessions, bounced_sessions
      return [[148, 66]];
    }
    // Yesterday bounce: total_sessions, bounced_sessions
    return [[160, 66]]; // 66/160 = 41.25%
  }
  if (query.includes("event NOT IN")) {
    // Conversion Events
    return [
      ["sample_report_requested", 12],
      ["whatsapp_clicked", 3],
      ["cal_booking_clicked", 2]
    ];
  }
  return [];
}

/**
 * Main Executable Routine
 */
async function main() {
  console.log("🚀 Starting Daily Analytics Report compilation...");

  try {
    const yesterdayDate = new Date();
    yesterdayDate.setDate(yesterdayDate.getDate() - 1);
    const dateStr = yesterdayDate.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    });

    console.log("📊 Fetching analytics from PostHog...");

    // 1. Fetch Core Metrics (Yesterday)
    const yesterdayRes = await queryPostHog(`
      SELECT
          countDistinct(person_id) AS visitors,
          countDistinct(properties.$session_id) AS sessions,
          countIf(event = '$pageview') AS pageviews
      FROM events
      WHERE timestamp >= subtractDays(today(), 1) AND timestamp < today()
    `);
    const yesterdayRow = yesterdayRes[0] || [0, 0, 0];
    const yesterdayMetrics = {
      visitors: Number(yesterdayRow[0] || 0),
      sessions: Number(yesterdayRow[1] || 0),
      pageviews: Number(yesterdayRow[2] || 0),
      bounceRate: 0
    };

    // 2. Fetch Core Metrics (Previous Day)
    const prevRes = await queryPostHog(`
      SELECT
          countDistinct(person_id) AS visitors,
          countDistinct(properties.$session_id) AS sessions,
          countIf(event = '$pageview') AS pageviews
      FROM events
      WHERE timestamp >= subtractDays(today(), 2) AND timestamp < subtractDays(today(), 1)
    `);
    const prevRow = prevRes[0] || [0, 0, 0];
    const prevMetrics = {
      visitors: Number(prevRow[0] || 0),
      sessions: Number(prevRow[1] || 0),
      pageviews: Number(prevRow[2] || 0),
      bounceRate: 0
    };

    // 3. Fetch Bounce Rate (Yesterday)
    const yesterdayBounceRes = await queryPostHog(`
      SELECT
          count() AS total_sessions,
          countIf(event_count = 1) AS bounced_sessions
      FROM (
          SELECT
              properties.$session_id AS session_id,
              count() AS event_count
          FROM events
          WHERE timestamp >= subtractDays(today(), 1) AND timestamp < today() AND properties.$session_id IS NOT NULL
          GROUP BY session_id
      )
    `);
    const yBounceRow = yesterdayBounceRes[0] || [0, 0];
    const yTotalSess = Number(yBounceRow[0] || 0);
    const yBouncedSess = Number(yBounceRow[1] || 0);
    yesterdayMetrics.bounceRate = yTotalSess > 0 ? (yBouncedSess / yTotalSess) * 100 : 0;

    // 4. Fetch Bounce Rate (Previous Day)
    const prevBounceRes = await queryPostHog(`
      SELECT
          count() AS total_sessions,
          countIf(event_count = 1) AS bounced_sessions
      FROM (
          SELECT
              properties.$session_id AS session_id,
              count() AS event_count
          FROM events
          WHERE timestamp >= subtractDays(today(), 2) AND timestamp < subtractDays(today(), 1) AND properties.$session_id IS NOT NULL
          GROUP BY session_id
      )
    `);
    const pBounceRow = prevBounceRes[0] || [0, 0];
    const pTotalSess = Number(pBounceRow[0] || 0);
    const pBouncedSess = Number(pBounceRow[1] || 0);
    prevMetrics.bounceRate = pTotalSess > 0 ? (pBouncedSess / pTotalSess) * 100 : 0;

    // 5. Fetch Top Pages
    const topPagesRes = await queryPostHog(`
      SELECT
          coalesce(properties.$pathname, '/') AS path,
          countIf(event = '$pageview') AS views,
          countDistinct(properties.$session_id) AS sessions
      FROM events
      WHERE timestamp >= subtractDays(today(), 1) AND timestamp < today()
      GROUP BY path
      ORDER BY views DESC
      LIMIT 8
    `);
    const topPages = topPagesRes.map((row) => ({
      path: String(row[0] || "/"),
      views: Number(row[1] || 0),
      sessions: Number(row[2] || 0)
    }));

    // 6. Fetch Traffic Sources
    const sourcesRes = await queryPostHog(`
      SELECT
          coalesce(properties.$referring_domain, 'Direct/None') AS source,
          countDistinct(properties.$session_id) AS sessions
      FROM events
      WHERE timestamp >= subtractDays(today(), 1) AND timestamp < today()
      GROUP BY source
      ORDER BY sessions DESC
      LIMIT 5
    `);
    const topSources = sourcesRes.map((row) => ({
      source: String(row[0] || "Direct/None"),
      sessions: Number(row[1] || 0)
    }));

    // 7. Fetch Devices
    const devicesRes = await queryPostHog(`
      SELECT
          coalesce(properties.$device_type, 'Desktop') AS device,
          countDistinct(properties.$session_id) AS sessions
      FROM events
      WHERE timestamp >= subtractDays(today(), 1) AND timestamp < today()
      GROUP BY device
      ORDER BY sessions DESC
    `);
    const devices = devicesRes.map((row) => ({
      device: String(row[0] || "Desktop"),
      sessions: Number(row[1] || 0)
    }));

    // 8. Fetch Conversions & Custom Events
    const conversionsRes = await queryPostHog(`
      SELECT
          event,
          count() AS count
      FROM events
      WHERE timestamp >= subtractDays(today(), 1) AND timestamp < today()
        AND event NOT IN ('$pageview', '$screen', '$autocapture', '$pageleave', '$groupidentify', '$identify')
      GROUP BY event
      ORDER BY count DESC
    `);
    const conversions = conversionsRes.map((row) => ({
      event: String(row[0]),
      count: Number(row[1] || 0)
    }));

    console.log("✅ Analytics fetched successfully.");
    console.log(`Yesterday Metrics: Visitors=${yesterdayMetrics.visitors}, Sessions=${yesterdayMetrics.sessions}, BounceRate=${yesterdayMetrics.bounceRate.toFixed(1)}%`);

    // --- AI Synthesis ---
    console.log("🧠 Querying AI model for business narrative...");

    const systemPrompt = `You are the lead B2B Risk Intelligence Growth Analyst for Inamdar Legal (www.inamdarbusinessanalysis.in).
Inamdar Legal is a counterparty due-diligence and risk-intelligence product. We turn scattered public records (MCA, GST, litigation, regulatory) into clear, source-backed risk reports for founders, investors, procurement teams, CAs, CSs, and lawyers.

Your tone is CALM, PRECISE, and USEFUL. Do NOT use sensational, alarmist, or hype-filled language. Speak like a steady data analyst who highlights indicators and suggests actions.

Analyze the daily website performance metrics provided below and write a concise, professional analytics report in Markdown.
The report must include:
1. Executive Summary: Core findings of website traffic and user engagement.
2. Performance Trends & Comparison: Highlight significant changes in traffic, pageviews, or bounce rates compared to the previous day.
3. Conversion & Funnel Insights: Analyze conversion events (like sample report requests or clicks) and user interest.
4. Suggested Blog/Content Topics: Based on the top visited pages and traffic sources, suggest 3 highly specific, relevant blog/content topics that would appeal to our audience (investors, founders, CAs, or procurement heads looking to mitigate counterparty risk).
5. Actionable Next Steps: 2-3 specific recommendations to optimize the website, landing pages, or user journeys to improve engagement and consultation bookings.

Output your response in clean Markdown. Keep it direct and business-focused.`;

    const userPrompt = `
Date of analytics: ${dateStr}

YESTERDAY CORE METRICS:
- Unique Visitors: ${yesterdayMetrics.visitors} (Previous Day: ${prevMetrics.visitors})
- Sessions: ${yesterdayMetrics.sessions} (Previous Day: ${prevMetrics.sessions})
- Pageviews: ${yesterdayMetrics.pageviews} (Previous Day: ${prevMetrics.pageviews})
- Bounce Rate: ${yesterdayMetrics.bounceRate.toFixed(1)}% (Previous Day: ${prevMetrics.bounceRate.toFixed(1)}%)

TOP PAGES VISITED YESTERDAY:
${topPages.map((p) => `- ${p.path}: ${p.views} views, ${p.sessions} sessions`).join("\n")}

PRIMARY TRAFFIC SOURCES:
${topSources.map((s) => `- ${s.source}: ${s.sessions} sessions`).join("\n")}

DEVICE SPLIT:
${devices.map((d) => `- ${d.device}: ${d.sessions} sessions`).join("\n")}

CONVERSION & CUSTOM EVENTS LOGGED:
${conversions.map((c) => `- ${c.event}: ${c.count} occurrences`).join("\n")}
`;

    const aiNarrative = await queryLLM(userPrompt, systemPrompt);
    console.log("✅ AI Report generated successfully.");

    // --- Assemble and Send Email ---
    console.log("✉️ Compiling email template...");
    const htmlEmail = buildBrandedHtmlEmail(
      dateStr,
      { yesterday: yesterdayMetrics, previous: prevMetrics },
      topPages,
      topSources,
      devices,
      conversions,
      aiNarrative
    );

    // Save report locally as fallback or log
    const reportDir = path.resolve(process.cwd(), "reports");
    if (!fs.existsSync(reportDir)) {
      fs.mkdirSync(reportDir);
    }
    const safeDate = yesterdayDate.toISOString().split("T")[0];
    const localReportPath = path.join(reportDir, `report-${safeDate}.html`);
    const localMdPath = path.join(reportDir, `report-${safeDate}.md`);

    fs.writeFileSync(localReportPath, htmlEmail, "utf8");
    fs.writeFileSync(localMdPath, aiNarrative, "utf8");
    console.log(`💾 Local copy saved to reports directory.`);

    const hasResend = !!process.env.RESEND_API_KEY;
    const hasSmtp = !!process.env.SMTP_HOST && !!process.env.SMTP_USER;
    const reportTo = process.env.REPORT_TO;

    if (!reportTo) {
      console.log("ℹ️ No REPORT_TO email set. Report generated and saved locally.");
      console.log("------------------------------------------");
      console.log(aiNarrative);
      console.log("------------------------------------------");
      return;
    }

    const subject = `Inamdar Legal Daily Analytics Report — ${dateStr}`;

    if (hasResend) {
      console.log("✉️ Sending email via Resend API...");
      const fromEmail = process.env.SMTP_FROM || "Inamdar Analytics <onboarding@resend.dev>";
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [reportTo],
          subject: subject,
          html: htmlEmail
        })
      });

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Resend sending failed: Status ${res.status} - ${errorText}`);
      }
      const result = await res.json();
      console.log("🎉 Report emailed successfully via Resend API:", result);
    } else if (hasSmtp) {
      console.log("✉️ Sending email via SMTP...");
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || "587"),
        secure: process.env.SMTP_PORT === "465",
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS
        }
      });

      const mailOptions = {
        from: process.env.SMTP_FROM || `"Inamdar Analytics Assistant" <${process.env.SMTP_USER}>`,
        to: reportTo,
        subject: subject,
        html: htmlEmail
      };

      const info = await transporter.sendMail(mailOptions);
      console.log("🎉 Report emailed successfully via SMTP:", info.messageId);
    } else {
      console.warn("⚠️ Warning: Neither SMTP nor Resend API credentials were found in environment. Email skipped.");
      console.log("Here is the generated AI report text:");
      console.log("------------------------------------------");
      console.log(aiNarrative);
      console.log("------------------------------------------");
    }

  } catch (error) {
    console.error("❌ Execution failed with error:", error);
    process.exit(1);
  }
}

// Trigger Execution
main();
