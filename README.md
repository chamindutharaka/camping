# Camping Gear Hub — Galle (Next.js 15)

Modern, mobile-first camping equipment rental storefront for **Camping Gear Hub — Galle** (*Gear up and Camp on*).

## Setup & Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Run pricing unit tests:

```bash
npm test
```

Build for production:

```bash
npm run build
```

## Replacing Images with Your Real Gear Photos

1. Place your business logo at `/public/logo.jpeg` (the header and invoice hide it gracefully if missing).
2. Add your real gear photos inside `/public/images/gear/` named by item ID (for example `/public/images/gear/tent-4-manual.jpg`).
3. Update the corresponding URLs in `/data/images.ts` to point to `"/images/gear/<item-id>.jpg"`.

## Editing Prices, Items & Packages

- **Gear items & 1st-day rates:** `/data/items.ts`
- **Quick Start Packages:** `/data/packages.ts`
- **Multi-day multiplier & discount logic:** `/lib/pricing.ts`
- **English / Sinhala copy:** `/data/i18n.ts`

## Deploying to Vercel

1. Push this `camping-gear-hub` folder to a GitHub repository.
2. Import the repository in [Vercel](https://vercel.com/new) — no extra environment variables or backend configuration required.
3. Click **Deploy**.

## Photo Shot List (Recommended Real Photos)

Take horizontal (4:3 or 16:9) daylight/golden-hour photos on grass, sand, or a clean camp mat:
1. **Hero:** A pitched tent at dusk with warm lantern light inside.
2. **Tents (`tent-6-manual`, `tent-6-auto`, `tent-4-manual`, `tent-4-auto`, `beach-tent`):** Full tent pitched outdoors with rain cover on and ground sheet visible underneath.
3. **Rain Cover & Ground Sheet:** Close-up of the folded kit or installed rain fly.
4. **Cooking (`bbq-grill`, `bbq-large`, `cooking-ware-set`, `gas-stove`, `gas-stove-windproof`, `gas-tin`):** Clean items arranged neatly on a wooden table or camp mat; show the two Gas Stove models side by side.
5. **Power & Chairs (`camping-light`, `pb-20k`, `camping-chair`):** Lantern lit up at twilight, power bank with cable, chair unfolded outdoors.

## Next Upgrades

- **Live Availability Calendar:** Connect to your existing Google Sheet / Hostinger MySQL API to show real-time stock per date.
- **Admin Order Dashboard:** Manage bookings, deposits, and PDF receipts directly inside `/admin`.
- **Online Advance Payment:** PayHere / LankaQR integration for instant LKR 500 advance confirmation.
- **Verified Google Reviews:** Embed live Google Maps customer reviews for S.C.W Electrical, Pinnaduwa, Galle.
