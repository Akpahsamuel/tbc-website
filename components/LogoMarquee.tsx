"use client";

import Image from "next/image";
import Link from "next/link";
import { COMMUNITY_PARTNERS } from "@/data/communityPartners";

export default function LogoMarquee() {
  // Duplicate partners list to create a seamless infinite loop
  const marqueeItems = [...COMMUNITY_PARTNERS, ...COMMUNITY_PARTNERS];

  return (
    <div className="tbc-marquee-container" style={{ padding: "16px 0" }}>
      <div className="tbc-marquee-track">
        {marqueeItems.map((partner, index) => (
          <Link
            key={`${partner.name}-${index}`}
            href="/community"
            className="tbc-marquee-item"
            title={`${partner.name} - Click to view in Community`}
          >
            <Image
              src={partner.logo}
              alt={`${partner.name} logo`}
              width={160}
              height={55}
              style={{
                objectFit: "contain",
                maxHeight: 50,
                maxWidth: "100%",
                margin: "0 auto",
                transform: partner.logoScale ? `scale(${partner.logoScale})` : undefined,
                transformOrigin: "center center",
              }}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
