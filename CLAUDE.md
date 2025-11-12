# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Development
pnpm dev                    # Start development server on localhost:3000
pnpm scan                   # Start dev server with React Scan for performance profiling

# Production
pnpm build                  # Build optimized production bundle
pnpm start                  # Start production server (requires build first)

# Code Quality
pnpm lint                   # Run ESLint checks
```

## Architecture Overview

### Core Theme System

The application uses a sophisticated client-side theme system to prevent FOUC (Flash of Unstyled Content):

- **Pre-hydration Scripts**: `src/lib/theme-script.ts` contains inline scripts injected into `<head>` that execute before React hydration, immediately applying the correct theme class to `<html>` element
- **Theme Provider**: `src/components/theme/ThemeProvider.tsx` wraps the app with `next-themes`, managing theme state and transitions
- **Theme Persistence**: Themes are stored in localStorage with three modes: `light`, `dark`, and `system` (follows OS preference)
- **Critical Implementation Detail**: The `suppressHydrationWarning` prop on `<html>` is required because the pre-hydration script modifies the DOM before React takes over

**Why this matters**: Theme must be applied synchronously before first paint. Never remove the inline scripts from `layout.tsx` or convert them to async loads.

### Data Architecture

Static data is centralized in `/src/data/`:
- `projects.ts` - All project information with TypeScript types
- `work-history.ts` - Employment history
- `current-role.ts` - Current position details

This separation keeps content updates simple and enables easy TypeScript type checking across components.

### Layout System

- **MainLayout** (`src/components/layouts/MainLayout.tsx`): Contains global Header and page wrapper
- **PageTransition** (`src/components/layouts/PageTransition.tsx`): Framer Motion wrapper for route transitions
- **App Router Structure**: Using Next.js 15 App Router with file-based routing in `src/app/`

### Component Patterns

**Glass-morphism UI**: Most components use `backdrop-blur` effects defined in Tailwind config. The visual hierarchy relies on:
- CSS custom properties `--background` and `--foreground` for theme colors
- Tailwind's backdrop blur utilities (`backdrop-blur-xl`)
- Transparent backgrounds with subtle borders

**Animation Strategy**: Framer Motion animations are defined in `src/lib/animations.ts` and imported as reusable variants. Page transitions use `AnimatePresence` with route-based keys.

### Critical Configuration Details

**Next.js Image Optimization** (`next.config.ts`):
- Resume PDF is hosted on Google Drive, configured in `remotePatterns`
- Custom `deviceSizes` optimized for common viewport widths: `[96, 128, 256, 384]`
- Console logs stripped in production builds via compiler options

**Font Loading** (`src/app/layout.tsx`):
- Uses `next/font/local` for Geist Sans and Geist Mono
- Fonts are preloaded automatically by Next.js
- Font variables injected as CSS custom properties

### iPad/Mobile Viewport Handling

The `viewportScript` in `theme-script.ts` handles dynamic viewport heights:
- Sets CSS custom property `--vh` to address mobile browser toolbar issues
- Detects iPad devices (including Safari on macOS masquerading as desktop)
- Listens to orientation changes with debounced updates

**Why this exists**: Mobile browsers' dynamic UI (address bar, toolbars) cause `100vh` to behave inconsistently. Custom properties provide reliable full-height layouts.

### Resume Download Flow

API route at `src/app/api/resume/route.ts` handles resume downloads:
- Fetches PDF from Google Drive URL
- Sets proper headers for browser downloads
- Implements error handling for network failures

**Important**: The Google Drive URL is a direct download link, not a preview link. This requires specific Google Drive share settings.

## Development Notes

- **TypeScript Strict Mode**: Enabled in `tsconfig.json` - all new code must satisfy strict type checking
- **React Strict Mode**: Enabled in `next.config.ts` - components may mount/unmount twice in development
- **Production Optimizations**: Console logs are automatically removed, powered-by header is disabled
- **Vercel Analytics**: Only loaded in production builds (see conditional in `layout.tsx`)
- **Theme Extensions**: The app actively removes DarkReader and similar extension attributes to prevent conflicts

## Common Gotchas

1. **Theme Script Modification**: Any changes to `theme-script.ts` require testing FOUC behavior with hard refresh
2. **Data Updates**: When updating `projects.ts` or similar data files, TypeScript will validate the shape matches exported types
3. **CSS Custom Properties**: Theme colors rely on globals.css defining `--background` and `--foreground` for both light/dark modes
4. **Framer Motion**: `AnimatePresence` requires unique keys - currently using pathname for route transitions
5. **Hydration Warnings**: If you see hydration mismatches, check that server and client aren't rendering different theme classes
