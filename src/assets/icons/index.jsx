/*
  icons/index.jsx — every inline SVG icon used across the site, as components.
  Owns icon path data and nothing else.
  Does NOT own sizing or colour; callers set those via className/CSS.
  Depends on: nothing (plain React components).
*/

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

/** Right-pointing arrow; rotate with CSS when a left arrow is needed. */
export function ArrowIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...base}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

/** Down-pointing chevron, used by the FAQ rows. */
export function ChevronIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...base}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

/** Checkmark for pricing feature lists. */
export function CheckIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...base}>
      <path d="M4 12.5l5.5 5.5L20 6" />
    </svg>
  );
}

/** Chat bubble for the AI widget and the bento chat mockup. */
export function ChatIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...base}>
      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.5 8.5 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
    </svg>
  );
}

/** Compass — brand identity. */
export function CompassIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...base}>
      <circle cx="12" cy="12" r="10" />
      <path d="M16.24 7.76l-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z" />
    </svg>
  );
}

/** Stacked layers — graphic design. */
export function LayersIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...base}>
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  );
}

/** Ruled lines — web design. */
export function LayoutIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...base}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M9 21V9" />
    </svg>
  );
}

/** Line chart — rapid delivery / growth. */
export function TrendIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...base}>
      <path d="M23 6l-9.5 9.5-5-5L1 18" />
      <path d="M17 6h6v6" />
    </svg>
  );
}

/** Crosshair — conversion focused. */
export function TargetIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...base}>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

/** Document with a signature — no contracts. */
export function ContractIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...base}>
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" />
      <path d="M14 2v6h6M9 15l2 2 4-4" />
    </svg>
  );
}

/** Bolt — unlimited requests. */
export function BoltIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...base}>
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}

/** Overlapping circles — collaboration. */
export function UsersIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...base}>
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
    </svg>
  );
}

/** Five-pointed star — the hero review line. */
export function StarIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

/* --- social marks: filled glyphs, not stroked outlines --- */

export function GitHubIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M12 .5A11.5 11.5 0 00.5 12a11.5 11.5 0 007.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11 11 0 015.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.24 2.75.12 3.04.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0023.5 12 11.5 11.5 0 0012 .5z" />
    </svg>
  );
}

export function LinkedInIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 013.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 110-4.13 2.07 2.07 0 010 4.13zM7.12 20.45H3.55V9h3.57v11.45z" />
    </svg>
  );
}

/* X and Instagram are the reference's own Phosphor glyphs (256 grid), so they
   keep their viewBox rather than the 24 used by the marks above. */

export function XIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 256 256" aria-hidden="true" fill="currentColor">
      <path d="M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29L193.43,208Z" />
    </svg>
  );
}

export function InstagramIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 256 256" aria-hidden="true" fill="currentColor">
      <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80a40,40,0,0,1,40-40h96a40,40,0,0,1,40,40Zm-24-76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z" />
    </svg>
  );
}

export function DribbbleIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" {...base}>
      <circle cx="12" cy="12" r="10" />
      <path d="M5 7.5c4.5 4 9.5 5.5 15 5.5M8.5 3.5c4 5 6 10 6.5 17M20 10c-6 .5-11-1-14.5-5" />
    </svg>
  );
}