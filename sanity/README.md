# Rahid Portfolio Sanity Studio

This is the local Sanity Studio for editing portfolio projects.

## First-time setup

Create `sanity/.env` from `sanity/.env.example`:

```env
SANITY_STUDIO_PROJECT_ID=your-project-id
SANITY_STUDIO_DATASET=production
```

Use the same values in the Next app `.env.local`:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-03-01
```

## Run Studio

From this folder:

```bash
cd D:\Projects\rahid-portfolio\sanity
npm run dev
```

Or from the portfolio root:

```bash
cd D:\Projects\rahid-portfolio
npm run sanity:dev
```

Open the local URL shown in the terminal, usually `http://localhost:3333`.

## Content

Create documents of type `Project`.

Fields:

- Title
- Category
- Image
- URL

The Next app fetches these documents and renders them in `FeaturedWorkSection`.
