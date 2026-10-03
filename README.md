# Moubarak Akamou — Portfolio

Live: https://makamou.github.io/portfolio/

Updated personal portfolio with 17 projects, responsive layouts, animations, project filters and an M favicon.

## Preview

Run `python3 -m http.server 8081` from the repository, then open http://localhost:8081.

## Editable source

Download and extract `portfolio-source.zip`. Project content lives in `src/data/projects.ts`.

Run `npm ci`, `npm test`, `npx tsc --noEmit`, and `npm run build:pages` in the extracted source folder.

The generated `dist-pages/` directory is the complete static website. Publish its contents at the repository root, preserving `.nojekyll`. GitHub Pages publishes `main` from the root folder.

The current deployment reuses the existing `assets/` images. Its compiled JavaScript and CSS are at the root. The older `app.js`, `styles.css`, and `projects.json` are unused by the new website.
