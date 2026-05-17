"use client";

import LanguageSwitch from "@/components/common/LanguageSwitch";
import ThemeSwitch from "@/components/common/ThemeSwitch";
import { ButtonLink, Logo, Pill, StatusDot } from "@/components/ui";
import { Menu } from "@/components/ui/icons";
import { NAV_ORDER, routePaths, type RouteKey } from "@/constants";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { gsap, motion, prefersReducedMotion, useGSAP } from "@/lib/gsap";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const EMAIL = "mailto:jeanmarc.dev.18@gmail.com";

const SOCIAL = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/jean-marc-koffi/" },
  { label: "GitHub", href: "https://github.com/Jean-Marc18" },
  { label: "WhatsApp", href: "https://wa.me/+2250768910092" },
];

const Header = () => {
  const { t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const sheetRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  // Body scroll lock + restore on unmount.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close menu on Escape.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  // Enter / exit timeline driven by `menuOpen`. The sheet stays mounted
  // so the exit can play before it disappears.
  useGSAP(
    () => {
      const sheet = sheetRef.current;
      if (!sheet) return;
      if (prefersReducedMotion()) {
        gsap.set(sheet, {
          autoAlpha: menuOpen ? 1 : 0,
          yPercent: 0,
        });
        return;
      }

      // Cancel any in-flight animation so spam-clicks don't accumulate.
      tlRef.current?.kill();

      const head = sheet.querySelector(".pf-menu-head");
      const links = sheet.querySelectorAll(".pf-menu-link");
      const foot = sheet.querySelectorAll(".pf-menu-foot > *");
      const innerEls = [head, ...links, ...foot].filter(Boolean);

      if (menuOpen) {
        // ── ENTER ─────────────────────────────────────────────
        gsap.set(sheet, { autoAlpha: 1 });
        tlRef.current = gsap
          .timeline()
          .fromTo(
            sheet,
            { yPercent: -100 },
            {
              yPercent: 0,
              duration: 0.5,
              ease: "power3.out",
            }
          )
          .fromTo(
            innerEls,
            { y: 28, autoAlpha: 0 },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.45,
              ease: motion.ease.out,
              stagger: 0.05,
            },
            "-=0.25"
          );
      } else {
        // ── EXIT ──────────────────────────────────────────────
        tlRef.current = gsap.timeline({
          onComplete: () => {
            gsap.set(sheet, { autoAlpha: 0 });
          },
        });
        tlRef.current
          .to(innerEls, {
            y: -16,
            autoAlpha: 0,
            duration: 0.2,
            ease: "power2.in",
            stagger: { each: 0.02, from: "end" },
          })
          .to(
            sheet,
            {
              yPercent: -100,
              duration: 0.4,
              ease: "power3.in",
            },
            "-=0.05"
          );
      }
    },
    { dependencies: [menuOpen], scope: sheetRef }
  );

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div
        ref={sheetRef}
        className="pf-menu-sheet"
        role="dialog"
        aria-modal="true"
        aria-hidden={!menuOpen}
        aria-label={t.nav.menu}
        // `inert` removes the subtree from focus / a11y tree when closed.
        {...(!menuOpen ? { inert: "" as unknown as boolean } : {})}
      >
        <div className="pf-menu-head">
          <Link className="pf-brand" href="/" onClick={closeMenu}>
            <Logo size="md" />
          </Link>
          <button
            type="button"
            className="pf-menu-close"
            aria-label="Fermer le menu"
            onClick={closeMenu}
          >
            ×
          </button>
        </div>

        <nav className="pf-menu-nav">
          {NAV_ORDER.map((k: RouteKey) => (
            <Link
              key={k}
              className="pf-menu-link"
              href={routePaths[k]}
              onClick={closeMenu}
            >
              {t.nav[k]}
              <span className="pf-menu-link-arrow" aria-hidden="true">
                →
              </span>
            </Link>
          ))}
        </nav>

        <div className="pf-menu-foot">
          <ButtonLink
            href={EMAIL}
            variant="primary"
            style={{ justifyContent: "center" }}
          >
            jeanmarc.dev.18@gmail.com
          </ButtonLink>

          <div className="pf-menu-tools">
            <LanguageSwitch />
            <ThemeSwitch />
          </div>

          <div className="pf-menu-social">
            {SOCIAL.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {s.label} ↗
              </a>
            ))}
          </div>
        </div>
      </div>

      <nav className="pf-nav backdrop-blur-sm">
        <div className="pf-nav-inner">
          <Link className="pf-brand" href="/">
            <Logo size="md" />
            <Pill
              leading={<StatusDot />}
              style={{ padding: "4px 10px", fontSize: 11 }}
            >
              {t.nav.available}
            </Pill>
          </Link>
          <div className="pf-navlinks">
            {NAV_ORDER.map((k: RouteKey) => (
              <Link key={k} className="pf-link" href={routePaths[k]}>
                {t.nav[k]}
              </Link>
            ))}
          </div>
          <div className="pf-nav-right">
            <LanguageSwitch />
            <ThemeSwitch />
            <ButtonLink
              href={EMAIL}
              variant="ghost"
              className="pf-nav-cta"
              style={{ padding: "8px 14px", fontSize: 13 }}
            >
              {t.nav.emailCta}
            </ButtonLink>
            <button
              type="button"
              className="pf-menubtn"
              aria-label="Ouvrir le menu"
              onClick={() => setMenuOpen(true)}
            >
              <Menu />
              {t.nav.menu}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
