/**
 * Work History data store
 * @description Collection of all work experiences to be displayed on the work history page
 */
export const experiences: WorkExperience[] = [
  {
        title: "Software Engineer Trainee",
        company: "Chegg Skills",
        location: "Remote",
        period: "OCTOBER 2023 — OCTOBER 2024",
        description: "Acquired comprehensive knowledge of industry best practices and software development standards, focusing on full-stack JavaScript development, RESTful APIs, algorithms, and data structures.",
        achievements: [
          "[Periodic Tables](https://github.com/loganprit/periodic-tables)",
          "[WeLoveMovies](https://github.com/loganprit/we-love-movies)", 
          "[Flashcard-o-Matic](https://github.com/loganprit/flashcard-o-matic)",
          "[Decoder Ring](https://github.com/loganprit/decoder-ring)"
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

// Type definitions
interface Technology {
  name: string;
  className?: string;
}

interface WorkUpdates {
  completed?: string[];
  planned?: string[];
}

export type WorkExperience = {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: Technology[];
  updates?: WorkUpdates;
};