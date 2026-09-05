# Thames Portfolio

A React + Vite + Tailwind CSS recreation of the "Thames" personal portfolio site (dark navy
theme, typewriter hero, expandable works list, experience timeline, animated skill rings,
scrolling marquee, testimonials carousel, contact map, and blog cards).

## Getting started

Requires [Node.js](https://nodejs.org) 18+.

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  components/   Navbar, Footer, ScrollToTop (shared across pages)
  sections/     Hero, Works, Experience, Skills, Testimonials, Contact, Blog
  pages/        Home (all sections), About, Service
  hooks/        useTypewriter — the rotating-role typing effect
  data/         content.js — all placeholder text/images in one place
```

- Routing is handled by `react-router-dom`: `/` is the long scrolling home page,
  `/about` and `/service` are separate pages, matching the original site's navigation.
- The contact map uses `react-leaflet` with OpenStreetMap tiles (needs an internet
  connection in the browser to load map tiles).
- All photos are placeholder stock images from Unsplash/randomuser.me — swap the URLs in
  `src/data/content.js` for your own images and copy.
- Colors, fonts, and spacing are defined in `tailwind.config.js` / `src/index.css` if you
  want to adjust the look.

  Domain name Registration through

  NameCheap
  05/09/2026
  AbhilashPorella
  Pradhyumna@620221
