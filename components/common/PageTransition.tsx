"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { gsap, motion, prefersReducedMotion } from "@/lib/gsap";
import { reserveCover } from "@/lib/animations/cover";

/**
 * Cover-sweep page transition. On each pathname change, an ink panel
 * drops in from the top, holds in place long enough to mask any
 * SplitText / GSAP setup flash on the incoming hero, then exits by
 * sliding off the bottom.
 *
 * Skips the initial mount (Preloader owns the first entry). Kills any
 * in-flight timeline if the user navigates again before completion.
 */
export const PageTransition = () => {
  const pathname = usePathname();
  const overlay = useRef<HTMLDivElement>(null);
  const firstRender = useRef(true);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    if (prefersReducedMotion()) return;
    const el = overlay.current;
    if (!el) return;

    // Tell the incoming page's hero intro to wait until the cover is
    // out of the way (otherwise the SplitText animation plays under it).
    // 0.5s in + 0.35s hold + 0.6s out = 1.45s total.
    reserveCover(1.45);

    tlRef.current?.kill();

    tlRef.current = gsap.timeline({
      onComplete: () => {
        tlRef.current = null;
      },
    });

    tlRef.current
      // Enter from the top (above viewport).
      .set(el, { yPercent: -100, autoAlpha: 1 })
      .to(el, {
        yPercent: 0,
        duration: 0.5,
        ease: "power3.inOut",
      })
      // Hold in covering position long enough to mask the destination
      // page's hero intro flash (~300ms covers SplitText setup + Strict
      // Mode double-mount in dev).
      .to({}, { duration: 0.35 })
      // Exit by sliding down off the bottom.
      .to(el, {
        yPercent: 100,
        duration: 0.6,
        ease: motion.ease.inOut,
      })
      .set(el, { autoAlpha: 0, yPercent: -100 });

    return () => {
      tlRef.current?.kill();
    };
  }, [pathname]);

  return (
    <div ref={overlay} aria-hidden="true" className="jm-page-transition" />
  );
};

export default PageTransition;
