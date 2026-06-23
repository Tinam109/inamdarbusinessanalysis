import Logo from "./Logo";
import SampleReportGate from "./SampleReportGate";

const reportChecks = [
  "MCA / ROC filings and company master data",
  "GST registrations and public compliance indicators",
  "EPFO and ESIC public establishment indicators",
  "District court cases",
  "High Court cases",
  "Consumer court cases",
  "ITAT and tax litigation references",
  "IBC / insolvency proceedings",
  "SEBI and regulatory orders",
  "Watchout Investors records",
  "Government debarment lists",
  "Director and promoter linked entities",
  "Adverse public records",
];

const audiences = [
  "Founders",
  "SMEs",
  "Investors",
  "Procurement teams",
  "Lenders",
  "Exporters",
  "Distributors",
  "Franchise businesses",
  "CAs",
  "CSs",
  "Lawyers",
  "Consultants",
];

const useCases = [
  "Vendor onboarding",
  "Investment screening",
  "Pre-contract checks",
  "Business credit",
  "Franchise and dealership checks",
  "Acquisition checks",
  "Partnership checks",
];

const deliverables = [
  "PDF report",
  "Source links",
  "Date of search",
  "Identity match summary",
  "Litigation table",
  "Compliance risk indicators",
  "Regulatory red flags",
  "Overall risk summary",
];

