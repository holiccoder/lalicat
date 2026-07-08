https://lalicat.com

# Lalicat Project Overview

Lalicat is a two-part web platform: a **WordPress backend** that manages content and exposes custom REST APIs, and a **Next.js frontend** that renders multilingual pages for the website, blog, and support docs.

## Architecture

| Layer | Stack | Responsibility |
| --- | --- | --- |
| Backend | WordPress theme (Twenty Twenty-Two based) + custom PHP API extensions | Content management, custom REST endpoints (`/wp-json/lalicat/*`), translation caching, sitemap/support/blog data |
| Frontend | Next.js 12 + React 17 + Tailwind CSS | UI rendering, SEO metadata, static generation + ISR, multilingual routing |

## Key Features

1. Multilingual site support for **9 locales**: `en`, `fr`, `de`, `ru`, `vi`, `ja`, `es`, `pt`, `it`.
2. Custom WordPress REST APIs for posts, single pages/posts by slug, blog index, docs sidebar, support index, releases, reviews, sitemap, and contact submission.
3. Translation workflow that auto-translates non-English content and stores results in WordPress transients for long-term caching.
4. Frontend SEO integration with `next-seo`, plus sitemap-driven discoverability.
5. Incremental Static Regeneration (ISR) across key pages for fast delivery with periodic content refresh.
6. Blog pagination and sharing integrations for content distribution.

## Repository Structure

```text
backend/                 # WordPress theme + custom API logic (inc/custom_api.php)
frontend/lalicat-master/ # Next.js application
```

## Frontend Local Development

```bash
cd frontend/lalicat-master
npm install
npm run dev
```

The frontend consumes WordPress endpoints under the `lalicat` namespace (configured in `frontend/lalicat-master/lib/constants.js`).
