import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const siteUrl = "https://www.inamdarbusinessanalysis.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Inamdar Business Analysis | Public Records Business Risk Reports India",
    template: "%s | Inamdar Business Analysis",
  },
  description:
    "Source-backed public records reports on Indian companies, vendors, promoters and counterparties covering MCA, GST, litigation, regulatory and compliance risk indicators.",
  keywords: [
    "business risk report India",
    "vendor due diligence",
    "counterparty risk",
    "public records search India",
    "MCA ROC search",
    "litigation check",
    "investor red flag report",
    "promoter background check",
  ],
  authors: [{ name: "Inamdar Business Analysis" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Inamdar Business Analysis",
    title:
      "Inamdar Business Analysis | Public Records Business Risk Reports India",
    description:
      "Source-backed public records reports on Indian companies, vendors, promoters and counterparties covering MCA, GST, litigation, regulatory and compliance risk indicators.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Inamdar Business Analysis | Public Records Business Risk Reports",
    description:
      "Source-backed public records reports on Indian companies, vendors, promoters and counterparties.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Inamdar Business Analysis",
    url: siteUrl,
    description:
      "Source-backed public records business risk reports on Indian companies, vendors, promoters and counterparties.",
    areaServed: "IN",
    telephone: "+91-91064-69665",
    serviceType: "Counterparty due diligence and business risk reports",
  };

  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className="min-h-screen font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        {process.env.NEXT_PUBLIC_POSTHOG_KEY && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures getActiveMatchingSurveys getSurveys getNextSurveyStep register_for_session_recording".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
                posthog.init('${process.env.NEXT_PUBLIC_POSTHOG_KEY}', {
                  api_host: '${process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.posthog.com"}',
                  capture_pageview: true
                });
              `,
            }}
          />
        )}
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