const pricing = [
  {
    name: "Basic Check",
    summary: "A focused public-records scan for early screening or low-risk counterparties.",
    items: ["Identity and registration checks", "Core public-source review", "Short risk summary"],
  },
  {
    name: "Standard Report",
    summary: "A structured business risk report for onboarding, contracts and credit decisions.",
    items: ["Company and promoter coverage", "Litigation and compliance tables", "Source-backed findings"],
  },
  {
    name: "Enhanced Report",
    summary: "A deeper review for investments, acquisitions, partnerships and higher exposure.",
    items: ["Linked entity mapping", "Expanded regulatory review", "Detailed risk narrative"],
  },
  {
    name: "Monitoring",
    summary: "Periodic public-record checks for important vendors, borrowers or counterparties.",
    items: ["Defined monitoring scope", "Scheduled search dates", "Change-oriented updates"],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f5ef] text-[#15211f]">
      <section className="border-b border-[#d9d1c1] bg-[#f7f5ef]">
        <div className="mx-auto flex max-w-7xl flex-col gap-16 px-6 py-8 sm:px-8 lg:px-12 lg:py-10">
          <header className="flex flex-col gap-4 border-b border-[#d9d1c1] pb-6 sm:flex-row sm:items-center sm:justify-between">
            <Logo />
            <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-[#52645f]">
              <a className="hover:text-[#1f3c35]" href="#scope">
                Scope
              </a>
              <a className="hover:text-[#1f3c35]" href="#deliverables">
                Deliverables
              </a>
              <a className="hover:text-[#1f3c35]" href="#pricing">
                Pricing
              </a>
              <a className="hover:text-[#1f3c35]" href="#sample">
                Sample
              </a>
              <a className="hover:text-[#1f3c35]" href="#contact">
                Contact
              </a>
            </nav>
          </header>

          <div className="grid gap-10 pb-16 pt-4 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:pb-20 lg:pt-10">
            <div>
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#9a632f]">
                Public records business risk reports
              </p>
              <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-[#132320] sm:text-5xl lg:text-6xl">
                Know who you are dealing with before you sign, invest, lend or onboard.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4c5d58]">
                Source-backed public records reports for Indian companies, vendors, promoters and
                counterparties.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex min-h-12 items-center justify-center rounded-md bg-[#1f3c35] px-6 text-sm font-semibold text-white transition hover:bg-[#172d28]"
                >
                  Request a Report
                </a>
                <a
                  href="#sample"
                  className="inline-flex min-h-12 items-center justify-center rounded-md border border-[#9d8d73] px-6 text-sm font-semibold text-[#1f3c35] transition hover:border-[#1f3c35]"
                >
                  Download Sample
                </a>
              </div>
            </div>

            <aside className="border-l-4 border-[#9a632f] bg-white/65 p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#9a632f]">
                Built for diligence
              </p>
              <p className="mt-4 text-2xl font-semibold leading-snug text-[#1f3c35]">
                Public-source checks organized into a practical risk summary before a business decision is made.
              </p>
              <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-[#d9d1c1] pt-6 text-sm">
                <div>
                  <dt className="font-semibold text-[#132320]">Sources</dt>
                  <dd className="mt-1 text-[#60706b]">Official and credible records</dd>
                </div>
                <div>
                  <dt className="font-semibold text-[#132320]">Format</dt>
                  <dd className="mt-1 text-[#60706b]">PDF with links</dd>
                </div>
                <div>
                  <dt className="font-semibold text-[#132320]">Coverage</dt>
                  <dd className="mt-1 text-[#60706b]">India-focused</dd>
                </div>
              </dl>
            </aside>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#9a632f]">
              The problem
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#132320]">Risk often hides in public records.</h2>
          </div>
          <p className="text-lg leading-8 text-[#4c5d58]">
            Businesses often enter contracts, onboard vendors, extend credit or invest without checking
            litigation, GST, MCA, regulatory and compliance risk indicators. A structured public-records
            report helps decision-makers see relevant signals before exposure increases.
          </p>
        </div>
      </section>

      <section id="scope" className="bg-[#eef1e7]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#9a632f]">
              What the report checks
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#132320]">
              Source-backed coverage across company, compliance, litigation and regulatory records.
            </h2>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {reportChecks.map((item) => (
              <div key={item} className="border border-[#cbd2c3] bg-white/70 p-4 text-sm font-medium text-[#263a35]">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:px-8 lg:grid-cols-2 lg:px-12">
        <InfoList title="Who it is for" eyebrow="Users" items={audiences} />
        <InfoList title="Use cases" eyebrow="Decisions" items={useCases} />
      </section>

      <section id="deliverables" className="border-y border-[#d9d1c1] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#9a632f]">
                Deliverables
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-[#132320]">Clear report outputs for review.</h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {deliverables.map((item) => (
                <div key={item} className="border-b border-[#d9d1c1] py-3 text-[#334640]">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#9a632f]">
            Pricing
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-[#132320]">Choose the report depth that fits the decision.</h2>
          <p className="mt-4 text-[#596a65]">Pricing depends on scope, identifiers available, search depth and monitoring frequency.</p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {pricing.map((plan) => (
            <article key={plan.name} className="flex min-h-80 flex-col border border-[#d9d1c1] bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-[#1f3c35]">{plan.name}</h3>
              <p className="mt-4 text-sm leading-6 text-[#596a65]">{plan.summary}</p>
              <p className="mt-5 text-sm font-semibold text-[#9a632f]">Pricing depends on scope.</p>
              <ul className="mt-6 space-y-3 text-sm text-[#334640]">
                {plan.items.map((item) => (
                  <li key={item} className="border-t border-[#e4ded1] pt-3">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="sample" className="border-y border-[#d9d1c1] bg-[#eef1e7]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:px-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#9a632f]">
              Sample report
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#132320]">
              See how a public-records risk report is structured.
            </h2>
            <p className="mt-5 leading-7 text-[#596a65]">
              Download a clean sample PDF showing the layout, source-note structure, risk summary,
              litigation table and compliance indicators used in a typical report.
            </p>
          </div>
          <div className="border border-[#cbd2c3] bg-white p-5 shadow-sm">
            <div className="grid gap-4 sm:grid-cols-[0.7fr_1fr] sm:items-center">
              <div className="rounded-md border border-[#d9d1c1] bg-[#1f3c35] p-5 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d9b27d]">PDF preview</p>
                <h3 className="mt-16 text-2xl font-semibold leading-snug">Sample Business Risk Report</h3>
                <p className="mt-4 text-sm leading-6 text-[#edf2ed]">
                  Illustrative company profile, public-source checks and summary tables.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#1f3c35]">Unlock the sample PDF</h3>
                <p className="mt-3 text-sm leading-6 text-[#596a65]">
                  Enter your details to reveal a direct download button. The file downloads instead of opening
                  in the browser.
                </p>
              </div>
            </div>
            <SampleReportGate />
          </div>
        </div>
      </section>

      <section className="bg-[#1f3c35] text-white">
        <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#d9b27d]">Disclaimer</p>
          <p className="mt-4 max-w-5xl text-lg leading-8 text-[#f2eee5]">
            This report is based on public records, information provided by the client and records available from
            official or credible sources as of the date of search. It is not a credit rating, legal opinion, private
            investigation, certificate of good standing or guarantee of future conduct.
          </p>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#9a632f]">
              Contact
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#132320]">Request a report scope.</h2>
            <p className="mt-5 leading-7 text-[#596a65]">
              Share the entity name, known identifiers and the business decision involved. Submissions can be
              connected later to email, CRM or a secure intake workflow.
            </p>
          </div>
          <form className="grid gap-4 border border-[#d9d1c1] bg-white p-5 shadow-sm sm:grid-cols-2">
            <TextField label="Name" name="name" />
            <TextField label="Email" name="email" type="email" />
            <TextField label="Phone/WhatsApp" name="phone" />
            <TextField label="Entity to be checked" name="entity" />
            <TextField label="Known identifiers" name="identifiers" wide />
            <TextField label="Purpose" name="purpose" wide />
            <label className="sm:col-span-2">
              <span className="text-sm font-semibold text-[#263a35]">Message</span>
              <textarea
                name="message"
                rows={5}
                className="mt-2 w-full rounded-md border border-[#cfc7b8] bg-[#fbfaf6] px-3 py-3 text-sm outline-none transition focus:border-[#1f3c35] focus:ring-2 focus:ring-[#1f3c35]/15"
              />
            </label>
            <div className="sm:col-span-2">
              <button
                type="button"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-md bg-[#1f3c35] px-6 text-sm font-semibold text-white transition hover:bg-[#172d28] sm:w-auto"
              >
                Send Enquiry
              </button>
              <p className="mt-3 text-sm text-[#66766f]">
                This form is frontend-only for now. Submissions can be connected later.
              </p>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

function InfoList({
  eyebrow,
  title,
  items,
}: {
  eyebrow: string;
  title: string;
  items: string[];
}) {
  return (
    <section>
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#9a632f]">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold text-[#132320]">{title}</h2>
      <div className="mt-8 flex flex-wrap gap-3">
        {items.map((item) => (
          <span key={item} className="rounded-md border border-[#d4c9b8] bg-white px-4 py-2 text-sm font-medium text-[#334640]">
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}

function TextField({
  label,
  name,
  type = "text",
  wide = false,
}: {
  label: string;
  name: string;
  type?: string;
  wide?: boolean;
}) {
  return (
    <label className={wide ? "sm:col-span-2" : ""}>
      <span className="text-sm font-semibold text-[#263a35]">{label}</span>
      <input
        name={name}
        type={type}
        className="mt-2 h-12 w-full rounded-md border border-[#cfc7b8] bg-[#fbfaf6] px-3 text-sm outline-none transition focus:border-[#1f3c35] focus:ring-2 focus:ring-[#1f3c35]/15"
      />
    </label>
  );
}
