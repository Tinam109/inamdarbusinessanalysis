# Inamdar Business Analysis — Strategy, SEO & Content Plan

This document holds the **non-code deliverables** (positioning, SEO meta, blog plan,
conversion templates, implementation checklist). The website itself already
implements the productization, comparison, risk framework, trust pages and copy
described in the brief.

---

## 1. Competitor benchmark summary

| Category | Examples | What to borrow (we already do / should add) |
|---|---|---|
| Vendor verification / BGV | AuthBridge, Arc Attest, Crystal, Netrika | Report types, turnaround SLAs, use-case pages, sample messaging. *Avoid* their "platform/API" framing — we're human-reviewed reports. |
| Company intelligence / credit-risk | Probe42, Tofler, CRIF | Source coverage breadth, entity profiles, linkage data. We differentiate by being **decision-support, not a database or score**. |
| Litigation / legal-risk | LegitQuest/LIBIL, court-search providers | Litigation depth (district→Supreme Court, tribunals), match-confidence and false-positive handling. |
| AML / entity-risk | ZIGRAM, KYB/PEP/watchlist tools | Risk tags, watchlist/PEP/adverse-media as **optional add-ons**, monitoring. |
| Global TPRM | Certa | Monitoring, portfolio view, risk scoring — frame any platform features as **future options**, not current claims. |

**Net takeaway:** our defensible edge is *human-reviewed, source-linked, Indian
public-record risk reports in PDF* — cheaper and more interpretive than a database,
narrower and more honest than a PI, faster and more targeted than a legal opinion.

---

## 2. Strategic positioning

> **Source-linked Indian public-record risk reports, reviewed by humans and written for business decisions.**

- **Buy trigger:** before you *sign, invest, lend, onboard, issue a PO, or partner.*
- **Category we own:** counterparty due diligence on the Indian public record.
- **Not:** credit rating · legal opinion · private investigation · certificate of good standing · guarantee of future conduct · SaaS dashboard.
- **Proof pillars:** source links + date of search · methodology page · risk framework · sample report · honest limitations.

---

## 3. Revised sitemap (implemented)

```
/                         Homepage (hero → problem → scope → risk signals → risk framework →
                          who → use cases → deliverables → report types matrix → how we work →
                          comparison → pricing → FAQ → disclaimer → contact)
/vendor-risk-report       Buyer page — procurement / SMEs
/investor-red-flag-report Buyer page — investors / lenders
/litigation-compliance-check  Buyer page — litigation/compliance concern
/monitoring               Buyer page — ongoing watchlist
/methodology              How reports are prepared (trust)
/sources                  Sources & coverage (trust + SEO)
/about                    Founder / credibility (placeholders to fill)
/sample-report            Fictional ABC Industrial Supplies report
/sitemap.xml /robots.txt  SEO
FUTURE: /pricing (standalone), /faq (standalone), /resources (blog), /contact (standalone)
```

---

## 4. SEO plan — meta titles & descriptions

| Page | Slug | Meta title (≤60c) | Meta description (≤155c) |
|---|---|---|---|
| Home | `/` | Inamdar Business Analysis \| Public Records Business Risk Reports India | Source-linked Indian public-record risk reports on companies, vendors & promoters — MCA, GST, litigation, regulatory & linkage indicators. Human-reviewed. |
| Vendor | `/vendor-risk-report` | Vendor Risk Report India — Check Vendors Before You Onboard | Public-record vendor due diligence for procurement & SMEs. Verify identity, status, litigation & compliance before a PO or business credit. |
| Investor | `/investor-red-flag-report` | Investor Red Flag Report — Screen Before You Invest or Lend | Public-record red-flag screening for investors, acquirers & lenders. Company, promoter, litigation, regulatory & IBC indicators before the cheque. |
| Litigation | `/litigation-compliance-check` | Litigation & Compliance Check — Company Court Case Search India | Search courts, tribunals, tax & regulatory records against a company or director — source-linked, with match-confidence and a date of search. |
| Monitoring | `/monitoring` | Vendor & Counterparty Monitoring — Public-Record Watchlist | Monthly/quarterly re-checks on vendors, portfolios & counterparties. Alerts on new litigation, status, regulatory & insolvency records. |
| Methodology | `/methodology` | How We Prepare Public-Record Risk Reports \| Methodology | Our process: scope, identifier matching, source selection, false-positive filtering, risk tagging, human review & confidentiality. |
| Sources | `/sources` | Sources & Coverage — Indian Public Records We Search | Corporate (MCA), tax (GST/EPFO), litigation (courts, NCLT/IBC), regulatory & linkage sources we cover — with honest limitations. |
| About | `/about` | About Inamdar Business Analysis — Human-Reviewed Reports | A source-linked, public-record-only Indian risk reporting service built on careful methodology and honest reporting. |
| Sample | `/sample-report` | Sample Business Risk Report — What You Receive | An illustrative, fictional public-record risk report: identity, risk tags, litigation table, linkages & source appendix. |

