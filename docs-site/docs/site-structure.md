---
draft: true
---

# Site Structure & Architecture

This document outlines the project structure and data flow for the Artha Advisory VitePress website.

## Directory Overview

- `docs/`: Root directory for all content and configuration.
  - `.vitepress/`: VitePress-specific configuration and theme.
    - `theme/`: Custom theme implementation.
      - `components/`: Vue components used across the site.
      - `index.js`: Theme entry point and component registration.
      - `MyLayout.vue`: Global layout wrapper.
      - `style.css`: Global styles.
    - `config.mts`: Main VitePress configuration (locales, nav, sidebar, etc.).
  - `about/`: Company information (English).
  - `services/`: Service-specific pages (English).
  - `industries/`: Industry-specific pages (English).
  - `resources/`: Guides, tools, templates, and insights (English).
  - `ne/`: Nepali translation of the site (mirrors the English structure).
  - `public/`: Static assets (images, favicon).

## Data Flow & Loaders

The site uses VitePress "Data Loaders" to dynamically generate lists of services, resources, and team members.

- `services.data.ts`: Loads and transforms data from `services/**/*.md`.
- `resources.data.ts`: Loads and transforms data from `resources/**/*.md`.
- `industries.data.ts`: Loads and transforms data from `industries/**/*.md`.
- `feed.ts`: Generates the RSS feed from insights.

## Key Components

- `HomeLayout.vue`: Custom layout for the homepage.
- `ServicesLayout.vue`: Grid layout for service pillars.
- `ResourcesLayout.vue`: Filterable grid for resources.
- `FAQ.vue`: Interactive accordion for frequently asked questions.
- `GlobalFooter.vue`: Site-wide footer with multi-language support.
- `EntityFormationWizard.vue`: Interactive tool for company registration guidance.
- `ArthaTaxCalculator.vue`: Simplified tax estimation tool.

## Build Process

The production build uses `npm run docs:build`, which triggers:
1.  Vite bundling (Client & Server).
2.  SSR rendering of all Markdown files to HTML.
3.  RSS feed generation via `buildEnd` hook.

## Recent Changes & Optimizations

- **SSR Safety**: Browser-specific libraries like `medium-zoom` are loaded dynamically in `onMounted`.
- **Mermaid Diagrams**: Wrapped labels in quotes to ensure SSR compatibility.
- **Data Loaders**: Renamed from `.mts` to `.ts` for better compatibility and optimized for performance.
- **FAQ Redesign**: Updated with a premium corporate aesthetic and smooth transitions.
