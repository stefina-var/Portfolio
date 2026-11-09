# Portfolio

Personal portfolio built with [Astro](https://astro.build), in English (`/`) and Bulgarian (`/bg`), with light and dark themes.

## Run it

Requires Node.js 22.23 or newer.

```
npm install
npm run dev
```

Then open http://localhost:4321. To test the production build, run `npm run build`.

## Edit content

Everything you normally need to change is in `src/data/`:

| File | What it controls |
|---|---|
| `site.ts` | English homepage and About text, contact details, PDFs, site switches |
| `site.bg.ts` | Bulgarian homepage and About text |
| `projects.ts` | All projects and case studies; the `bg` block in each holds the Bulgarian text |
| `journal.ts` | Journal entries; the `bg` block in each holds the Bulgarian text |

Short interface labels such as buttons and menu items are in `src/i18n.ts`. Colours and type are at the top of `src/styles/global.css`.

Text in `[square brackets]` is a placeholder. Optional fields that you remove disappear from the page.

**Site switches in `site.ts`**

- `showSheetNumbers`: show or hide numbers such as A-01
- `journalEnabled`: set to `false` for the "Journal is taking shape" state
- `pdfs.showComingSoon`: set to `false` to hide PDFs that aren't ready

## Add images

1. Put optimised files in `public/images/`, for example `public/images/my-project/plan.jpg`.
2. In `projects.ts`, set `cover` and `coverAlt` for the main image, and `src` and `alt` on each gallery item. Paths start at `/images/...`.

Any image without a `src` stays a labelled line drawing.

For the About page, save your photo as `public/images/portrait.jpg` and it appears automatically.

## Write a blog post

1. Open `src/data/journal.ts` and copy one block to the top of the `articles` list. The first post is shown as the latest story.
2. Give it a new `slug` and your own `title`, `category`, `excerpt` and `body`. Each item in `body` is one paragraph.
3. Remove `sample: true` and add a `date`.
4. Optional: put photos in `public/images/journal/`, then set `cover` and `coverAlt`, or add more under `images`.
5. Optional: add Bulgarian text in the `bg` block. Without it, the Bulgarian site shows the English post.

## Add the PDFs

1. Put the files in `public/pdfs/` as `architecture-portfolio.pdf` and `digital-design-portfolio.pdf`.
2. Set `available: true` for each one in `site.ts`.

## Deploy to Netlify

Connect this GitHub repo in Netlify. `netlify.toml` already sets the build command (`npm run build`) and publish folder (`dist`).

## Replace before launch

- [ ] Public name and domain (once known, add `site` to `astro.config.mjs` for canonical URLs and a sitemap)
- [ ] Sample projects: replace with real, curated work and remove `sample: true`
- [ ] Award wording, roles, employers and dates: verify each
- [ ] Permissions for professional and client imagery
- [ ] Portrait and biography, in both languages
- [ ] Bulgarian wording: review all text in `site.bg.ts`, `projects.ts`, `journal.ts` and `src/i18n.ts`
- [ ] Contact email and LinkedIn
- [ ] Architecture and Digital PDFs
- [ ] Journal entries, or set `journalEnabled` to `false`
- [ ] Final check of mobile, accessibility, links, downloads and SEO

## Not done yet

- A social sharing image
- Canonical URLs, language alternate tags and a sitemap, which need the final domain
