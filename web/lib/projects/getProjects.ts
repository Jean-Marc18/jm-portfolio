import "server-only";
import { client } from "@/sanity/client";
import { urlFor } from "@/sanity/image";
import { PROJECTS_QUERY } from "@/sanity/queries";
import type { CmsProject } from "./types";

export const PROJECTS_TAG = "project";

/**
 * Loads projects from Sanity. Returns null when Sanity is unreachable or
 * empty, so the site falls back to the projects bundled in the dictionaries.
 */
export async function getProjects(): Promise<CmsProject[] | null> {
  try {
    const docs = await client.fetch(
      PROJECTS_QUERY,
      {},
      { next: { revalidate: 3600, tags: [PROJECTS_TAG] } },
    );
    if (!docs.length) return null;

    return docs.map((doc) => ({
      slug: doc.slug ?? "",
      name: doc.name ?? "",
      shortName: doc.shortName ?? doc.name ?? "",
      year: doc.year ?? "",
      url: doc.url ?? "",
      stack: doc.stack ?? [],
      tag: doc.tag,
      sub: doc.sub,
      description: doc.description,
      role: doc.role,
      cover: doc.coverImage?.asset
        ? {
            src: urlFor(doc.coverImage).width(1600).fit("max").auto("format").url(),
            alt: doc.coverImage.alt ?? doc.name ?? "",
          }
        : null,
    }));
  } catch (err) {
    console.error(
      "[sanity] projects fetch failed, using bundled projects:",
      (err as Error).message,
    );
    return null;
  }
}
