import { useRouter, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ExperienceTabs } from "./ExperienceTabs";
import type { ExperienceTimeline, ExperienceView } from "@/lib/experience";
import { parseExperienceSearch } from "@/lib/experience";

interface ExperienceTabsFromSearchProps {
  timelines: Record<ExperienceView, ExperienceTimeline>;
}

export function ExperienceTabsFromSearch({
  timelines,
}: ExperienceTabsFromSearchProps) {
  const router = useRouter();
  const initialExperience = useRouterState({
    select: (state) => parseExperienceSearch(state.location.search).experience,
  });
  const [experience, setExperience] = useState(initialExperience);

  useEffect(
    () =>
      router.subscribe("onResolved", ({ toLocation }) => {
        setExperience(parseExperienceSearch(toLocation.search).experience);
      }),
    [router],
  );

  return (
    <ExperienceTabs
      timeline={timelines[experience]}
      id="experience"
      className="pt-8 pb-10 sm:pb-14"
    />
  );
}
