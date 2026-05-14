"use client";

import { useEffect } from "react";

const ATTR = "data-pf-reveal-init";

/**
 * Mounts a single IntersectionObserver that animates all `.pf-reveal`
 * elements when they enter the viewport. Add `className="pf-reveal"` on any
 * element you want animated.
 */
export const RevealObserver = () => {
  useEffect(() => {
    if (document.documentElement.getAttribute(ATTR) === "1") return;
    document.documentElement.setAttribute(ATTR, "1");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("pf-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );

    const observe = () => {
      document.querySelectorAll(".pf-reveal:not(.pf-in)").forEach((el) => {
        io.observe(el);
      });
    };
    observe();

    const mo = new MutationObserver(observe);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
      document.documentElement.removeAttribute(ATTR);
    };
  }, []);

  return null;
};

export default RevealObserver;
