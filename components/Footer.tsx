import Link from "next/link";
import { FOOTER_ORGANIZATION_LINKS, FOOTER_ENGAGE_LINKS } from "@/data/footerLinks";

const linkStyle: React.CSSProperties = {
  font: "500 14.5px/1 'Inter'",
  color: "rgba(255,255,255,.72)",
  textDecoration: "none",
};

const headingStyle: React.CSSProperties = {
  font: "700 12px/1 'Inter'",
  letterSpacing: ".14em",
  textTransform: "uppercase",
  color: "#24D155",
  marginBottom: 18,
};

export default function Footer() {
  return (
    <footer style={{ background: "#14211F", color: "#fff", padding: "72px 40px 32px" }}>
      <div className="tbc-footer-grid" style={{ maxWidth: 1160, margin: "0 auto" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 11, marginBottom: 18 }}>
            <span
              style={{
                width: 28,
                height: 28,
                borderRadius: "50%",
                border: "3px solid #24D155",
                position: "relative",
                display: "inline-block",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  inset: 6,
                  borderRadius: "50%",
                  background: "#24D155",
                }}
              />
            </span>
            <span style={{ font: "800 17px/1 'Inter'", letterSpacing: ".02em", color: "#fff" }}>
              TBC<span style={{ color: "#24D155" }}>·</span>GHANA
            </span>
          </div>
          <p style={{ font: "400 15px/1.6 'Inter'", color: "rgba(255,255,255,.62)", maxWidth: 280 }}>
            Building the Web3 Ecosystem of Ghana and Africa.
          </p>
          <div style={{ display: "flex", gap: 10, marginTop: 22 }}>
            <a
              href="https://x.com/Builders_Circle"
              style={{
                width: 38,
                height: 38,
                borderRadius: 8,
                border: "1px solid rgba(255,255,255,.16)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                textDecoration: "none",
                font: "700 14px/1 'Inter'",
              }}
            >
              X
            </a>
            <a
              href="#"
              style={{
                width: 38,
                height: 38,
                borderRadius: 8,
                border: "1px solid rgba(255,255,255,.16)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                textDecoration: "none",
                font: "700 13px/1 'Inter'",
              }}
            >
              in
            </a>
          </div>
        </div>

        <div>
          <div style={headingStyle}>Organization</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {FOOTER_ORGANIZATION_LINKS.map((link) => (
              <Link key={link.href} href={link.href} style={linkStyle}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div style={headingStyle}>Engage</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {FOOTER_ENGAGE_LINKS.map((link) => (
              <Link key={link.label} href={link.href} style={linkStyle}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div style={headingStyle}>Contact</div>
          <a
            href="mailto:info@tbcafrica.org"
            style={{
              font: "500 14.5px/1.5 'Inter'",
              color: "rgba(255,255,255,.72)",
              textDecoration: "none",
              display: "block",
              marginBottom: 12,
            }}
          >
            info@tbcafrica.org
          </a>
          <p style={{ font: "400 14.5px/1.6 'Inter'", color: "rgba(255,255,255,.5)" }}>
            14 Nii Owoo Street
            <br />
            Dzorwulu, Accra, Ghana
          </p>
        </div>
      </div>

      <div
        style={{
          maxWidth: 1160,
          margin: "52px auto 0",
          paddingTop: 26,
          borderTop: "1px solid rgba(255,255,255,.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <span style={{ font: "400 13px/1 'Inter'", color: "rgba(255,255,255,.42)" }}>
          © 2026 The Builders Circle Ghana. All rights reserved.
        </span>
        <span style={{ font: "400 13px/1 'Inter'", color: "rgba(255,255,255,.42)" }}>
          www.tbcafrica.org
        </span>
      </div>
    </footer>
  );
}
