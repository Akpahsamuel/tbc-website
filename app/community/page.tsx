import type { Metadata } from "next";
import Link from "next/link";
import { COMMUNITY_LEVELS } from "@/data/communityLevels";

export const metadata: Metadata = {
  title: "Community",
  description:
    "TBC Ghana is built as a structured ecosystem. As members grow, they move through five levels.",
};

export default function CommunityPage() {
  return (
    <div style={{ width: "100%", color: "#14211F" }}>
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
              maxWidth: 820,
              marginBottom: 24,
            }}
          >
            A structured ecosystem, not just an audience.
          </h1>
          <p style={{ font: "400 20px/1.6 'Inter'", color: "rgba(255,255,255,.76)", maxWidth: 640 }}>
            TBC Ghana is built as a structured ecosystem. As members grow, they move through
            five levels.
          </p>
        </div>
      </section>

      <section style={{ maxWidth: 1000, margin: "0 auto", padding: "88px 40px 64px", display: "flex", flexDirection: "column", gap: 16 }}>
        {COMMUNITY_LEVELS.map((level) => (
          <div
            key={level.number}
            className={`community-step ${level.dark ? "tbc-card-dark" : "tbc-card"}`}
            style={{
              background: level.dark ? "#14211F" : "#fff",
              border: level.dark ? undefined : "1px solid rgba(20,33,31,.08)",
              borderRadius: 16,
              padding: "32px 36px",
              display: "flex",
              alignItems: "center",
              gap: 32,
              marginLeft: (level.number - 1) * 40,
            }}
          >
            <div
              style={{
                flex: "none",
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
                  color: level.dark ? "#fff" : "#14211F",
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

      <section style={{ maxWidth: 1000, margin: "0 auto", padding: "0 40px 100px" }}>
        <div
          style={{
            background: "#24D155",
            borderRadius: 18,
            padding: 48,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 24,
          }}
        >
          <div style={{ maxWidth: 520 }}>
            <h2 style={{ font: "800 32px/1.15 'Inter'", letterSpacing: "-.02em", color: "#14211F", marginBottom: 8 }}>
              Everyone starts as an Explorer.
            </h2>
            <p style={{ font: "400 17px/1.5 'Inter'", color: "rgba(20,33,31,.72)" }}>
              Join the community and begin your journey through the Circle.
            </p>
          </div>
          <Link
            href="/getinvolved"
            style={{
              background: "#14211F",
              color: "#fff",
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
    </div>
  );
}
