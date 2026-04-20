import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { getCmsContent } from "@/content/cms/content";
import { LegalPage } from "@/components/legal/legal-page";

export const metadata: Metadata = buildMetadata({
  title: "Cookie Policy",
  description: "Understand how Magnus Protocol uses cookies and related technologies for security and analytics.",
  path: "/cookie-policy"
});

export default function CookiePolicyPage() {
  const content = getCmsContent("en");

  return (
    <LegalPage
      title={content.legal.cookie.title}
      effectiveDate={content.legal.cookie.effectiveDate}
      intro={content.legal.cookie.intro}
      sections={content.legal.cookie.sections}
    />
  );
}
