# AGENTS.md

## Project Overview

This is a production-quality portfolio application.


The frontend uses Next.js, TypeScript, TailwindCSS,  TanStack Query, and React Hook Form.

---

# Tech Stack

Use:

- Next.js App Router
- TypeScript
- TailwindCSS
- Zustand
- TanStack Query
- React Hook Form

Do not introduce additional libraries unless there is a clear reason.

Before adding a dependency, check whether the existing stack can solve the problem.

---

# Project Structure

The project MUST use a `src/` directory.

All application source code must live inside `src/`.

Use this structure:

```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── components/
│   ├── atoms/
│   ├── molecules/
│   ├── organisms/
│   └── templates/
│
│
├── hooks/
├── lib/
├── types/
└── providers/

Do NOT create these directories at the project root:

app/
components/
hooks/
lib/
types/
providers/

They must be inside src/.

The only files/directories that should remain at the project root are configuration files and project metadata such as:

package.json
tsconfig.json
postcss.config.mjs
next.config.ts
eslint.config.mjs
.gitignore
README.md
Next.js Architecture

Use the Next.js App Router.

All routes must be created inside:

src/app/

Example:

src/app/
├── layout.tsx
├── page.tsx

Do not use the Pages Router.

Do not create:

pages/
Styling

Use TailwindCSS for component styling.

There must be ONLY ONE global stylesheet:

src/app/globals.css

Do NOT create additional global CSS files.

Do NOT create:

styles/
styles/globals.css
components/**/*.css
components/**/*.module.css

Do not use CSS Modules.

Do not create component-specific CSS files.

All global styles, CSS variables, theme variables, Tailwind theme tokens, resets, and reusable global styles must be defined in:

src/app/globals.css

Prefer Tailwind utility classes for component styling.

Theme System

The application supports:

Light mode
Dark mode


Theme switching should control the dark class on the root HTML element.

Use semantic CSS variables instead of hardcoding light/dark colors inside components.

Components should use semantic Tailwind classes such as:

bg-background
bg-card
text-foreground
text-heading
text-text-secondary
border-border
bg-primary
text-success

Avoid writing:

bg-[#FFFFFF]
bg-[#282932]
text-[#1A1D1F]

Do not use dark: classes for individual colors when the same purpose can be handled through semantic CSS variables.

Theme colors must be defined in:

src/app/globals.css

The Figma color palette should be maintained as the source color reference in:

src/lib/colors.ts

Do not duplicate color definitions throughout components.



Componentization

Pages must primarily compose components rather than contain large UI implementations.

Do NOT build reusable/shared UI directly inside page.tsx.

If a UI section is reusable, visually significant, or represents a distinct part of the page, create a component for it.

For example, do NOT create a complete navbar directly inside:

src/app/page.tsx

Instead create:

src/components/organisms/navbar/index.tsx

and use it from the page:

import { Navbar } from "@/components/organisms/navbar";

export default function Page() {
  return (
    <>
      <Navbar />

      {/* Page-specific content */}
    </>
  );
}

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
