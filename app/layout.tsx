import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

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
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className="min-h-screen font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
