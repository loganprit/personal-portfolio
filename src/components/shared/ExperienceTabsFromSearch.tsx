import { useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { ExperienceTabs } from "./ExperienceTabs";
import type { ExperienceTimeline, ExperienceView } from "@/lib/experience";
import { parseExperienceSearch } from "@/lib/experience";

interface ExperienceTabsFromSearchProps {
  timelines: Record<ExperienceView, ExperienceTimeline>;
}

export function ExperienceTabsFromSearch({
  timelines,
}: ExperienceTabsFromSearchProps) {
  const initialExperience = useRouterState({
    select: (state) => parseExperienceSearch(state.location.search).experience,
  });
  const [experience, setExperience] = useState(initialExperience);

  return (
    <ExperienceTabs
      timeline={timelines[experience]}
      onTabChange={setExperience}
      id="experience"
      className="pt-8 pb-10 sm:pb-14"
    />
  );
}
