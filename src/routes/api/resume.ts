import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/resume")({
  server: {
    handlers: {
      GET: async () =>
        new Response(null, {
          status: 302,
          headers: {
            Location: "/resume.pdf",
            "Cache-Control": "no-cache",
          },
        }),
    },
  },
});
