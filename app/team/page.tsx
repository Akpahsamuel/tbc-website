import type { Metadata } from "next";
import TeamAvatar from "@/components/TeamAvatar";
import { TEAM } from "@/data/team";

export const metadata: Metadata = {
  title: "Team",
  description:
    "A cross-functional team leading education, community, technology, design and partnerships for TBC Ghana.",
};

export default function TeamPage() {
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
            Meet the Team
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
            The people building the Circle.
          </h1>
          <p style={{ font: "400 20px/1.6 'Inter'", color: "rgba(255,255,255,.76)", maxWidth: 620 }}>
            A cross-functional team leading education, community, technology, design and
            partnerships for TBC Ghana.
          </p>
        </div>
      </section>

      <section style={{ maxWidth: 1160, margin: "0 auto", padding: "80px 40px 100px" }}>
        <div className="tbc-grid-4">
          {TEAM.map((member) => (
            <div
              key={member.name}
              className="tbc-card"
              style={{
                background: "var(--tbc-surface)",
                border: "1px solid var(--tbc-border)",
                borderRadius: 16,
                overflow: "hidden",
              }}
            >
              <TeamAvatar src={member.img} alt={member.name} style={{ aspectRatio: "1/1" }} />
              <div style={{ padding: "20px 22px 24px" }}>
                <div style={{ font: "700 18px/1.25 'Inter'", letterSpacing: "-.01em", color: "var(--tbc-text)", marginBottom: 5 }}>
                  {member.name}
                </div>
                <div style={{ font: "500 14px/1.4 'Inter'", color: "#1B4D4A" }}>{member.role}</div>
              </div>
            </div>
          ))}
        </div>
        {/* <p style={{ font: "400 14px/1.6 'Inter'", color: "var(--tbc-text-faint)", marginTop: 28, maxWidth: 640 }}>
          Headshots, short bios and preferred name spellings are being confirmed with each
          member ahead of launch.
        </p> */}
      </section>
    </div>
  );
}
