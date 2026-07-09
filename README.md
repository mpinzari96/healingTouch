# Healing Touch by Alina — Website

Production-ready Next.js 15 website for Alina's massage therapy practice in Frisco, TX — home studio & mobile sessions across North Texas.

## Tech Stack

- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS** — custom spa color palette
- **Framer Motion** — smooth animations
- **Lucide React** — icons
- Google Fonts: Cormorant Garamond + DM Sans

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout + JSON-LD schema
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles + Tailwind
│   ├── sitemap.ts          # Dynamic XML sitemap
│   ├── not-found.tsx       # 404 page
│   ├── about/
│   │   ├── page.tsx
│   │   └── AboutPageClient.tsx
│   ├── services/
│   │   ├── page.tsx
│   │   └── ServicesPageClient.tsx
│   ├── book/
│   │   ├── page.tsx
│   │   └── BookPageClient.tsx
│   ├── contact/
│   │   ├── page.tsx
│   │   └── ContactPageClient.tsx
│   └── api/
│       └── contact/route.ts
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Sticky nav with mobile menu
│   │   └── Footer.tsx      # Footer with schema markup
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── TrustBar.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ServicesTeaser.tsx
│   │   ├── WhyChooseSection.tsx
│   │   ├── ReferAFriendSection.tsx
│   │   ├── GiftCardsSection.tsx
│   │   └── FinalCTASection.tsx
│   └── ui/
│       └── ToastProvider.tsx
public/
├── robots.txt
└── (add og-image.jpg, favicon.ico)
```

## Getting Started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit `http://localhost:3000`

## Customization Checklist

### Replace Placeholder Data
Real content is in place. The following bracketed tokens are intentional placeholders — search for each and replace with the real value across all files:
- [ ] **Phone**: Replace `[PHONE]` → Alina's real number (used in `tel:`/`sms:` links, display text, and JSON-LD)
- [ ] **Email**: Replace `[EMAIL]` → real email (used in `mailto:` links, display text, and JSON-LD)
- [ ] **Instagram**: Replace `[INSTAGRAM_URL]` → real Instagram profile URL
- [ ] **Facebook**: Replace `[FACEBOOK_URL]` → real Facebook page URL
- [ ] **WhatsApp**: Replace `[WHATSAPP_URL]` → real WhatsApp link (Contact page)
- [ ] **Domain**: Update `healingtouchbyalina.com` → real domain in `layout.tsx`, `sitemap.ts`, page metadata
- [ ] **Gift cards**: In `src/components/sections/GiftCardsSection.tsx`, update `GIFT_CARD_URL` from `/contact` → the real gift card platform link (Square, Vagaro, or Mindbody)

### Real Images
- [ ] Replace Unsplash placeholder images with Alina's professional photos
- [ ] Add `public/og-image.jpg` (1200×630) for social sharing
- [ ] Add `public/favicon.ico`

### Connect Email / Booking
- [ ] **Contact form**: Uncomment Resend, Formspree, or Nodemailer in `src/app/api/contact/route.ts`
- [ ] **Booking form**: Uncomment chosen endpoint in `BookPageClient.tsx`
  - Option A: Formspree (easiest — just create account and add form ID)
  - Option B: Internal API → `/api/contact`
  - Option C: **Calendly** — replace the entire booking form with Calendly embed:
    ```tsx
    // In BookPageClient.tsx, replace form with:
    <div className="calendly-inline-widget" data-url="https://calendly.com/YOUR_USERNAME" style={{ minWidth: 320, height: 700 }} />
    <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async />
    ```

### Google Maps
- Replace map placeholders in `Footer.tsx` and `ContactPageClient.tsx` with real Frisco, TX embed URLs

### Google Analytics
Add to `layout.tsx` head:
```tsx
<Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" strategy="afterInteractive" />
<Script id="gtag" strategy="afterInteractive">
  {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');`}
</Script>
```

### Google Search Console
Uncomment and add verification code in `layout.tsx`:
```tsx
verification: {
  google: 'your-google-verification-code',
}
```

## SEO Features
- ✅ Unique metadata (title + description) per page
- ✅ Open Graph + Twitter card tags
- ✅ Canonical URLs
- ✅ JSON-LD schema: LocalBusiness + MassageTherapist + Service + FAQPage
- ✅ Semantic HTML5 with proper H1→H2→H3 hierarchy
- ✅ Alt text on all images
- ✅ Dynamic XML sitemap (`/sitemap.xml`)
- ✅ `robots.txt`
- ✅ Schema microdata on service cards and review items

## Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel deploy
```

Or connect GitHub repo to Vercel at vercel.com for automatic deployments.

## Performance Notes
- All images use `next/image` with proper `sizes` attributes
- Fonts preloaded in `<head>`
- Client components only where interactivity needed
- `priority` prop on hero image for LCP optimization
