import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import SiteEffects from "@/components/SiteEffects";
import { LocaleProvider } from "@/components/LocaleProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const siteUrl = "https://jungwoolee.com";

export const metadata: Metadata = {
  title: "Jungwoo Lee — Founder & Creator",
  description:
    "24-year-old Korean co-founder in Berlin. Building SpreadableAI — AI for TikTok Shop agencies. Content creator.",
  openGraph: {
    title: "Jungwoo Lee — Founder & Creator",
    description:
      "24-year-old Korean founder in Berlin. Building SpreadableAI. TikTok Shop AI OS.",
    url: siteUrl,
    siteName: "Jungwoo Lee",
    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 630,
        alt: "Jungwoo Lee",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jungwoo Lee — Founder & Creator",
    description:
      "24-year-old Korean founder in Berlin. Building SpreadableAI. TikTok Shop AI OS.",
    images: ["/images/hero.png"],
  },
  metadataBase: new URL(siteUrl),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-body antialiased">
        <LocaleProvider>
          <SiteEffects>{children}</SiteEffects>
        </LocaleProvider>
      </body>
    </html>
  );
}
