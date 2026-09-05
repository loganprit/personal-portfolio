import type { CurrentRole, Education, WorkExperience } from "@/data/types";

export type ExperienceView = "work" | "education";

export interface ExperienceSearch {
  experience: ExperienceView;
}

export const motionSections = [
  "hero",
  "experience",
  "story",
  "skills",
  "contact",
] as const;

export type MotionSection = (typeof motionSections)[number];

export const motionOptions = [
  "off",
  "fade",
  "rise",
  "stagger",
  "lateral",
  "focus",
] as const;

export type MotionOption = (typeof motionOptions)[number];

export type MotionOptionSearchKey =
  | "motionHero"
  | "motionExperience"
  | "motionStory"
  | "motionSkills"
  | "motionContact";

export type MotionSearch = {
  motionSection: MotionSection;
} & Record<MotionOptionSearchKey, MotionOption>;

const motionOptionKeys = {
  hero: "motionHero",
  experience: "motionExperience",
  story: "motionStory",
  skills: "motionSkills",
  contact: "motionContact",
} satisfies Record<MotionSection, MotionOptionSearchKey>;

export function motionOptionKey(section: MotionSection): MotionOptionSearchKey {
  return motionOptionKeys[section];
}

interface RawExperienceSearch {
  experience?: string;
}

interface RawMotionSearch {
  motionSection?: string;
  motionHero?: string;
  motionExperience?: string;
  motionStory?: string;
  motionSkills?: string;
  motionContact?: string;
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

export function parseMotionSearch(search: RawMotionSearch): MotionSearch {
  const parseOption = (value: string | undefined): MotionOption =>
    motionOptions.find((option) => option === value) ?? "off";

  return {
    motionSection:
      motionSections.find((section) => section === search.motionSection) ??
      "hero",
    motionHero: parseOption(search.motionHero),
    motionExperience: parseOption(search.motionExperience),
    motionStory: parseOption(search.motionStory),
    motionSkills: parseOption(search.motionSkills),
    motionContact: parseOption(search.motionContact),
  };
}

export function parseHomeSearch(
  search: RawExperienceSearch & RawMotionSearch,
): ExperienceSearch & Partial<MotionSearch> {
  return { ...parseExperienceSearch(search), ...parseMotionSearch(search) };
}
