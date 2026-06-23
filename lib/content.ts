/**
 * Shared content/data used across the homepage and sub-pages.
 * Centralising it keeps copy consistent and components reusable.
 */

export const reportScope: { title: string; desc: string }[] = [
  { title: "MCA / ROC records", desc: "Company and LLP master data, status, charges and filing indicators." },
  { title: "GST status & filing indicators", desc: "Registration status and public filing-activity signals where available." },
  { title: "EPFO & ESIC checks", desc: "Establishment registration indicators for employee-benefit compliance." },
  { title: "District & High Court searches", desc: "Public case searches matched to the entity or named individuals." },
  { title: "Consumer court disputes", desc: "Consumer forum matters surfaced from public cause lists and orders." },
  { title: "ITAT & tax litigation", desc: "Income-tax tribunal and tax-dispute records in the public domain." },
  { title: "IBC / insolvency records", desc: "Insolvency and bankruptcy proceedings referenced in public sources." },
  { title: "SEBI & regulatory orders", desc: "Publicly available regulatory orders and enforcement references." },
  { title: "Watchout Investors references", desc: "References surfaced from publicly maintained investor-caution sources." },
  { title: "Government debarment lists", desc: "Public debarment and blacklisting references where published." },
  { title: "Director & promoter linkages", desc: "Other entities linked to the same directors or promoters in records." },
  { title: "Adverse public records", desc: "Other adverse references located in official or credible public sources." },
];

export const riskSignals: {
  key: string;
  label: string;
  summary: string;
  points: string[];
}[] = [
  {
    key: "compliance",
    label: "Compliance gaps",
    summary:
      "Indicators that statutory filings or registrations may be lapsed, inconsistent or missing in public records.",
    points: [
      "ROC filing-status indicators",
      "GST registration status signals",
      "EPFO / ESIC establishment indicators",
      "Inactive or struck-off status references",
    ],
  },
  {
    key: "litigation",
    label: "Litigation exposure",
    summary:
      "Public case searches matched to the entity, its directors or promoters across available court sources.",
    points: [
      "District & High Court matches",
      "Consumer forum disputes",
      "Tax tribunal (ITAT) references",
      "Matched as of the date of search",
    ],
  },
  {
    key: "regulatory",
    label: "Regulatory action",
    summary:
      "Publicly available regulatory orders and enforcement references associated with the entity or its people.",
    points: [
      "SEBI and sectoral regulator orders",
      "Government debarment references",
      "Published enforcement actions",
      "Source-linked where available",
    ],
  },
  {
    key: "insolvency",
    label: "Insolvency stress",
    summary:
      "References to insolvency, bankruptcy or winding-up proceedings located in public sources.",
    points: [
      "IBC proceeding references",
      "Winding-up petition mentions",
      "Defaulter-list references",
      "Linked-entity stress signals",
    ],
  },
  {
    key: "director",
    label: "Director-linked risk",
    summary:
      "Other companies and records connected to the same directors or promoters that may carry risk indicators.",
    points: [
      "Common-director entity mapping",
      "Promoter linked-company records",
      "Disqualified-director references",
      "Cross-entity adverse records",
    ],
  },
  {
    key: "vendor",
    label: "Vendor onboarding risk",
    summary:
      "A focused read for procurement teams checking a counterparty before issuing a PO or extending credit.",
    points: [
      "Identity & registration match",
      "Active-status confirmation signals",
      "Litigation & dispute indicators",
      "Adverse public-record references",
    ],
  },
];

export const audiences: { title: string; desc: string }[] = [
  { title: "Founders & SMEs", desc: "Check partners, vendors and counterparties before committing to a deal or relationship." },
  { title: "Investors & acquirers", desc: "Screen companies, promoters and litigation history before investing or acquiring." },
  { title: "Procurement teams", desc: "Vet vendors before onboarding, issuing POs or extending business credit." },
  { title: "Lenders & fintechs", desc: "Add a public-records risk layer before extending business credit or facilities." },
  { title: "Exporters & distributors", desc: "Understand overseas-facing counterparties and channel partners before engaging." },
  { title: "CAs, CSs, lawyers & consultants", desc: "Support client advisory with structured, source-backed public-records findings." },
];

export const useCases: { title: string; desc: string }[] = [
  { title: "Vendor onboarding", desc: "Run a check before adding a new supplier or service provider to your books." },
  { title: "Pre-contract checks", desc: "Know the counterparty before signing an agreement or master services contract." },
  { title: "Investment screening", desc: "Surface red-flag indicators before a term sheet, cheque or follow-on round." },
  { title: "Business credit checks", desc: "Layer public-record risk indicators into a credit or limit decision." },
  { title: "Franchise / dealership checks", desc: "Assess a franchisor, franchisee or dealership before committing capital." },
  { title: "Acquisition & partnership", desc: "Diligence a target or partner across litigation, compliance and linkages." },
  { title: "Monthly monitoring", desc: "Keep selected entities on a watchlist and get notified when records change." },
];

export const deliverables: string[] = [
  "PDF report",
  "Source links",
  "Date of search",
  "Identity match summary",
  "Litigation table",
  "Compliance risk indicators",
  "Regulatory red flags",
  "Director / promoter linkage notes",
  "Overall risk summary",
];

