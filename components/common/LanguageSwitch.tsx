"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { twMerge } from "tailwind-merge";

const LanguageSwitch = () => {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex items-center gap-1 text-xs font-labil">
      {(["fr", "en"] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLocale(l)}
          aria-label={`Switch language to ${l.toUpperCase()}`}
          aria-pressed={locale === l}
          className={twMerge(
            "uppercase px-2 py-1 rounded-full transition-colors duration-200",
            locale === l
              ? "bg-white text-black dark:bg-white dark:text-black"
              : "text-white/70 hover:text-white"
          )}
        >
          {l}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitch;
