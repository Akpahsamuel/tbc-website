"use client";

import { COMMUNITY_LEVELS } from "@/data/communityLevels";

const TILTS = [-1.5, -0.8, -1.8, -1.0, -2.0];

export default function CommunityLevelsStack() {
  return (
    <div style={{ position: "relative", width: "100%", maxWidth: 880, margin: "0 auto", paddingBottom: 40 }}>
      {COMMUNITY_LEVELS.map((level, index) => {
        const topOffset = 80 + index * 20;
        const isDark = level.dark;
        const tiltAngle = TILTS[index % TILTS.length];

        return (
          <div
            key={level.number}
            className="tbc-sticky-level-card"
            style={{
              position: "sticky",
              top: `${topOffset}px`,
              zIndex: 10 + index,
              background: isDark ? "#1B4D4A" : "#FFFFFF",
              color: isDark ? "#FFFFFF" : "#14211F",
              borderRadius: 20,
              padding: "28px 32px",
              marginBottom: 36,
              border: isDark ? "1px solid #1B4D4A" : "1px solid rgba(20, 33, 31, 0.08)",
              boxShadow: isDark
                ? "0 14px 36px rgba(27, 77, 74, 0.28)"
                : `0 ${6 + index * 4}px ${20 + index * 6}px rgba(20, 33, 31, 0.09)`,
              transform: `rotate(${tiltAngle}deg)`,
              transformOrigin: "center left",
              transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: "50%",
                  background: level.circleBg,
                  color: level.circleColor,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  font: "800 22px/1 'Inter'",
                  flexShrink: 0,
                }}
              >
                {level.number}
              </div>

              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
                  <h3
                    style={{
                      font: "800 22px/1.2 'Inter'",
                      letterSpacing: "-.01em",
                      color: isDark ? "#FFFFFF" : "#14211F",
                      margin: 0,
                    }}
                  >
                    {level.title}
                  </h3>
                </div>

                <p
                  style={{
                    font: "400 16px/1.5 'Inter'",
                    color: isDark ? "rgba(255, 255, 255, 0.85)" : "#54615E",
                    margin: 0,
                  }}
                >
                  {level.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
