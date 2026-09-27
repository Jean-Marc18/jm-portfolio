"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import {
  gsap,
  ScrollTrigger,
  motion,
  prefersReducedMotion,
} from "@/lib/gsap";
import { reserveCover } from "@/lib/animations/cover";
import { lenisInstance } from "./SmoothScroll";

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

    reserveCover(1.45);

    lenisInstance?.scrollTo(0, { immediate: true });
    window.scrollTo(0, 0);

    tlRef.current?.kill();

    tlRef.current = gsap.timeline({
      onComplete: () => {
        tlRef.current = null;
        ScrollTrigger.refresh();
        requestAnimationFrame(() => ScrollTrigger.refresh());
      },
    });

    tlRef.current
      .set(el, { yPercent: -100, autoAlpha: 1 })
      .to(el, { yPercent: 0, duration: 0.5, ease: "power3.inOut" })
      .to({}, { duration: 0.35 })
      .to(el, { yPercent: 100, duration: 0.6, ease: motion.ease.inOut })
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
