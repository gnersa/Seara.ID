# Seara Website V5 — Next.js / Vercel Ready

V5 focuses on production readiness, conversion flow, mobile usability, technical SEO, and richer landing-page architecture.

## Main improvements

### UX & Conversion
- Apple-inspired light/dark UI retained.
- Full mobile navigation drawer for Products, Industries, Pricing, Resources, Login, WhatsApp, and Demo.
- CTA standardized to **Coba Demo** so it does not imply an instant free account.
- Demo forms now work: submitted data is composed into a WhatsApp message to `+6285175380890`.
- Email alternative links directly to `Info@seara.id`.
- Dashboard numbers are explicitly marked **DEMO DATA** to avoid presenting mock values as business claims.
- Live chat is lazy-loaded: the chat panel code is loaded only after the visitor opens the widget.
- FAQ accordion and direct WhatsApp messaging remain available in Live Chat.
- Functional Cookie Settings modal stores preferences in localStorage.

### Homepage depth
Homepage now includes:
1. Hero
2. Operational audience strip
3. Business pain points
4. Seara ecosystem overview
5. Product overview
6. Industry solutions
7. Seara CRM feature section
8. CRM integration channels
9. Why Seara
10. Customer Stories entry point
11. Resource hub preview
12. FAQ
13. Final CTA
14. Footer

No unverified customer logos or testimonials are fabricated. Add real customer evidence when approved.

## SEO route architecture

### Main website
- `/`
- `/produk`
- `/produk/hr-payroll`
- `/produk/finance`
- `/produk/retail-pos`
- `/produk/manufacturing`
- `/industri`
- `/industri/kesehatan`
- `/industri/pendidikan`
- `/industri/properti`
- `/industri/tour-travel`
- `/industri/salon-kecantikan`
- `/industri/fnb`
- `/industri/pemerintahan`
- `/industri/logistik`
- `/harga`
- `/resources`
- `/resources/blog`
- `/resources/guides`
- `/resources/webinar`
- `/resources/stories`
- `/resources/templates`
- `/about`
- `/contact`
- `/privacy`
- `/terms`

### CRM public hostname
- `https://crm.seara.id/`
- `https://crm.seara.id/fitur`
- `https://crm.seara.id/solusi`
- `https://crm.seara.id/harga`
- `https://crm.seara.id/contact`

The same repository serves both `seara.id` and `crm.seara.id` using `proxy.ts`.

## Meta titles & descriptions
Every main route has dedicated metadata. Dynamic Product, Industry, and Resource paths generate their own title, description, canonical URL, and Open Graph metadata from `lib/site-data.ts`.

## Structured data / LD+JSON
V5 includes:

### Global Publisher / Organization
- `Organization`
- Legal name: `SEARA, Inc.`
- URL: `https://seara.id`
- Logo
- Publisher ID: `https://seara.id/#organization`
- Email: `Info@seara.id`
- Phone: `+6285175380890`
- Address: Bandung, Jawa Barat, Indonesia
- Sales `ContactPoint`

### WebSite
The main WebSite schema includes:

```json
"publisher": {
  "@id": "https://seara.id/#organization"
}
```

### Per-page schema
- `WebPage`
- `BreadcrumbList`
- `SoftwareApplication` on product/software pages
- `CollectionPage` on Resource landing pages
- `FAQPage` on homepage
- Seara CRM SoftwareApplication schema with publisher reference

## Staging SEO protection
`*.vercel.app`, localhost, and local preview responses receive:

```text
X-Robots-Tag: noindex, nofollow, noarchive
```

This prevents the Vercel staging domain from competing with `seara.id` in search engines.

Production domains stay indexable.

## Separate sitemap / robots

### Main
- `https://seara.id/sitemap.xml`
- `https://seara.id/robots.txt`

### CRM
- `https://crm.seara.id/sitemap.xml`
- `https://crm.seara.id/robots.txt`

`proxy.ts` routes CRM sitemap and robots requests to CRM-specific handlers.

## Security headers
`next.config.ts` adds:
- Content-Security-Policy
- Strict-Transport-Security
- X-Content-Type-Options
- X-Frame-Options
- Referrer-Policy
- Permissions-Policy

Review the CSP if you later add Google Analytics, Meta Pixel, third-party chat, CDN assets, or embedded video.

## Open Graph
`app/opengraph-image.tsx` generates a 1200×630 Seara social preview image automatically.

## Theme
- Initial first visit follows OS theme.
- User-facing choices: **Light** and **Dark** only.
- Explicit choice persists in localStorage.

## Deployment

```bash
npm install
npm run build
```

Then push to the GitHub repository already connected to Vercel.

```bash
git add .
git commit -m "Upgrade Seara website to V5"
git push
```

Vercel should redeploy automatically.

## Production checklist
Before moving the custom domains live:
- Add real product screenshots to `/public` and replace generic dashboard illustrations where appropriate.
- Add approved customer logos/testimonials/case studies only when verified.
- Confirm CRM price limits and commercial terms.
- Connect analytics only after updating CSP and cookie-consent behavior.
- Review legal pages with the appropriate internal/legal owner.
