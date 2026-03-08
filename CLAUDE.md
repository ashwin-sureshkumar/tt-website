# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Tru-Tech Precision Inc. marketing website — a Next.js app with Tailwind CSS v4. The original Figma file: https://www.figma.com/design/FUFeZDYTpBYjHbgl2Du2jL/Tru-Tech-Website

## Commands

- `npm install` — install dependencies (use `--legacy-peer-deps` if needed)
- `npm run dev` — start dev server on port 3000
- `npm run build` — production build (static export to `out/`)
- `npm start` — serve production build

No test runner or linter is configured.

## Architecture

- **Stack**: Next.js 15 (App Router) + React 19 + TypeScript + Tailwind CSS v4
- **Routing**: Hybrid — home page (`/`) with anchor navigation for sections, separate `/contact` page
- **Pages**: `app/page.tsx` (home), `app/contact/page.tsx` (contact), `app/layout.tsx` (root layout)
- **Components**: `src/components/` contains page sections (Header, Hero, Services, About, QualityAssurance, Gallery, Contact, Footer)
- **UI primitives**: `src/components/ui/` contains shadcn/ui components (Radix UI-based)
- **Path alias**: `@` maps to `src/` (configured in `tsconfig.json`)
- **Utility function**: `src/lib/utils.ts` exports `cn()` for merging Tailwind classes
- **Assets**: Static images in `public/assets/` (PNGs from Figma export), referenced as `/assets/filename.png`
- **Styling**: Tailwind CSS v4 via `@import "tailwindcss"` in `app/globals.css` with PostCSS pipeline. Brand color `#17135F` defined as `--color-brand` theme variable.
- **Static export**: `next.config.ts` uses `output: "export"` for static site generation
