"use client";

import { Button, Label, Pill, StatusDot } from "@/components/ui";
import { ArrowUpRight } from "@/components/ui/icons";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { useSplitIntro } from "@/lib/animations/useSplitIntro";
import { getCoverRemainingDelay } from "@/lib/animations/cover";
import { gsap, motion, prefersReducedMotion, useGSAP } from "@/lib/gsap";
import { useRef, useState, type FormEvent } from "react";

// Time the hero's SplitText intro takes to fully unfold once the cover
// is gone. Keep aligned with `useSplitIntro` (lines + followups).
const HERO_INTRO_SEC = 1.6;

const EMAIL = "jeanmarc.dev.18@gmail.com";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const SOCIAL_ICONS = {
  LinkedIn: (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8 17v-7H5.5v7H8zm-1.25-8.1a1.4 1.4 0 1 0 0-2.8 1.4 1.4 0 0 0 0 2.8zM18.5 17v-3.85c0-2.2-1.2-3.25-2.85-3.25-1.35 0-1.95.74-2.3 1.27V10H11v7h2.35v-3.7c0-.74.45-1.45 1.35-1.45.85 0 1.4.65 1.4 1.45V17h2.4z" />
    </svg>
  ),
  GitHub: (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C6.48 2 2 6.59 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.09.68-.22.68-.49v-1.7c-2.78.62-3.37-1.35-3.37-1.35-.45-1.18-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.57 2.34 1.12 2.91.86.09-.66.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.03 1.03-2.74-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05A9.4 9.4 0 0 1 12 7.07c.85 0 1.71.12 2.51.34 1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.71 1.03 1.62 1.03 2.74 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9v2.82c0 .27.18.59.69.49C19.14 20.61 22 16.78 22 12.25 22 6.59 17.52 2 12 2z" />
    </svg>
  ),
  WhatsApp: (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.5 3.5A11.4 11.4 0 0 0 12.1 0C5.7 0 .5 5.2.5 11.6c0 2 .5 4 1.5 5.8L.4 23.6l6.4-1.7c1.7 1 3.7 1.4 5.7 1.4 6.4 0 11.6-5.2 11.6-11.6 0-3.1-1.2-6-3.4-8.2zm-8.4 17.9c-1.8 0-3.6-.5-5.1-1.4l-.4-.2-3.8 1 1-3.7-.2-.4a9.7 9.7 0 0 1-1.5-5.1c0-5.3 4.3-9.7 9.7-9.7 2.6 0 5 1 6.8 2.8a9.6 9.6 0 0 1 2.8 6.8c0 5.4-4.3 9.7-9.7 9.7zm5.3-7.2c-.3-.1-1.7-.9-2-1-.3-.1-.5-.1-.7.1l-.9 1.2c-.2.2-.4.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.8-.7-1.4-1.7-1.6-1.9-.2-.3 0-.4.1-.5l.4-.5c.1-.1.2-.3.3-.4.1-.2 0-.3 0-.4l-1-2.3c-.2-.5-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4 0 1.4 1 2.7 1.1 2.9.1.2 2 3.2 5 4.4l1.6.6c.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.1-.3-.2-.5-.3z" />
    </svg>
  ),
};

const SOCIAL_LINKS: { label: keyof typeof SOCIAL_ICONS; href: string }[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/jean-marc-koffi/" },
  { label: "GitHub", href: "https://github.com/Jean-Marc18" },
  { label: "WhatsApp", href: "https://wa.me/+2250768910092" },
];

