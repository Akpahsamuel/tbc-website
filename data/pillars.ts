import type { ComponentType } from "react";
import {
  EducationIcon,
  CommunityIcon,
  BuildersIcon,
  GrowthIcon,
  MediaIcon,
  type IconProps,
} from "@/components/icons";

export type Pillar = {
  title: string;
  description: string;
  Icon: ComponentType<IconProps>;
  color: string;
};

export const PILLARS: Pillar[] = [
  {
    title: "Education",
    description: "Blockchain literacy for everyone, from first-timers to founders.",
    Icon: EducationIcon,
    color: "#24D155",
  },
  {
    title: "Community",
    description: "A structured home for Ghana's Web3 community to grow together.",
    Icon: CommunityIcon,
    color: "#1B4D4A",
  },
  {
    title: "Builders & Innovation",
    description: "Hackathons, mentorship and support for developers and founders.",
    Icon: BuildersIcon,
    color: "#D03433",
  },
  {
    title: "Ecosystem Growth",
    description: "Partnerships that connect Ghana to the global Web3 industry.",
    Icon: GrowthIcon,
    color: "#24D155",
  },
  {
    title: "Media & Narrative",
    description: "The stories, spaces and shows driving the conversation forward.",
    Icon: MediaIcon,
    color: "#1B4D4A",
  },
];
