export type AboutPillar = {
  number: string;
  title: string;
  description: string;
  bullets: string[];
  dark?: boolean;
};

export const ABOUT_PILLARS: AboutPillar[] = [
  {
    number: "01",
    title: "Education",
    description:
      "Blockchain and Web3 education for beginners, students, developers and professionals.",
    bullets: ["Workshops and bootcamps", "University tours", "Mentorship programs"],
  },
  {
    number: "02",
    title: "Community",
    description:
      "Recurring engagement systems and local ecosystem support that keep members active.",
    bullets: [
      "City meetups",
      "Five-level community structure",
      "Online spaces and chats",
    ],
  },
  {
    number: "03",
    title: "Builders & Innovation",
    description:
      "Support for developers, founders and startups through hands-on programs.",
    bullets: ["Hackathons", "Ecosystem bootcamps", "Founder and developer pipeline"],
  },
  {
    number: "04",
    title: "Ecosystem Growth",
    description:
      "Partnerships and collaborations that expand TBC Ghana's reach and impact.",
    bullets: [
      "Ecosystem partnerships",
      "Market entry support for protocols",
      "Cross-community collaboration",
    ],
  },
  {
    number: "05",
    title: "Media & Narrative",
    description: "Original content that drives the Web3 conversation in Ghana and beyond.",
    bullets: ["Weekly X Spaces", "Podcast and YouTube show", "Ecosystem reports and research"],
    dark: true,
  },
];
