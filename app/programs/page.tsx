import type { Metadata } from "next";
import Link from "next/link";
import { PROGRAMS, RESEARCH_PROGRAM } from "@/data/programs";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Recurring, structured initiatives spanning education, community, media and ecosystem intelligence.",
};

export default function ProgramsPage() {
  return (
    <div style={{ width: "100%", color: "#14211F" }}>
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
            Programs &amp; Initiatives
          </div>
          <h1
            className="tbc-hero-h1"
            style={{
              color: "#fff",
              maxWidth: 820,
              marginBottom: 24,
            }}
          >
            The programs that keep the ecosystem moving.
          </h1>
          <p style={{ font: "400 20px/1.6 'Inter'", color: "rgba(255,255,255,.76)", maxWidth: 620 }}>
            Recurring, structured initiatives spanning education, community, media and
            ecosystem intelligence.
          </p>
        </div>
      </section>

      <section className="tbc-container tbc-grid-2" style={{ paddingTop: 64, paddingBottom: 80 }}>
        {PROGRAMS.map((program) => (
          <div
            key={program.title}
            className={`tbc-card-padding ${program.dark ? "tbc-card-dark" : "tbc-card"}`}
            style={{
              background: program.dark ? "#14211F" : "#fff",
              border: program.dark ? undefined : "1px solid rgba(20,33,31,.08)",
              borderRadius: 18,
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: 11,
                background: program.color,
                marginBottom: 24,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <program.Icon size={22} />
            </div>
            <h2
              style={{
                font: "800 26px/1.15 'Inter'",
                letterSpacing: "-.02em",
                color: program.dark ? "#fff" : "#14211F",
                marginBottom: 14,
              }}
            >
              {program.title}
            </h2>
            <p
              style={{
                font: "400 17px/1.6 'Inter'",
                color: program.dark ? "rgba(255,255,255,.72)" : "#54615e",
                marginBottom: 20,
              }}
            >
              {program.description}
            </p>
            {program.tags ? (
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {program.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      font: "500 13px/1 'Inter'",
                      color: "#1B4D4A",
                      background: "#F5F6F4",
                      padding: "8px 13px",
                      borderRadius: 100,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}
            {program.linkLabel && program.linkHref ? (
              <Link
                href={program.linkHref}
                style={{ font: "700 15px/1 'Inter'", color: "#1B4D4A", textDecoration: "none" }}
              >
                {program.linkLabel}
              </Link>
            ) : null}
            {program.badge ? (
              <span
                style={{
                  font: `600 13px/1 'Inter'`,
                  color: program.dark ? "#24D155" : "#D03433",
                  background: program.dark ? "rgba(36,209,85,.14)" : "rgba(208,52,51,.1)",
                  padding: "8px 13px",
                  borderRadius: 100,
                }}
              >
                {program.badge}
              </span>
            ) : null}
          </div>
        ))}

        <div
          className="tbc-full-span tbc-card tbc-card-padding tbc-split-grid"
          style={{
            background: "#fff",
            border: "1px solid rgba(20,33,31,.08)",
            borderRadius: 18,
          }}
        >
          <div>
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: 11,
                background: "#1B4D4A",
                marginBottom: 24,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <RESEARCH_PROGRAM.Icon size={22} />
            </div>
            <h2 style={{ font: "800 26px/1.15 'Inter'", letterSpacing: "-.02em", color: "#14211F", marginBottom: 14 }}>
              {RESEARCH_PROGRAM.title}
            </h2>
          </div>
          <p style={{ font: "400 18px/1.65 'Inter'", color: "#54615e" }}>{RESEARCH_PROGRAM.description}</p>
        </div>
      </section>
    </div>
  );
}
