"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";

/**
 * Module-level Lenis instance reference, so other client components
 * (e.g. PageTransition) can call `lenisInstance?.scrollTo(0, …)` when a
 * route changes — Lenis would otherwise keep its previous scroll value,
 * confusing ScrollTrigger which reads from it on every scroll event.
 */
export let lenisInstance: Lenis | null = null;

/**
 * Drives smooth scrolling via Lenis, synced to GSAP's ticker so that
 * ScrollTrigger reads the right scroll position. Disabled when the user has
 * `prefers-reduced-motion`.
 */
export const SmoothScroll = () => {
  useEffect(() => {
    if (prefersReducedMotion()) return;

    const lenis = new Lenis({
      duration: 1.05,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      gestureOrientation: "vertical",
      smoothWheel: true,
      touchMultiplier: 1.5,
    });
    lenisInstance = lenis;

    const raf = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    lenis.on("scroll", ScrollTrigger.update);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
      lenisInstance = null;
    };
  }, []);

  return null;
};

export default SmoothScroll;
