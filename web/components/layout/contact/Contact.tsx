"use client";

import { ButtonLink, Label, Pill, StatusDot } from "@/components/ui";
import { ArrowUpRight } from "@/components/ui/icons";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { useSiteContent } from "@/lib/content/SiteContentContext";

const Contact = () => {
  const { t } = useLanguage();
  const { settings } = useSiteContent();
  const callLink = settings.socialLinks.find((l) => /wa\.me|whatsapp/i.test(l.url));

  return (
    <section
      className="ho-section"
      id="contact"
      style={{ paddingTop: 96, paddingBottom: 64, scrollMarginTop: 96 }}
    >
      <div className="ho-contact-card pf-reveal">
        <div className="ho-contact-status">
          <Pill variant="dark" leading={<StatusDot />}>
            {settings.availabilityShort}
          </Pill>
        </div>
        <Label
          style={{
            display: "block",
            color: "rgba(255,255,255,0.55)",
            marginBottom: 20,
          }}
        >
          {t.contact.label}
        </Label>
        <h2 className="pf-display ho-contact-h2">
          {t.contact.h1a}
          <br />
          {t.contact.h1b}
          <br />
          <span style={{ color: "var(--accent)" }}>{t.contact.h1c}</span>
        </h2>
        <p
          style={{
            fontSize: 16,
            color: "rgba(244,241,234,0.7)",
            marginTop: 28,
            maxWidth: 480,
            lineHeight: 1.6,
          }}
        >
          {t.contact.intro}
        </p>
        <div className="ho-contact-actions">
          <ButtonLink
            href={`mailto:${settings.email}`}
            variant="light"
            trailing={<ArrowUpRight />}
          >
            {settings.email}
          </ButtonLink>
          {callLink && (
            <ButtonLink
              href={callLink.url}
              target="_blank"
              rel="noopener noreferrer"
              variant="darkghost"
            >
              {t.contact.cta}
            </ButtonLink>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
