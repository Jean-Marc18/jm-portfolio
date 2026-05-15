// Direction B — Tech minimal noir
// Noir profond + mono + accent vert phosphore. Developer-first.

function DirectionB() {
  const C = {
    bg: '#0A0B0A',
    bgRaised: '#111312',
    bgSubtle: '#16191A',
    ink: '#E8EAE7',
    muted: '#7A8079',
    line: '#1F2322',
    lineSoft: '#272B29',
    accent: '#B8FF37',
    accentDim: 'rgba(184,255,55,0.12)',
  };

  const projects = [
    {
      name: 'PIPV-PPED',
      sub: 'Plateforme institutionnelle ivoirienne',
      desc: 'Plateforme officielle de gestion et de suivi pour une institution publique. Authentification sécurisée, gestion des rôles, upload de documents et tableau de bord administratif.',
      stack: ['next@14', 'react@18', 'tailwind@3', 'radix-ui', 'tanstack-query', 'next-auth', 'uploadthing', 'zod'],
      version: 'v1.4.2',
      status: 'production',
    },
    {
      name: 'TaComFav',
      sub: 'Site agence de communication',
      desc: 'Site vitrine animé avec CMS headless. Performance, SEO et expérience visuelle au cœur du projet.',
      stack: ['next@16', 'react@19', 'tailwind@4', 'sanity', 'gsap', 'framer-motion', 'lenis', 'resend'],
      version: 'v2.0.0',
      status: 'production',
    },
    {
      name: 'e-Panacee',
      sub: 'E-commerce ivoirien',
      desc: 'Plateforme e-commerce complète : catalogue, panier, gestion de commandes, paiement et back-office. Performance mobile et accessibilité.',
      stack: ['next@15', 'react@19', 'tailwind@4', 'radix-ui', 'tanstack-query', 'zustand', 'rhf', 'zod'],
      version: 'v1.2.0',
      status: 'production',
    },
  ];

  const skills = [
    { name: 'Next.js', cat: 'framework' },
    { name: 'React', cat: 'framework' },
    { name: 'TypeScript', cat: 'language' },
    { name: 'Tailwind CSS', cat: 'styling' },
    { name: 'TanStack Query', cat: 'state' },
    { name: 'Zustand', cat: 'state' },
    { name: 'React Hook Form', cat: 'forms' },
    { name: 'Zod', cat: 'validation' },
    { name: 'Radix UI', cat: 'ui' },
    { name: 'Framer Motion', cat: 'animation' },
    { name: 'GSAP', cat: 'animation' },
    { name: 'Sanity', cat: 'cms' },
    { name: 'NextAuth.js', cat: 'auth' },
    { name: 'Clean Architecture', cat: 'arch' },
    { name: 'Hexagonal', cat: 'arch' },
    { name: 'Feature-Component', cat: 'arch' },
  ];

  return (
    <div style={{ background: C.bg, color: C.ink, fontFamily: '"Geist", system-ui, sans-serif', minHeight: '100%', position: 'relative' }}>
      <style>{`
        .dirB-mono { font-family: "JetBrains Mono", ui-monospace, monospace; font-variant-ligatures: none; }
        .dirB-grid-bg {
          background-image:
            linear-gradient(${C.line} 1px, transparent 1px),
            linear-gradient(90deg, ${C.line} 1px, transparent 1px);
          background-size: 64px 64px;
        }
        .dirB-link { color: ${C.ink}; text-decoration: none; transition: color .15s; }
        .dirB-link:hover { color: ${C.accent}; }
        .dirB-nav-item { font-size: 13px; color: ${C.muted}; transition: color .15s; }
        .dirB-nav-item:hover { color: ${C.ink}; }
        .dirB-tag { display: inline-flex; align-items: center; gap: 6px; padding: 5px 10px; border: 1px solid ${C.lineSoft}; border-radius: 4px; font-size: 11.5px; color: ${C.ink}; background: ${C.bgRaised}; font-family: "JetBrains Mono", monospace; }
        .dirB-tag-accent { border-color: ${C.accent}; color: ${C.accent}; background: ${C.accentDim}; }
        .dirB-btn { display: inline-flex; align-items: center; gap: 10px; padding: 13px 20px; border-radius: 6px; font-size: 13.5px; font-family: "JetBrains Mono", monospace; cursor: pointer; transition: all .15s; border: none; }
        .dirB-btn-primary { background: ${C.accent}; color: #0A0B0A; font-weight: 500; }
        .dirB-btn-primary:hover { transform: translateY(-1px); box-shadow: 0 8px 24px rgba(184,255,55,0.25); }
        .dirB-btn-ghost { background: transparent; color: ${C.ink}; border: 1px solid ${C.lineSoft}; }
        .dirB-btn-ghost:hover { border-color: ${C.accent}; color: ${C.accent}; }
        .dirB-card { background: ${C.bgRaised}; border: 1px solid ${C.line}; border-radius: 6px; transition: border-color .2s; }
        .dirB-card:hover { border-color: ${C.lineSoft}; }
        .dirB-pulse { width: 8px; height: 8px; border-radius: 50%; background: ${C.accent}; box-shadow: 0 0 0 4px rgba(184,255,55,0.15); display: inline-block; animation: dirB-pulse 2s ease-in-out infinite; }
        @keyframes dirB-pulse { 0%, 100% { box-shadow: 0 0 0 4px rgba(184,255,55,0.15); } 50% { box-shadow: 0 0 0 7px rgba(184,255,55,0.08); } }
        .dirB-marquee { display: flex; gap: 48px; animation: dirB-scroll 50s linear infinite; align-items: center; }
        @keyframes dirB-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .dirB-label { font-family: "JetBrains Mono", monospace; font-size: 11px; color: ${C.muted}; letter-spacing: 0.08em; text-transform: uppercase; }
      `}</style>

      {/* Subtle grid background */}
      <div className="dirB-grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.5, pointerEvents: 'none', maskImage: 'radial-gradient(ellipse at top, black 30%, transparent 75%)' }} />

      <div style={{ position: 'relative' }}>
        {/* NAV */}
        <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 56px', borderBottom: `1px solid ${C.line}`, background: 'rgba(10,11,10,0.7)', backdropFilter: 'blur(8px)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 28, height: 28, background: C.accent, borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0A0B0A', fontFamily: 'JetBrains Mono', fontWeight: 700, fontSize: 14 }}>jm</div>
            <div style={{ fontSize: 14, fontWeight: 500 }}>jeanmarc.koffi</div>
            <span className="dirB-mono" style={{ fontSize: 11, color: C.muted, padding: '2px 6px', background: C.bgRaised, borderRadius: 3, border: `1px solid ${C.line}` }}>v3.0</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 32, fontFamily: 'JetBrains Mono', fontSize: 13 }}>
            <a className="dirB-nav-item"><span style={{ color: C.muted }}>01_</span>work</a>
            <a className="dirB-nav-item"><span style={{ color: C.muted }}>02_</span>about</a>
            <a className="dirB-nav-item"><span style={{ color: C.muted }}>03_</span>stack</a>
            <a className="dirB-nav-item"><span style={{ color: C.muted }}>04_</span>contact</a>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 12 }} className="dirB-mono">
            <span className="dirB-pulse" />
            <span style={{ color: C.muted }}>status:</span>
            <span style={{ color: C.accent }}>available</span>
          </div>
        </nav>

        {/* HERO */}
        <section style={{ padding: '88px 56px 72px', position: 'relative' }}>
          <div className="dirB-mono" style={{ fontSize: 12, color: C.muted, marginBottom: 24, display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ color: '#5C645B' }}>// portfolio.config.ts</span>
            <span style={{ width: 4, height: 4, borderRadius: '50%', background: C.muted }} />
            <span>read time: 2min</span>
          </div>

          <h1 style={{ fontSize: 112, lineHeight: 0.95, margin: 0, letterSpacing: '-0.04em', fontWeight: 500 }}>
            Front-end<br />
            developer.<br />
            <span className="dirB-mono" style={{ fontSize: 36, fontWeight: 400, letterSpacing: '-0.02em', color: C.muted }}>
              <span style={{ color: C.accent }}>const</span> focus = <span style={{ color: '#E8B85C' }}>{'"modern & production-ready website"'}</span>;
            </span>
          </h1>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, marginTop: 64 }}>
            <div>
              <div className="dirB-label" style={{ marginBottom: 14 }}>// readme</div>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: C.muted, margin: 0, maxWidth: 480 }}>
                Bonjour, je suis Jean-Marc, développeur front-end avec plus de 2 ans d’expérience dans la fintech. Je conçois des interfaces performantes, accessibles et optimisées SEO, en m’appuyant sur des architectures modernes : <span style={{ color: C.ink }}>clean</span>, <span style={{ color: C.ink }}>hexagonale</span>, <span style={{ color: C.ink }}>feature-component</span>.
              </p>
              <div style={{ display: 'flex', gap: 12, marginTop: 32 }}>
                <button className="dirB-btn dirB-btn-primary">
                  $ download_cv.pdf
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M6.5 2v7M3 6l3.5 3.5L10 6M2 11h9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>
                </button>
                <a href="mailto:jeanmarc.dev18@gmail.com" className="dirB-btn dirB-btn-ghost">
                  jeanmarc.dev18@gmail.com
                </a>
              </div>
            </div>

            <div className="dirB-card" style={{ padding: 0, overflow: 'hidden' }}>
              <div style={{ padding: '10px 16px', borderBottom: `1px solid ${C.line}`, display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'JetBrains Mono', fontSize: 11, color: C.muted }}>
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#FF5F57' }} />
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#FEBC2E' }} />
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#28C840' }} />
                <span style={{ marginLeft: 12 }}>~ / profile.json</span>
              </div>
              <div className="dirB-mono" style={{ padding: 24, fontSize: 13, lineHeight: 1.7 }}>
                <div><span style={{ color: C.muted }}>1</span>  <span style={{ color: '#E8E8E8' }}>{'{'}</span></div>
                <div><span style={{ color: C.muted }}>2</span>    <span style={{ color: '#7DD3FC' }}>"name"</span>: <span style={{ color: '#E8B85C' }}>"Jean-Marc KOFFI"</span>,</div>
                <div><span style={{ color: C.muted }}>3</span>    <span style={{ color: '#7DD3FC' }}>"role"</span>: <span style={{ color: '#E8B85C' }}>"Front-End Developer"</span>,</div>
                <div><span style={{ color: C.muted }}>4</span>    <span style={{ color: '#7DD3FC' }}>"location"</span>: <span style={{ color: '#E8B85C' }}>"Abidjan, CI"</span>,</div>
                <div><span style={{ color: C.muted }}>5</span>    <span style={{ color: '#7DD3FC' }}>"experience"</span>: <span style={{ color: '#E8B85C' }}>"2+ years"</span>,</div>
                <div><span style={{ color: C.muted }}>6</span>    <span style={{ color: '#7DD3FC' }}>"domain"</span>: <span style={{ color: '#E8B85C' }}>"fintech / UMOA"</span>,</div>
                <div><span style={{ color: C.muted }}>7</span>    <span style={{ color: '#7DD3FC' }}>"status"</span>: <span style={{ color: C.accent }}>"available"</span></div>
                <div><span style={{ color: C.muted }}>8</span>  <span style={{ color: '#E8E8E8' }}>{'}'}</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* MARQUEE STACK */}
        <section style={{ padding: '24px 0', borderTop: `1px solid ${C.line}`, borderBottom: `1px solid ${C.line}`, overflow: 'hidden', background: C.bgSubtle }}>
          <div className="dirB-marquee dirB-mono" style={{ fontSize: 18, whiteSpace: 'nowrap', color: C.muted }}>
            {[...Array(2)].map((_, i) => (
              <React.Fragment key={i}>
                {['next.js', 'typescript', 'tailwind css', 'tanstack query', 'zustand', 'react hook form', 'zod', 'radix ui', 'framer motion', 'gsap', 'sanity', 'next-auth', 'clean architecture'].map((s) => (
                  <React.Fragment key={s}>
                    <span>— {s}</span>
                  </React.Fragment>
                ))}
              </React.Fragment>
            ))}
          </div>
        </section>

        {/* ABOUT + EXPERIENCE */}
        <section style={{ padding: '120px 56px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: 80 }}>
            <div>
              <div className="dirB-label" style={{ marginBottom: 12 }}>02_about</div>
              <h2 style={{ fontSize: 40, margin: 0, letterSpacing: '-0.02em', lineHeight: 1.05, fontWeight: 500 }}>
                Experience.
                <span style={{ color: C.accent }}>_</span>
              </h2>
            </div>
            <div>
              <div className="dirB-card" style={{ padding: 32 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 6 }}>
                  <div style={{ fontSize: 22, fontWeight: 500 }}>Inexa <span style={{ color: C.muted, fontWeight: 400 }}>— Développeur Front-End</span></div>
                  <div className="dirB-mono" style={{ fontSize: 12, color: C.muted }}>2024.08 → 2026.04</div>
                </div>
                <div className="dirB-mono" style={{ fontSize: 12, color: C.accent, marginBottom: 24 }}>fintech · abidjan · CDC-CI</div>
                <div style={{ display: 'grid', gap: 14 }}>
                  {[
                    ['feat', 'Conception et développement de l’extranet CDC-CI (Caisse des Dépôts ivoirienne).'],
                    ['feat', 'Application de Contrôle Dépositaire : gestion des SGI, SGO et émetteurs sur le marché UMOA.'],
                    ['arch', 'Mise en place d’un monorepo Next.js partagé entre plusieurs produits métier.'],
                    ['arch', 'Application de la clean architecture / hexagonale et d’une organisation feature-component.'],
                  ].map(([tag, text], i) => (
                    <div key={i} style={{ display: 'flex', gap: 14, fontSize: 14, lineHeight: 1.55 }}>
                      <span className="dirB-mono" style={{ flex: '0 0 auto', width: 44, color: tag === 'feat' ? C.accent : '#7DD3FC', fontSize: 11, paddingTop: 3 }}>{tag}:</span>
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ marginTop: 40 }}>
                <div className="dirB-label" style={{ marginBottom: 16 }}>// stack.ts</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {skills.map((s) => (
                    <span key={s.name} className="dirB-tag">
                      <span style={{ color: C.muted, fontSize: 10 }}>{s.cat}</span>
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section style={{ padding: '0 56px 120px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: 40 }}>
            <div>
              <div className="dirB-label" style={{ marginBottom: 12 }}>01_work</div>
              <h2 style={{ fontSize: 56, margin: 0, letterSpacing: '-0.03em', lineHeight: 1, fontWeight: 500 }}>
                Selected projects<span style={{ color: C.accent }}>.</span>
              </h2>
            </div>
            <div className="dirB-mono" style={{ fontSize: 12, color: C.muted }}>03 / 03 — production</div>
          </div>

          <div style={{ display: 'grid', gap: 14 }}>
            {projects.map((p, i) => (
              <article key={p.name} className="dirB-card" style={{ padding: 0, display: 'grid', gridTemplateColumns: '90px 1fr 380px 120px', alignItems: 'stretch' }}>
                <div className="dirB-mono" style={{ padding: 28, borderRight: `1px solid ${C.line}`, fontSize: 14, color: C.accent, display: 'flex', alignItems: 'center' }}>
                  0{i + 1}
                </div>
                <div style={{ padding: 28 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                    <h3 style={{ fontSize: 22, margin: 0, fontWeight: 500, letterSpacing: '-0.01em' }}>{p.name}</h3>
                    <span className="dirB-mono" style={{ fontSize: 10, padding: '2px 6px', borderRadius: 3, background: C.bgSubtle, color: C.muted, border: `1px solid ${C.line}` }}>{p.version}</span>
                    <span className="dirB-mono" style={{ fontSize: 10, padding: '2px 6px', borderRadius: 3, background: C.accentDim, color: C.accent, display: 'inline-flex', alignItems: 'center', gap: 5 }}>
                      <span style={{ width: 5, height: 5, borderRadius: '50%', background: C.accent }} />
                      {p.status}
                    </span>
                  </div>
                  <div style={{ fontSize: 13, color: C.muted, marginBottom: 14 }}>{p.sub}</div>
                  <p style={{ fontSize: 14, lineHeight: 1.55, color: '#B8BDB6', margin: 0 }}>{p.desc}</p>
                </div>
                <div style={{ padding: 28, borderLeft: `1px solid ${C.line}` }}>
                  <div className="dirB-label" style={{ marginBottom: 10 }}>// dependencies</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                    {p.stack.map((s) => <span key={s} className="dirB-mono" style={{ fontSize: 11, color: C.muted }}>{s}</span>)}
                  </div>
                </div>
                <div style={{ padding: 28, borderLeft: `1px solid ${C.line}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <a className="dirB-mono dirB-link" style={{ fontSize: 12, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                    visit
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M3 8 L8 3 M4 3 H8 V7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /></svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* EXPERTISE */}
        <section style={{ padding: '100px 56px', borderTop: `1px solid ${C.line}`, borderBottom: `1px solid ${C.line}`, background: C.bgSubtle }}>
          <div className="dirB-label" style={{ marginBottom: 12 }}>// expertise.ts</div>
          <h2 style={{ fontSize: 48, margin: 0, letterSpacing: '-0.03em', lineHeight: 1, fontWeight: 500, marginBottom: 56 }}>
            Three pillars<span style={{ color: C.accent }}>.</span>
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {[
              { n: '01', t: 'Architecture Frontend', tags: ['clean', 'hexagonal', 'monorepo', 'feature-component'], d: 'Mise en place d’architectures modulaires et évolutives. Code maintenable, testable, prêt à l’échelle.' },
              { n: '02', t: 'Interfaces UI/UX', tags: ['wcag-aa', 'tailwind', 'radix', 'framer', 'gsap'], d: 'Interfaces accessibles et intuitives, avec un soin particulier pour les animations et la cohérence visuelle.' },
              { n: '03', t: 'Performance & SEO', tags: ['core-web-vitals', 'ssr', 'ssg', 'open-graph'], d: 'Optimisation Core Web Vitals, rendu SSR/SSG avec Next.js, métadonnées structurées, sitemap.' },
            ].map((p) => (
              <div key={p.n} className="dirB-card" style={{ padding: 28 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 36 }}>
                  <div className="dirB-mono" style={{ fontSize: 12, color: C.muted }}>pillar/{p.n}</div>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke={C.accent} strokeWidth="1.2"><rect x="3" y="3" width="6" height="6" /><rect x="11" y="3" width="6" height="6" /><rect x="3" y="11" width="6" height="6" /><rect x="11" y="11" width="6" height="6" /></svg>
                </div>
                <h3 style={{ fontSize: 22, margin: 0, fontWeight: 500, letterSpacing: '-0.01em' }}>{p.t}</h3>
                <p style={{ fontSize: 13.5, lineHeight: 1.6, color: C.muted, marginTop: 12 }}>{p.d}</p>
                <div style={{ marginTop: 20, display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                  {p.tags.map((t) => <span key={t} className="dirB-mono" style={{ fontSize: 10.5, color: C.accent }}>#{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section style={{ padding: '140px 56px 100px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24, justifyContent: 'center' }}>
            <span className="dirB-pulse" />
            <span className="dirB-mono" style={{ fontSize: 13, color: C.muted }}>
              <span style={{ color: '#5C645B' }}>// </span>currently available for new opportunities
            </span>
          </div>
          <h2 style={{ fontSize: 128, margin: 0, letterSpacing: '-0.04em', lineHeight: 0.95, fontWeight: 500, textAlign: 'center' }}>
            $ <span style={{ color: C.accent }}>./contact</span>
          </h2>
          <p style={{ fontSize: 16, color: C.muted, textAlign: 'center', marginTop: 24, maxWidth: 500, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.55 }}>
            Une opportunité freelance, un poste à pourvoir, un projet complexe à débugger ?
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 36 }}>
            <a href="mailto:jeanmarc.dev18@gmail.com" className="dirB-btn dirB-btn-primary" style={{ fontSize: 15, padding: '16px 24px' }}>
              jeanmarc.dev18@gmail.com
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M4 9 L9 4 M5 4 H9 V8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>
            </a>
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{ padding: '28px 56px', borderTop: `1px solid ${C.line}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: 'JetBrains Mono', fontSize: 12, color: C.muted }}>
          <div>© 2026 — built with Next.js, deployed on Vercel</div>
          <div style={{ display: 'flex', gap: 24 }}>
            <a className="dirB-link" style={{ color: C.muted }}>linkedin/</a>
            <a className="dirB-link" style={{ color: C.muted }}>github/</a>
            <a className="dirB-link" style={{ color: C.muted }}>whatsapp/</a>
          </div>
        </footer>
      </div>
    </div>
  );
}

window.DirectionB = DirectionB;
