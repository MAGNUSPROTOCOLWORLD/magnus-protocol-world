import { PageHero } from "@/components/shared/page-hero";
import { SectionShell } from "@/components/ui/section-shell";
import { SurfaceCard } from "@/components/ui/surface-card";
import { LinkButton } from "@/components/ui/button";

type ContentSection = {
  heading: string;
  body: string;
};

type ContentSectionsPageProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  artworkSrc?: string;
  artworkAlt?: string;
  sections: ContentSection[];
  ctaLabel: string;
};

export function ContentSectionsPage({
  eyebrow,
  title,
  subtitle,
  artworkSrc,
  artworkAlt,
  sections,
  ctaLabel
}: ContentSectionsPageProps) {
  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        subtitle={subtitle}
        artworkSrc={artworkSrc}
        artworkAlt={artworkAlt}
        primaryCta={{ label: "Contact the Team", href: "/contact" }}
      />
      <SectionShell className="pt-6">
        <div className="grid gap-4 md:grid-cols-2">
          {sections.map((section) => (
            <SurfaceCard key={section.heading} title={section.heading} description={section.body} />
          ))}
        </div>
      </SectionShell>
      <SectionShell className="pt-6">
        <div className="rounded-card border border-gold/30 bg-carbon/80 p-8">
          <p className="max-w-3xl text-pretty text-lg leading-relaxed text-silver">
            We partner with organizations building responsible, long-horizon systems for the intelligence era.
          </p>
          <div className="mt-6">
            <LinkButton href="/contact">{ctaLabel}</LinkButton>
          </div>
        </div>
      </SectionShell>
    </>
  );
}
