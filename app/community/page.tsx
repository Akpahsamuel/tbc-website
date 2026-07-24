import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { COMMUNITY_PARTNERS } from "@/data/communityPartners";
import { COMMUNITY_LEVELS } from "@/data/communityLevels";

export const metadata: Metadata = {
  title: "Community",
  description:
    "TBC Ghana is a circle of communities. Meet the ecosystem partners building blockchain, tech and Web3 across Ghana and Africa alongside us.",
};

export default function CommunityPage() {
  return (
    <div style={{ width: "100%", color: "var(--tbc-text)" }}>
      <section style={{ background: "#1B4D4A", padding: "96px 40px" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", animation: "tbcUp .6s both" }}>
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
            style={{
              font: "800 62px/1.05 'Inter'",
              letterSpacing: "-.03em",
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

      <section style={{ maxWidth: 1160, margin: "0 auto", padding: "80px 40px 100px" }}>
        <div className="tbc-grid-3">
          {COMMUNITY_PARTNERS.map((partner) => (
            <div
              key={partner.name}
              style={{
                background: "var(--tbc-surface)",
                border: "1px solid var(--tbc-border)",
                borderRadius: 18,
                padding: 32,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 22 }}>
                <div
                  style={{
                    flex: "none",
                    width: 77,
                    height: 77,
                    borderRadius: 16,
                    background: partner.logoBg,
                    border: "1px solid var(--tbc-border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                    padding: 9,
                  }}
                >
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    width={59}
                    height={59}
                    style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
                  />
                </div>
                <h2 style={{ font: "800 22px/1.15 'Inter'", letterSpacing: "-.02em", color: "var(--tbc-text)" }}>
                  {partner.name}
                </h2>
              </div>
              <p style={{ font: "400 15.5px/1.6 'Inter'", color: "var(--tbc-text-muted)", flex: 1, marginBottom: 24 }}>
                {partner.description}
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  paddingTop: 20,
                  borderTop: "1px solid var(--tbc-border)",
                }}
              >
                {partner.links.map((link) => (
                  <a
                    key={link.title}
                    href={link.href}
                    title={link.title}
                    className="tbc-social"
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: 9,
                      border: "1px solid var(--tbc-border-strong)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#1B4D4A",
                    }}
                  >
                    <link.Icon size={18} color="currentColor" />
                  </a>
                ))}
              </div>
            </div>
          ))}

          {/* <div
            style={{
              background: "#14211F",
              borderRadius: 18,
              padding: 32,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: -60,
                right: -50,
                width: 200,
                height: 200,
                borderRadius: "50%",
                border: "1px solid rgba(36,209,85,.18)",
              }}
            /> */}
            {/* <div style={{ position: "relative" }}>
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: "rgba(36,209,85,.16)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 22,
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#24D155"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </div>
              <h2 style={{ font: "800 22px/1.2 'Inter'", letterSpacing: "-.02em", color: "#fff", marginBottom: 10 }}>
                List your community
              </h2>
              <p style={{ font: "400 15.5px/1.6 'Inter'", color: "rgba(255,255,255,.7)", marginBottom: 22 }}>
                Are you building a tech or Web3 community in Ghana or Africa? Join the Circle and
                get featured here.
              </p>
              <Link href="/getinvolved" style={{ font: "700 15px/1 'Inter'", color: "#24D155" }}>
                Join the Circle →
              </Link>
            </div> */}
          {/* </div> */}
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
