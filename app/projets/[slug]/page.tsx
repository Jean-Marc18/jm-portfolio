"use client";

import { Card, Label, Pill, StatusDot, Tag } from "@/components/ui";
import { ArrowUpRight } from "@/components/ui/icons";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { useSplitIntro } from "@/lib/animations/useSplitIntro";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { notFound } from "next/navigation";
import Link from "next/link";
import { use, useRef } from "react";

type CaseStudy =
  Dictionary["projectPage"]["cases"][keyof Dictionary["projectPage"]["cases"]];

const COVER_HEADLINE: Record<string, [string, string]> = {
  "pipv-pped": ["PIPV", "—PPED."],
  tacomfav: ["TaCom", "—Fav."],
  "e-panacee": ["e-", "Panacee."],
};

const BackIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M9 4 L4 7 L9 10"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
  </svg>
);

export default function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const { t, locale } = useLanguage();

  const cases = t.projectPage.cases as Record<string, CaseStudy | undefined>;
  const study = cases[slug];
  const project = t.projects.items.find((p) => p.slug === slug);

  const heroRef = useRef<HTMLElement>(null);
  useSplitIntro(heroRef, {
    titleSelector: "[data-intro-title]",
    followups: ["[data-intro-meta]", "[data-intro-lede]", "[data-intro-info]"],
    dependencies: [locale, slug],
  });

  if (!study || !project) {
    notFound();
  }

  const [coverA, coverB] = COVER_HEADLINE[slug] ?? [project.shortName, ""];

  return (
    <>
      <div className="pj-back">
        <Link
          href="/travaux"
          className="pf-link"
          style={{
            fontSize: 14,
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <BackIcon />
          {t.projectPage.back}
        </Link>
      </div>

      <section className="pj-hero" ref={heroRef}>
        <div>
          <div className="pj-hero-meta" data-intro-meta>
            <Pill>{study.tag}</Pill>
            <Pill>{study.studyTag}</Pill>
          </div>
          <h1
            key={`${locale}-${slug}`}
            className="pf-display"
            data-intro-title
            style={{ overflow: "hidden" }}
          >
            {project.name}
            <span style={{ color: "var(--accent)" }}>.</span>
          </h1>
          <p data-intro-lede>{study.heroP}</p>
        </div>
        <div className="pj-info" data-intro-info>
          {study.info.map(([k, v]) => (
            <div key={k} className="pj-info-cell px-1">
              <Label>{k}</Label>
              <strong>{v}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="pj-cover">
        <div className="pj-cover-inner pf-reveal">
          <div className="pj-cover-tag">
            <Pill
              variant="on-pastel"
              style={{ fontSize: 11, whiteSpace: "nowrap" }}
            >
              {study.coverVer}
            </Pill>
          </div>
          <div className="pj-cover-head">
            <Pill variant="on-pastel" leading={<StatusDot />}>
              {study.coverDeployed}
            </Pill>
          </div>
          <h2 className="pf-display pj-cover-headline">
            {coverA}
            {coverB && (
              <>
                <br />
                <span style={{ fontStyle: "italic", fontWeight: 300 }}>
                  {coverB}
                </span>
              </>
            )}
          </h2>
          <div className="pj-cover-foot">
            <div>
              <Label
                style={{
                  display: "block",
                  marginBottom: 6,
                  color: "rgba(26,26,24,0.55)",
                }}
              >
                {study.coverTypeLabel}
              </Label>
              <div style={{ fontSize: 16, color: "#1A1A18" }}>
                {study.coverTypeValue}
              </div>
            </div>
            <div style={{ textAlign: "right" }}>
              <Label
                style={{
                  display: "block",
                  marginBottom: 6,
                  color: "rgba(26,26,24,0.55)",
                }}
              >
                {study.coverStackLabel}
              </Label>
              <div style={{ fontSize: 16, color: "#1A1A18" }}>
                {study.coverStackValue}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pj-context">
        <div className="pf-reveal">
          <Label style={{ display: "block", marginBottom: 18 }}>
            {study.ctxLabel}
          </Label>
          <h2 className="pf-display">{study.ctxH1}</h2>
          <div className="pj-tags">
            {study.ctxTags.map((tg) => (
              <Tag key={tg}>{tg}</Tag>
            ))}
          </div>
        </div>
        <div className="pf-reveal">
          <p>{study.ctxP1}</p>
          <p>
            {study.ctxP2a}
            <strong>{study.ctxP2b}</strong>
            {study.ctxP2c}
          </p>
          <p>
            {study.ctxP3a}
            <strong>{study.ctxP3b}</strong>
            {study.ctxP3c}
          </p>
        </div>
      </section>

      <section className="pj-challenges">
        <div className="pj-challenges-head pf-reveal">
          <div>
            <Label style={{ display: "block", marginBottom: 18 }}>
              {study.appLabel}
            </Label>
            <h2
              className="pf-display"
              style={{
                fontSize: "clamp(34px, 5vw, 56px)",
                margin: 0,
                lineHeight: 1.05,
              }}
            >
              {study.appH1}
            </h2>
          </div>
          <p
            style={{
              fontSize: 15,
              color: "var(--muted)",
              lineHeight: 1.65,
              margin: 0,
              maxWidth: 480,
            }}
          >
            {study.appP}
          </p>
        </div>

        <div className="pj-challenges-grid">
          {study.ch.map(([n, title, desc]) => (
            <div key={n} className="pj-ch pf-reveal">
              <div className="pj-ch-n">— {n}</div>
              <h3 className="pf-display">{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* <section className="pj-mock">
        <div className="pj-mock-band pf-reveal">
          <Label
            style={{
              display: "block",
              color: "rgba(255,255,255,0.55)",
              marginBottom: 16,
            }}
          >
            {study.mockLabel}
          </Label>
          <h2
            className="pf-display"
            style={{
              fontSize: "clamp(28px, 3.5vw, 44px)",
              margin: 0,
              letterSpacing: "-0.02em",
              fontWeight: 500,
              lineHeight: 1.05,
            }}
          >
            {study.mockH1}
          </h2>
          <p
            style={{
              fontSize: 14.5,
              color: "rgba(244,241,234,0.6)",
              marginTop: 14,
              maxWidth: 560,
              lineHeight: 1.55,
            }}
          >
            {study.mockP}
          </p>

          <div className="pj-mock-grid">
            {study.mocks.map(([title, desc], i) => (
              <div
                key={title}
                className={`pj-mock-tile ${i === 0 ? "pj-mock-tile-lg" : ""}`}
              >
                <div>
                  <h4 className="pf-display">{title}</h4>
                  <p>{desc}</p>
                </div>
                <div className="pj-mock-fakeui">
                  <div className="pj-mock-bar">
                    <div
                      className="pj-mock-bar-fill"
                      style={{ width: i === 0 ? "65%" : "40%" }}
                    />
                  </div>
                  <span className="pj-mock-placeholder">▢ screenshot</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <section className="pj-stack">
        <div className="pj-stack-head pf-reveal">
          <div>
            <Label style={{ display: "block", marginBottom: 18 }}>
              {study.skLabel}
            </Label>
            <h2
              className="pf-display"
              style={{
                fontSize: "clamp(34px, 5vw, 56px)",
                margin: 0,
                lineHeight: 1.05,
              }}
            >
              {study.skH1}
            </h2>
          </div>
          <p
            style={{
              fontSize: 15,
              color: "var(--muted)",
              lineHeight: 1.65,
              margin: 0,
              maxWidth: 480,
            }}
          >
            {study.skP}
          </p>
        </div>

        <div className="pj-stack-grid">
          {study.skGroups.map(([cat, items]) => (
            <Card as="div" key={cat} className="pj-stack-card pf-reveal">
              <h4>{cat}</h4>
              <ul>
                {items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      <section className="pj-results">
        <div className="pj-results-head pf-reveal">
          <Label style={{ display: "block", marginBottom: 18 }}>
            {study.resLabel}
          </Label>
          <h2
            className="pf-display"
            style={{
              fontSize: "clamp(34px, 5vw, 56px)",
              margin: 0,
              lineHeight: 1.05,
            }}
          >
            {study.resH1}
          </h2>
        </div>
        <div className="pj-results-grid">
          {study.res.map(([v, l]) => (
            <div key={l} className="pj-result pf-reveal">
              <strong>{v}</strong>
              <span>{l}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="pj-next">
        <div className="pf-reveal">
          <Label style={{ display: "block", marginBottom: 18 }}>
            {study.nextLabel}
          </Label>
          <h2 className="pf-display">{study.nextH1}</h2>
        </div>

        <Link
          href="/travaux"
          style={{ textDecoration: "none", color: "inherit", display: "block" }}
          className="pf-reveal"
        >
          <div className="pj-next-card">
            <div className="pj-next-visual">
              <h3 className="pf-display pj-cover-headline">
                TaCom
                <br />
                <span style={{ fontStyle: "italic", fontWeight: 300 }}>
                  —Fav.
                </span>
              </h3>
            </div>
            <div className="pj-next-info">
              <Pill style={{ alignSelf: "start" }}>{study.nextProjLabel}</Pill>
              <h3 className="pf-display">{study.nextH3}</h3>
              <p>{study.nextP}</p>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 5,
                  marginTop: 4,
                }}
              >
                {["Next.js 16", "Sanity", "GSAP", "Framer Motion", "Lenis"].map(
                  (s) => (
                    <Tag key={s} style={{ fontSize: 11 }}>
                      {s}
                    </Tag>
                  ),
                )}
              </div>
              <span
                className="pf-btn pf-btn-ghost"
                style={{ alignSelf: "start", marginTop: 12, fontSize: 13 }}
              >
                {study.nextCta}
                <ArrowUpRight />
              </span>
            </div>
          </div>
        </Link>
      </section>
    </>
  );
}
