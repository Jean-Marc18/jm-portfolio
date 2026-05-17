"use client";

import { useRef, type ReactNode } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";

export type ParallaxProps = {
  children: ReactNode;
  /** Total Y range in pixels traversed across the visible portion. Negative = upward. */
  amount?: number;
  className?: string;
};

/**
 * Subtle parallax for a single child block. Animates the inner wrapper's
 * Y translation, driven by scroll, via ScrollTrigger + scrub.
 */
export const Parallax = ({ children, amount = -60, className }: ParallaxProps) => {
  const wrapper = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const el = wrapper.current;
      if (!el) return;

      gsap.fromTo(
        el,
        { y: -amount / 2 },
        {
          y: amount / 2,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    },
    { scope: wrapper }
  );

  return (
    <div ref={wrapper} className={className} style={{ willChange: "transform" }}>
      {children}
    </div>
  );
};

export default Parallax;
