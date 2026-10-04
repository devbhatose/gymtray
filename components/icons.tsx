import type { ReactNode } from "react";

type IconProps = {
  size?: number;
};

function Glyph({
  size = 20,
  children,
}: IconProps & { children: ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  );
}

/* Food & nutrition */

export function IconEgg(props: IconProps) {
  return (
    <Glyph {...props}>
      <path d="M12 3c3.4 0 6.3 4.4 6.3 9.4S15.3 21 12 21s-6.3-4.2-6.3-8.6S8.6 3 12 3Z" />
      <path d="M9.6 13.4a2.6 2.6 0 0 0 2.4 3.4" />
    </Glyph>
  );
}

export function IconBowl(props: IconProps) {
  return (
    <Glyph {...props}>
      <path d="M4 11h16a8 8 0 0 1-8 8 8 8 0 0 1-8-8Z" />
      <path d="M9 7c0-1 .8-1.5.8-2.5M13 7c0-1 .8-1.5.8-2.5" />
    </Glyph>
  );
}

export function IconFork(props: IconProps) {
  return (
    <Glyph {...props}>
      <path d="M5 3v4a3 3 0 0 0 6 0V3" />
      <path d="M8 3v4" />
      <path d="M8 10v11" />
      <path d="M17.5 3c-1.6 2-2.4 4.2-2.4 6.7 0 2 .9 3.3 2.4 3.3" />
      <path d="M17.5 3v18" />
    </Glyph>
  );
}

export function IconChart(props: IconProps) {
  return (
    <Glyph {...props}>
      <path d="M4 20.5h16" />
      <path d="M7.5 20.5V13" />
      <path d="M12 20.5V6.5" />
      <path d="M16.5 20.5V9.5" />
    </Glyph>
  );
}

export function IconRepeat(props: IconProps) {
  return (
    <Glyph {...props}>
      <path d="M17 2.5 21 6.5l-4 4" />
      <path d="M3 11.5V10a3.5 3.5 0 0 1 3.5-3.5h14" />
      <path d="M7 21.5l-4-4 4-4" />
      <path d="M21 12.5V14a3.5 3.5 0 0 1-3.5 3.5h-14" />
    </Glyph>
  );
}

/* Goals & progress */

export function IconTarget(props: IconProps) {
  return (
    <Glyph {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
    </Glyph>
  );
}

export function IconCheckCircle(props: IconProps) {
  return (
    <Glyph {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M8.5 12.3l2.4 2.4 4.6-5.2" />
    </Glyph>
  );
}

export function IconTrend(props: IconProps) {
  return (
    <Glyph {...props}>
      <path d="M3 17l6-6 4 4 7.5-7.5" />
      <path d="M14.5 7H21v6.5" />
    </Glyph>
  );
}

export function IconSparkles(props: IconProps) {
  return (
    <Glyph {...props}>
      <path d="M12 3.5l1.7 4.6 4.6 1.7-4.6 1.7L12 16.1l-1.7-4.6-4.6-1.7 4.6-1.7z" />
      <path d="M18.5 16.5l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8z" />
    </Glyph>
  );
}

/* People & lifestyle */

export function IconUser(props: IconProps) {
  return (
    <Glyph {...props}>
      <circle cx="12" cy="8" r="3.8" />
      <path d="M4.8 20.5a7.4 7.4 0 0 1 14.4 0" />
    </Glyph>
  );
}

export function IconClock(props: IconProps) {
  return (
    <Glyph {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.2V12l3.2 2" />
    </Glyph>
  );
}

export function IconLeaf(props: IconProps) {
  return (
    <Glyph {...props}>
      <path d="M5 19C5 10.7 10.7 5 19.5 5c0 8.8-5.4 14.5-13.7 14.5H5Z" />
      <path d="M5 19c2.8-4.8 6.6-7.8 11-9.6" />
    </Glyph>
  );
}

export function IconHeart(props: IconProps) {
  return (
    <Glyph {...props}>
      <path d="M12 20.3l-1.3-1.2C5.6 14.7 2.7 12 2.7 8.7 2.7 6.1 4.8 4 7.4 4c1.5 0 2.9.7 3.8 1.8L12 7l.8-1.2c.9-1.1 2.3-1.8 3.8-1.8 2.6 0 4.7 2.1 4.7 4.7 0 3.3-2.9 6-8 10.4L12 20.3Z" />
    </Glyph>
  );
}

/* Planning, training & audiences */

export function IconCalendar(props: IconProps) {
  return (
    <Glyph {...props}>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
      <path d="M3.5 9.6h17" />
      <path d="M8 3.2v3.4M16 3.2v3.4" />
      <path d="M8 13.6h.01M12 13.6h.01M16 13.6h.01" />
    </Glyph>
  );
}

export function IconDumbbell(props: IconProps) {
  return (
    <Glyph {...props}>
      <path d="M3 9.4v5.2" />
      <path d="M6.6 6.4v11.2" />
      <path d="M6.6 12h10.8" />
      <path d="M17.4 6.4v11.2" />
      <path d="M21 9.4v5.2" />
    </Glyph>
  );
}

export function IconFlame(props: IconProps) {
  return (
    <Glyph {...props}>
      <path d="M12 2.8c3.3 2.9 5.3 5.6 5.3 9a5.3 5.3 0 1 1-10.6 0c0-2 .8-3.8 2.2-5.3 0 1.6.7 2.6 1.7 3.1-.3-2.5.1-4.8 1.4-6.8z" />
    </Glyph>
  );
}

export function IconBalance(props: IconProps) {
  return (
    <Glyph {...props}>
      <circle cx="12" cy="4.2" r="1.4" />
      <path d="M12 5.6v14.9" />
      <path d="M7.5 20.5h9" />
      <path d="M4.5 8.6h15" />
      <path d="M4.5 8.6 2.3 13q2.2 2.1 4.4 0z" />
      <path d="M19.5 8.6 17.3 13q2.2 2.1 4.4 0z" />
    </Glyph>
  );
}

export function IconPlay(props: IconProps) {
  return (
    <Glyph {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M10.2 8.8l5.2 3.2-5.2 3.2z" />
    </Glyph>
  );
}
