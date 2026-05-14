import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Providers } from "./providers";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";

const SITE_URL = "https://jmk-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Jean-Marc Koffi — Développeur Front-End",
    template: "%s | Jean-Marc Koffi",
  },
  description:
    "Portfolio de Jean-Marc Koffi, développeur front-end (Next.js, React, TypeScript) avec 2+ ans d'expérience en fintech. Projets en production : PIPV-PPED, TaComFav, e-Panacee.",
  keywords: [
    "Jean-Marc Koffi",
    "développeur front-end",
    "frontend developer",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "portfolio",
    "Abidjan",
    "France",
    "Canada",
    "fintech",
  ],
  authors: [{ name: "Jean-Marc Koffi" }],
  creator: "Jean-Marc Koffi",
  alternates: {
    canonical: "/",
    languages: {
      fr: "/",
      en: "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    alternateLocale: ["en_US"],
    url: SITE_URL,
    title: "Jean-Marc Koffi — Développeur Front-End",
    description:
      "Développeur front-end (Next.js, React, TypeScript), 2+ ans d'expérience en fintech. Découvrez mes projets en production.",
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
      "Développeur front-end (Next.js, React, TypeScript), 2+ ans d'expérience en fintech.",
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
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="font-labil font-medium">
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
