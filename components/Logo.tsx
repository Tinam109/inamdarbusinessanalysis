import Link from "next/link";

/**
 * LogoMark, original geometric mark for Inamdar Business Analysis.
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
        <linearGradient id={`${gradientId}-bg`} x1="0.1" y1="0" x2="0.9" y2="1">
          <stop offset="0%" stopColor="#243a63" />
          <stop offset="55%" stopColor="#15244d" />
          <stop offset="100%" stopColor="#0a1228" />
        </linearGradient>
        <linearGradient id={`${gradientId}-acc`} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#059669" />
          <stop offset="100%" stopColor="#5eead4" />
        </linearGradient>
        <radialGradient id={`${gradientId}-glow`} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#34d399" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Shield body with depth */}
      <path
        d="M24 3.2l15.4 5a1.6 1.6 0 0 1 1.1 1.5v11.6c0 11.7-7.1 19.9-15.8 23.8a1.7 1.7 0 0 1-1.4 0C14.6 41.2 7.5 33 7.5 21.3V9.7a1.6 1.6 0 0 1 1.1-1.5L24 3.2z"
        fill={`url(#${gradientId}-bg)`}
      />
      {/* Top sheen */}
      <path
        d="M24 3.2l15.4 5a1.6 1.6 0 0 1 1.1 1.5v3.1C33.8 9.4 28.9 8.2 24 8.2S14.2 9.4 7.5 12.8V9.7a1.6 1.6 0 0 1 1.1-1.5L24 3.2z"
        fill="#ffffff"
        opacity="0.07"
      />
      {/* Inner emerald ring detail */}
      <path
        d="M24 8.6l11.6 3.8a1 1 0 0 1 .7.95v8.95c0 8.9-5.4 15.2-12 18.3-6.6-3.1-12-9.4-12-18.3v-8.95a1 1 0 0 1 .7-.95L24 8.6z"
        fill="none"
        stroke={`url(#${gradientId}-acc)`}
        strokeWidth="0.9"
        opacity="0.45"
      />

      {/* Signal node glow */}
      <circle cx="32.6" cy="15.4" r="6" fill={`url(#${gradientId}-glow)`} />

      {/* Verify-and-rise mark: checkmark whose arm rises into a trend line */}
      <path
        d="M14.8 24.8l6.2 6.4L32.4 15.8"
        fill="none"
        stroke={`url(#${gradientId}-acc)`}
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Risk-signal node */}
      <circle cx="32.6" cy="15.4" r="3" fill="#0a1228" />
      <circle cx="32.6" cy="15.4" r="2.4" fill="#5eead4" />
    </svg>
  );
}

/**
 * Logo, mark + wordmark lockup, linking home.
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
      aria-label="Inamdar Business Analysis, home"
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
