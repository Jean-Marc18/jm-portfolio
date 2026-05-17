"use client";

import { useEffect, type RefObject } from "react";
import { gsap, motion, prefersReducedMotion } from "@/lib/gsap";

const DATA_ATTR = "data-stat-value";

/**
 * Animates numeric `<strong>` values inside `.ap-stat` elements: they tick
 * from 0 up to their original number when the stats row scrolls into view.
 * Non-numeric values (e.g. "UMOA", "AA") are left untouched.
 *
 * The original target is stored on `data-stat-value` so the count survives
 * React StrictMode double-mounts (otherwise the second mount would read
 * the already-zeroed text and animate 0 → 0).
 */
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
      // Preserve the original value across re-mounts: once a cell has been
      // observed, its textContent has been zeroed, so we read the truth
      // from the dataset attribute.
      const stored = cell.getAttribute(DATA_ATTR);
      const raw = (stored ?? cell.textContent?.trim() ?? "").trim();
      if (!stored) cell.setAttribute(DATA_ATTR, raw);

      // Capture leading digits + an optional trailing modifier (e.g. "2+", "03").
      const match = raw.match(/^(\d+)(\D*)$/);
      if (!match) return;
      const end = parseInt(match[1], 10);
      const suffix = match[2];
      const isPadded =
        raw.length > suffix.length + 1 && raw.startsWith("0");
      const padWidth = raw.length - suffix.length;

      // Snap to 0 immediately so the user never sees the "real" value
      // flash before the count starts.
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
