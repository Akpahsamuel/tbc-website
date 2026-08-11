import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { COMMUNITY_PARTNERS } from "@/data/communityPartners";
import { COMMUNITY_LEVELS } from "@/data/communityLevels";

export const metadata: Metadata = {
  title: "Community",
  description:
    "TBC Ghana is built as a structured ecosystem. As members grow, they move through five levels.",
  alternates: {
    canonical: "/community",
  },
  openGraph: {
    title: "Community · TBC Ghana",
    description:
      "TBC Ghana is built as a structured ecosystem. As members grow, they move through five levels.",
    url: "https://www.tbcafrica.org/community",
  },
};

const COMMUNITY_GALLERY = [
  {
    title: "Aya Builders Meetup",
    category: "Developer Community",
    image: "/images/group-images/aya-group.jpg",
  },
  {
    title: "Sui Network Ghana Builder Session",
    category: "Ecosystem Growth",
    image: "/images/group-images/sui-group.jpg",
  },
  {
    title: "BeTechConnected Youth Empowerment",
    category: "Tech Talent",
    image: "/images/group-images/betech-group.jpg",
  },
  {
    title: "Celo Web3 Developer Gathering",
    category: "Web3 Builders",
    image: "/images/group-images/celo-group.jpg",
  },
  {
    title: "ICP Hub Ghana Hackathon",
    category: "Hackathon & Bootcamps",
    image: "/images/group-images/icp-group.jpg",
  },
];

