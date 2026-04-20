import type { Metadata } from "next";
import { getCmsContent } from "@/content/cms/content";
import { brandAssets } from "@/content/brand-assets";
import { buildMetadata } from "@/lib/metadata";
import { ContentSectionsPage } from "@/components/shared/content-sections-page";

export const metadata: Metadata = buildMetadata({
  title: "Vision",
  description:
    "See the long-horizon strategic vision behind Magnus Protocol and its roadmap for trusted global intelligence infrastructure.",
  path: "/vision"
});

export default function VisionPage() {
  const content = getCmsContent("en");

  return (
    <ContentSectionsPage
      eyebrow="Vision"
      title={content.pages.vision.title}
      subtitle={content.pages.vision.subtitle}
      artworkSrc={brandAssets.iconAppDark}
      artworkAlt="Magnus Protocol app icon treatment"
      sections={content.pages.vision.sections}
      ctaLabel={content.pages.vision.cta}
    />
  );
}
