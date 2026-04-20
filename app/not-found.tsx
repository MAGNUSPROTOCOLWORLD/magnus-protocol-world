import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SectionShell } from "@/components/ui/section-shell";
import { LinkButton } from "@/components/ui/button";

export const metadata: Metadata = buildMetadata({
  title: "Page Not Found",
  description: "The requested page could not be found.",
  path: "/404"
});

export default function NotFound() {
  return (
    <SectionShell className="pt-24 sm:pt-28">
      <div className="rounded-[1.8rem] border border-gold/30 bg-carbon/80 p-10 text-center sm:p-16">
        <p className="text-sm uppercase tracking-[0.24em] text-gold/80">404</p>
        <h1 className="mt-4 text-3xl font-medium text-ivory sm:text-4xl">Page Not Found</h1>
        <p className="mx-auto mt-4 max-w-xl text-pretty text-base text-silver">
          The page you requested may have moved or no longer exists. Return to the homepage or contact our team.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <LinkButton href="/">Back to Home</LinkButton>
          <LinkButton href="/contact" variant="secondary">
            Contact Team
          </LinkButton>
        </div>
      </div>
    </SectionShell>
  );
}
