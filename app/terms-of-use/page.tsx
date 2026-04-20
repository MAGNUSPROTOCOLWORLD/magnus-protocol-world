import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { getCmsContent } from "@/content/cms/content";
import { LegalPage } from "@/components/legal/legal-page";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Use",
  description: "Read the legal terms governing access to Magnus Protocol websites, content, and services.",
  path: "/terms-of-use"
});

export default function TermsOfUsePage() {
  const content = getCmsContent("en");

  return (
    <LegalPage
      title={content.legal.terms.title}
      effectiveDate={content.legal.terms.effectiveDate}
      intro={content.legal.terms.intro}
      sections={content.legal.terms.sections}
    />
  );
}
