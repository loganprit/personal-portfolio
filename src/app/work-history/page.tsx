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
      title: "Software Engineer Trainee",
      company: "Chegg Skills",
      location: "Remote",
      period: "OCTOBER 2023 — OCTOBER 2024",
      description: "Acquired comprehensive knowledge of industry best practices and software development standards, focusing on full-stack JavaScript development, RESTful APIs, algorithms, and data structures.",
      achievements: [
        "Project 1 (Add link to project 1)",
        "Project 2 (Add link to project 2)",
        "Project 3 (Add link to project 3)",
        "Project 4 (Add link to project 4)"
      ],
      technologies: [
        { name: "JavaScript" },
        { name: "React" },
        { name: "HTML" },
        { name: "CSS" },
        { name: "Bootstrap" },
        { name: "Node.js" },
        { name: "Express" },
        { name: "RESTful APIs" },
        { name: "PostgreSQL" },
        { name: "Mocha" },
        { name: "Chai" },
        { name: "Knex" },
        { name: "Git" },
        { name: "GitHub" },
        { name: "Postman" },
        { name: "Node Package Manager" },
        { name: "Repl.it" },
        { name: "Render" },
        { name: "Visual Studio Code" }
      ]
    },
    {
      title: "Control Systems Engineering Intern",
      company: "Valero St. Charles Refinery",
      location: "Norco, LA", 
      period: "MAY 2021 — AUGUST 2021",
      description: "Contributed to optimizing control systems and enhancing operational efficiency at a major refinery. Responsibilities included identifying opportunities for system standardization, designing and implementing control schemes to improve reliability, updating control graphics for improved operational clarity, and developing code to standardize alarm audits. Also supported various tests and troubleshooting efforts within the control systems department.",
      achievements: [
        "Resolved 1,300+ critical alarm issues across 75,000 DCS blocks to prevent system failures",
        "Implemented DCS graphics for pH and speed control optimization in renewable diesel",
        "Automated alarm audits via VBA code to standardize tag formatting and improve efficiency"
      ],
      technologies: [
        { name: "Microsoft Excel VBA" },
        { name: "Aspen DMC" },
        { name: "Foxboro I/A" },
        { name: "Microsoft Visio" },
        { name: "Aspen Process Explorer" },
        { name: "ArchestrA" }
      ]
    },
    {
        title: "Process Engineering Intern",
        company: "Valero Meraux Refinery", 
        location: "Meraux, LA",
        period: "MAY 2020 — AUGUST 2020",
        description: "Led efforts to improve process efficiency and wastewater treatment control through multi-department collaboration on critical projects. Key tasks included enhancing system modeling, developing tools for real-time monitoring, and optimizing chemical usage tracking to control costs. Worked closely with vendors and unit supervisors to reduce waste, supported compliance efforts, and contributed to project documentation and coordination across engineering disciplines.",
        achievements: [
          "Led multi-phase project improving caustic control in the wastewater treatment plant",
          "Coordinated with multiple departments to manage change requests (MOCs, RACs, EWRs)",
          "Developed real-time monitoring systems by integrating PI ProcessBook tags with Excel, improving control and safety measures for fired heaters",
          "Automated chemical usage tracking through a detailed spreadsheet, optimizing dosage, cost analysis, and reporting for refinery-wide chemical management"
        ],
        technologies: [
          { name: "Microsoft Excel" },
          { name: "PI ProcessBook" },
          { name: "Petro-SIM" },
        ]
      },
    {
      title: "Research Apprentice",
      company: "Energy Institute - University of Louisiana at Lafayette",
      location: "Lafayette, LA",
      period: "AUGUST 2018 — MAY 2022",
      description: "Conducted research in a high-throughput laboratory environment, focusing on bio-oil catalytic conversion studies. Managed advanced analytical instrumentation while collaborating with faculty, staff and students on various research initiatives. Led investigations into optimizing zeolite cracking conditions for bio-fuel production.",
      achievements: [
        "Led operation and maintenance of GC/MS and Shimadzu TOC analytical instruments",
        "Headed research project on bio-oil catalytic conversion using proprietary GC/MS reactor integration",
        "Developed and presented research findings through collaborative poster presentations",
        "Conducted zeolite cracking optimization studies to determine ideal production parameters"
      ],
      technologies: [
        { name: "Gas Chromatography/Mass Spectrometry" },
        { name: "Total Organic Carbon Analyzer" },
        { name: "Catalytic Cracking Reactor" },
        { name: "Laboratory Information Management Systems" }
      ]
    },
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
