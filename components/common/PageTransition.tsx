"use client";

import { usePathname } from "next/navigation";
import { useRef } from "react";
import { gsap, motion, prefersReducedMotion, useGSAP } from "@/lib/gsap";

/**
 * Cover-sweep page transition. On each pathname change, a dark panel slides
 * up from the bottom, briefly covers the screen, then slides off the top —
 * masking the route swap underneath.
 *
 * The first render is skipped (the Preloader handles initial entry).
 * Respects `prefers-reduced-motion` — becomes a no-op.
 */
export const PageTransition = () => {
  const pathname = usePathname();
  const overlay = useRef<HTMLDivElement>(null);
  const firstRender = useRef(true);

  useGSAP(
    () => {
      if (firstRender.current) {
        firstRender.current = false;
        return;
      }
      if (prefersReducedMotion()) return;
      const el = overlay.current;
      if (!el) return;

      gsap
        .timeline()
        .set(el, { yPercent: 100, visibility: "visible" })
        .to(el, {
          yPercent: 0,
          duration: 0.45,
          ease: "power3.inOut",
        })
        .to(
          el,
          {
            yPercent: -100,
            duration: 0.55,
            ease: motion.ease.inOut,
          },
          "+=0.08"
        )
        .set(el, { visibility: "hidden", yPercent: 100 });
    },
    { dependencies: [pathname] }
  );

  return (
    <div
      ref={overlay}
      aria-hidden="true"
      className="jm-page-transition"
    />
  );
};

export default PageTransition;
