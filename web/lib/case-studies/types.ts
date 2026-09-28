import type { Localized } from "../projects/types";

export type { Blocks, LocalizedBlocks } from "../content/blocks";
import type { LocalizedBlocks } from "../content/blocks";

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
