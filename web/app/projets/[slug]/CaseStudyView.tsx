"use client";

import { Card, Label, Pill, StatusDot, Tag } from "@/components/ui";
import { ArrowUpRight } from "@/components/ui/icons";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { useProjects } from "@/lib/projects/ProjectsContext";
import { useSplitIntro } from "@/lib/animations/useSplitIntro";
import { pick } from "@/lib/content/localize";
import type { CaseStudy } from "@/lib/case-studies/types";
import { PortableText } from "next-sanity";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useMemo, useRef } from "react";

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

export default function CaseStudyView({
  slug,
  content,
}: {
  slug: string;
  content: CaseStudy;
}) {
  const { t, locale } = useLanguage();
  const labels = t.projectPage.labels;
  const study = useMemo(() => {
    const l = (v: Parameters<typeof pick>[0]) => pick(v, locale);
    const c = content;
    return {
      kicker: l(c.kicker),
      intro: l(c.intro),
      facts: c.facts.map((f) => [l(f.label), l(f.value)] as const),
      version: c.version,
      productType: l(c.productType),
      mainStack: c.mainStack,
      contextTitle: l(c.contextTitle),
      contextTags: c.contextTags.map(l).filter(Boolean),
      contextBody: c.contextBody[locale] ?? c.contextBody[locale === "fr" ? "en" : "fr"] ?? [],
      approachLabel: l(c.approachLabel),
      approachTitle: l(c.approachTitle),
      approachIntro: l(c.approachIntro),
      approachPoints: c.approachPoints.map((p) => ({ title: l(p.title), description: l(p.description) })),
      featuresTitle: l(c.featuresTitle),
      featuresIntro: l(c.featuresIntro),
      features: c.features.map((f) => ({
        title: l(f.title),
        description: l(f.description),
        image: f.image,
        size: f.size,
      })),
      stackTitle: l(c.stackTitle),
      stackIntro: l(c.stackIntro),
      stackGroups: c.stackGroups.map((g) => ({ title: l(g.title), items: g.items })),
      resultsTitle: l(c.resultsTitle),
      results: c.results.map((r) => ({ value: r.value, label: l(r.label) })),
    };
  }, [content, locale]);

  const projects = useProjects();
  const index = projects.findIndex((p) => p.slug === slug);
  const project = projects[index];
  // Next project in the display order set in Sanity, wrapping around.
  const next = projects.length > 1 ? projects[(index + 1) % projects.length] : undefined;
  const nextLinkProps = next?.caseStudyHref
    ? { href: next.caseStudyHref }
    : {
        href: next?.url ?? "/travaux",
        target: "_blank" as const,
        rel: "noopener noreferrer" as const,
      };

  const heroRef = useRef<HTMLElement>(null);
  useSplitIntro(heroRef, {
    titleSelector: "[data-intro-title]",
    followups: ["[data-intro-meta]", "[data-intro-lede]", "[data-intro-info]"],
    dependencies: [locale, slug],
  });

  if (!project) {
    notFound();
  }

  const coverA = content.coverLine1 || project.shortName;
  const coverB = content.coverLine2;

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
            <Pill>{project.tag}</Pill>
            {study.kicker && <Pill>{study.kicker}</Pill>}
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
          <p data-intro-lede>{study.intro}</p>
          {project.url && (
            <div data-intro-lede style={{ marginTop: 24 }}>
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="pf-btn pf-btn-primary"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, textDecoration: "none" }}
              >
                {t.projects.visitSite} <ArrowUpRight />
              </a>
            </div>
          )}
        </div>
        <div className="pj-info" data-intro-info>
          {study.facts.map(([k, v]) => (
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
              {study.version}
            </Pill>
          </div>
          <div className="pj-cover-head">
            <Pill variant="on-pastel" leading={<StatusDot />}>
              {labels.deployed}
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
                {labels.type}
              </Label>
              <div style={{ fontSize: 16, color: "#1A1A18" }}>
                {study.productType}
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
                {labels.mainStack}
              </Label>
              <div style={{ fontSize: 16, color: "#1A1A18" }}>
                {study.mainStack}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pj-context">
        <div className="pf-reveal">
          <Label style={{ display: "block", marginBottom: 18 }}>
            {labels.context}
          </Label>
          <h2 className="pf-display">{study.contextTitle}</h2>
          <div className="pj-tags">
            {study.contextTags.map((tg) => (
              <Tag key={tg}>{tg}</Tag>
            ))}
          </div>
        </div>
        <div className="pf-reveal">
          <PortableText value={study.contextBody} />
        </div>
      </section>

      <section className="pj-mock">
        <div className="pj-mock-band pf-reveal">
          <Label
            style={{
              display: "block",
              color: "rgba(255,255,255,0.55)",
              marginBottom: 16,
            }}
          >
            {labels.features}
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
            {study.featuresTitle}
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
            {study.featuresIntro}
          </p>

          <div className="pj-mock-grid">
            {study.features.map(({ title, description: desc, image: img, size }, i) => {
              const isLg = size === "large";
              const isSm = size === "small";

              let tileClass = "pj-mock-tile";
              if (isLg) tileClass += " pj-mock-tile-lg";
              else if (isSm) tileClass += " pj-mock-tile-sm";

              return (
                <div key={`${title}-${i}`} className={tileClass}>
                  <div className="pj-mock-text">
                    <h4 className="pf-display">{title}</h4>
                    <p>{desc}</p>
                  </div>
                  {img ? (
                    <div className="pj-mock-img-wrapper">
                      <img src={img} alt={title} />
                    </div>
                  ) : (
                    <div className="pj-mock-img-wrapper">
                      <span className="pj-mock-placeholder">▢ screenshot</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pj-challenges">
        <div className="pj-challenges-head pf-reveal">
          <div>
            <Label style={{ display: "block", marginBottom: 18 }}>
              {study.approachLabel}
            </Label>
            <h2
              className="pf-display"
              style={{
                fontSize: "clamp(34px, 5vw, 56px)",
                margin: 0,
                lineHeight: 1.05,
              }}
            >
              {study.approachTitle}
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
            {study.approachIntro}
          </p>
        </div>

        <div className="pj-challenges-grid">
          {study.approachPoints.map(({ title, description: desc }, i) => (
            <div key={`${title}-${i}`} className="pj-ch pf-reveal">
              <div className="pj-ch-n">{String(i + 1).padStart(2, "0")}</div>
              <h3 className="pf-display">{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="pj-stack">
        <div className="pj-stack-head pf-reveal">
          <div>
            <Label style={{ display: "block", marginBottom: 18 }}>
              {labels.stack}
            </Label>
            <h2
              className="pf-display"
              style={{
                fontSize: "clamp(34px, 5vw, 56px)",
                margin: 0,
                lineHeight: 1.05,
              }}
            >
              {study.stackTitle}
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
            {study.stackIntro}
          </p>
        </div>

        <div className="pj-stack-grid">
          {study.stackGroups.map(({ title: cat, items }) => (
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
            {labels.results}
          </Label>
          <h2
            className="pf-display"
            style={{
              fontSize: "clamp(34px, 5vw, 56px)",
              margin: 0,
              lineHeight: 1.05,
            }}
          >
            {study.resultsTitle}
          </h2>
        </div>
        <div className="pj-results-grid">
          {study.results.map(({ value: v, label: l }) => (
            <div key={`${v}-${l}`} className="pj-result pf-reveal">
              <strong>{v}</strong>
              <span>{l}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="pj-next">
        <div className="pf-reveal">
          <Label style={{ display: "block", marginBottom: 18 }}>
            {labels.next}
          </Label>
          <h2 className="pf-display">{next ? `${next.name}.` : null}</h2>
        </div>

        {next && (
          <Link
            {...nextLinkProps}
            style={{ textDecoration: "none", color: "inherit", display: "block" }}
            className="pf-reveal"
          >
            <div className="pj-next-card">
              <div className="pj-next-visual">
                {next.cover ? (
                  <Image
                    src={next.cover.src}
                    alt={next.cover.alt}
                    fill
                    sizes="(max-width: 980px) 100vw, 50vw"
                    className="pj-next-image"
                  />
                ) : (
                  <h3 className="pf-display pj-cover-headline">{next.shortName}</h3>
                )}
              </div>
              <div className="pj-next-info">
                <Pill style={{ alignSelf: "start" }}>
                  {[next.tag, next.year].filter(Boolean).join(" · ")}
                </Pill>
                <h3 className="pf-display">{next.sub}</h3>
                <p>{next.description}</p>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 5,
                    marginTop: 4,
                  }}
                >
                  {next.stack.slice(0, 5).map((s) => (
                    <Tag key={s} style={{ fontSize: 11 }}>
                      {s}
                    </Tag>
                  ))}
                </div>
                <span
                  className="pf-btn pf-btn-ghost"
                  style={{ alignSelf: "start", marginTop: 12, fontSize: 13 }}
                >
                  {labels.nextCta}
                  <ArrowUpRight />
                </span>
              </div>
            </div>
          </Link>
        )}
      </section>
    </>
  );
}
