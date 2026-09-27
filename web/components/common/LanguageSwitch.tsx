"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

const LanguageSwitch = () => {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="pf-lang" role="group" aria-label="Langue">
      {(["fr", "en"] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLocale(l)}
          className={locale === l ? "is-active" : ""}
          aria-pressed={locale === l}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitch;
