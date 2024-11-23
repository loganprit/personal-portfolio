import { experiences, type WorkExperience } from "@/data/work-history";
import { TechnologyBadge } from "@/components/ui/TechnologyBadge";

/**
 * Individual achievement component that handles both regular text and hyperlinks
 */
function Achievement({ achievement }: { achievement: string }) {
  // Check if the achievement contains a markdown link pattern [text](url)
  const linkMatch = achievement.match(/\[(.*?)\]\((.*?)\)/);
  
  if (linkMatch) {
    const [_, text, url] = linkMatch;
    return (
      <a 
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-foreground/80 hover:text-foreground transition-colors underline"
      >
        {text}
      </a>
    );
  }
  
  return <span className="text-foreground/80">{achievement}</span>;
}

/**
 * Individual work experience card component
 */
function WorkCard({ 
  title, 
  company,
  location, 
  period, 
  description, 
  achievements,
  technologies,
  updates 
}: WorkExperience) {
  return (
    <div className="rounded-lg p-6 transition-colors hover:bg-foreground/5">
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-semibold">{title}</h3>
          </div>
          <p className="text-foreground/60 mt-1">{company} • {location}</p>
          <p className="text-sm text-foreground/40 mt-0.5">{period}</p>
        </div>
      </div>
      
      <p className="mt-4 text-foreground/80 leading-relaxed">
        {description}
      </p>

      {achievements.length > 0 && (
        <ul className="mt-4 list-disc list-inside space-y-2">
          {achievements.map((achievement, index) => (
            <li key={index} className="text-foreground/80 leading-relaxed">
              <Achievement achievement={achievement} />
            </li>
          ))}
        </ul>
      )}

      {updates && (
        <div className="mt-4 space-y-4">
          {updates.completed && updates.completed.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-foreground/60 mb-2">Completed Updates</h4>
              <ul className="list-disc list-inside space-y-1">
                {updates.completed.map((update, index) => (
                  <li key={index} className="text-foreground/80 text-sm">{update}</li>
                ))}
              </ul>
            </div>
          )}
          
          {updates.planned && updates.planned.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-foreground/60 mb-2">Planned Updates</h4>
              <ul className="list-disc list-inside space-y-1">
                {updates.planned.map((update, index) => (
                  <li key={index} className="text-foreground/80 text-sm">{update}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      <div className="mt-6 flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <TechnologyBadge key={tech.name} {...tech} />
        ))}
      </div>
    </div>
  );
}

/**
 * Work history page component displaying multiple work experience cards
 */
export default function WorkHistoryPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-2xl font-bold">Work History</h1>
        <p className="mt-2 text-foreground/60">
          A comprehensive overview of my professional experience and achievements.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {experiences.map((experience) => (
          <WorkCard 
            key={`${experience.company}-${experience.period}`} 
            {...experience} 
          />
        ))}
      </div>
    </div>
  );
}

