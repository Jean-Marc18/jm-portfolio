"use client";

import { useEffect, type RefObject } from "react";
import { gsap, motion, prefersReducedMotion } from "@/lib/gsap";

const DATA_ATTR = "data-stat-value";

export const useStatsCountUp = (scope: RefObject<HTMLElement | null>) => {
  useEffect(() => {
    if (prefersReducedMotion()) return;
    const root = scope.current;
    if (!root) return;

    const cells = Array.from(
      root.querySelectorAll<HTMLElement>(".ap-stat strong")
    );
    if (cells.length === 0) return;

    const tweens: gsap.core.Tween[] = [];
    const observers: IntersectionObserver[] = [];

    cells.forEach((cell) => {
      // Read the original value from data-attr so we survive React Strict
      // Mode double-mounts (textContent has been zeroed by the first run).
      const stored = cell.getAttribute(DATA_ATTR);
      const raw = (stored ?? cell.textContent?.trim() ?? "").trim();
      if (!stored) cell.setAttribute(DATA_ATTR, raw);

      const match = raw.match(/^(\d+)(\D*)$/);
      if (!match) return;
      const end = parseInt(match[1], 10);
      const suffix = match[2];
      const isPadded =
        raw.length > suffix.length + 1 && raw.startsWith("0");
      const padWidth = raw.length - suffix.length;

      cell.textContent = `0${suffix}`;

      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (!entry?.isIntersecting) return;

          const obj = { value: 0 };
          const tween = gsap.to(obj, {
            value: end,
            duration: motion.duration.slow,
            ease: motion.ease.out,
            snap: { value: 1 },
            onUpdate: () => {
              const rounded = Math.round(obj.value);
              const text = isPadded
                ? String(rounded).padStart(padWidth, "0")
                : String(rounded);
              cell.textContent = `${text}${suffix}`;
            },
          });
          tweens.push(tween);
          observer.disconnect();
        },
        { threshold: 0.3, rootMargin: "0px 0px -10% 0px" }
      );

      observer.observe(cell);
      observers.push(observer);
    });

    return () => {
      observers.forEach((o) => o.disconnect());
      tweens.forEach((t) => t.kill());
    };
  }, [scope]);
};