export default function CommunityPage() {
  return (
    <div style={{ width: "100%" }}>
      <section style={{ background: "#1B4D4A" }}>
        <div className="tbc-container tbc-hero-padding" style={{ animation: "tbcUp .6s both" }}>
          <div
            style={{
              font: "600 13px/1 'Inter'",
              letterSpacing: ".2em",
              textTransform: "uppercase",
              color: "#24D155",
              marginBottom: 22,
            }}
          >
            Community
          </div>
          <h1
            className="tbc-hero-h1"
            style={{
              color: "#fff",
              maxWidth: 900,
              marginBottom: 24,
            }}
          >
            The communities inside the Circle.
          </h1>
          <p style={{ font: "400 20px/1.6 'Inter'", color: "rgba(255,255,255,.76)", maxWidth: 660 }}>
            TBC Ghana is a circle of communities. Meet the ecosystem partners building blockchain,
            tech and Web3 across Ghana and Africa alongside us.
          </p>
        </div>
      </section>

      <section className="tbc-container" style={{ maxWidth: 1000, paddingTop: 64, paddingBottom: 64, display: "flex", flexDirection: "column", gap: 16 }}>
        {COMMUNITY_LEVELS.map((level) => (
          <div
            key={level.number}
            className={`community-step community-step-${level.number} ${level.dark ? "tbc-card-dark" : "tbc-card"}`}
            style={{
              background: level.dark ? "#1B4D4A" : "#fff",
              border: level.dark ? undefined : "1px solid rgba(20,33,31,0.08)",
              borderRadius: 16,
            }}
          >
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: "50%",
                background: level.circleBg,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                font: "800 24px/1 'Inter'",
                color: level.circleColor,
              }}
            >
              {level.number}
            </div>
            <div style={{ flex: 1 }}>
              <h2
                style={{
                  font: "800 24px/1.15 'Inter'",
                  letterSpacing: "-.02em",
                  color: level.dark ? "#fff" : "#14211f",
                  marginBottom: 6,
                }}
              >
                {level.title}
              </h2>
              <p
                style={{
                  font: "400 16px/1.5 'Inter'",
                  color: level.dark ? "rgba(255,255,255,.7)" : "#54615e",
                }}
              >
                {level.description}
              </p>
            </div>
          </div>
        ))}
      </section>

      <section className="tbc-container" style={{ maxWidth: 1000, paddingBottom: 80 }}>
        <div
          className="tbc-card-padding"
          style={{
            background: "#24D155",
            borderRadius: 18,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 24,
          }}
        >
          <div style={{ maxWidth: 520 }}>
            <h2 style={{ font: "800 32px/1.15 'Inter'", letterSpacing: "-.02em", color: "#14211f", marginBottom: 8 }}>
              Everyone starts as an Explorer.
            </h2>
            <p style={{ font: "400 17px/1.5 'Inter'", color: "#14211f" }}>
              Join the community and begin your journey through the Circle.
            </p>
          </div>
          <Link
            href="/getinvolved"
            style={{
              background: "#e1e6e3",
              color: "#14211f",
              font: "700 16px/1 'Inter'",
              padding: "18px 32px",
              borderRadius: 10,
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            Join as an Explorer →
          </Link>
        </div>
      </section>

      {/* COMMUNITY PARTNERS SECTION */}
      <section style={{ background: "#F5F6F4", borderTop: "1px solid rgba(20,33,31,.08)", padding: "80px 0" }}>
        <div className="tbc-container" style={{ maxWidth: 1160, margin: "0 auto" }}>
          <div
            style={{
              font: "600 13px/1 'Inter'",
              letterSpacing: ".18em",
              textTransform: "uppercase",
              color: "#1B4D4A",
              marginBottom: 16,
            }}
          >
            Ecosystem Partners
          </div>
          <h2 style={{ font: "800 36px/1.15 'Inter'", letterSpacing: "-.02em", color: "#14211F", marginBottom: 16 }}>
            Communities inside the Circle
          </h2>
          <p style={{ font: "400 18px/1.6 'Inter'", color: "#54615E", maxWidth: 700, marginBottom: 48 }}>
            Meet the ecosystem communities, labs, and organizations driving Web3 education, development, and adoption across Ghana and Africa alongside us.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              alignItems: "start",
              gap: 24,
            }}
          >
            {COMMUNITY_PARTNERS.map((partner) => (
              <div
                key={partner.name}
                className="tbc-card-clean"
                style={{
                  background: "#fff",
                  border: "1px solid rgba(20,33,31,0.08)",
                  borderRadius: 16,
                  padding: 24,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div
                    style={{
                      height: 56,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      marginBottom: 20,
                    }}
                  >
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      width={160}
                      height={50}
                      style={{
                        objectFit: "contain",
                        maxHeight: 50,
                        maxWidth: "100%",
                        transform: partner.logoScale ? `scale(${partner.logoScale})` : undefined,
                        transformOrigin: "center center",
                      }}
                    />
                  </div>
                  <h3
                    style={{
                      font: "700 20px/1.3 'Inter'",
                      color: "#14211F",
                      marginBottom: 0,
                    }}
                  >
                    {partner.name}
                  </h3>

                  <div className="tbc-partner-reveal">
                    <p
                      style={{
                        font: "400 14px/1.6 'Inter'",
                        color: "#54615E",
                        marginBottom: 16,
                      }}
                    >
                      {partner.description}
                    </p>

                    {partner.links.length > 0 && (
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: 8,
                          paddingTop: 14,
                          borderTop: "1px solid rgba(20,33,31,0.08)",
                        }}
                      >
                        {partner.links.map((link) => (
                          <a
                            key={link.title}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={link.title}
                            className="tbc-partner-badge"
                          >
                            <link.Icon size={14} />
                            <span>{link.title}</span>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNITY IN ACTION GALLERY */}
      <section style={{ background: "#ffffff", borderTop: "1px solid rgba(20,33,31,.08)", padding: "80px 0" }}>
        <div className="tbc-container" style={{ maxWidth: 1160, margin: "0 auto" }}>
          <div
            style={{
              font: "600 13px/1 'Inter'",
              letterSpacing: ".18em",
              textTransform: "uppercase",
              color: "#1B4D4A",
              marginBottom: 16,
            }}
          >
            Community in Action
          </div>
          <h2 style={{ font: "800 36px/1.15 'Inter'", letterSpacing: "-.02em", color: "#14211F", marginBottom: 16 }}>
            Moments from the Ecosystem
          </h2>
          <p style={{ font: "400 18px/1.6 'Inter'", color: "#54615E", maxWidth: 700, marginBottom: 48 }}>
            Bringing together builders, founders, and innovators across Web3 & tech meetups, hackathons, and developer bootcamps in Ghana.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
              gap: 24,
            }}
          >
            {COMMUNITY_GALLERY.map((item) => (
              <div
                key={item.title}
                className="tbc-gallery-item"
                style={{
                  height: 280,
                  position: "relative",
                  borderRadius: 16,
                  overflow: "hidden",
                }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(8, 16, 14, 0.85) 0%, transparent 60%)",
                    display: "flex",
                    alignItems: "flex-end",
                    padding: 20,
                  }}
                >
                  <h3
                    style={{
                      font: "700 18px/1.3 'Inter'",
                      color: "#FFFFFF",
                      margin: 0,
                      textShadow: "0 2px 6px rgba(0,0,0,0.6)",
                    }}
                  >
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <section style={{ background: "#fff", borderTop: "1px solid rgba(20,33,31,.08)" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", padding: "96px 40px" }}>
          <div
            style={{
              font: "600 13px/1 'Inter'",
              letterSpacing: ".18em",
              textTransform: "uppercase",
              color: "#24D155",
              marginBottom: 16,
            }}
          >
            How members grow
          </div>
          <h2 style={{ font: "800 40px/1.1 'Inter'", letterSpacing: "-.02em", color: "#14211F", marginBottom: 48 }}>
            Five levels in the Circle.
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {COMMUNITY_LEVELS.map((level) => (
              <div
                key={level.number}
                style={{
                  background: "#F5F6F4",
                  border: "1px solid rgba(20,33,31,.06)",
                  borderRadius: 14,
                  padding: "24px 28px",
                  display: "flex",
                  alignItems: "center",
                  gap: 26,
                }}
              >
                <div
                  style={{
                    flex: "none",
                    width: 52,
                    height: 52,
                    borderRadius: "50%",
                    background: "rgba(36,209,85,.14)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    font: "800 20px/1 'Inter'",
                    color: "#24D155",
                  }}
                >
                  {level.number}
                </div>
                <div style={{ flex: 1 }}>
                  <h3
                    style={{
                      font: "800 20px/1.2 'Inter'",
                      letterSpacing: "-.01em",
                      color: "#14211F",
                      marginBottom: 4,
                    }}
                  >
                    {level.title}
                  </h3>
                  <p style={{ font: "400 15px/1.5 'Inter'", color: "#54615e" }}>{level.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
}
