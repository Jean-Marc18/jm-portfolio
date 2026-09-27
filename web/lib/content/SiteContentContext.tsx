"use client";

import { createContext, useContext, useMemo } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { DEFAULT_SITE_CONTENT } from "./defaults";
import { pick } from "./localize";
import type { Experience, SiteContent } from "./types";

const SiteContentContext = createContext<SiteContent>(DEFAULT_SITE_CONTENT);

export const SiteContentProvider = ({
  content,
  children,
}: {
  content: SiteContent;
  children: React.ReactNode;
}) => (
  <SiteContentContext.Provider value={content}>{children}</SiteContentContext.Provider>
);

const resolveExperience = (e: Experience, locale: "fr" | "en", present: string) => ({
  company: e.company,
  role: pick(e.role, locale),
  sector: pick(e.sector, locale),
  location: pick(e.location, locale),
  context: pick(e.context, locale),
  /** 2024-2026, or 2024-aujourd'hui for a current position. */
  period: `${e.startYear}-${e.endYear ?? present}`,
  /** 2024-26, for tight labels. */
  periodShort: `${e.startYear}-${e.endYear ? e.endYear.slice(2) : present}`,
  highlights: e.highlights.map((h) => pick(h, locale)).filter(Boolean),
  stack: e.stack,
});

export type ResolvedExperience = ReturnType<typeof resolveExperience>;

/** Site-wide content (Sanity or bundled defaults) resolved for the current locale. */
export const useSiteContent = () => {
  const content = useContext(SiteContentContext);
  const { t, locale } = useLanguage();

  return useMemo(() => {
    const s = content.settings;
    return {
      settings: {
        availabilityHeadline: pick(s.availabilityHeadline, locale),
        availabilityShort: pick(s.availabilityShort, locale),
        availabilityDetail: pick(s.availabilityDetail, locale),
        status: pick(s.status, locale),
        email: s.email,
        socialLinks: s.socialLinks,
        location: pick(s.location, locale),
        languages: pick(s.languages, locale),
        cvUrl: s.cvUrl,
        yearsOfExperience: s.yearsOfExperience,
        projectsCount: s.projectsCount,
        sectorsCount: s.sectorsCount,
        sectorsList: pick(s.sectorsList, locale),
        technologiesCount: s.technologiesCount,
        homeStack: s.homeStack,
      },
      experiences: content.experiences.map((e) =>
        resolveExperience(e, locale, t.about.present),
      ),
      skills: content.skills.map((c) => ({ title: pick(c.title, locale), items: c.items })),
      services: content.services.map((sv) => ({
        title: pick(sv.title, locale),
        summary: pick(sv.summary, locale),
        description: pick(sv.description, locale),
        tags: sv.tags.map((tag) => pick(tag, locale)).filter(Boolean),
        deliverables: sv.deliverables.map((d) => pick(d, locale)).filter(Boolean),
        featured: sv.featured,
        badge: pick(sv.badge, locale),
      })),
      faqs: content.faqs.map((f) => ({
        question: pick(f.question, locale),
        answer: pick(f.answer, locale),
      })),
    };
  }, [content, t, locale]);
};
