import type { CurrentRole, Education, WorkExperience } from "@/data/types";

export type ExperienceView = "work" | "education";

export interface ExperienceSearch {
  experience: ExperienceView;
}

interface RawExperienceSearch {
  experience?: string;
}

export type ExperienceTimeline =
  | {
      experience: "work";
      currentRole: CurrentRole;
      entries: WorkExperience[];
    }
  | { experience: "education"; entries: Education[] };

export function parseExperienceSearch(
  search: RawExperienceSearch,
): ExperienceSearch {
  return {
    experience: search.experience === "education" ? "education" : "work",
  };
}
