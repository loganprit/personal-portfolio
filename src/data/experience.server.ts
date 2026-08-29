import { currentRole } from "./current-role";
import { education } from "./education";
import { experiences } from "./work-history";
import type { ExperienceTimeline, ExperienceView } from "@/lib/experience";

export function getTimeline(experience: ExperienceView): ExperienceTimeline {
  return experience === "education"
    ? { experience, entries: education }
    : { experience, currentRole, entries: experiences };
}
