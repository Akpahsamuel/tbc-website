"use client";

import { INTEREST_OPTIONS } from "@/data/getInvolvedOptions";

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "14px 15px",
  border: "1px solid rgba(20,33,31,.16)",
  borderRadius: 10,
  fontSize: 15,
  color: "#14211F",
  background: "#fbfcfb",
};

const selectStyle: React.CSSProperties = {
  ...inputStyle,
  color: "#54615e",
};

const labelTextStyle: React.CSSProperties = {
  font: "600 13px/1 'Inter'",
  color: "#14211F",
  display: "block",
  marginBottom: 9,
};

export default function GetInvolvedForm() {
  return (
    <div
      className="tbc-card"
      style={{ background: "#fff", border: "1px solid rgba(20,33,31,.08)", borderRadius: 20, padding: 48 }}
    >
      <h2 style={{ font: "800 30px/1.15 'Inter'", letterSpacing: "-.02em", color: "#14211F", marginBottom: 8 }}>
        Join TBC Ghana
      </h2>
      <p style={{ font: "400 16px/1.5 'Inter'", color: "#54615e", marginBottom: 32 }}>
        Tell us a little about you and where you&rsquo;d like to plug in.
      </p>
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
          <label style={{ display: "block" }}>
            <span style={labelTextStyle}>City</span>
            <input type="text" placeholder="e.g. Accra" style={inputStyle} />
          </label>
          <label style={{ display: "block" }}>
            <span style={labelTextStyle}>Most interested in</span>
            <select style={selectStyle} defaultValue={INTEREST_OPTIONS[0]}>
              {INTEREST_OPTIONS.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
          <label style={{ display: "block", gridColumn: "span 2" }}>
            <span style={labelTextStyle}>How did you hear about TBC Ghana?</span>
            <input type="text" placeholder="X, a friend, an event…" style={inputStyle} />
          </label>
        </div>
        <button
          type="submit"
          style={{
            marginTop: 28,
            width: "100%",
            background: "#24D155",
            color: "#14211F",
            font: "700 16px/1 'Inter'",
            padding: 17,
            border: "none",
            borderRadius: 10,
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
