// Portfolio Jean-Marc — Layout partagé v2
// Light/dark + FR/EN + nav + footer + tokens + hooks.

(function () {
  // ── Tokens light & dark ─────────────────────────────────
  const LIGHT = {
    bg: '#F7F5F0', bgAlt: '#FFFFFF', bgCard: '#EDEAE2', bgDark: '#1A1A18',
    ink: '#1A1A18', muted: '#6B6961', line: '#DDD8CC', accent: '#FF5A1F',
    navBg: 'rgba(247,245,240,0.85)', sheetBg: 'rgba(247,245,240,0.97)',
  };
  const DARK = {
    bg: '#13110E', bgAlt: '#1B1814', bgCard: '#1B1814', bgDark: '#08070A',
    ink: '#F4F1EA', muted: '#9C988C', line: '#2D2920', accent: '#FF7A47',
    navBg: 'rgba(19,17,14,0.85)', sheetBg: 'rgba(19,17,14,0.97)',
  };
  window.PF_TOKENS = LIGHT; // back-compat; many pages already read PF_TOKENS

  // ── Lang & theme: localStorage + custom event sync ─────
  const LS_LANG = 'pf-lang', LS_THEME = 'pf-theme';

  function getInitial(key, def) {
    try { return localStorage.getItem(key) || def; } catch (e) { return def; }
  }

  function useLang() {
    const [lang, setLangState] = React.useState(() => getInitial(LS_LANG, 'fr'));
    React.useEffect(() => {
      function onChange(e) { setLangState(e.detail || getInitial(LS_LANG, 'fr')); }
      window.addEventListener('pf-lang-change', onChange);
      return () => window.removeEventListener('pf-lang-change', onChange);
    }, []);
    const setLang = (l) => {
      try { localStorage.setItem(LS_LANG, l); } catch (e) {}
      window.dispatchEvent(new CustomEvent('pf-lang-change', { detail: l }));
      document.documentElement.lang = l === 'en' ? 'en' : 'fr';
    };
    return [lang, setLang];
  }

  function useTheme() {
    const [theme, setThemeState] = React.useState(() => getInitial(LS_THEME, 'light'));
    React.useEffect(() => {
      function onChange(e) { setThemeState(e.detail || getInitial(LS_THEME, 'light')); }
      window.addEventListener('pf-theme-change', onChange);
      return () => window.removeEventListener('pf-theme-change', onChange);
    }, []);
    React.useEffect(() => {
      document.documentElement.dataset.theme = theme;
    }, [theme]);
    const setTheme = (t) => {
      try { localStorage.setItem(LS_THEME, t); } catch (e) {}
      window.dispatchEvent(new CustomEvent('pf-theme-change', { detail: t }));
    };
    return [theme, setTheme];
  }

  // small helper used inside pages
  function makeTr(lang) { return (fr, en) => (lang === 'en' ? en : fr); }

  // ── Styles ──────────────────────────────────────────────
  function PFStyles() {
    return (
      <style dangerouslySetInnerHTML={{ __html: `
        :root, .pf-root {
          --bg: ${LIGHT.bg}; --bg-alt: ${LIGHT.bgAlt}; --bg-card: ${LIGHT.bgCard}; --bg-dark: ${LIGHT.bgDark};
          --ink: ${LIGHT.ink}; --muted: ${LIGHT.muted}; --line: ${LIGHT.line}; --accent: ${LIGHT.accent};
          --nav-bg: ${LIGHT.navBg}; --sheet-bg: ${LIGHT.sheetBg};
          --on-pastel: #1A1A18;
        }
        html[data-theme="dark"], .pf-root[data-theme="dark"] {
          --bg: ${DARK.bg}; --bg-alt: ${DARK.bgAlt}; --bg-card: ${DARK.bgCard}; --bg-dark: ${DARK.bgDark};
          --ink: ${DARK.ink}; --muted: ${DARK.muted}; --line: ${DARK.line}; --accent: ${DARK.accent};
          --nav-bg: ${DARK.navBg}; --sheet-bg: ${DARK.sheetBg};
        }
        html { background: var(--bg); transition: background-color .25s; }
        body { background: var(--bg); color: var(--ink); transition: background-color .25s, color .25s; }
        .pf-root {
          background: var(--bg); color: var(--ink);
          font-family: "Geist", "Plus Jakarta Sans", system-ui, sans-serif;
          min-height: 100vh; -webkit-font-smoothing: antialiased;
          transition: background-color .25s, color .25s;
        }
        .pf-root * { box-sizing: border-box; }

        .pf-display { letter-spacing: -0.03em; font-weight: 500; }
        .pf-label { font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted); font-weight: 500; }

        .pf-pill { display: inline-flex; align-items: center; gap: 8px; padding: 7px 14px; border: 1px solid var(--line); border-radius: 999px; font-size: 12px; color: var(--muted); background: var(--bg-alt); }
        .pf-pill-dark { background: rgba(255,255,255,0.08); border-color: rgba(255,255,255,0.15); color: rgba(255,255,255,0.8); }

        .pf-tag { display: inline-flex; align-items: center; padding: 5px 11px; border: 1px solid var(--line); border-radius: 999px; font-size: 11.5px; color: var(--muted); background: var(--bg-alt); }
        .pf-tag-dark { background: rgba(255,255,255,0.08); border-color: rgba(255,255,255,0.15); color: rgba(255,255,255,0.85); }

        .pf-dot { width: 7px; height: 7px; border-radius: 50%; background: #1A9D4D; box-shadow: 0 0 0 4px rgba(26,157,77,0.16); display: inline-block; flex: 0 0 auto; }

        .pf-link { color: var(--ink); text-decoration: none; transition: color .15s; }
        .pf-link:hover, .pf-link:focus-visible { color: var(--accent); }
        .pf-link:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 3px; }
        .pf-link-active { color: var(--accent); }
        .pf-link-active::after { content: ""; display: block; height: 1.5px; background: var(--accent); margin-top: 3px; border-radius: 1px; }

        .pf-btn { display: inline-flex; align-items: center; gap: 10px; padding: 13px 22px; border-radius: 999px; font-size: 14px; cursor: pointer; transition: all .18s; border: 1px solid transparent; font-family: inherit; text-decoration: none; }
        .pf-btn:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
        .pf-btn-primary { background: var(--ink); color: var(--bg); }
        .pf-btn-primary:hover { background: var(--accent); transform: translateY(-1px); color: #fff; }
        .pf-btn-ghost { background: var(--bg-alt); color: var(--ink); border-color: var(--line); }
        .pf-btn-ghost:hover { border-color: var(--ink); }
        .pf-btn-light { background: #F4F1EA; color: #1A1A18; }
        .pf-btn-light:hover { background: var(--accent); color: #fff; }
        .pf-btn-darkghost { background: transparent; color: #F4F1EA; border: 1px solid rgba(255,255,255,0.22); }
        .pf-btn-darkghost:hover { background: rgba(255,255,255,0.06); border-color: rgba(255,255,255,0.4); }

        .pf-card { background: var(--bg-alt); border: 1px solid var(--line); border-radius: 14px; transition: transform .22s, box-shadow .22s, background-color .25s, border-color .25s; }
        .pf-card:hover { transform: translateY(-2px); box-shadow: 0 12px 28px rgba(0,0,0,0.06); }
        html[data-theme="dark"] .pf-card:hover { box-shadow: 0 12px 28px rgba(0,0,0,0.4); }

        .pf-arrow { width: 32px; height: 32px; border-radius: 50%; background: var(--bg); border: 1px solid var(--line); display: inline-flex; align-items: center; justify-content: center; transition: background .15s, color .15s, border-color .15s; color: var(--ink); flex: 0 0 auto; }
        .pf-card:hover .pf-arrow { background: var(--ink); color: var(--bg); border-color: var(--ink); }

        .pf-reveal { opacity: 0; transform: translateY(16px); transition: opacity .7s ease, transform .7s ease; }
        .pf-reveal.pf-in { opacity: 1; transform: none; }
        @media (prefers-reduced-motion: reduce) { .pf-reveal { opacity: 1 !important; transform: none !important; transition: none !important; } }

        .pf-section { padding: 80px 56px; }
        .pf-section-band { background: var(--bg-alt); border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }

        /* NAV */
        .pf-nav { position: sticky; top: 0; z-index: 50; background: var(--nav-bg); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); border-bottom: 1px solid transparent; transition: background-color .25s; }
        .pf-nav-inner { display: flex; align-items: center; justify-content: space-between; padding: 18px 56px; gap: 16px; }
        .pf-brand { display: flex; align-items: center; gap: 14px; min-width: 0; text-decoration: none; color: inherit; }
        .pf-logo { width: 40px; height: 40px; border-radius: 50%; background: var(--ink); color: var(--bg); display: inline-flex; align-items: center; justify-content: center; font-weight: 600; font-size: 13px; letter-spacing: -0.02em; flex: 0 0 auto; transition: background-color .25s, color .25s; }
        .pf-navlinks { display: flex; align-items: center; gap: 28px; font-size: 14px; }
        .pf-nav-right { display: flex; align-items: center; gap: 10px; }

        /* Lang toggle (segmented) */
        .pf-lang { display: inline-flex; align-items: center; background: var(--bg-alt); border: 1px solid var(--line); border-radius: 999px; padding: 3px; font-family: inherit; font-size: 11.5px; }
        .pf-lang button { background: transparent; border: none; padding: 5px 9px; border-radius: 999px; cursor: pointer; color: var(--muted); font: inherit; transition: background .15s, color .15s; letter-spacing: 0.02em; font-weight: 500; }
        .pf-lang button.is-active { background: var(--ink); color: var(--bg); }
        .pf-lang button:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }

        /* Theme toggle */
        .pf-theme { width: 34px; height: 34px; border-radius: 999px; border: 1px solid var(--line); background: var(--bg-alt); display: inline-flex; align-items: center; justify-content: center; cursor: pointer; color: var(--ink); transition: background .15s, border-color .15s; }
        .pf-theme:hover { border-color: var(--ink); }
        .pf-theme:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }

        .pf-menubtn { display: none; background: var(--bg-alt); border: 1px solid var(--line); border-radius: 999px; padding: 8px 14px; font: inherit; font-size: 13px; gap: 8px; align-items: center; color: var(--ink); cursor: pointer; }

        /* FOOTER */
        .pf-footer { padding: 80px 56px 40px; border-top: 1px solid var(--line); background: var(--bg); transition: background-color .25s, border-color .25s; }
        .pf-footer-grid { display: grid; grid-template-columns: 1.6fr auto; gap: 64px; margin-bottom: 56px; align-items: start; }
        .pf-footer-bottom { display: flex; justify-content: space-between; align-items: center; padding-top: 28px; border-top: 1px solid var(--line); font-size: 13px; color: var(--muted); gap: 24px; flex-wrap: wrap; }
        .pf-footer-col h4 { font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted); font-weight: 500; margin: 0 0 16px; }
        .pf-footer-col ul { list-style: none; padding: 0; margin: 0; display: grid; gap: 10px; font-size: 14px; }
        .pf-footer-col a { color: var(--ink); text-decoration: none; }
        .pf-footer-col a:hover { color: var(--accent); }

        /* Mobile sheet */
        .pf-menu-sheet { position: fixed; inset: 0; background: var(--sheet-bg); backdrop-filter: blur(12px); z-index: 100; display: flex; flex-direction: column; padding: 20px; gap: 8px; }
        .pf-menu-sheet > a { font-size: 28px; font-weight: 500; letter-spacing: -0.02em; padding: 14px 0; border-bottom: 1px solid var(--line); color: var(--ink); text-decoration: none; }
        .pf-menu-sheet .pf-menu-close { align-self: flex-end; width: 44px; height: 44px; border-radius: 50%; background: var(--ink); color: var(--bg); border: none; font-size: 22px; cursor: pointer; }

        /* Tablet */
        @media (max-width: 980px) {
          .pf-nav-inner, .pf-section, .pf-footer { padding-left: 32px; padding-right: 32px; }
          .pf-footer-grid { grid-template-columns: 1fr 1fr; gap: 32px; }
        }

        /* Mobile */
        @media (max-width: 680px) {
          .pf-nav-inner { padding: 14px 20px; gap: 10px; }
          .pf-section { padding: 56px 20px; }
          .pf-footer { padding: 56px 20px 32px; }
          .pf-footer-grid { grid-template-columns: 1fr; gap: 28px; margin-bottom: 36px; }
          .pf-navlinks { display: none; }
          .pf-brand .pf-pill { display: none; }
          .pf-nav-cta { display: none; }
          .pf-menubtn { display: inline-flex; }
        }
      ` }} />
    );
  }

  function useReveal() {
    React.useEffect(() => {
      const els = document.querySelectorAll('.pf-reveal');
      const io = new IntersectionObserver((entries) => {
        entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('pf-in'); io.unobserve(e.target); } });
      }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
      els.forEach((el) => io.observe(el));
      return () => io.disconnect();
    }, []);
  }

  const NAV_KEYS = ['travaux', 'services', 'about', 'contact'];
  const NAV_HREFS = {
    travaux: 'Travaux.html', services: 'Services.html',
    about: 'A propos.html', contact: 'Contact.html',
  };
  const NAV_LABELS = {
    fr: { travaux: 'Travaux', services: 'Services', about: 'À propos', contact: 'Contact', home: 'Accueil', menu: 'Menu', available: 'Disponible pour de nouveaux projets', email_cta: 'Me contacter' },
    en: { travaux: 'Work', services: 'Services', about: 'About', contact: 'Contact', home: 'Home', menu: 'Menu', available: 'Available for new projects', email_cta: 'Get in touch' },
  };

  function LangToggle() {
    const [lang, setLang] = useLang();
    return (
      <div className="pf-lang" role="group" aria-label="Langue">
        <button className={lang === 'fr' ? 'is-active' : ''} onClick={() => setLang('fr')} aria-pressed={lang === 'fr'}>FR</button>
        <button className={lang === 'en' ? 'is-active' : ''} onClick={() => setLang('en')} aria-pressed={lang === 'en'}>EN</button>
      </div>
    );
  }

  function ThemeToggle() {
    const [theme, setTheme] = useTheme();
    const isDark = theme === 'dark';
    return (
      <button className="pf-theme" onClick={() => setTheme(isDark ? 'light' : 'dark')} aria-label={isDark ? 'Passer en mode clair' : 'Passer en mode sombre'} title={isDark ? 'Mode clair' : 'Mode sombre'}>
        {isDark ? (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
            <circle cx="8" cy="8" r="3" />
            <path d="M8 1v2M8 13v2M1 8h2M13 8h2M3 3l1.4 1.4M11.6 11.6L13 13M3 13l1.4-1.4M11.6 4.4L13 3" />
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M9 1.5c-.7.6-1 1.5-1 2.5 0 2.5 2 4.5 4.5 4.5.7 0 1.4-.2 2-.5C13.6 11.4 10.5 14 7 14c-3.9 0-7-3.1-7-7s3.1-7 7-7c.7 0 1.4.1 2 .3v.2z" transform="translate(1 1)" />
          </svg>
        )}
      </button>
    );
  }

  function PFNav({ current }) {
    const [lang] = useLang();
    const L = NAV_LABELS[lang];
    const [menuOpen, setMenuOpen] = React.useState(false);
    return (
      <React.Fragment>
        {menuOpen && (
          <div className="pf-menu-sheet" role="dialog" aria-modal="true">
            <button className="pf-menu-close" aria-label="Fermer le menu" onClick={() => setMenuOpen(false)}>×</button>
            <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column' }}>
              <a href="Portfolio - Jean-Marc.html">{L.home}</a>
              {NAV_KEYS.map((k) => <a key={k} href={NAV_HREFS[k]}>{L[k]}</a>)}
            </div>
            <a href="mailto:jeanmarc.dev18@gmail.com" className="pf-btn pf-btn-primary" style={{ marginTop: 32, justifyContent: 'center' }}>jeanmarc.dev18@gmail.com</a>
            <div style={{ display: 'flex', gap: 12, marginTop: 24, alignItems: 'center' }}>
              <LangToggle /><ThemeToggle />
            </div>
            <div style={{ marginTop: 'auto', display: 'flex', gap: 18, fontSize: 14, color: 'var(--muted)' }}>
              <a className="pf-link">LinkedIn</a><a className="pf-link">GitHub</a><a className="pf-link">WhatsApp</a>
            </div>
          </div>
        )}
        <nav className="pf-nav">
          <div className="pf-nav-inner">
            <a className="pf-brand" href="Portfolio - Jean-Marc.html">
              <div className="pf-logo">JMK</div>
              <span className="pf-pill" style={{ padding: '4px 10px', fontSize: 11 }}>
                <span className="pf-dot" /> {L.available}
              </span>
            </a>
            <div className="pf-navlinks">
              {NAV_KEYS.map((k) => (
                <a key={k} className={`pf-link ${current === k ? 'pf-link-active' : ''}`} href={NAV_HREFS[k]}>{L[k]}</a>
              ))}
            </div>
            <div className="pf-nav-right">
              <LangToggle />
              <ThemeToggle />
              <a href="mailto:jeanmarc.dev18@gmail.com" className="pf-btn pf-btn-ghost pf-nav-cta" style={{ padding: '8px 14px', fontSize: 13 }}>
                {L.email_cta}
              </a>
              <button className="pf-menubtn" aria-label="Ouvrir le menu" onClick={() => setMenuOpen(true)}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 4h10M2 7h10M2 10h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
                {L.menu}
              </button>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }

  const FOOTER_LABELS = {
    fr: {
      tag: 'Développeur front-end · Abidjan, Côte d’Ivoire. Disponible pour des missions freelance ou un poste.',
      site: 'Site', projects: 'Projets', elsewhere: 'Ailleurs',
      home: 'Accueil', travaux: 'Travaux', services: 'Services', about: 'À propos', contact: 'Contact',
      rights: '© 2026 Koffi N’Guessan Jean-Marc — Tous droits réservés',
      built: 'Built with Next.js · Designed in Abidjan',
    },
    en: {
      tag: 'Front-end developer · Abidjan, Ivory Coast. Available for freelance missions or a permanent role.',
      site: 'Site', projects: 'Projects', elsewhere: 'Elsewhere',
      home: 'Home', travaux: 'Work', services: 'Services', about: 'About', contact: 'Contact',
      rights: '© 2026 Koffi N’Guessan Jean-Marc — All rights reserved',
      built: 'Built with Next.js · Designed in Abidjan',
    },
  };

  function PFFooter() {
    const [lang] = useLang();
    const F = FOOTER_LABELS[lang];
    return (
      <footer className="pf-footer">
        <div className="pf-footer-grid">
          <div className="pf-footer-col">
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
              <div className="pf-logo" style={{ width: 32, height: 32, fontSize: 11 }}>JMK</div>
              <div className="pf-display" style={{ fontSize: 18 }}>Koffi N’Guessan Jean-Marc</div>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--muted)', margin: 0, maxWidth: 360 }}>{F.tag}</p>
            <a href="mailto:jeanmarc.dev18@gmail.com" className="pf-btn pf-btn-ghost" style={{ marginTop: 20, fontSize: 13 }}>jeanmarc.dev18@gmail.com</a>
          </div>
          <div className="pf-footer-col">
            <h4>{F.elsewhere}</h4>
            <ul>
              <li><a>LinkedIn ↗</a></li>
              <li><a>GitHub ↗</a></li>
              <li><a>WhatsApp ↗</a></li>
            </ul>
          </div>
        </div>
        <div className="pf-footer-bottom">
          <span>{F.rights}</span>
          <span>{F.built}</span>
        </div>
      </footer>
    );
  }

  function PFLayout({ current, children }) {
    const [theme] = useTheme();
    useReveal();
    return (
      <div className="pf-root" data-theme={theme}>
        <PFStyles />
        <PFNav current={current} />
        <main>{children}</main>
        <PFFooter />
      </div>
    );
  }

  Object.assign(window, { PFStyles, PFNav, PFFooter, PFLayout, useReveal, useLang, useTheme, makeTr, PF_NAV: NAV_KEYS });
})();
