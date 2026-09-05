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
          const response = await fetch(GOOGLE_DRIVE_URL, {
            signal: AbortSignal.timeout(10_000),
          });
          const contentType = response.headers
            .get("content-type")
            ?.split(";")[0]
            .trim()
            .toLowerCase();

          if (
            !response.ok ||
            !response.body ||
            (contentType !== "application/pdf" &&
              contentType !== "application/octet-stream")
          ) {
            await response.body?.cancel();
            return new Response(RESUME_ERROR, {
              status: 502,
              headers: { "Cache-Control": "no-store" },
            });
          }

          return new Response(response.body, {
            headers: {
              "Content-Type": "application/pdf",
              "Content-Disposition": "inline; filename=resume.pdf",
              "Cache-Control":
                "public, max-age=3600, stale-while-revalidate=86400",
              "X-Content-Type-Options": "nosniff",
            },
          });
        } catch (error) {
          console.error("Failed to fetch resume:", error);
          return new Response(RESUME_ERROR, {
            status: 502,
            headers: { "Cache-Control": "no-store" },
          });
        }
      },
    },
  },
});
