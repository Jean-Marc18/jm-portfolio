import { dictionaries } from "../i18n/dictionaries";
import { paragraphs } from "./blocks";
import type { Localized, SiteContent } from "./types";

// Content bundled with the site: used as fallback when Sanity has nothing,
// and as the source of `studio/scripts/import-content.ts`.

const fr = dictionaries.fr;
const en = dictionaries.en;

const both = (frValue: string, enValue: string): Localized => ({ fr: frValue, en: enValue });

const zip = (frList: readonly string[], enList: readonly string[]) =>
  frList.map((value, i) => both(value, enList[i] ?? value));

// "secteurs (IA, institutionnel, …)" → "IA, institutionnel, …"
const between = (text: string) => text.match(/\(([^)]+)\)/)?.[1] ?? "";

// "Fintech · Abidjan · CDC-CI / Marché UMOA" → ["Fintech", "Abidjan", "CDC-CI / Marché UMOA"]
const [sectorFr, locationFr, contextFr] = fr.about.roleCtx.split(" · ");
const [sectorEn, locationEn, contextEn] = en.about.roleCtx.split(" · ");

export const DEFAULT_SITE_CONTENT: SiteContent = {
  settings: {
    availabilityHeadline: both(fr.nav.available, en.nav.available),
    availabilityShort: both(fr.contact.status, en.contact.status),
    availabilityDetail: both(fr.aboutPage.avail, en.aboutPage.avail),
    status: both(fr.contactPage.coordStV, en.contactPage.coordStV),
    email: "jeanmarc.dev.18@gmail.com",
    socialLinks: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/jean-marc-koffi/" },
      { label: "GitHub", url: "https://github.com/Jean-Marc18" },
      { label: "WhatsApp", url: "https://wa.me/+2250768910092" },
    ],
    location: both(fr.contactPage.coordLocV, en.contactPage.coordLocV),
    languages: both(fr.contactPage.coordLangV, en.contactPage.coordLangV),
    cvUrl: "/cv-jean-marc-koffi.pdf",
    yearsOfExperience: fr.aboutPage.stats[0][0],
    projectsCount: fr.aboutPage.stats[1][0],
    sectorsCount: fr.aboutPage.stats[2][0],
    sectorsList: both(between(fr.aboutPage.stats[2][1]), between(en.aboutPage.stats[2][1])),
    technologiesCount: fr.aboutPage.stats[3][0],
    homeStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "Zustand",
      "React Hook Form",
      "Zod",
      "Radix UI",
      "Framer Motion",
      "GSAP",
      "Sanity",
      "NextAuth.js",
      "Angular",
      "React Native (Expo)",
    ],
    seoTitle: both(
      "Jean-Marc Koffi · Développeur Front-End",
      "Jean-Marc Koffi · Front-End Developer",
    ),
    seoDescription: both(
      "Développeur front-end à Abidjan. Interfaces performantes, accessibles, optimisées SEO. Architectures modernes, pour des produits qui durent.",
      "Front-end developer based in Abidjan. Fast, accessible, SEO-friendly interfaces built on modern architectures, for products that last.",
    ),
    ogImage: null,
  },
  experiences: [
    {
      company: fr.banner.company,
      role: both(fr.about.role, en.about.role),
      sector: both(sectorFr, sectorEn),
      location: both(locationFr, locationEn),
      context: both(contextFr, contextEn),
      startYear: "2024",
      endYear: "2026",
      highlights: [
        ...zip(fr.aboutPage.bullets, en.aboutPage.bullets),
        both(fr.about.bullets[3], en.about.bullets[3]),
      ],
      stack: ["Next.js", "TypeScript", "TanStack Query", "Radix UI", "Tailwind"],
    },
  ],
  skills: Object.entries(fr.aboutPage.skillsLocal).map(([title, items], i) => ({
    title: both(title, Object.keys(en.aboutPage.skillsLocal)[i] ?? title),
    items,
  })),
  services: fr.servicesPage.services.map((page, i) => {
    const pageEn = en.servicesPage.services[i];
    const home = fr.services.items[i];
    const homeEn = en.services.items[i];
    return {
      title: both(page.title, pageEn.title),
      summary: both(home.desc, homeEn.desc),
      description: both(page.long, pageEn.long),
      tags: zip(page.tags, pageEn.tags),
      deliverables: zip(page.deliv, pageEn.deliv),
      featured: "featured" in page && Boolean(page.featured),
      badge: both(
        "badge" in home ? String(home.badge) : "",
        "badge" in homeEn ? String(homeEn.badge) : "",
      ),
    };
  }),
  about: {
    photo: { src: "/photo2.jpg", alt: "Jean-Marc Koffi" },
    portraitRole: both(fr.aboutPage.portraitRole, en.aboutPage.portraitRole),
    heroLine1: both(fr.aboutPage.heroH1a, en.aboutPage.heroH1a),
    heroLine2: both(fr.aboutPage.heroH1b, en.aboutPage.heroH1b),
    heroLine3: both(fr.aboutPage.heroH1c, en.aboutPage.heroH1c),
    bio: {
      fr: paragraphs("bio", [
        [fr.aboutPage.p1],
        [fr.aboutPage.p2],
        [fr.aboutPage.p3a, fr.aboutPage.p3inexa, fr.aboutPage.p3b, fr.aboutPage.p3cdc, fr.aboutPage.p3c],
      ]),
      en: paragraphs("bio", [
        [en.aboutPage.p1],
        [en.aboutPage.p2],
        [en.aboutPage.p3a, en.aboutPage.p3inexa, en.aboutPage.p3b, en.aboutPage.p3cdc, en.aboutPage.p3c],
      ]),
    },
    careerTitle: both(fr.aboutPage.parH1, en.aboutPage.parH1),
    careerIntro: both(fr.aboutPage.parP, en.aboutPage.parP),
    stackTitle: both(fr.aboutPage.skH1, en.aboutPage.skH1),
    stackIntro: both(fr.aboutPage.skP, en.aboutPage.skP),
    valuesTitle: both(fr.aboutPage.valH1, en.aboutPage.valH1),
    values: fr.aboutPage.values.map(([, title, desc], i) => ({
      title: both(title, en.aboutPage.values[i][1]),
      description: both(desc, en.aboutPage.values[i][2]),
    })),
    homeIntro: {
      fr: paragraphs("home", [
        [fr.about.p1],
        [fr.about.p2a, fr.about.p2b, fr.about.p2c, fr.about.p2d, fr.about.p2e, fr.about.p2f, fr.about.p2g],
      ]),
      en: paragraphs("home", [
        [en.about.p1],
        [en.about.p2a, en.about.p2b, en.about.p2c, en.about.p2d, en.about.p2e, en.about.p2f, en.about.p2g],
      ]),
    },
  },
  faqs: fr.servicesPage.faqs.map(([question, answer], i) => ({
    question: both(question, en.servicesPage.faqs[i][0]),
    answer: both(answer, en.servicesPage.faqs[i][1]),
  })),
};