export const pricingTiers: {
  name: string;
  tagline: string;
  priceAnchor: string;
  turnaround: string;
  features: string[];
  featured?: boolean;
}[] = [
  {
    name: "Basic Check",
    tagline: "A fast identity and status read on a single entity.",
    // TODO: replace with the agreed starting figure, e.g. "From ₹2,000".
    priceAnchor: "Pricing on request",
    turnaround: "Usually 1–2 working days",
    features: [
      "Identity & registration match",
      "MCA / ROC status indicators",
      "GST status signal",
      "Source links + date of search",
    ],
  },
  {
    name: "Standard Report",
    tagline: "A rounded public-records risk picture for most decisions.",
    // TODO: replace with the agreed starting figure, e.g. "From ₹X".
    priceAnchor: "Pricing on request",
    turnaround: "Usually 3–5 working days",
    features: [
      "Everything in Basic Check",
      "Litigation search (district & High Court)",
      "Compliance risk indicators",
      "Overall risk summary",
    ],
    featured: true,
  },
  {
    name: "Enhanced Report",
    tagline: "Deeper diligence across linkages and regulatory records.",
    priceAnchor: "Custom quote",
    turnaround: "Timeline depends on scope",
    features: [
      "Everything in Standard Report",
      "Director & promoter linkage mapping",
      "Regulatory & insolvency references",
      "Adverse public-record review",
    ],
  },
  {
    name: "Monitoring",
    tagline: "Ongoing watchlist coverage on selected entities.",
    // TODO: replace with the agreed monthly figure, e.g. "Retainer from ₹Z/mo".
    priceAnchor: "Monthly retainer",
    turnaround: "Ongoing, monthly cycle",
    features: [
      "Monthly re-checks on a watchlist",
      "Change alerts on key records",
      "Periodic summary reports",
      "Scope set per engagement",
    ],
  },
];

export const methodology: { title: string; desc: string }[] = [
  {
    title: "How we match identity",
    desc: "We anchor every search to verifiable identifiers — CIN, LLPIN, GSTIN, director DINs and registered names — so findings are tied to the right entity, not a similarly named one.",
  },
  {
    title: "Sources we typically check",
    desc: "MCA / ROC, GST status, EPFO / ESIC, district and High Court records, consumer forums, ITAT, IBC references, SEBI and regulatory orders, debarment lists and other credible public sources.",
  },
  {
    title: "How we report findings",
    desc: "Each finding carries its source link and the date of search. We report what the records show in neutral language — no editorialising, no claims beyond the record.",
  },
  {
    title: "What we don't do",
    desc: "We don't give legal advice, issue credit ratings, run private investigations or guarantee future conduct. A report is a public-records risk picture to inform your own decision.",
  },
];

// Illustrative, anonymised examples — not real clients or entities.
export const caseExamples: { tag: string; title: string; desc: string }[] = [
  {
    tag: "Vendor onboarding",
    title: "Active GST, but director-linked litigation surfaced",
    desc: "A supplier looked clean on the surface — valid GSTIN and active status — but a search surfaced pending litigation tied to a common director across two linked entities.",
  },
  {
    tag: "Investment screening",
    title: "Promoter linked to a struck-off company",
    desc: "Identity matched cleanly, yet linkage mapping showed the promoter tied to a separate company that had been struck off, prompting a closer look before the round.",
  },
  {
    tag: "Pre-contract check",
    title: "One address, several entities",
    desc: "A counterparty's registration matched, but the registered address mapped to multiple entities with overlapping directors — a pattern worth understanding before signing.",
  },
];

export const faqs: { q: string; a: string }[] = [
  {
    q: "What exactly is in a report?",
    a: "A structured PDF covering identity match, the public-record indicators relevant to your scope (MCA/GST, litigation, regulatory, insolvency, director linkages and adverse records), an overall risk summary, and source links with the date of search.",
  },
  {
    q: "How long does a report take?",
    a: "A Basic Check is usually 1–2 working days and a Standard Report 3–5 working days. Enhanced reports depend on scope and the number of entities. We confirm the timeline when we agree scope.",
  },
  {
    q: "What does it cost?",
    a: "Pricing depends on the depth of check, the number of entities and turnaround time. Share the entity and the decision you're making and we'll suggest the right scope and a quote.",
  },
  {
    q: "Where does the information come from?",
    a: "From official and credible public sources — MCA/ROC, GST, EPFO/ESIC, courts and tribunals, regulators, insolvency references, debarment lists and similar — plus any identifiers you provide. Every finding is source-linked.",
  },
  {
    q: "Is this a background check on individuals?",
    a: "Our focus is counterparty due diligence on companies, vendors, promoters and the directors connected to them, using public records. It is not a private investigation or a personal background check.",
  },
  {
    q: "Can you monitor an entity over time?",
    a: "Yes. Monitoring keeps selected companies, vendors or promoters on a watchlist with monthly re-checks and alerts when a meaningful new record appears.",
  },
];

export const CONTACT = {
  phoneDisplay: "+91 91064 69665",
  phoneTel: "+919106469665",
  whatsapp:
    "https://wa.me/919106469665?text=Hi%2C%20I%27d%20like%20to%20request%20a%20business%20risk%20report.",
  cal: "https://cal.com/inamdarlegal/15min",
};

export const DISCLAIMER =
  "This report is based on public records, information provided by the client and records available from official or credible sources as of the date of search. It is not a credit rating, legal opinion, private investigation, certificate of good standing or guarantee of future conduct.";
