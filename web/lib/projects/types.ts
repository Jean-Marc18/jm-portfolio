export type Localized = { fr?: string | null; en?: string | null };

export type ProjectCover = { src: string; alt: string };

/** Project as loaded from Sanity: both locales, so switching language needs no refetch. */
export type CmsProject = {
  slug: string;
  name: string;
  shortName: string;
  year: string;
  url: string;
  stack: string[];
  tag: Localized;
  sub: Localized;
  description: Localized;
  role: Localized;
  cover: ProjectCover | null;
  /** null: never set in the Studio. */
  hasCaseStudy: boolean | null;
};

/** Project resolved for the current locale, as rendered by the UI. */
export type ProjectItem = {
  slug: string;
  name: string;
  shortName: string;
  tag: string;
  year: string;
  sub: string;
  description: string;
  url: string;
  stack: string[];
  role?: string;
  cover?: ProjectCover;
  /** Link to /projets/<slug> instead of the live site. */
  caseStudyHref?: string;
};
