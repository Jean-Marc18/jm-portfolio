"use client";

import { createContext, useContext, useMemo } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import type { Locale } from "@/lib/i18n/dictionaries";
import { projectsFromDictionary } from "./fallback";
import type { CmsProject, Localized, ProjectItem } from "./types";

const ProjectsContext = createContext<CmsProject[] | null>(null);

export const ProjectsProvider = ({
  projects,
  children,
}: {
  projects: CmsProject[] | null;
  children: React.ReactNode;
}) => (
  <ProjectsContext.Provider value={projects}>{children}</ProjectsContext.Provider>
);

const pick = (value: Localized, locale: Locale) =>
  value[locale] ?? value[locale === "fr" ? "en" : "fr"] ?? "";

/** Projects for the current locale: Sanity first, bundled dictionary otherwise. */
export const useProjects = (): ProjectItem[] => {
  const cms = useContext(ProjectsContext);
  const { t, locale } = useLanguage();

  return useMemo(() => {
    if (!cms?.length) return projectsFromDictionary(t);
    return cms.map((p) => ({
      slug: p.slug,
      name: p.name,
      shortName: p.shortName,
      year: p.year,
      url: p.url,
      stack: p.stack,
      tag: pick(p.tag, locale),
      sub: pick(p.sub, locale),
      description: pick(p.description, locale),
      role: pick(p.role, locale) || undefined,
      cover: p.cover ?? undefined,
    }));
  }, [cms, t, locale]);
};
