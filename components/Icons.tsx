
import type { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;

function IconBase({ children, ...props }: Props & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export const Icons = {
  whatsapp: (p: Props) => (
    <IconBase {...p}>
      <path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.4L3 20.5l1.4-4.7A8.5 8.5 0 1 1 20.5 11.7Z"/>
      <path d="M8.2 7.8c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.8 1.9c.1.3.1.5-.1.7l-.6.8c-.2.2-.1.4 0 .6.5.9 1.2 1.7 2.1 2.2.2.1.4.1.6-.1l.8-1c.2-.2.4-.3.7-.2l1.9.9c.3.1.4.3.4.6 0 .6-.3 1.3-.7 1.7-.5.5-1.3.8-2 .8-1.1 0-2.5-.5-4-1.8-1.7-1.5-2.9-3.5-3.2-4.7-.3-1.1-.1-1.9.4-2.4.4-.4.8-.7 1.2-.7Z"/>
    </IconBase>
  ),
  mail: (p: Props) => (
    <IconBase {...p}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></IconBase>
  ),
  pin: (p: Props) => (
    <IconBase {...p}><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></IconBase>
  ),
  globe: (p: Props) => (
    <IconBase {...p}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></IconBase>
  ),
  sun: (p: Props) => (
    <IconBase {...p}><circle cx="12" cy="12" r="3.5"/><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42"/></IconBase>
  ),
  moon: (p: Props) => (
    <IconBase {...p}><path d="M20 15.2A8.5 8.5 0 0 1 8.8 4a8.5 8.5 0 1 0 11.2 11.2Z"/></IconBase>
  ),
  monitor: (p: Props) => (
    <IconBase {...p}><rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4"/></IconBase>
  ),
  health: (p: Props) => (
    <IconBase {...p}><path d="M6 3v6a6 6 0 0 0 12 0V3M4 3h4M16 3h4"/><circle cx="19" cy="14" r="2"/><path d="M19 16v1a5 5 0 0 1-5 5h-1"/></IconBase>
  ),
  education: (p: Props) => (
    <IconBase {...p}><path d="m3 10 9-5 9 5-9 5-9-5Z"/><path d="M7 12.2V16c3 2 7 2 10 0v-3.8M21 10v5"/></IconBase>
  ),
  property: (p: Props) => (
    <IconBase {...p}><rect x="5" y="3" width="14" height="18" rx="1"/><path d="M9 7h1M14 7h1M9 11h1M14 11h1M9 15h1M14 15h1M10 21v-3h4v3"/></IconBase>
  ),
  travel: (p: Props) => (
    <IconBase {...p}><path d="m22 2-7 7-4-1-3 3 4 1-4 4-3-1-2 2 4 2 2 4 2-2-1-3 4-4 1 4 3-3-1-4 7-7c1-1 .5-2.5-1-1Z"/></IconBase>
  ),
  beauty: (p: Props) => (
    <IconBase {...p}><path d="M8 3c4 3 4 7 0 10M16 3c-4 3-4 7 0 10"/><circle cx="7" cy="17" r="3"/><circle cx="17" cy="17" r="3"/><path d="m9 15 6-6M15 15 9 9"/></IconBase>
  ),
  food: (p: Props) => (
    <IconBase {...p}><path d="M7 3v8M4 3v5a3 3 0 0 0 6 0V3M7 11v10M17 3v18M17 3c4 2 4 8 0 9"/></IconBase>
  ),
  government: (p: Props) => (
    <IconBase {...p}><path d="m3 9 9-5 9 5M4 10h16M6 10v7M10 10v7M14 10v7M18 10v7M3 19h18M2 22h20"/></IconBase>
  ),
  logistics: (p: Props) => (
    <IconBase {...p}><path d="M3 6h11v10H3zM14 10h4l3 3v3h-7z"/><circle cx="7" cy="18" r="2"/><circle cx="18" cy="18" r="2"/></IconBase>
  ),
  blog: (p: Props) => (
    <IconBase {...p}><path d="M5 4h14v16H5zM8 8h8M8 12h8M8 16h5"/></IconBase>
  ),
  guide: (p: Props) => (
    <IconBase {...p}><path d="M4 5a3 3 0 0 1 3-3h5v18H7a3 3 0 0 0-3 3V5ZM20 5a3 3 0 0 0-3-3h-5v18h5a3 3 0 0 1 3 3V5Z"/></IconBase>
  ),
  webinar: (p: Props) => (
    <IconBase {...p}><rect x="3" y="4" width="18" height="13" rx="2"/><path d="m10 8 5 2.5-5 2.5V8ZM8 21h8M12 17v4"/></IconBase>
  ),
  story: (p: Props) => (
    <IconBase {...p}><path d="M6 3h9l3 3v15H6z"/><path d="M15 3v4h4M9 11h6M9 15h6"/></IconBase>
  ),
  template: (p: Props) => (
    <IconBase {...p}><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M4 9h16M9 9v11"/></IconBase>
  ),
  instagram: (p: Props) => (
    <IconBase {...p}>
      <rect x="4" y="4" width="16" height="16" rx="5"/>
      <circle cx="12" cy="12" r="3.5"/>
      <circle cx="17.4" cy="6.7" r=".8" fill="currentColor" stroke="none"/>
    </IconBase>
  ),
  telegram: (p: Props) => (
    <IconBase {...p}>
      <path d="m3 11 17-7-4 16-5-5-3 3 .7-5.2L18 6.5 8.7 12.8 3 11Z"/>
    </IconBase>
  ),
  ads: (p: Props) => (
    <IconBase {...p}>
      <path d="M4 13V9l12-5v14L4 13Z"/>
      <path d="M16 9h2a3 3 0 0 1 0 6h-2M6 14l1 6h4l-2-5"/>
    </IconBase>
  ),
  api: (p: Props) => (
    <IconBase {...p}>
      <path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 4l-4 16"/>
    </IconBase>
  ),

};
