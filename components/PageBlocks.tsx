import { Check } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Card, IconTile } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

/** A grid of icon feature cards, reused across sub-pages. */
export function FeatureGrid({
  eyebrow,
  title,
  description,
  items,
  columns = 3,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  items: { icon: LucideIcon; title: string; desc: string }[];
  columns?: 2 | 3 | 4;
}) {
  const cols =
    columns === 4
      ? "lg:grid-cols-4"
      : columns === 2
        ? "lg:grid-cols-2"
        : "lg:grid-cols-3";
  return (
    <section className="section-pad">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            description={description}
          />
        </Reveal>
        <RevealGroup className={`mt-12 grid gap-4 sm:grid-cols-2 ${cols}`}>
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <RevealItem key={item.title}>
                <Card className="h-full">
                  <IconTile>
                    <Icon className="h-5 w-5" />
                  </IconTile>
                  <h3 className="mt-4 font-display text-base font-semibold text-brand">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
                    {item.desc}
                  </p>
                </Card>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}

/** A numbered process section. */
export function StepsSection({
  eyebrow,
  title,
  steps,
}: {
  eyebrow: string;
  title: React.ReactNode;
  steps: { title: string; desc: string }[];
}) {
  return (
    <section className="section-pad">
      <div className="container-x">
        <Reveal>
          <SectionHeading eyebrow={eyebrow} title={title} align="center" />
        </Reveal>
        <RevealGroup className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <RevealItem key={step.title}>
              <div className="card h-full p-6">
                <span className="font-display text-3xl font-semibold text-gradient">
                  0{i + 1}
                </span>
                <h3 className="mt-3 font-display text-base font-semibold text-brand">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
                  {step.desc}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

/** A two-column "what you get" checklist beside a heading. */
export function ChecklistSplit({
  eyebrow,
  title,
  description,
  items,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  items: string[];
}) {
  return (
    <section className="section-pad">
      <div className="container-x grid items-start gap-12 lg:grid-cols-2">
        <Reveal>
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            description={description}
          />
        </Reveal>
        <RevealGroup className="grid gap-3 sm:grid-cols-2">
          {items.map((item) => (
            <RevealItem key={item}>
              <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3.5 shadow-soft">
                <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full border border-accent-100 bg-accent-50">
                  <Check className="h-3 w-3 text-accent-700" />
                </span>
                <span className="text-sm text-slate-600">{item}</span>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
