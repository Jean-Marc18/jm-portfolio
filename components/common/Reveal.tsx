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

/**
 * Animates every `.pf-reveal` element on entry using GSAP's
 * `ScrollTrigger.batch` — the idiomatic GSAP alternative to
 * IntersectionObserver. Elements that enter the viewport in the same RAF
 * tick are animated together with a coordinated stagger, which looks more
 * intentional than independent per-element fades.
 *
 * A MutationObserver picks up `.pf-reveal` nodes added after the initial
 * scan (e.g. by client-only sections) and batches them too.
 */
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

      // If a cover (preloader or page transition) is still in place,
      // delay the reveal so it doesn't burn under the overlay.
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

    // Pick up reveal elements appended after the initial paint
    // (page transitions, locale switch re-renders, etc.).
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
