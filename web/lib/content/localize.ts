import type { Locale } from "@/lib/i18n/dictionaries";
import type { Localized } from "./types";

const other = (locale: Locale): Locale => (locale === "fr" ? "en" : "fr");

/** Value for the locale, then the other locale, then "". */
export const pick = (value: Localized | null | undefined, locale: Locale) =>
  value?.[locale] || value?.[other(locale)] || "";

export const hasText = (value: Localized | null | undefined) =>
  Boolean(value?.fr || value?.en);
