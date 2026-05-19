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

// Reserve the cover at module-load — before React mounts and before any
// hero's useGSAP fires. Otherwise heroes read coverDelay = 0 and animate
// under the preloader.
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

// Always renders the overlay so SSR ships it. The inline <head> script
// in layout.tsx adds `html.jmk-preloaded` on return visits, and CSS
// hides this overlay instantly — no hero flash before mount.
export const Preloader = () => {
  const root = useRef<HTMLDivElement>(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
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
          { autoAlpha: 0, duration: 0.35, ease: "power2.in" },
          "+=0.4"
        )
        .to(
          el,
          { yPercent: -100, duration: 0.7, ease: "power3.inOut" },
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
