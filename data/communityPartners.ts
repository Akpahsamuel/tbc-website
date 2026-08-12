import type { ComponentType } from "react";
import {
  GlobeIcon,
  XIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  TelegramIcon,
  FacebookIcon,
  YouTubeIcon,
  WhatsAppIcon,
  type IconProps,
} from "@/components/icons";

export type CommunityLink = {
  title: string;
  href: string;
  Icon: ComponentType<IconProps>;
};

export type CommunityPartner = {
  name: string;
  logo: string;
  logoBg: string;
  description: string;
  links: CommunityLink[];
  logoScale?: number;
};

export const COMMUNITY_PARTNERS: CommunityPartner[] = [
  {
    name: "BeTechConnected",
    logo: "/images/com-Logos/BeTechConnected.png",
    logoBg: "#fff",
    logoScale: 1.0,
    description:
      "BeTechConnected is a pan-African tech-focused social enterprise empowering young people with skills and knowledge for the future of work as well as connecting them to global tech opportunities.",
    links: [
      { title: "Website", href: "https://www.betechconnected.com/", Icon: GlobeIcon },
      { title: "X", href: "https://x.com/betechconnected", Icon: XIcon },
      { title: "Instagram", href: "https://www.instagram.com/betechconnected", Icon: InstagramIcon },
      { title: "LinkedIn", href: "https://www.linkedin.com/company/betechconnected", Icon: LinkedInIcon },
      { title: "Email", href: "mailto:betechconnected@gmail.com", Icon: MailIcon },
    ],
  },
  {
    name: "KayabaLabs",
    logo: "/images/com-Logos/KayabLabs.png",
    logoBg: "#fff",
    logoScale: 1.0,
    description:
      "­ A­ blockchain­ research­ and­ development­ lab,­ training­ developers­ and­ building­ the­ decentralized­ future­globally. Our team is composed of diverse contributors who actively collaborate to promote Blockchain adoption across West Africa and the broader Sub-Saharan region.",
    links: [
      { title: "Website", href: "https://kayabalabs.com", Icon: GlobeIcon },
      { title: "X", href: "https://x.com/kayabalabshq", Icon: XIcon },
      { title: "Telegram", href: "https://t.me/+-zjPs72HWIA0YWZk", Icon: TelegramIcon },
      { title: "WhatsApp Community", href: "https://chat.whatsapp.com/FY62Ufrh4y1Ejyz044Aqow?s=cl&p=i&mlu=0", Icon: WhatsAppIcon },
      { title: "LinkedIn", href: "https://www.linkedin.com/company/kayaba-labs", Icon: LinkedInIcon },
      { title: "Email", href: "mailto:admin@kayabalabs.com", Icon: MailIcon },
    ],
  },
  {
    name: "The Digital College",
    logo: "/images/com-Logos/the-digital-college.png",
    logoBg: "#fff",
    logoScale: 2.0,
    description:
      "The Digital College equips African talents with practical, industry-relevant digital skills. We help learners build confidence, portfolios, and career opportunities through hands-on education.",
    links: [
      { title: "WhatsApp Community", href: "https://chat.whatsapp.com/Gk30wA3yiiDAsbIYW8wGCe", Icon: WhatsAppIcon },
      { title: "LinkedIn", href: "https://www.linkedin.com/company/thedigitalcollege/", Icon: LinkedInIcon },
      { title: "Instagram", href: "https://www.instagram.com/the.digitalcollege", Icon: InstagramIcon },
      { title: "Email", href: "mailto:mailiana@missmailiana.com", Icon: MailIcon },
    ],
  },
  {
    name: "Crypto Investors Network Africa",
    logo: "/images/com-Logos/crypto-investors-network-africa.png",
    logoBg: "#fff",
    logoScale: 2.0,
    description:
      "A robust community of Blockchain and Crypto Investors across Africa, bringing crypto adoption & wealth to the masses.",
    links: [
      { title: "Community", href: "https://tr.ee/gMHYKtQh7i", Icon: GlobeIcon },
      { title: "Telegram", href: "https://t.me/CINA_Official1", Icon: TelegramIcon },
      { title: "X", href: "https://x.com/cina_official", Icon: XIcon },
      { title: "LinkedIn", href: "https://www.linkedin.com/company/crypto-investors-network-africa/", Icon: LinkedInIcon },
      { title: "Facebook", href: "https://www.facebook.com/share/1ER5mhHoiL/", Icon: FacebookIcon },
      { title: "Email", href: "mailto:cryptoinvestorsnetworkafrica@gmail.com", Icon: MailIcon },
    ],
  },
  {
    name: "Decrypting Crypto",
    logo: "/images/com-Logos/decrypting-crypto.jpeg",
    logoBg: "#fff",
    logoScale: 2.0,
    description: "Crypto Education One Person At a Time",
    links: [
      { title: "WhatsApp Community", href: "https://chat.whatsapp.com/LGH0enDzGHv7diPzS4AZfp", Icon: WhatsAppIcon },
      { title: "Telegram", href: "https://t.me/decrypting_crypto", Icon: TelegramIcon },
      { title: "WhatsApp Channel", href: "https://whatsapp.com/channel/0029Vb3RGZVJkK7DbcltEY0G", Icon: WhatsAppIcon },
    ],
  },
  {
    name: "ICP HUB Ghana",
    logo: "/images/com-Logos/icp-hub-ghana.png",
    logoBg: "#fff",
    logoScale: 1.0,
    description:
      "ICP HUB Ghana is a community that promotes Web3 adoption in Ghana by educating developers, supporting startups, and growing the Internet Computer (ICP) ecosystem.",
    links: [
      { title: "X", href: "https://x.com/icphub_GH", Icon: XIcon },
      { title: "LinkedIn", href: "https://www.linkedin.com/company/icp-hub-ghana/", Icon: LinkedInIcon },
      { title: "Telegram", href: "https://t.me/ICP_Ghana", Icon: TelegramIcon },
    ],
  },
  {
    name: "Crypto Focus Community",
    logo: "/images/com-Logos/crypto-focus.png",
    logoBg: "#fff",
    logoScale: 2.0,
    description:
      "Crypto Focus is Ghana’s leading cryptocurrency and blockchain education community, committed to making digital asset knowledge accessible through education, awareness, mentorship, research, and community engagement while fostering responsible adoption across Africa and beyond.",
    links: [
      { title: "WhatsApp Community", href: "https://chat.whatsapp.com/L3tCw0uGCP79q1L49yUeef", Icon: WhatsAppIcon },
      { title: "Telegram", href: "https://t.me/cryptofocusglobal", Icon: TelegramIcon },
      { title: "X", href: "https://x.com/h1zofficial", Icon: XIcon },
      { title: "Instagram", href: "https://www.instagram.com/h1zofficial", Icon: InstagramIcon },
      { title: "Facebook", href: "https://www.facebook.com/share/1D7bVRDFbM/", Icon: FacebookIcon },
      { title: "LinkedIn", href: "https://www.linkedin.com/in/henry-wiafe-ampadu-019b3b235", Icon: LinkedInIcon },
      { title: "YouTube", href: "https://youtube.com/@cryptofocus360", Icon: YouTubeIcon },
    ],
  },
  {
    name: "Sui Network Ghana",
    logo: "/images/com-Logos/sui-network-ghana.png",
    logoBg: "#fff",
    logoScale: 2.0,
    description:
      "Sui Ghana is a community-led initiative dedicated to growing the Sui ecosystem in Ghana by empowering developers, students, and Web3 enthusiasts through education, innovation, and ecosystem collaboration.",
    links: [
      { title: "Website", href: "https://www.suicommunitygh.website/", Icon: GlobeIcon },
      { title: "X", href: "https://x.com/suinetworkghana", Icon: XIcon },
      { title: "LinkedIn", href: "https://www.linkedin.com/company/suinetworkghana/", Icon: LinkedInIcon },
      { title: "Email", href: "mailto:suinetworkghana@gmail.com", Icon: MailIcon },
    ],
  },
  {
    name: "Kweku Tech",
    logo: "/images/com-Logos/KwekuTech-logo.png",
    logoBg: "#fff",
    logoScale: 1.0,
    description:
      "Kweku Tech is a tech media company that documents and amplifies Africa tech ecosystem through professional media and event coverage.",
    links: [
      { title: "Website", href: "https://www.kweku.tech/", Icon: GlobeIcon },
      { title: "X", href: "https://x.com/kwekutech", Icon: XIcon },
      { title: "Instagram", href: "https://www.instagram.com/kwekutech", Icon: InstagramIcon },
      { title: "LinkedIn", href: "https://www.linkedin.com/company/kwekutech", Icon: LinkedInIcon },
    ],
  },
  {
    name: "Chosen Fintech Solutions",
    logo: "/images/com-Logos/chosen-fintech.jpg",
    logoBg: "#fff",
    logoScale: 2.0,
    description:
      "We are committed to educating, onboarding and empowering individuals and organisations to navigate digital technology for effective socio-economic systems.",
    links: [
      { title: "Website", href: "https://www.chosenfintech.org", Icon: GlobeIcon },
      { title: "X", href: "https://x.com/chosenfintech", Icon: XIcon },
      { title: "Telegram", href: "https://t.me/chosenfintech", Icon: TelegramIcon },
      { title: "LinkedIn", href: "https://www.linkedin.com/company/chosenfintech/", Icon: LinkedInIcon },
    ],
  },
  {
    name: "Web3Agenda",
    logo: "/images/com-Logos/web3-agenda.jpeg",
    logoBg: "#fff",
    logoScale: 2.0,
    description:
      "Amplifying Web3 innovation, events, and education to drive decentralized adoption across Africa.",
    links: [
      { title: "Website", href: "https://web3agenda.com", Icon: GlobeIcon },
      { title: "WhatsApp Community", href: "https://chat.whatsapp.com/IMCpwdvTtMwI2lbzPjHvPd", Icon: WhatsAppIcon },
      { title: "X", href: "https://x.com/web3agenda_", Icon: XIcon },
      { title: "Instagram", href: "https://www.instagram.com/web3agenda/", Icon: InstagramIcon },
      { title: "Email", href: "mailto:info@web3agenda.com", Icon: MailIcon },
    ],
  },
  {
    name: "HackerBoost Developer LBG",
    logo: "/images/com-Logos/hackerboost-logos/singlelinelogos/hackerboost-single-line-1.png",
    logoBg: "#fff",
    logoScale: 1.0,
    description:
      "HackerBoost is a nonprofit technology community dedicated to equipping young Africans with practical skills in software engineering, artificial intelligence, blockchain, cybersecurity, and entrepreneurship. Through bootcamps, workshops, hackathons, internships, mentorship, and startup incubation, HackerBoost bridges the gap between education and industry while fostering innovation and creating pathways to employment.",
    links: [
      { title: "Website", href: "https://www.hackerboost.org", Icon: GlobeIcon },
      { title: "WhatsApp Community", href: "https://chat.whatsapp.com/EGuCJ0Tmyf39l8NGyvFE72", Icon: WhatsAppIcon },
      { title: "X", href: "https://x.com/hackerboostX", Icon: XIcon },
      { title: "LinkedIn", href: "https://www.linkedin.com/company/hackerboost", Icon: LinkedInIcon },
      { title: "Facebook", href: "https://www.facebook.com/hackerbooster", Icon: FacebookIcon },
      { title: "Email", href: "mailto:hackerboost24@gmail.com", Icon: MailIcon },
    ],
  },
];
