"use client";

import RevealObserver from "@/components/common/Reveal";
import { ButtonLink, Label, Pill, StatusDot, Tag } from "@/components/ui";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();
  const ap = t.aboutPage;

  return (
    <>
      <RevealObserver />

      <section className="ap-hero">
        <div className="pf-reveal">
          <Label style={{ display: "block", marginBottom: 20 }}>{ap.heroLabel}</Label>
          <h1 className="pf-display ap-h1">
            {ap.heroH1a}
            <br />
            <span style={{ color: "var(--muted)" }}>{ap.heroH1b}</span>
            <br />
            <span
              style={{
                fontStyle: "italic",
                fontWeight: 300,
                color: "var(--accent)",
              }}
            >
              {ap.heroH1c}
            </span>
            .
          </h1>
        </div>
        <div className="ap-portrait pf-reveal">
          <div className="ap-portrait-mono">JM</div>
          <div className="ap-portrait-label">
            <div
              className="pf-display"
              style={{ fontSize: 18, marginBottom: 2, color: "#1A1A18" }}
            >
              Koffi N&apos;Guessan Jean-Marc
            </div>
            <div style={{ fontSize: 13, color: "#6B6961" }}>{ap.portraitRole}</div>
          </div>
        </div>
      </section>

      <section className="ap-bio">
        <div className="ap-bio-grid pf-reveal">
          <div>
            <Label style={{ display: "block", marginBottom: 14 }}>{ap.bioLabel}</Label>
            <Pill leading={<StatusDot />}>{ap.avail}</Pill>
          </div>
          <div>
            <p>{ap.p1}</p>
            <p>{ap.p2}</p>
            <p>
              {ap.p3a}
              <strong style={{ color: "var(--ink)", fontWeight: 500 }}>{ap.p3inexa}</strong>
              {ap.p3b}
              <strong style={{ color: "var(--ink)", fontWeight: 500 }}>{ap.p3cdc}</strong>
              {ap.p3c}
            </p>
          </div>
        </div>
      </section>

      <section className="ap-stats pf-reveal">
        {ap.stats.map(([v, l]) => (
          <div key={l} className="ap-stat">
            <strong>{v}</strong>
            <span>{l}</span>
          </div>
        ))}
      </section>

      <section className="ap-exp">
        <div className="ap-exp-head pf-reveal">
          <div>
            <Label style={{ display: "block", marginBottom: 18 }}>{ap.parLabel}</Label>
            <h2
              className="pf-display"
              style={{ fontSize: "clamp(34px, 5vw, 56px)", margin: 0, lineHeight: 1.05 }}
            >
              {ap.parH1}
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
            {ap.parP}
          </p>
        </div>

        <div className="ap-exp-row pf-reveal">
          <div className="ap-exp-meta">
            <Label>2024 — 26</Label>
            <strong className="pf-display">{ap.expRole}</strong>
            <span>Inexa · {ap.expCtx}</span>
            <div
              style={{ display: "flex", flexWrap: "wrap", gap: 5, marginTop: 12 }}
            >
              {["Next.js", "TypeScript", "TanStack Query", "Radix UI", "Tailwind"].map(
                (s) => (
                  <Tag key={s} style={{ fontSize: 11 }}>{s}</Tag>
                )
              )}
            </div>
          </div>
          <ul className="ap-exp-bullets">
            {ap.bullets.map((b, j) => (
              <li key={j}>{b}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="ap-skills">
        <div className="ap-skills-head pf-reveal">
          <div>
            <Label style={{ display: "block", marginBottom: 18 }}>{ap.skLabel}</Label>
            <h2
              className="pf-display"
              style={{ fontSize: "clamp(34px, 5vw, 56px)", margin: 0, lineHeight: 1.05 }}
            >
              {ap.skH1}
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
            {ap.skP}
          </p>
        </div>
        <div className="ap-skills-grid">
          {Object.entries(ap.skillsLocal).map(([cat, list]) => (
            <div key={cat} className="ap-skill-cat pf-reveal">
              <h3>
                <span>{cat}</span>
                <span>{list.length}</span>
              </h3>
              <div className="ap-skill-tags">
                {list.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="ap-values">
        <div className="ap-values-head pf-reveal">
          <Label style={{ display: "block", marginBottom: 18 }}>{ap.valLabel}</Label>
          <h2
            className="pf-display"
            style={{ fontSize: "clamp(34px, 5vw, 56px)", margin: 0, lineHeight: 1.05 }}
          >
            {ap.valH1}
          </h2>
        </div>
        <div className="ap-values-grid">
          {ap.values.map(([n, title, desc]) => (
            <div key={n} className="ap-value pf-reveal">
              <div className="ap-value-num">{n}</div>
              <div>
                <h3 className="pf-display">{title}</h3>
                <p>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="ap-cta pf-reveal">
        <Label style={{ display: "block", marginBottom: 24 }}>{ap.ctaLabel}</Label>
        <h2 className="pf-display">
          {ap.ctaH1a}
          <br />
          {ap.ctaH1b}{" "}
          <span
            style={{ color: "var(--accent)", fontStyle: "italic", fontWeight: 300 }}
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
          <ButtonLink href="/contact" variant="primary">{ap.ctaPrimary}</ButtonLink>
          <ButtonLink href="/cv-jean-marc-koffi.pdf" download variant="ghost">
            {ap.ctaCv}
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
