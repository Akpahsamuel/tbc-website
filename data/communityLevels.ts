export type CommunityLevel = {
  number: number;
  title: string;
  description: string;
  circleBg: string;
  circleColor: string;
  dark?: boolean;
};

export const COMMUNITY_LEVELS: CommunityLevel[] = [
  {
    number: 1,
    title: "Explorers",
    description: "Beginners just starting to learn about blockchain.",
    circleBg: "rgba(36,209,85,.12)",
    circleColor: "#24D155",
  },
  {
    number: 2,
    title: "Contributors",
    description: "Members participating consistently in the community.",
    circleBg: "rgba(36,209,85,.16)",
    circleColor: "#24D155",
  },
  {
    number: 3,
    title: "Ambassadors",
    description: "Campus or city representatives leading local engagement.",
    circleBg: "rgba(27,77,74,.12)",
    circleColor: "#1B4D4A",
  },
  {
    number: 4,
    title: "Builders",
    description: "Developers, founders and creators actively shipping.",
    circleBg: "rgba(27,77,74,.16)",
    circleColor: "#1B4D4A",
  },
  {
    number: 5,
    title: "Ecosystem Leads",
    description: "Community organizers and leaders driving TBC Ghana forward.",
    circleBg: "rgba(36,209,85,.2)",
    circleColor: "#24D155",
    dark: true,
  },
];
