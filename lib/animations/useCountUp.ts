"use client";

import { type RefObject } from "react";
import {
  gsap,
  ScrollTrigger,
  motion,
  prefersReducedMotion,
  useGSAP,
} from "@/lib/gsap";

/**
 * Animates numeric `<strong>` values inside `.ap-stat` elements: they tick
 * from 0 up to their original number when the stats row scrolls into view.
 * Non-numeric values (e.g. "UMOA", "AA") are left untouched.
 */
export const useStatsCountUp = (scope: RefObject<HTMLElement | null>) => {
  useGSAP(
    () => {
      const root = scope.current;
      if (!root) return;
      if (prefersReducedMotion()) return;

      const cells = root.querySelectorAll<HTMLElement>(".ap-stat strong");
      cells.forEach((cell) => {
        const raw = cell.textContent?.trim() ?? "";
        // Capture leading digits + an optional trailing modifier (e.g. "2+", "03").
        const match = raw.match(/^(\d+)(\D*)$/);
        if (!match) return;
        const end = parseInt(match[1], 10);
        const suffix = match[2];
        const obj = { value: 0 };

        cell.textContent = `0${suffix}`;
        gsap.to(obj, {
          value: end,
          duration: motion.duration.slow,
          ease: motion.ease.out,
          snap: { value: 1 },
          onUpdate: () => {
            const padded =
              raw.length > suffix.length + 1 && raw.startsWith("0")
                ? String(Math.round(obj.value)).padStart(raw.length - suffix.length, "0")
                : String(Math.round(obj.value));
            cell.textContent = `${padded}${suffix}`;
          },
          scrollTrigger: {
            trigger: cell,
            start: "top 90%",
            once: true,
          },
        });
      });

      return () => {
        ScrollTrigger.getAll()
          .filter((t) => t.trigger && root.contains(t.trigger as Node))
          .forEach((t) => t.kill());
      };
    },
    { scope }
  );
};
