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
  titleSelector: string;
  followups?: string[];
  fromY?: number;
  followupStagger?: number;
  delay?: number;
  dependencies?: unknown[];
};

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

      // Wait for an active cover (preloader / page transition) to clear
      // before playing — otherwise the intro animates behind it.
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
