import ScrollVelocity from "@/components/common/Marquee";
import Expertise from "@/components/layout/expertise/Expertise";
import Hero from "@/components/layout/hero/Hero";
import Projet from "@/components/layout/projets/Projet";
import Testimonial from "@/components/layout/Testimonials/Testimonial";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center">
      <div className="px-24 md:px-16 max-sm:px-8">
        <Hero />
        <Projet />
        <Expertise />
      </div>
      <div className="pt-16">
        <ScrollVelocity velocity={3}>
          react, nextjs, tailwindcss, typescript, git, github,
        </ScrollVelocity>
      </div>
      <div className="px-24 md:px-16 max-sm:px-8">{/* <Testimonial /> */}</div>
    </main>
  );
}
