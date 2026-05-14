"use client";

import BoxReveal from "@/components/magicui/box-reveal";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const FOOTER_LINKS = [
  {
    href: "https://www.linkedin.com/in/jean-marc-koffi/",
    title: "LinkedIn",
  },
  {
    href: "https://github.com/Jean-Marc18",
    title: "GitHub",
  },
  {
    href: "https://wa.me/+2250768910092",
    title: "WhatsApp",
  },
];

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer
      id="contact"
      className="relative w-full min-h-[70vh] flex flex-col items-start justify-center text-center scroll-mt-24"
    >
      <div className="py-24 max-sm:py-12 flex-1 flex flex-col items-center justify-center h-full w-full gap-11 max-sm:gap-7">
        <BoxReveal boxColor={"transparent"} duration={0.25}>
          <h2 className="text-8xl max-sm:text-5xl font-extrabold font-labilBold">
            {t.footer.title}
          </h2>
        </BoxReveal>

        <BoxReveal boxColor={"transparent"} duration={0.15}>
          <div className="flex flex-col items-center justify-center">
            <Link
              href="mailto:jeanmarc.dev.18@gmail.com"
              className="rounded-full p-7 max-sm:p-5 group bg-black text-white text-sm relative w-fit flex items-center justify-center text-center gap-1 hover:opacity-90 border dark:border-neutral-800 border-white"
            >
              jeanmarc.dev.18@gmail.com{" "}
              <ArrowRight className="h-6 w-6 -rotate-45 duration-200 group-hover:rotate-0 relative -top-0 group-hover:top-0" />
            </Link>
          </div>
        </BoxReveal>
      </div>
      <div className="py-5 pb-9 flex max-sm:flex-col-reverse max-sm:gap-5 items-center justify-between px-4 h-full w-full">
        <p className="max-sm:pb-4 font-labil">{t.footer.copyright}</p>
        <ul className="flex items-center gap-9 duration-200">
          {FOOTER_LINKS.map((link) => (
            <li key={link.href} className="relative group">
              <Link
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-labil"
              >
                {link.title}
              </Link>
              <div className="absolute bottom-0 right-0 w-0 h-px bg-black dark:bg-white opacity-50 group-hover:w-full duration-200" />
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
