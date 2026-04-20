import type { Metadata } from "next";
import { getCmsContent } from "@/content/cms/content";
import { brandAssets } from "@/content/brand-assets";
import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/shared/page-hero";
import { SectionShell } from "@/components/ui/section-shell";
import { SectionTitle } from "@/components/ui/section-title";
import { SurfaceCard } from "@/components/ui/surface-card";
import { LinkButton } from "@/components/ui/button";

export const metadata: Metadata = buildMetadata({
  title: "Magnus Protocol Principles",
  description:
    "Explore the strategic doctrine guiding Magnus Protocol across intelligence, infrastructure, security, and responsible innovation.",
  path: "/principles"
});

export default function PrinciplesPage() {
  const content = getCmsContent("en");

  return (
    <>
      <PageHero
        eyebrow={content.principlesPage.eyebrow}
        title={content.principlesPage.title}
        subtitle={content.principlesPage.subtitle}
        artworkSrc={brandAssets.iconMonogramAxisDark}
        artworkAlt="Magnus Protocol monogram with central axis"
        primaryCta={{ label: "Start a Strategic Conversation", href: "/contact" }}
      />

      <SectionShell className="pt-6">
        <SectionTitle
          title={content.principlesPage.doctrineTitle}
          description={content.principlesPage.doctrineDescription}
          className="mb-10"
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {content.principles.map((principle) => (
            <SurfaceCard key={principle.title} title={principle.title} description={principle.statement} />
          ))}
        </div>
      </SectionShell>

      <SectionShell className="bg-carbon/45">
        <SectionTitle title={content.principlesPage.manifestoTitle} description={content.manifesto} className="mb-8" />
        <div className="rounded-card border border-gold/30 bg-carbon p-8">
          <p className="text-pretty text-lg leading-relaxed text-silver">
            {content.principlesPage.manifestoSupport}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <LinkButton href={content.principlesPage.ctas.primary.href}>{content.principlesPage.ctas.primary.label}</LinkButton>
            <LinkButton href={content.principlesPage.ctas.secondary.href} variant="secondary">
              {content.principlesPage.ctas.secondary.label}
            </LinkButton>
          </div>
        </div>
      </SectionShell>
    </>
  );
}
