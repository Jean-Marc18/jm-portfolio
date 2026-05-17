"use client";

import { ButtonLink, Label, Tag } from "@/components/ui";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { useSplitIntro } from "@/lib/animations/useSplitIntro";
import { useRef } from "react";

export default function ServicesPage() {
  const { t, locale } = useLanguage();
  const sp = t.servicesPage;

  const heroRef = useRef<HTMLElement>(null);
  useSplitIntro(heroRef, {
    titleSelector: "[data-intro-title]",
    followups: [
      "[data-intro-label]",
      "[data-intro-lede]",
      "[data-intro-actions]",
    ],
    dependencies: [locale],
  });

  return (
    <>
      <section className="sv-hero" ref={heroRef}>
        <div>
          <Label
            style={{ display: "block", marginBottom: 20 }}
            data-intro-label
          >
            {sp.heroLabel}
          </Label>
          <h1
            key={locale}
            className="pf-display sv-h1"
            data-intro-title
            style={{ overflow: "hidden" }}
          >
            {sp.heroH1a}
            <br />
            <span style={{ color: "var(--muted)" }}>{sp.heroH1b}</span>{" "}
            {sp.heroH1c}
            <br />
            {sp.heroH1d}{" "}
            <span
              style={{
                fontStyle: "italic",
                fontWeight: 300,
                color: "var(--accent)",
              }}
            >
              {sp.heroH1e}
            </span>{" "}
            {sp.heroH1f}
          </h1>
        </div>
        <div style={{ paddingBottom: 12 }}>
          <p
            data-intro-lede
            style={{
              fontSize: 16,
              color: "var(--muted)",
              lineHeight: 1.65,
              margin: 0,
            }}
          >
            {sp.heroP}
          </p>
          <div
            data-intro-actions
            style={{ display: "flex", gap: 10, marginTop: 24, flexWrap: "wrap" }}
          >
            <ButtonLink href="/contact" variant="primary">{sp.heroCta}</ButtonLink>
            <ButtonLink href="#process" variant="ghost">{sp.heroCtaB}</ButtonLink>
          </div>
        </div>
      </section>

      <section className="sv-services">
        {sp.services.map((s, i) => {
          const featured = "featured" in s && s.featured;
          return (
            <div
              key={s.title}
              className={`sv-service ${featured ? "sv-service-featured" : ""} pf-reveal`}
            >
              <div>
                <span className="sv-num">— 0{i + 1}</span>
              </div>
              <div>
                <h2 className="pf-display">{s.title}</h2>
                <p>{s.long}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {s.tags.map((tag) => (
                    <Tag key={tag} variant={featured ? "dark" : "default"}>
                      {tag}
                    </Tag>
                  ))}
                </div>
              </div>
              <div>
                <div className="sv-deliv-head">{sp.delivHead}</div>
                <ul className="sv-deliv">
                  {s.deliv.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </section>

      <section className="sv-process" id="process">
        <div className="sv-process-head pf-reveal">
          <div>
            <Label style={{ display: "block", marginBottom: 20 }}>
              {sp.procLabel}
            </Label>
            <h2
              className="pf-display"
              style={{ fontSize: "clamp(34px, 5vw, 56px)", margin: 0, lineHeight: 1.05 }}
            >
              {sp.procH1}
            </h2>
          </div>
          <p
            style={{
              fontSize: 15,
              color: "var(--muted)",
              lineHeight: 1.65,
              margin: 0,
              maxWidth: 520,
            }}
          >
            {sp.procP}
          </p>
        </div>
        <div className="sv-process-grid">
          {sp.procSteps.map(([title, desc], i) => (
            <div key={title} className="sv-step pf-reveal">
              <div className="sv-step-n">0{i + 1}</div>
              <div>
                <h3 className="pf-display">{title}</h3>
                <p>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="sv-faq">
        <div className="sv-faq-grid">
          <div className="pf-reveal">
            <Label style={{ display: "block", marginBottom: 20 }}>{sp.faqLabel}</Label>
            <h2
              className="pf-display"
              style={{ fontSize: "clamp(30px, 4vw, 44px)", margin: 0, lineHeight: 1.05 }}
            >
              {sp.faqH1}
            </h2>
          </div>
          <div className="sv-faq-list pf-reveal">
            {sp.faqs.map(([q, a]) => (
              <div key={q} className="sv-faq-item">
                <h3 className="pf-display sv-faq-q">{q}</h3>
                <p className="sv-faq-a">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sv-cta pf-reveal">
        <Label style={{ display: "block", marginBottom: 24 }}>{sp.ctaLabel}</Label>
        <h2 className="pf-display">
          {sp.ctaH1a}
          <br />
          <span
            style={{ color: "var(--accent)", fontStyle: "italic", fontWeight: 300 }}
          >
            {sp.ctaH1b}
          </span>
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 12,
            marginTop: 36,
            flexWrap: "wrap",
          }}
        >
          <ButtonLink href="/contact" variant="primary">{sp.ctaDiscuss}</ButtonLink>
          <ButtonLink href="/travaux" variant="ghost">{sp.ctaWork}</ButtonLink>
        </div>
      </section>
    </>
  );
}
