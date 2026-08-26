# Seara Website V6 — Typography & Responsive Polish

V6 is focused on correcting the visual hierarchy seen on the live V5 deployment.

## Main fixes

### Typography
- Replaced aggressive heading scale with a restrained Apple-inspired system type scale.
- Uses native system fonts:
  - `-apple-system`
  - `BlinkMacSystemFont`
  - `SF Pro Display / Text` when available
  - `Segoe UI`
  - `Roboto`
  - `Helvetica / Arial`
- H1 max desktop size reduced from 80px to 68px.
- H2 max desktop size reduced from 56px to 46px.
- Improved line-height and letter-spacing.
- Font weights normalized to 600/700 instead of synthetic 750/850 values.
- Added font smoothing and optimized legibility.

### Section heading layout
`SectionHead` now has:
- constrained headline width
- proper description width
- optional eyebrow label
- single-column layout on tablet/mobile

This fixes sections such as:
- "Terhubung dengan channel yang digunakan customer."
- "Produk yang bekerja sebagai satu sistem."
- "Kenapa membangun operasional bersama Seara?"

### Industry UI
- Industry hub icons restored.
- Industry homepage cards now include matching line icons.
- Consistent icon container size, alignment, hover state, and description spacing.
- Responsive 2-column desktop / 1-column mobile hub layout.

### Integrations
The channel integration list now uses proper icons for:
- WhatsApp
- Instagram
- Email / Gmail
- Telegram
- Meta Ads
- API & Webhook

### FAQ
Homepage FAQ redesigned into an editorial two-column layout:
- intro on the left
- accordion on the right
- first item opened by default
- custom plus/minus control
- better spacing and typography
- single-column responsive mobile layout

### Mobile
- H1/H2 use smaller mobile-specific scale.
- Section spacing reduced appropriately.
- Integration cards become 2 columns, then 1 column on very small screens.
- Industry cards become 1 column.
- FAQ becomes single column.
- Mobile navigation locks body scroll while open.

## Deploy

Replace the source files in your current GitHub repository with this V6 package:

```bash
git add .
git commit -m "Polish Seara typography and responsive UI"
git push
```

If the repository is already connected to Vercel, deployment will start automatically.
