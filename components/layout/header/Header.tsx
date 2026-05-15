"use client";

import LanguageSwitch from "@/components/common/LanguageSwitch";
import ThemeSwitch from "@/components/common/ThemeSwitch";
import { ButtonLink, Logo, Pill, StatusDot } from "@/components/ui";
import { Menu } from "@/components/ui/icons";
import { NAV_ORDER, routePaths, type RouteKey } from "@/constants";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { useEffect, useState } from "react";

const EMAIL = "mailto:jeanmarc.dev.18@gmail.com";

const SOCIAL = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/jean-marc-koffi/" },
  { label: "GitHub", href: "https://github.com/Jean-Marc18" },
  { label: "WhatsApp", href: "https://wa.me/+2250768910092" },
];

const Header = () => {
  const { t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {menuOpen && (
        <div className="pf-menu-sheet" role="dialog" aria-modal="true">
          <button
            type="button"
            className="pf-menu-close"
            aria-label="Fermer le menu"
            onClick={closeMenu}
          >
            ×
          </button>
          <div
            style={{ marginTop: 24, display: "flex", flexDirection: "column" }}
          >
            <a href="/" onClick={closeMenu}>
              {t.nav.home}
            </a>
            {NAV_ORDER.map((k: RouteKey) => (
              <a key={k} href={routePaths[k]} onClick={closeMenu}>
                {t.nav[k]}
              </a>
            ))}
          </div>
          <ButtonLink
            href={EMAIL}
            variant="primary"
            style={{ marginTop: 32, justifyContent: "center" }}
          >
            jeanmarc.dev.18@gmail.com
          </ButtonLink>
          <div
            style={{
              display: "flex",
              gap: 12,
              marginTop: 24,
              alignItems: "center",
            }}
          >
            <LanguageSwitch />
            <ThemeSwitch />
          </div>
          <div
            style={{
              marginTop: "auto",
              display: "flex",
              gap: 18,
              fontSize: 14,
              color: "var(--muted)",
            }}
          >
            {SOCIAL.map((s) => (
              <a
                key={s.href}
                className="pf-link"
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      )}

      <nav className="pf-nav backdrop-blur-sm">
        <div className="pf-nav-inner">
          <a className="pf-brand" href="/">
            <Logo size="md" />
            <Pill
              leading={<StatusDot />}
              style={{ padding: "4px 10px", fontSize: 11 }}
            >
              {t.nav.available}
            </Pill>
          </a>
          <div className="pf-navlinks">
            {NAV_ORDER.map((k: RouteKey) => (
              <a key={k} className="pf-link" href={routePaths[k]}>
                {t.nav[k]}
              </a>
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
