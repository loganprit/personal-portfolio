import {
  Await,
  createFileRoute,
  stripSearchParams,
} from "@tanstack/react-router";
import { ArrowRight, FileText } from "lucide-react";
import { ExperienceTabsFromSearch } from "@/components/shared/ExperienceTabsFromSearch";
import { SiteFooter } from "@/components/shared/SiteFooter";
import { SocialLinks } from "@/components/shared/SocialLinks";
import { currentRole } from "@/data/current-role";
import { getExperienceTimelines } from "@/data/experience.functions";
import { personal } from "@/data/personal";
import { experiences, selectedFloqastOutcomes } from "@/data/work-history";
import { parseExperienceSearch } from "@/lib/experience";

const floqastEvidence =
  experiences
    .find(({ company }) => company === currentRole.company)
    ?.achievements.slice(1, 3) ?? [];

export const Route = createFileRoute("/")({
  validateSearch: parseExperienceSearch,
  search: {
    middlewares: [stripSearchParams({ experience: "work" })],
  },
  ssr: true,
  staleTime: Infinity,
  loader: () => {
    return { timelines: getExperienceTimelines() };
  },
  component: Home,
});

function Home() {
  const { timelines } = Route.useLoaderData();

  return (
    <div className="field-manual min-h-screen">
      <main>
        <section id="hero" className="manual-hero" aria-labelledby="name">
          <div className="manual-sheet">
            <div className="manual-paper" aria-hidden="true" />
            <div className="manual-copy">
              <p className="manual-stamp" aria-hidden="true">
                Field manual
                <span>LP—01</span>
              </p>
              <h1 id="name" className="manual-name">
                <span>Logan</span>
                <span>Pritchett</span>
              </h1>
              <p className="manual-role">
                {currentRole.title} · {currentRole.company}
              </p>
              <p className="manual-thesis">{personal.shortBio}</p>
              <p className="manual-evidence-label">Selected outcomes</p>
              <ul
                className="manual-evidence manual-evidence--full"
                aria-label="Selected FloQast results"
              >
                {floqastEvidence.map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>
              <ul
                className="manual-evidence manual-evidence--compact"
                aria-label="Selected FloQast results"
              >
                {selectedFloqastOutcomes.map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>
            </div>

            <figure className="manual-portrait">
              <img
                src={personal.avatar}
                alt="Logan Pritchett smiling in a blue-lit room"
                width={953}
                height={953}
                fetchPriority="high"
              />
            </figure>

            <nav className="manual-routes" aria-label="Portfolio routes">
              <a className="manual-route-desktop" href="#experience">
                <span>01</span>
                Work
                <ArrowRight aria-hidden="true" />
              </a>
              <a className="manual-route-desktop" href="#story">
                <span>02</span>
                Story
                <ArrowRight aria-hidden="true" />
              </a>
              <a className="manual-route-desktop" href="#contact">
                <span>03</span>
                Contact
                <ArrowRight aria-hidden="true" />
              </a>
              <a className="manual-route-desktop" href={personal.resumeUrl}>
                <FileText aria-hidden="true" />
                Resume
              </a>
              <a
                className="manual-route-mobile manual-route-primary"
                href={personal.resumeUrl}
              >
                <FileText aria-hidden="true" />
                View resume
              </a>
              <a
                className="manual-route-mobile"
                href={`mailto:${personal.email}`}
              >
                Email Logan
                <ArrowRight aria-hidden="true" />
              </a>
            </nav>
          </div>
        </section>

        <div className="manual-sections">
          <Await promise={timelines} fallback={<ExperienceFallback />}>
            {(data) => (
              <ExperienceTabsFromSearch
                timelines={data}
                className="manual-timeline"
              />
            )}
          </Await>

          <section id="story" className="manual-section story-sheet">
            <header className="manual-section-heading">
              <h2>The route here wasn’t linear.</h2>
              <span>Orange, Texas · Chemical engineering to software</span>
            </header>
            <div className="story-ledger">
              {personal.bio.map((item) => (
                <article key={item.label}>
                  <h3>{item.label}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="skills" className="manual-section skills-sheet">
            <header className="manual-section-heading">
              <h2>Tools I reach for.</h2>
            </header>
            <ul className="manual-skills">
              {personal.skills.map((skill, index) => (
                <li key={skill}>
                  <span aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {skill}
                </li>
              ))}
            </ul>
          </section>

          <section id="contact" className="manual-section contact-sheet">
            <div>
              <h2>Have a hard problem worth solving?</h2>
              <p>
                I’m always interested in thoughtful engineering work, useful
                tools, and the people building them.
              </p>
            </div>
            <div className="manual-contact-actions">
              <a href={`mailto:${personal.email}`}>
                Email Logan
                <ArrowRight aria-hidden="true" />
              </a>
              <SocialLinks />
            </div>
          </section>

          <SiteFooter className="manual-footer" />
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
      className="manual-section manual-loading"
    >
      <p>Opening work plates…</p>
    </section>
  );
}
