import { useSearch } from "@tanstack/react-router";
import { ExperienceTabs } from "./ExperienceTabs";
import type { ExperienceTimeline, ExperienceView } from "@/lib/experience";

interface ExperienceTabsFromSearchProps {
  timelines: Record<ExperienceView, ExperienceTimeline>;
}

export function ExperienceTabsFromSearch({
  timelines,
}: ExperienceTabsFromSearchProps) {
  const { experience } = useSearch({ from: "/" });

  return (
    <ExperienceTabs
      timeline={timelines[experience]}
      id="experience"
      className="pt-8 pb-10 sm:pb-14"
    />
  );
}
