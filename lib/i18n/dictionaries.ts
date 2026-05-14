export type Locale = "fr" | "en";

export const dictionaries = {
  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      projects: "Projets",
      contact: "Contact",
    },
    hero: {
      letsTalk: "Discutons",
      bio: "Bonjour, je suis Jean-Marc, développeur front-end avec plus de 2 ans d'expérience dans la fintech. Je conçois des interfaces performantes, accessibles et optimisées SEO, en m'appuyant sur des architectures modernes (clean architecture, hexagonale, feature-component). Mon objectif : transformer des produits complexes en expériences utilisateur fluides et durables.",
      downloadCV: "Télécharger mon CV",
      scrollDown: "Faire défiler",
    },
    about: {
      title: "À propos",
      subtitle: "Mon parcours et mon expertise.",
      experienceTitle: "Expérience professionnelle",
      currentRole: "Développeur Front-End — Inexa (Fintech, Abidjan)",
      period: "Août 2024 → Avril 2026",
      bullets: [
        "Conception et développement de l'extranet CDC-CI (Caisse des Dépôts ivoirienne).",
        "Application de Contrôle Dépositaire : gestion des SGI, SGO et émetteurs sur le marché UMOA.",
        "Mise en place d'un monorepo Next.js partagé entre plusieurs produits métier.",
        "Application de la clean architecture / hexagonale et d'une organisation feature-component.",
      ],
      stackTitle: "Compétences techniques",
    },
    projects: {
      title: "Projets",
      subtitle:
        "Une sélection de projets en production illustrant mon expertise en interfaces web et solutions digitales.",
      seeMore: "Voir plus",
      visitSite: "Visiter le site",
      items: [
        {
          slug: "pipv-pped",
          name: "PIPV-PPED",
          tagline: "Plateforme institutionnelle ivoirienne",
          description:
            "Plateforme officielle de gestion et de suivi pour une institution publique de Côte d'Ivoire. Authentification sécurisée, gestion de rôles, upload de documents et tableau de bord administratif.",
          url: "https://pipv-pped.ci",
          stack: [
            "Next.js 14",
            "React 18",
            "Tailwind v3",
            "Radix UI",
            "TanStack Query",
            "NextAuth.js",
            "UploadThing",
            "React Hook Form",
            "Zod",
          ],
        },
        {
          slug: "tacomfav",
          name: "TaComFav",
          tagline: "Site agence de communication",
          description:
            "Site vitrine animé pour une agence de communication, intégrant un CMS headless et des animations soignées. Performance, SEO et expérience visuelle au cœur du projet.",
          url: "https://tacomfav.com",
          stack: [
            "Next.js 16",
            "React 19",
            "Tailwind v4",
            "Sanity",
            "GSAP",
            "Framer Motion",
            "Lenis",
            "Resend",
            "TypeScript",
          ],
        },
        {
          slug: "e-panacee",
          name: "e-Panacee",
          tagline: "E-commerce ivoirien",
          description:
            "Plateforme e-commerce complète : catalogue, panier, gestion de commandes, paiement et back-office. Pensée pour la performance mobile et l'accessibilité.",
          url: "https://e-panacee.com",
          stack: [
            "Next.js 15",
            "React 19",
            "Tailwind v4",
            "Radix UI",
            "TanStack Query",
            "Zustand",
            "React Hook Form",
            "Zod",
          ],
        },
      ],
    },
    expertise: {
      title: "Expertise",
      subtitle: "Des solutions digitales sur-mesure, centrées utilisateur.",
      items: [
        {
          title: "Architecture Frontend",
          description:
            "Mise en place d'architectures modulaires et évolutives : clean architecture, hexagonale, organisation feature-component, monorepos Next.js. Code maintenable, testable, prêt à l'échelle.",
        },
        {
          title: "Interfaces UI/UX",
          description:
            "Conception d'interfaces accessibles et intuitives, avec un soin particulier pour les animations, la cohérence visuelle et le respect des standards WCAG. Tailwind, Radix, Framer Motion, GSAP.",
        },
        {
          title: "Performance & SEO",
          description:
            "Optimisation Core Web Vitals, rendu SSR/SSG avec Next.js, métadonnées structurées, sitemap, Open Graph. Sites rapides, indexables et bien classés.",
        },
        {
          title: "Stack moderne",
          description:
            "Maîtrise de React 18/19, Next.js (App Router), TypeScript, TanStack Query, Zustand, Zod. Intégration de CMS headless (Sanity) et de services tiers (NextAuth, Resend, UploadThing).",
        },
      ],
    },
    footer: {
      title: "Discutons !",
      copyright: "© 2026 Jmk — Portfolio",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      letsTalk: "Let's Talk",
      bio: "Hi, I'm Jean-Marc, a front-end developer with 2+ years of experience in fintech. I build performant, accessible and SEO-optimized interfaces, leveraging modern architectures (clean, hexagonal, feature-component). My goal: turn complex products into smooth, durable user experiences.",
      downloadCV: "Download my CV",
      scrollDown: "scroll down",
    },
    about: {
      title: "About",
      subtitle: "My background and expertise.",
      experienceTitle: "Professional experience",
      currentRole: "Front-End Developer — Inexa (Fintech, Abidjan)",
      period: "August 2024 → April 2026",
      bullets: [
        "Design and development of the CDC-CI extranet (Ivorian Deposits Fund).",
        "Custodian Control application: managing SGI, SGO and issuers on the UMOA market.",
        "Built a Next.js monorepo shared across multiple business products.",
        "Applied clean / hexagonal architecture and feature-component organization.",
      ],
      stackTitle: "Technical skills",
    },
    projects: {
      title: "Projects",
      subtitle:
        "A selection of production projects showcasing my expertise in web interfaces and digital solutions.",
      seeMore: "See more",
      visitSite: "Visit site",
      items: [
        {
          slug: "pipv-pped",
          name: "PIPV-PPED",
          tagline: "Ivorian institutional platform",
          description:
            "Official platform for an Ivorian public institution. Secure authentication, role management, document upload and admin dashboard.",
          url: "https://pipv-pped.ci",
          stack: [
            "Next.js 14",
            "React 18",
            "Tailwind v3",
            "Radix UI",
            "TanStack Query",
            "NextAuth.js",
            "UploadThing",
            "React Hook Form",
            "Zod",
          ],
        },
        {
          slug: "tacomfav",
          name: "TaComFav",
          tagline: "Communication agency website",
          description:
            "Animated showcase site for a communication agency, with headless CMS and polished animations. Performance, SEO and visual experience at the core.",
          url: "https://tacomfav.com",
          stack: [
            "Next.js 16",
            "React 19",
            "Tailwind v4",
            "Sanity",
            "GSAP",
            "Framer Motion",
            "Lenis",
            "Resend",
            "TypeScript",
          ],
        },
        {
          slug: "e-panacee",
          name: "e-Panacee",
          tagline: "Ivorian e-commerce",
          description:
            "Complete e-commerce platform: catalog, cart, order management, payment and back-office. Built for mobile performance and accessibility.",
          url: "https://e-panacee.com",
          stack: [
            "Next.js 15",
            "React 19",
            "Tailwind v4",
            "Radix UI",
            "TanStack Query",
            "Zustand",
            "React Hook Form",
            "Zod",
          ],
        },
      ],
    },
    expertise: {
      title: "Expertise",
      subtitle: "Tailored, user-centric digital solutions.",
      items: [
        {
          title: "Frontend Architecture",
          description:
            "Modular, scalable architectures: clean, hexagonal, feature-component organization, Next.js monorepos. Maintainable, testable, ready to scale.",
        },
        {
          title: "UI/UX Interfaces",
          description:
            "Accessible and intuitive interfaces, with careful animations, visual consistency and WCAG compliance. Tailwind, Radix, Framer Motion, GSAP.",
        },
        {
          title: "Performance & SEO",
          description:
            "Core Web Vitals optimization, SSR/SSG with Next.js, structured metadata, sitemap, Open Graph. Fast, indexable, well-ranked sites.",
        },
        {
          title: "Modern Stack",
          description:
            "React 18/19, Next.js (App Router), TypeScript, TanStack Query, Zustand, Zod. Headless CMS (Sanity) and third-party services (NextAuth, Resend, UploadThing).",
        },
      ],
    },
    footer: {
      title: "Let's talk!",
      copyright: "© 2026 Jmk — Portfolio",
    },
  },
};

export type Dictionary = (typeof dictionaries)["fr"];
