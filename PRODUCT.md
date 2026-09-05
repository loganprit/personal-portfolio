# Product

## Platform

web

## Users

The primary users are recruiters, hiring managers, and engineering leaders evaluating Logan Pritchett for software engineering roles. They need to judge his fit and credibility quickly, then decide whether to review his resume or start a conversation.

## Product Purpose

The portfolio gives hiring teams a concise, first-party view of Logan's engineering experience, skills, and results while preserving the personal history, faith, and interests that explain who he is. It succeeds when a visitor can understand his professional profile, trust the supporting details, and contact him without friction.

## Positioning

The portfolio connects Logan's quantified engineering work with the unconventional path behind it: chemical engineering research and refinery work, a move into full-stack software, and a current bias toward backend systems, developer tooling, Apple-platform projects, and agents. It presents career evidence and personal context as one account rather than reducing him to a resume.

## Operating Context

Visitors scan a short introduction, review work and education timelines, inspect skills and quantified achievements, open the canonical resume, follow professional profiles, or send a message. The site is public, responsive, and supports light and dark themes.

## Capabilities and Constraints

- Keep Logan's name, current role, work history, education, skills, and personal details grounded in the repository's source data.
- Keep resume links pointed at `/api/resume`; that route owns the upstream document and response headers.
- Preserve the direct contact path and canonical GitHub and LinkedIn profiles.
- Preserve responsive behavior, server rendering, no-flash theme loading, reduced-motion support, and keyboard access.
- Do not invent employers, projects, testimonials, benchmarks, credentials, or results.

## Brand Commitments

Use Logan's direct, first-person voice. Professional evidence comes first, but the site must keep his personal story, Christian faith, language learning, and interest in AI and Apple software visible. The name `Logan Pritchett` and domain `loganpritchett.me` are fixed.

## Evidence on Hand

- Professional and personal copy in `src/data/personal.ts`, `src/data/current-role.ts`, `src/data/work-history.ts`, and `src/data/education.ts`.
- Quantified work results in `src/data/work-history.ts`.
- Resume delivery through `src/routes/api/resume.ts`.
- A profile photo at `public/images/profile.jpg` and employer or institution logos under `public/logos/`.
- Canonical GitHub, LinkedIn, and email links in `src/data/personal.ts`.
- No testimonials, client logos, press, or case studies are currently on hand. Future work must not fabricate them.

## Product Principles

- Make professional fit clear within a quick scan.
- Support claims with specific roles, results, and source-backed details.
- Show the person behind the work without burying the career evidence.
- Keep resume review and contact one step away.
