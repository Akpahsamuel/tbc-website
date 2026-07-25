"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  distance?: number;
  triggerOffset?: string;
  style?: React.CSSProperties;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.8,
  distance = 50,
  triggerOffset = "top 85%",
  style,
}: ScrollRevealProps) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      let x = 0;
      let y = 0;

      switch (direction) {
        case "up":
          y = distance;
          break;
        case "down":
          y = -distance;
          break;
        case "left":
          x = distance;
          break;
        case "right":
          x = -distance;
          break;
      }

      gsap.fromTo(
        container.current,
        {
          opacity: 0,
          x,
          y,
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container.current,
            start: triggerOffset,
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: container }
  );

  return (
    <div ref={container} className={className} style={{ ...style, opacity: 0 }}>
      {children}
    </div>
  );
}
