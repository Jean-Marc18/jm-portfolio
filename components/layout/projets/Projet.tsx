"use client";

import BoxReveal from "@/components/magicui/box-reveal";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Local screenshots — deposit PNG/JPG files in public/projects/ and add the
// slug → path entry below to override the automatic thum.io capture.
const LOCAL_SCREENSHOTS: Record<string, string> = {
  "pipv-pped": "/projects/pipv-pped.png",
  tacomfav: "/projects/tacomfav.png",
  "e-panacee": "/projects/e-panacee.png",
};

const screenshotUrl = (slug: string, url: string) => {
  if (LOCAL_SCREENSHOTS[slug]) return LOCAL_SCREENSHOTS[slug];
  const stripped = url.replace(/^https?:\/\//, "");
  return `https://image.thum.io/get/width/1200/crop/750/noanimate/https://${stripped}`;
};

const Projet = () => {
  const { t } = useLanguage();

  return (
    <section id="projects" className="mt-36 sm:mt-44 mb-7 scroll-mt-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 max-sm:gap-4">
        <div className="flex-auto flex flex-col w-full items-start justify-center h-full gap-4">
          <BoxReveal boxColor={"transparent"} duration={0.25}>
            <h2 className="text-5xl font-labil font-semibold">
              {t.projects.title}
            </h2>
          </BoxReveal>
          <BoxReveal boxColor={"transparent"} duration={0.15}>
            <p className="text-balance font-labil">{t.projects.subtitle}</p>
          </BoxReveal>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 mt-10 w-full py-12">
        {t.projects.items.map((project, idx) => (
          <BoxReveal
            key={project.slug}
            boxColor={"transparent"}
            duration={0.3 + idx * 0.05}
          >
            <article className="group flex flex-col gap-4 w-full">
              <Link
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 aspect-[16/10] bg-neutral-100 dark:bg-neutral-900"
                aria-label={`${t.projects.visitSite} — ${project.name}`}
              >
                <Image
                  src={screenshotUrl(project.slug, project.url)}
                  alt={`${project.name} — ${project.tagline}`}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  unoptimized
                />
                <span className="absolute top-3 right-3 rounded-full bg-black/80 text-white p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </Link>

              <div className="space-y-2">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-2xl font-labil font-semibold">
                    {project.name}
                  </h3>
                  <Link
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs underline opacity-70 hover:opacity-100 shrink-0 font-labil"
                  >
                    {t.projects.visitSite}
                  </Link>
                </div>
                <p className="text-sm opacity-70 font-labil">
                  {project.tagline}
                </p>
                <p className="font-labil">{project.description}</p>
                <ul className="flex flex-wrap gap-1.5 pt-2">
                  {project.stack.map((s) => (
                    <li
                      key={s}
                      className="px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-900 text-xs font-labil"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </BoxReveal>
        ))}
      </div>
    </section>
  );
};

export default Projet;
