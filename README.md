# Katraj Milk Parlour — Website

A full multi-page React + Bootstrap website for Katraj Milk Parlour, Dattawadi (Pune).

## Tech stack
- **React 19 + Vite** — fast dev/build tooling
- **React Router** — real multi-page navigation (Home, About, Menu, Gallery, Contact)
- **Bootstrap 5** — grid, buttons, forms, utilities
- **AOS (Animate on Scroll)** — scroll-reveal animations
- **Bootstrap Icons** — icon set (loaded via CDN in `index.html`)
- **FormSubmit.co** — sends every form (Contact page, footer newsletter, product enquiry modal) straight to **sakshimalkar286@gmail.com** with no backend server needed

## Run it locally
```bash
npm install
npm run dev
```
Open the printed local URL (usually http://localhost:5173).

## Build for production
```bash
npm run build
```
This outputs a static `dist/` folder you can upload to **any** host — Netlify, Vercel, GitHub Pages, Hostinger, cPanel, etc.

## ⚠️ One-time step: activate the contact form
FormSubmit.co requires the destination email to confirm the very first
submission it ever receives from a new site. After you deploy (or even from
`localhost`), submit any form on the site once — you'll get an email at
**sakshimalkar286@gmail.com** with an "Activate Form" link. Click it once,
and every submission after that (from any page) lands directly in the inbox
automatically. No further setup needed.

If you'd rather use a different inbox, change the `email` value in
`src/data/store.js` — every form on the site reads from that single place.

## Project structure
```
src/
  components/     Navbar, Footer, WhatsApp button, cards, modal, SVG art, etc.
  pages/          Home, About, Products (Menu), Gallery, Contact, NotFound
  data/           products.js (menu items) and store.js (address/phone/email)
  hooks/          useFormSubmit.js — shared form → email logic
  index.css       design tokens (colors, type, spacing) and shared styles
```

## Customizing
- **Menu items**: edit `src/data/products.js`
- **Address / phone / hours / email**: edit `src/data/store.js`
- **Colors / fonts**: edit the `:root` variables at the top of `src/index.css`
- **WhatsApp number**: also in `src/data/store.js` (`waNumber`)

## Notes
- The Gallery page uses hand-illustrated CSS/icon tiles instead of stock
  photos, so nothing ever shows as a broken image — swap in real shop
  photography anytime by replacing `GalleryTile` with `<img>` tags.
- The Google Map on the Contact page is embedded directly from the shop's
  real address, no API key required.
