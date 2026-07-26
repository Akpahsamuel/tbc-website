"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface ScrambleTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function ScrambleText({ text, className = "", delay = 0 }: ScrambleTextProps) {
  const textRef = useRef<HTMLSpanElement>(null);
  const chars = "!<>-_\\\\/[]{}—=+*^?#________";

  useGSAP(
    () => {
      if (!textRef.current) return;

      const el = textRef.current;
      const originalText = text;
      const length = originalText.length;
      let frame = 0;
      let animationFrameId: number;
      const queue: { from: string; to: string; start: number; end: number; char?: string }[] = [];

      for (let i = 0; i < length; i++) {
        const from = chars[Math.floor(Math.random() * chars.length)];
        const to = originalText[i];
        const start = Math.floor(Math.random() * 40);
        const end = start + Math.floor(Math.random() * 40);
        queue.push({ from, to, start, end });
      }

      const update = () => {
        let output = "";
        let complete = 0;
        for (let i = 0, n = queue.length; i < n; i++) {
          let { from, to, start, end, char } = queue[i];
          if (frame >= end) {
            complete++;
            output += to;
          } else if (frame >= start) {
            if (!char || Math.random() < 0.28) {
              char = chars[Math.floor(Math.random() * chars.length)];
              queue[i].char = char;
            }
            output += `<span style="opacity: 0.5">${char}</span>`;
          } else {
            output += from;
          }
        }
        el.innerHTML = output;
        if (complete === queue.length) {
          cancelAnimationFrame(animationFrameId);
        } else {
          animationFrameId = requestAnimationFrame(update);
          frame++;
        }
      };

      // Delay start using GSAP delayedCall
      gsap.delayedCall(delay, () => {
        update();
      });

      return () => cancelAnimationFrame(animationFrameId);
    },
    { scope: textRef }
  );

  return (
    <span ref={textRef} className={className}>
      {text}
    </span>
  );
}
