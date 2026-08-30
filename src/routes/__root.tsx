import type { ReactNode } from "react";
import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
} from "@tanstack/react-router";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { PageTransition } from "@/components/shared/PageTransition";
import { SiteNav } from "@/components/shared/SiteNav";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { themeScript } from "@/lib/theme-script";
import "@fontsource/caveat/latin-400.css";
import "@fontsource/caveat/latin-700.css";
import "@fontsource/courier-prime/latin-400.css";
import "@fontsource/courier-prime/latin-700.css";
import "../styles/globals.css";

export const Route = createRootRoute({
  ssr: true,
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0, viewport-fit=cover",
      },
      { name: "darkreader-lock", content: "" },
      { name: "color-scheme", content: "light dark" },
      {
        name: "description",
        content: "Personal portfolio and professional experience",
      },
      { title: "Logan Pritchett - Software Engineer" },
    ],
    links: [
      { rel: "icon", href: "/favicon.ico" },
      { rel: "preconnect", href: "https://docs.google.com" },
      { rel: "dns-prefetch", href: "https://docs.google.com" },
    ],
  }),
  component: RootLayout,
  shellComponent: RootDocument,
});

function RootLayout() {
  return (
    <ThemeProvider>
      <SiteNav />
      <PageTransition>
        <Outlet />
      </PageTransition>
      {import.meta.env.PROD && (
        <>
          <Analytics />
          <SpeedInsights />
        </>
      )}
    </ThemeProvider>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <HeadContent />
      </head>
      <body className="antialiased">
        <div
          hidden
          dangerouslySetInnerHTML={{
            __html:
              "<!-- THESIS: A precise, personally owned cobalt field manual replaces the generic developer landing page. OWN-WORLD: Navy spine, folded paper, cobalt rules, steel tabs, registration marks, and one full-color portrait plate. STORY: Visitors meet Logan, understand his backend bias, inspect sourced experience, then open his resume or contact him. FIRST VIEWPORT: A fixed spine anchors an open dossier; oversized identity fills the left sheet, the portrait overlaps the right fold, and four routes close the lower third. FORM: Foldout Dossier, third composition in the Cobalt Field Manual set; concept seed key `assigned`. FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance -->",
          }}
        />
        {children}
        <Scripts />
      </body>
    </html>
  );
}
