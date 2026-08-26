# Seara Website V4 — Next.js / Vercel Ready

## Main improvements in V4

### Navigation
- Produk, Industri, Resource mega menus open on hover.
- Mega menus are centered relative to the whole navbar.
- Maximum 4-column layout on desktop.
- Right-side FEATURED panels removed.
- Indonesian/English language selector removed.
- Default language is Indonesian.
- Theme switcher now contains only:
  - Light
  - Dark
- First visit still follows the user's OS/system color preference.

### Footer
Contact information is now placed under the Seara company description on the lower-left side:
- WhatsApp: +6285175380890
- Email: Info@seara.id
- Location: Bandung, Jawa Barat

WhatsApp and email are clickable.
Icons are minimal monochrome icons that match the footer theme.

Bottom footer:
- © 2026 SEARA, Inc. All rights reserved.
- Kebijakan Privasi
- Syarat & Ketentuan
- Cookie Settings

### Live Chat
Floating live chat widget includes:
- FAQ accordion
- Free-text message box
- "Kirim Pesan ke Tim" action
- Message is sent directly through WhatsApp to +6285175380890

### SEO metadata
Custom title, description, and canonical URL have been added for:
- /
- /produk
- /industri
- /harga
- /resources
- /about
- /contact
- /privacy
- /terms
- crm.seara.id
- crm.seara.id/fitur
- crm.seara.id/solusi
- crm.seara.id/harga
- crm.seara.id/contact

Sitemap is also updated with main-site and CRM public URLs.

## Run locally

```bash
npm install
npm run dev
```

Main site:
http://localhost:3000

CRM local preview:
http://localhost:3000/crm

## Deploy to Vercel

1. Extract this ZIP.
2. Replace/push the project files into your existing GitHub repository.
3. Commit and push.
4. Vercel automatically rebuilds when the repository is already connected.
5. Connect `seara.id` and `crm.seara.id` to the same Vercel project.

## Important
The contact/demo form is still UI-only. Connect it to your preferred backend/API when ready.
The Cookie Settings button is visual only until a consent-management platform is connected.
