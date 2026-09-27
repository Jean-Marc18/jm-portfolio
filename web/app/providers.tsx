"use client";

import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";
import type { Locale } from "@/lib/i18n/dictionaries";
import { ProjectsProvider } from "@/lib/projects/ProjectsContext";
import type { CmsProject } from "@/lib/projects/types";

export function Providers({
  initialLocale,
  projects,
  children,
}: {
  initialLocale: Locale;
  projects: CmsProject[] | null;
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
        <ProjectsProvider projects={projects}>{children}</ProjectsProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
