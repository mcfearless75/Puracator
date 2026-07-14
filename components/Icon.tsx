type IconProps = { name: string; className?: string };

const paths: Record<string, React.ReactNode> = {
  wrench: (
    <path d="M14.7 6.3a4 4 0 0 0-5.4 5l-6 6a1.5 1.5 0 0 0 0 2.1l1.3 1.3a1.5 1.5 0 0 0 2.1 0l6-6a4 4 0 0 0 5-5.4l-2.6 2.6-2.1-.6-.6-2.1 2.3-2.5Z" />
  ),
  shield: (
    <>
      <path d="M12 3 5 6v5c0 4.4 3 8.4 7 9.5 4-1.1 7-5.1 7-9.5V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  wave: (
    <>
      <path d="M3 8c2.5-2 4.5-2 7 0s4.5 2 7 0 4.5-2 4-1" />
      <path d="M3 13c2.5-2 4.5-2 7 0s4.5 2 7 0 4.5-2 4-1" />
      <path d="M3 18c2.5-2 4.5-2 7 0s4.5 2 7 0 4.5-2 4-1" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  layers: (
    <>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 13 9 5 9-5" />
    </>
  ),
  leaf: (
    <>
      <path d="M4 20c0-8 6-14 16-14 0 10-6 14-14 14" />
      <path d="M9 15c2-2 4-3 6-3.5" />
    </>
  ),
  sink: (
    <>
      <path d="M4 10h16" />
      <path d="M6 10v3a6 6 0 0 0 12 0v-3" />
      <path d="M12 10V5a2 2 0 0 1 2-2" />
      <path d="M12 19v2" />
    </>
  ),
  urinal: (
    <>
      <path d="M7 4h10v9a5 5 0 0 1-10 0V4Z" />
      <path d="M12 4v11" />
      <path d="M9.5 20h5" />
    </>
  ),
  fridge: (
    <>
      <rect x="6" y="3" width="12" height="18" rx="2" />
      <path d="M6 10h12" />
      <path d="M9 6v1.5M9 13v2" />
    </>
  ),
  droplet: (
    <path d="M12 3c4 5 6 8 6 11a6 6 0 0 1-12 0c0-3 2-6 6-11Z" />
  ),
  steam: (
    <>
      <path d="M8 21c-1.5-2 1.5-3 0-5" />
      <path d="M12 21c-1.5-2 1.5-3 0-5" />
      <path d="M16 21c-1.5-2 1.5-3 0-5" />
      <path d="M5 12h14" />
      <path d="M6 12a6 6 0 0 1 12 0" />
    </>
  ),
  check: <path d="m4 12 5 5L20 6" />,
  arrow: <path d="M5 12h14m-6-6 6 6-6 6" />,
  spark: (
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" />
  ),
  phone: (
    <path d="M4 5c0-1 1-2 2-2h2l1.5 4-2 1.5a12 12 0 0 0 6 6l1.5-2 4 1.5V18c0 1-1 2-2 2A16 16 0 0 1 4 5Z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
};

export function Icon({ name, className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name] ?? paths.droplet}
    </svg>
  );
}
