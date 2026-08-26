# Seara Website V3 — Next.js / Vercel Ready

One Next.js project for the Seara website and Seara CRM microsite.

## Stack
- Next.js 16 App Router
- React 19
- TypeScript
- Pure CSS (no UI library)
- Vercel-ready
- Hostname routing via `proxy.ts`

## V3 additions

### Main Navbar
- Produk (hover mega menu)
  - HR & Payroll
  - Finance
  - CRM
  - Retail & POS
  - Manufacturing
- Industri (hover mega menu with icons + descriptions)
  - Kesehatan
  - Pendidikan
  - Properti
  - Tour & Travel
  - Salon & Kecantikan
  - F&B
  - Pemerintahan
  - Logistik
- Harga
- Resource (hover mega menu with icons + descriptions)
  - Blog
  - Guides
  - Webinar
  - Stories
  - Templates
- Language hover menu
  - Indonesian
  - English
- Theme hover menu
  - Light
  - Dark
  - System
- Login
- WhatsApp Kami
- Coba Gratis

### Branding
Official uploaded Seara logo is used from:
- `/public/seara-logo.png`
- Next.js favicon metadata
- `/app/icon.png`

### Contact
- WhatsApp: `+6285175380890`
  - Direct URL: `https://wa.me/6285175380890`
- Email: `Info@seara.id`
  - Direct URL: `mailto:Info@seara.id`
- Location: Bandung, Jawa Barat

### Footer copy
**Platform ERP modern untuk perusahaan dinamis. Kelola HR, Keuangan, dan Operasional dalam satu ekosistem cerdas.**

## Local development

```bash
npm install
npm run dev
```

Main site:
`http://localhost:3000`

CRM local preview:
`http://localhost:3000/crm`

## Vercel deployment

1. Extract this ZIP.
2. Upload/push the extracted project files to your GitHub repository.
3. Import the repository in Vercel.
4. Framework: Next.js.
5. Deploy.
6. Connect `seara.id` and `crm.seara.id` to the same Vercel project.

`proxy.ts` rewrites requests from `crm.seara.id` to internal `/crm` routes.

## Important
The language menu persists the selected Indonesian/English setting and translates navigation labels. Full page-by-page English content can be expanded later using an i18n dictionary or locale routes.
