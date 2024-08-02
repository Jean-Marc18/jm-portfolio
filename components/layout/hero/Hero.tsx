import BoxReveal from "@/components/magicui/box-reveal";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="flex-1 w-full pt-48 max-sm:pt-32">
      <div className="relative leading-none">
        <div className="flex-1 w-full">
          <BoxReveal boxColor={"transparent"} duration={0.3}>
            <h1 className="text-[18vw] font-bold font-labilBold">Website&</h1>
          </BoxReveal>
        </div>
        <BoxReveal boxColor={"transparent"} duration={0.5}>
          <div className="grid grid-cols-1 lg:grid-cols-3 max-sm:gap-10 md:gap-14">
            <h1 className="text-[17vw] col-span-2 font-bold font-labilBold">
              Branding
            </h1>
            <div className="col-span-1 flex flex-col items-end lg:items-center max-sm:items-end justify-center">
              <span className="bg-slate-100 dark:text-black px-4 sm:px-8 py-5 sm:py-7 rounded-full text-base sm:text-xl flex gap-2 uppercase font-labil">
                scroll down <ArrowDown />
              </span>
            </div>
          </div>
        </BoxReveal>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 w-full justify-center mt-10 md:mt-24 max-lg:gap-7">
        <BoxReveal boxColor={"transparent"} duration={0.5}>
          <div className="flex flex-col justify-start">
            <h3 className="font-semibold text-2xl font-labil">
              Let&apos;s Talk
            </h3>
            <Link href="mailto:jeanmarc.dev.18@gmail.com">
              jeanmarc.dev.18@gmail.com
            </Link>
          </div>
        </BoxReveal>
        <div className="w-full flex justify-start">
          <BoxReveal boxColor={"transparent"} duration={0.5}>
            <p className="text-balance font-labil">
              Hello, i&apos;m Jean-Marc, a front-end developer focusing on
              accessibility, performance and SEO. Creating websites with unique
              and attractive interfaces is my signature. As a front-end
              developer, I focus on accessibility, performance and SEO to
              provide an optimal user experience. My professionalism and passion
              for technology allow me to always stay at the forefront of the
              latest trends and technologies.
            </p>
          </BoxReveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;
