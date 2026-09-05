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
import sansFontUrl from "../styles/fonts/SpaceGroteskLatin.woff2?url";
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
      {
        rel: "preload",
        href: sansFontUrl,
        as: "font",
        type: "font/woff2",
        crossOrigin: "anonymous",
      },
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
        {children}
        <Scripts />
      </body>
    </html>
  );
}
