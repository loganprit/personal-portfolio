import {
  Await,
  createFileRoute,
  stripSearchParams,
} from "@tanstack/react-router";
import { ExperienceTabs } from "@/components/shared/ExperienceTabs";
import { FlipCard } from "@/components/shared/FlipCard";
import { SiteFooter } from "@/components/shared/SiteFooter";
import { SplitHero } from "@/components/shared/SplitHero";
import { getExperienceTimeline } from "@/data/experience.functions";
import { personal } from "@/data/personal";
import { parseExperienceSearch } from "@/lib/experience";

export const Route = createFileRoute("/")({
  validateSearch: parseExperienceSearch,
  loaderDeps: ({ search }) => ({ experience: search.experience }),
  search: {
    middlewares: [stripSearchParams({ experience: "work" })],
  },
  ssr: true,
  loader: ({ deps }) => ({
    timeline: getExperienceTimeline({ data: deps }),
  }),
  component: Home,
});

function Home() {
  const { timeline } = Route.useLoaderData();
  const { experience } = Route.useSearch();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="overflow-hidden">
        <SplitHero id="hero">
          <FlipCard />
        </SplitHero>

        <Await
          key={experience}
          promise={timeline}
          fallback={<ExperienceFallback />}
        >
          {(data) => (
            <ExperienceTabs
              timeline={data}
              id="experience"
              className="pt-8 pb-10 sm:pb-14"
            />
          )}
        </Await>

        <section id="skills" className="py-10 sm:py-14">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Skills &amp; Technologies
            </h2>
            <div className="flex flex-wrap gap-2.5">
              {personal.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-4 pb-16 pt-10 sm:px-6 sm:pt-14">
          <SiteFooter />
        </div>
      </main>
    </div>
  );
}

function ExperienceFallback() {
  return (
    <section
      id="experience"
      aria-busy="true"
      aria-label="Loading experience"
      className="pt-8 pb-10 sm:pb-14"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="h-11 animate-pulse rounded-full bg-muted motion-reduce:animate-none" />
        <div className="mt-6 h-72 animate-pulse rounded-2xl bg-muted motion-reduce:animate-none" />
      </div>
    </section>
  );
}
