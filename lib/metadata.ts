import type { Metadata } from "next";
import { siteConfig } from "@/content/site-content";
import { getLocaleFromPathname, localizePath, stripLocalePrefix } from "@/lib/locale";

type MetadataInput = {
  title: string;
  description: string;
  path: string;
};

export function buildMetadata({ title, description, path }: MetadataInput): Metadata {
  const fullTitle = `${title} | ${siteConfig.shortName}`;
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const locale = getLocaleFromPathname(normalizedPath);
  const basePath = stripLocalePrefix(normalizedPath);
  const canonicalPath = localizePath(basePath, locale);
  const url = `${siteConfig.domain}${canonicalPath}`;
  const enUrl = `${siteConfig.domain}${localizePath(basePath, "en")}`;
  const ptUrl = `${siteConfig.domain}${localizePath(basePath, "pt")}`;

  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      type: "website",
      url,
      siteName: siteConfig.shortName,
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: fullTitle }]
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [siteConfig.ogImage]
    },
    alternates: {
      canonical: url,
      languages: {
        en: enUrl,
        pt: ptUrl
      }
    }
  };
}
