import type { Metadata } from "next";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { MEDIA_POSTS } from "@/data/mediaPosts";

export const metadata: Metadata = {
  title: "Media",
  description:
    "Home for TBC Ghana's original content — X Space recordings, the podcast, ecosystem reports, and short written pieces on Web3 in Ghana.",
};

export default function MediaPage() {
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
            Media / Ecosystem Stories
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
            The stories driving Web3 in Ghana.
          </h1>
          <p style={{ font: "400 20px/1.6 'Inter'", color: "rgba(255,255,255,.76)", maxWidth: 660 }}>
            Home for TBC Ghana&rsquo;s original content — X Space recordings, the podcast,
            ecosystem reports, and short written pieces on Web3 in Ghana.
          </p>
        </div>
      </section>

      {/* FEATURED REPORT */}
      <section style={{ maxWidth: 1160, margin: "0 auto", padding: "64px 40px 24px" }}>
        <div
          className="tbc-card"
          style={{
            background: "var(--tbc-surface)",
            border: "1px solid var(--tbc-border)",
            borderRadius: 20,
            overflow: "hidden",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
          }}
        >
          <ImagePlaceholder label={<>report cover<br />drop image here</>} style={{ minHeight: 300 }} />
          <div style={{ padding: 48, display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <span
              style={{
                font: "600 12px/1 'Inter'",
                letterSpacing: ".14em",
                textTransform: "uppercase",
                color: "#24D155",
                marginBottom: 16,
              }}
            >
              Latest ecosystem report
            </span>
            <h2 style={{ font: "800 32px/1.15 'Inter'", letterSpacing: "-.02em", color: "var(--tbc-text)", marginBottom: 14 }}>
              The State of Web3 in Ghana
            </h2>
            <p style={{ font: "400 17px/1.6 'Inter'", color: "var(--tbc-text-muted)", marginBottom: 24 }}>
              Adoption trends, developer ecosystem growth, and community insights — establishing
              TBC Ghana as an ecosystem intelligence source.
            </p>
            <a href="#" style={{ font: "700 15px/1 'Inter'", color: "#1B4D4A" }}>
              Read the report →
            </a>
          </div>
        </div>
      </section>

      {/* CONTENT GRID */}
      <section style={{ maxWidth: 1160, margin: "0 auto", padding: "24px 40px 100px" }}>
        <div className="tbc-grid-3">
          {MEDIA_POSTS.map((post) => (
            <div
              key={post.title}
              className="tbc-card"
              style={{
                background: "var(--tbc-surface)",
                border: "1px solid var(--tbc-border)",
                borderRadius: 16,
                overflow: "hidden",
              }}
            >
              <ImagePlaceholder label="cover image" style={{ aspectRatio: "16/10" }} />
              <div style={{ padding: 24 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                  <span
                    style={{
                      font: "600 11px/1 'Inter'",
                      letterSpacing: ".1em",
                      textTransform: "uppercase",
                      color: "#24D155",
                      background: "rgba(36,209,85,.12)",
                      padding: "6px 10px",
                      borderRadius: 5,
                    }}
                  >
                    {post.tag}
                  </span>
                  <span style={{ font: "500 12.5px/1 'Inter'", color: "var(--tbc-text-placeholder)" }}>{post.date}</span>
                </div>
                <h3
                  style={{
                    font: "700 19px/1.3 'Inter'",
                    letterSpacing: "-.01em",
                    color: "var(--tbc-text)",
                    marginBottom: 10,
                  }}
                >
                  {post.title}
                </h3>
                <p style={{ font: "400 14.5px/1.55 'Inter'", color: "var(--tbc-text-muted)" }}>{post.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
