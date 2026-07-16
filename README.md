# ORDER ESPRESSO & BAKERY

This single-page website introduces ORDER ESPRESSO & BAKERY, an espresso bar and bakery.
It presents the menu, brand story, gallery, visit information, and customer reviews in a Korean-first brand experience.

## Tech Stack

- [Next.js](https://nextjs.org/) 16 App Router
- React 19 and TypeScript
- Tailwind CSS 4 with `tw-animate-css`
- `next/image` for local image rendering
- Vercel Analytics in production

## Getting Started

This repository uses `pnpm-lock.yaml`, so install dependencies and run the project with pnpm.

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Commands

```bash
pnpm dev    # Start the development server
pnpm test   # Run the unit test suite once
pnpm test:watch # Run the unit test suite in watch mode
pnpm lint   # Run ESLint
pnpm build  # Create a production build
pnpm start  # Run the production build
```

Run `pnpm test`, `pnpm lint`, and `pnpm build` before opening a pull request.

GitHub Actions runs the same checks for pull requests and pushes to `main`.

## Project Structure

```plaintext
app/
  layout.tsx       # Global metadata, fonts, and Analytics
  page.tsx         # Homepage section composition
  globals.css      # Tailwind imports and design tokens
components/
  hero.tsx         # Homepage sections
  menu-section.tsx
  gallery.tsx
  reviews.tsx
  ui/              # Reusable UI primitives
lib/
  utils.ts         # Shared utilities
public/images/     # Local menu and store images
```

Create new homepage sections in `components/` and compose them in `app/page.tsx`.
Manage shared color, typography, and radius tokens in `app/globals.css`.

## Content and Assets

Keep user-facing Korean copy natural and consistent with the brand's tone.
Add images to `public/images/` and reference them through `/images/<file-name>`.
Render local images with `next/image` where practical and provide meaningful `alt` text.

## Quality Checks

ESLint rules are defined in `eslint.config.mjs`.
Prettier uses two-space indentation and single quotes.
The Trunk configuration (`.trunk/trunk.yaml`) manages additional checks for Prettier, Markdown and YAML, security, and dependencies.

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
