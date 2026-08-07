/**
 * Shared content/data used across the homepage and sub-pages.
 * Centralising it keeps copy consistent and components reusable.
 */

export const reportScope: { title: string; desc: string }[] = [
  { title: "MCA / ROC records", desc: "Company and LLP master data, status, charges and filing indicators." },
  { title: "GST status & filing indicators", desc: "Registration status and public filing-activity signals where available." },
  { title: "EPFO & ESIC checks", desc: "Establishment indicators plus employee headcount and how it has trended over time, a useful read on the company's operating scale and momentum." },
  { title: "District, High Court & Supreme Court", desc: "Public case searches across district courts, High Courts and the Supreme Court, matched to the entity or named individuals." },
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
      "District, High Court & Supreme Court matches",
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
    name: "Vendor Risk Report",
    tagline: "Procurement, supplier onboarding, advances, purchase orders, and vendor risk verification.",
    priceAnchor: "₹2,499",
    turnaround: "Delivered within 48 hours",
    features: [
      "Identity & MCA / ROC master data verification",
      "MCA Index of Charges & open asset hypothecations",
      "GST registration & GSTR-3B filing signals",
      "eCourts litigation & Section 138 cheque bounce search",
      "Promoter / Director cross-holdings & struck-off check",
      "Source links + clear date of search",
    ],
    featured: true,
  },
  {
    name: "Litigation & Compliance Check",
    tagline: "Commercial courts, civil recovery, arbitration awards, and statutory compliance history.",
    priceAnchor: "₹3,499",
    turnaround: "Delivered within 24–48 hours",
    features: [
      "District Courts & High Court commercial litigation search",
      "Section 138 Negotiable Instruments Act cases",
      "Consumer dispute & tribunal references",
      "NCLT / IBC insolvency registers",
      "EPFO / statutory compliance tracking",
      "Overall risk summary & source appendix",
    ],
  },
  {
    name: "Lender Credit Diligence",
    tagline: "Pre-disbursement credit diligence, prior bank floating charges, and borrower solvency signals.",
    priceAnchor: "₹3,999",
    turnaround: "Delivered within 24–48 hours",
    features: [
      "Detailed MCA Charge Register & open liens",
      "Commercial court litigation & recovery suits",
      "Director disqualifications under Sec 164(2)",
      "Tax filing track record & GST status",
      "NCLT insolvency & corporate stress scan",
      "Promoter entity linkages & risk rating",
    ],
  },
  {
    name: "Investor Red Flag Report",
    tagline: "Pre-investment screening covering founder background, struck-off entities, and governance.",
    priceAnchor: "₹6,999",
    turnaround: "Delivered within 48 hours",
    features: [
      "Promoter multi-directorships & historical tracking",
      "Section 248 struck-off entity verification",
      "Full litigation, arbitration & NCLT scan",
      "Regulatory enforcement & debarment references",
      "Comprehensive 360 public-record synthesis",
      "Human-reviewed executive scorecard",
    ],
  },
];

export const methodology: { title: string; desc: string }[] = [
  {
    title: "How we match identity",
    desc: "We anchor every search to verifiable identifiers: CIN, LLPIN, GSTIN, director DINs and registered names, so findings are tied to the right entity, not a similarly named one.",
  },
  {
    title: "Sources we typically check",
    desc: "MCA / ROC, GST status, EPFO / ESIC, district courts, High Courts and the Supreme Court, consumer forums, ITAT, IBC references, SEBI and regulatory orders, debarment lists and other credible public sources.",
  },
  {
    title: "How we report findings",
    desc: "Each finding carries its source link and the date of search. We report what the records show in neutral language, no editorialising, no claims beyond the record.",
  },
  {
    title: "What we do not do",
    desc: "We do not give legal advice, issue credit ratings, run private investigations or guarantee future conduct. A report is a public-records risk picture to inform your own decision.",
  },
];

