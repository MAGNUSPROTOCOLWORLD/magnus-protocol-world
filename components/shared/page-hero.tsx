import Image from "next/image";
import { brandAssets } from "@/content/brand-assets";
import { LinkButton } from "@/components/ui/button";
import { SectionShell } from "@/components/ui/section-shell";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  artworkSrc?: string;
  artworkAlt?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export function PageHero({
  eyebrow,
  title,
  subtitle,
  artworkSrc = brandAssets.iconMonogramAxisDark,
  artworkAlt = "Magnus Protocol brand artwork",
  primaryCta,
  secondaryCta
}: PageHeroProps) {
  return (
    <SectionShell className="pt-16 sm:pt-20">
      <div className="relative overflow-hidden rounded-[2rem] border border-gold/25 bg-gradient-to-br from-carbon to-obsidian px-6 py-14 sm:px-10 sm:py-20">
        <div className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-52 w-52 rounded-full bg-gold/10 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(to_right,rgba(198,168,106,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(198,168,106,0.08)_1px,transparent_1px)] [background-size:52px_52px]" />
        <div className="relative z-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="max-w-3xl animate-fade-slide-up space-y-6">
            {eyebrow ? <p className="text-xs uppercase tracking-[0.2em] text-gold/80">{eyebrow}</p> : null}
            <h1 className="text-balance text-4xl font-medium leading-tight text-ivory sm:text-5xl lg:text-6xl">{title}</h1>
            <p className="text-pretty text-base leading-relaxed text-silver sm:text-lg">{subtitle}</p>
            {(primaryCta || secondaryCta) && (
              <div className="flex flex-wrap gap-3 pt-2">
                {primaryCta ? <LinkButton href={primaryCta.href}>{primaryCta.label}</LinkButton> : null}
                {secondaryCta ? (
                  <LinkButton href={secondaryCta.href} variant="secondary">
                    {secondaryCta.label}
                  </LinkButton>
                ) : null}
              </div>
            )}
          </div>
          <div className="justify-self-start lg:justify-self-end">
            <div className="relative h-56 w-56 peveroflow-hidden rounded-[1.4rem] p-6 border border-gold/30 bg-obsidian shadow-[0_16px_46px_rgba(0,0,0,0.35)]"> 
              <Image 
                src={artworkSrc} 
                alt={artworkAlt} 
                fill 
                className="object-contain"
                sizes="(min-widht: 640px) 224px, 224px"
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
