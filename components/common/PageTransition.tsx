"use client";

import { usePathname } from "next/navigation";
import { useRef } from "react";
import { gsap, motion, prefersReducedMotion, useGSAP } from "@/lib/gsap";

/**
 * Wraps page children and plays a short fade/slide-in transition every time
 * the pathname changes. Cheap, no Suspense or experimental APIs required.
 */
export const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const el = ref.current;
      if (!el) return;
      gsap.fromTo(
        el,
        { opacity: 0, y: 12 },
        {
          opacity: 1,
          y: 0,
          duration: motion.duration.fast,
          ease: motion.ease.out,
        }
      );
    },
    { dependencies: [pathname], scope: ref }
  );

  return <div ref={ref}>{children}</div>;
};

export default PageTransition;
