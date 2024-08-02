import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const footerLinks = [
    {
      href: "https://www.linkedin.com/in/jean-marc-koffi/",
      title: "LinkedLin",
    },
    {
      href: "https://wa.me/+2250768910092",
      title: "WhatsApp",
    },
  ];

  return (
    <footer
      id="contact"
      className="relative w-full min-h-[40vh] flex flex-col items-start justify-center text-center"
    >
      <div className="py-24 max-sm:py-12 flex-1 flex flex-col items-center justify-center h-full w-full gap-11 max-sm:gap-7">
        <h1 className="text-8xl max-sm:text-5xl font-extrabold">
          Let&apos;s talk!
        </h1>
        <Link
          href="mailto:jeanmarc.dev.18@gmail.com"
          className="rounded-full p-7 max-sm:p-5 group bg-black text-white text-sm relative w-fit flex items-center justify-center text-center gap-1 hover:opacity-90 border dark:border-neutral-800 border-white"
        >
          jeanmarc.dev.18@gmail.com{" "}
          <ArrowRight className="h-6 w-6 -rotate-45 duration-200 group-hover:rotate-0 relative -top-0 group-hover:top-0" />
        </Link>
      </div>
      <div className="py-5 pb-9 flex max-sm:flex-col-reverse max-sm:gap-5 items-center justify-between px-4 h-full w-full">
        <p className="max-sm:pb-4">&copy; 2024 Jmk - portfolio</p>
        <ul className="flex items-center gap-9 duration-200">
          {footerLinks.map((link, i) => (
            <li key={i} className="relative group">
              <Link href={link.href} target="_blank" rel="noopener noreferrer">
                {link.title}
              </Link>
              <div className="absolute bottom-0 right-0 w-0 h-px bg-black opacity-50 group-hover:w-full duration-200" />
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
