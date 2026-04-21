import type { Metadata } from "next";
import { getCmsContent } from "@/content/cms/content";
import { brandAssets } from "@/content/brand-assets";
import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/shared/page-hero";
import { SectionShell } from "@/components/ui/section-shell";
import { SectionTitle } from "@/components/ui/section-title";
import { ContactForm } from "@/components/contact/contact-form";
import { SurfaceCard } from "@/components/ui/surface-card";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Connect with Magnus Protocol for strategic partnerships, investor engagement, institutional collaboration, and media inquiries.",
  path: "/contact"
});

export default function ContactPage() {
  const content = getCmsContent("en");
  const contact = content.pages.contact;

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={contact.title}
        subtitle={contact.subtitle}
        artworkSrc={brandAssets.logoSecondaryLight}
        artworkAlt="Magnus Protocol secondary light logo variant"
      />
      <SectionShell className="pt-6">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-card border border-gold/25 bg-carbon/85 p-6 sm:p-8">
            <SectionTitle title={contact.form.formTitle} description={contact.intro} className="mb-6" />
            <ContactForm inquiryTypes={contact.inquiryTypes} copy={contact.form} responseSla={contact.responseSla} />
          </div>
          <div className="space-y-4">
            <SurfaceCard
              title={contact.cards.generalContactTitle}
              description="contact@magnusprotocol.world"
              className="bg-gradient-to-br from-carbon to-obsidian"
            />
            <SurfaceCard
              title={contact.cards.investorTitle}
              description={contact.cards.investorBody}
            />
            <SurfaceCard
              title={contact.cards.responseTitle}
              description={contact.cards.responseBody}
            />
          </div>
        </div>
      </SectionShell>
    </>
  );
}
