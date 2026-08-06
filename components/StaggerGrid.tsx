"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface StaggerGridProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  staggerDelay?: number;
  direction?: "up" | "down" | "left" | "right" | "scale";
  triggerOffset?: string;
}

export default function StaggerGrid({
  children,
  className = "",
  style,
  staggerDelay = 0.1,
  direction = "up",
  triggerOffset = "top 80%",
}: StaggerGridProps) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      let x = 0;
      let y = 0;
      let scale = 1;

      switch (direction) {
        case "up":
          y = 40;
          break;
        case "down":
          y = -40;
          break;
        case "left":
          x = 40;
          break;
        case "right":
          x = -40;
          break;
        case "scale":
          scale = 0.8;
          break;
      }

      gsap.fromTo(
        container.current!.children,
        {
          opacity: 0,
          x,
          y,
          scale,
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: staggerDelay,
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
    <div ref={container} className={className} style={style}>
      {children}
    </div>
  );
}
