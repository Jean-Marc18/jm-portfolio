import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";

export const metadata: Metadata = {
  title: "Jean-Marc Koffi - Portfolio",
  description:
    "Explorez mon portfolio pour découvrir mes réalisations et mes compétences en développement web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
