"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { getCmsContent } from "@/content/cms/content";
import { siteConfig } from "@/content/site-content";
import { brandAssets } from "@/content/brand-assets";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { getLocaleFromPathname } from "@/lib/locale";

const footerLinks = [];

export function Footer() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const content = getCmsContent(locale);

  return (

    <footer className="border-t border-gold/20 bg-carbon">
      <section className="site-grid py-14">
        <div className="rounded-card border border-gold/25 bg-gradient-to-br from-carbon to-obsidian p-8 sm:p-10">
          <h2 className="text-2xl font-medium text-ivory sm:text-3xl">{content.homepage.newsletter.title}</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-silver sm:text-base">
            {content.homepage.newsletter.copy}
          </p>
          <form className="mt-6 flex flex-col gap-3 sm:flex-row" action="#" method="post">
            <label htmlFor="newsletter-email" className="sr-only">
              Email Address
            </label>
            <input
              id="newsletter-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder={content.homepage.newsletter.inputPlaceholder}
              className="h-12 flex-1 rounded-xl border border-gold/30 bg-obsidian px-4 text-sm text-ivory placeholder:text-silver/70 focus:border-gold focus:outline-none"
            />
            <Button type="submit" className="h-12 px-6">
              {content.homepage.newsletter.buttonLabel}
            </Button>
          </form>
        </div>
      </section>
      <div className="gold-divider" />
      <section className="site-grid grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Logo withTagline />
            <div className="relative hidden h-12 w-12 overflow-hidden rounded-xl border border-gold/30 bg-obsidian sm:block">
              <Image
                src={brandAssets.iconMonogramGlowDark}
                alt="Magnus Protocol brand icon"
                fill
                sizes="48px"
                className="object-cover"
              />
            </div>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-silver">{content.footer.description}</p>
          <Link href={`mailto:${content.footer.email}`} className="inline-block text-sm text-gold hover:text-[#dcc38c]">
            {content.footer.email}
          </Link>
        </div>
        <nav aria-label="Footer quick links">
          <h3 className="text-xs uppercase tracking-[0.2em] text-gold/90">Quick Links</h3>
          <ul className="mt-4 space-y-3">
            {content.footer.quickLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-silver transition-colors hover:text-ivory">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Footer social links">
          <h3 className="text-xs uppercase tracking-[0.2em] text-gold/90">Social</h3>
          <ul className="mt-4 space-y-3">
            {content.footer.social.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="text-sm text-silver transition-colors hover:text-ivory">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Footer legal links">
          <h3 className="text-xs uppercase tracking-[0.2em] text-gold/90">Legal</h3>
          <ul className="mt-4 space-y-3">
            {content.footer.legal.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-silver transition-colors hover:text-ivory">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </section>
      <div className="border-t border-gold/10 py-6">
        <p className="site-grid text-xs tracking-[0.08em] text-silver">{content.footer.copyright}</p>
      </div>
      <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: siteConfig.shortName,
          url: siteConfig.domain,
       
        })}
      </script>
    </footer>
  );
}
