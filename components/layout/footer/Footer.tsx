"use client";

import { ButtonLink, Logo } from "@/components/ui";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const SOCIAL_LINKS = [
  { label: "LinkedIn ↗", href: "https://www.linkedin.com/in/jean-marc-koffi/" },
  { label: "GitHub ↗", href: "https://github.com/Jean-Marc18" },
  { label: "WhatsApp ↗", href: "https://wa.me/+2250768910092" },
];

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="pf-footer">
      <div className="pf-footer-grid">
        <div className="pf-footer-col">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 14,
            }}
          >
            <Logo size="md" />
            <div className="pf-display" style={{ fontSize: 18 }}>
              Jean-Marc Koffi
            </div>
          </div>
          <p
            style={{
              fontSize: 14,
              lineHeight: 1.6,
              color: "var(--muted)",
              margin: 0,
              maxWidth: 360,
            }}
          >
            {t.footer.tag}
          </p>
          <ButtonLink
            href="mailto:jeanmarc.dev.18@gmail.com"
            variant="ghost"
            style={{ marginTop: 20, fontSize: 13 }}
          >
            jeanmarc.dev.18@gmail.com
          </ButtonLink>
        </div>

        <div className="pf-footer-col">
          <h4>{t.footer.elsewhere}</h4>
          <ul>
            {SOCIAL_LINKS.map((s) => (
              <li key={s.href}>
                <a href={s.href} target="_blank" rel="noopener noreferrer">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="pf-footer-bottom">
        <span>{t.footer.rights}</span>
        <span>{t.footer.built}</span>
      </div>
    </footer>
  );
};

export default Footer;