// Illustrative, anonymised examples, not real clients or entities.
export const caseExamples: { tag: string; title: string; desc: string }[] = [
  {
    tag: "Vendor onboarding",
    title: "Active GST, but director-linked litigation surfaced",
    desc: "A supplier looked clean on the surface, valid GSTIN and active status, but a search surfaced pending litigation tied to a common director across two linked entities.",
  },
  {
    tag: "Investment screening",
    title: "Promoter linked to a struck-off company",
    desc: "Identity matched cleanly, yet linkage mapping showed the promoter tied to a separate company that had been struck off, prompting a closer look before the round.",
  },
  {
    tag: "Pre-contract check",
    title: "One address, several entities",
    desc: "A counterparty's registration matched, but the registered address mapped to multiple entities with overlapping directors, a pattern worth understanding before signing.",
  },
];

export const faqs: { q: string; a: string }[] = [
  {
    q: "What is a public-record business risk report?",
    a: "It is a decision-support report that compiles risk indicators about a company, vendor, promoter or counterparty from public and credible sources, MCA/ROC, GST, courts, tribunals, regulators and similar, matched to the entity and presented with source links and a date of search.",
  },
  {
    q: "How is this different from a credit report?",
    a: "A credit report focuses on creditworthiness and payment behaviour using bureau data and a score. Our report focuses on public-record risk indicators, identity, status, litigation, regulatory, insolvency and linkage signals, and is not a credit rating or score.",
  },
  {
    q: "How is this different from legal due diligence?",
    a: "Legal due diligence is a lawyer's review and opinion, often on documents you provide. Our report is a public-records search and risk summary. It can support legal due diligence, but it is not a legal opinion and does not replace your lawyer.",
  },
  {
    q: "Is this a legal opinion?",
    a: "No. We do not provide legal advice or opinions. We report what public records show, in neutral language, so you and your advisers can make an informed decision.",
  },
  {
    q: "Is this a private investigation?",
    a: "No. We work only with public and credible records and information you provide. We do not conduct surveillance or any non-public investigation.",
  },
  {
    q: "What entities can you check?",
    a: "Companies and LLPs are the most fully covered because of MCA/ROC records. We can also check directors and promoters, and, depending on identifiers available, proprietorships and partnership firms via GST and other public records.",
  },
  {
    q: "Can you check proprietorships and partnership firms?",
    a: "Often yes, but coverage is lighter than for companies and LLPs, because unregistered firms have a smaller public-record footprint. GSTIN, PAN and address identifiers help us match records more reliably.",
  },
  {
    q: "Can you check directors and promoters?",
    a: "Yes. We can review directorships, linked entities and litigation or adverse references matched to a named director or promoter, subject to identity-matching and false-positive checks.",
  },
  {
    q: "Can you check litigation against a company?",
    a: "Yes, within scope. We search district courts, High Courts, the Supreme Court (where relevant), consumer forums and tribunals such as ITAT and NCLT, matched to the entity or its people as of the date of search.",
  },
  {
    q: "Can you check GST and MCA records?",
    a: "Yes. GST status and MCA/ROC status, filings and director information are core parts of most reports, depending on what is publicly available for the entity.",
  },
  {
    q: "Do you provide source links?",
    a: "Yes. Every material finding is documented with a source reference and the date of search, so you can verify it independently.",
  },
  {
    q: "What details do I need to provide?",
    a: "At minimum the entity name. Any identifiers you have, CIN, LLPIN, GSTIN, PAN, registered address or website, improve matching accuracy and turnaround.",
  },
  {
    q: "What if I only have a company name?",
    a: "We can still proceed, but name-only searches carry a higher chance of ambiguity and false positives. We will note match confidence and may recommend confirming identifiers before deeper search.",
  },
  {
    q: "Can name-based searches produce false positives?",
    a: "Yes. Common names and shared addresses can produce matches that belong to a different entity or person. We apply identity-matching and false-positive filtering and flag uncertain matches rather than overstating them.",
  },
  {
    q: "How long does a report take?",
    a: "Our Vendor Risk Report is delivered within 48 hours for ₹2,499. Litigation & Compliance Check and Lender Credit Diligence are delivered in 24–48 hours (₹3,499 and ₹3,999 respectively). The Investor Red Flag Report is delivered in 48 hours for ₹6,999.",
  },
  {
    q: "What if no records are found?",
    a: "We report that no material record was matched in the sources searched, as of the date of search and within scope. Absence of a result does not prove absence of risk, it reflects what the searched public records showed.",
  },
  {
    q: "Can this guarantee that the party is safe?",
    a: "No. No report can guarantee future conduct. We provide source-linked risk indicators to support your decision, not a guarantee, certification or assurance of safety.",
  },
  {
    q: "Can you monitor vendors over time?",
    a: "Yes. Monitoring keeps selected entities on a watchlist with monthly or quarterly re-checks and alerts when a meaningful new record, litigation, status change, regulatory or insolvency reference, appears.",
  },
  {
    q: "Can you check multiple vendors at once?",
    a: "Yes. We regularly handle vendor portfolios and batches, with per-entity reports and an optional summary. Pricing scales with the number of entities and depth.",
  },
  {
    q: "Can you work with lawyers, CAs and consultants?",
    a: "Yes. Many engagements support professional advisers who need structured, source-linked public-record findings to fold into their own work product.",
  },
  {
    q: "Do you check adverse media?",
    a: "As an optional add-on we can include public web and adverse-media references where relevant. These are reported as references, not conclusions, and are subject to verification.",
  },
  {
    q: "Do you check sanctions, PEP or watchlists?",
    a: "Where relevant and in scope, we can include sanctions, watchlist and PEP screening references. These are screening indicators that require careful interpretation, not determinations.",
  },
  {
    q: "Is the information confidential?",
    a: "Yes. We treat your enquiry and the entities you ask about as confidential and use them only to prepare your report.",
  },
  {
    q: "Can I customise the scope?",
    a: "Yes. Scope is flexible, by entity type, depth of litigation search, linkage review, add-ons and turnaround. Share the decision you are making and we will suggest the right scope and a quote.",
  },
];

