# Mehroz Farooq — Portfolio

A light, responsive software engineer portfolio inspired by React Resume’s clean presentation. Built with the existing React and Vite setup.

## Develop

```sh
npm ci
npm run dev
```

## Build and preview

```sh
npm run build
npm run preview
```

Netlify builds with `npm run build` and publishes `dist`. `public/_redirects` serves client-side routes on direct visits and refreshes.

## Update content

- `src/portfolio-profile.js`: career experience, contact email, and grouped skills, based on the supplied résumé.
- `src/aichief-project.js`, `src/placed-project.js`, and `src/waaimo-project.js`: professional project case studies and public website screenshots.
- `public/portfoliodata.js`: existing project descriptions, screenshots, education, portrait, and social links.
- `public/Mehroz_Farooq_Resume.pdf`: downloadable résumé supplied by Mehroz.
- `src/portfolio.css`: responsive layout and visual styles.

Projects use three alternating featured case studies (Waaimo, AIChief, and Placed), followed by a compact archive of the other ten projects. The same layout is searchable on `/projects`. Subtle hero, scroll, hover, and dialog animations respect reduced-motion preferences, with content visible by default.

The homepage includes about, experience, selected projects, skills, education, certification, and contact. `/projects` contains all thirteen projects with keyword search. `/project/:id` provides project details and keyboard-accessible screenshot dialogs. Contact opens an email client; there is no unconnected contact form.

Motion respects reduced-motion preferences. Navigation, project search, gallery dialogs, and all interactive controls support keyboard use.

## Hostinger deployment

Build with `npm run build` and deploy the contents of `dist/` to the domain’s web root (usually `public_html`). Include the hidden `dist/.htaccess` file. It serves `index.html` for client-side routes such as `/projects` and `/project/13`, while leaving existing asset and document requests alone. Netlify uses the separate `public/_redirects` fallback.
