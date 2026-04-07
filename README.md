# Angular Portfolio Starter (Angular 21) — GitHub Pages

A static, production-ready Angular 21 portfolio platform hosted on GitHub Pages. Pure SPA with no server-side rendering, perfect for content-heavy knowledge bases, tutorials, and portfolio showcases.

## Goals Covered

- Comprehensive Angular 21 tutorial platform
- Topic deep-dive sections
- Industry-specific portfolio case studies
- One well-architected codebase with feature boundaries
- Static-site SEO optimization
- Free GitHub Pages hosting with manual deployment control

## Tech Stack

- **Angular 21** — modern, standalone components
- **TypeScript 5.9** — strict mode, path aliases
- **TailwindCSS 4** — utility-first styling
- **GitHub Pages** — free static hosting
- **GitHub Actions** — CI/CD for manual deployments

**No server required.** Pure static HTML, CSS, JS output.

## Architecture (Monorepo Style in One App)

The app uses folder boundaries to mimic monorepo discipline:

- `src/app/core`: domain models and singleton services
- `src/app/shared`: reusable presentational utilities/components
- `src/app/features`: feature slices routed independently

Feature slices added:

- `tutorial`
- `deep-dives`
- `portfolio`
- `not-found`

Each feature is lazily loaded via route-level `loadComponent` to keep scaling clean.

## Quick Start

```bash
npm install
npm start
```

Opens dev server at http://localhost:4200/ with live reload.

### Build for GitHub Pages

```bash
npm run build:ghpages
```

Output: `dist/angular-portfolio/browser/` (ready to deploy)

## Deployment

### Manual Deployment via GitHub Pages

1. Push your code to the `main` branch:
   ```bash
   git add .
   git commit -m "Your changes"
   git push origin main
   ```

2. Go to your repo's **Actions** tab in GitHub

3. Select **"Deploy to GitHub Pages"** workflow on the left

4. Click **Run workflow** → **Run workflow**

The site updates at: **https://sreee2001.github.io/AngularPortfolio/**

### Why Manual Deployment?

Keeps your repo changes separate from published content. You can develop and push code freely without triggering site updates. Deploy only when content is ready for public viewing.

## Suggested Implementation Plan

1. Finalize your information architecture.
2. Create content schemas in `core/models` (tutorial chapter, deep-dive article, portfolio case study).
3. Build one reusable page shell in `shared` for hero, toc, content blocks, and metadata.
4. Implement data adapters (markdown/json/CMS/backend) behind `core/services` interfaces.
5. Add route-level preloading strategy once content grows.
6. Add tests by vertical slice (service + route + page rendering).
7. Add analytics and search once core content stabilizes.

## Recommended Next Folders

When you are ready, add:

- `src/app/features/tutorial/pages`
- `src/app/features/tutorial/components`
- `src/app/features/deep-dives/pages`
- `src/app/features/portfolio/pages`
- `src/app/shared/layout`
- `src/app/shared/content-blocks`

## Why This Starter Works for Large Scale

- Strict TypeScript and strict Angular template checks enabled
- Route-level lazy loading already configured (4 feature chunks pre-wired)
- Typed content contracts included
- Client-side SPA routing with GitHub Pages 404 fallback
- Path aliases configured for maintainable imports
- GitHub Actions workflow for zero-friction publishing