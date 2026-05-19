"use client";

import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/ui";
import {
  gsap,
  ScrollTrigger,
  motion,
  useGSAP,
} from "@/lib/gsap";
import { reserveCover } from "@/lib/animations/cover";

const SESSION_KEY = "jmk-preloaded";
const PRELOADER_DURATION = 2.0;

/**
 * Reserve the cover slot at module-load time, BEFORE React mounts and
 * therefore before any hero's `useGSAP` (useLayoutEffect) fires. Without
 * this, the hero intro would read coverDelay = 0 and start animating
 * underneath the preloader. Running once per JS chunk load (i.e. per
 * page load) is exactly what we want.
 */
if (typeof window !== "undefined") {
  const alreadyShown =
    window.sessionStorage.getItem(SESSION_KEY) === "1";
  const reduced = window.matchMedia?.(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  if (!alreadyShown && !reduced) {
    reserveCover(PRELOADER_DURATION);
  }
}

/**
 * Full-screen intro overlay shown once per session.
 *
 * The overlay div is ALWAYS rendered (server + client) so it covers the
 * page from the very first paint, before React hydrates. The inline
 * script in <head> adds `html.jmk-preloaded` when the user has already
 * seen it this session (or prefers reduced motion) — CSS then hides the
 * overlay instantly, no flash of the hero text underneath.
 *
 * On first visit, this component runs the entrance/exit animation and
 * sets the session flag + html class so reloads skip the overlay.
 */
export const Preloader = () => {
  const root = useRef<HTMLDivElement>(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    // If the inline head script already marked the html as "preloaded",
    // the CSS hides our overlay — nothing to do.
    if (document.documentElement.classList.contains("jmk-preloaded")) {
      return;
    }
    document.body.style.overflow = "hidden";
    setShouldAnimate(true);
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useGSAP(
    () => {
      if (!shouldAnimate) return;
      const el = root.current;
      if (!el) return;

      const tl = gsap.timeline({
        onComplete: () => {
          window.sessionStorage.setItem(SESSION_KEY, "1");
          document.documentElement.classList.add("jmk-preloaded");
          document.body.style.overflow = "";
          // Recompute ScrollTrigger positions now that the preloader is
          // off-screen and the real layout is settled.
          ScrollTrigger.refresh();
        },
      });

      tl.fromTo(
        "[data-preload-logo]",
        { autoAlpha: 0, scale: 0.9 },
        {
          autoAlpha: 1,
          scale: 1,
          duration: motion.duration.base,
          ease: motion.ease.out,
        }
      )
        .to(
          "[data-preload-logo]",
          {
            autoAlpha: 0,
            duration: 0.35,
            ease: "power2.in",
          },
          "+=0.4"
        )
        .to(
          el,
          {
            yPercent: -100,
            duration: 0.7,
            ease: "power3.inOut",
          },
          "-=0.15"
        );
    },
    { scope: root, dependencies: [shouldAnimate] }
  );

  return (
    <div ref={root} className="jm-preloader" aria-hidden="true">
      <div data-preload-logo className="jm-preloader-logo">
        <Logo size="md" />
      </div>
    </div>
  );
};

export default Preloader;
