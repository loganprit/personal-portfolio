interface Technology {
  name: string;
  className?: string;
}

interface WorkExperience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: Technology[];
}

/**
 * Individual technology badge component
 */
function TechnologyBadge({ name, className = "" }: Technology) {
  return (
    <span className={`px-4 py-1.5 rounded-full bg-foreground/10 text-sm ${className}`}>
      {name}
    </span>
  );
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
  technologies 
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
              {achievement}
            </li>
          ))}
        </ul>
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
 * Work History page component displaying professional experience
 */
export default function WorkHistoryPage() {
  const experiences: WorkExperience[] = [
    {
      title: "Full Stack Engineer",
      company: "Company Name",
      location: "Remote",
      period: "NOVEMBER 2021 — PRESENT",
      description: "Description of role and responsibilities.",
      achievements: [
        "Achievement 1",
        "Achievement 2",
        "Achievement 3",
        "Achievement 4"
      ],
      technologies: [
        { name: "Technology 1" },
        { name: "Technology 2" },
        { name: "Technology 3" },
        { name: "Technology 4" }
      ]
    },
    {
      title: "Software Engineer", 
      company: "Previous Company Name",
      location: "City, State",
      period: "JANUARY 2020 — OCTOBER 2021",
      description: "Description of role and responsibilities.",
      achievements: [
        "Achievement 1",
        "Achievement 2",
        "Achievement 3"
      ],
      technologies: [
        { name: "Technology 1" },
        { name: "Technology 2" },
        { name: "Technology 3" },
        { name: "Technology 4" },
        { name: "Technology 5" }
      ]
    }
  ];

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-2xl font-bold">Work History</h1>
        <p className="mt-2 text-foreground/60">
          My professional journey and experience in software engineering.
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
