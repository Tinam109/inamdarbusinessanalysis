import { riskTags, riskRatings } from "@/lib/content";

const tagTone: Record<string, string> = {
  neutral: "border-slate-200 bg-slate-50 text-slate-600",
  amber: "border-amber-200 bg-amber-50 text-amber-700",
  red: "border-red-200 bg-red-50 text-red-700",
  accent: "border-accent-200 bg-accent-50 text-accent-700",
};

const ratingTone: Record<string, string> = {
  accent: "border-l-accent-500",
  amber: "border-l-amber-500",
  red: "border-l-red-500",
  neutral: "border-l-slate-400",
};

const ratingBadge: Record<string, string> = {
  accent: "bg-accent-50 text-accent-700",
  amber: "bg-amber-50 text-amber-700",
  red: "bg-red-50 text-red-700",
  neutral: "bg-slate-100 text-slate-600",
};

export function RiskFramework() {
  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {/* Risk ratings */}
      <div>
        <h3 className="font-display text-lg font-semibold text-brand">
          Overall risk rating
        </h3>
        <p className="mt-2 text-sm text-slate-500">
          Each report carries one internal rating, based on what public records show within scope. It is a decision-support rating, not a credit rating or legal conclusion.
        </p>
        <div className="mt-5 space-y-3">
          {riskRatings.map((r) => (
            <div
              key={r.level}
              className={`rounded-xl border border-slate-200 border-l-4 ${ratingTone[r.tone]} bg-white p-4 shadow-soft`}
            >
              <div className="flex items-center gap-2">
                <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${ratingBadge[r.tone]}`}>
                  {r.level}
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-500">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Risk tags */}
      <div>
        <h3 className="font-display text-lg font-semibold text-brand">Risk tags</h3>
        <p className="mt-2 text-sm text-slate-500">
          We attach short, consistent tags to a report so the key signals are scannable at a glance. Tags reflect what was matched in public records, with sources, as of the date of search.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {riskTags.map((t) => (
            <span
              key={t.label}
              className={`rounded-full border px-3 py-1.5 text-xs font-medium ${tagTone[t.tone]}`}
            >
              {t.label}
            </span>
          ))}
        </div>
        <p className="mt-5 text-xs leading-relaxed text-slate-400">
          Tags and ratings are an internal summary to aid your decision. They are not a credit score, certification or legal determination, and absence of a tag does not prove absence of risk.
        </p>
      </div>
    </div>
  );
}
