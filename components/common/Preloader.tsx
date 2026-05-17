"use client";

import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/ui";
import { gsap, motion, prefersReducedMotion, useGSAP } from "@/lib/gsap";

const SESSION_KEY = "jmk-preloaded";

/**
 * Full-screen intro overlay shown once per session.
 *
 * Sequence:
 *  1. Logo fades + scales in.
 *  2. Brief hold.
 *  3. Logo fades out as the overlay slides up off-screen.
 *  4. Component unmounts and the page is interactive.
 *
 * Skipped automatically when the user already saw it this session, or when
 * they prefer reduced motion.
 */
export const Preloader = () => {
  const root = useRef<HTMLDivElement>(null);
  // Compute visibility eagerly so SSR renders consistently with the client.
  // We use sessionStorage so the preloader only plays once per browser tab.
  const [show, setShow] = useState<boolean | null>(null);

  // Decide on mount whether to show. Lock body scroll while it's visible.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const alreadyShown =
      window.sessionStorage.getItem(SESSION_KEY) === "1";
    const reduced = prefersReducedMotion();

    if (alreadyShown || reduced) {
      setShow(false);
      window.sessionStorage.setItem(SESSION_KEY, "1");
      return;
    }

    setShow(true);
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useGSAP(
    () => {
      if (show !== true) return;
      const el = root.current;
      if (!el) return;

      const tl = gsap.timeline({
        onComplete: () => {
          window.sessionStorage.setItem(SESSION_KEY, "1");
          document.body.style.overflow = "";
          setShow(false);
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
    { scope: root, dependencies: [show] }
  );

  if (show !== true) return null;

  return (
    <div ref={root} className="jm-preloader" aria-hidden="true">
      <div data-preload-logo className="jm-preloader-logo">
        <Logo size="md" />
      </div>
    </div>
  );
};

export default Preloader;
