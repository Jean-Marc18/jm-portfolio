import "server-only";
import { client } from "@/sanity/client";
import { SITE_CONTENT_QUERY } from "@/sanity/queries";
import { SANITY_TAG } from "@/lib/projects/getProjects";
import { urlFor } from "@/sanity/image";
import type { CmsSiteContent, Localized } from "./types";

type RawLocalized = { fr: string | null; en: string | null } | null | undefined;

const loc = (value: RawLocalized): Localized => ({ fr: value?.fr, en: value?.en });
const list = <T,>(value: T[] | null | undefined) => value ?? [];

/**
 * Loads site-wide content from Sanity. Returns null when Sanity is
 * unreachable, so every section falls back to the bundled defaults.
 */
export async function getSiteContent(): Promise<
  (CmsSiteContent & { projectCount: number }) | null
> {
  try {
    const data = await client.fetch(
      SITE_CONTENT_QUERY,
      {},
      { next: { revalidate: 3600, tags: [SANITY_TAG] } },
    );
    const s = data.settings;
    const a = data.about;

    return {
      projectCount: data.projectCount,
      settings: s
        ? {
            availabilityHeadline: loc(s.availabilityHeadline),
            availabilityShort: loc(s.availabilityShort),
            availabilityDetail: loc(s.availabilityDetail),
            status: loc(s.status),
            email: s.email ?? undefined,
            socialLinks: list(s.socialLinks).flatMap((l) =>
              l.label && l.url ? [{ label: l.label, url: l.url }] : [],
            ),
            location: loc(s.location),
            languages: loc(s.languages),
            cvUrl: s.cvUrl ? `${s.cvUrl}?dl=cv-jean-marc-koffi.pdf` : undefined,
            yearsOfExperience: s.yearsOfExperience ?? undefined,
            projectsCount: s.projectsCount ?? undefined,
            sectorsCount: s.sectorsCount ?? undefined,
            sectorsList: loc(s.sectorsList),
            technologiesCount: s.technologiesCount ?? undefined,
            homeStack: list(s.homeStack),
            seoTitle: loc(s.seoTitle),
            seoDescription: loc(s.seoDescription),
            ogImage: s.ogImage ?? null,
          }
        : null,
      experiences: data.experiences.map((e) => ({
        company: e.company ?? "",
        role: loc(e.role),
        sector: loc(e.sector),
        location: loc(e.location),
        context: loc(e.context),
        startYear: e.startYear ?? "",
        endYear: e.endYear ?? null,
        highlights: list(e.highlights).map(loc),
        stack: list(e.stack),
      })),
      skills: data.skills.map((c) => ({ title: loc(c.title), items: list(c.items) })),
      services: data.services.map((sv) => ({
        title: loc(sv.title),
        summary: loc(sv.summary),
        description: loc(sv.description),
        tags: list(sv.tags).map(loc),
        deliverables: list(sv.deliverables).map(loc),
        featured: Boolean(sv.featured),
        badge: loc(sv.badge),
      })),
      faqs: data.faqs.map((f) => ({ question: loc(f.question), answer: loc(f.answer) })),
      about: a
        ? {
            photo: a.photo?.asset
              ? {
                  src: urlFor(a.photo).width(900).height(1200).fit("crop").auto("format").url(),
                  alt: a.photo.alt ?? "Jean-Marc Koffi",
                }
              : null,
            portraitRole: loc(a.portraitRole),
            heroLine1: loc(a.heroLine1),
            heroLine2: loc(a.heroLine2),
            heroLine3: loc(a.heroLine3),
            bio: { fr: a.bio.fr, en: a.bio.en },
            careerTitle: loc(a.careerTitle),
            careerIntro: loc(a.careerIntro),
            stackTitle: loc(a.stackTitle),
            stackIntro: loc(a.stackIntro),
            valuesTitle: loc(a.valuesTitle),
            values: list(a.values).map((v) => ({
              title: loc(v.title),
              description: loc(v.description),
            })),
            homeIntro: { fr: a.homeIntro.fr, en: a.homeIntro.en },
          }
        : null,
    };
  } catch (err) {
    console.error(
      "[sanity] site content fetch failed, using bundled content:",
      (err as Error).message,
    );
    return null;
  }
}
