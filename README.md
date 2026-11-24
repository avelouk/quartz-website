# avelouk.com

Personal website of [Karen Galstyan](https://github.com/avelouk) — projects, notes, and writing, published from Markdown.

Built on a fork of [Quartz](https://quartz.jzhao.xyz/) (v4). Content lives in `content/`; the site builds and deploys to [avelouk.com](https://avelouk.com) via GitHub Pages.

## Content

Notes and pages are Markdown files under `content/`. Drafts, templates, and Obsidian metadata are ignored at build time (`private`, `templates`, `.obsidian`).

Typical layout:

- `content/_index.md` — home page
- `content/Projects/` — project write-ups
- `content/assets/` — images and other static files used by notes

Edit notes locally (e.g. Obsidian), commit, and push to publish.

## Local development

```bash
npm install
npx quartz build --serve
```

Then open the local URL Quartz prints (usually `http://localhost:8080`).

Useful commands:

| Command | What it does |
| --- | --- |
| `npx quartz build --serve` | Build + live reload |
| `npx quartz build` | One-shot production build → `public/` |
| `npm run format` | Prettier |

## Deploy

Pushing to the `v4` branch runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml): build with Quartz, then publish `public/` to GitHub Pages. You can also trigger the workflow manually from the Actions tab.

## Customization (this fork)

Upstream Quartz plus local tweaks. The main places that matter:

| Path | Role |
| --- | --- |
| `quartz.config.ts` | Site title, URL, theme, plugins |
| `quartz.layout.ts` | Page layout / component placement |
| `quartz/styles/custom.scss` | Site-specific styling |
| `quartz/components/HeaderImage.tsx` | Header wordmark mount |
| `quartz/components/scripts/headerImage.inline.ts` | Animated ASCII “AVELOUK” logo |

For Quartz itself (plugins, layout API, content conventions), see the [Quartz docs](https://quartz.jzhao.xyz/). Upstream: [jackyzha0/quartz](https://github.com/jackyzha0/quartz).
