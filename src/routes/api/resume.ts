import { createFileRoute } from "@tanstack/react-router";

const GOOGLE_DRIVE_URL =
  "https://docs.google.com/uc?export=download&id=1moEKcpXt_1K86KUhq8jJZMQgSDrhZoUe";

export const Route = createFileRoute("/api/resume")({
  server: {
    handlers: {
      GET: async () => {
        try {
          const response = await fetch(GOOGLE_DRIVE_URL);

          if (!response.ok || !response.body) {
            return new Response("Failed to fetch resume from upstream source", {
              status: 502,
            });
          }

          return new Response(response.body, {
            headers: {
              "Content-Type":
                response.headers.get("content-type") ?? "application/pdf",
              "Content-Disposition": "inline; filename=resume.pdf",
              "Cache-Control":
                "public, max-age=3600, stale-while-revalidate=86400",
              "X-Content-Type-Options": "nosniff",
              "Accept-Ranges": "bytes",
            },
          });
        } catch (error) {
          console.error("Failed to fetch resume:", error);
          return new Response("Failed to fetch resume", { status: 502 });
        }
      },
    },
  },
});
