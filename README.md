# Hongming Wang — Personal Digital Garden

The Astro rebuild of [homiltons.github.io](https://homiltons.github.io/). The site brings together research, publications, technical notes, journeys, and life beyond the lab.

## Local development

Use Command Prompt or `npm.cmd` in PowerShell:

```powershell
npm.cmd install
npm.cmd run dev
```

Open `http://localhost:4321` in a browser. Astro refreshes the page when source files change.

Before committing:

```powershell
npm.cmd run check
npm.cmd run build
```

## Content map

| Content | Location |
| --- | --- |
| Profile and social links | `src/data/site.ts` |
| News | `src/data/news.ts` |
| Publications and BibTeX | `src/data/publications.ts` |
| Journeys and photo lists | `src/data/journeys.ts` |
| Notes and blog posts | `src/content/notes/` |
| Pages | `src/pages/` |
| Shared components | `src/components/` |
| Global visual system | `src/styles/global.css` |
| Public images and CV | `public/` |

## Writing a note

Duplicate `src/content/notes/writing-template.md`, rename it with a lowercase English slug, and update the frontmatter:

```yaml
---
title: "My note"
description: "A short summary for cards and search results."
publishedAt: 2026-08-06
category: research
tags: [llm, agents]
draft: true
---
```

Set `draft: false` when the note is ready. Markdown, MDX, math, code blocks, and HTML `<details>` blocks are supported.

## Deployment

`.github/workflows/deploy.yml` builds and deploys the site to GitHub Pages when changes reach `main`. The live site remains unchanged while work stays on `astro-rebuild`.

The original static site remains available in Git history and on the `main` branch until the rebuild is reviewed and merged.
