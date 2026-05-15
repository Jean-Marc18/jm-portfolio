"use client";

import { ArrowLink, ButtonLink, Label, Pill, Tag } from "@/components/ui";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const Services = () => {
  const { t } = useLanguage();

  return (
    <section className="ho-section" id="services">
      <div className="ho-grid-services-head pf-reveal">
        <div>
          <Label style={{ display: "block", marginBottom: 18 }}>
            {t.services.label}
          </Label>
          <h2
            className="pf-display"
            style={{
              fontSize: "clamp(34px, 4.5vw, 56px)",
              margin: 0,
              lineHeight: 1.05,
            }}
          >
            {t.services.h1a}
            <br />
            {t.services.h1b}
          </h2>
        </div>
        <div>
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.6,
              color: "var(--muted)",
              margin: 0,
              maxWidth: 480,
            }}
          >
            {t.services.intro}
          </p>
          <ButtonLink
            href="/contact"
            variant="ghost"
            style={{ marginTop: 24, fontSize: 13 }}
          >
            {t.services.process}
          </ButtonLink>
        </div>
      </div>

      <div className="ho-grid-services">
        {t.services.items.map((s, i) => {
          const featured = "featured" in s && s.featured;
          const tagVariant = featured ? "dark" : "default";
          return (
            <div
              key={s.title}
              className={`ho-service ${featured ? "ho-service-featured" : ""} pf-reveal`}
            >
              <div>
                <div className="ho-service-head">
                  <Pill
                    variant={featured ? "dark" : "default"}
                    leading={
                      <span
                        style={{
                          width: 5,
                          height: 5,
                          borderRadius: "50%",
                          background: featured ? "var(--accent)" : "var(--ink)",
                        }}
                      />
                    }
                  >
                    0{i + 1}
                  </Pill>
                  {featured && "badge" in s && (
                    <Tag variant="dark">{s.badge}</Tag>
                  )}
                </div>
                <h3 className="pf-display">{s.title}</h3>
                <p>{s.desc}</p>
              </div>
              <div className="ho-service-foot">
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {s.tags.map((tg) => (
                    <Tag key={tg} variant={tagVariant}>
                      {tg}
                    </Tag>
                  ))}
                </div>
                <ArrowLink
                  href="/contact"
                  aria-label={s.title}
                  variant={featured ? "accent" : "default"}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
