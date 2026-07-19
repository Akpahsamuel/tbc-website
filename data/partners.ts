import type { ComponentType } from "react";
import { DoorIcon, GlobeIcon, FunnelIcon, type IconProps } from "@/components/icons";

export type PartnerValueProp = {
  title: string;
  description: string;
  Icon: ComponentType<IconProps>;
  color: string;
};

export const PARTNER_VALUE_PROPS: PartnerValueProp[] = [
  {
    title: "Market Entry",
    description:
      "A trusted local partner to help protocols enter and grow in Ghana and Africa.",
    Icon: DoorIcon,
    color: "#24D155",
  },
  {
    title: "Reach & Community",
    description:
      "Access to 5,000+ members across 10+ cities, plus events, media and campus networks.",
    Icon: GlobeIcon,
    color: "#1B4D4A",
  },
  {
    title: "Talent Pipeline",
    description:
      "Connect with developers, founders and builders shipping across the ecosystem.",
    Icon: FunnelIcon,
    color: "#D03433",
  },
];
