# Seara Website — Next.js

Production-oriented multi-page redesign for **seara.id** and **crm.seara.id**.

## Stack
- Next.js 16.3.3 App Router
- React 19.2.8
- TypeScript
- Zero UI-library dependency
- Plain global CSS
- `proxy.ts` for hostname routing

## Run locally

```bash
npm install
npm run dev
```

Open:
- Main website: `http://localhost:3000`
- CRM preview locally: `http://localhost:3000/crm`

## Deploy to Vercel

1. Push this repository to GitHub.
2. Import the GitHub repository in Vercel.
3. Framework preset: **Next.js**.
4. Build command: `npm run build` (default).
5. Add both domains to the same Vercel project:
   - `seara.id`
   - `crm.seara.id`
6. `proxy.ts` automatically rewrites `crm.seara.id/*` to the internal `/crm/*` routes while keeping the public CRM URL clean.

## Route structure

### seara.id
- `/`
- `/produk`
- `/solusi`
- `/industri`
- `/resources`
- `/about`
- `/contact`

### crm.seara.id
Public URL via hostname:
- `/`
- `/fitur`
- `/solusi`
- `/harga`
- `/contact`

Internal/local preview:
- `/crm`
- `/crm/fitur`
- `/crm/solusi`
- `/crm/harga`
- `/crm/contact`

## Before production
- Replace placeholder brand mark with official Seara logo in `components/Brand.tsx`.
- Connect demo/contact forms to your actual API, email provider, or CRM.
- Confirm current pricing/limits before publishing.
- Add real product screenshots and customer logos into `/public`.
- Update privacy/terms links.
- If blog content is dynamic, connect CMS/API to `/resources`.

## GitHub

Extract the ZIP, then:

```bash
git init
git add .
git commit -m "Initial Seara Next.js redesign"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```
