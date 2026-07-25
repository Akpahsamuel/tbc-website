"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image, { ImageProps } from "next/image";

gsap.registerPlugin(ScrollTrigger);

interface ParallaxImageProps extends ImageProps {
  parallaxSpeed?: number; // e.g. 50 (moves 50px up/down based on scroll)
}

export default function ParallaxImage({ parallaxSpeed = 50, alt, ...props }: ParallaxImageProps) {
  const container = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useGSAP(
    () => {
      gsap.to(imgRef.current, {
        y: parallaxSpeed,
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: container }
  );

  return (
    <div ref={container} style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
      <Image 
        ref={imgRef} 
        alt={alt || ""} 
        {...props} 
        style={{ 
          ...props.style, 
          height: `calc(100% + ${Math.abs(parallaxSpeed) * 2}px)`, 
          top: -Math.abs(parallaxSpeed), 
          position: "absolute" 
        }} 
      />
    </div>
  );
}
