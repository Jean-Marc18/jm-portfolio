"use client";

import { ButtonLink, Label, Pill, StatusDot, Tag } from "@/components/ui";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { useSiteContent } from "@/lib/content/SiteContentContext";
import { useSplitIntro } from "@/lib/animations/useSplitIntro";
import { useStatsCountUp } from "@/lib/animations/useCountUp";
import { PortableText, type PortableTextComponents } from "next-sanity";
import Image from "next/image";
import { useRef } from "react";

// Bold words keep the ink color used by the original bio.
const richText: PortableTextComponents = {
  marks: {
    strong: ({ children }) => (
      <strong style={{ color: "var(--ink)", fontWeight: 500 }}>{children}</strong>
    ),
  },
};

export default function AboutPage() {
  const { t, locale } = useLanguage();
  const ap = t.aboutPage;
  const { settings, experiences, skills, about } = useSiteContent();
  const sectorsLabel = ap.stats[2][1].split(" (")[0];
  const stats: [string, string][] = [
    [settings.yearsOfExperience, ap.stats[0][1]],
    [settings.projectsCount, ap.stats[1][1]],
    [
      settings.sectorsCount,
      settings.sectorsList ? `${sectorsLabel} (${settings.sectorsList})` : sectorsLabel,
    ],
    [settings.technologiesCount, ap.stats[3][1]],
  ];

  const heroRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLElement>(null);

  useSplitIntro(heroRef, {
    titleSelector: "[data-intro-title]",
    followups: ["[data-intro-label]", "[data-intro-portrait]"],
    dependencies: [locale],
  });

  useStatsCountUp(statsRef);

  return (
    <>
      <section className="ap-hero" ref={heroRef}>
        <div>
          <Label
            style={{ display: "block", marginBottom: 20 }}
            data-intro-label
          >
            {ap.heroLabel}
          </Label>
          <h1
            key={locale}
            className="pf-display ap-h1"
            data-intro-title
            style={{ overflow: "hidden" }}
          >
            {about.heroLine1}
            <br />
            <span style={{ color: "var(--muted)" }}>{about.heroLine2}</span>
            <br />
            <span
              style={{
                fontStyle: "italic",
                fontWeight: 300,
                color: "var(--accent)",
              }}
            >
              {about.heroLine3}
            </span>
            .
          </h1>
        </div>
        <div
          className="ap-portrait border"
          data-intro-portrait
          style={about.photo ? { background: "none" } : undefined}
        >
          {about.photo && (
            <Image
              src={about.photo.src}
              alt={about.photo.alt}
              fill
              priority
              sizes="(max-width: 980px) 100vw, 40vw"
              className="ap-portrait-photo"
            />
          )}
          <div className="ap-portrait-mono font-labil">JM</div>
          <div className="ap-portrait-label">
            <div
              className="pf-display font-labil"
              style={{ fontSize: 18, marginBottom: 2, color: "#1A1A18" }}
            >
              Jean-Marc Koffi
            </div>
            <div style={{ fontSize: 13, color: "#6B6961" }}>
              {about.portraitRole}
            </div>
          </div>
        </div>
      </section>

      <section className="ap-bio">
        <div className="ap-bio-grid pf-reveal">
          <div>
            <Label style={{ display: "block", marginBottom: 14 }}>
              {ap.bioLabel}
            </Label>
            <Pill leading={<StatusDot />}>{settings.availabilityDetail}</Pill>
          </div>
          <div>
            <PortableText value={about.bio} components={richText} />
          </div>
        </div>
      </section>

      <section className="ap-stats pf-reveal" ref={statsRef}>
        {stats.map(([v, l]) => (
          <div key={l} className="ap-stat mx-1">
            <strong>{v}</strong>
            <span>{l}</span>
          </div>
        ))}
      </section>

      <section className="ap-exp">
        <div className="ap-exp-head pf-reveal">
          <div>
            <Label style={{ display: "block", marginBottom: 18 }}>
              {ap.parLabel}
            </Label>
            <h2
              className="pf-display"
              style={{
                fontSize: "clamp(34px, 5vw, 56px)",
                margin: 0,
                lineHeight: 1.05,
              }}
            >
              {about.careerTitle}
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
            {about.careerIntro}
          </p>
        </div>

        {experiences.map((exp) => (
          <div
            key={`${exp.company}-${exp.period}`}
            className="ap-exp-row pf-reveal"
          >
            <div className="ap-exp-meta">
              <Label>{exp.periodShort}</Label>
              <strong className="pf-display">{exp.role}</strong>
              <span>
                {[exp.company, exp.sector, exp.location, exp.context]
                  .filter(Boolean)
                  .join(" · ")}
              </span>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 5,
                  marginTop: 12,
                }}
              >
                {exp.stack.map((s) => (
                  <Tag key={s} style={{ fontSize: 11 }}>
                    {s}
                  </Tag>
                ))}
              </div>
            </div>
            <ul className="ap-exp-bullets">
              {exp.highlights.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="ap-skills">
        <div className="ap-skills-head pf-reveal">
          <div>
            <Label style={{ display: "block", marginBottom: 18 }}>
              {ap.skLabel}
            </Label>
            <h2
              className="pf-display"
              style={{
                fontSize: "clamp(34px, 5vw, 56px)",
                margin: 0,
                lineHeight: 1.05,
              }}
            >
              {about.stackTitle}
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
            {about.stackIntro}
          </p>
        </div>
        <div className="ap-skills-grid">
          {skills.map(({ title, items }) => (
            <div key={title} className="ap-skill-cat pf-reveal">
              <h3>
                <span>{title}</span>
                <span>{items.length}</span>
              </h3>
              <div className="ap-skill-tags">
                {items.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="ap-values">
        <div className="ap-values-head pf-reveal">
          <Label style={{ display: "block", marginBottom: 18 }}>
            {ap.valLabel}
          </Label>
          <h2
            className="pf-display"
            style={{
              fontSize: "clamp(34px, 5vw, 56px)",
              margin: 0,
              lineHeight: 1.05,
            }}
          >
            {about.valuesTitle}
          </h2>
        </div>
        <div className="ap-values-grid">
          {about.values.map(({ title, description: desc }, i) => (
            <div key={`${title}-${i}`} className="ap-value pf-reveal">
              <div className="ap-value-num">{String(i + 1).padStart(2, "0")}</div>
              <div>
                <h3 className="pf-display">{title}</h3>
                <p>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="ap-cta pf-reveal">
        <Label style={{ display: "block", marginBottom: 24 }}>
          {ap.ctaLabel}
        </Label>
        <h2 className="pf-display">
          {ap.ctaH1a}
          <br />
          {ap.ctaH1b}{" "}
          <span
            style={{
              color: "var(--accent)",
              fontStyle: "italic",
              fontWeight: 300,
            }}
          >
            {ap.ctaH1c}
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
            {ap.ctaPrimary}
          </ButtonLink>
          <ButtonLink href={settings.cvUrl} download variant="ghost">
            {ap.ctaCv}
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
