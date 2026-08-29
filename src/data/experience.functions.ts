import { createServerFn } from "@tanstack/react-start";
import { getTimeline } from "./experience.server";

export const getExperienceTimelines = createServerFn({ method: "GET" }).handler(
  () => ({
    work: getTimeline("work"),
    education: getTimeline("education"),
  }),
);
