import type { Metadata } from "next";
import localFont from "next/font/local";
import { Caveat } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { themeScript } from "@/lib/theme-script";
import { PageTransition } from "@/components/shared/PageTransition";
import { SiteNav } from "@/components/shared/SiteNav";
import { ReactScanProbe } from "@/components/dev/ReactScanProbe";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  weight: ["400", "700"],
});

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Logan Pritchett - Software Engineer",
    description: "Personal portfolio and professional experience",
    other: {
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover, maximum-scale=1"
        />
        <meta name="darkreader-lock" />
        <meta name="color-scheme" content="light dark" />
        <script
          dangerouslySetInnerHTML={{
            __html: themeScript,
          }}
        />
        <link rel="preconnect" href="https://docs.google.com" />
        <link rel="dns-prefetch" href="https://docs.google.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${caveat.variable} antialiased`}
      >
        {process.env.NODE_ENV === "development" && (
          <Script
            src="https://unpkg.com/react-scan@0.5.3/dist/auto.global.js"
            strategy="beforeInteractive"
          />
        )}
        <ThemeProvider>
          {process.env.NODE_ENV === "development" && <ReactScanProbe />}
          <SiteNav />
          <PageTransition>{children}</PageTransition>
          {process.env.NODE_ENV === "production" && (
            <>
              <Analytics />
              <SpeedInsights />
            </>
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}
