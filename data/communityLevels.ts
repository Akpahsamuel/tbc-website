export type CommunityLevel = {
  number: number;
  title: string;
  description: string;
};

export const COMMUNITY_LEVELS: CommunityLevel[] = [
  {
    number: 1,
    title: "Explorers",
    description: "Beginners just starting to learn about blockchain.",
  },
  {
    number: 2,
    title: "Contributors",
    description: "Members participating consistently in the community.",
  },
  {
    number: 3,
    title: "Ambassadors",
    description: "Campus or city representatives leading local engagement.",
  },
  {
    number: 4,
    title: "Builders",
    description: "Developers, founders and creators actively shipping.",
  },
  {
    number: 5,
    title: "Ecosystem Leads",
    description: "Community organizers and leaders driving TBC Ghana forward.",
  },
];
