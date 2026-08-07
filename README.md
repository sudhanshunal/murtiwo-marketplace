# Murtivo

Premium jewelry CAD marketplace homepage, built with Next.js 15 and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Deploy for free on Vercel

1. Create a GitHub repository and upload this folder.
2. In [Vercel](https://vercel.com/new), select the repository.
3. Keep the detected Next.js settings and click **Deploy**.
4. Vercel provides a free `*.vercel.app` address, which you can rename from the project settings.

## Payments (Razorpay Standard Checkout + Vercel Blob)

The "Lion Murti STL" product (₹10) is wired end-to-end:

- `POST /api/checkout` — creates a fresh Razorpay order server-side (amount is fixed at 1000 paise; never trust a client-supplied amount).
- `POST /api/verify` — recomputes the Razorpay HMAC-SHA256 signature server-side. Only on success does it write a receipt and issue a short-lived (10 min), signed download token.
- `GET /api/download?token=...` — validates the token + receipt, then asks Vercel Blob for a fresh, scoped, short-lived (5 min) signed URL for `LION.stl` and redirects to it. The permanent Blob URL/token is never sent to the browser and the file is never publicly linked.
- `POST /api/webhook/razorpay` — verifies `x-razorpay-signature` against the raw body and independently confirms `payment.captured` events, as a secondary source of truth alongside the browser callback.

### Required environment variables (already configured in Vercel)

```
RAZORPAY_KEY_ID
RAZORPAY_KEY_SECRET
BLOB_READ_WRITE_TOKEN
```

No other secrets are used. For local development, copy `.env.example` to `.env.local` and fill in your **Razorpay Test Mode** keys — never commit `.env.local`.

### Razorpay Dashboard setup

1. **API Keys** (Test Mode): Settings → API Keys → generate, and put them in `RAZORPAY_KEY_ID` / `RAZORPAY_KEY_SECRET` in Vercel (Production **and** Preview environments if you test on preview deployments).
2. **Webhook**: Settings → Webhooks → Add New Webhook
   - URL: `https://<your-domain>/api/webhook/razorpay`
   - Secret: use the **same value** as `RAZORPAY_KEY_SECRET` (this project intentionally uses only the three env vars listed above, so the webhook secret must match the API key secret).
   - Active events: at minimum `payment.captured`.

### Vercel Blob setup

Files are looked up by pathname via the Blob SDK (`list`), not hardcoded URLs, so re-uploading to the same pathnames continues to work with no code changes:

- `LION.stl` — the paid STL file.
- `lion image` — the preview image shown on the storefront.

### Local test flow

```bash
npm install
cp .env.example .env.local   # fill in Razorpay TEST keys + your Blob token
npm run build                # or npm run dev
```

Use a [Razorpay test card](https://razorpay.com/docs/payments/payments/test-card-upi-details/) to pay ₹10 in Test Mode:
- A successful test payment → "Payment verified. Your protected download is ready." + a working, short-lived STL download link.
- Closing the checkout modal → "Payment cancelled. No charge or download."
- A failed/declined test card → "Payment could not be verified. No download was issued." and no download link is shown.

### Deploying

```bash
git add -A
git commit -m "Add Razorpay-powered Buy Now flow for Lion Murti STL"
git push origin main
```

Vercel will build and deploy automatically on push (or run `vercel --prod` if you deploy via CLI). After deploying, do one real Test Mode purchase against the production URL to confirm the webhook (which needs a public URL) fires correctly.
