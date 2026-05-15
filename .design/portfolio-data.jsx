// Shared portfolio data — projects, services, experience, skills.

window.PF_PROJECTS = [
  {
    slug: 'pipv-pped',
    name: 'PIPV-PPED',
    sub: 'Plateforme institutionnelle ivoirienne',
    tag: 'Public Sector',
    year: '2025',
    role: 'Développeur Front-End',
    duration: '6 mois',
    href: 'Projet - PIPV-PPED.html',
    desc: 'Plateforme officielle de gestion et de suivi pour une institution publique de Côte d’Ivoire. Authentification sécurisée, gestion des rôles, upload de documents et tableau de bord administratif.',
    stack: ['Next.js 14', 'React 18', 'Tailwind v3', 'Radix UI', 'TanStack Query', 'NextAuth.js', 'UploadThing', 'React Hook Form', 'Zod'],
    coverClass: 'pf-cover-1',
  },
  {
    slug: 'tacomfav',
    name: 'TaComFav',
    sub: 'Site agence de communication',
    tag: 'Agency',
    year: '2025',
    role: 'Développeur Front-End',
    duration: '3 mois',
    href: 'Travaux.html',
    desc: 'Site vitrine animé pour une agence de communication, intégrant un CMS headless et des animations soignées. Performance, SEO et expérience visuelle au cœur du projet.',
    stack: ['Next.js 16', 'React 19', 'Tailwind v4', 'Sanity', 'GSAP', 'Framer Motion', 'Lenis', 'Resend', 'TypeScript'],
    coverClass: 'pf-cover-2',
  },
  {
    slug: 'e-panacee',
    name: 'e-Panacee',
    sub: 'E-commerce ivoirien',
    tag: 'E-commerce',
    year: '2024',
    role: 'Développeur Front-End',
    duration: '4 mois',
    href: 'Travaux.html',
    desc: 'Plateforme e-commerce complète : catalogue, panier, gestion de commandes, paiement et back-office. Pensée pour la performance mobile et l’accessibilité.',
    stack: ['Next.js 15', 'React 19', 'Tailwind v4', 'Radix UI', 'TanStack Query', 'Zustand', 'React Hook Form', 'Zod'],
    coverClass: 'pf-cover-3',
  },
];

window.PF_SERVICES = [
  { n: '01', title: 'Architecture Frontend',
    desc: 'Architectures modulaires et évolutives : clean, hexagonale, monorepo et organisation feature-component. Du code maintenable, testable et prêt à l’échelle.',
    long: 'Je pose les fondations qui permettent à une équipe produit de grossir sans se noyer dans la dette technique. Découpage en couches (domaine, application, infrastructure, UI), monorepo partagé entre plusieurs produits métier, et organisation des features comme des modules autonomes.',
    tags: ['Clean Architecture', 'Hexagonal', 'Monorepo', 'Feature-component'],
    deliverables: ['Audit de l’existant', 'Plan de migration', 'Mise en place du monorepo', 'Documentation des conventions'] },
  { n: '02', title: 'Interfaces UI/UX', featured: true,
    desc: 'Interfaces accessibles, animées et intuitives. Respect des standards WCAG, design system avec Radix et Tailwind, animations Framer Motion et GSAP.',
    long: 'Je construis des interfaces qui respectent l’utilisateur : navigation clavier complète, contraste AA minimum, sémantique HTML correcte. Le design system est ancré sur Radix pour les primitives accessibles et Tailwind pour la cohérence visuelle, avec Framer Motion ou GSAP pour les micro-interactions.',
    tags: ['WCAG AA', 'Design Systems', 'Animation', 'Radix UI'],
    deliverables: ['Design tokens', 'Bibliothèque de composants', 'Audit a11y', 'Micro-interactions'] },
  { n: '03', title: 'Performance & SEO',
    desc: 'Optimisation Core Web Vitals, rendu SSR/SSG avec Next.js, métadonnées structurées et Open Graph. Pour des sites rapides, indexables et bien classés.',
    long: 'Un site qui ne charge pas, n’est pas indexé ou ne s’affiche pas correctement sur les réseaux sociaux n’existe pas. J’optimise les Core Web Vitals (LCP, INP, CLS), je structure le rendu (SSR / SSG / ISR), je gère les métadonnées Open Graph et les données structurées schema.org.',
    tags: ['Core Web Vitals', 'SSR / SSG', 'Open Graph', 'Schema.org'],
    deliverables: ['Audit Lighthouse', 'Optimisation des images', 'Sitemap & robots.txt', 'Open Graph & Twitter Cards'] },
  { n: '04', title: 'Intégration produit',
    desc: 'Plus de 2 ans à transformer des produits fintech complexes (extranet CDC-CI, marché UMOA) en expériences utilisateur fluides et durables.',
    long: 'Je sais lire une spec métier dense, dialoguer avec les équipes back-end et produit, et livrer une interface qui tient en production. Mon terrain : la fintech B2B, les workflows réglementés, les tableaux de bord à forte densité d’information.',
    tags: ['Fintech', 'UMOA', 'B2B', 'Workflows complexes'],
    deliverables: ['Découpage en stories', 'Intégration API', 'États de chargement & erreurs', 'Tests d’acceptation'] },
];

window.PF_SKILLS = {
  'Frameworks & langages': ['Next.js', 'React 19', 'TypeScript', 'JavaScript ES2024'],
  'Styling & UI': ['Tailwind CSS', 'Radix UI', 'CSS Modules', 'shadcn/ui'],
  'State & data': ['TanStack Query', 'Zustand', 'React Hook Form', 'Zod'],
  'Animation': ['Framer Motion', 'GSAP', 'Lenis'],
  'Backend-for-frontend': ['NextAuth.js', 'UploadThing', 'Resend', 'Sanity'],
  'Architecture': ['Clean Architecture', 'Hexagonal', 'Monorepo (Turborepo)', 'Feature-component'],
  'Outils': ['Git', 'GitHub Actions', 'Vercel', 'Figma', 'pnpm'],
};

window.PF_EXPERIENCE = [
  {
    period: '2024 — 26',
    company: 'Inexa',
    role: 'Développeur Front-End',
    context: 'Fintech · Abidjan · CDC-CI / Marché UMOA',
    bullets: [
      'Conception et développement de l’extranet CDC-CI (Caisse des Dépôts ivoirienne).',
      'Application de Contrôle Dépositaire : gestion des SGI, SGO et émetteurs sur le marché UMOA.',
      'Mise en place d’un monorepo Next.js partagé entre plusieurs produits métier.',
      'Application de la clean architecture / hexagonale et d’une organisation feature-component.',
    ],
    stack: ['Next.js', 'TypeScript', 'TanStack Query', 'Radix UI', 'Tailwind'],
  },
];
