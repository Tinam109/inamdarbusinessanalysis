import type { Metadata } from "next";
import {
  Eye,
  BellRing,
  CalendarClock,
  ListChecks,
  Gavel,
  ShieldAlert,
  Network,
  RefreshCw,
} from "lucide-react";
import { PageHero, DisclaimerBlock, ContactSection, CTABanner } from "@/components/Sections";
import { FeatureGrid, StepsSection, ChecklistSplit } from "@/components/PageBlocks";

export const metadata: Metadata = {
  title: "Monitoring, Monthly Watchlist for Companies & Promoters",
  description:
    "Monthly watchlist monitoring for selected companies, vendors or promoters. Get periodic re-checks and alerts when public records change, so risk indicators do not go stale after onboarding or investment.",
  openGraph: {
    title: "Monitoring | Inamdar Business Analysis",
    description:
      "Monthly watchlist monitoring for selected companies, vendors or promoters, with change alerts.",
  },
};

const checks = [
  { icon: ListChecks, title: "Build a watchlist", desc: "Add the companies, vendors or promoters you want kept under periodic review." },
  { icon: RefreshCw, title: "Monthly re-checks", desc: "We re-run public-records checks on a recurring cycle so findings stay current." },
  { icon: BellRing, title: "Change alerts", desc: "Get notified when a meaningful new record appears against a watched entity." },
  { icon: Gavel, title: "New litigation", desc: "Fresh court matches against a watched entity or its people are flagged." },
  { icon: ShieldAlert, title: "New regulatory action", desc: "Newly published regulatory orders and references are surfaced as they appear." },
  { icon: Network, title: "Linkage changes", desc: "Shifts in director or promoter linkages that may change the risk picture." },
];

const steps = [
  { title: "Choose entities", desc: "Tell us which companies, vendors or promoters belong on the watchlist." },
  { title: "Set the cadence", desc: "Pick a monitoring cycle and the indicators that matter most to you." },
  { title: "We watch", desc: "We re-check public records on schedule and compare against the last read." },
  { title: "You are alerted", desc: "Get a periodic summary plus alerts when something material changes." },
];

const deliverables = [
  "Maintained entity watchlist",
  "Monthly re-check cycle",
  "Change alerts on key records",
  "New-litigation flags",
  "New regulatory-action flags",
  "Periodic summary reports",
  "Source links + date of each check",
  "Scope set per engagement",
];

export default function MonitoringPage() {
  return (
    <>
      <PageHero
        eyebrow="For businesses & investors"
        title={
          <>
            Keep selected entities on a{" "}
            <span className="text-gradient">monthly watchlist.</span>
          </>
        }
        description="Risk indicators do not stop at onboarding or investment. Monitoring keeps chosen companies, vendors and promoters under periodic public-records review, and tells you when something changes."
        bullets={["Monthly re-checks", "Change alerts", "Periodic summaries"]}
      />

      <FeatureGrid
        eyebrow="What monitoring covers"
        title="Ongoing eyes on the records that matter"
        description="Each cycle re-checks available public sources and compares against the previous read, so new indicators surface quickly."
        items={checks}
      />

      <StepsSection
        eyebrow="How it works"
        title="From watchlist to ongoing alerts"
        steps={steps}
      />

      <ChecklistSplit
        eyebrow="What you get"
        title={
          <>
            Continuous{" "}
            <span className="text-gradient">watchlist coverage</span>
          </>
        }
        description="A standing layer of public-records monitoring on the entities you care about most."
        items={deliverables}
      />

      <CTABanner
        title="Do not let risk indicators go stale"
        description="Tell us which entities to watch and how often. We will set up a monitoring cycle that fits."
      />

      <DisclaimerBlock />
      <ContactSection />
    </>
  );
}
