import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

const baseUrl = "https://eikerenergi.no";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Eiker Energi",
    template: "%s | Eiker Energi",
  },
  description:
    "Eiker Energi leverer strøm, fiber og smarte tjenester med Norgespris og én faktura.",
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    type: "website",
    locale: "nb_NO",
    url: baseUrl,
    siteName: "Eiker Energi",
    title: "Eiker Energi – strøm, fiber og kundeservice",
    description:
      "Bli kunde hos Eiker Energi og få Norgespris, rask fiber og personlig kundeservice.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eiker Energi",
    description:
      "Kom i gang med Norgespris og få alt på én faktura fra Eiker Energi.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nb" className={inter.className}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-sand-100 text-text-900">
        <Header />
        <main className="mx-auto max-w-6xl px-4 pb-24 pt-12 sm:px-6 lg:px-8">{children}</main>
        <Footer />
        <Script
          id="focus-outline"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `document.body.addEventListener('keydown', function (e) { if (e.key === 'Tab') document.documentElement.classList.add('user-tabbing'); });`,
          }}
        />
      </body>
    </html>
  );
}
