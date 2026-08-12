export type UpcomingEvent = {
  dateLabel: string;
  dateSubLabel: string;
  dateColor: string;
  title: string;
  subtitle: string;
  tag: string;
  tagColor: "default" | "flagship";
};

export const UPCOMING_EVENTS: UpcomingEvent[] = [
  {
    dateLabel: "FRI",
    dateSubLabel: "Weekly",
    dateColor: "#D03433",
    title: "Weekly X Space",
    subtitle: "Every Friday · 19:00 GMT · Online",
    tag: "Media",
    tagColor: "default",
  },
  {
    dateLabel: "TBC",
    dateSubLabel: "Monthly",
    dateColor: "#1B4D4A",
    title: "Monthly Accra Meetup",
    subtitle: "Next date to be confirmed · Accra",
    tag: "Community",
    tagColor: "default",
  },
  {
    dateLabel: "TBC",
    dateSubLabel: "Rotating",
    dateColor: "#1B4D4A",
    title: "City Meetups",
    subtitle: "Kumasi, Cape Coast, Tamale, Takoradi · Rotating",
    tag: "Community",
    tagColor: "default",
  },
  {
    dateLabel: "NOV",
    dateSubLabel: "2026",
    dateColor: "#D03433",
    title: "Flagship Blockchain & Crypto Conference",
    subtitle: "September / October / November 2026 · Accra",
    tag: "Flagship",
    tagColor: "flagship",
  },
];
