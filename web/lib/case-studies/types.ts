import type { Localized } from "../projects/types";

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
export type FeatureSize = "large" | "normal" | "small";

/** A case study as stored in Sanity: both locales, resolved on the client. */
export type CaseStudy = {
  kicker: Localized;
  intro: Localized;
  facts: { label: Localized; value: Localized }[];
  coverLine1: string;
  coverLine2: string;
  version: string;
  productType: Localized;
  mainStack: string;
  contextTitle: Localized;
  contextTags: Localized[];
  contextBody: LocalizedBlocks;
  approachLabel: Localized;
  approachTitle: Localized;
  approachIntro: Localized;
  approachPoints: { title: Localized; description: Localized }[];
  featuresTitle: Localized;
  featuresIntro: Localized;
  features: {
    title: Localized;
    description: Localized;
    image: string | null;
    size: FeatureSize;
  }[];
  stackTitle: Localized;
  stackIntro: Localized;
  stackGroups: { title: Localized; items: string[] }[];
  resultsTitle: Localized;
  results: { value: string; label: Localized }[];
};
