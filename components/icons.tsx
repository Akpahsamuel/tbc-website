export type IconProps = {
  size?: number;
  color?: string;
};

function Icon({
  size = 20,
  color = "#fff",
  children,
}: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={1.9}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}

export function EducationIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M2 9l10-5 10 5-10 5z" />
      <path d="M6 11v5c0 1 2.5 2.5 6 2.5s6-1.5 6-2.5v-5" />
    </Icon>
  );
}

export function CommunityIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20c0-3 3-5 6-5s6 2 6 5" />
      <path d="M16 6a3 3 0 0 1 0 6" />
      <path d="M18 15c2 .5 3 2 3 5" />
    </Icon>
  );
}

export function BuildersIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M8 7l-5 5 5 5" />
      <path d="M16 7l5 5-5 5" />
      <path d="M13 4l-2 16" />
    </Icon>
  );
}

export function GrowthIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M3 17l6-6 4 4 7-7" />
      <path d="M17 8h4v4" />
    </Icon>
  );
}

export function MediaIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="9" y="3" width="6" height="11" rx="3" />
      <path d="M6 11a6 6 0 0 0 12 0" />
      <path d="M12 17v4" />
    </Icon>
  );
}

export function LocationPinIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 21s-7-6-7-11a7 7 0 0 1 14 0c0 5-7 11-7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </Icon>
  );
}

export function CalendarStarIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="3" y="4" width="18" height="17" rx="2" />
      <path d="M3 9h18M8 2v4M16 2v4" />
      <path d="M12 12l.9 1.9 2 .3-1.5 1.4.4 2-1.8-1-1.8 1 .4-2L9 14.2l2-.3z" />
    </Icon>
  );
}

export function DocumentChartIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M6 3h9l3 3v15H6z" />
      <path d="M9 13v4M12 11v6M15 14v3" />
    </Icon>
  );
}

export function DoorIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M14 3h5v18h-5" />
      <path d="M11 12H3" />
      <path d="M7 8l-4 4 4 4" />
    </Icon>
  );
}

export function GlobeIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
    </Icon>
  );
}

export function FunnelIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M3 5h18l-7 8v6l-4-2v-4z" />
    </Icon>
  );
}

export function SunIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
    </Icon>
  );
}

export function MoonIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5z" />
    </Icon>
  );
}

function FillIcon({
  size = 18,
  color = "currentColor",
  children,
}: IconProps & { children: React.ReactNode }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      {children}
    </svg>
  );
}

export function XIcon(props: IconProps) {
  return (
    <FillIcon {...props}>
      <path d="M18.244 2H21.5l-7.5 8.57L22.5 22h-6.9l-4.6-6.02L5.7 22H2.44l8.02-9.17L2 2h7.06l4.16 5.5L18.244 2zm-1.21 18h1.8L7.05 3.9H5.12L17.034 20z" />
    </FillIcon>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill={props.color ?? "#fff"} stroke="none" />
    </Icon>
  );
}

export function LinkedInIcon(props: IconProps) {
  return (
    <FillIcon {...props}>
      <path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0zM.5 8h4V24h-4zM8 8h3.8v2.2h.05c.53-1 1.83-2.2 3.77-2.2 4.03 0 4.78 2.65 4.78 6.1V24h-4v-6.9c0-1.65-.03-3.77-2.3-3.77-2.3 0-2.65 1.8-2.65 3.65V24H8z" />
    </FillIcon>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </Icon>
  );
}

export function TelegramIcon(props: IconProps) {
  return (
    <FillIcon {...props}>
      <path d="M21.94 4.6l-3.3 15.6c-.25 1.1-.9 1.37-1.83.85l-5.05-3.72-2.44 2.35c-.27.27-.5.5-1 .5l.36-5.13L17.3 6.9c.4-.36-.09-.56-.63-.2L6.42 13.2 1.44 11.64c-1.08-.34-1.1-1.08.23-1.6L20.54 3.1c.9-.34 1.68.2 1.4 1.5z" />
    </FillIcon>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <FillIcon {...props}>
      <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H7v3h3v7h3v-7h3l1-3h-4v-2c0-.55.45-1 1-1z" />
    </FillIcon>
  );
}

export function YouTubeIcon(props: IconProps) {
  return (
    <FillIcon {...props}>
      <path d="M23 12s0-3.2-.4-4.7a2.5 2.5 0 0 0-1.77-1.77C19.3 5.1 12 5.1 12 5.1s-7.3 0-8.83.43A2.5 2.5 0 0 0 1.4 7.3C1 8.8 1 12 1 12s0 3.2.4 4.7a2.5 2.5 0 0 0 1.77 1.77C4.7 18.9 12 18.9 12 18.9s7.3 0 8.83-.43a2.5 2.5 0 0 0 1.77-1.77C23 15.2 23 12 23 12zM9.75 15.02V8.98L15.5 12z" />
    </FillIcon>
  );
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <FillIcon {...props}>
      <path d="M12 2a10 10 0 0 0-8.6 15.05L2 22l5.1-1.33A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.08-1.12l-.29-.17-3.03.79.81-2.95-.19-.3A8 8 0 1 1 12 20zm4.5-5.9c-.24-.12-1.44-.71-1.66-.79s-.39-.12-.55.12-.63.79-.77.95-.28.18-.52.06a6.5 6.5 0 0 1-1.92-1.18 7.2 7.2 0 0 1-1.33-1.65c-.14-.24 0-.37.1-.49s.24-.28.36-.42a1.6 1.6 0 0 0 .24-.4.44.44 0 0 0 0-.42c-.06-.12-.55-1.32-.75-1.81s-.4-.41-.55-.42h-.47a.9.9 0 0 0-.65.3 2.75 2.75 0 0 0-.86 2.04 4.77 4.77 0 0 0 1 2.53 10.9 10.9 0 0 0 4.2 3.7c.59.26 1.05.41 1.4.52a3.4 3.4 0 0 0 1.55.1 2.53 2.53 0 0 0 1.66-1.17 2.06 2.06 0 0 0 .14-1.17c-.06-.1-.22-.16-.46-.28z" />
    </FillIcon>
  );
}
