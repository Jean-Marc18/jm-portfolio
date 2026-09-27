import type { Locale } from "./dictionaries";

export const LOCALE_COOKIE = "jmk-locale";
export const LOCALE_COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

export const SUPPORTED_LOCALES: Locale[] = ["fr", "en"];
export const DEFAULT_LOCALE: Locale = "fr";

export const isLocale = (value: unknown): value is Locale =>
  value === "fr" || value === "en";

export const detectLocaleFromAcceptLanguage = (
  acceptLanguage: string | null | undefined
): Locale => {
  if (!acceptLanguage) return DEFAULT_LOCALE;

  const entries = acceptLanguage
    .split(",")
    .map((part) => {
      const [tag, ...rest] = part.trim().split(";");
      const q = rest
        .map((s) => s.trim())
        .find((s) => s.startsWith("q="));
      const quality = q ? parseFloat(q.slice(2)) : 1;
      return { tag: tag.toLowerCase(), quality };
    })
    .sort((a, b) => b.quality - a.quality);

  for (const { tag } of entries) {
    const primary = tag.split("-")[0];
    if (isLocale(primary)) return primary;
  }

  return DEFAULT_LOCALE;
};
