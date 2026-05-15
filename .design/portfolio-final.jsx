// Portfolio Jean-Marc — Home page content
// Uses shared PFLayout (nav + footer + light/dark + lang).

function PortfolioFinal() {
  const [lang] = window.useLang();
  const projects = window.PF_PROJECTS;
  const stackList = ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'TanStack Query', 'Zustand', 'React Hook Form', 'Zod', 'Radix UI', 'Framer Motion', 'GSAP', 'Sanity', 'NextAuth.js'];

  const S = {
    fr: {
      hero: {
        h1l1: 'Crafting Front-End',
        h1l2: 'Experiences That',
        h1l3: 'Scale With Your Product.',
        lede: 'Développeur front-end basé à Abidjan, je conçois des interfaces performantes et accessibles, ancrées dans des architectures modernes — pour des produits fintech, agences et institutions.',
        cv: 'Télécharger mon CV',
        viewProjects: 'Voir les projets',
      },
      banner: {
        label: 'Currently working at',
        suffix: '— Fintech',
        ctx: 'Extranet CDC-CI · Marché UMOA · Abidjan',
        location: 'Côte d’Ivoire · GMT+0',
        years: '2+ years building\ncomplex web products',
        bigA: 'Front-End',
        bigB: 'that performs.',
        avail: 'Disponible',
        when: 'Freelance ou poste —\nà partir d’avril 2026',
      },
      toolkit: 'My toolkit',
      services: {
        label: '— Services',
        h1a: 'A focused look at',
        h1b: 'what I do, and how I deliver.',
        intro: 'Quatre piliers d’intervention, pensés pour les équipes produit qui veulent construire vite mais durablement. Du wireframe à la mise en production, en passant par l’architecture.',
        process: 'Voir mon process',
      },
      sv: [
        { title: 'Architecture Frontend', desc: 'Architectures modulaires et évolutives : clean, hexagonale, monorepo et organisation feature-component. Du code maintenable, testable et prêt à l’échelle.', tags: ['Clean Architecture', 'Hexagonal', 'Monorepo'] },
        { title: 'Interfaces UI/UX', desc: 'Interfaces accessibles, animées et intuitives. Respect des standards WCAG, design system avec Radix et Tailwind, animations Framer Motion et GSAP.', tags: ['WCAG AA', 'Design Systems', 'Animation'], featured: true, badge: 'Most requested' },
        { title: 'Performance & SEO', desc: 'Optimisation Core Web Vitals, rendu SSR/SSG avec Next.js, métadonnées structurées et Open Graph. Pour des sites rapides, indexables et bien classés.', tags: ['Core Web Vitals', 'SSR / SSG', 'Open Graph'] },
        { title: 'Intégration produit', desc: 'Plus de 2 ans à transformer des produits fintech complexes (extranet CDC-CI, marché UMOA) en expériences utilisateur fluides et durables.', tags: ['Fintech', 'UMOA', 'B2B'] },
      ],
      work: { label: '— Selected work', h1: 'Recent projects.', all: 'All work →' },
      about: {
        label: '— À propos',
        h1: 'Transformer des produits complexes en expériences fluides.',
        cta: 'Discutons',
        p1: 'Bonjour, je suis Jean-Marc, développeur front-end avec plus de 2 ans d’expérience dans la fintech.',
        p2a: 'Je conçois des interfaces performantes, accessibles et optimisées SEO, en m’appuyant sur des architectures modernes : ',
        p2b: 'clean architecture', p2c: ', ', p2d: 'hexagonale', p2e: ', ', p2f: 'feature-component', p2g: '.',
        expLabel: 'Expérience',
        period: '2024 — 26',
        role: 'Développeur Front-End',
        roleAt: '— Inexa',
        roleCtx: 'Fintech · Abidjan · CDC-CI / Marché UMOA',
        bullets: [
          'Conception et développement de l’extranet CDC-CI (Caisse des Dépôts ivoirienne).',
          'Application de Contrôle Dépositaire : gestion des SGI, SGO et émetteurs sur le marché UMOA.',
          'Mise en place d’un monorepo Next.js partagé entre plusieurs produits métier.',
          'Application de la clean architecture / hexagonale et d’une organisation feature-component.',
        ],
      },
      contact: {
        label: '— Contact',
        h1a: 'Let’s start building', h1b: 'your next product', h1c: 'together.',
        intro: 'Une opportunité freelance ou un poste à pourvoir ? Parlons-en — je réponds sous 24h en semaine.',
        cta: 'Réserver un appel',
        status: 'Disponible',
      },
    },
    en: {
      hero: {
        h1l1: 'Crafting Front-End',
        h1l2: 'Experiences That',
        h1l3: 'Scale With Your Product.',
        lede: 'Front-end developer based in Abidjan. I build performant, accessible interfaces rooted in modern architectures — for fintech, agency, and institutional products.',
        cv: 'Download my CV',
        viewProjects: 'View projects',
      },
      banner: {
        label: 'Currently working at',
        suffix: '— Fintech',
        ctx: 'CDC-CI Extranet · UMOA market · Abidjan',
        location: 'Ivory Coast · GMT+0',
        years: '2+ years building\ncomplex web products',
        bigA: 'Front-End',
        bigB: 'that performs.',
        avail: 'Available',
        when: 'Freelance or full-time —\nfrom April 2026',
      },
      toolkit: 'My toolkit',
      services: {
        label: '— Services',
        h1a: 'A focused look at',
        h1b: 'what I do, and how I deliver.',
        intro: 'Four areas of focus, built for product teams who want to ship fast and sustainably — from wireframe to production, including the architecture in between.',
        process: 'See my process',
      },
      sv: [
        { title: 'Frontend Architecture', desc: 'Modular, scalable architectures: clean, hexagonal, monorepo and feature-component organisation. Maintainable, testable code ready to scale.', tags: ['Clean Architecture', 'Hexagonal', 'Monorepo'] },
        { title: 'UI / UX Interfaces', desc: 'Accessible, animated and intuitive interfaces. WCAG standards, design system on Radix and Tailwind, motion with Framer Motion and GSAP.', tags: ['WCAG AA', 'Design Systems', 'Animation'], featured: true, badge: 'Most requested' },
        { title: 'Performance & SEO', desc: 'Core Web Vitals optimisation, SSR / SSG rendering with Next.js, structured metadata and Open Graph — for fast, indexable, well-ranked sites.', tags: ['Core Web Vitals', 'SSR / SSG', 'Open Graph'] },
        { title: 'Product integration', desc: '2+ years turning complex fintech products (CDC-CI extranet, UMOA market) into fluid, durable user experiences.', tags: ['Fintech', 'UMOA', 'B2B'] },
      ],
      work: { label: '— Selected work', h1: 'Recent projects.', all: 'All work →' },
      about: {
        label: '— About',
        h1: 'Turning complex products into fluid experiences.',
        cta: 'Let’s talk',
        p1: 'Hi, I’m Jean-Marc, a front-end developer with 2+ years of fintech experience.',
        p2a: 'I build performant, accessible, SEO-friendly interfaces backed by modern architectures: ',
        p2b: 'clean architecture', p2c: ', ', p2d: 'hexagonal', p2e: ', ', p2f: 'feature-component', p2g: '.',
        expLabel: 'Experience',
        period: '2024 — 26',
        role: 'Front-End Developer',
        roleAt: '— Inexa',
        roleCtx: 'Fintech · Abidjan · CDC-CI / UMOA market',
        bullets: [
          'Designed and built the CDC-CI extranet (Ivorian Deposits Fund).',
          'Custody Control application: managing SGIs, SGOs and issuers on the UMOA market.',
          'Set up a Next.js monorepo shared across several business products.',
          'Applied clean / hexagonal architecture and a feature-component organisation.',
        ],
      },
      contact: {
        label: '— Contact',
        h1a: 'Let’s start building', h1b: 'your next product', h1c: 'together.',
        intro: 'Freelance opportunity or full-time role? Let’s talk — I reply within 24h on weekdays.',
        cta: 'Book a call',
        status: 'Available',
      },
    },
  };
  const t = S[lang];

  const projHrefs = { 'PIPV-PPED': 'Projet - PIPV-PPED.html', 'TaComFav': 'Travaux.html', 'e-Panacee': 'Travaux.html' };
  const projLocalisedSubs = {
    fr: { 'PIPV-PPED': 'Plateforme institutionnelle ivoirienne', 'TaComFav': 'Site agence de communication', 'e-Panacee': 'E-commerce ivoirien' },
    en: { 'PIPV-PPED': 'Ivorian institutional platform', 'TaComFav': 'Communication agency website', 'e-Panacee': 'Ivorian e-commerce platform' },
  };
  const projLocalisedDescs = {
    fr: {
      'PIPV-PPED': 'Plateforme officielle de gestion et de suivi pour une institution publique de Côte d’Ivoire. Authentification sécurisée, gestion des rôles, upload de documents et tableau de bord administratif.',
      'TaComFav': 'Site vitrine animé pour une agence de communication, intégrant un CMS headless et des animations soignées. Performance, SEO et expérience visuelle au cœur du projet.',
      'e-Panacee': 'Plateforme e-commerce complète : catalogue, panier, gestion de commandes, paiement et back-office. Pensée pour la performance mobile et l’accessibilité.',
    },
    en: {
      'PIPV-PPED': 'Official management and tracking platform for an Ivorian public institution. Secure auth, role-based access, document uploads and admin dashboard.',
      'TaComFav': 'Animated marketing site for a communication agency, with headless CMS and refined motion. Performance, SEO and visual experience at the core.',
      'e-Panacee': 'Full e-commerce platform: catalogue, cart, order management, payment and back-office. Built for mobile performance and accessibility.',
    },
  };

  return (
    <window.PFLayout current="home">
      <style>{`
        /* Home-specific layout */
        .ho-section-hero { padding: 56px 56px 88px; }
        .ho-section { padding: 80px 56px; }
        .ho-grid-hero { display: grid; grid-template-columns: 1.5fr 1fr; gap: 56px; align-items: end; }
        .ho-h1 { font-size: clamp(44px, 7vw, 88px); line-height: 1.02; margin: 0; max-width: 820px; letter-spacing: -0.03em; font-weight: 500; }
        .ho-h1-muted { color: var(--muted); }
        .ho-lede { font-size: clamp(15px, 1.1vw, 16px); line-height: 1.6; color: var(--muted); margin: 0; }
        .ho-hero-actions { display: flex; gap: 10px; margin-top: 24px; flex-wrap: wrap; }

        .ho-banner { margin-top: 56px; position: relative; border-radius: 20px; overflow: hidden; background: linear-gradient(135deg, #FFD9C4 0%, #F4E4D6 50%, #D6E6E0 100%); }
        .ho-banner-inner { padding: 40px; display: flex; flex-direction: column; justify-content: space-between; gap: 56px; min-height: 320px; color: var(--on-pastel); }
        .ho-banner-top { display: flex; justify-content: space-between; align-items: start; gap: 24px; flex-wrap: wrap; }
        .ho-banner-bottom { display: flex; justify-content: space-between; align-items: end; gap: 24px; flex-wrap: wrap; }
        .ho-banner-headline { font-size: clamp(40px, 6vw, 88px); line-height: 0.9; letter-spacing: -0.05em; margin: 0; font-weight: 500; color: var(--on-pastel); }
        .ho-banner-meta { color: rgba(26,26,24,0.7); }
        .ho-banner-cta { display: flex; align-items: end; gap: 14px; }

        .ho-stack-strip { padding: 32px 56px; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }

        .ho-grid-services-head { display: grid; grid-template-columns: 1fr 1.4fr; gap: 80px; align-items: end; margin-bottom: 48px; }
        .ho-grid-services { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
        .ho-service { background: var(--bg-alt); border: 1px solid var(--line); border-radius: 14px; padding: 32px; min-height: 260px; display: flex; flex-direction: column; justify-content: space-between; position: relative; transition: transform .22s, box-shadow .22s, background-color .25s, border-color .25s; }
        .ho-service:hover { transform: translateY(-2px); box-shadow: 0 12px 28px rgba(0,0,0,0.06); }
        .ho-service-featured { background: var(--bg-dark); color: #F4F1EA; border: none; }
        .ho-service-head { display: flex; justify-content: space-between; align-items: start; margin-bottom: 28px; gap: 12px; }
        .ho-service-foot { display: flex; justify-content: space-between; align-items: end; margin-top: 24px; gap: 16px; flex-wrap: wrap; }
        .ho-service h3 { font-size: 28px; margin: 0; line-height: 1.1; letter-spacing: -0.02em; font-weight: 500; }
        .ho-service p { font-size: 14.5px; line-height: 1.6; margin-top: 14px; max-width: 380px; color: var(--muted); }
        .ho-service-featured p { color: rgba(244,241,234,0.7); }

        .ho-grid-projects { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        .ho-cover { height: 220px; position: relative; padding: 24px; display: flex; align-items: end; }
        .ho-cover-1 { background: linear-gradient(135deg, #F4E1D4 0%, #E8C3A8 100%); }
        .ho-cover-2 { background: linear-gradient(135deg, #D6E0EA 0%, #C5D9E8 100%); }
        .ho-cover-3 { background: linear-gradient(135deg, #E2E8D6 0%, #C8D4B5 100%); }
        .ho-cover-text { font-size: clamp(40px, 5vw, 56px); line-height: 0.9; color: var(--on-pastel); letter-spacing: -0.04em; font-weight: 500; }
        .ho-cover-tag { background: rgba(255,255,255,0.6); }
        .ho-cover-year { font-size: 13px; color: var(--on-pastel); }

        .ho-grid-about { display: grid; grid-template-columns: 1fr 1.4fr; gap: 80px; align-items: start; }
        .ho-exp-row { display: grid; grid-template-columns: 120px 1fr; gap: 32px; align-items: start; }

        .ho-contact-card { background: var(--bg-dark); color: #F4F1EA; border-radius: 24px; padding: 80px 64px; position: relative; overflow: hidden; }
        .ho-contact-status { position: absolute; top: 40px; right: 40px; }
        .ho-contact-h2 { font-size: clamp(40px, 6vw, 88px); margin: 0; line-height: 1; max-width: 800px; letter-spacing: -0.03em; font-weight: 500; }
        .ho-contact-actions { display: flex; gap: 12px; margin-top: 36px; flex-wrap: wrap; }

        @media (max-width: 980px) {
          .ho-section, .ho-section-hero, .ho-stack-strip { padding-left: 32px; padding-right: 32px; }
          .ho-grid-hero, .ho-grid-services-head, .ho-grid-about { grid-template-columns: 1fr; gap: 32px; align-items: start; }
          .ho-grid-projects { grid-template-columns: 1fr 1fr; }
          .ho-banner-inner { padding: 32px; }
          .ho-contact-card { padding: 56px 40px; }
          .ho-contact-status { top: 24px; right: 24px; }
        }
        @media (max-width: 680px) {
          .ho-section, .ho-stack-strip { padding-left: 20px; padding-right: 20px; padding-top: 56px; padding-bottom: 56px; }
          .ho-section-hero { padding: 32px 20px 56px; }
          .ho-stack-strip { padding-top: 28px; padding-bottom: 28px; }
          .ho-grid-services, .ho-grid-projects { grid-template-columns: 1fr; }
          .ho-service { min-height: 0; padding: 24px; }
          .ho-banner-inner { padding: 24px; gap: 40px; min-height: 0; }
          .ho-contact-card { padding: 40px 24px; border-radius: 18px; }
          .ho-contact-status { position: static; margin-bottom: 16px; }
          .ho-exp-row { grid-template-columns: 1fr; gap: 12px; }
        }
      `}</style>

      {/* HERO */}
      <section className="ho-section-hero">
        <div className="ho-grid-hero pf-reveal">
          <div>
            <h1 className="pf-display ho-h1">
              {t.hero.h1l1}<br />
              {t.hero.h1l2}<br />
              <span className="ho-h1-muted">{t.hero.h1l3}</span>
            </h1>
          </div>
          <div style={{ paddingBottom: 14 }}>
            <p className="ho-lede">{t.hero.lede}</p>
            <div className="ho-hero-actions">
              <a href="#" className="pf-btn pf-btn-primary">
                {t.hero.cv}
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M6.5 2v7M3 6l3.5 3.5L10 6M2 11h9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>
              </a>
              <a href="Travaux.html" className="pf-btn pf-btn-ghost">{t.hero.viewProjects}</a>
            </div>
          </div>
        </div>

        {/* BANNER */}
        <div className="ho-banner pf-reveal">
          <div className="ho-banner-inner">
            <div className="ho-banner-top">
              <div style={{ display: 'grid', gap: 8 }}>
                <div className="pf-label" style={{ color: 'rgba(26,26,24,0.55)' }}>{t.banner.label}</div>
                <div className="pf-display" style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', lineHeight: 1 }}>
                  Inexa <span className="ho-banner-meta" style={{ fontSize: '0.55em' }}>{t.banner.suffix}</span>
                </div>
                <div style={{ fontSize: 14, marginTop: 4 }} className="ho-banner-meta">{t.banner.ctx}</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'end', gap: 12 }}>
                <span className="pf-pill" style={{ background: 'rgba(255,255,255,0.6)', color: '#1A1A18', borderColor: 'rgba(0,0,0,0.08)' }}>{t.banner.location}</span>
                <div style={{ fontSize: 13, textAlign: 'right', whiteSpace: 'pre-line' }} className="ho-banner-meta">{t.banner.years}</div>
              </div>
            </div>
            <div className="ho-banner-bottom">
              <h2 className="pf-display ho-banner-headline">
                {t.banner.bigA}<br />
                <span style={{ fontStyle: 'italic', fontWeight: 300 }}>{t.banner.bigB}</span>
              </h2>
              <div className="ho-banner-cta">
                <div style={{ textAlign: 'right' }}>
                  <div className="pf-label" style={{ marginBottom: 6, color: 'rgba(26,26,24,0.55)' }}>{t.banner.avail}</div>
                  <div style={{ fontSize: 13, color: '#1A1A18', whiteSpace: 'pre-line' }}>{t.banner.when}</div>
                </div>
                <a href="Contact.html" className="pf-arrow" aria-label="Contact" style={{ width: 56, height: 56, background: '#1A1A18', color: '#F7F5F0', borderColor: '#1A1A18' }}>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M5 13 L13 5 M6 5 H13 V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STACK STRIP */}
      <section className="ho-stack-strip">
        <div style={{ display: 'flex', alignItems: 'center', gap: 28, flexWrap: 'wrap' }}>
          <div className="pf-label" style={{ minWidth: 100 }}>{t.toolkit}</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, flex: 1 }}>
            {stackList.map((s) => <span key={s} className="pf-tag">{s}</span>)}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="ho-section" id="services">
        <div className="ho-grid-services-head pf-reveal">
          <div>
            <div className="pf-label" style={{ marginBottom: 18 }}>{t.services.label}</div>
            <h2 className="pf-display" style={{ fontSize: 'clamp(34px, 4.5vw, 56px)', margin: 0, lineHeight: 1.05 }}>
              {t.services.h1a}<br />{t.services.h1b}
            </h2>
          </div>
          <div>
            <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--muted)', margin: 0, maxWidth: 480 }}>{t.services.intro}</p>
            <a href="Services.html" className="pf-btn pf-btn-ghost" style={{ marginTop: 24, fontSize: 13 }}>{t.services.process}</a>
          </div>
        </div>

        <div className="ho-grid-services">
          {t.sv.map((s, i) => (
            <div key={i} className={`ho-service ${s.featured ? 'ho-service-featured' : ''} pf-reveal`}>
              <div>
                <div className="ho-service-head">
                  <span className={s.featured ? 'pf-pill pf-pill-dark' : 'pf-pill'}>
                    <span style={{ width: 5, height: 5, borderRadius: '50%', background: s.featured ? 'var(--accent)' : 'var(--ink)' }} />
                    0{i + 1}
                  </span>
                  {s.featured && <span className="pf-tag pf-tag-dark">{s.badge}</span>}
                </div>
                <h3 className="pf-display">{s.title}</h3>
                <p>{s.desc}</p>
              </div>
              <div className="ho-service-foot">
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {s.tags.map((tg) => <span key={tg} className={s.featured ? 'pf-tag pf-tag-dark' : 'pf-tag'}>{tg}</span>)}
                </div>
                <a className="pf-arrow" href="Services.html" style={s.featured ? { background: 'var(--accent)', color: '#1A1A18', borderColor: 'var(--accent)' } : {}} aria-label={s.title}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M4 10 L10 4 M5 4 H10 V9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WORK */}
      <section className="ho-section" id="travaux" style={{ paddingTop: 24 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: 40, gap: 16, flexWrap: 'wrap' }} className="pf-reveal">
          <div>
            <div className="pf-label" style={{ marginBottom: 18 }}>{t.work.label}</div>
            <h2 className="pf-display" style={{ fontSize: 'clamp(34px, 4.5vw, 56px)', margin: 0, lineHeight: 1.05 }}>{t.work.h1}</h2>
          </div>
          <a href="Travaux.html" className="pf-btn pf-btn-ghost" style={{ fontSize: 13 }}>{t.work.all}</a>
        </div>

        <div className="ho-grid-projects">
          {projects.map((p, i) => (
            <a key={p.name} href={projHrefs[p.name] || 'Travaux.html'} style={{ textDecoration: 'none', color: 'inherit' }}>
              <article className="pf-card pf-reveal" style={{ overflow: 'hidden' }}>
                <div className={`ho-cover ho-cover-${i + 1}`}>
                  <div className="pf-display ho-cover-text">{p.name.split('-')[0]}</div>
                  <div style={{ position: 'absolute', top: 18, left: 18 }}>
                    <span className="pf-pill ho-cover-tag" style={{ fontSize: 11, color: 'var(--on-pastel)', borderColor: 'rgba(0,0,0,0.08)' }}>{p.tag}</span>
                  </div>
                  <div style={{ position: 'absolute', top: 18, right: 18 }} className="ho-cover-year">{p.year}</div>
                </div>
                <div style={{ padding: 24 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 4, gap: 8 }}>
                    <h3 className="pf-display" style={{ fontSize: 20, margin: 0 }}>{p.name}</h3>
                    <span className="pf-arrow" style={{ width: 28, height: 28 }} aria-hidden="true">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3.5 8.5 L8.5 3.5 M4.5 3.5 H8.5 V7.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>
                    </span>
                  </div>
                  <div style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 12 }}>{projLocalisedSubs[lang][p.name]}</div>
                  <p style={{ fontSize: 13.5, color: 'var(--muted)', lineHeight: 1.55, margin: 0, marginBottom: 16 }}>{projLocalisedDescs[lang][p.name]}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                    {p.stack.slice(0, 5).map((s) => <span key={s} className="pf-tag" style={{ fontSize: 11 }}>{s}</span>)}
                  </div>
                </div>
              </article>
            </a>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="ho-section pf-section-band" id="about">
        <div className="ho-grid-about pf-reveal">
          <div>
            <div className="pf-label" style={{ marginBottom: 18 }}>{t.about.label}</div>
            <h2 className="pf-display" style={{ fontSize: 'clamp(30px, 4vw, 48px)', margin: 0, lineHeight: 1.05 }}>{t.about.h1}</h2>
            <a href="Contact.html" className="pf-btn pf-btn-primary" style={{ marginTop: 28, fontSize: 13 }}>
              {t.about.cta}
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M4 9 L9 4 M5 4 H9 V8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>
            </a>
          </div>
          <div>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--ink)', marginTop: 0, maxWidth: 600 }}>{t.about.p1}</p>
            <p style={{ fontSize: 15.5, lineHeight: 1.65, color: 'var(--muted)', maxWidth: 600 }}>
              {t.about.p2a}<strong style={{ color: 'var(--ink)', fontWeight: 500 }}>{t.about.p2b}</strong>{t.about.p2c}<strong style={{ color: 'var(--ink)', fontWeight: 500 }}>{t.about.p2d}</strong>{t.about.p2e}<strong style={{ color: 'var(--ink)', fontWeight: 500 }}>{t.about.p2f}</strong>{t.about.p2g}
            </p>

            <div style={{ borderTop: '1px solid var(--line)', marginTop: 36, paddingTop: 28 }}>
              <div className="pf-label" style={{ marginBottom: 20 }}>{t.about.expLabel}</div>
              <div className="ho-exp-row">
                <div className="pf-display" style={{ fontSize: 22 }}>{t.about.period}</div>
                <div>
                  <div style={{ fontSize: 18, fontWeight: 500, marginBottom: 4 }}>{t.about.role} <span style={{ color: 'var(--muted)', fontWeight: 400 }}>{t.about.roleAt}</span></div>
                  <div style={{ fontSize: 13.5, color: 'var(--muted)', marginBottom: 14 }}>{t.about.roleCtx}</div>
                  <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: 8, fontSize: 14, color: 'var(--ink)', lineHeight: 1.5 }}>
                    {t.about.bullets.map((b, j) => <li key={j}>· {b}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="ho-section" id="contact" style={{ paddingTop: 96, paddingBottom: 64 }}>
        <div className="ho-contact-card pf-reveal">
          <div className="ho-contact-status">
            <span className="pf-pill pf-pill-dark"><span className="pf-dot" />{t.contact.status}</span>
          </div>
          <div className="pf-label" style={{ color: 'rgba(255,255,255,0.55)', marginBottom: 20 }}>{t.contact.label}</div>
          <h2 className="pf-display ho-contact-h2">
            {t.contact.h1a}<br />{t.contact.h1b}<br />
            <span style={{ color: 'var(--accent)' }}>{t.contact.h1c}</span>
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(244,241,234,0.7)', marginTop: 28, maxWidth: 480, lineHeight: 1.6 }}>{t.contact.intro}</p>
          <div className="ho-contact-actions">
            <a href="mailto:jeanmarc.dev18@gmail.com" className="pf-btn pf-btn-light">
              jeanmarc.dev18@gmail.com
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M4 10 L10 4 M5 4 H10 V9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>
            </a>
            <a href="Contact.html" className="pf-btn pf-btn-darkghost">{t.contact.cta}</a>
          </div>
        </div>
      </section>
    </window.PFLayout>
  );
}

window.PortfolioFinal = PortfolioFinal;
