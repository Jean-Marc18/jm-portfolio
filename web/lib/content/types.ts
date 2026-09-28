import type { Localized } from "../projects/types";
import type { LocalizedBlocks } from "./blocks";

export type { Localized };

export type SocialLink = { label: string; url: string };

/** Site-wide content as stored in Sanity: both locales, resolved on the client. */
export type SiteSettings = {
  availabilityHeadline: Localized;
  availabilityShort: Localized;
  availabilityDetail: Localized;
  status: Localized;
  email: string;
  socialLinks: SocialLink[];
  location: Localized;
  languages: Localized;
  cvUrl: string;
  yearsOfExperience: string;
  projectsCount: string;
  sectorsCount: string;
  sectorsList: Localized;
  technologiesCount: string;
  homeStack: string[];
  seoTitle: Localized;
  seoDescription: Localized;
  ogImage: string | null;
};

export type Experience = {
  company: string;
  role: Localized;
  sector: Localized;
  location: Localized;
  context: Localized;
  startYear: string;
  endYear: string | null;
  highlights: Localized[];
  stack: string[];
};

export type SkillCategory = { title: Localized; items: string[] };

export type Service = {
  title: Localized;
  summary: Localized;
  description: Localized;
  tags: Localized[];
  deliverables: Localized[];
  featured: boolean;
  badge: Localized;
};

export type Faq = { question: Localized; answer: Localized };

export type AboutContent = {
  photo: { src: string; alt: string } | null;
  portraitRole: Localized;
  heroLine1: Localized;
  heroLine2: Localized;
  heroLine3: Localized;
  bio: LocalizedBlocks;
  careerTitle: Localized;
  careerIntro: Localized;
  stackTitle: Localized;
  stackIntro: Localized;
  valuesTitle: Localized;
  values: { title: Localized; description: Localized }[];
  homeIntro: LocalizedBlocks;
};

export type SiteContent = {
  settings: SiteSettings;
  experiences: Experience[];
  skills: SkillCategory[];
  services: Service[];
  faqs: Faq[];
  about: AboutContent;
};

/** What Sanity may return: every part is optional, missing parts fall back to defaults. */
export type CmsSiteContent = {
  settings: Partial<SiteSettings> | null;
  experiences: Experience[];
  skills: SkillCategory[];
  services: Service[];
  faqs: Faq[];
  about: Partial<AboutContent> | null;
};
