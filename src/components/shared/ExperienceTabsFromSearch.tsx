import { useRouterState } from "@tanstack/react-router";
import { ExperienceTabs } from "./ExperienceTabs";
import type { ExperienceTimeline, ExperienceView } from "@/lib/experience";
import { parseExperienceSearch } from "@/lib/experience";

interface ExperienceTabsFromSearchProps {
  timelines: Record<ExperienceView, ExperienceTimeline>;
}

export function ExperienceTabsFromSearch({
  timelines,
}: ExperienceTabsFromSearchProps) {
  const experience = useRouterState({
    select: (state) => parseExperienceSearch(state.location.search).experience,
  });

  return (
    <ExperienceTabs
      timeline={timelines[experience]}
      id="experience"
      className="pt-8 pb-10 sm:pb-14"
    />
  );
}
