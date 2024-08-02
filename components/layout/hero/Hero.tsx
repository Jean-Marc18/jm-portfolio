import { ArrowDown } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section id="about" className="flex-1 w-full pt-48 max-sm:pt-32">
      <div className="relative px-24 md:px-16 max-sm:px-8 leading-none">
        <div className="flex-1 w-full">
          <h1 className="text-[18vw] font-bold">Website&</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 max-sm:gap-10 md:gap-14">
          <h1 className="text-[15vw] col-span-2 font-bold">Branding</h1>
          <div className="col-span-1 flex flex-col items-end md:items-center max-sm:items-end justify-center">
            <span className="bg-slate-100 dark:text-black px-4 sm:px-8 py-5 sm:py-7 rounded-full text-base sm:text-xl flex gap-2 uppercase">
              scroll down <ArrowDown />
            </span>
          </div>
        </div>
      </div>
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 w-full justify-center mt-12 md:mt-24 px-7 max-sm:gap-7 md:px-24">
        <div className="flex flex-col justify-start">
          <h3 className="font-semibold text-xl">Let&apos;s Talk</h3>
          <Link href="mailto:jeanmarc.dev.18@gmail.com">
            jeanmarc.dev.18@gmail.com
          </Link>
        </div>
        <div className="w-full flex justify-start">
          <p className="text-balance">
            Hello, i&apos;m Jean-Marc, a front-end developer focusing on
            accessibility, performance and SEO. Creating websites with unique
            and attractive interfaces is my signature. As a front-end developer,
            I focus on accessibility, performance and SEO to provide an optimal
            user experience. My professionalism and passion for technology allow
            me to always stay at the forefront of the latest trends and
            technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
