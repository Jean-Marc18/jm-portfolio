"use client";

import { type RefObject } from "react";
import {
  gsap,
  SplitText,
  motion,
  prefersReducedMotion,
  useGSAP,
} from "@/lib/gsap";
import { getCoverRemainingDelay } from "./cover";

export type SplitIntroOptions = {
  /** Selector of the heading to split into lines (e.g. `[data-intro-title]`). */
  titleSelector: string;
  /**
   * Selectors for elements that fade-up after the title lines have started
   * revealing. Order matters — they stagger in that order.
   */
  followups?: string[];
  /** Initial Y offset for followups in px (default 24). */
  fromY?: number;
  /** Stagger between followup elements in seconds (default 0.1). */
  followupStagger?: number;
  /** Delay before the title timeline starts (default 0.1). */
  delay?: number;
  /** Dependencies that should reset & replay the intro (e.g. locale, slug). */
  dependencies?: unknown[];
};

/**
 * Hero entry timeline used across pages:
 * 1. Splits the title into lines and reveals them with a yPercent clip mask
 *    (the parent `<h1>` carries `overflow: hidden` per line via the
 *    `ho-h1-line` linesClass — see globals.css).
 * 2. Followup elements fade + slide up, slightly overlapping the title tail.
 *
 * Respects `prefers-reduced-motion`, reverts SplitText cleanly when the
 * locale changes (so React can re-render without DOM conflicts).
 */
export const useSplitIntro = (
  scope: RefObject<HTMLElement | null>,
  options: SplitIntroOptions
) => {
  const {
    titleSelector,
    followups = [],
    fromY = 24,
    followupStagger = 0.1,
    delay = 0.1,
    dependencies = [],
  } = options;

  useGSAP(
    () => {
      const root = scope.current;
      if (!root) return;

      const titleEl = root.querySelector<HTMLElement>(titleSelector);
      if (!titleEl) return;

      const followupEls = followups
        .map((s) => root.querySelector<HTMLElement>(s))
        .filter((el): el is HTMLElement => el !== null);

      // Reduced motion: just show everything in place.
      if (prefersReducedMotion()) {
        gsap.set([titleEl, ...followupEls], { autoAlpha: 1, y: 0 });
        return;
      }

      const split = new SplitText(titleEl, {
        type: "lines",
        linesClass: "ho-h1-line",
      });

      gsap.set(split.lines, { yPercent: 110, opacity: 0 });
      gsap.set(followupEls, { autoAlpha: 0, y: fromY });

      // If a cover (preloader or page transition) is still on screen,
      // wait for it to finish before starting the intro — otherwise the
      // animation plays behind it and the user never sees it.
      const coverDelay = getCoverRemainingDelay();
      const effectiveDelay = coverDelay > 0 ? coverDelay : delay;

      const tl = gsap.timeline({ delay: effectiveDelay });

      tl.to(split.lines, {
        yPercent: 0,
        opacity: 1,
        duration: motion.duration.slow,
        ease: motion.ease.out,
        stagger: 0.09,
      });

      if (followupEls.length > 0) {
        tl.to(
          followupEls,
          {
            autoAlpha: 1,
            y: 0,
            duration: motion.duration.base,
            ease: motion.ease.out,
            stagger: followupStagger,
            overwrite: "auto",
          },
          "-=0.55"
        );
      }

      return () => {
        split.revert();
      };
    },
    { scope, dependencies, revertOnUpdate: true }
  );
};
