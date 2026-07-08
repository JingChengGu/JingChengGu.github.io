# jingchenggu.github.io

Personal portfolio of Jason Gu — Forward Deployed Engineer / AI Solutions Engineer.

Built with React + Vite + TypeScript. CSS Modules over a custom design-token system; motion via `motion/react` (scroll-linked parallax, staggered reveals, magnetic/tilt micro-interactions, all `prefers-reduced-motion` aware).

## Development

```bash
npm install
npm run dev      # local dev server
npm run build    # type-check + production build to dist/
npm run preview  # serve the production build locally
```

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds the site and publishes `dist/` to GitHub Pages via the native Pages Actions flow (`actions/upload-pages-artifact` + `actions/deploy-pages`).
