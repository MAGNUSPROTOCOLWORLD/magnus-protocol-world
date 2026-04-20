import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { getCmsContent } from "@/content/cms/content";
import { LegalPage } from "@/components/legal/legal-page";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: "Review how Magnus Protocol collects, uses, stores, and protects data across digital services.",
  path: "/privacy-policy"
});

export default function PrivacyPolicyPage() {
  const content = getCmsContent("en");

  return (
    <LegalPage
      title={content.legal.privacy.title}
      effectiveDate={content.legal.privacy.effectiveDate}
      intro={content.legal.privacy.intro}
      sections={content.legal.privacy.sections}
    />
  );
}
