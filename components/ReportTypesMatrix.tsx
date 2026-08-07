import { Check, Minus, FileSearch } from "lucide-react";
import { reportTypes, coverageMatrix } from "@/lib/content";
import { Button } from "@/components/ui/Button";

function Cell({ value }: { value: boolean | "partial" }) {
  if (value === true)
    return (
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-accent-50 text-accent-700">
        <Check className="h-3.5 w-3.5" />
      </span>
    );
  if (value === "partial")
    return (
      <span className="text-xs font-medium text-amber-600" title="Where relevant / basic">
        Basic
      </span>
    );
  return (
    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-slate-300">
      <Minus className="h-3.5 w-3.5" />
    </span>
  );
}

export function ReportTypesMatrix() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] text-left text-sm">
          <thead>
            <tr className="border-b border-slate-200">
              <th className="w-[34%] p-4 align-bottom text-xs font-semibold uppercase tracking-wider text-slate-400">
                Coverage
              </th>
              {reportTypes.map((t) => (
                <th key={t.slug} className="p-4 align-bottom">
                  <div className="font-display text-base font-semibold text-brand">{t.name}</div>
                  <div className="mt-1 text-xs font-medium text-accent-700">{t.priceAnchor}</div>
                  <div className="mt-0.5 text-xs font-normal text-slate-400">{t.turnaround}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-slate-100 bg-slate-50/60">
              <td className="p-4 text-xs font-medium text-slate-500">Best for</td>
              {reportTypes.map((t) => (
                <td key={t.slug} className="p-4 align-top text-xs leading-relaxed text-slate-500">
                  {t.bestFor}
                </td>
              ))}
            </tr>
            {coverageMatrix.map((row, i) => (
              <tr key={row.feature} className={i % 2 ? "bg-slate-50/40" : ""}>
                <td className="p-4 text-slate-600">{row.feature}</td>
                <td className="p-4">
                  <Cell value={row.vendor} />
                </td>
                <td className="p-4">
                  <Cell value={row.litigation} />
                </td>
                <td className="p-4">
                  <Cell value={row.lender} />
                </td>
                <td className="p-4">
                  <Cell value={row.investor} />
                </td>
              </tr>
            ))}
            <tr className="border-t border-slate-200">
              <td className="p-4" />
              {reportTypes.map((t) => (
                <td key={t.slug} className="p-4">
                  <Button href={`/${t.slug}`} size="sm" variant="secondary" className="w-full">
                    View Details
                  </Button>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex flex-col gap-3 border-t border-slate-100 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-slate-400 leading-normal">
          “Basic” = included where relevant or in summary form. Coverage depends on scope, entity type and public-record availability.
        </p>
        <Button href="/sample-report" variant="accent" size="sm" className="self-start sm:self-auto shrink-0">
          <FileSearch className="h-4 w-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
          View Sample Report (PDF)
        </Button>
      </div>
    </div>
  );
}
