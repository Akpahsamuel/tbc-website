"use client";

import { useRef, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface HorizontalScrollTrackProps {
  children: ReactNode;
  className?: string;
}

export default function HorizontalScrollTrack({ children, className = "" }: HorizontalScrollTrackProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Only do horizontal scroll on desktop (wider screens)
      let mm = gsap.matchMedia();

      mm.add("(min-width: 901px)", () => {
        if (!containerRef.current || !trackRef.current) return;

        // Calculate how far we need to move the track
        // It's the total width of the track minus the viewport width
        const getScrollAmount = () => {
          let trackWidth = trackRef.current!.scrollWidth;
          return -(trackWidth - window.innerWidth + 80); // 80px for some padding
        };

        const tween = gsap.to(trackRef.current, {
          x: getScrollAmount,
          ease: "none",
        });

        // Pin the whole parent section so the spacer covers heading + cards
        const sectionEl =
          containerRef.current.closest("section") ??
          containerRef.current.parentElement ??
          containerRef.current;

        ScrollTrigger.create({
          trigger: sectionEl,
          start: "top top+=80",
          end: () => `+=${getScrollAmount() * -1}`,
          pin: true,
          animation: tween,
          scrub: 1,
          invalidateOnRefresh: true,
        });
      });

      return () => mm.revert();
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className={`tbc-horizontal-scroll-container ${className}`}>
      <div 
        ref={trackRef} 
        className="tbc-horizontal-scroll-track"
      >
        {children}
      </div>
    </div>
  );
}
