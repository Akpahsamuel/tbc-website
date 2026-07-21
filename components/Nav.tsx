"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Countdown from "./Countdown";
import { NAV_LINKS } from "@/data/navLinks";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div style={{ position: "sticky", top: 0, zIndex: 100 }}>
      <div
        style={{
          background: "#D03433",
          color: "#fff",
          padding: "10px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 12,
          font: "600 13px/1 'Inter'",
          textAlign: "center",
        }}
      >
        <span
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: "#fff",
            display: "inline-block",
            flex: "none",
          }}
        />
        <span>Flagship Blockchain &amp; Crypto Conference · Accra · November 2026</span>
        <span style={{ opacity: 0.6 }}>·</span>
        <Countdown variant="banner" />
      </div>

      <nav
        style={{
          background: "#14211F",
          padding: "16px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid rgba(255,255,255,.07)",
        }}
      >
        <Link
          href="/"
          style={{ display: "flex", alignItems: "center", textDecoration: "none" }}
        >
          <Image 
            src="/images/tbc-ghana-logo-reverse-color.svg" 
            alt="TBC Ghana Logo" 
            width={120} 
            height={32} 
            priority
          />
        </Link>

        <div className="tbc-nav-links">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  font: `${isActive ? 600 : 500} 14.5px/1 'Inter'`,
                  color: isActive ? "#24D155" : "rgba(255,255,255,.82)",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                }}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/getinvolved"
            style={{
              background: "#24D155",
              color: "#14211F",
              font: "700 14px/1 'Inter'",
              padding: "11px 18px",
              borderRadius: 8,
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            Join the Circle
          </Link>
        </div>

        <button
          className="tbc-hamburger"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          style={{
            background: "none",
            border: "1px solid rgba(255,255,255,.3)",
            borderRadius: 8,
            width: 40,
            height: 40,
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            flexDirection: "column",
            gap: 4,
          }}
        >
          <span style={{ width: 18, height: 2, background: "#fff", display: "block" }} />
          <span style={{ width: 18, height: 2, background: "#fff", display: "block" }} />
          <span style={{ width: 18, height: 2, background: "#fff", display: "block" }} />
        </button>
      </nav>

      <div
        className={`tbc-mobile-panel${open ? " open" : ""}`}
        style={{
          flexDirection: "column",
          background: "#14211F",
          padding: "8px 40px 24px",
          gap: 4,
          borderBottom: "1px solid rgba(255,255,255,.07)",
        }}
      >
        {NAV_LINKS.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{
                font: `${isActive ? 600 : 500} 15px/1 'Inter'`,
                color: isActive ? "#24D155" : "rgba(255,255,255,.82)",
                textDecoration: "none",
                padding: "12px 0",
              }}
            >
              {link.label}
            </Link>
          );
        })}
        <Link
          href="/getinvolved"
          onClick={() => setOpen(false)}
          style={{
            background: "#24D155",
            color: "#14211F",
            font: "700 14px/1 'Inter'",
            padding: "12px 18px",
            borderRadius: 8,
            textDecoration: "none",
            textAlign: "center",
            marginTop: 8,
          }}
        >
          Join the Circle
        </Link>
      </div>
    </div>
  );
}
