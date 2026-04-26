import { personal } from "@/data/personal";
import { SplitHero } from "@/components/shared/SplitHero";
import { FlipCard } from "@/components/shared/FlipCard";
import { ExperienceTabs } from "@/components/shared/ExperienceTabs";
import { SiteFooter } from "@/components/shared/SiteFooter";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="overflow-hidden">
        {/* ── Hero ──────────────────────────────────────────── */}
        <SplitHero id="hero">
          <FlipCard />
        </SplitHero>

        {/* ── Experience ────────────────────────────────────── */}
        <ExperienceTabs id="experience" className="pt-8 pb-10 sm:pb-14" />

        {/* ── Skills ────────────────────────────────────────── */}
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
