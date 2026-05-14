"use client";

import BoxReveal from "@/components/magicui/box-reveal";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const Expertise = () => {
  const { t } = useLanguage();

  return (
    <section className="mt-24 mb-7">
      <div className="grid grid-cols-1 sm:grid-cols-2 max-sm:gap-4">
        <div className="flex-auto flex flex-col w-full items-start justify-center h-full gap-4">
          <BoxReveal boxColor={"transparent"} duration={0.25}>
            <h2 className="text-5xl font-labil font-semibold">
              {t.expertise.title}
            </h2>
          </BoxReveal>
          <BoxReveal boxColor={"transparent"} duration={0.15}>
            <p className="text-balance font-labil">{t.expertise.subtitle}</p>
          </BoxReveal>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 place-items-start py-12 gap-10 mt-10 w-full">
        {t.expertise.items.map((expertise) => (
          <div
            key={expertise.title}
            className="flex flex-col justify-center gap-4 w-full"
          >
            <div className="space-y-3">
              <h3 className="text-3xl font-labil font-semibold">
                {expertise.title}
              </h3>
              <p className="text-balance font-labil">{expertise.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Expertise;
