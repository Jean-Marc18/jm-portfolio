import RevealObserver from "@/components/common/Reveal";
import About from "@/components/layout/about/About";
import Contact from "@/components/layout/contact/Contact";
import Hero from "@/components/layout/hero/Hero";
import Projet from "@/components/layout/projets/Projet";
import Services from "@/components/layout/services/Services";
import StackStrip from "@/components/layout/stack/StackStrip";

export default function Home() {
  return (
    <>
      <RevealObserver />
      <Hero />
      <StackStrip />
      <Services />
      <Projet />
      <About />
      <Contact />
    </>
  );
}
