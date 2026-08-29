import { createServerFn } from "@tanstack/react-start";
import { getTimeline } from "./experience.server";
import type { ExperienceSearch, ExperienceTimeline } from "@/lib/experience";
import { parseExperienceSearch } from "@/lib/experience";

export const getExperienceTimeline = createServerFn({ method: "GET" })
  .validator((data: ExperienceSearch) => parseExperienceSearch(data))
  .handler(({ data }): ExperienceTimeline => getTimeline(data.experience));
