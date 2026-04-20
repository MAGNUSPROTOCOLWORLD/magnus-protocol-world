import type { Metadata } from "next";
import type { ReactNode } from "react";
import { JetBrains_Mono, Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/content/site-content";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const bodyFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap"
});

const headingFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap"
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: `${siteConfig.shortName} | Global AI & Digital Infrastructure Ecosystem`,
  description: siteConfig.description,
  openGraph: {
    title: `${siteConfig.shortName} | Global AI & Digital Infrastructure Ecosystem`,
    description: siteConfig.description,
    type: "website",
    url: siteConfig.domain,
    siteName: siteConfig.shortName,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.shortName }]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.shortName} | Global AI & Digital Infrastructure Ecosystem`,
    description: siteConfig.description,
    images: [siteConfig.ogImage]
  },
  alternates: {
    canonical: siteConfig.domain,
    languages: {
      en: siteConfig.domain,
      pt: `${siteConfig.domain}/pt`
    }
  },
  icons: {
    icon: [
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48.png", sizes: "48x48", type: "image/png" }
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }]
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${headingFont.variable} ${monoFont.variable} bg-obsidian font-sans text-ivory antialiased`}>
        <div className="min-h-screen overflow-x-clip bg-radial-frame noise-mask">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
