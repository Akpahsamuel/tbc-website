import type { Metadata } from "next";
import { ABOUT_PILLARS } from "@/data/aboutPillars";
import { MILESTONES } from "@/data/milestones";

export const metadata: Metadata = {
  title: "About",
  description:
    "TBC Ghana was founded to become the leading Web3 ecosystem infrastructure in Ghana, and eventually across Africa.",
};

export default function AboutPage() {
  return (
    <div style={{ width: "100%", color: "var(--tbc-text)" }}>
      {/* PAGE HERO */}
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
            About TBC Ghana
          </div>
          <h1
            style={{
              font: "800 62px/1.05 'Inter'",
              letterSpacing: "-.03em",
              color: "#fff",
              maxWidth: 900,
            }}
          >
            One Ecosystem. One Circle. One Mission.
          </h1>
        </div>
      </section>

      {/* STORY */}
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "88px 40px 40px" }}>
        <p style={{ font: "400 22px/1.65 'Inter'", color: "var(--tbc-text-secondary)", marginBottom: 28 }}>
          TBC Ghana was founded to solve a simple but persistent problem: Ghana&rsquo;s
          blockchain and Web3 community has energy, talent and momentum, but no single, trusted
          institution to sustain it. Communities go quiet after events. Builders lack a
          pipeline. International protocols don&rsquo;t know who to call when they want to enter
          the market.
        </p>
        <p style={{ font: "400 22px/1.65 'Inter'", color: "var(--tbc-text-secondary)" }}>
          The Builders Circle Ghana changes that. Built on years of grassroots work — meetups,
          university tours, speaking engagements and online community-building — TBC Ghana is
          now formalizing into a structured organization with one goal: to become the leading
          Web3 ecosystem infrastructure in Ghana, and eventually across Africa.
        </p>
      </section>

      {/* VISION / MISSION */}
      <section
        className="tbc-grid-2"
        style={{ maxWidth: 1160, margin: "0 auto", padding: "64px 40px" }}
      >
        <div
          className="tbc-card"
          style={{ background: "var(--tbc-surface)", border: "1px solid var(--tbc-border)", borderRadius: 16, padding: 44 }}
        >
          <div
            style={{
              font: "600 12px/1 'Inter'",
              letterSpacing: ".16em",
              textTransform: "uppercase",
              color: "#24D155",
              marginBottom: 18,
            }}
          >
            Vision
          </div>
          <p style={{ font: "500 21px/1.55 'Inter'", color: "var(--tbc-text)" }}>
            To build the leading Web3 ecosystem infrastructure in Ghana that drives blockchain
            education, community development, ecosystem collaboration, innovation, and market
            growth across Africa.
          </p>
        </div>
        <div className="tbc-card-dark" style={{ background: "#14211F", borderRadius: 16, padding: 44 }}>
          <div
            style={{
              font: "600 12px/1 'Inter'",
              letterSpacing: ".16em",
              textTransform: "uppercase",
              color: "#24D155",
              marginBottom: 18,
            }}
          >
            Mission
          </div>
          <p style={{ font: "500 21px/1.55 'Inter'", color: "#fff" }}>
            Bring together Ghana&rsquo;s Web3 and blockchain community into one structured
            ecosystem — educating newcomers, developing builders, connecting local talent to
            global opportunity, and giving protocols a trusted partner in the African market.
          </p>
        </div>
      </section>

      {/* WHAT WE DO / PILLARS */}
      <section style={{ background: "var(--tbc-surface)", borderTop: "1px solid var(--tbc-border)", borderBottom: "1px solid var(--tbc-border)" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "96px 40px" }}>
          <div
            style={{
              font: "600 13px/1 'Inter'",
              letterSpacing: ".18em",
              textTransform: "uppercase",
              color: "#24D155",
              marginBottom: 16,
            }}
          >
            What We Do · Our Pillars
          </div>
          <h2 style={{ font: "800 44px/1.1 'Inter'", letterSpacing: "-.02em", color: "var(--tbc-text)", marginBottom: 16 }}>
            Five pillars, one ecosystem.
          </h2>
          <p style={{ font: "400 19px/1.6 'Inter'", color: "var(--tbc-text-muted)", maxWidth: 620, marginBottom: 48 }}>
            Everything TBC Ghana does maps to five pillars — each with concrete programs behind
            it.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {ABOUT_PILLARS.map((pillar) => (
              <div
                key={pillar.number}
                className={pillar.dark ? "tbc-card-dark" : "tbc-card"}
                style={{
                  background: pillar.dark ? "#14211F" : "var(--tbc-bg)",
                  border: pillar.dark ? undefined : "1px solid var(--tbc-border-soft)",
                  borderRadius: 18,
                  padding: 44,
                  display: "grid",
                  gridTemplateColumns: ".7fr 1.3fr",
                  gap: 44,
                }}
              >
                <div>
                  <div style={{ font: "800 44px/1 'Inter'", color: "#24D155", marginBottom: 18 }}>
                    {pillar.number}
                  </div>
                  <h3
                    style={{
                      font: "800 28px/1.15 'Inter'",
                      letterSpacing: "-.02em",
                      color: pillar.dark ? "#fff" : "var(--tbc-text)",
                      marginBottom: 12,
                    }}
                  >
                    {pillar.title}
                  </h3>
                  <p
                    style={{
                      font: "400 16px/1.6 'Inter'",
                      color: pillar.dark ? "rgba(255,255,255,.7)" : "var(--tbc-text-muted)",
                    }}
                  >
                    {pillar.description}
                  </p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 14, alignSelf: "center" }}>
                  {pillar.bullets.map((bullet) => (
                    <div key={bullet} style={{ display: "flex", alignItems: "center", gap: 14 }}>
                      <span
                        style={{
                          width: 9,
                          height: 9,
                          borderRadius: "50%",
                          background: "#24D155",
                          flex: "none",
                        }}
                      />
                      <span
                        style={{
                          font: "500 17px/1.4 'Inter'",
                          color: pillar.dark ? "#fff" : "var(--tbc-text)",
                        }}
                      >
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section style={{ maxWidth: 1160, margin: "0 auto", padding: "96px 40px" }}>
        <div
          style={{
            font: "600 13px/1 'Inter'",
            letterSpacing: ".18em",
            textTransform: "uppercase",
            color: "#24D155",
            marginBottom: 16,
          }}
        >
          Milestones
        </div>
        <h2 style={{ font: "800 44px/1.1 'Inter'", letterSpacing: "-.02em", color: "var(--tbc-text)", marginBottom: 56 }}>
          From grassroots to institution.
        </h2>
        <div className="tbc-grid-4">
          {MILESTONES.map((milestone) => (
            <div
              key={milestone.title}
              style={{ borderTop: `2px solid ${milestone.borderColor}`, paddingTop: 22 }}
            >
              <div style={{ font: "700 14px/1 'Inter'", color: milestone.textColor, marginBottom: 12 }}>
                {milestone.title}
              </div>
              <p style={{ font: "400 15px/1.55 'Inter'", color: "var(--tbc-text-muted)" }}>{milestone.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
