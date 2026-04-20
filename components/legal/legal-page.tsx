import { brandAssets } from "@/content/brand-assets";
import { PageHero } from "@/components/shared/page-hero";
import { SectionShell } from "@/components/ui/section-shell";

type LegalPageProps = {
  title: string;
  effectiveDate: string;
  intro: string;
  sections: string[];
};

export function LegalPage({ title, effectiveDate, intro, sections }: LegalPageProps) {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={title}
        subtitle={intro}
        artworkSrc={brandAssets.iconMonogramGlowDark}
        artworkAlt="Magnus Protocol legal identity mark"
      />
      <SectionShell className="pt-6">
        <article className="rounded-card border border-gold/20 bg-carbon/85 p-6 sm:p-8 lg:p-10">
          <p className="text-sm uppercase tracking-[0.16em] text-gold/80">{effectiveDate}</p>
          <ul className="mt-6 grid gap-3">
            {sections.map((section) => (
              <li key={section} className="rounded-xl border border-gold/15 bg-obsidian/75 px-4 py-3 text-sm text-silver sm:text-base">
                {section}
              </li>
            ))}
          </ul>
        </article>
      </SectionShell>
    </>
  );
}
