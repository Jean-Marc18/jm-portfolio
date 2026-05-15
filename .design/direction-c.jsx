// Direction C — Éditorial clair façon Øliv
// Blanc cassé, beaucoup d'air, cards services en grille, sobriété agence.

function DirectionC() {
  const C = {
    bg: '#F7F5F0',
    bgAlt: '#FFFFFF',
    bgCard: '#EDEAE2',
    bgCardAccent: '#1A1A18',
    ink: '#1A1A18',
    muted: '#6B6961',
    line: '#DDD8CC',
    accent: '#FF5A1F',
    gradientPastel: 'linear-gradient(135deg, #FFD9C4 0%, #F4E4D6 50%, #D6E6E0 100%)'
  };

  const projects = [
  {
    name: 'PIPV-PPED',
    sub: 'Plateforme institutionnelle ivoirienne',
    tag: 'Public Sector',
    year: '2025',
    stack: ['Next.js 14', 'Tailwind v3', 'Radix UI', 'TanStack Query', 'NextAuth.js']
  },
  {
    name: 'TaComFav',
    sub: 'Site agence de communication',
    tag: 'Agency',
    year: '2025',
    stack: ['Next.js 16', 'Sanity', 'GSAP', 'Framer Motion', 'Lenis']
  },
  {
    name: 'e-Panacee',
    sub: 'E-commerce ivoirien',
    tag: 'E-commerce',
    year: '2024',
    stack: ['Next.js 15', 'Tailwind v4', 'TanStack Query', 'Zustand', 'Zod']
  }];


  const services = [
  {
    n: '01',
    title: 'Architecture Frontend',
    desc: 'Architectures modulaires et évolutives : clean, hexagonale, monorepo et organisation feature-component. Du code maintenable, testable et prêt à l’échelle.',
    tags: ['Clean Architecture', 'Hexagonal', 'Monorepo'],
    cta: 'Approfondir'
  },
  {
    n: '02',
    title: 'Interfaces UI/UX',
    desc: 'Interfaces accessibles, animées et intuitives. Respect des standards WCAG, design system avec Radix et Tailwind, animations Framer Motion et GSAP.',
    tags: ['WCAG AA', 'Design Systems', 'Animation'],
    featured: true,
    cta: 'Voir des exemples'
  },
  {
    n: '03',
    title: 'Performance & SEO',
    desc: 'Optimisation Core Web Vitals, rendu SSR/SSG avec Next.js, métadonnées structurées et Open Graph. Pour des sites rapides, indexables et bien classés.',
    tags: ['Core Web Vitals', 'SSR / SSG', 'Open Graph'],
    cta: 'En savoir plus'
  },
  {
    n: '04',
    title: 'Intégration produit',
    desc: 'Plus de 2 ans à transformer des produits fintech complexes (extranet CDC-CI, marché UMOA) en expériences utilisateur fluides et durables.',
    tags: ['Fintech', 'UMOA', 'B2B'],
    cta: 'Lire le cas'
  }];


  const stack = ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'TanStack Query', 'Zustand', 'React Hook Form', 'Zod', 'Radix UI', 'Framer Motion', 'GSAP', 'Sanity', 'NextAuth.js'];

  return (
    <div style={{ background: C.bg, color: C.ink, fontFamily: '"Geist", "Plus Jakarta Sans", system-ui, sans-serif', minHeight: '100%' }}>
      <style>{`
        .dirC-display { font-family: "Geist", "Plus Jakarta Sans", sans-serif; letter-spacing: -0.03em; font-weight: 500; }
        .dirC-link { color: ${C.ink}; text-decoration: none; transition: color .15s; }
        .dirC-link:hover { color: ${C.accent}; }
        .dirC-pill { display: inline-flex; align-items: center; gap: 8px; padding: 7px 14px; border: 1px solid ${C.line}; border-radius: 999px; font-size: 12px; color: ${C.muted}; background: ${C.bgAlt}; }
        .dirC-tag { display: inline-flex; align-items: center; padding: 5px 11px; border: 1px solid ${C.line}; border-radius: 999px; font-size: 11.5px; color: ${C.muted}; background: ${C.bgAlt}; }
        .dirC-tag-dark { background: rgba(255,255,255,0.08); border-color: rgba(255,255,255,0.15); color: rgba(255,255,255,0.85); }
        .dirC-btn { display: inline-flex; align-items: center; gap: 10px; padding: 13px 22px; border-radius: 999px; font-size: 14px; cursor: pointer; transition: all .15s; border: 1px solid transparent; font-family: inherit; }
        .dirC-btn-primary { background: ${C.ink}; color: ${C.bg}; }
        .dirC-btn-primary:hover { background: ${C.accent}; transform: translateY(-1px); }
        .dirC-btn-ghost { background: ${C.bgAlt}; color: ${C.ink}; border-color: ${C.line}; }
        .dirC-card { background: ${C.bgAlt}; border: 1px solid ${C.line}; border-radius: 14px; transition: transform .2s, box-shadow .2s; }
        .dirC-card:hover { transform: translateY(-2px); box-shadow: 0 12px 28px rgba(0,0,0,0.06); }
        .dirC-dot { width: 7px; height: 7px; border-radius: 50%; background: #1A9D4D; box-shadow: 0 0 0 4px rgba(26,157,77,0.16); display: inline-block; }
        .dirC-arrow { width: 32px; height: 32px; border-radius: 50%; background: ${C.bg}; border: 1px solid ${C.line}; display: inline-flex; align-items: center; justify-content: center; transition: background .15s, color .15s; color: ${C.ink}; }
        .dirC-card:hover .dirC-arrow { background: ${C.ink}; color: ${C.bg}; border-color: ${C.ink}; }
        .dirC-label { font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: ${C.muted}; font-weight: 500; }
      `}</style>

      {/* NAV */}
      <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '22px 56px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{ borderRadius: '50%', background: C.ink, color: C.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: 13, letterSpacing: '-0.02em', width: "41px", height: "45px" }}>JMK</div>
          <div style={{ fontSize: 15, fontWeight: 500 }}></div>
          <span className="dirC-pill" style={{ padding: '4px 10px', fontSize: 11 }}>
            <span className="dirC-dot" />
            Available for new projects
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 32, fontSize: 14 }}>
          <a className="dirC-link">Travaux</a>
          <a className="dirC-link">Services</a>
          <a className="dirC-link">À propos</a>
          <a className="dirC-link">Approche</a>
          <a className="dirC-link">Contact</a>
        </div>
        <button className="dirC-btn dirC-btn-ghost" style={{ padding: '9px 16px', fontSize: 13 }}>
          jeanmarc.dev18@gmail.com
        </button>
      </nav>

      {/* HERO */}
      <section style={{ padding: '64px 56px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 56, alignItems: 'end' }}>
          <div>
            <h1 className="dirC-display" style={{ fontSize: 84, lineHeight: 1.02, margin: 0, maxWidth: 800 }}>
              Crafting Front-End<br />
              Experiences That<br />
              <span style={{ color: C.muted }}>Scale With Your Product.</span>
            </h1>
          </div>
          <div style={{ paddingBottom: 14 }}>
            <p style={{ fontSize: 15, lineHeight: 1.6, color: C.muted, margin: 0 }}>
              Développeur front-end basé à Abidjan, je conçois des interfaces performantes et accessibles, ancrées dans des architectures modernes — pour des produits fintech, agences et institutions.
            </p>
            <div style={{ display: 'flex', gap: 10, marginTop: 24 }}>
              <button className="dirC-btn dirC-btn-primary">
                Télécharger mon CV
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M6.5 2v7M3 6l3.5 3.5L10 6M2 11h9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>
              </button>
              <button className="dirC-btn dirC-btn-ghost">Voir les projets</button>
            </div>
          </div>
        </div>

        {/* HERO BANNER — visual */}
        <div style={{ marginTop: 56, position: 'relative', height: 320, borderRadius: 20, overflow: 'hidden', background: C.gradientPastel }}>
          <div style={{ position: 'absolute', inset: 0, padding: 40, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
              <div style={{ display: 'grid', gap: 8 }}>
                <div className="dirC-label">Currently working at</div>
                <div className="dirC-display" style={{ fontSize: 40, lineHeight: 1 }}>Inexa <span style={{ color: C.muted, fontSize: 22 }}>— Fintech</span></div>
                <div style={{ fontSize: 14, color: C.muted, marginTop: 4 }}>Extranet CDC-CI · Marché UMOA · Abidjan</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'end', gap: 12 }}>
                <div className="dirC-pill" style={{ background: 'rgba(255,255,255,0.6)' }}>Côte d’Ivoire · GMT+0</div>
                <div style={{ fontSize: 13, color: C.muted, textAlign: 'right' }}>2+ years building<br />complex web products</div>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end' }}>
              <div className="dirC-display" style={{ fontSize: 88, lineHeight: 0.9, letterSpacing: '-0.05em', color: C.ink }}>
                Front-End<br />
                <span style={{ fontStyle: 'italic', fontWeight: 300 }}>that performs.</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'end', gap: 14 }}>
                <div style={{ textAlign: 'right' }}>
                  <div className="dirC-label" style={{ marginBottom: 6 }}>Disponible</div>
                  <div style={{ fontSize: 13, color: C.ink }}>Freelance ou poste —<br />à partir d’avril 2026</div>
                </div>
                <a className="dirC-arrow" style={{ width: 56, height: 56, background: C.ink, color: C.bg, borderColor: C.ink }}>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M5 13 L13 5 M6 5 H13 V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STACK STRIP */}
      <section style={{ padding: '40px 56px', borderTop: `1px solid ${C.line}`, borderBottom: `1px solid ${C.line}` }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 28, flexWrap: 'wrap' }}>
          <div className="dirC-label" style={{ minWidth: 100 }}>My toolkit</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, flex: 1 }}>
            {stack.map((s) =>
            <span key={s} className="dirC-tag">{s}</span>
            )}
          </div>
        </div>
      </section>

      {/* SERVICES GRID — like Øliv */}
      <section style={{ padding: '100px 56px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80, marginBottom: 56, alignItems: 'end' }}>
          <div>
            <div className="dirC-label" style={{ marginBottom: 18 }}>— Services</div>
            <h2 className="dirC-display" style={{ fontSize: 56, margin: 0, lineHeight: 1.05 }}>
              A focused look at<br />what I do, and how I deliver.
            </h2>
          </div>
          <div>
            <p style={{ fontSize: 15, lineHeight: 1.6, color: C.muted, margin: 0, maxWidth: 480 }}>
              Quatre piliers d’intervention, pensés pour les équipes produit qui veulent construire vite mais durablement. Du wireframe à la mise en production, en passant par l’architecture.
            </p>
            <button className="dirC-btn dirC-btn-ghost" style={{ marginTop: 24, fontSize: 13 }}>Voir mon process</button>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
          {services.map((s) =>
          <div key={s.n} className={s.featured ? '' : 'dirC-card'} style={{
            background: s.featured ? C.bgCardAccent : C.bgAlt,
            color: s.featured ? '#F4F1EA' : C.ink,
            border: s.featured ? 'none' : undefined,
            borderRadius: 14,
            padding: 32,
            minHeight: 260,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            transition: 'transform .2s'
          }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: 28 }}>
                  <span className="dirC-pill" style={s.featured ? { background: 'rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.7)' } : {}}>
                    <span style={{ width: 5, height: 5, borderRadius: '50%', background: s.featured ? C.accent : C.ink }} />
                    {s.n}
                  </span>
                  {s.featured && <span className="dirC-tag dirC-tag-dark">Most requested</span>}
                </div>
                <h3 className="dirC-display" style={{ fontSize: 30, margin: 0, lineHeight: 1.1 }}>{s.title}</h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.6, marginTop: 14, color: s.featured ? 'rgba(244,241,234,0.7)' : C.muted, maxWidth: 380 }}>{s.desc}</p>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginTop: 24 }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {s.tags.map((t) =>
                <span key={t} className={s.featured ? 'dirC-tag dirC-tag-dark' : 'dirC-tag'}>{t}</span>
                )}
                </div>
                <a className="dirC-arrow" style={s.featured ? { background: C.accent, color: C.ink, borderColor: C.accent } : {}}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M4 10 L10 4 M5 4 H10 V9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* SELECTED WORK */}
      <section style={{ padding: '40px 56px 100px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: 40 }}>
          <div>
            <div className="dirC-label" style={{ marginBottom: 18 }}>— Selected work</div>
            <h2 className="dirC-display" style={{ fontSize: 56, margin: 0, lineHeight: 1.05 }}>Recent projects.</h2>
          </div>
          <button className="dirC-btn dirC-btn-ghost" style={{ fontSize: 13 }}>All work →</button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {projects.map((p, i) =>
          <article key={p.name} className="dirC-card" style={{ padding: 0, overflow: 'hidden' }}>
              <div style={{
              height: 220,
              background: i === 0 ? 'linear-gradient(135deg, #F4E1D4 0%, #E8C3A8 100%)' :
              i === 1 ? 'linear-gradient(135deg, #D6E0EA 0%, #C5D9E8 100%)' :
              'linear-gradient(135deg, #E2E8D6 0%, #C8D4B5 100%)',
              position: 'relative',
              padding: 24,
              display: 'flex',
              alignItems: 'end'
            }}>
                <div className="dirC-display" style={{ fontSize: 56, lineHeight: 0.9, color: C.ink, letterSpacing: '-0.04em' }}>
                  {p.name.split('-')[0]}
                </div>
                <div style={{ position: 'absolute', top: 18, left: 18 }}>
                  <span className="dirC-pill" style={{ background: 'rgba(255,255,255,0.6)', fontSize: 11 }}>{p.tag}</span>
                </div>
                <div style={{ position: 'absolute', top: 18, right: 18, fontSize: 13, color: C.ink }}>{p.year}</div>
              </div>
              <div style={{ padding: 24 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 4 }}>
                  <h3 className="dirC-display" style={{ fontSize: 20, margin: 0 }}>{p.name}</h3>
                  <a className="dirC-arrow" style={{ width: 28, height: 28 }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3.5 8.5 L8.5 3.5 M4.5 3.5 H8.5 V7.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>
                  </a>
                </div>
                <div style={{ fontSize: 13, color: C.muted, marginBottom: 16 }}>{p.sub}</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                  {p.stack.map((s) => <span key={s} className="dirC-tag" style={{ fontSize: 11 }}>{s}</span>)}
                </div>
              </div>
            </article>
          )}
        </div>
      </section>

      {/* ABOUT — 2 colonnes */}
      <section style={{ padding: '100px 56px', background: C.bgAlt, borderTop: `1px solid ${C.line}`, borderBottom: `1px solid ${C.line}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80, alignItems: 'start' }}>
          <div>
            <div className="dirC-label" style={{ marginBottom: 18 }}>— À propos</div>
            <h2 className="dirC-display" style={{ fontSize: 48, margin: 0, lineHeight: 1.05 }}>
              Transformer des produits complexes en expériences fluides.
            </h2>
            <button className="dirC-btn dirC-btn-primary" style={{ marginTop: 28, fontSize: 13 }}>
              En savoir plus
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M4 9 L9 4 M5 4 H9 V8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>
            </button>
          </div>
          <div>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: C.ink, marginTop: 0, maxWidth: 600 }}>
              Bonjour, je suis Jean-Marc, développeur front-end avec plus de 2 ans d’expérience dans la fintech.
            </p>
            <p style={{ fontSize: 15.5, lineHeight: 1.65, color: C.muted, maxWidth: 600 }}>
              Je conçois des interfaces performantes, accessibles et optimisées SEO, en m’appuyant sur des architectures modernes : <strong style={{ color: C.ink, fontWeight: 500 }}>clean architecture</strong>, <strong style={{ color: C.ink, fontWeight: 500 }}>hexagonale</strong>, <strong style={{ color: C.ink, fontWeight: 500 }}>feature-component</strong>.
            </p>

            <div style={{ borderTop: `1px solid ${C.line}`, marginTop: 36, paddingTop: 28 }}>
              <div className="dirC-label" style={{ marginBottom: 20 }}>Expérience</div>
              <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: 32, alignItems: 'start' }}>
                <div className="dirC-display" style={{ fontSize: 22 }}>2024 — 26</div>
                <div>
                  <div style={{ fontSize: 18, fontWeight: 500, marginBottom: 4 }}>Développeur Front-End <span style={{ color: C.muted, fontWeight: 400 }}>— Inexa</span></div>
                  <div style={{ fontSize: 13.5, color: C.muted, marginBottom: 14 }}>Fintech · Abidjan · CDC-CI / Marché UMOA</div>
                  <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: 8, fontSize: 14, color: C.ink, lineHeight: 1.5 }}>
                    <li>· Conception et développement de l’extranet CDC-CI (Caisse des Dépôts ivoirienne).</li>
                    <li>· Application de Contrôle Dépositaire : gestion des SGI, SGO et émetteurs sur le marché UMOA.</li>
                    <li>· Mise en place d’un monorepo Next.js partagé entre plusieurs produits métier.</li>
                    <li>· Application de la clean architecture / hexagonale et d’une organisation feature-component.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section style={{ padding: '120px 56px 80px' }}>
        <div style={{ background: C.bgCardAccent, color: '#F4F1EA', borderRadius: 24, padding: '80px 64px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 40, right: 40 }}>
            <span className="dirC-pill" style={{ background: 'rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.8)' }}>
              <span className="dirC-dot" />
              Disponible
            </span>
          </div>
          <div className="dirC-label" style={{ color: 'rgba(255,255,255,0.55)', marginBottom: 20 }}>— Contact</div>
          <h2 className="dirC-display" style={{ fontSize: 88, margin: 0, lineHeight: 1, maxWidth: 800 }}>
            Let’s start building<br />your next product<br />
            <span style={{ color: C.accent }}>together.</span>
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(244,241,234,0.7)', marginTop: 28, maxWidth: 480, lineHeight: 1.6 }}>
            Une opportunité freelance ou un poste à pourvoir ? Parlons-en — je réponds sous 24h en semaine.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 36 }}>
            <a href="mailto:jeanmarc.dev18@gmail.com" className="dirC-btn" style={{ background: '#F4F1EA', color: C.ink, fontSize: 14 }}>
              jeanmarc.dev18@gmail.com
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M4 10 L10 4 M5 4 H10 V9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>
            </a>
            <a className="dirC-btn" style={{ background: 'transparent', color: '#F4F1EA', border: '1px solid rgba(255,255,255,0.2)', fontSize: 14 }}>
              Réserver un appel
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: '36px 56px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 13, color: C.muted, borderTop: `1px solid ${C.line}` }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{ width: 24, height: 24, borderRadius: '50%', background: C.ink, color: C.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: 10 }}>jm</div>
          <span>© 2026 Koffi N’Guessan Jean-Marc — Abidjan, CI</span>
        </div>
        <div style={{ display: 'flex', gap: 24 }}>
          <a className="dirC-link">LinkedIn</a>
          <a className="dirC-link">GitHub</a>
          <a className="dirC-link">WhatsApp</a>
        </div>
      </footer>
    </div>);

}

window.DirectionC = DirectionC;