// ----- Report types (productization) -----
export const reportTypes: {
  name: string;
  slug: string;
  bestFor: string;
  turnaround: string;
  priceAnchor: string;
}[] = [
  { name: "Vendor Risk Report", slug: "vendor-risk-report", bestFor: "Procurement, supplier onboarding before a PO, advance release, and vendor vetting.", turnaround: "Delivered within 48 hours", priceAnchor: "₹2,499 / entity" },
  { name: "Litigation & Compliance Check", slug: "litigation-compliance-check", bestFor: "Commercial disputes, Section 138 NI Act, arbitration awards, and legal risk assessment.", turnaround: "Delivered within 24–48 hours", priceAnchor: "₹3,499 / entity" },
  { name: "Lender Credit Diligence", slug: "lender-credit-diligence", bestFor: "Pre-disbursement SME credit checks, prior bank floating charges, and borrower solvency signals.", turnaround: "Delivered within 24–48 hours", priceAnchor: "₹3,999 / entity" },
  { name: "Investor Red Flag Report", slug: "investor-red-flag-report", bestFor: "Pre-investment diligence, founder background verification, struck-off entities, and promoter linkages.", turnaround: "Delivered within 48 hours", priceAnchor: "₹6,999 / entity" },
];

// Coverage matrix: each row maps to the four official report types.
export const coverageMatrix: {
  feature: string;
  vendor: boolean | "partial";
  litigation: boolean | "partial";
  lender: boolean | "partial";
  investor: boolean | "partial";
}[] = [
  { feature: "Entity identity & registration match", vendor: true, litigation: true, lender: true, investor: true },
  { feature: "MCA / ROC master data & filings", vendor: true, litigation: true, lender: true, investor: true },
  { feature: "MCA Index of Charges & open bank liens", vendor: true, litigation: "partial", lender: true, investor: true },
  { feature: "GST status & GSTR-3B filing signals", vendor: true, litigation: true, lender: true, investor: true },
  { feature: "District & Commercial Court litigation", vendor: true, litigation: true, lender: true, investor: true },
  { feature: "Section 138 NI Act cheque bounce search", vendor: true, litigation: true, lender: true, investor: true },
  { feature: "High Court & Supreme Court litigation", vendor: "partial", litigation: true, lender: true, investor: true },
  { feature: "NCLT / IBC insolvency proceeding scan", vendor: "partial", litigation: true, lender: true, investor: true },
  { feature: "Director disqualifications under Sec 164(2)", vendor: "partial", litigation: "partial", lender: true, investor: true },
  { feature: "Promoter directorships & struck-off entities", vendor: "partial", litigation: "partial", lender: true, investor: true },
  { feature: "SEBI & regulatory debarment orders", vendor: "partial", litigation: true, lender: true, investor: true },
  { feature: "Overall risk scorecard & synthesis", vendor: true, litigation: true, lender: true, investor: true },
  { feature: "Source-linked citations & search timestamps", vendor: true, litigation: true, lender: true, investor: true },
];

