import type { Metadata } from "next";
import Image from "next/image";
import { getCmsContent } from "@/content/cms/content";
import { brandAssets } from "@/content/brand-assets";
import { buildMetadata } from "@/lib/metadata";
import { LinkButton } from "@/components/ui/button";
import { SectionShell } from "@/components/ui/section-shell";
import { SectionTitle } from "@/components/ui/section-title";
import { SurfaceCard } from "@/components/ui/surface-card";
import { FaqList } from "@/components/home/faq-list";
import { PrinciplesGrid } from "@/components/shared/principles-grid";

export const metadata: Metadata = buildMetadata({
  title: "Global AI & Digital Infrastructure Ecosystem",
  description:
    "Magnus Protocol builds secure, scalable intelligence infrastructure for institutions, partners, and future global systems.",
  path: "/"
});

export default function HomePage() {
  const content = getCmsContent("en");
  const homepage = content.homepage;

  return (
    <>
      <SectionShell className="pt-12 sm:pt-16">
        <div className="relative overflow-hidden rounded-[2rem] border border-gold/20 bg-gradient-to-br from-carbon to-obsidian px-6 py-14 sm:px-10 sm:py-20">
          <div className="pointer-events-none absolute -left-12 top-0 h-72 w-72 rounded-full bg-gold/10 blur-[120px]" />
          <div className="pointer-events-none absolute right-0 top-14 h-64 w-64 rounded-full bg-gold/10 blur-[100px]" />
          <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(to_right,rgba(198,168,106,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(198,168,106,0.08)_1px,transparent_1px)] [background-size:52px_52px]" />
          <div className="relative z-10 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div className="animate-fade-slide-up space-y-6">
              <p className="text-xs uppercase tracking-[0.24em] text-gold/80">{homepage.hero.eyebrow}</p>
              <h1 className="text-balance text-4xl font-medium leading-tight text-ivory sm:text-5xl lg:text-6xl">
                {homepage.hero.title}
              </h1>
              <p className="max-w-2xl text-pretty text-base leading-relaxed text-silver sm:text-lg">{homepage.hero.subtitle}</p>
              <div className="flex flex-wrap gap-3">
                <LinkButton href={homepage.hero.primaryCta.href}>{homepage.hero.primaryCta.label}</LinkButton>
                <LinkButton href={homepage.hero.secondaryCta.href} variant="secondary">
                  {homepage.hero.secondaryCta.label}
                </LinkButton>
              </div>
            </div>
            <div className="grid gap-4">
              <div className="relative overflow-hidden rounded-[1.5rem] border border-gold/30 bg-obsidian/90 p-3 shadow-[0_16px_50px_rgba(0,0,0,0.34)]">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.1rem] border border-gold/20">
                  <Image
                    src={brandAssets.logoPrimaryStackedDark}
                    alt="Magnus Protocol primary logo lockup in gold on dark background"
                    fill
                    sizes="(min-width: 1024px) 35vw, 100vw"
                    className="object-cover object-center"
                    priority
                  />
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {homepage.hero.stats.map((stat) => (
                  <SurfaceCard key={stat.label} className="bg-graphite/80">
                    <p className="text-3xl font-medium gold-text">{stat.value}</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.16em] text-silver">{stat.label}</p>
                  </SurfaceCard>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell id="mission">
        <SectionTitle title={homepage.mission.title} description={homepage.mission.copy} />
      </SectionShell>

      <SectionShell id="principles" className="bg-carbon/45">
        <SectionTitle
          title={homepage.principlesPreview.title}
          description={homepage.principlesPreview.intro}
          className="mb-10"
        />
        <PrinciplesGrid items={content.principles} compact />
        <div className="mt-8">
          <LinkButton href={homepage.principlesPreview.cta.href} variant="secondary">
            {homepage.principlesPreview.cta.label}
          </LinkButton>
        </div>
      </SectionShell>

      <SectionShell id="ecosystem">
        <SectionTitle title={homepage.ecosystem.title} description={homepage.ecosystem.intro} className="mb-10" />
        <div className="grid gap-4 md:grid-cols-2">
          {homepage.ecosystem.cards.map((card) => (
            <SurfaceCard key={card.title} title={card.title} description={card.body} />
          ))}
        </div>
      </SectionShell>

      <SectionShell id="why" className="bg-carbon/45">
        <SectionTitle title={homepage.why.title} className="mb-10" />
        <ul className="grid gap-4 md:grid-cols-2">
          {homepage.why.bullets.map((bullet) => (
            <li key={bullet} className="rounded-card border border-gold/20 bg-carbon/70 p-5 text-sm leading-relaxed text-silver">
              {bullet}
            </li>
          ))}
        </ul>
      </SectionShell>

      <SectionShell id="vision">
        <SectionTitle title={homepage.vision.title} description={homepage.vision.copy} />
      </SectionShell>

      <SectionShell id="strategic-cta" className="bg-carbon/45">
        <div className="rounded-[1.6rem] border border-gold/30 bg-gradient-to-r from-carbon to-obsidian p-8 sm:p-12">
          <SectionTitle title={homepage.cta.title} description={homepage.cta.copy} className="mb-8" />
          <div className="flex flex-wrap gap-3">
            <LinkButton href={homepage.cta.primaryCta.href}>{homepage.cta.primaryCta.label}</LinkButton>
            <LinkButton href={homepage.cta.secondaryCta.href} variant="secondary">
              {homepage.cta.secondaryCta.label}
            </LinkButton>
          </div>
        </div>
      </SectionShell>

      <SectionShell id="faq">
        <SectionTitle title={homepage.faq.title} className="mb-10" />
        <FaqList items={homepage.faq.items} />
      </SectionShell>
    </>
  );
}
