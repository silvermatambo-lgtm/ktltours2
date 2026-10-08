# KTL Tours & Getaways — Website

Official website for **KTL Tours & Getaways** (Explore · Discover · Experience), built on the WebDevPro Ultra Max 5 master template.

## Included
React 18 + TypeScript + Vite + Tailwind, multi-page routing (Home, About, Services, Gallery, FAQ, Testimonials, Contact), animated hero slider, gallery with lightbox, validated contact form with trip-type dropdown, map block, PWA support (manifest, install prompt, offline page, service worker), mobile bottom navigation, and an interactive WhatsApp lead assistant that collects visitor details before opening WhatsApp.

## Contact details used
Phone / WhatsApp: 062 012 8294 (+27 62 012 8294)

## Development
```bash
npm install
npm run dev
```

## Production
```bash
npm run build
```

## Deploy on Vercel
Push this repository to GitHub, import it in Vercel, choose Framework = **Vite**, Build = `npm run build`, Output = `dist`. `vercel.json` is included for direct-route support.

## Things to update when available
- Real client testimonials (`src/pages/Testimonials.tsx`)
- Email address, physical address and Google Maps embed (`Contact.tsx`, `Footer.tsx`)
- Facebook / Instagram links
- Final business hours (`Contact.tsx`, `Footer.tsx`)
