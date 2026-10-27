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
- `public/portfoliodata.js`: existing project descriptions, screenshots, education, portrait, and social links.
- `public/Mehroz_Farooq_Resume.pdf`: downloadable résumé supplied by Mehroz.
- `src/portfolio.css`: responsive layout and visual styles.

The homepage includes about, experience, selected projects, skills, education, certification, and contact. `/projects` contains all ten projects with keyword search. `/project/:id` provides project details and keyboard-accessible screenshot dialogs. Contact opens an email client; there is no unconnected contact form.

Motion respects reduced-motion preferences. Navigation, project search, gallery dialogs, and all interactive controls support keyboard use.