**Schema (implemented / to add):** `ProfessionalService` (in layout) ✅, `FAQPage` (homepage) ✅. **To add:** `Service` per buyer page, `BreadcrumbList` on sub-pages, `WebSite` + `sitelinks searchbox`.

**Internal linking rules:** every buyer page → links to `/methodology`, `/sources`, `/sample-report`, `/#pricing`, `/#contact`. Homepage report-types matrix → buyer pages. Blog posts → the single most relevant buyer page (see CTAs below).

---

## 5. Blog / resource plan (30 topics)

> For each: **target keyword · intent · title · 5-bullet outline · CTA page.** Publish under `/resources/<slug>`.

1. **Vendor due diligence checklist India** · informational/lead-gen · "Vendor Due Diligence Checklist for Indian Businesses (2026)" · [what to verify · identity & GST · litigation · linkages · red-flag thresholds] · → /vendor-risk-report
2. **how to check a company before purchase order** · commercial · "How to Check a Company Before Issuing a Purchase Order" · [why · MCA/GST · litigation · linkage · when to escalate] · → /vendor-risk-report
3. **MCA vs GST vs litigation search** · informational · "MCA vs GST vs Litigation Search: What Each Record Tells You" · [MCA · GST · courts · gaps · combine] · → /sources
4. **what is a public records risk report** · informational · "What Is a Public-Records Business Risk Report?" · [definition · vs credit · vs legal · what's inside · when to use] · → /
5. **how to check litigation against a company in India** · commercial · "How to Check Litigation Against a Company in India" · [court system · eCourts · tribunals · false positives · limits] · → /litigation-compliance-check
6. **red flags before investing in a private company** · commercial · "Red Flags Before Investing in a Private Company (India)" · [promoter · litigation · IBC · linkages · governance] · → /investor-red-flag-report
7. **does GST registration prove legitimacy** · informational · "Why GST Registration Alone Doesn't Prove Business Reliability" · [what GST shows · what it doesn't · misuse · combine · checklist] · → /vendor-risk-report
8. **vendor risk monitoring** · commercial · "Vendor Risk Monitoring: Why One-Time Checks Aren't Enough" · [risk drift · what changes · cadence · alerts · portfolio] · → /monitoring
9. **director linkages due diligence** · informational · "Director Linkages: Why They Matter in Due Diligence" · [what linkage is · how we map · risk patterns · examples · limits] · → /investor-red-flag-report
10. **credit report vs business risk report** · informational · "Difference Between a Credit Report and a Business Risk Report" · [bureau vs public record · score vs indicators · use cases · combine] · → /
11. **how to verify a supplier in India** · commercial · "How to Verify a New Supplier in India" · [identity · status · litigation · references · monitoring] · → /vendor-risk-report
12. **CIN LLPIN GSTIN explained** · informational · "CIN, LLPIN, GSTIN, DIN: The Identifiers That Power Due Diligence" · [each ID · where to find · matching · pitfalls] · → /sources
13. **struck off company meaning** · informational · "What a 'Struck-Off' Company Status Means for You" · [meaning · risk · how to spot · revival · action] · → /litigation-compliance-check
14. **NCLT IBC check** · commercial · "How to Spot Insolvency (IBC/NCLT) References Before Lending" · [IBC basics · NCLT · what to search · meaning · limits] · → /investor-red-flag-report
15. **distributor dealer verification** · commercial · "Screening Distributors and Dealers Before You Appoint Them" · [why · checks · franchise overlap · red flags] · → /vendor-risk-report
16. **franchise due diligence India** · commercial · "Franchise Due Diligence: Checking the Franchisor and Franchisee" · [both sides · public records · litigation · linkages] · → /vendor-risk-report
17. **counterparty risk meaning** · informational · "Counterparty Risk in Indian Business Deals, Explained" · [definition · sources · examples · mitigation] · → /
18. **false positives company search** · informational · "Why Company Searches Throw False Positives (and How We Filter Them)" · [name overlap · address overlap · matching · confidence] · → /methodology
19. **SEBI order check** · informational · "How to Check SEBI and Regulatory Orders Against a Company" · [SEBI · sectoral regulators · meaning · search · limits] · → /litigation-compliance-check
20. **adverse media screening India** · informational · "Adverse Media Screening: What It Can and Can't Tell You" · [what it is · sources · false signals · use as add-on] · → /investor-red-flag-report
21. **KYB India** · commercial · "Know Your Business (KYB) in India: A Practical Guide" · [KYB vs KYC · records · workflow · monitoring] · → /vendor-risk-report
22. **pre-acquisition due diligence checklist** · commercial · "Pre-Acquisition Public-Record Due Diligence Checklist" · [target · promoter · litigation · IBC · linkages] · → /investor-red-flag-report
23. **how long does due diligence take** · informational · "How Long Does Business Due Diligence Take in India?" · [scope drivers · turnaround · rush · trade-offs] · → /#pricing
24. **lending to a private company risk** · commercial · "Public-Record Checks Before Lending to a Private Company" · [why · charges · litigation · IBC · monitoring] · → /investor-red-flag-report
25. **EPFO ESIC employee count** · informational · "Reading EPFO/ESIC Data to Gauge a Company's Scale" · [what they show · headcount trend · caveats] · → /sources
26. **company registered address check** · informational · "What a Registered Address Can Reveal in Due Diligence" · [shared addresses · shell patterns · matching] · → /methodology
27. **procurement risk management India** · commercial · "Building a Vendor Risk Process for Indian Procurement Teams" · [onboarding gate · tiers · monitoring · escalation] · → /monitoring
28. **arbitration award search** · informational · "Can You Search Arbitration and Public Awards in India?" · [availability · what's public · limits] · → /litigation-compliance-check
29. **due diligence for SMEs** · commercial · "Due Diligence on a Budget: A Guide for Indian SMEs" · [cheap checks · when to pay · tiers · sample] · → /#pricing
30. **how to read a risk report** · informational · "How to Read a Public-Record Risk Report" · [risk rating · tags · sources · next steps] · → /sample-report

---

## 6. Conversion assets & templates

### Sticky CTA / WhatsApp (implemented)
- Sticky WhatsApp button, prefilled: *"Hi, I'd like to request a business risk report."*
- Buttons sitewide: **Request a Report**, **View Sample Report**, **Get Scope & Quote**, **Book a 15-Minute Call**.

### Lead magnet — "Vendor Public-Record Due Diligence Checklist (India)"
Offer copy: *"Free 1-page checklist: the 12 public-record signals to check before you onboard a vendor. No login — just tell us where to send it."* (Gate with email; deliver PDF; tag as warm lead.)

### Thank-you page copy (after enquiry)
> **Thanks — we've got your details.**
> We'll review the entity and reply within one working day with the right scope, turnaround and a quote. Need it faster? Message us on WhatsApp at +91 91064 69665. While you wait, see a [sample report](/sample-report) or our [methodology](/methodology).

### Email auto-reply (after inquiry)
> **Subject: We've received your enquiry — Inamdar Business Analysis**
> Hi [Name], thanks for reaching out. We've received your request regarding **[entity]**. We'll come back within one working day with suggested scope (Basic / Standard / Enhanced), turnaround and a quote. If anything is urgent, reply here or WhatsApp +91 91064 69665. — Inamdar Business Analysis · Source-linked public-record risk reports. *This is not a credit rating, legal opinion or private investigation.*

### Sales response template (after a lead)
> Hi [Name], thanks for the details on **[entity]**. Based on what you've shared, I'd suggest our **[Vendor Risk Report / Lender Credit Diligence / Investor Red Flag Report]** — it covers identity, MCA charge registers, litigation (district & High Court), GST compliance and a director-linkage review, with source links and a clear date of search. Turnaround is **24–48 hours** with fixed pricing from **₹2,499**. Happy to confirm scope on a quick call: [cal link]. Shall I proceed?

### Exit-intent / bottom CTA
> **Before you go — not sure what you need?** Share the entity and we'll suggest the right scope, free. [Get Scope & Quote] · [View Sample Report]

---

## 7. Priority implementation checklist

**Week 1 (done / verify live):**
- [x] Report-types matrix, comparison table, risk framework on homepage
- [x] Methodology, Sources & Coverage, About pages
- [x] Sample report rebuilt (ABC Industrial Supplies) with risk tags
- [x] Pricing anchors + turnaround; sticky WhatsApp; FAQ + schema; sitemap/robots
- [ ] **You:** fill About founder bio; confirm Monitoring price; submit sitemap to Google Search Console

**Week 2:**
- [ ] Standalone `/pricing` and `/faq` pages (currently homepage sections)
- [ ] Add `Service` + `BreadcrumbList` schema to buyer pages
- [ ] Build the lead-magnet checklist PDF + email-gated download
- [ ] Wire the contact form/booking to a real handler (Formspree/Resend) + thank-you page

**Month 1:**
- [ ] Launch `/resources` blog; publish posts #1–#6 (highest-intent)
- [ ] Buyer-specific meta titles/descriptions (table §4)
- [ ] Add 2–3 real (anonymised) case examples as they accumulate

**Month 2:**
- [ ] Publish posts #7–#18; internal-link to buyer pages
- [ ] Add testimonials once available; add an industry page or two (manufacturing, BFSI vendors)
- [ ] Review Search Console queries; tune titles and add FAQ entries for real search questions
