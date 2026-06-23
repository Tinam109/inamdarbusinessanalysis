import Link from "next/link";

/**
 * LogoMark — original geometric mark for Inamdar Business Analysis.
 *
 * Concept: a shield silhouette (verification / trust / due diligence) that
 * doubles as a stack of records. Inside sit three ascending signal bars
 * (structured data / business intelligence) topped by a single highlighted
 * signal node (a risk indicator). Restrained two-colour palette: deep navy
 * with a single emerald accent. No scales, gavels or court imagery.
 */
export function LogoMark({
  className = "h-9 w-9",
  gradientId = "iba-mark",
}: {
  className?: string;
  gradientId?: string;
}) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      role="img"
      aria-label="Inamdar Business Analysis mark"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={`${gradientId}-bg`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1c2c4b" />
          <stop offset="100%" stopColor="#0b1428" />
        </linearGradient>
        <linearGradient id={`${gradientId}-bar`} x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#059669" />
          <stop offset="100%" stopColor="#34d399" />
        </linearGradient>
      </defs>

      {/* Shield / record-stack silhouette */}
      <path
        d="M24 3.5l16 5.2v12.2c0 11.2-6.9 19.6-16 23.6C14.9 40.5 8 32.1 8 20.9V8.7L24 3.5z"
        fill={`url(#${gradientId}-bg)`}
      />

      {/* Ascending signal bars (structured data / intelligence) */}
      <rect x="15" y="26" width="4.2" height="8" rx="1.4" fill="#ffffff" opacity="0.45" />
      <rect x="21.9" y="22" width="4.2" height="12" rx="1.4" fill="#ffffff" opacity="0.7" />
      <rect x="28.8" y="18" width="4.2" height="16" rx="1.4" fill={`url(#${gradientId}-bar)`} />

      {/* Highlighted risk-signal node above the tallest bar */}
      <circle cx="30.9" cy="13.2" r="2.7" fill="#34d399" />
    </svg>
  );
}

/**
 * Logo — mark + wordmark lockup, linking home.
 */
export function Logo({
  className = "",
  showWordmark = true,
  compact = false,
}: {
  className?: string;
  showWordmark?: boolean;
  compact?: boolean;
}) {
  return (
    <Link
      href="/"
      className={`group flex items-center gap-2.5 ${className}`}
      aria-label="Inamdar Business Analysis — home"
    >
      <LogoMark className="h-9 w-9 transition-transform duration-300 group-hover:scale-105" />
      {showWordmark && (
        <span className="flex flex-col leading-none">
          {compact ? (
            <span className="font-display text-base font-semibold tracking-tight text-brand">
              Inamdar
            </span>
          ) : (
            <>
              <span className="font-display text-[15px] font-semibold tracking-tight text-brand">
                Inamdar Business Analysis
              </span>
              <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.22em] text-accent-600">
                Risk Intelligence
              </span>
            </>
          )}
        </span>
      )}
    </Link>
  );
}
