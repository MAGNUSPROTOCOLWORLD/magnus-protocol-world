# MAGNUS PROTOCOL - Flagship Website

Premium multi-page website for MAGNUS PROTOCOL built with Next.js App Router, TypeScript, and Tailwind CSS.

## Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Semantic HTML
- Reusable component architecture

## Features
- Dark premium UI system (black + gold + white)
- Sticky responsive header + structured footer
- Homepage sections:
  - Hero
  - Mission
  - Principles Preview
  - Ecosystem
  - Why Magnus Protocol
  - Vision
  - CTA
  - FAQ
- Dedicated routes:
  - `/`
  - `/about`
  - `/principles`
  - `/ecosystem`
  - `/vision`
  - `/contact`
  - `/privacy-policy`
  - `/terms-of-use`
  - `/cookie-policy`
- 404 page (`app/not-found.tsx`)
- SEO-ready metadata for every page
- Open Graph and Twitter metadata setup
- `sitemap.xml` and `robots.txt` generation
- Brand asset integration from approved identity kit
- Favicon/app icons and OG image aligned to brand visuals
- Contact form UI and newsletter signup section
- Content dictionary scaffold for future multilingual expansion (`en` + `pt` placeholder)

## Brand Source of Truth
- Canonical brand identity reference: `BRAND_GUIDELINES.md`
- This file is the single source of truth for all future design and development decisions in this project.
- Any new UI, copy tone, color usage, typography, logo handling, iconography, motion, and marketing asset must comply with `BRAND_GUIDELINES.md`.
- In case of conflict between implementation and brand direction, `BRAND_GUIDELINES.md` takes precedence.

## Project Structure
```txt
app/
  about/page.tsx
  contact/page.tsx
  cookie-policy/page.tsx
  ecosystem/page.tsx
  layout.tsx
  not-found.tsx
  page.tsx
  principles/page.tsx
  privacy-policy/page.tsx
  terms-of-use/page.tsx
  vision/page.tsx
  globals.css
  icon.png
  apple-icon.png
  manifest.ts
  robots.ts
  sitemap.ts
components/
  contact/contact-form.tsx
  home/faq-list.tsx
  layout/footer.tsx
  layout/header.tsx
  legal/legal-page.tsx
  shared/content-sections-page.tsx
  shared/page-hero.tsx
  shared/principles-grid.tsx
  ui/button.tsx
  ui/section-shell.tsx
  ui/section-title.tsx
  ui/surface-card.tsx
  logo.tsx
content/
  brand-assets.ts
  site-content.ts
  i18n/en.ts
  i18n/pt.ts
lib/
  i18n.ts
  metadata.ts
  utils.ts
public/
  og-image.jpg
  favicon-16.png
  favicon-32.png
  favicon-48.png
  brand/...
```

## Run Locally
1. Install dependencies:
```bash
npm install
```
2. Start the dev server:
```bash
npm run dev
```
3. Build for production:
```bash
npm run build
```

## Design Tokens
- Obsidian: `#050505`
- Carbon: `#0D0D0D`
- Graphite: `#171717`
- Gold: `#C6A86A`
- Deep Gold: `#9C7B43`
- Ivory: `#F2F2EE`
- Silver: `#A7A7A0`

## OG Title + Description Suggestions
- Home:
  - Title: `Magnus Protocol | Global AI & Digital Infrastructure Ecosystem`
  - Description: `Magnus Protocol builds secure, scalable intelligence infrastructure for institutions, partners, and future global systems.`
- About:
  - Title: `About Magnus Protocol | Institutional-Grade Technology Vision`
  - Description: `Learn how Magnus Protocol is building trusted technology infrastructure focused on AI, security, and long-term transformation.`
- Principles:
  - Title: `Magnus Protocol Principles | Responsible Innovation at Scale`
  - Description: `Explore the doctrine guiding Magnus Protocol across security, transparency, scalability, and conscious innovation.`
- Ecosystem:
  - Title: `Ecosystem | Magnus Protocol Products & Infrastructure Layers`
  - Description: `Discover Magnus Protocol's modular architecture spanning intelligence, infrastructure, and secure global integration.`
- Vision:
  - Title: `Vision | The Future Built by Magnus Protocol`
  - Description: `See Magnus Protocol's long-horizon plan for trusted intelligence systems and resilient digital infrastructure.`
- Contact:
  - Title: `Contact Magnus Protocol | Strategic Partnerships & Investors`
  - Description: `Connect with Magnus Protocol for partnerships, investor relations, and institutional collaboration.`

## CMS and i18n Readiness
- Centralized copy lives in `content/site-content.ts` for easy migration to a CMS source.
- Lightweight dictionary setup in `content/i18n/` and `lib/i18n.ts` prepares the project for multilingual routing and translated labels.
- Route and component composition keeps page templates reusable for future locale-prefixed paths.
