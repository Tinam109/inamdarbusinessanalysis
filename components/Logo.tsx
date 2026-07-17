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
        {/* Deep slate/navy background with high contrast */}
        <linearGradient id={`${gradientId}-bg`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1e2b4a" />
          <stop offset="40%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#020617" />
        </linearGradient>
        {/* High-tech pastel blue gradient for structured data bars */}
        <linearGradient id={`${gradientId}-bar`} x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#4a85e2" />
          <stop offset="100%" stopColor="#93bdfd" />
        </linearGradient>
        {/* Polished metallic gold gradient for the focal risk node */}
        <linearGradient id={`${gradientId}-gold`} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#d4a13c" />
          <stop offset="100%" stopColor="#fde047" />
        </linearGradient>
        {/* Glossy glass sheen overlay */}
        <linearGradient id={`${gradientId}-sheen`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        {/* Soft amber-gold glow behind the risk node */}
        <radialGradient id={`${gradientId}-gold-glow`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#e8c477" stopOpacity="0.65" />
          <stop offset="100%" stopColor="#e8c477" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Main Shield body */}
      <path
        d="M24 4L38 8.5v12.5c0 10.5-6.5 17.5-14 21C16.5 38.5 10 31.5 10 21V8.5L24 4z"
        fill={`url(#${gradientId}-bg)`}
        stroke="#1e293b"
        strokeWidth="1.2"
      />

      {/* Nested record layers to create "stack of records" feel */}
      <path
        d="M24 7.5L35 11v9.5c0 8-5 13.5-11 16-6-2.5-11-8-11-16V11l11-3.5z"
        fill="none"
        stroke="#16203a"
        strokeWidth="0.85"
        opacity="0.6"
      />

      {/* Glossy glass sheen reflection overlay */}
      <path
        d="M24 4.5L37.5 9v12c0 2.5-0.4 4.8-1 7C31.5 22.5 28 17 24 17S16.5 22.5 11.5 28c-0.6-2.2-1-4.5-1-7V9L24 4.5z"
        fill={`url(#${gradientId}-sheen)`}
        opacity="0.15"
      />

      {/* Three Ascending Data Bars (representing structured analytics / business intelligence) */}
      {/* Left bar (75% opacity) */}
      <rect x="17" y="25" width="3" height="9" rx="1.5" fill={`url(#${gradientId}-bar)`} opacity="0.75" />
      {/* Middle bar (85% opacity) */}
      <rect x="22.5" y="20" width="3" height="14" rx="1.5" fill={`url(#${gradientId}-bar)`} opacity="0.85" />
      {/* Right bar (full opacity) */}
      <rect x="28" y="15" width="3" height="19" rx="1.5" fill={`url(#${gradientId}-bar)`} />

      {/* Glowing Gold Risk Signal Node (the focal accent) */}
      <circle cx="29.5" cy="9.5" r="7" fill={`url(#${gradientId}-gold-glow)`} />
      <circle cx="29.5" cy="9.5" r="3" fill={`url(#${gradientId}-gold)`} />
      <circle cx="28.5" cy="8.5" r="0.8" fill="#ffffff" opacity="0.85" />
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
