export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Inamdar Business Analysis",
    "url": "https://www.inamdarbusinessanalysis.in",
    "logo": "https://www.inamdarbusinessanalysis.in/icon.svg",
    "description":
      "Source-backed public records business risk reports on Indian companies, vendors, borrowers and promoters.",
    "priceRange": "₹2,499 - ₹6,999",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Due Diligence & Business Risk Reports",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Vendor Risk Report (Procurement)",
            "description": "Public-records vendor diligence covering MCA charge register, litigation, and GST compliance.",
          },
          "price": "2499",
          "priceCurrency": "INR",
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Lender Credit Diligence",
            "description": "Pre-disbursement credit diligence on SME borrowers, floating charges, and director disqualifications.",
          },
          "price": "3999",
          "priceCurrency": "INR",
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Investor Red Flag Report",
            "description": "Pre-investment screening covering promoter multi-directorships, struck-off entities, and insolvency risks.",
          },
          "price": "6999",
          "priceCurrency": "INR",
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Litigation & Compliance Check",
            "description": "Commercial court litigation, arbitration awards, and statutory compliance checks.",
          },
          "price": "3499",
          "priceCurrency": "INR",
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema({ faqs }: { faqs: { q: string; a: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
