import "server-only";
import { client } from "@/sanity/client";
import { urlFor } from "@/sanity/image";
import { CASE_STUDY_QUERY } from "@/sanity/queries";
import { SANITY_TAG } from "@/lib/projects/getProjects";
import type { Localized } from "@/lib/projects/types";
import { DEFAULT_CASE_STUDIES } from "./defaults";
import type { CaseStudy, FeatureSize } from "./types";

type Raw = { fr: string | null; en: string | null } | null | undefined;
const loc = (v: Raw): Localized => ({ fr: v?.fr, en: v?.en });
const list = <T,>(v: T[] | null | undefined) => v ?? [];
const SIZES: FeatureSize[] = ["large", "normal", "small"];

/**
 * Case study for a project: Sanity when switched on for it, none when
 * switched off, the bundled one (if any) when never configured.
 * null means no case study page.
 */
export async function getCaseStudy(slug: string): Promise<CaseStudy | null> {
  const fallback = DEFAULT_CASE_STUDIES[slug] ?? null;
  try {
    const d = await client.fetch(
      CASE_STUDY_QUERY,
      { slug },
      { next: { revalidate: 3600, tags: [SANITY_TAG] } },
    );
    // Project unknown to Sanity, or case study never configured: bundled one.
    if (!d || d.hasCaseStudy === null) return fallback;
    // Explicitly switched off in the Studio.
    if (!d.hasCaseStudy) return null;

    return {
      kicker: loc(d.kicker),
      intro: loc(d.intro),
      facts: list(d.facts).map((f) => ({ label: loc(f.label), value: loc(f.value) })),
      coverLine1: d.coverLine1 ?? d.name ?? "",
      coverLine2: d.coverLine2 ?? "",
      version: d.version ?? "",
      productType: loc(d.productType),
      mainStack: d.mainStack ?? "",
      contextTitle: loc(d.contextTitle),
      contextTags: list(d.contextTags).map(loc),
      contextBody: { fr: d.contextBody.fr, en: d.contextBody.en },
      approachLabel: loc(d.approachLabel),
      approachTitle: loc(d.approachTitle),
      approachIntro: loc(d.approachIntro),
      approachPoints: list(d.approachPoints).map((p) => ({
        title: loc(p.title),
        description: loc(p.description),
      })),
      featuresTitle: loc(d.featuresTitle),
      featuresIntro: loc(d.featuresIntro),
      features: list(d.features).map((f) => ({
        title: loc(f.title),
        description: loc(f.description),
        image: f.image?.asset ? urlFor(f.image).width(1600).fit("max").auto("format").url() : null,
        size: SIZES.includes(f.size as FeatureSize) ? (f.size as FeatureSize) : "normal",
      })),
      stackTitle: loc(d.stackTitle),
      stackIntro: loc(d.stackIntro),
      stackGroups: list(d.stackGroups).map((g) => ({ title: loc(g.title), items: list(g.items) })),
      resultsTitle: loc(d.resultsTitle),
      results: list(d.results).map((r) => ({ value: r.value ?? "", label: loc(r.label) })),
    };
  } catch (err) {
    console.error(
      `[sanity] case study "${slug}" fetch failed, using bundled content:`,
      (err as Error).message,
    );
    return fallback;
  }
}