// ----- Honest comparison vs alternatives -----
export const optionComparison: {
  option: string;
  goodFor: string;
  limitation: string;
  fit: string;
  highlight?: boolean;
}[] = [
  {
    option: "DIY MCA / GST search",
    goodFor: "A quick, free status or registration check on one entity.",
    limitation: "Scattered across portals; no litigation, linkage or risk view; easy to mis-match identities.",
    fit: "We pull these together and add litigation, linkage and a reviewed risk read.",
  },
  {
    option: "Credit report",
    goodFor: "Creditworthiness, payment behaviour and a bureau score.",
    limitation: "Not designed for litigation, regulatory, insolvency or director-linkage red flags.",
    fit: "We cover the public-record risk side a credit score does not show.",
  },
  {
    option: "Legal opinion",
    goodFor: "A lawyer's formal view on documents or a specific legal question.",
    limitation: "Higher cost and time; usually assumes you already know what to investigate.",
    fit: "We surface the public-record red flags worth taking to your lawyer.",
  },
  {
    option: "SaaS database / dashboard",
    goodFor: "Self-serve data access and bulk lookups for in-house teams.",
    limitation: "Raw data, not interpretation; licence cost; you do the matching and judgement.",
    fit: "We deliver a human-reviewed, source-linked report, no licence or learning curve.",
  },
  {
    option: "Private investigator",
    goodFor: "Field enquiries and non-public information gathering.",
    limitation: "Variable rigour; sourcing not always transparent or public-record based.",
    fit: "We stay strictly to public, source-linked records you can verify.",
  },
  {
    option: "Inamdar Business Analysis report",
    goodFor: "A human-reviewed, source-linked public-record risk picture for a specific decision.",
    limitation: "Public-record based; not a credit rating, legal opinion or guarantee of future conduct.",
    fit: "Built for business decisions, sign, invest, lend, onboard or partner.",
    highlight: true,
  },
];

// ----- Risk framework -----
export const riskTags: { label: string; tone: "neutral" | "amber" | "red" | "accent" }[] = [
  { label: "No material red flag (in scope)", tone: "accent" },
  { label: "Identity mismatch", tone: "amber" },
  { label: "Status concern (inactive / struck-off)", tone: "red" },
  { label: "GST concern", tone: "amber" },
  { label: "Filing delay indicator", tone: "amber" },
  { label: "Charge / borrowing indicator", tone: "neutral" },
  { label: "Active litigation found", tone: "amber" },
  { label: "High-severity litigation", tone: "red" },
  { label: "Consumer dispute found", tone: "amber" },
  { label: "Tax dispute found", tone: "amber" },
  { label: "Insolvency / IBC reference", tone: "red" },
  { label: "Regulatory reference", tone: "red" },
  { label: "Debarment / blacklist reference", tone: "red" },
  { label: "Director-linked risk", tone: "amber" },
  { label: "Promoter-linked risk", tone: "amber" },
  { label: "Adverse public-record reference", tone: "red" },
  { label: "Multiple linked entities", tone: "neutral" },
  { label: "Requires legal review", tone: "neutral" },
  { label: "Requires financial review", tone: "neutral" },
  { label: "Requires enhanced diligence", tone: "neutral" },
];

export const riskRatings: { level: string; tone: "accent" | "amber" | "red" | "neutral"; desc: string }[] = [
  { level: "Low", tone: "accent", desc: "No material red flag matched within scope as of the date of search. Routine indicators only." },
  { level: "Moderate", tone: "amber", desc: "Some indicators warrant attention, e.g. active litigation, filing or linkage signals, but nothing decisive on their own." },
  { level: "High", tone: "red", desc: "One or more significant red flags found, such as high-severity litigation, regulatory or insolvency references." },
  { level: "Critical", tone: "red", desc: "Serious concern, e.g. struck-off status, debarment, or multiple severe references, warranting careful review before proceeding." },
  { level: "Insufficient information", tone: "neutral", desc: "Identifiers or public records were too limited to form a reliable view. We flag this rather than guess." },
];

