# Mi Clínica Medical Center

**Bilingual website for a Hispanic medical clinic in Houston, TX** — 18 service pages, blog, Google reviews and a contact form, built for local SEO, conversions and accessibility.

**Live:** [mi-clinica-medical-center.vercel.app](https://mi-clinica-medical-center.vercel.app)

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-61dafb?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38b2ac?logo=tailwindcss)

## What it does

- **Spanish and English** with `next-intl` (`/es`, `/en`); Spanish is the main language for the clinic's patients.
- **Service pages:** 18 services generated from one data file, such as family medicine, immigration exams (I-693), gynecology, ultrasound, laboratory, urology, DOT exams and chronic conditions.
- **Blog** with static pages for each post.
- **Google reviews** pulled from the Google Places API and shown in a carousel.
- **Contact form** with client and server validation (React Hook Form + Zod), sent with Resend and React Email.
- **Local SEO:** per-page metadata, Open Graph, JSON-LD (MedicalClinic, MedicalProcedure, FAQPage, BlogPosting, breadcrumbs), sitemap and robots.
- **Conversion:** floating call button, clear calls to action on every page.
- **Performance and accessibility:** optimized images, lazy loading, keyboard navigation and ARIA labels; Lighthouse reports for every service page are in `lighthouse-reports/`.

## Tech stack

| Area | Tools |
|---|---|
| Framework | Next.js 16 (App Router, Server Components, Server Actions), React 19, TypeScript |
| UI | Tailwind CSS 4, shadcn/ui (Radix), Framer Motion, Embla Carousel |
| Icons | Phosphor, Health Icons, lucide-react |
| Forms | React Hook Form, Zod |
| Email | Resend, React Email |
| i18n | next-intl |
| Data | Google Places API (reviews) |
| Hosting | Vercel |

## Project structure

```
src/
  app/[locale]/     home, services, services/[slug], blog, blog/[slug]
  components/       layout, sections, forms, services and SEO (JSON-LD) components
  emails/           React Email templates
  i18n/             next-intl routing and request config
  lib/              services and FAQ data, Google reviews, validation
  messages/         translations (es, en)
lighthouse-audit-all.js   runs Lighthouse on every page
lighthouse-reports/       saved reports
```

## Getting started

**Requirements:** Node.js 20.9+.

```bash
git clone https://github.com/caballerorandy6/mi-clinica-medical-center.git
cd mi-clinica-medical-center
npm install
# create .env.local with the variables below
npm run dev      # http://localhost:3000
```

### Environment variables

| Variable | Purpose |
|---|---|
| `RESEND_API_KEY` | Sends contact form emails |
| `GOOGLE_PLACES_API_KEY`, `GOOGLE_PLACE_ID` | Loads the clinic's Google reviews |

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Run the production build |
| `npm run lint` | ESLint |
| `node lighthouse-audit-all.js` | Lighthouse audit of every page |

## Author

**Randy Caballero** — Full-Stack Developer, Houston, TX
[rcweb.dev](https://rcweb.dev) · [LinkedIn](https://linkedin.com/in/caballerorandy) · [GitHub](https://github.com/caballerorandy6)
