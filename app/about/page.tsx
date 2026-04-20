import type { Metadata } from "next";
import { getCmsContent } from "@/content/cms/content";
import { brandAssets } from "@/content/brand-assets";
import { buildMetadata } from "@/lib/metadata";
import { ContentSectionsPage } from "@/components/shared/content-sections-page";

export const metadata: Metadata = buildMetadata({
  title: "About Magnus Protocol",
  description:
    "Learn how Magnus Protocol is building trusted, institutional-grade technology infrastructure for intelligence and global transformation.",
  path: "/about"
});

export default function AboutPage() {
  const content = getCmsContent("en");

  return (
    <ContentSectionsPage
      eyebrow="About"
      title={content.pages.about.title}
      subtitle={content.pages.about.subtitle}
      artworkSrc={brandAssets.logoPrimaryStackedDark}
      artworkAlt="Magnus Protocol primary lockup"
      sections={content.pages.about.sections}
      ctaLabel={content.pages.about.cta}
    />
  );
}
