"use client";

import { ButtonLink, Card, Label, Pill, Tag, TagList } from "@/components/ui";
import { ArrowUpRightSm } from "@/components/ui/icons";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import Image from "next/image";

const LOCAL_SCREENSHOTS: Record<string, string> = {
  "pipv-pped": "/projects/pipv-pped.png",
  tacomfav: "/projects/tacomfav.png",
  "e-panacee": "/projects/e-panacee.png",
};

const Projet = () => {
  const { t } = useLanguage();

  return (
    <section
      className="ho-section"
      id="travaux"
      style={{ paddingTop: 24, scrollMarginTop: 96 }}
    >
      <div
        className="pf-reveal"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "end",
          marginBottom: 40,
          gap: 16,
          flexWrap: "wrap",
        }}
      >
        <div>
          <Label style={{ display: "block", marginBottom: 18 }}>
            {t.work.label}
          </Label>
          <h2
            className="pf-display"
            style={{
              fontSize: "clamp(34px, 4.5vw, 56px)",
              margin: 0,
              lineHeight: 1.05,
            }}
          >
            {t.work.h1}
          </h2>
        </div>
        <ButtonLink href="#contact" variant="ghost" style={{ fontSize: 13 }}>
          {t.work.all}
        </ButtonLink>
      </div>

      <div className="ho-grid-projects">
        {t.projects.items.map((p, i) => {
          const screenshot = LOCAL_SCREENSHOTS[p.slug];
          return (
            <a
              key={p.slug}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
              aria-label={`${t.projects.visitSite} — ${p.name}`}
            >
              <Card className="pf-reveal" style={{ overflow: "hidden" }}>
                <div className={`ho-cover ho-cover-${i + 1}`}>
                  {screenshot ? (
                    <Image
                      src={screenshot}
                      alt={`${p.name} — ${p.sub}`}
                      fill
                      sizes="(max-width: 680px) 100vw, (max-width: 980px) 50vw, 33vw"
                      className="ho-cover-image"
                      style={{ opacity: 0.92 }}
                    />
                  ) : (
                    <div className="pf-display ho-cover-text">{p.shortName}</div>
                  )}
                  <div
                    style={{
                      position: "absolute",
                      top: 18,
                      left: 18,
                      zIndex: 2,
                    }}
                  >
                    <Pill variant="on-pastel" style={{ fontSize: 11 }}>
                      {p.tag}
                    </Pill>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      top: 18,
                      right: 18,
                      zIndex: 2,
                    }}
                    className="ho-cover-year"
                  >
                    {p.year}
                  </div>
                </div>
                <div style={{ padding: 24 }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                      marginBottom: 4,
                      gap: 8,
                    }}
                  >
                    <h3
                      className="pf-display"
                      style={{ fontSize: 20, margin: 0 }}
                    >
                      {p.name}
                    </h3>
                    <span
                      className="pf-arrow"
                      style={{ width: 28, height: 28 }}
                      aria-hidden="true"
                    >
                      <ArrowUpRightSm />
                    </span>
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      color: "var(--muted)",
                      marginBottom: 12,
                    }}
                  >
                    {p.sub}
                  </div>
                  <p
                    style={{
                      fontSize: 13.5,
                      color: "var(--muted)",
                      lineHeight: 1.55,
                      margin: 0,
                      marginBottom: 16,
                    }}
                  >
                    {p.description}
                  </p>
                  <TagList items={p.stack} max={5} />
                </div>
              </Card>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Projet;
