"use client";

import { ArrowLink, ButtonLink, Label, Pill } from "@/components/ui";
import { Download } from "@/components/ui/icons";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="ho-section-hero">
      <div className="ho-grid-hero pf-reveal">
        <div>
          <h1 className="pf-display ho-h1">
            {t.hero.h1l1}
            <br />
            {t.hero.h1l2}
            <br />
            <span className="ho-h1-muted">{t.hero.h1l3}</span>
          </h1>
        </div>
        <div style={{ paddingBottom: 14 }}>
          <p className="ho-lede">{t.hero.lede}</p>
          <div className="ho-hero-actions">
            <ButtonLink
              href="/cv-jean-marc-koffi.pdf"
              download
              variant="primary"
              trailing={<Download />}
            >
              {t.hero.cv}
            </ButtonLink>
            <ButtonLink href="/travaux" variant="ghost">
              {t.hero.viewProjects}
            </ButtonLink>
          </div>
        </div>
      </div>

      <div className="ho-banner pf-reveal">
        <div className="ho-banner-inner">
          <div className="ho-banner-top">
            <div style={{ display: "grid", gap: 8 }}>
              <Label style={{ color: "rgba(26,26,24,0.55)" }}>
                {t.banner.label}
              </Label>
              <div
                className="pf-display"
                style={{ fontSize: "clamp(28px, 3.5vw, 40px)", lineHeight: 1 }}
              >
                {t.banner.company}{" "}
                <span
                  className="ho-banner-meta"
                  style={{ fontSize: "0.55em" }}
                >
                  {t.banner.suffix}
                </span>
              </div>
              <div
                style={{ fontSize: 14, marginTop: 4 }}
                className="ho-banner-meta"
              >
                {t.banner.ctx}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "end",
                gap: 12,
              }}
            >
              <Pill variant="on-pastel">{t.banner.location}</Pill>
              <div
                style={{
                  fontSize: 13,
                  textAlign: "right",
                  whiteSpace: "pre-line",
                }}
                className="ho-banner-meta"
              >
                {t.banner.years}
              </div>
            </div>
          </div>
          <div className="ho-banner-bottom">
            <h2 className="pf-display ho-banner-headline">
              {t.banner.bigA}
              <br />
              <span style={{ fontStyle: "italic", fontWeight: 300 }}>
                {t.banner.bigB}
              </span>
            </h2>
            <div className="ho-banner-cta">
              <div style={{ textAlign: "right" }}>
                <Label
                  style={{
                    display: "block",
                    marginBottom: 6,
                    color: "rgba(26,26,24,0.55)",
                  }}
                >
                  {t.banner.avail}
                </Label>
                <div
                  style={{
                    fontSize: 13,
                    color: "#1A1A18",
                    whiteSpace: "pre-line",
                  }}
                >
                  {t.banner.when}
                </div>
              </div>
              <ArrowLink
                href="/contact"
                aria-label={t.banner.contactLabel}
                size="lg"
                variant="dark"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
