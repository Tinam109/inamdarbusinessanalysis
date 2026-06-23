import { optionComparison } from "@/lib/content";

export function OptionComparison() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[820px] text-left text-sm">
          <thead>
            <tr className="border-b border-slate-200 text-xs font-semibold uppercase tracking-wider text-slate-400">
              <th className="p-4">Option</th>
              <th className="p-4">Good for</th>
              <th className="p-4">Limitation</th>
              <th className="p-4">Where we fit</th>
            </tr>
          </thead>
          <tbody>
            {optionComparison.map((row) => (
              <tr
                key={row.option}
                className={`border-b border-slate-100 ${
                  row.highlight ? "bg-accent-50/60" : ""
                }`}
              >
                <td className="p-4 align-top">
                  <span
                    className={`font-display font-semibold ${
                      row.highlight ? "text-accent-700" : "text-brand"
                    }`}
                  >
                    {row.option}
                  </span>
                </td>
                <td className="p-4 align-top text-slate-600">{row.goodFor}</td>
                <td className="p-4 align-top text-slate-500">{row.limitation}</td>
                <td className="p-4 align-top text-slate-600">{row.fit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="border-t border-slate-100 px-4 py-3 text-xs text-slate-400">
        Positioned honestly, each option has its place. We complement credit reports and legal advice rather than replace them.
      </p>
    </div>
  );
}
