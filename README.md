<p align="center">
  <img src="src/assets/images/logo-cube.png" width="110" alt="Rhubix logo" />
</p>

<h1 align="center">Rhubix</h1>

<p align="center">
  The official marketing site for <strong>Rhubix</strong> — a dark, purple-themed
  single-page app built with Vite + React and ported from the approved Framer design.
</p>

<p align="center">
  <a href="https://rhubix.netlify.app/"><strong>Live site → rhubix.netlify.app</strong></a>
</p>

<p align="center">
  <a href="#pages">Pages</a> ·
  <a href="#getting-started">Getting started</a> ·
  <a href="#deployment-on-netlify">Deployment</a> ·
  <a href="#pre-launch-checklist">Pre-launch checklist</a>
</p>

---

## Pages

| Route | What it is |
| --- | --- |
| `/` | Home — hero, feature bento, why us, services + stats, testimonials, pricing, FAQ, final CTA |
| `/services` | Service offering grid |
| `/about-us` | About — mission, stats, virtual tour, team |
| `/case-studies` | Case study list (detail pages are Phase 2) |
| `/contact` | Contact form — validated client-side, submits locally (no backend yet) |
| `/legal` | Legal index with the three policy documents |
| `/legal/terms-of-service` · `/legal/privacy-policy` · `/legal/cookie-policy` | Policy documents with a sticky sidebar |
| anything else | 404 catch-all |

**Site chrome (every page):** load screen, toggle-able chat widget (bottom-right),
cookie consent bar (bottom-left), scroll-reveal animations, flat translucent-gray
scrollbar.

## Getting started

```bash
npm install
npm run dev      # local dev server (URL printed in the terminal)
npm run build    # production build → dist/
npm run lint     # oxlint
```

## Stack

- **React 19** + **Vite 8** with the `@` → `src/` alias
- **react-router-dom 7** — client-side routing (SPA redirect required on static hosts)
- **CSS Modules** per component, design tokens in `src/index.css`
- **GSAP + OGL** for the home hero's gooey reveal effect
- Copy/data separated from layout: each section keeps its text in a `sections/*.js` file

## Deployment on Netlify

The repo ships with a `netlify.toml`:

- **Build command:** `npm run build` — **Publish directory:** `dist`
- **SPA redirect** `/* → /index.html` so deep links like
  `/legal/terms-of-service` don't 404

To connect: [app.netlify.com](https://app.netlify.com) → *Add new site* →
*Import an existing project* → GitHub → select this repo. The build settings
are picked up from `netlify.toml` automatically — just press *Deploy*.

## Pre-launch checklist

The site is visually complete but carries template placeholders that must be
replaced before it goes live:

- [ ] **Policy pages** — the copy is the reference's *fictional* template text with
      `[Your Company Name]` placeholders (`src/pages/Legal/sections/policies.js`)
- [ ] **Pricing, testimonials, contact email** — placeholder values in the
      section data files under `src/pages/`
- [ ] **Contact + payments** — wire the form to a real inbox and add checkout
      (needs the company email + Stripe account)
- [ ] **Service / case-study detail pages** — Phase 2; links currently stay on-index
- [ ] **Template licensing** — confirm the Framer template port is cleared for
      commercial use
