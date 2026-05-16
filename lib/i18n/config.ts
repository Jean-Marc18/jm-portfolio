import type { Locale } from "./dictionaries";

export const LOCALE_COOKIE = "jmk-locale";
export const LOCALE_COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 year

export const isLocale = (value: unknown): value is Locale =>
  value === "fr" || value === "en";
