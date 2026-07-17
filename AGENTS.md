# Repository Guidelines

## Project Structure & Module Organization

This is a Next.js App Router site for ORDER ESPRESSO.
`app/` contains the application shell: `layout.tsx`, the homepage composition in `page.tsx`, and shared Tailwind CSS in `globals.css`.
Reusable page sections live in `components/`, while primitive UI building blocks live in `components/ui/`.
Put shared TypeScript helpers in `lib/`; `lib/utils.ts` currently provides class-name composition.
Static images belong in `public/images/` and are referenced from the site as `/images/<name>.png`.

## Build, Test, and Development Commands

Use pnpm because this repository includes `pnpm-lock.yaml`.

```bash
pnpm dev       # Run the development server at http://localhost:3000
pnpm test      # Run the unit test suite once (Vitest)
pnpm lint      # Run ESLint across JavaScript and TypeScript files
pnpm build     # Create a production build and catch Next.js build errors
pnpm start     # Serve a completed production build
```

Run `pnpm test`, `pnpm lint`, and `pnpm build` before opening a pull request.
Unit tests use Vitest with Testing Library in jsdom and are colocated with source (`components/*.test.tsx`, `lib/utils.test.ts`); `test/setup.ts` provides shared setup.

## Coding Style & Naming Conventions

Use TypeScript and React function components.
Format with Prettier: two spaces, no tabs, and single quotes.
Use PascalCase for component files and exported component names where the existing convention allows (for example, `SiteHeader` in `components/site-header.tsx`), and kebab-case for file names.
Keep page assembly in `app/page.tsx` and move distinct homepage sections into `components/`.
Use the configured `@/` import alias for project-root imports.
Prefer Tailwind utility classes and existing design tokens from `app/globals.css` over new ad hoc CSS.
Korean user-facing copy is intentional; preserve its language and tone unless the task requests a content change.

## Linting, Security, and Configuration

`eslint.config.mjs` defines the JavaScript, TypeScript, and React lint rules.
Trunk is configured in `.trunk/trunk.yaml` for Prettier, Markdown and YAML linting, dependency and secret scanning, and image optimization checks.
Do not commit credentials or generated build output.
Keep image assets optimized and use `next/image` for local visual content where practical.

## Commit & Pull Request Guidelines

Recent history uses Conventional Commit-style prefixes, including `feat:`, `docs:`, and `chore:`.
Write concise, imperative subjects such as `feat: add reviews section`.
Keep each commit limited to one concern.
Pull requests should summarize the visible change, list validation commands run, link the relevant issue when one exists, and include screenshots for layout or visual changes.
