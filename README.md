# Personal Portfolio V3

Logan Pritchett's portfolio, built with TanStack Start, React, TypeScript, and
Tailwind CSS.

[Visit the live site](https://loganpritchett.me)

## Features

- Full-document server rendering with streamed route data
- File-based, type-safe routing and validated search parameters
- Responsive light and dark themes without a flash on page load
- Framer Motion page and timeline animations
- Hosted PDF resume at `/resume.pdf`, with `/api/resume` retained as a stable redirect
- Vercel Analytics and Speed Insights

## Development

Node 24 or newer and Bun are required.

```bash
bun install
bun dev

bun run test
bun run lint
bun run typecheck
bun run build
```

Replace `public/resume.pdf` with the current resume PDF and redeploy. The
`/api/resume` URL remains available and redirects to the hosted file.

## Project structure

- `src/routes` contains TanStack Router file routes and the document shell.
- `src/components` contains reusable UI components.
- `src/data` contains portfolio data and server functions.
- `src/lib` contains shared types and utilities.
- `public` contains static assets.

Vite builds the app through Nitro for the deployment runtime. The route and
server-function code does not depend on Vercel-specific request APIs.
