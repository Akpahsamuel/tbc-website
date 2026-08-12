"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Only enable custom cursor on devices with a mouse/fine pointer
      if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
        return;
      }

      // Create quick setters for maximum performance
      const xTo = gsap.quickTo(cursorRef.current, "x", { duration: 0.15, ease: "power3" });
      const yTo = gsap.quickTo(cursorRef.current, "y", { duration: 0.15, ease: "power3" });

      const xDotTo = gsap.quickTo(cursorDotRef.current, "x", { duration: 0.05, ease: "power3" });
      const yDotTo = gsap.quickTo(cursorDotRef.current, "y", { duration: 0.05, ease: "power3" });

      const onMouseMove = (e: MouseEvent) => {
        xTo(e.clientX);
        yTo(e.clientY);
        xDotTo(e.clientX);
        yDotTo(e.clientY);
      };

      // Add magnetic hover effect for links and buttons
      const onMouseEnterLink = () => {
        gsap.to(cursorRef.current, { scale: 3, backgroundColor: "rgba(36,209,85,0.1)", border: "1px solid rgba(36,209,85,0.5)", duration: 0.3 });
        gsap.to(cursorDotRef.current, { scale: 0, duration: 0.3 });
      };

      const onMouseLeaveLink = () => {
        gsap.to(cursorRef.current, { scale: 1, backgroundColor: "transparent", border: "1px solid rgba(255,255,255,0.2)", duration: 0.3 });
        gsap.to(cursorDotRef.current, { scale: 1, duration: 0.3 });
      };

      window.addEventListener("mousemove", onMouseMove);

      const interactiveElements = document.querySelectorAll("a, button");
      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", onMouseEnterLink);
        el.addEventListener("mouseleave", onMouseLeaveLink);
      });

      return () => {
        window.removeEventListener("mousemove", onMouseMove);
        interactiveElements.forEach((el) => {
          el.removeEventListener("mouseenter", onMouseEnterLink);
          el.removeEventListener("mouseleave", onMouseLeaveLink);
        });
      };
    },
    { scope: cursorRef } // Scope to prevent memory leaks
  );

  return (
    <>
      <div
        ref={cursorRef}
        className="tbc-custom-cursor"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 32,
          height: 32,
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.2)",
          pointerEvents: "none",
          transform: "translate(-50%, -50%)",
          zIndex: 9999,
          mixBlendMode: "difference", // Inverts colors behind it!
        }}
      />
      <div
        ref={cursorDotRef}
        className="tbc-custom-cursor"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 6,
          height: 6,
          borderRadius: "50%",
          backgroundColor: "#24D155",
          pointerEvents: "none",
          transform: "translate(-50%, -50%)",
          zIndex: 9999,
        }}
      />
    </>
  );
}
