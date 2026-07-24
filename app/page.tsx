import Link from "next/link";
import Image from "next/image";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { PILLARS } from "@/data/pillars";
import { HOME_STATS } from "@/data/stats";
import { PARTNER_VALUE_PROPS } from "@/data/partners";

export default function HomePage() {
  return (
    <div style={{ width: "100%", color: "var(--tbc-text)" }}>
      {/* HERO */}
      <section style={{ position: "relative", background: "#1B4D4A", overflow: "hidden" }}>
        <Image
          src="/images/tbc_hero.jpg"
          alt=""
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center right" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, #1B4D4A 0%, #1B4D4A 38%, rgba(27,77,74,.72) 50%, rgba(27,77,74,0) 72%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: -160,
            right: -120,
            width: 620,
            height: 620,
            borderRadius: "50%",
            border: "1px solid rgba(36,209,85,.14)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: -40,
            right: 20,
            width: 420,
            height: 420,
            borderRadius: "50%",
            border: "1px solid rgba(36,209,85,.22)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 90,
            right: 150,
            width: 240,
            height: 240,
            borderRadius: "50%",
            border: "2px solid rgba(36,209,85,.45)",
            animation: "tbcRing 44s linear infinite",
          }}
        >
          <span
            style={{
              position: "absolute",
              top: -7,
              left: "50%",
              width: 12,
              height: 12,
              marginLeft: -6,
              borderRadius: "50%",
              background: "#24D155",
            }}
          />
        </div>
        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "104px 40px 96px", position: "relative" }}>
          <div style={{ maxWidth: 760, animation: "tbcUp .7s both" }}>
            <div
              style={{
                font: "600 13px/1 'Inter'",
                letterSpacing: ".2em",
                textTransform: "uppercase",
                color: "#24D155",
                marginBottom: 24,
              }}
            >
              Ecosystem Infrastructure for Web3
            </div>
            <h1
              style={{
                font: "800 72px/1.02 'Inter'",
                letterSpacing: "-.03em",
                color: "#fff",
                marginBottom: 28,
                textWrap: "balance",
              }}
            >
              Building Ghana&rsquo;s <span style={{ color: "#24D155" }}>Web3 Future</span> Together.
            </h1>
            <p
              style={{
                font: "400 21px/1.6 'Inter'",
                color: "rgba(255,255,255,.76)",
                maxWidth: 600,
                marginBottom: 40,
              }}
            >
              TBC Ghana is the ecosystem infrastructure uniting education, builders, and
              community to grow blockchain and Web3 across Ghana and Africa.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <Link
                href="https://chat.whatsapp.com/Jd9W4t16aYUH3UAONN0Ivm"
                style={{
                  background: "#24D155",
                  color: "#14211F",
                  font: "700 16px/1 'Inter'",
                  padding: "18px 32px",
                  borderRadius: 10,
                  textDecoration: "none",
                }}
              >
                Join the Circle
              </Link>
              <Link
                href="/about"
                style={{
                  border: "1px solid rgba(255,255,255,.32)",
                  color: "#fff",
                  font: "600 16px/1 'Inter'",
                  padding: "18px 32px",
                  borderRadius: 10,
                  textDecoration: "none",
                }}
              >
                Explore What We Do
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STAT BAND */}
      <section style={{ background: "var(--tbc-surface)", borderBottom: "1px solid var(--tbc-border)" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "34px 40px", display: "flex", flexWrap: "wrap" }}>
          {HOME_STATS.map((stat, i) => (
            <div
              key={stat.label}
              style={{
                flex: 1,
                minWidth: 180,
                padding:
                  i === 0 ? "0 32px 0 0" : i === HOME_STATS.length - 1 ? "0 0 0 32px" : "0 32px",
                borderLeft: i === 0 ? undefined : "1px solid rgba(20,33,31,.1)",
              }}
            >
              <div style={{ font: "800 38px/1 'Inter'", letterSpacing: "-.02em", color: "#1B4D4A" }}>
                {stat.value}
              </div>
              <div style={{ font: "500 14px/1.4 'Inter'", color: "var(--tbc-text-muted)", marginTop: 8 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHO WE ARE */}
      <section
        style={{
          maxWidth: 1160,
          margin: "0 auto",
          padding: "104px 40px",
          display: "grid",
          gridTemplateColumns: ".9fr 1.1fr",
          gap: 72,
          alignItems: "center",
        }}
      >
        <div>
          <div
            style={{
              font: "600 13px/1 'Inter'",
              letterSpacing: ".18em",
              textTransform: "uppercase",
              color: "#24D155",
              marginBottom: 18,
            }}
          >
            Who We Are
          </div>
          <h2 style={{ font: "800 44px/1.1 'Inter'", letterSpacing: "-.02em", color: "var(--tbc-text)" }}>
            A trusted gateway for Web3 growth in Ghana.
          </h2>
        </div>
        <div>
          <p style={{ font: "400 20px/1.65 'Inter'", color: "var(--tbc-text-secondary)", marginBottom: 28 }}>
            TBC Ghana is a trusted gateway for blockchain and Web3 growth in Ghana and Africa —
            educating new users, supporting builders, and connecting global ecosystems with
            local communities.
          </p>
          <Link href="/about" style={{ font: "700 16px/1 'Inter'", color: "#1B4D4A", textDecoration: "none" }}>
            Read our story →
          </Link>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section style={{ background: "var(--tbc-surface)", borderTop: "1px solid var(--tbc-border)", borderBottom: "1px solid var(--tbc-border)" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "100px 40px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              marginBottom: 48,
              flexWrap: "wrap",
              gap: 16,
            }}
          >
            <div>
              <div
                style={{
                  font: "600 13px/1 'Inter'",
                  letterSpacing: ".18em",
                  textTransform: "uppercase",
                  color: "#24D155",
                  marginBottom: 16,
                }}
              >
                What We Do
              </div>
              <h2 style={{ font: "800 44px/1.1 'Inter'", letterSpacing: "-.02em", color: "var(--tbc-text)" }}>
                Five pillars, one ecosystem.
              </h2>
            </div>
            <Link href="/about" style={{ font: "700 15px/1 'Inter'", color: "#1B4D4A", textDecoration: "none" }}>
              See all pillars →
            </Link>
          </div>
          <div className="tbc-grid-3">
            {PILLARS.map((pillar) => (
              <div
                key={pillar.title}
                className="tbc-card"
                style={{
                  background: "var(--tbc-bg)",
                  borderRadius: 14,
                  padding: 28,
                  border: "1px solid var(--tbc-border-soft)",
                }}
              >
                <div
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: 9,
                    background: pillar.color,
                    marginBottom: 20,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <pillar.Icon />
                </div>
                <div style={{ font: "700 20px/1.2 'Inter'", color: "var(--tbc-text)", marginBottom: 10 }}>
                  {pillar.title}
                </div>
                <p style={{ font: "400 15px/1.55 'Inter'", color: "var(--tbc-text-muted)" }}>{pillar.description}</p>
              </div>
            ))}
            <div
              className="tbc-card-dark"
              style={{
                background: "#1B4D4A",
                borderRadius: 14,
                padding: 28,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div style={{ font: "700 20px/1.3 'Inter'", color: "#fff", marginBottom: 10 }}>
                Find where you fit.
              </div>
              <Link
                href="/community"
                style={{ font: "600 15px/1 'Inter'", color: "#24D155", textDecoration: "none" }}
              >
                Explore the community →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* GET INVOLVED BAND */}
      <section style={{ background: "#24D155" }}>
        <div
          style={{
            maxWidth: 1160,
            margin: "0 auto",
            padding: "64px 40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 24,
          }}
        >
          <div style={{ maxWidth: 660 }}>
            <h2 style={{ font: "800 38px/1.15 'Inter'", letterSpacing: "-.02em", color: "#14211F", marginBottom: 12 }}>
              There&rsquo;s a place for you in the Circle.
            </h2>
            <p style={{ font: "400 18px/1.5 'Inter'", color: "rgba(20,33,31,.72)" }}>
              Whether you&rsquo;re just starting out or already building, join a structured
              ecosystem made for you.
            </p>
          </div>
          <Link
            href="https://chat.whatsapp.com/Jd9W4t16aYUH3UAONN0Ivm"
            style={{
              background: "#14211F",
              color: "#fff",
              font: "700 16px/1 'Inter'",
              padding: "18px 34px",
              borderRadius: 10,
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            Join TBC Ghana
          </Link>
        </div>
      </section>

      {/* PARTNERS */}
      {/* <section style={{ background: "var(--tbc-surface)", borderTop: "1px solid var(--tbc-border)", borderBottom: "1px solid var(--tbc-border)" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "100px 40px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              marginBottom: 48,
              flexWrap: "wrap",
              gap: 16,
            }}
          >
            <div>
              <div
                style={{
                  font: "600 13px/1 'Inter'",
                  letterSpacing: ".18em",
                  textTransform: "uppercase",
                  color: "#24D155",
                  marginBottom: 16,
                }}
              >
                Partners
              </div>
              <h2 style={{ font: "800 44px/1.1 'Inter'", letterSpacing: "-.02em", color: "var(--tbc-text)" }}>
                Building the ecosystem together.
              </h2>
            </div>
            <Link href="/contact" style={{ font: "700 15px/1 'Inter'", color: "#1B4D4A", textDecoration: "none" }}>
              Partner with us →
            </Link>
          </div>
          <div className="tbc-grid-3" style={{ marginBottom: 40 }}>
            {PARTNER_VALUE_PROPS.map((partner) => (
              <div
                key={partner.title}
                className="tbc-card"
                style={{
                  background: "var(--tbc-bg)",
                  borderRadius: 14,
                  padding: 28,
                  border: "1px solid var(--tbc-border-soft)",
                }}
              >
                <div
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: 9,
                    background: partner.color,
                    marginBottom: 20,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <partner.Icon />
                </div>
                <div style={{ font: "700 20px/1.2 'Inter'", color: "var(--tbc-text)", marginBottom: 10 }}>
                  {partner.title}
                </div>
                <p style={{ font: "400 15px/1.55 'Inter'", color: "var(--tbc-text-muted)" }}>{partner.description}</p>
              </div>
            ))}
          </div>
          <div
            style={{
              font: "600 12px/1 'Inter'",
              letterSpacing: ".16em",
              textTransform: "uppercase",
              color: "var(--tbc-text-faint)",
              marginBottom: 20,
            }}
          >
            Ecosystem partners &amp; sponsors
          </div>
          <div className="tbc-grid-4">
            {[0, 1, 2, 3].map((i) => (
              <ImagePlaceholder
                key={i}
                variant="dashed"
                label="partner logo"
                style={{ aspectRatio: "2/1" }}
              />
            ))}
          </div>
        </div>
      </section> */}

      {/* UPCOMING */}
      <section style={{ maxWidth: 1160, margin: "0 auto", padding: "100px 40px" }}>
        <div
          style={{
            font: "600 13px/1 'Inter'",
            letterSpacing: ".18em",
            textTransform: "uppercase",
            color: "#24D155",
            marginBottom: 16,
          }}
        >
          Upcoming
        </div>
        <h2 style={{ font: "800 44px/1.1 'Inter'", letterSpacing: "-.02em", color: "var(--tbc-text)", marginBottom: 48 }}>
          What&rsquo;s coming up next.
        </h2>
        <div className="tbc-grid-2">
          <div
            className="tbc-card"
            style={{
              background: "var(--tbc-surface)",
              border: "1px solid var(--tbc-border)",
              borderRadius: 16,
              padding: 36,
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span
                style={{
                  font: "600 11.5px/1 'Inter'",
                  letterSpacing: ".12em",
                  textTransform: "uppercase",
                  color: "#24D155",
                  background: "rgba(36,209,85,.12)",
                  padding: "7px 11px",
                  borderRadius: 6,
                }}
              >
                Weekly · Online
              </span>
            </div>
            <div style={{ font: "700 24px/1.2 'Inter'", color: "var(--tbc-text)" }}>Weekly X Space</div>
            <p style={{ font: "400 16px/1.55 'Inter'", color: "var(--tbc-text-muted)", flex: 1 }}>
              Every Friday at 7:30 PM GMT — blockchain education, African Web3 stories, founder
              interviews and market insights.
            </p>
            <Link href="/events" style={{ font: "700 15px/1 'Inter'", color: "#1B4D4A", textDecoration: "none" }}>
              See all events →
            </Link>
          </div>
          <div
            className="tbc-card-dark"
            style={{
              background: "#14211F",
              borderRadius: 16,
              padding: 36,
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span
                style={{
                  font: "600 11.5px/1 'Inter'",
                  letterSpacing: ".12em",
                  textTransform: "uppercase",
                  color: "#fff",
                  background: "#D03433",
                  padding: "7px 11px",
                  borderRadius: 6,
                }}
              >
                Flagship · Nov 2026
              </span>
            </div>
            <div style={{ font: "700 24px/1.2 'Inter'", color: "#fff" }}>
              Blockchain &amp; Crypto Conference
            </div>
            <p style={{ font: "400 16px/1.55 'Inter'", color: "rgba(255,255,255,.7)", flex: 1 }}>
              Ghana&rsquo;s flagship Web3 gathering — keynotes, startup showcases, hackathons,
              networking and policy discussions. Coming this November.
            </p>
            <Link href="/events" style={{ font: "700 15px/1 'Inter'", color: "#24D155", textDecoration: "none" }}>
              Event details →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
