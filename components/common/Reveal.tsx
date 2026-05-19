"use client";

import { useEffect } from "react";
import {
  gsap,
  ScrollTrigger,
  motion,
  prefersReducedMotion,
} from "@/lib/gsap";
import { getCoverRemainingDelay } from "@/lib/animations/cover";

const INIT_ATTR = "data-pf-reveal-init";
const TRACKED_ATTR = "data-pf-reveal-tracked";

export const RevealObserver = () => {
  useEffect(() => {
    if (document.documentElement.getAttribute(INIT_ATTR) === "1") return;
    document.documentElement.setAttribute(INIT_ATTR, "1");

    const reduced = prefersReducedMotion();

    const reveal = (els: Element[]) => {
      els.forEach((el) => el.classList.add("pf-in"));

      if (reduced) {
        gsap.set(els, { autoAlpha: 1, y: 0 });
        return;
      }

      const coverDelay = getCoverRemainingDelay();
      gsap.to(els, {
        autoAlpha: 1,
        y: 0,
        duration: motion.duration.base,
        ease: motion.ease.out,
        stagger: 0.08,
        delay: coverDelay,
        overwrite: "auto",
      });
    };

    const trackFreshTargets = () => {
      const fresh = Array.from(
        document.querySelectorAll<HTMLElement>(
          `.pf-reveal:not([${TRACKED_ATTR}])`
        )
      );
      if (fresh.length === 0) return;

      fresh.forEach((el) => el.setAttribute(TRACKED_ATTR, "1"));

      ScrollTrigger.batch(fresh, {
        start: "top 88%",
        once: true,
        onEnter: (batch) => reveal(batch),
      });
    };

    trackFreshTargets();

    // Catch reveal nodes appended after first paint (route changes, locale switch).
    const mo = new MutationObserver(trackFreshTargets);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      mo.disconnect();
      ScrollTrigger.getAll().forEach((t) => t.kill());
      document.documentElement.removeAttribute(INIT_ATTR);
      document
        .querySelectorAll(`[${TRACKED_ATTR}]`)
        .forEach((el) => el.removeAttribute(TRACKED_ATTR));
    };
  }, []);

  return null;
};

export default RevealObserver;
