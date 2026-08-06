"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface PinnedSectionProps {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
  className?: string;
  leftClassName?: string;
  rightClassName?: string;
}

export default function PinnedSection({
  leftContent,
  rightContent,
  className = "",
  leftClassName = "",
  rightClassName = "",
}: PinnedSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Only run pinning on desktop (min-width: 900px matches our tbc-split-grid breakpoint)
      let mm = gsap.matchMedia();

      mm.add("(min-width: 901px)", () => {
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top top+=120", // When container hits 120px from top
          end: "bottom bottom", // End when container bottom hits viewport bottom
          pin: leftRef.current,
          pinSpacing: false,    // Let right side scroll normally alongside it
        });
      });

      return () => mm.revert(); // clean up
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className={className} style={{ position: "relative", alignItems: "flex-start" }}>
      <div ref={leftRef} className={leftClassName}>
        {leftContent}
      </div>
      <div ref={rightRef} className={rightClassName}>
        {rightContent}
      </div>
    </div>
  );
}
