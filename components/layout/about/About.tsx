"use client";

import { ButtonLink, Label } from "@/components/ui";
import { ArrowDiagonal } from "@/components/ui/icons";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  return (
    <section
      className="ho-section pf-section-band"
      id="about"
      style={{ scrollMarginTop: 96 }}
    >
      <div className="ho-grid-about pf-reveal">
        <div>
          <Label style={{ display: "block", marginBottom: 18 }}>
            {t.about.label}
          </Label>
          <h2
            className="pf-display"
            style={{
              fontSize: "clamp(30px, 4vw, 48px)",
              margin: 0,
              lineHeight: 1.05,
            }}
          >
            {t.about.h1}
          </h2>
          <ButtonLink
            href="/contact"
            variant="primary"
            trailing={<ArrowDiagonal />}
            style={{ marginTop: 28, fontSize: 13 }}
          >
            {t.about.cta}
          </ButtonLink>
        </div>
        <div>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.6,
              color: "var(--ink)",
              marginTop: 0,
              maxWidth: 600,
            }}
          >
            {t.about.p1}
          </p>
          <p
            style={{
              fontSize: 15.5,
              lineHeight: 1.65,
              color: "var(--muted)",
              maxWidth: 600,
            }}
          >
            {t.about.p2a}
            <strong style={{ color: "var(--ink)", fontWeight: 500 }}>
              {t.about.p2b}
            </strong>
            {t.about.p2c}
            <strong style={{ color: "var(--ink)", fontWeight: 500 }}>
              {t.about.p2d}
            </strong>
            {t.about.p2e}
            <strong style={{ color: "var(--ink)", fontWeight: 500 }}>
              {t.about.p2f}
            </strong>
            {t.about.p2g}
          </p>

          <div
            style={{
              borderTop: "1px solid var(--line)",
              marginTop: 36,
              paddingTop: 28,
            }}
          >
            <Label style={{ display: "block", marginBottom: 20 }}>
              {t.about.expLabel}
            </Label>
            <div className="ho-exp-row">
              <div className="pf-display" style={{ fontSize: 22 }}>
                {t.about.period}
              </div>
              <div>
                <div style={{ fontSize: 18, fontWeight: 500, marginBottom: 4 }}>
                  {t.about.role}{" "}
                  <span style={{ color: "var(--muted)", fontWeight: 400 }}>
                    {t.about.roleAt}
                  </span>
                </div>
                <div
                  style={{
                    fontSize: 13.5,
                    color: "var(--muted)",
                    marginBottom: 14,
                  }}
                >
                  {t.about.roleCtx}
                </div>
                <ul
                  style={{
                    margin: 0,
                    padding: 0,
                    listStyle: "none",
                    display: "grid",
                    gap: 8,
                    fontSize: 14,
                    color: "var(--ink)",
                    lineHeight: 1.5,
                  }}
                >
                  {t.about.bullets.map((b, j) => (
                    <li key={j} className="text-pretty list-disc">
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
