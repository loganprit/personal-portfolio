import { createFileRoute } from "@tanstack/react-router";
import { personal } from "@/data/personal";

const GOOGLE_DRIVE_URL =
  "https://docs.google.com/uc?export=download&id=1moEKcpXt_1K86KUhq8jJZMQgSDrhZoUe";

const RESUME_ERROR = `Unable to load the resume. Refresh to try again, or email ${personal.email} for a copy.`;

export const Route = createFileRoute("/api/resume")({
  server: {
    handlers: {
      GET: async () => {
        try {
          const response = await fetch(GOOGLE_DRIVE_URL);

          if (!response.ok || !response.body) {
            return new Response(RESUME_ERROR, {
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
          return new Response(RESUME_ERROR, { status: 502 });
        }
      },
    },
  },
});
