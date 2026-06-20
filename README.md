# Aaron Transportation Website

Premium, mobile-first React + TypeScript marketing website for Aaron Transportation.

## Local Setup

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

The build outputs to `docs/` so GitHub Pages can publish from the `main` branch `/docs` folder. The post-build helper in `scripts/create-static-routes.mjs` creates route-level `index.html` files so clean URLs return 200 responses on GitHub Pages.

## Project Structure

- `src/config/site.ts`: central content, contact details, service areas, services, fleet data, testimonials, FAQ, SEO metadata, social placeholders, and hidden future vehicle-sales settings.
- `src/components/`: reusable layout, cards, forms, metadata, and CTA components.
- `src/pages/`: route-level pages for Home, Services, Fleet, Service Areas, About, Quote, Contact, FAQ, hidden Vehicle Sales, and 404.
- `scripts/create-static-routes.mjs`: copies built HTML to route folders for GitHub Pages clean URLs.
- `public/robots.txt` and `public/sitemap.xml`: SEO crawl files for GitHub Pages.

## Placeholder Values To Replace

- Phone: `469-268-0230`
- Email: `info@aarontransportation.com`
- Address: `123 Main Street, Dallas, TX 75201`
- Service area copy: Dallas-Fort Worth and nearby city list
- Business history, driver standards, insurance/licensing language, cancellation policy, deposit policy
- Vehicle names, photos, passenger capacity, luggage capacity, and amenities
- Testimonials
- Social media URLs
- Future car-sales route settings if the business owner confirms vehicle sales

## Forms

Quote and contact forms currently use client-side validation and placeholder success handling. The quote form only requires full name and phone number, with optional trip details grouped for easier mobile completion. Forms are structured to connect later to email, CRM, Google Sheets, SMS, a database, Stripe, or booking software.

## Out Of Scope In This Launch

Live availability, real-time pricing, dispatch dashboards, accounts, payments, automated SMS confirmations, CRM integration, blog management, multilingual content, and full vehicle-sales inventory management are intentionally not implemented.
