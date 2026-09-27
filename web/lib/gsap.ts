"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);
}

/** Honour user's reduced-motion preference. */
export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

/** Default easing + duration tokens for the portfolio. */
export const motion = {
  ease: {
    out: "power3.out",
    inOut: "power2.inOut",
    spring: "back.out(1.4)",
  },
  duration: {
    fast: 0.4,
    base: 0.7,
    slow: 1.1,
  },
} as const;

export { gsap, ScrollTrigger, SplitText, useGSAP };
