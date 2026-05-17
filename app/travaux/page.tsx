"use client";

import { ButtonLink, Label, Pill, Tag } from "@/components/ui";
import { PROJECT_PATHS } from "@/constants";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { useSplitIntro } from "@/lib/animations/useSplitIntro";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const LOCAL_SCREENSHOTS: Record<string, string> = {
  "pipv-pped": "/projects/pipv-pped.png",
  tacomfav: "/projects/tacomfav.png",
  "e-panacee": "/projects/e-panacee.png",
};

export default function TravauxPage() {
  const { t, locale } = useLanguage();
  const tp = t.travauxPage;
  const projects = t.projects.items;

  const heroRef = useRef<HTMLElement>(null);
  useSplitIntro(heroRef, {
    titleSelector: "[data-intro-title]",
    followups: [
      "[data-intro-label]",
      "[data-intro-lede]",
      "[data-intro-meta]",
    ],
    dependencies: [locale],
  });

  return (
    <>
      <section className="tv-hero" ref={heroRef}>
        <div>
          <Label
            style={{ display: "block", marginBottom: 20 }}
            data-intro-label
          >
            {tp.heroLabel}
          </Label>
          <h1
            key={locale}
            className="pf-display tv-h1"
            data-intro-title
            style={{ overflow: "hidden" }}
          >
            {tp.heroH1a}
            <br />
            <span style={{ color: "var(--muted)" }}>{tp.heroH1b}</span>
          </h1>
          <p
            data-intro-lede
            style={{
              fontSize: 17,
              color: "var(--muted)",
              maxWidth: 560,
              lineHeight: 1.6,
              marginTop: 32,
            }}
          >
            {tp.heroP}
          </p>
        </div>
        <div className="tv-hero-meta" data-intro-meta>
          <div className="m"><strong>03</strong><span>{tp.m1}</span></div>
          <div className="m"><strong>13+</strong><span>{tp.m2}</span></div>
          <div className="m"><strong>{tp.m3v}</strong><span>{tp.m3}</span></div>
          <div className="m"><strong>{tp.m4v}</strong><span>{tp.m4}</span></div>
        </div>
      </section>

      <section className="tv-list">
        {projects.map((p, i) => {
          const caseStudy = PROJECT_PATHS[p.slug];
          const screenshot = LOCAL_SCREENSHOTS[p.slug];
          const linkProps = caseStudy
            ? { href: caseStudy }
            : {
                href: p.url,
                target: "_blank" as const,
                rel: "noopener noreferrer" as const,
              };
          return (
            <Link
              key={p.slug}
              {...linkProps}
              className="tv-row pf-reveal"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className={`tv-row-visual tv-cov-${i + 1}`}>
                {screenshot ? (
                  <Image
                    src={screenshot}
                    alt={`${p.name} — ${p.sub}`}
                    fill
                    sizes="(max-width: 980px) 50vw, 33vw"
                    className="tv-cov-image"
                  />
                ) : (
                  <div className="pf-display tv-cov-text">{p.shortName}</div>
                )}
                <Pill
                  variant="on-pastel"
                  style={{ position: "absolute", top: 16, left: 16, fontSize: 11, zIndex: 2 }}
                >
                  {p.tag}
                </Pill>
              </div>
              <div className="tv-row-meta">
                <Label>{tp.roleByName[p.name]}</Label>
                <h2 className="pf-display">{p.name}</h2>
                <p>{p.description}</p>
                <div className="tv-row-stack">
                  {p.stack.slice(0, 6).map((s) => (
                    <Tag key={s} style={{ fontSize: 11 }}>{s}</Tag>
                  ))}
                  {p.stack.length > 6 && (
                    <Tag style={{ fontSize: 11 }}>+{p.stack.length - 6}</Tag>
                  )}
                </div>
              </div>
              <div className="tv-row-cta">
                <span className="tv-year">{p.year}</span>
                <span className="pf-btn pf-btn-ghost" style={{ fontSize: 13 }}>
                  {caseStudy ? tp.ctaCase : tp.ctaVisit}
                </span>
              </div>
            </Link>
          );
        })}
      </section>

      <section className="tv-approche">
        <div className="tv-approche-grid pf-reveal">
          <div>
            <Label style={{ display: "block", marginBottom: 20 }}>{tp.appLabel}</Label>
            <h2
              className="pf-display"
              style={{ fontSize: "clamp(30px, 4vw, 48px)", margin: 0, lineHeight: 1.05 }}
            >
              {tp.appH1}
            </h2>
          </div>
          <div style={{ display: "grid", gap: 24 }}>
            {tp.steps.map(([title, desc], i) => (
              <div
                key={title}
                style={{
                  display: "grid",
                  gridTemplateColumns: "40px 1fr",
                  gap: 20,
                  paddingTop: 16,
                  borderTop: "1px solid var(--line)",
                }}
              >
                <Label>0{i + 1}</Label>
                <div>
                  <h3 className="pf-display" style={{ fontSize: 20, margin: 0 }}>
                    {title}
                  </h3>
                  <p
                    style={{
                      fontSize: 14.5,
                      color: "var(--muted)",
                      lineHeight: 1.6,
                      margin: "6px 0 0",
                    }}
                  >
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="tv-cta pf-reveal">
        <Label style={{ display: "block", marginBottom: 24 }}>{tp.ctaLabel}</Label>
        <h2 className="pf-display">
          {tp.ctaH1a}
          <br />
          <span
            style={{ color: "var(--accent)", fontStyle: "italic", fontWeight: 300 }}
          >
            {tp.ctaH1b}
          </span>{" "}
          ?
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
          <ButtonLink href="/contact" variant="primary">
            {tp.ctaDiscuss}
          </ButtonLink>
          <ButtonLink href="/services" variant="ghost">
            {tp.ctaServices}
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
