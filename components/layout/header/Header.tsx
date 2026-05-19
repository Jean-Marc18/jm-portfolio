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
  const isFirstRun = useRef(true);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  // Build the timeline once paused, then play/reverse on toggle —
  // avoids GSAP's revert lifecycle racing with React re-renders.
  useGSAP(
    () => {
      const sheet = sheetRef.current;
      if (!sheet) return;

      const head = sheet.querySelector(".pf-menu-head");
      const links = sheet.querySelectorAll(".pf-menu-link");
      const foot = sheet.querySelectorAll(".pf-menu-foot > *");
      const innerEls = [head, ...links, ...foot].filter(Boolean);

      gsap.set(sheet, { yPercent: -100, autoAlpha: 0 });
      gsap.set(innerEls, { y: 28, autoAlpha: 0 });

      if (prefersReducedMotion()) {
        tlRef.current = gsap
          .timeline({ paused: true })
          .to([sheet, ...innerEls], {
            autoAlpha: 1,
            yPercent: 0,
            y: 0,
            duration: 0.01,
          });
        return;
      }

      tlRef.current = gsap
        .timeline({ paused: true })
        .to(sheet, {
          autoAlpha: 1,
          yPercent: 0,
          y: 0,
          duration: 0.5,
          ease: "power3.out",
        })
        .to(
          innerEls,
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.45,
            ease: motion.ease.out,
            stagger: 0.05,
          },
          "-=0.25",
        );
    },
    { scope: sheetRef },
  );

  useEffect(() => {
    const tl = tlRef.current;
    if (!tl) return;
    // The timeline is already paused at time 0 (closed) on first render.
    // Calling reverse() here would leave it in a completed/reversed state
    // and break the subsequent play().
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    if (menuOpen) {
      tl.timeScale(1).play();
    } else {
      tl.timeScale(1.4).reverse();
    }
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div
        ref={sheetRef}
        id="mobile-menu-sheet"
        className="pf-menu-sheet"
        role="dialog"
        aria-modal="true"
        aria-hidden={!menuOpen}
        aria-label={t.nav.menu}
        inert={!menuOpen}
      >
        <div className="pf-menu-head">
          <Link
            className="pf-brand"
            href="/"
            onClick={closeMenu}
            aria-label={`Jean-Marc Koffi — ${t.nav.home}`}
          >
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

      <header className="pf-nav backdrop-blur-sm">
        <div className="pf-nav-inner">
          <Link
            className="pf-brand"
            href="/"
            aria-label={`Jean-Marc Koffi — ${t.nav.home}`}
          >
            <Logo size="md" />
            <Pill
              leading={<StatusDot />}
              style={{ padding: "4px 10px", fontSize: 11 }}
            >
              {t.nav.available}
            </Pill>
          </Link>
          <nav className="pf-navlinks" aria-label={t.nav.menu}>
            {NAV_ORDER.map((k: RouteKey) => (
              <Link key={k} className="pf-link" href={routePaths[k]}>
                {t.nav[k]}
              </Link>
            ))}
          </nav>
          <div className="pf-nav-right">
            <div className="pf-nav-tools-desktop">
              <LanguageSwitch />
              <ThemeSwitch />
            </div>
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
              aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu-sheet"
              onClick={() => setMenuOpen(true)}
            >
              <Menu />
              {t.nav.menu}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
