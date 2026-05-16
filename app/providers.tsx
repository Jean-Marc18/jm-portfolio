"use client";

import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";
import type { Locale } from "@/lib/i18n/dictionaries";

export function Providers({
  initialLocale,
  children,
}: {
  initialLocale: Locale;
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      attribute="data-theme"
      defaultTheme="light"
      enableSystem={false}
      storageKey="pf-theme"
    >
      <LanguageProvider initialLocale={initialLocale}>
        {children}
      </LanguageProvider>
    </ThemeProvider>
  );
}
