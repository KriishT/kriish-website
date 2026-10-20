# kriish-website

The portfolio of Kriish Tiwari, live at [kriisht.vercel.app](https://kriisht.vercel.app).

This branch is version **D, Vantage: headings painted across four depths that resolve at their vantage point**. See `docs/build-report.md` for what was built, why, and what is still open.

A static [Astro](https://astro.build) site. There's no client framework: the little interaction there is runs as small TypeScript modules.

## Run it

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run check    # type-check .astro and .ts files
```

Node 22.22 or newer.

## Where things live

| Path | What |
|---|---|
| `src/content/work/` | One file per project. `flagship: true` gets a case-study page; the rest are listed in the archive. |
| `src/content/roles.json` | Work and research roles, shown on About. |
| `src/data/site.ts` | Name, email, links, the homepage statement and education. |
| `src/components/Edit.astro` | Marks an edit to the copy (old text, new text, margin note). |
| `src/components/Todo.astro` | A visible gap only Kriish can fill. Search for `<Todo` before launch. |
| `src/pages/system.astro` | The design system: tokens and primitives (not indexed). |
| `docs/` | The design audit, concepts, style tiles and screenshots behind this redesign. |

## Résumé

Put the PDF at `public/resume.pdf`. The Résumé links appear across the site only once that file exists.

## Deploy

Vercel builds `main` with `npm run build` and serves `dist/`.
