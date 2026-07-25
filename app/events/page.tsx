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
            Events
          </div>
          <h1
            className="tbc-hero-h1"
            style={{
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
      <section className="tbc-container" style={{ paddingTop: 64, paddingBottom: 40 }}>
        <div
          className="tbc-card-dark tbc-card-padding tbc-split-grid-flagship"
          style={{
            background: "#14211F",
            borderRadius: 20,
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
      <section className="tbc-container" style={{ paddingTop: 40, paddingBottom: 40 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
          <h2 style={{ font: "800 28px/1 'Inter'", letterSpacing: "-.02em", color: "#14211F" }}>Upcoming</h2>
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
              className="tbc-card tbc-event-card"
              style={{
                background: "#fff",
                border: "1px solid rgba(20,33,31,.08)",
                borderRadius: 14,
              }}
            >
              <div
                className="tbc-event-date-box"
                style={{
                  flex: "none",
                  width: 90,
                  textAlign: "center",
                  borderRight: "1px solid rgba(20,33,31,.1)",
                  paddingRight: 24,
                }}
              >
                <div style={{ font: "800 15px/1.1 'Inter'", color: event.dateColor }}>{event.dateLabel}</div>
                <div style={{ font: "500 12px/1.2 'Inter'", color: "#7b857f", marginTop: 4 }}>
                  {event.dateSubLabel}
                </div>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ font: "700 19px/1.25 'Inter'", color: "#14211F", marginBottom: 4 }}>
                  {event.title}
                </div>
                <div style={{ font: "400 15px/1.4 'Inter'", color: "#54615e" }}>{event.subtitle}</div>
              </div>
              <span
                style={{
                  font: "600 12px/1 'Inter'",
                  color: event.tagColor === "flagship" ? "#fff" : "#1B4D4A",
                  background: event.tagColor === "flagship" ? "#D03433" : "#F5F6F4",
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

      <section className="tbc-container" style={{ paddingTop: 24, paddingBottom: 80 }}>
        <p style={{ font: "400 14px/1.6 'Inter'", color: "#7b857f" }}>
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
