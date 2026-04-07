# Angular Portfolio Starter (Angular 21)

This repository is scaffolded as a single Angular application with monorepo-style internal boundaries so you can scale content safely without managing multiple deployables.

## Goals Covered

- Comprehensive Angular 21 tutorial platform
- Topic deep-dive sections
- Industry-specific portfolio case studies
- One well-architected codebase with feature boundaries
- SSR-ready base for future SEO/public content needs

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

Build for production:

```bash
npm run build
```

Serve SSR bundle after build:

```bash
npm run serve:ssr:angular-portfolio
```

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
- Route-level lazy loading already configured
- Typed content contracts included
- SSR entrypoints already wired
- Path aliases configured for maintainable imports