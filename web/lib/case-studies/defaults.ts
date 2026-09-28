import { dictionaries } from "../i18n/dictionaries";
import type { Localized } from "../projects/types";
import type { Blocks, CaseStudy } from "./types";

// Case studies bundled with the site: used when Sanity has none for a
// project, and as the source of `studio/scripts/import-content.ts`.

const fr = dictionaries.fr.projectPage.cases;
const en = dictionaries.en.projectPage.cases;

const both = (frValue: string, enValue: string): Localized => ({ fr: frValue, en: enValue });

/** Paragraphs as Portable Text; each paragraph is [plain, bold, plain] runs. */
const paragraphs = (id: string, items: [string, string?, string?][]): Blocks =>
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
              marks: j === 1 ? ["strong"] : [],
            },
          ]
        : [],
    ),
  }));

const ciblea = (
  c: typeof fr.ciblea,
): { body: Blocks; points: [string, string][] } => ({
  body: paragraphs("ctx", [
    [c.ctxP1],
    [c.ctxP2a, c.ctxP2b, c.ctxP2c],
    [c.ctxP3a, c.ctxP3b, c.ctxP3c],
  ]),
  points: c.ch.map(([, title, desc]) => [title, desc]),
});

const cFr = fr.ciblea;
const cEn = en.ciblea;

export const DEFAULT_CASE_STUDIES: Record<string, CaseStudy> = {
  ciblea: {
    kicker: both(cFr.studyTag, cEn.studyTag),
    intro: both(cFr.heroP, cEn.heroP),
    facts: cFr.info.map(([label, value], i) => ({
      label: both(label, cEn.info[i][0]),
      value: both(value, cEn.info[i][1]),
    })),
    coverLine1: "Ciblea",
    coverLine2: "IA.",
    version: cFr.coverVer,
    productType: both(cFr.coverTypeValue, cEn.coverTypeValue),
    mainStack: cFr.coverStackValue,
    contextTitle: both(cFr.ctxH1, cEn.ctxH1),
    contextTags: cFr.ctxTags.map((tag, i) => both(tag, cEn.ctxTags[i])),
    contextBody: { fr: ciblea(cFr).body, en: ciblea(cEn).body },
    approachLabel: both(cFr.appLabel, cEn.appLabel),
    approachTitle: both(cFr.appH1, cEn.appH1),
    approachIntro: both(cFr.appP, cEn.appP),
    approachPoints: ciblea(cFr).points.map(([title, desc], i) => ({
      title: both(title, ciblea(cEn).points[i][0]),
      description: both(desc, ciblea(cEn).points[i][1]),
    })),
    featuresTitle: both(cFr.mockH1, cEn.mockH1),
    featuresIntro: both(cFr.mockP, cEn.mockP),
    features: cFr.mocks.map(([title, desc, image], i) => ({
      title: both(title, cEn.mocks[i][0]),
      description: both(desc, cEn.mocks[i][1]),
      image,
      size: i === 0 ? "large" : title.toLowerCase().includes("template") ? "small" : "normal",
    })),
    stackTitle: both(cFr.skH1, cEn.skH1),
    stackIntro: both(cFr.skP, cEn.skP),
    stackGroups: cFr.skGroups.map(([title, items], i) => ({
      title: both(title, cEn.skGroups[i][0]),
      items,
    })),
    resultsTitle: both(cFr.resH1, cEn.resH1),
    results: cFr.res.map(([value, label], i) => ({ value, label: both(label, cEn.res[i][1]) })),
  },
};
