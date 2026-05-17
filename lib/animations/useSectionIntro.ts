"use client";

import { type RefObject } from "react";
import { gsap, motion, prefersReducedMotion, useGSAP } from "@/lib/gsap";
import { getCoverRemainingDelay } from "./cover";

export type SectionIntroOptions = {
  /** Ordered list of selectors inside the scope to stagger in. */
  selectors: string[];
  /** Initial Y offset in px (default 24). */
  fromY?: number;
  /** Stagger interval in seconds (default 0.08). */
  stagger?: number;
  /** Delay before the timeline starts (default 0.1). */
  delay?: number;
  /** Dependencies that should reset & replay the intro (e.g. locale). */
  dependencies?: unknown[];
};

/**
 * Plays a fade + slide-up stagger on a set of selectors inside `scope` on
 * mount. Designed for page hero intros where elements are already visible —
 * unlike `.pf-reveal` which waits for scroll. Honours reduced-motion.
 */
export const useSectionIntro = (
  scope: RefObject<HTMLElement | null>,
  options: SectionIntroOptions
) => {
  const {
    selectors,
    fromY = 24,
    stagger = 0.08,
    delay = 0.1,
    dependencies = [],
  } = options;

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const root = scope.current;
      if (!root) return;

      const targets = selectors
        .map((s) => root.querySelector<HTMLElement>(s))
        .filter((el): el is HTMLElement => el !== null);
      if (targets.length === 0) return;

      gsap.set(targets, { autoAlpha: 0, y: fromY });
      const coverDelay = getCoverRemainingDelay();
      gsap.to(targets, {
        autoAlpha: 1,
        y: 0,
        duration: motion.duration.base,
        ease: motion.ease.out,
        stagger,
        delay: coverDelay > 0 ? coverDelay : delay,
        overwrite: "auto",
      });
    },
    { scope, dependencies, revertOnUpdate: true }
  );
};
