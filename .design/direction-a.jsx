// Direction A — Éditorial chaleureux
// Crème + serif display + orange brûlé. Inspiration Duwy.

function DirectionA() {
  const C = {
    bg: '#F1ECE2',
    bgWarm: '#EAE3D4',
    ink: '#1B1715',
    muted: '#5B524A',
    line: '#D4CBBC',
    accent: '#C2492B',
    cardDark: '#161312'
  };

  const projects = [
  {
    name: 'PIPV-PPED',
    sub: 'Plateforme institutionnelle ivoirienne',
    desc: 'Plateforme officielle de gestion et de suivi pour une institution publique de Côte d\u2019Ivoire. Authentification sécurisée, gestion des rôles, upload de documents et tableau de bord administratif.',
    stack: ['Next.js 14', 'React 18', 'Tailwind v3', 'Radix UI', 'TanStack Query', 'NextAuth.js', 'UploadThing', 'Zod'],
    year: '2025',
    featured: true
  },
  {
    name: 'TaComFav',
    sub: 'Site agence de communication',
    desc: 'Site vitrine animé pour une agence de communication, intégrant un CMS headless et des animations soignées. Performance, SEO et expérience visuelle au cœur du projet.',
    stack: ['Next.js 16', 'React 19', 'Tailwind v4', 'Sanity', 'GSAP', 'Framer Motion', 'Lenis', 'Resend'],
    year: '2025'
  },
  {
    name: 'e-Panacee',
    sub: 'E-commerce ivoirien',
    desc: 'Plateforme e-commerce complète : catalogue, panier, gestion de commandes, paiement et back-office. Pensée pour la performance mobile et l\u2019accessibilité.',
    stack: ['Next.js 15', 'React 19', 'Tailwind v4', 'Radix UI', 'TanStack Query', 'Zustand', 'React Hook Form', 'Zod'],
    year: '2024'
  }];


  const skills = [
  'Next.js', 'React 19', 'TypeScript', 'Tailwind CSS', 'TanStack Query',
  'Zustand', 'React Hook Form', 'Zod', 'Radix UI', 'Framer Motion',
  'GSAP', 'Sanity', 'NextAuth.js'];


  return (
    <div style={{ background: C.bg, color: C.ink, fontFamily: '"Geist", system-ui, sans-serif', minHeight: '100%' }}>
      <style>{`
        .dirA-serif { font-family: "Newsreader", "Cormorant Garamond", Georgia, serif; font-weight: 500; letter-spacing: -0.02em; }
        .dirA-italic { font-style: italic; }
        .dirA-mono { font-family: "JetBrains Mono", ui-monospace, monospace; }
        .dirA-pill { display: inline-flex; align-items: center; gap: 8px; padding: 6px 12px; border: 1px solid ${C.line}; border-radius: 999px; font-size: 12px; color: ${C.muted}; background: rgba(255,255,255,0.4); }
        .dirA-link { color: ${C.ink}; text-decoration: none; border-bottom: 1px solid ${C.line}; padding-bottom: 1px; transition: border-color .2s, color .2s; }
        .dirA-link:hover { color: ${C.accent}; border-color: ${C.accent}; }
        .dirA-tag { display: inline-block; padding: 6px 11px; border: 1px solid ${C.line}; border-radius: 999px; font-size: 12px; color: ${C.ink}; background: rgba(255,255,255,0.5); }
        .dirA-tag-dark { background: rgba(255,255,255,0.06); border-color: rgba(255,255,255,0.12); color: #E9E1D2; }
        .dirA-btn { display: inline-flex; align-items: center; gap: 10px; padding: 14px 22px; border-radius: 999px; font-weight: 500; font-size: 14px; border: none; cursor: pointer; transition: transform .15s, background .15s; }
        .dirA-btn-primary { background: ${C.ink}; color: ${C.bg}; }
        .dirA-btn-primary:hover { transform: translateY(-1px); background: ${C.accent}; }
        .dirA-btn-ghost { background: transparent; color: ${C.ink}; border: 1px solid ${C.ink}; }
        .dirA-dot { width: 7px; height: 7px; border-radius: 50%; background: #1A9D4D; box-shadow: 0 0 0 4px rgba(26,157,77,0.18); display: inline-block; }
        .dirA-marquee { display: flex; gap: 56px; animation: dirA-scroll 40s linear infinite; }
        @keyframes dirA-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>

      {/* NAV */}
      <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '24px 64px', borderBottom: `1px solid ${C.line}` }}>
        <div className="dirA-serif" style={{ fontSize: 24, letterSpacing: '-0.03em' }}>
          Jean-Marc<span style={{ color: C.accent }}>.</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 36, fontSize: 14 }}>
          <a className="dirA-link" style={{ border: 'none' }}>Travaux</a>
          <a className="dirA-link" style={{ border: 'none' }}>À propos</a>
          <a className="dirA-link" style={{ border: 'none' }}>Expertise</a>
          <a className="dirA-link" style={{ border: 'none' }}>Contact</a>
        </div>
        <div className="dirA-pill"><span className="dirA-dot" /> Disponible · Abidjan</div>
      </nav>

      {/* HERO */}
      <section style={{ padding: '80px 64px 64px', position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: 56, alignItems: 'end' }}>
          <div>
            <div className="dirA-mono" style={{ fontSize: 12, color: C.muted, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 32 }}>
              N’guessan Jean-Marc Koffi — Portfolio &rsquo;26
            </div>
            <h1 className="dirA-serif" style={{ fontSize: 168, lineHeight: 0.92, margin: 0, letterSpacing: '-0.04em' }}>
              Développeur<br />
              <span className="dirA-italic" style={{ color: C.accent }}>front-end</span><br />
              <span style={{ display: 'inline-flex', alignItems: 'baseline', gap: 24 }}>
                <span className="dirA-serif dirA-italic" style={{ fontSize: 96, opacity: 0.5 }}></span> 
              </span>
            </h1>
          </div>
          <div style={{ paddingBottom: 16 }}>
            <div style={{ width: 220, height: 280, background: C.cardDark, borderRadius: 6, position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 30% 30%, rgba(194,73,43,0.4), transparent 60%)' }} />
              <div style={{ position: 'absolute', bottom: 16, left: 16, right: 16, color: '#E9E1D2' }}>
                <div className="dirA-mono" style={{ fontSize: 10, opacity: 0.6, marginBottom: 6 }}>BASÉ À</div>
                <div className="dirA-serif" style={{ fontSize: 22, letterSpacing: '-0.02em' }}>Abidjan,<br />Côte d’Ivoire</div>
              </div>
              <svg width="60" height="60" viewBox="0 0 60 60" style={{ position: 'absolute', top: 16, right: 16 }}>
                <circle cx="30" cy="30" r="28" fill="none" stroke="#C2492B" strokeWidth="1" />
                <path d="M20 30 L40 30 M30 20 L30 40" stroke="#C2492B" strokeWidth="1" />
              </svg>
            </div>
            <div style={{ marginTop: 18, fontSize: 13, color: C.muted, lineHeight: 1.5 }}>
              2+ ans en fintech sur l’extranet de la Caisse des Dépôts ivoirienne.
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 64 }}>
          <button className="dirA-btn dirA-btn-primary">
            Télécharger mon CV
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 2v8M3 7l4 4 4-4M2 12h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
          </button>
          <a href="mailto:jeanmarc.dev18@gmail.com" className="dirA-btn dirA-btn-ghost">jeanmarc.dev18@gmail.com</a>
        </div>
      </section>

      {/* MARQUEE STACK */}
      <section style={{ padding: '32px 0', borderTop: `1px solid ${C.line}`, borderBottom: `1px solid ${C.line}`, overflow: 'hidden' }}>
        <div className="dirA-marquee dirA-serif" style={{ fontSize: 48, whiteSpace: 'nowrap', letterSpacing: '-0.02em' }}>
          {[...Array(2)].map((_, i) =>
          <React.Fragment key={i}>
              <span>Next.js</span>
              <span style={{ color: C.accent }}>✦</span>
              <span>TypeScript</span>
              <span style={{ color: C.accent }}>✦</span>
              <span className="dirA-italic">React 19</span>
              <span style={{ color: C.accent }}>✦</span>
              <span>Tailwind CSS</span>
              <span style={{ color: C.accent }}>✦</span>
              <span className="dirA-italic">Clean Architecture</span>
              <span style={{ color: C.accent }}>✦</span>
              <span>Radix UI</span>
              <span style={{ color: C.accent }}>✦</span>
              <span>GSAP</span>
              <span style={{ color: C.accent }}>✦</span>
            </React.Fragment>
          )}
        </div>
      </section>

      {/* ABOUT + EXPERIENCE */}
      <section style={{ padding: '120px 64px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
        <div>
          <div className="dirA-pill" style={{ marginBottom: 32 }}>À propos</div>
          <h2 className="dirA-serif" style={{ fontSize: 56, lineHeight: 1.05, margin: 0, letterSpacing: '-0.03em' }}>
            Je conçois des <span className="dirA-italic" style={{ color: C.accent }}>interfaces</span> qui tiennent à l’échelle.
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: C.muted, marginTop: 28, maxWidth: 460 }}>
            Bonjour, je suis Jean-Marc, développeur front-end avec plus de 2 ans d’expérience dans la fintech. Je conçois des interfaces performantes, accessibles et optimisées SEO, en m’appuyant sur des architectures modernes (clean architecture, hexagonale, feature-component).
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: C.muted, marginTop: 16, maxWidth: 460 }}>
            Mon objectif : transformer des produits complexes en <em>expériences utilisateur fluides et durables</em>.
          </p>
        </div>

        <div>
          <div className="dirA-pill" style={{ marginBottom: 32 }}>Expérience</div>
          <div style={{ borderTop: `1px solid ${C.line}` }}>
            <div style={{ padding: '28px 0', borderBottom: `1px solid ${C.line}` }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 8 }}>
                <div className="dirA-serif" style={{ fontSize: 26, letterSpacing: '-0.02em' }}>Inexa</div>
                <div className="dirA-mono" style={{ fontSize: 12, color: C.muted }}>AOÛT 2024 — AVRIL 2026</div>
              </div>
              <div style={{ fontSize: 14, color: C.muted, marginBottom: 14 }}>Développeur Front-End · Fintech · Abidjan</div>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: 10, fontSize: 14, lineHeight: 1.55 }}>
                <li style={{ display: 'flex', gap: 12 }}><span style={{ color: C.accent }}>—</span> Conception et développement de l’extranet <strong>CDC-CI</strong> (Caisse des Dépôts ivoirienne).</li>
                <li style={{ display: 'flex', gap: 12 }}><span style={{ color: C.accent }}>—</span> Application de Contrôle Dépositaire : gestion des SGI, SGO et émetteurs sur le marché <strong>UMOA</strong>.</li>
                <li style={{ display: 'flex', gap: 12 }}><span style={{ color: C.accent }}>—</span> Mise en place d’un monorepo Next.js partagé entre plusieurs produits métier.</li>
                <li style={{ display: 'flex', gap: 12 }}><span style={{ color: C.accent }}>—</span> Application de la clean architecture / hexagonale et d’une organisation feature-component.</li>
              </ul>
            </div>
          </div>

          <div style={{ marginTop: 40 }}>
            <div className="dirA-mono" style={{ fontSize: 11, color: C.muted, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 16 }}>Stack au quotidien</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {skills.map((s) => <span key={s} className="dirA-tag">{s}</span>)}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section style={{ padding: '0 64px 120px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: 48 }}>
          <div>
            <div className="dirA-pill" style={{ marginBottom: 20 }}>Sélection</div>
            <h2 className="dirA-serif" style={{ fontSize: 88, margin: 0, lineHeight: 0.95, letterSpacing: '-0.04em' }}>
              Travaux <span className="dirA-italic" style={{ color: C.accent }}>récents</span>
            </h2>
          </div>
          <div style={{ fontSize: 14, color: C.muted, maxWidth: 280, lineHeight: 1.5 }}>
            Une sélection de projets en production illustrant mon expertise en interfaces web et solutions digitales.
          </div>
        </div>

        <div style={{ display: 'grid', gap: 24 }}>
          {projects.map((p, i) =>
          <article key={p.name} style={{
            background: p.featured ? C.cardDark : 'rgba(255,255,255,0.5)',
            color: p.featured ? '#E9E1D2' : C.ink,
            borderRadius: 8,
            padding: '40px 44px',
            border: p.featured ? 'none' : `1px solid ${C.line}`,
            display: 'grid',
            gridTemplateColumns: '1fr 2fr 1fr',
            gap: 40,
            alignItems: 'start'
          }}>
              <div>
                <div className="dirA-mono" style={{ fontSize: 11, opacity: 0.6, letterSpacing: '0.08em', marginBottom: 12 }}>0{i + 1} / {p.year}</div>
                <h3 className="dirA-serif" style={{ fontSize: 44, margin: 0, letterSpacing: '-0.03em', lineHeight: 1 }}>{p.name}</h3>
                <div style={{ fontSize: 13, opacity: 0.7, marginTop: 8 }}>{p.sub}</div>
              </div>
              <div>
                <p style={{ fontSize: 16, lineHeight: 1.55, margin: 0, opacity: p.featured ? 0.85 : 1 }}>{p.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 20 }}>
                  {p.stack.map((s) =>
                <span key={s} className={p.featured ? 'dirA-tag dirA-tag-dark' : 'dirA-tag'}>{s}</span>
                )}
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                <a className="dirA-link" style={{ color: p.featured ? '#E9E1D2' : C.ink, borderColor: p.featured ? 'rgba(255,255,255,0.3)' : C.line, fontSize: 14, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                  Visiter le site
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 9 L9 3 M4 3 H9 V8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /></svg>
                </a>
              </div>
            </article>
          )}
        </div>
      </section>

      {/* EXPERTISE */}
      <section style={{ padding: '120px 64px', background: C.bgWarm, borderTop: `1px solid ${C.line}`, borderBottom: `1px solid ${C.line}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80, alignItems: 'start' }}>
          <div>
            <div className="dirA-pill" style={{ marginBottom: 24 }}>Expertise</div>
            <h2 className="dirA-serif" style={{ fontSize: 56, margin: 0, lineHeight: 1.05, letterSpacing: '-0.03em' }}>
              Trois <span className="dirA-italic" style={{ color: C.accent }}>piliers</span>.
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {[
            { n: '01', t: 'Architecture Frontend', d: 'Clean, hexagonale, monorepo, feature-component. Code maintenable, testable et prêt à l’échelle.' },
            { n: '02', t: 'Interfaces UI/UX', d: 'Accessibles et animées. Standards WCAG, Tailwind, Radix, Framer Motion et GSAP.' },
            { n: '03', t: 'Performance & SEO', d: 'Core Web Vitals, SSR/SSG avec Next.js, métadonnées structurées, Open Graph.' }].
            map((p) =>
            <div key={p.n} style={{ borderTop: `1px solid ${C.ink}`, paddingTop: 20 }}>
                <div className="dirA-mono" style={{ fontSize: 12, color: C.accent, marginBottom: 32 }}>{p.n}</div>
                <h3 className="dirA-serif" style={{ fontSize: 26, margin: 0, letterSpacing: '-0.02em', lineHeight: 1.1 }}>{p.t}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.55, color: C.muted, marginTop: 14 }}>{p.d}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section style={{ padding: '140px 64px 100px', textAlign: 'center' }}>
        <div className="dirA-pill" style={{ marginBottom: 32 }}><span className="dirA-dot" /> Disponible pour nouveaux projets</div>
        <h2 className="dirA-serif" style={{ fontSize: 140, margin: 0, lineHeight: 0.95, letterSpacing: '-0.04em' }}>
          <span className="dirA-italic">Discutons</span>
          <span style={{ color: C.accent }}>.</span>
        </h2>
        <p style={{ fontSize: 18, color: C.muted, marginTop: 28, maxWidth: 520, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.5 }}>
          Une opportunité freelance ou un poste à pourvoir ? Parlons-en.
        </p>
        <a href="mailto:jeanmarc.dev18@gmail.com" className="dirA-btn dirA-btn-primary" style={{ marginTop: 32, fontSize: 16, padding: '18px 28px' }}>
          jeanmarc.dev18@gmail.com
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M4 10 L10 4 M5 4 H10 V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
        </a>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: '32px 64px', borderTop: `1px solid ${C.line}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 13, color: C.muted }}>
        <div>© 2026 Jean-Marc Koffi — Abidjan</div>
        <div style={{ display: 'flex', gap: 28 }}>
          <a className="dirA-link" style={{ border: 'none', color: C.muted }}>LinkedIn</a>
          <a className="dirA-link" style={{ border: 'none', color: C.muted }}>GitHub</a>
          <a className="dirA-link" style={{ border: 'none', color: C.muted }}>WhatsApp</a>
        </div>
      </footer>
    </div>);

}

window.DirectionA = DirectionA;