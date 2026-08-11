"use client";

import { useState } from "react";
import Image from "next/image";
import { COMMUNITY_PARTNERS } from "@/data/communityPartners";

const TILTS = [-1.5, 1.2, -1.0, 1.5, -1.8, 0.8, -1.2, 1.4, -1.6, 1.0, -1.4, 0.9];

export default function PartnerCardsStack() {
  const [expandedPartner, setExpandedPartner] = useState<string | null>(null);

  const togglePartner = (name: string) => {
    setExpandedPartner((prev) => (prev === name ? null : name));
  };

  return (
    <div style={{ position: "relative", width: "100%", maxWidth: 840, margin: "0 auto", paddingBottom: 40 }}>
      {COMMUNITY_PARTNERS.map((partner, index) => {
        const isExpanded = expandedPartner === partner.name;
        const topOffset = 80 + index * 12;
        const tiltAngle = TILTS[index % TILTS.length];

        return (
          <div
            key={partner.name}
            onClick={() => togglePartner(partner.name)}
            className={`tbc-card-clean tbc-sticky-partner-card ${isExpanded ? "is-expanded" : ""}`}
            style={{
              position: "sticky",
              top: `${topOffset}px`,
              zIndex: isExpanded ? 50 : 10 + index,
              background: "#FFFFFF",
              border: "1px solid rgba(20, 33, 31, 0.08)",
              borderRadius: 20,
              padding: "24px 28px",
              marginBottom: 32,
              boxShadow: `0 ${6 + index * 2}px ${18 + index * 4}px rgba(20, 33, 31, 0.08)`,
              transform: isExpanded ? "rotate(0deg) scale(1.015)" : `rotate(${tiltAngle}deg)`,
              transformOrigin: "center center",
              cursor: "pointer",
              transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease",
            }}
          >
            <div
              style={{
                height: 60,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 16,
                width: "100%",
              }}
            >
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                width={180}
                height={55}
                style={{
                  objectFit: "contain",
                  maxHeight: 52,
                  maxWidth: "100%",
                  margin: "0 auto",
                  transform: partner.logoScale ? `scale(${partner.logoScale})` : undefined,
                  transformOrigin: "center center",
                }}
              />
            </div>

            <div style={{ textAlign: "center" }}>
              <h3
                style={{
                  font: "700 20px/1.3 'Inter'",
                  color: "#14211F",
                  margin: 0,
                }}
              >
                {partner.name}
              </h3>

              <div
                className="tbc-partner-reveal"
                style={{
                  maxHeight: isExpanded ? 400 : undefined,
                  opacity: isExpanded ? 1 : undefined,
                  marginTop: isExpanded ? 14 : undefined,
                }}
              >
                <p
                  style={{
                    font: "400 14px/1.6 'Inter'",
                    color: "#54615E",
                    marginBottom: 16,
                    textAlign: "center",
                  }}
                >
                  {partner.description}
                </p>

                {partner.links.length > 0 && (
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "center",
                      gap: 8,
                      paddingTop: 14,
                      borderTop: "1px solid rgba(20, 33, 31, 0.08)",
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {partner.links.map((link) => (
                      <a
                        key={link.title}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={link.title}
                        className="tbc-partner-badge"
                      >
                        <link.Icon size={14} />
                        <span>{link.title}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
