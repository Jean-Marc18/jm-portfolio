import type { Metadata, Viewport } from "next";
import { Geist, Plus_Jakarta_Sans } from "next/font/google";
import { cookies } from "next/headers";
import "./globals.css";
import { Providers } from "./providers";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import { LOCALE_COOKIE, isLocale } from "@/lib/i18n/config";
import type { Locale } from "@/lib/i18n/dictionaries";
import SmoothScroll from "@/components/common/SmoothScroll";
import RevealObserver from "@/components/common/Reveal";
import PageTransition from "@/components/common/PageTransition";
import Preloader from "@/components/common/Preloader";

const geist = Geist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-geist",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

const SITE_URL = "https://jmk-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Jean-Marc Koffi — Développeur Front-End",
    template: "%s | Jean-Marc Koffi",
  },
  description:
    "Développeur front-end basé à Abidjan. Interfaces performantes, accessibles et optimisées SEO. Architectures modernes (clean, hexagonale, feature-component) — pour des produits qui doivent durer, tous secteurs confondus.",
  keywords: [
    "Jean-Marc Koffi",
    "Jean-Marc Koffi",
    "développeur front-end",
    "frontend developer",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Abidjan",
    "France",
    "Canada",
    "remote",
    "freelance",
    "e-commerce",
    "institutionnel",
    "fintech",
  ],
  authors: [{ name: "Jean-Marc Koffi" }],
  creator: "Jean-Marc Koffi",
  alternates: {
    canonical: "/",
    languages: { fr: "/", en: "/" },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    alternateLocale: ["en_US"],
    url: SITE_URL,
    title: "Jean-Marc Koffi — Développeur Front-End",
    description:
      "Interfaces performantes et accessibles, architectures modernes — fintech, agences, institutions.",
    siteName: "Jean-Marc Koffi — Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jean-Marc Koffi — Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jean-Marc Koffi — Développeur Front-End",
    description:
      "Interfaces performantes et accessibles, architectures modernes.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F7F5F0" },
    { media: "(prefers-color-scheme: dark)", color: "#13110E" },
  ],
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}#person`,
      name: "Jean-Marc Koffi",
      alternateName: "Jean-Marc Koffi",
      jobTitle: "Développeur Front-End",
      url: SITE_URL,
      email: "mailto:jeanmarc.dev.18@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Abidjan",
        addressCountry: "CI",
      },
      worksFor: {
        "@type": "Organization",
        name: "Inexa",
      },
      knowsAbout: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Clean Architecture",
        "Hexagonal Architecture",
        "Accessibility (WCAG)",
        "Performance & SEO",
      ],
      sameAs: [
        "https://www.linkedin.com/in/jean-marc-koffi/",
        "https://github.com/Jean-Marc18",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}#website`,
      url: SITE_URL,
      name: "Jean-Marc Koffi — Portfolio",
      inLanguage: ["fr", "en"],
      author: { "@id": `${SITE_URL}#person` },
    },
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const cookieValue = cookieStore.get(LOCALE_COOKIE)?.value;
  const initialLocale: Locale = isLocale(cookieValue) ? cookieValue : "fr";

  return (
    <html
      lang={initialLocale}
      className={`${geist.variable} ${plusJakarta.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans">
        <Providers initialLocale={initialLocale}>
          <Preloader />
          <PageTransition />
          <SmoothScroll />
          <RevealObserver />
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