// ----- Sources & coverage -----
export const sourceCategories: { title: string; items: string[] }[] = [
  {
    title: "Corporate records",
    items: [
      "MCA / ROC company or LLP status",
      "Directors / partners and DIN references",
      "Registered charges and borrowings",
      "Filing history indicators",
      "Registered address",
      "Linked entities where available",
    ],
  },
  {
    title: "Tax & statutory indicators",
    items: [
      "GST registration status",
      "GSTIN / entity / address matching",
      "EPFO / ESIC establishment indicators",
      "Employee headcount trend where publicly available",
    ],
  },
  {
    title: "Litigation & disputes",
    items: [
      "District courts and High Courts",
      "Supreme Court references where relevant",
      "Consumer forums",
      "ITAT (tax) and NCLT / IBC (insolvency)",
      "DRT / CESTAT / other tribunals within scope",
      "Arbitration / public award references where available",
      "Civil / criminal categorisation where identifiable",
    ],
  },
  {
    title: "Regulatory & caution references",
    items: [
      "SEBI and sectoral regulator orders",
      "RBI / MCA / other regulator references where relevant",
      "Debarment / blacklist / caution lists",
      "Public official adverse references",
    ],
  },
  {
    title: "Linkage review",
    items: [
      "Director / promoter / partner linked entities",
      "Current and past directorships where available",
      "Related-entity red flags",
      "Name / address / identifier matching notes",
    ],
  },
  {
    title: "Optional add-ons",
    items: [
      "Adverse media / public web references",
      "Sanctions / watchlist / PEP screening where relevant",
      "Financial indicators where filings are available",
      "Public credit-rating references where available",
      "Document consistency checks",
    ],
  },
];

export const sourceLimitations: string[] = [
  "Public-record availability varies by entity type, registration and portal.",
  "Name-based searches can produce false positives; identifiers improve accuracy.",
  "Identity matching depends on the identifiers available to us.",
  "Absence of a result does not prove absence of risk.",
  "Reports are not legal opinions, credit ratings or private investigations.",
];

// ----- Methodology steps -----
export const methodologySteps: { title: string; desc: string }[] = [
  { title: "Scope definition", desc: "We agree what decision the report supports, which entities and people are in scope, and the depth of search before we begin." },
  { title: "Entity identification", desc: "We establish exactly which legal entity is being checked, distinguishing it from similarly named companies." },
  { title: "Identifier matching", desc: "We anchor the search to CIN, LLPIN, GSTIN, PAN, DIN and registered address so findings attach to the right entity and people." },
  { title: "Source selection", desc: "We choose the public and credible sources relevant to the scope, corporate, tax, litigation, regulatory and linkage records." },
  { title: "Public-record search", desc: "We search those sources and capture what is publicly available as of the date of search." },
  { title: "Name matching & false-positive filtering", desc: "We assess match confidence, set aside likely mismatches, and flag uncertain matches rather than overstating them." },
  { title: "Risk tagging", desc: "We apply consistent risk tags and an overall internal risk rating based on what the records show within scope." },
  { title: "Source-link documentation", desc: "We document each material finding with a source reference and the date of search so you can verify independently." },
  { title: "Report drafting & review", desc: "A human drafts and reviews the report in neutral language, no claims beyond the record, no editorialising." },
  { title: "Limitations stated", desc: "We state what was in and out of scope, match-confidence caveats, and what the report is not." },
  { title: "Confidentiality", desc: "Your enquiry and the entities you ask about are kept confidential and used only to prepare your report." },
];

export const CONTACT = {
  phoneDisplay: "+91 91064 69665",
  phoneTel: "+919106469665",
  whatsapp:
    "https://wa.me/919106469665?text=Hi%2C%20I%27d%20like%20to%20request%20a%20business%20risk%20report.",
  cal: "https://cal.com/inamdarlegal/15min",
};

export const DISCLAIMER =
  "This report is based on public records, information provided by the client, and records available from official or credible sources as of the date of search. It is prepared for decision support and is not a credit rating, legal opinion, private investigation, certificate of good standing, or guarantee of future performance or conduct.";
