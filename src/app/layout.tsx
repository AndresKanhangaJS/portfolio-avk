import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

/**
 * URL público do site. Define NEXT_PUBLIC_APP_URL no ambiente (Vercel) —
 * hoje o domínio .vercel.app, amanhã o domínio próprio, sem tocar no código.
 */
const siteUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "André Vasconcelos Kanhanga | Engenheiro de Software Full-Stack",
  description:
    "Engenheiro de Software Full-Stack com mais de 5 anos de experiência em sistemas web empresariais e institucionais. Baseado em Luanda, Angola.",
  keywords: [
    "engenheiro de software",
    "full-stack",
    "Laravel",
    "React",
    "Angular",
    "Luanda",
    "Angola",
  ],
  authors: [{ name: "André Vasconcelos Kanhanga" }],
  openGraph: {
    type: "website",
    locale: "pt_AO",
    url: siteUrl,
    siteName: "André Vasconcelos Kanhanga",
    title: "André Vasconcelos Kanhanga | Engenheiro de Software Full-Stack",
    description:
      "Engenheiro de Software Full-Stack com mais de 5 anos de experiência em sistemas web empresariais e institucionais.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-AO" className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-body antialiased">
        <a href="#main" className="skip-link">
          Saltar para o conteúdo
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
