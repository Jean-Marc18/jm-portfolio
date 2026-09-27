"use client";

import { ButtonLink, Logo } from "@/components/ui";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { useSiteContent } from "@/lib/content/SiteContentContext";

const Footer = () => {
  const { t } = useLanguage();
  const { settings } = useSiteContent();

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
            <div className="pf-display font-labil" style={{ fontSize: 18 }}>
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
            href={`mailto:${settings.email}`}
            variant="ghost"
            style={{ marginTop: 20, fontSize: 13 }}
          >
            {settings.email}
          </ButtonLink>
        </div>

        <div className="pf-footer-col">
          <h3>{t.footer.elsewhere}</h3>
          <ul>
            {settings.socialLinks.map((s) => (
              <li key={s.url}>
                <a href={s.url} target="_blank" rel="noopener noreferrer">
                  {s.label} ↗
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
