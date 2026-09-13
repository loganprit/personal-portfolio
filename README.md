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
- PostHog analytics and Vercel Speed Insights

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

## Analytics

Copy `.env.example` to `.env` and set the public PostHog project token and ingest
host. Set the same variables in the deployment environment before building;
Vite embeds them in the client bundle. Missing configuration disables analytics,
and `bun dev` never sends events. Use a production build to verify collection.

Enable cookieless tracking in the PostHog project's Web analytics settings.
The site captures anonymous pageviews, page leaves, resume requests, email and
social-link clicks, and changes between work and education. Experience switches
do not count as additional pageviews. Session replay, error capture, person
profiles, automatic click capture, and self-driving agents are not used.

Keep the PostHog account on its free plan or set a $0 billing limit. The project
dashboard is [Portfolio analytics](https://us.posthog.com/project/607652/dashboard/2092679).

## Project structure

- `src/routes` contains TanStack Router file routes and the document shell.
- `src/components` contains reusable UI components.
- `src/data` contains portfolio data and server functions.
- `src/lib` contains shared types and utilities.
- `public` contains static assets.

Vite builds the app through Nitro for the deployment runtime. The route and
server-function code does not depend on Vercel-specific request APIs.
