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
};

export const COMMUNITY_PARTNERS: CommunityPartner[] = [
  {
    name: "BeTechConnected",
    logo: "/images/logos/BeTechConnected.png",
    logoBg: "#fff",
    description:
      "A pan-African tech-focused social enterprise empowering young people with skills and knowledge for the future of work, and connecting them to global tech opportunities.",
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
    logo: "/images/logos/KayabLabs.png",
    logoBg: "#fff",
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
    logo: "/images/logos/The Digital College .PNG",
    logoBg: "#fff",
    description:
      "The Digital College equips African talents with practical, industry-relevant digital skills — helping learners build confidence, portfolios, and career opportunities through hands-on education.",
    links: [
      { title: "WhatsApp Community", href: "https://chat.whatsapp.com/Gk30wA3yiiDAsbIYW8wGCe", Icon: WhatsAppIcon },
      { title: "LinkedIn", href: "https://www.linkedin.com/company/thedigitalcollege/", Icon: LinkedInIcon },
      { title: "Instagram", href: "https://www.instagram.com/the.digitalcollege", Icon: InstagramIcon },
      { title: "Email", href: "mailto:mailiana@missmailiana.com", Icon: MailIcon },
    ],
  },
  {
    name: "Crypto Investors Network Africa",
    logo: "/images/logos/Crypto Investors Network Africa.PNG",
    logoBg: "#fff",
    description:
      "A robust community of blockchain and crypto investors across Africa, bringing crypto adoption and wealth to the masses.",
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
    logo: "/images/logos/decrypting crypto.jpeg",
    logoBg: "#14211F",
    description: "Crypto education, one person at a time.",
    links: [
      { title: "WhatsApp Community", href: "https://chat.whatsapp.com/LGH0enDzGHv7diPzS4AZfp", Icon: WhatsAppIcon },
      { title: "Telegram", href: "https://t.me/decrypting_crypto", Icon: TelegramIcon },
      { title: "WhatsApp Channel", href: "https://whatsapp.com/channel/0029Vb3RGZVJkK7DbcltEY0G", Icon: WhatsAppIcon },
    ],
  },
  {
    name: "ICP HUB Ghana",
    logo: "/images/logos/ICP HUB Ghana.png",
    logoBg: "#fff",
    description:
      "ICP HUB Ghana promotes Web3 adoption in Ghana by educating developers, supporting startups, and growing the Internet Computer (ICP) ecosystem.",
    links: [
      { title: "X", href: "https://x.com/icphub_GH", Icon: XIcon },
      { title: "LinkedIn", href: "https://www.linkedin.com/company/icp-hub-ghana/", Icon: LinkedInIcon },
      { title: "Telegram", href: "https://t.me/ICP_Ghana", Icon: TelegramIcon },
    ],
  },
  {
    name: "Crypto Focus Community",
    logo: "/images/logos/Crypto Focus.png",
    logoBg: "#fff",
    description:
      "A global crypto community connecting enthusiasts across platforms through education, discussion and shared market focus.",
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
    logo: "/images/logos/Sui Network Ghana.png",
    logoBg: "#fff",
    description:
      "A community-led initiative growing the Sui ecosystem in Ghana — empowering developers, students and Web3 enthusiasts through education, innovation and ecosystem collaboration.",
    links: [
      { title: "Website", href: "https://www.suicommunitygh.website/", Icon: GlobeIcon },
      { title: "X", href: "https://x.com/suinetworkghana", Icon: XIcon },
      { title: "LinkedIn", href: "https://www.linkedin.com/company/suinetworkghana/", Icon: LinkedInIcon },
      { title: "Email", href: "mailto:suinetworkghana@gmail.com", Icon: MailIcon },
    ],
  },
  {
    name: "Kweku Tech",
    logo: "/images/logos/KwekuTech.png",
    logoBg: "#fff",
    description:
      "A tech media company that documents and amplifies Africa’s tech ecosystem through professional media and event coverage.",
    links: [
      { title: "Website", href: "https://www.kweku.tech/", Icon: GlobeIcon },
      { title: "X", href: "https://x.com/kwekutech", Icon: XIcon },
      { title: "Instagram", href: "https://www.instagram.com/kwekutech", Icon: InstagramIcon },
      { title: "LinkedIn", href: "https://www.linkedin.com/company/kwekutech", Icon: LinkedInIcon },
    ],
  },
];
