# Jean-Marc Koffi — Portfolio

Portfolio personnel présentant services, projets et compétences en développement front-end.

**Live**: [jmk-portfolio.vercel.app](https://jmk-portfolio.vercel.app)

![Portfolio thumbnail](./public/thmubnail.png)

## Caractéristiques

- **Bilingue** : Français/Anglais, détection automatique via `Accept-Language` puis cookie de préférence
- **Dark mode** : basculement manuel via `next-themes` (attribut `data-theme`)
- **Animations fluides** : GSAP + ScrollTrigger + SplitText, Lenis pour le smooth scroll
- **Formulaire de contact** : Resend + React Email (template HTML responsive)
- **SEO** : metadata Next.js, JSON-LD (`Person`, `WebSite`, `ProfilePage`), sitemap, robots
- **Accessibilité** : WCAG 2.1 AA, skip link, `aria-expanded`/`aria-controls`, focus visible, `inert` sur les overlays
- **Performance** : Lighthouse **95+/100** en production (Core Web Vitals au vert)

## Sections

- **Hero** — accroche + CV téléchargeable
- **Stack** — technologies maîtrisées
- **Services** — offre détaillée
- **Projets** — case studies avec covers parallax
- **À propos** — parcours et méthode
- **Contact** — formulaire Resend + liens directs

## Tech Stack

| Catégorie  | Technologies                              |
| ---------- | ----------------------------------------- |
| Framework  | Next.js 16 (App Router, Turbopack)        |
| UI         | React 19, TypeScript 5                    |
| Styles     | Tailwind CSS 3, CSS personnalisé          |
| Animations | GSAP 3 (`@gsap/react`), Lenis             |
| Email      | Resend + React Email                      |
| Thème      | next-themes                               |
| Analytics  | Vercel Analytics                          |
| Hosting    | Vercel                                    |

## Installation

```bash
git clone https://github.com/Jean-Marc18/jm-portfolio.git
cd jm-portfolio
npm install
npm run dev
```

Accès : <http://localhost:3000>

### Scripts disponibles

| Script          | Description                                            |
| --------------- | ------------------------------------------------------ |
| `npm run dev`   | Lance le dev server (Next.js + Turbopack)              |
| `npm run build` | Build de production                                    |
| `npm start`     | Démarre le build de production                         |
| `npm run lint`  | Lint (Next.js ESLint)                                  |
| `npm run email` | Preview live des templates React Email (port 3001)     |

### Variables d'environnement

Crée un `.env.local` à la racine :

```env
# Clé API Resend pour le formulaire de contact
RESEND_API_KEY=re_xxxxxxxxxxxxxxxx
```

Sans cette clé, le formulaire renverra une 500 mais le site reste fonctionnel.

## Structure du projet

```
.
├── app/                    # Routes et layouts Next.js (App Router)
│   ├── api/contact/        # Endpoint POST pour le formulaire
│   ├── layout.tsx          # Layout racine, metadata, JSON-LD, preloader gate
│   ├── page.tsx            # Accueil
│   └── ...                 # /travaux, /services, /a-propos, /contact, /projets/[slug]
├── components/
│   ├── layout/             # Header, Footer, Hero, sections par page
│   ├── common/             # Preloader, SmoothScroll, RevealObserver, PageTransition
│   └── ui/                 # Primitives (Button, Card, Pill, Logo, icons, etc.)
├── emails/                 # Templates React Email (ContactEmail.tsx)
├── lib/
│   ├── animations/         # Cover coordinator, useSplitIntro, useCountUp
│   ├── i18n/               # Dictionnaires FR/EN + LanguageContext + config
│   └── gsap.ts             # Plugins GSAP + tokens d'easing/durée
├── constants/              # Routes, NAV_ORDER, métadonnées projets
└── public/                 # Fonts (Labil Grotesk), photos, CV PDF
```

## Configuration i18n

Langues supportées : `fr`, `en` (défaut : `fr`).

Détection par priorité côté serveur (Server Component) :

1. Cookie `jmk-locale` (préférence explicite)
2. Header HTTP `Accept-Language`
3. Locale par défaut (`fr`)

La locale détectée est passée en prop à un `LanguageProvider` client, ce qui élimine tout mismatch d'hydration.

## Décisions techniques

Quelques choix qui sortent du template Next.js générique :

- **Cover coordinator** ([lib/animations/cover.ts](./lib/animations/cover.ts)) — un module-level store qui permet au Preloader de "réserver" un délai *avant le mount React*, pour que les intros SplitText des heros attendent que l'overlay soit dégagé. Sans ça, les animations partent sous le preloader et l'utilisateur ne les voit pas.

- **Preloader sans flash** ([app/layout.tsx](./app/layout.tsx)) — un script inline dans `<head>` lit `sessionStorage` *avant* l'hydration et ajoute une classe sur `<html>` ; le CSS cache alors l'overlay instantanément pour les visites suivantes. Pattern inspiré de `next-themes`, évite l'effet "hero visible puis preloader par-dessus".

- **i18n SSR-compatible** ([app/layout.tsx](./app/layout.tsx)) — le layout est `async`, lit cookies + `Accept-Language` côté serveur et passe la locale au provider client en prop. Aucun localStorage côté client, aucun mismatch.

- **GSAP + Strict Mode** ([components/layout/header/Header.tsx](./components/layout/header/Header.tsx)) — la timeline du menu mobile est construite **une seule fois** en `paused: true` via `useGSAP`, puis pilotée par `play()` / `reverse()`. Évite les courses avec le revert de `useGSAP` lors des re-renders.

- **Skip link a11y** ([app/layout.tsx](./app/layout.tsx), [app/globals.css](./app/globals.css)) — caché visuellement, visible au `Tab`, saute directement à `<main id="main-content">`.

- **Email template aligné design system** ([emails/ContactEmail.tsx](./emails/ContactEmail.tsx)) — couleurs et typo du site (Geist via `@import` + fallbacks inline pour Outlook), SVG logo inline pour la compatibilité maximale (Apple Mail, Gmail, Outlook web).

## Performance

| Métrique | Cible   | Mesuré (prod) |
| -------- | ------- | ------------- |
| LCP      | < 2.5s  | ~1.2s         |
| CLS      | < 0.1   | 0.000         |
| TBT      | < 200ms | 0ms           |
| FCP      | < 1.8s  | ~0.7s         |

- Images via `next/image` avec `fill` + `sizes` responsive
- Fonts auto-hébergées (`next/font/google` + `@font-face` pour Labil Grotesk)
- Lenis synchronisé au ticker GSAP pour un seul RAF
- Aucune dépendance lourde côté client (~150 KB gzippé)

## Accessibilité

- WCAG 2.1 AA, contraste 16:1 sur le texte principal
- Skip link bilingue en début de `<body>`
- `aria-expanded` + `aria-controls` sur le menu burger
- `inert` sur les overlays fermés (menu mobile, preloader)
- Hiérarchie de titres sans saut de niveau
- Focus visible préservé (outline accent)
- `prefers-reduced-motion` respecté (Preloader, Lenis, transitions menu)

## Licence

Droits d'auteur © 2026 Jean-Marc Koffi. Tous droits réservés.

## Contact

- 📧 Email : [jeanmarc.dev.18@gmail.com](mailto:jeanmarc.dev.18@gmail.com)
- 🔗 LinkedIn : [jean-marc-koffi](https://www.linkedin.com/in/jean-marc-koffi/)
- 💻 GitHub : [@Jean-Marc18](https://github.com/Jean-Marc18)