export default function ContactPage() {
  const { t, locale } = useLanguage();
  const cp = t.contactPage;
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "mission-freelance",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const heroRef = useRef<HTMLElement>(null);
  const bodyRef = useRef<HTMLElement>(null);

  useSplitIntro(heroRef, {
    titleSelector: "[data-intro-title]",
    followups: ["[data-intro-label]", "[data-intro-lede]"],
    dependencies: [locale],
  });

  // Sequence the page-body (form + side cards) AFTER the hero intro
  // finishes. The contact page is short enough that the body is in
  // the initial viewport, so without this they would animate in
  // parallel with — and finish before — the hero title.
  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const root = bodyRef.current;
      if (!root) return;
      const targets = root.querySelectorAll<HTMLElement>("[data-ct-reveal]");
      if (targets.length === 0) return;

      const coverDelay = getCoverRemainingDelay();
      gsap.set(targets, { autoAlpha: 0, y: 24 });
      gsap.to(targets, {
        autoAlpha: 1,
        y: 0,
        duration: motion.duration.base,
        ease: motion.ease.out,
        stagger: 0.08,
        delay: coverDelay + HERO_INTRO_SEC,
        overwrite: "auto",
      });
    },
    { scope: bodyRef, dependencies: [sent] },
  );

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = `${cp.prefix}${cp.subjects[form.subject] || "Contact"} — ${form.name}`;
    const body = `${form.message}\n\n—\n${form.name}\n${form.email}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const reset = () => {
    setSent(false);
    setForm({ name: "", email: "", subject: "mission-freelance", message: "" });
  };

  return (
    <>
      <section className="ct-hero" ref={heroRef}>
        <div>
          <Label
            style={{ display: "block", marginBottom: 20 }}
            data-intro-label
          >
            {cp.heroLabel}
          </Label>
          <h1
            key={locale}
            className="pf-display ct-h1"
            data-intro-title
            style={{ overflow: "hidden" }}
          >
            {cp.heroH1}
            <span style={{ color: "var(--accent)" }}>.</span>
          </h1>
          <p data-intro-lede>{cp.heroP}</p>
        </div>
      </section>

      {!sent ? (
        <section className="ct-main" ref={bodyRef}>
          <form className="ct-form" data-ct-reveal onSubmit={submit}>
            <h2 className="pf-display">{cp.formH2}</h2>
            <p className="ct-sub">{cp.formSub}</p>

            <div className="ct-grid-2">
              <div className="ct-field">
                <label htmlFor="ct-name">{cp.fName}</label>
                <input
                  id="ct-name"
                  type="text"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  required
                  placeholder={cp.phName}
                />
              </div>
              <div className="ct-field">
                <label htmlFor="ct-email">{cp.fEmail}</label>
                <input
                  id="ct-email"
                  type="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  required
                  placeholder={cp.phEmail}
                />
              </div>
            </div>

            <div className="ct-field">
              <label>{cp.fType}</label>
              <div className="ct-radios">
                {cp.radios.map(([key, label]) => (
                  <label
                    key={key}
                    className={`ct-radio ${form.subject === key ? "is-selected" : ""}`}
                  >
                    <input
                      type="radio"
                      name="subject"
                      value={key}
                      checked={form.subject === key}
                      onChange={() => update("subject", key)}
                    />
                    <span className="ct-radio-dot" />
                    {label}
                  </label>
                ))}
              </div>
            </div>

            <div className="ct-field">
              <label htmlFor="ct-msg">{cp.fMsg}</label>
              <textarea
                id="ct-msg"
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                required
                placeholder={cp.phMsg}
              />
            </div>

            <div className="ct-submit">
              <p className="ct-disclaimer">{cp.disclaimer}</p>
              <Button
                type="submit"
                variant="primary"
                trailing={<ArrowUpRight />}
              >
                {cp.send}
              </Button>
            </div>
          </form>

          <div className="ct-side">
            <div className="ct-card ct-card-dark" data-ct-reveal>
              <h3>{cp.sideEmailHead}</h3>
              <a className="email" href={`mailto:${EMAIL}`}>
                {EMAIL}
              </a>
              <p className="ct-availability" style={{ marginTop: 16 }}>
                {cp.sideEmailP}
              </p>
            </div>

            <div className="ct-card" data-ct-reveal>
              <h3>{cp.sideAvailHead}</h3>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 12,
                }}
              >
                <StatusDot />
                <strong style={{ fontSize: 16, fontWeight: 500 }}>
                  {cp.sideAvailStrong}
                </strong>
              </div>
              <p className="ct-availability">
                {cp.sideAvailP_a}
                <strong style={{ color: "var(--ink)", fontWeight: 500 }}>
                  {cp.sideAvailP_b}
                </strong>
                {cp.sideAvailP_c}
              </p>
            </div>

            <div className="ct-card" data-ct-reveal>
              <h3>{cp.sideLinksHead}</h3>
              <div className="ct-links">
                {SOCIAL_LINKS.map(({ label, href }) => (
                  <a
                    key={label}
                    className="ct-link-chip"
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {SOCIAL_ICONS[label]}
                    {label}
                  </a>
                ))}
              </div>
            </div>

            <div className="ct-card" data-ct-reveal>
              <h3>{cp.sideCoordHead}</h3>
              <div style={{ display: "grid", gap: 12, fontSize: 14 }}>
                <div>
                  <div
                    style={{
                      color: "var(--muted)",
                      fontSize: 12,
                      marginBottom: 2,
                    }}
                  >
                    {cp.coordLoc}
                  </div>
                  {cp.coordLocV}
                </div>
                <div>
                  <div
                    style={{
                      color: "var(--muted)",
                      fontSize: 12,
                      marginBottom: 2,
                    }}
                  >
                    {cp.coordLang}
                  </div>
                  {cp.coordLangV}
                </div>
                <div>
                  <div
                    style={{
                      color: "var(--muted)",
                      fontSize: 12,
                      marginBottom: 2,
                    }}
                  >
                    {cp.coordSt}
                  </div>
                  {cp.coordStV}
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="ct-success pf-reveal">
          <Pill leading={<StatusDot />}>{cp.successPill}</Pill>
          <h2 className="pf-display">
            {cp.successH1}
            <br />
            <span style={{ color: "var(--muted)" }}>{cp.successH1b}</span>
          </h2>
          <p
            style={{
              fontSize: 15,
              color: "var(--muted)",
              marginTop: 24,
              lineHeight: 1.6,
            }}
          >
            {cp.successP_a}
            <a
              href={`mailto:${EMAIL}`}
              style={{ color: "var(--ink)", textDecoration: "underline" }}
            >
              {EMAIL}
            </a>
            .
          </p>
          <Button onClick={reset} variant="ghost" style={{ marginTop: 28 }}>
            {cp.backCta}
          </Button>
        </section>
      )}
    </>
  );
}
