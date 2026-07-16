# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Single-page marketing site for ORDER ESPRESSO & BAKERY, built with Next.js 16 App Router, React 19, TypeScript (strict), and Tailwind CSS 4.
All user-facing copy is Korean by design — preserve its language and tone unless the task is a content change.

## Commands

Use pnpm (lockfile is `pnpm-lock.yaml`; CI pins pnpm 11.13.0, Node 24).

```bash
pnpm dev                                  # Dev server at http://localhost:3000
pnpm test                                 # Run unit tests once (vitest)
pnpm test components/site-header.test.tsx # Run a single test file
pnpm test:watch                           # Vitest watch mode
pnpm lint                                 # ESLint (flat config, eslint.config.mjs)
pnpm spellcheck                           # cspell (custom words in cspell.config.yaml)
pnpm build                                # Production build
```

CI (`.github/workflows/`) runs `pnpm test`, `pnpm lint`, and `pnpm build` on PRs and pushes to `main` — run all three before opening a PR.
Trunk (`.trunk/trunk.yaml`) adds Prettier, Markdown/YAML linting, secret/dependency scanning, and image optimization checks.

## Architecture

The homepage is composed in `app/page.tsx` from full-width section components in `components/` (hero, menu-section, story, gallery, reviews, visit, site-header, site-footer).
New homepage sections follow the same pattern: create the section in `components/`, compose it in `app/page.tsx`.

- `app/layout.tsx` — global metadata, fonts, Vercel Analytics
- `app/globals.css` — Tailwind imports and design tokens (color, typography, radius); prefer these tokens over ad hoc CSS
- `components/ui/` — shadcn primitives (base-nova style, Base UI + CVA); `components.json` configures the shadcn CLI
- `lib/utils.ts` — `cn()` class-name composition
- `public/images/` — static images, referenced as `/images/<name>`; render with `next/image` and meaningful `alt` text

Tests are colocated with source (`components/*.test.tsx`, `lib/utils.test.ts`) using Vitest + Testing Library in jsdom.
`test/setup.ts` runs cleanup after each test and mocks `next/image` as a plain `img` — component tests can assert on `img` elements directly.

## Conventions

- Import via the `@/` alias (maps to project root).
- Kebab-case file names, PascalCase exported component names (`components/site-header.tsx` → `SiteHeader`).
- Prettier: two spaces, single quotes.
- Conventional Commit prefixes (`feat:`, `fix:`, `docs:`, `chore:`), one concern per commit.
