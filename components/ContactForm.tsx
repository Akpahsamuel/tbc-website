"use client";

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "14px 15px",
  border: "1px solid var(--tbc-border-strong)",
  borderRadius: 10,
  fontSize: 15,
  color: "var(--tbc-text)",
  background: "var(--tbc-input-bg)",
};

const labelTextStyle: React.CSSProperties = {
  font: "600 13px/1 'Inter'",
  color: "var(--tbc-text)",
  display: "block",
  marginBottom: 9,
};

export default function ContactForm() {
  return (
    <div
      className="tbc-card"
      style={{ background: "var(--tbc-surface)", border: "1px solid var(--tbc-border)", borderRadius: 20, padding: 44 }}
    >
      <form onSubmit={(e) => e.preventDefault()}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          <label style={{ display: "block" }}>
            <span style={labelTextStyle}>Full Name</span>
            <input type="text" placeholder="Your name" style={inputStyle} />
          </label>
          <label style={{ display: "block" }}>
            <span style={labelTextStyle}>Email Address</span>
            <input type="email" placeholder="you@email.com" style={inputStyle} />
          </label>
          <label style={{ display: "block", gridColumn: "span 2" }}>
            <span style={labelTextStyle}>Subject</span>
            <input type="text" placeholder="What's this about?" style={inputStyle} />
          </label>
          <label style={{ display: "block", gridColumn: "span 2" }}>
            <span style={labelTextStyle}>Message</span>
            <textarea rows={5} placeholder="Tell us more…" style={{ ...inputStyle, resize: "vertical" }} />
          </label>
        </div>
        <button
          type="submit"
          style={{
            marginTop: 26,
            width: "100%",
            background: "#14211F",
            color: "#fff",
            font: "700 16px/1 'Inter'",
            padding: 17,
            border: "none",
            borderRadius: 10,
            cursor: "pointer",
          }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
