import type { Locale } from "../i18n/dictionaries";

/**
 * Portable Text paragraphs (the Studio's `simpleBlockContent`). Declared here
 * rather than imported from sanity.types.ts so the Studio import script can
 * share this file.
 */
export type Blocks = Array<{
  _type: "block";
  _key: string;
  style?: "normal";
  markDefs?: unknown[] | null;
  children?: Array<{ _type: "span"; _key: string; text?: string; marks?: string[] }>;
}>;

export type LocalizedBlocks = { fr?: Blocks | null; en?: Blocks | null };

/**
 * Builds paragraphs from runs of text: in each paragraph, runs at odd
 * positions are bold (["plain ", "bold", " plain", "bold", …]).
 */
export const paragraphs = (id: string, items: readonly (readonly string[])[]): Blocks =>
  items.map((runs, i) => ({
    _type: "block",
    _key: `${id}${i}`,
    style: "normal",
    markDefs: [],
    children: runs.flatMap((text, j) =>
      text
        ? [
            {
              _type: "span" as const,
              _key: `${id}${i}s${j}`,
              text,
              marks: j % 2 === 1 ? ["strong"] : [],
            },
          ]
        : [],
    ),
  }));

export const pickBlocks = (value: LocalizedBlocks | null | undefined, locale: Locale) =>
  (value?.[locale]?.length ? value[locale] : value?.[locale === "fr" ? "en" : "fr"]) ?? [];

export const hasBlocks = (value: LocalizedBlocks | null | undefined) =>
  Boolean(value?.fr?.length || value?.en?.length);
