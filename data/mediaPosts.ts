export type MediaPost = {
  tag: string;
  date: string;
  title: string;
  excerpt: string;
};

export const MEDIA_POSTS: MediaPost[] = [
  {
    tag: "Podcast",
    date: "Coming soon",
    title: "Founder interviews: building in Ghana",
    excerpt: "Conversations with the founders shaping Ghana’s Web3 landscape.",
  },
  {
    tag: "X Space",
    date: "Weekly",
    title: "Friday X Space recordings",
    excerpt:
      "Catch up on the weekly conversation — education, stories and market insights.",
  },
  {
    tag: "Insight",
    date: "Coming soon",
    title: "Why Ghana matters for African Web3",
    excerpt: "A look at the market conditions making Ghana a strategic entry point.",
  },
  {
    tag: "YouTube",
    date: "Coming soon",
    title: "The TBC Ghana show",
    excerpt: "Long-form video on blockchain education and African Web3 stories.",
  },
  {
    tag: "Report",
    date: "Coming soon",
    title: "Developer ecosystem trends",
    excerpt: "Where builders are concentrating and what they’re shipping.",
  },
  {
    tag: "Story",
    date: "Coming soon",
    title: "From meetup to movement",
    excerpt: "How grassroots gatherings grew into a 5,000-strong community.",
  },
];
