import type { Metadata } from "next";
import Countdown from "@/components/Countdown";
import { UPCOMING_EVENTS } from "@/data/events";

export const metadata: Metadata = {
  title: "Events",
  description:
    "From weekly online spaces to city meetups and the flagship conference — here's what's coming up.",
};

export default function EventsPage() {
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
            Events
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
            From weekly spaces to the flagship.
          </h1>
          <p style={{ font: "400 20px/1.6 'Inter'", color: "rgba(255,255,255,.76)", maxWidth: 640 }}>
            From weekly online spaces to city meetups and the flagship conference — here&rsquo;s
            what&rsquo;s coming up.
          </p>
        </div>
      </section>

      {/* FLAGSHIP FEATURE */}
      <section style={{ maxWidth: 1160, margin: "0 auto", padding: "64px 40px 40px" }}>
        <div
          className="tbc-card-dark"
          style={{
            background: "#14211F",
            borderRadius: 20,
            padding: 52,
            display: "grid",
            gridTemplateColumns: "1.4fr .6fr",
            gap: 40,
            alignItems: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: -100,
              right: -80,
              width: 360,
              height: 360,
              borderRadius: "50%",
              border: "1px solid rgba(36,209,85,.16)",
            }}
          />
          <div style={{ position: "relative" }}>
            <span
              style={{
                font: "600 12px/1 'Inter'",
                letterSpacing: ".14em",
                textTransform: "uppercase",
                color: "#fff",
                background: "#D03433",
                padding: "8px 13px",
                borderRadius: 6,
              }}
            >
              Flagship · Sept–Oct / Nov 2026
            </span>
            <h2 style={{ font: "800 40px/1.1 'Inter'", letterSpacing: "-.02em", color: "#fff", margin: "22px 0 14px" }}>
              TBC Ghana Blockchain &amp; Crypto Conference
            </h2>
            <p style={{ font: "400 18px/1.6 'Inter'", color: "rgba(255,255,255,.72)", maxWidth: 560 }}>
              Ghana&rsquo;s flagship Web3 gathering — keynotes, startup showcases, workshops,
              hackathons, networking and policy discussions.
            </p>
          </div>
          <div
            style={{
              position: "relative",
              textAlign: "center",
              background: "rgba(255,255,255,.04)",
              border: "1px solid rgba(255,255,255,.1)",
              borderRadius: 16,
              padding: 32,
            }}
          >
            <Countdown variant="big" />
            <div
              style={{
                font: "600 12px/1 'Inter'",
                letterSpacing: ".16em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,.6)",
                marginTop: 10,
              }}
            >
              Days to go
            </div>
          </div>
        </div>
      </section>

      {/* UPCOMING LIST */}
      <section style={{ maxWidth: 1160, margin: "0 auto", padding: "40px 40px 40px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
          <h2 style={{ font: "800 28px/1 'Inter'", letterSpacing: "-.02em", color: "var(--tbc-text)" }}>Upcoming</h2>
          <span
            style={{
              font: "600 12px/1 'Inter'",
              color: "#1B4D4A",
              background: "rgba(36,209,85,.16)",
              padding: "7px 12px",
              borderRadius: 100,
            }}
          >
            {UPCOMING_EVENTS.length}
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {UPCOMING_EVENTS.map((event) => (
            <div
              key={event.title}
              className="tbc-card"
              style={{
                background: "var(--tbc-surface)",
                border: "1px solid var(--tbc-border)",
                borderRadius: 14,
                padding: "26px 30px",
                display: "flex",
                alignItems: "center",
                gap: 28,
              }}
            >
              <div
                style={{
                  flex: "none",
                  width: 90,
                  textAlign: "center",
                  borderRight: "1px solid var(--tbc-border-strong)",
                  paddingRight: 24,
                }}
              >
                <div style={{ font: "800 15px/1.1 'Inter'", color: event.dateColor }}>{event.dateLabel}</div>
                <div style={{ font: "500 12px/1.2 'Inter'", color: "var(--tbc-text-faint)", marginTop: 4 }}>
                  {event.dateSubLabel}
                </div>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ font: "700 19px/1.25 'Inter'", color: "var(--tbc-text)", marginBottom: 4 }}>
                  {event.title}
                </div>
                <div style={{ font: "400 15px/1.4 'Inter'", color: "var(--tbc-text-muted)" }}>{event.subtitle}</div>
              </div>
              <span
                style={{
                  font: "600 12px/1 'Inter'",
                  color: event.tagColor === "flagship" ? "#fff" : "#1B4D4A",
                  background: event.tagColor === "flagship" ? "#D03433" : "var(--tbc-bg)",
                  padding: "8px 13px",
                  borderRadius: 100,
                  flex: "none",
                }}
              >
                {event.tag}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: 1160, margin: "0 auto", padding: "24px 40px 100px" }}>
        <p style={{ font: "400 14px/1.6 'Inter'", color: "var(--tbc-text-faint)" }}>
          Events are updated regularly. Follow{" "}
          <a href="https://x.com/Builders_Circle" style={{ fontWeight: 600 }}>
            @Builders_Circle
          </a>{" "}
          for the latest dates and locations.
        </p>
      </section>
    </div>
  );
}
