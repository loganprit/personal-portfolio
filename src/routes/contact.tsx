import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  beforeLoad: () => {
    throw redirect({
      to: "/",
      search: { experience: "work" },
      hash: "contact",
      statusCode: 308,
    });
  },
});
