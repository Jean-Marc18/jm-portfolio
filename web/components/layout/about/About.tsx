"use client";

import { ButtonLink, Label } from "@/components/ui";
import { ArrowDiagonal } from "@/components/ui/icons";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { useSiteContent } from "@/lib/content/SiteContentContext";
import { PortableText, type PortableTextComponents } from "next-sanity";

// First paragraph is the lead; the next ones are muted, with ink bold words.
const homeIntro: PortableTextComponents = {
  block: {
    normal: ({ children, index }) =>
      index === 0 ? (
        <p
          style={{
            fontSize: 17,
            lineHeight: 1.6,
            color: "var(--ink)",
            marginTop: 0,
            maxWidth: 600,
          }}
        >
          {children}
        </p>
      ) : (
        <p
          style={{
            fontSize: 15.5,
            lineHeight: 1.65,
            color: "var(--muted)",
            maxWidth: 600,
          }}
        >
          {children}
        </p>
      ),
  },
  marks: {
    strong: ({ children }) => (
      <strong style={{ color: "var(--ink)", fontWeight: 500 }}>{children}</strong>
    ),
  },
};

const About = () => {
  const { t } = useLanguage();
  const { experiences, about } = useSiteContent();
  const latest = experiences[0];

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
          <PortableText value={about.homeIntro} components={homeIntro} />

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
                {latest?.periodShort}
              </div>
              <div>
                <div style={{ fontSize: 18, fontWeight: 500, marginBottom: 4 }}>
                  {latest?.role}{" "}
                  <span style={{ color: "var(--muted)", fontWeight: 400 }}>
                    {latest && `${t.about.at} ${latest.company}`}
                  </span>
                </div>
                <div
                  style={{
                    fontSize: 13.5,
                    color: "var(--muted)",
                    marginBottom: 14,
                  }}
                >
                  {[latest?.sector, latest?.location, latest?.context].filter(Boolean).join(" · ")}
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
                  {latest?.highlights.map((b, j) => (
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
