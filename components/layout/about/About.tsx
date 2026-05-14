"use client";

import BoxReveal from "@/components/magicui/box-reveal";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Briefcase } from "lucide-react";

const SKILLS = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "TanStack Query",
  "Zustand",
  "React Hook Form",
  "Zod",
  "Radix UI",
  "Framer Motion",
  "GSAP",
  "Sanity",
  "NextAuth.js",
  "Clean Architecture",
  "Hexagonal Architecture",
];

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="mt-36 sm:mt-44 mb-7 scroll-mt-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 max-sm:gap-4">
        <div className="flex-auto flex flex-col w-full items-start justify-center h-full gap-4">
          <BoxReveal boxColor={"transparent"} duration={0.25}>
            <h2 className="text-5xl font-labil font-semibold">
              {t.about.title}
            </h2>
          </BoxReveal>
          <BoxReveal boxColor={"transparent"} duration={0.15}>
            <p className="text-balance font-labil">{t.about.subtitle}</p>
          </BoxReveal>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-12 mt-10">
        <BoxReveal boxColor={"transparent"} duration={0.3}>
          <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 sm:p-8 h-full">
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="w-5 h-5" />
              <h3 className="text-xl font-labil font-semibold">
                {t.about.experienceTitle}
              </h3>
            </div>
            <p className="font-labil font-semibold text-lg">
              {t.about.currentRole}
            </p>
            <p className="text-sm opacity-70 font-labil mb-4">
              {t.about.period}
            </p>
            <ul className="space-y-2 list-disc pl-5 font-labil">
              {t.about.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        </BoxReveal>

        <BoxReveal boxColor={"transparent"} duration={0.3}>
          <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 sm:p-8 h-full">
            <h3 className="text-xl font-labil font-semibold mb-4">
              {t.about.stackTitle}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {SKILLS.map((s) => (
                <li
                  key={s}
                  className="px-3 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-900 text-sm font-labil"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </BoxReveal>
      </div>
    </section>
  );
};

export default About;
