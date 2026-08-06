"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface ParallaxElementProps {
  children?: React.ReactNode;
  className?: string;
  speed?: number; // e.g. 50 (moves 50px depending on scroll)
  style?: React.CSSProperties;
}

export default function ParallaxElement({
  children,
  className = "",
  speed = 100,
  style,
}: ParallaxElementProps) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to(container.current, {
        y: speed, // Positive so it moves down relative to container (resists scrolling up)
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom", // Start when top of element hits bottom of viewport
          end: "bottom top",   // End when bottom of element hits top of viewport
          scrub: true,         // Link animation progress directly to scroll position
        },
      });
    },
    { scope: container }
  );

  return (
    <div ref={container} className={className} style={{ ...style, willChange: "transform" }}>
      {children}
    </div>
  );
}
