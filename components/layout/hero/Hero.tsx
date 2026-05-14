"use client";

import BoxReveal from "@/components/magicui/box-reveal";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { ArrowDown, Download } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="flex-1 w-full pt-32 sm:pt-40 md:pt-48">
      <div className="relative leading-none">
        <div className="flex-1 w-full">
          <BoxReveal boxColor={"transparent"} duration={0.3}>
            <h1 className="text-[18vw] font-bold font-labilBold">Website&</h1>
          </BoxReveal>
        </div>
        <BoxReveal boxColor={"transparent"} duration={0.5}>
          <div className="grid grid-cols-1 lg:grid-cols-3 max-sm:gap-8 md:gap-14">
            <h1 className="text-[17vw] col-span-2 font-bold font-labilBold">
              Branding
            </h1>
            {/* <div className="col-span-1 flex flex-col items-end lg:items-center justify-center">
              <span className="bg-slate-100 dark:text-black px-4 sm:px-8 py-5 sm:py-7 rounded-full text-base sm:text-xl flex gap-2 uppercase font-labil">
                {t.hero.scrollDown} <ArrowDown />
              </span>
            </div> */}
          </div>
        </BoxReveal>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 w-full justify-center mt-10 md:mt-24 max-lg:gap-7">
        <BoxReveal boxColor={"transparent"} duration={0.5}>
          <div className="flex flex-col justify-start gap-4">
            <div>
              <h3 className="font-semibold text-2xl font-labil">
                {t.hero.letsTalk}
              </h3>
              <Link href="mailto:jeanmarc.dev.18@gmail.com">
                jeanmarc.dev.18@gmail.com
              </Link>
            </div>
            <a
              href="/cv-jean-marc-koffi.pdf"
              download
              className="inline-flex items-center gap-2 w-fit rounded-full bg-black text-white dark:bg-white dark:text-black px-5 py-3 text-sm font-labil hover:opacity-90 transition-opacity"
            >
              <Download className="w-4 h-4" />
              {t.hero.downloadCV}
            </a>
          </div>
        </BoxReveal>
        <div className="w-full flex justify-start">
          <BoxReveal boxColor={"transparent"} duration={0.5}>
            <p className="text-balance font-labil">{t.hero.bio}</p>
          </BoxReveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;
