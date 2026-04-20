import type { Metadata } from "next";
import { getCmsContent } from "@/content/cms/content";
import { brandAssets } from "@/content/brand-assets";
import { buildMetadata } from "@/lib/metadata";
import { ContentSectionsPage } from "@/components/shared/content-sections-page";

export const metadata: Metadata = buildMetadata({
  title: "Ecosystem",
  description:
    "Discover Magnus Protocol's modular ecosystem architecture across infrastructure, intelligence, security, and institutional integrations.",
  path: "/ecosystem"
});

export default function EcosystemPage() {
  const content = getCmsContent("en");

  return (
    <ContentSectionsPage
      eyebrow="Ecosystem"
      title={content.pages.ecosystem.title}
      subtitle={content.pages.ecosystem.subtitle}
      artworkSrc={brandAssets.iconMonogramGlowDark}
      artworkAlt="Magnus Protocol monogram emblem"
      sections={content.pages.ecosystem.sections}
      ctaLabel={content.pages.ecosystem.cta}
    />
  );
}
