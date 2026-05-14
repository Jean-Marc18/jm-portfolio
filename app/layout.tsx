import type { Metadata, Viewport } from "next";
import { Geist, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";

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
    default: "Koffi N'Guessan Jean-Marc — Développeur Front-End",
    template: "%s | Jean-Marc Koffi",
  },
  description:
    "Développeur front-end basé à Abidjan. Interfaces performantes, accessibles et optimisées SEO. Architectures modernes (clean, hexagonale, feature-component) — fintech, agences, institutions.",
  keywords: [
    "Jean-Marc Koffi",
    "Koffi N'Guessan Jean-Marc",
    "développeur front-end",
    "frontend developer",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Abidjan",
    "France",
    "Canada",
    "fintech",
  ],
  authors: [{ name: "Koffi N'Guessan Jean-Marc" }],
  creator: "Koffi N'Guessan Jean-Marc",
  alternates: {
    canonical: "/",
    languages: { fr: "/", en: "/" },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    alternateLocale: ["en_US"],
    url: SITE_URL,
    title: "Koffi N'Guessan Jean-Marc — Développeur Front-End",
    description:
      "Interfaces performantes et accessibles, architectures modernes — fintech, agences, institutions.",
    siteName: "Koffi N'Guessan Jean-Marc — Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Koffi N'Guessan Jean-Marc — Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Koffi N'Guessan Jean-Marc — Développeur Front-End",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${geist.variable} ${plusJakarta.variable}`}
    >
      <body
        style={{
          fontFamily:
            'var(--font-geist), var(--font-jakarta), system-ui, sans-serif',
        }}
      >
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
