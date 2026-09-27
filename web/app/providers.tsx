"use client";

import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";
import type { Locale } from "@/lib/i18n/dictionaries";
import { ProjectsProvider } from "@/lib/projects/ProjectsContext";
import type { CmsProject } from "@/lib/projects/types";
import { SiteContentProvider } from "@/lib/content/SiteContentContext";
import type { SiteContent } from "@/lib/content/types";

export function Providers({
  initialLocale,
  projects,
  content,
  children,
}: {
  initialLocale: Locale;
  projects: CmsProject[] | null;
  content: SiteContent;
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
        <SiteContentProvider content={content}>
          <ProjectsProvider projects={projects}>{children}</ProjectsProvider>
        </SiteContentProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
