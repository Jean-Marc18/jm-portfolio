import { DEFAULT_SITE_CONTENT } from "./defaults";
import { hasText } from "./localize";
import type { CmsSiteContent, Localized, SiteContent, SiteSettings } from "./types";

const orDefault = <T,>(value: T[] | undefined, fallback: T[]) =>
  value?.length ? value : fallback;

/** Sanity content first, field by field; bundled defaults for anything missing. */
export function mergeSiteContent(
  cms: (CmsSiteContent & { projectCount: number }) | null,
): SiteContent {
  const base = DEFAULT_SITE_CONTENT;
  if (!cms) return base;

  const s = cms.settings ?? {};
  const settings = { ...base.settings };
  for (const key of Object.keys(settings) as (keyof SiteSettings)[]) {
    const value = s[key];
    if (Array.isArray(value)) {
      if (value.length) Object.assign(settings, { [key]: value });
    } else if (value && typeof value === "object") {
      if (hasText(value as Localized)) Object.assign(settings, { [key]: value });
    } else if (value) {
      Object.assign(settings, { [key]: value });
    }
  }
  // Settings exist but no manual count: count the published projects.
  if (cms.settings && !s.projectsCount && cms.projectCount > 0) {
    settings.projectsCount = String(cms.projectCount).padStart(2, "0");
  }

  return {
    settings,
    experiences: orDefault(cms.experiences, base.experiences),
    skills: orDefault(cms.skills, base.skills),
    services: orDefault(cms.services, base.services),
    faqs: orDefault(cms.faqs, base.faqs),
  };
}
