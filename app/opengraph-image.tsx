import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Inamdar Business Analysis | Public Records Business Risk Reports India";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#0B132B",
          padding: "60px 80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top brand header */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #1C3166 0%, #3B82F6 100%)",
              border: "1px solid rgba(255,255,255,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#60A5FA",
              fontSize: "24px",
              fontWeight: "bold",
            }}
          >
            IBA
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "24px", fontWeight: "bold", color: "#FFFFFF", letterSpacing: "-0.5px" }}>
              Inamdar Business Analysis
            </span>
            <span style={{ fontSize: "14px", color: "#94A3B8" }}>
              Public Records Risk Intelligence · India
            </span>
          </div>
        </div>

        {/* Center Title & Tagline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "950px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "rgba(59, 130, 246, 0.15)",
              border: "1px solid rgba(59, 130, 246, 0.4)",
              borderRadius: "9999px",
              padding: "6px 16px",
              width: "fit-content",
            }}
          >
            <span style={{ fontSize: "14px", fontWeight: "bold", color: "#93C5FD", letterSpacing: "1px" }}>
              SOURCE-BACKED RISK REPORTS
            </span>
          </div>

          <h1
            style={{
              fontSize: "52px",
              fontWeight: 800,
              color: "#FFFFFF",
              lineHeight: 1.15,
              letterSpacing: "-1px",
              margin: 0,
            }}
          >
            Know who you deal with before you sign, lend or onboard.
          </h1>

          <p style={{ fontSize: "22px", color: "#CBD5E1", margin: 0, lineHeight: 1.4 }}>
            MCA Charge Registers · eCourts Litigation · GST Compliance · Promoter Directorships
          </p>
        </div>

        {/* Footer Badges */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "1px solid rgba(255,255,255,0.12)",
            paddingTop: "24px",
          }}
        >
          <div style={{ display: "flex", gap: "24px", color: "#94A3B8", fontSize: "16px", fontWeight: 600 }}>
            <span>✓ 24–48h Turnaround</span>
            <span>✓ ₹2,499 Fixed Pricing</span>
            <span>✓ Neutral & Factual</span>
          </div>
          <div style={{ fontSize: "18px", color: "#60A5FA", fontWeight: "bold" }}>
            inamdarbusinessanalysis.in
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
