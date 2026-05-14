import ScrollVelocity from "@/components/common/Marquee";
import About from "@/components/layout/about/About";
import Expertise from "@/components/layout/expertise/Expertise";
import Hero from "@/components/layout/hero/Hero";
import Projet from "@/components/layout/projets/Projet";

const STACK_KEYWORDS = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "TanStack Query",
  "Zustand",
  "Zod",
  "Sanity",
  "GSAP",
  "Framer Motion",
  "Radix UI",
  "NextAuth",
  "Clean Architecture",
];

export default function Home() {
  // Two passes for seamless marquee loop (Marquee wraps at -50%).
  const marqueeItems = [...STACK_KEYWORDS, ...STACK_KEYWORDS];

  return (
    <main className="min-h-screen flex flex-col justify-center">
      <div className="px-6 sm:px-10 md:px-16 lg:px-24">
        <Hero />
        <About />
        <Projet />
        <Expertise />
      </div>
      <div className="pt-16">
        <ScrollVelocity velocity={3}>
          {marqueeItems.map((k, i) => (
            <span key={`${k}-${i}`}>{k} —</span>
          ))}
        </ScrollVelocity>
      </div>
    </main>
  );
}
