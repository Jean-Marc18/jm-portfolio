import { DEFAULT_SITE_CONTENT } from "./defaults";
import type { CmsSiteContent, SiteContent } from "./types";

const orDefault = <T,>(value: T[] | undefined, fallback: T[]) =>
  value?.length ? value : fallback;

/** A value counts as filled in when it carries text, items or an image. */
const isFilled = (value: unknown): boolean => {
  if (value == null) return false;
  if (typeof value === "string") return value.length > 0;
  if (Array.isArray(value)) return value.length > 0;
  if (typeof value === "object") {
    const o = value as Record<string, unknown>;
    // FR/EN pairs (text or rich text), or an image { src }.
    if ("fr" in o || "en" in o) return isFilled(o.fr) || isFilled(o.en);
    if ("src" in o) return isFilled(o.src);
  }
  return Boolean(value);
};

/** Field by field: the Sanity value when filled in, the default otherwise. */
function mergeFields<T extends object>(base: T, cms: Partial<T> | null | undefined): T {
  const out = { ...base };
  for (const key of Object.keys(base) as (keyof T)[]) {
    const value = cms?.[key];
    if (isFilled(value)) out[key] = value as T[keyof T];
  }
  return out;
}

/** Sanity content first, field by field; bundled defaults for anything missing. */
export function mergeSiteContent(
  cms: (CmsSiteContent & { projectCount: number }) | null,
): SiteContent {
  const base = DEFAULT_SITE_CONTENT;
  if (!cms) return base;

  const settings = mergeFields(base.settings, cms.settings);
  // Settings exist but no manual count: count the published projects.
  if (cms.settings && !cms.settings.projectsCount && cms.projectCount > 0) {
    settings.projectsCount = String(cms.projectCount).padStart(2, "0");
  }

  return {
    settings,
    experiences: orDefault(cms.experiences, base.experiences),
    skills: orDefault(cms.skills, base.skills),
    services: orDefault(cms.services, base.services),
    faqs: orDefault(cms.faqs, base.faqs),
    about: mergeFields(base.about, cms.about),
  };
}
