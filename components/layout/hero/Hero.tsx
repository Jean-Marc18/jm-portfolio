"use client";

import { ArrowLink, ButtonLink, Label, Pill } from "@/components/ui";
import { Download } from "@/components/ui/icons";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { useSplitIntro } from "@/lib/animations/useSplitIntro";
import { useRef } from "react";

const Hero = () => {
  const { t, locale } = useLanguage();
  const root = useRef<HTMLElement>(null);

  useSplitIntro(root, {
    titleSelector: "[data-intro-title]",
    followups: [
      "[data-intro-lede]",
      "[data-intro-actions]",
      "[data-intro-banner]",
    ],
    dependencies: [locale],
  });

  return (
    <section className="ho-section-hero" ref={root}>
      <div className="ho-grid-hero">
        <div className="text-balance">
          <h1
            key={locale}
            className="pf-display text-[5rem] leading-[1.05]"
            data-intro-title
            style={{ overflow: "hidden" }}
          >
            {t.hero.h1l1} <br />
            {t.hero.h1l2}
            <br />
            <span className="ho-h1-muted">{t.hero.h1l3}</span>
          </h1>
        </div>
        <div style={{ paddingBottom: 14 }}>
          <p className="ho-lede" data-intro-lede>
            {t.hero.lede}
          </p>
          <div className="ho-hero-actions" data-intro-actions>
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

      <div className="ho-banner" data-intro-banner>
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
                <span className="ho-banner-meta" style={{ fontSize: "0.55em" }}>
                  {t.banner.suffix}
                </span>
              </div>
              <div
                style={{
                  fontSize: 15,
                  marginTop: 4,
                  fontWeight: 500,
                  color: "#1A1A18",
                }}
              >
                {t.banner.dates}
              </div>
              <div
                style={{ fontSize: 14, marginTop: 2 }}
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
            <ArrowLink
              href="/contact"
              aria-label={t.banner.contactLabel}
              size="lg"
              variant="dark"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
