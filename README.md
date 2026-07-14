# Innocuous Meandering

Ankur Sharma's personal blog. Built with [Astro](https://astro.build), deployed to GitHub Pages.

Live at <https://askankur.github.io/kurkure/>.

## Writing a post

Add a markdown file under `src/content/posts/`, e.g. `src/content/posts/my-post.md`:

```md
---
title: My Post Title
date: 2026-07-15
dek: One line on what it's about (optional, shows in the list view).
---

Post body in markdown.
```

`draft: true` in frontmatter keeps a post out of the build.

## Local development

```bash
npm install
npm run dev      # http://localhost:4321/kurkure
npm run build    # outputs to dist/
npm run preview  # serve the built dist/ locally
```

## Deploy

Pushing to `v5` triggers `.github/workflows/deploy.yml`, which builds and deploys straight to
GitHub Pages. There is no separate "publish" step — **pushing to `v5` is publishing**.
