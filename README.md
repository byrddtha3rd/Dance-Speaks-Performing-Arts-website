# Dance Speaks Performing Arts Website

This repository contains the Phase 1 public website for Dance Speaks Performing
Arts Academy.

## Current Status

V1 is a static Next.js website with repository-backed content and clearly marked
placeholders for missing approved facts, assets, tuition, and biographies.

## Development

```bash
pnpm install
pnpm build
pnpm dev
```

## Source Materials

- `reference-materials/` stores planning material, brand notes, content drafts,
  photos, and existing-site notes.
- `src/content/siteContent.ts` stores the v1 site content used by the public
  page.
- `public/` is reserved for approved static website assets.

Do not add generated placeholder logos or photos. Only copy approved assets into
`public/` after they exist in `reference-materials`.
