import type { Dictionary } from "@/lib/i18n/dictionaries";
import { DEFAULT_CASE_STUDIES } from "@/lib/case-studies/defaults";
import type { ProjectItem } from "./types";

// Screenshots bundled in /public, used when Sanity has no projects yet.
const LOCAL_SCREENSHOTS: Record<string, string> = {
  ciblea: "/projects/ciblea/hero.png",
  "pipv-pped": "/projects/pipv-pped.png",
  tacomfav: "/projects/tacomfav.png",
  "e-panacee": "/projects/e-panacee.png",
  "maedow-flow": "/projects/maedow-flow.png",
  "maedow-arch-docs": "/projects/maedow-arch-docs.png",
};

/** Sanity switch first; when never set, projects with a bundled case study. */
export const caseStudyHref = (slug: string, hasCaseStudy: boolean | null) =>
  (hasCaseStudy ?? slug in DEFAULT_CASE_STUDIES) ? `/projets/${slug}` : undefined;

export function projectsFromDictionary(t: Dictionary): ProjectItem[] {
  return t.projects.items.map((p) => {
    const src = LOCAL_SCREENSHOTS[p.slug];
    return {
      ...p,
      role: t.travauxPage.roleByName[p.name],
      cover: src ? { src, alt: `${p.name}, ${p.sub}` } : undefined,
      caseStudyHref: caseStudyHref(p.slug, null),
    };
  });
}
