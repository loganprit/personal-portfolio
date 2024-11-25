"use client";

import { motion } from "framer-motion";
import { experiences, type WorkExperience } from "@/data/work-history";
import { TechnologyBadge } from "@/components/ui/TechnologyBadge";
import { animations } from "@/lib/animations";

/**
 * Individual achievement component that handles both regular text and hyperlinks
 */
function Achievement({ achievement }: { achievement: string }) {
  // Check if the achievement contains a markdown link pattern [text](url)
  const linkMatch = achievement.match(/\[(.*?)\]\((.*?)\)/);
  
  if (linkMatch) {
    const [text, url] = linkMatch;
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
 * Individual work experience card component with animations
 */
function WorkCard({ 
  title, 
  company,
  location, 
  period, 
  description, 
  achievements,
  technologies,
  updates,
  index 
}: WorkExperience & { index: number }) {
  return (
    <motion.div {...animations.cardList(index)}>
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
              <li 
                key={index} 
                className="text-foreground/80 leading-relaxed"
              >
                <Achievement achievement={achievement} />
              </li>
            ))}
          </ul>
        )}

        {updates && (
          <div className="mt-4 space-y-4">
            {updates.completed && updates.completed.length > 0 && (
              <motion.div {...animations.updates.container}>
                <h4 className="text-sm font-semibold text-foreground/60 mb-2">Completed Updates</h4>
                <ul className="list-disc list-inside space-y-1">
                  {updates.completed.map((update, index) => (
                    <motion.li 
                      key={index}
                      className="text-foreground/80 text-sm"
                      {...animations.updates.item(index)}
                    >
                      {update}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
            
            {updates.planned && updates.planned.length > 0 && (
              <motion.div {...animations.updates.container}>
                <h4 className="text-sm font-semibold text-foreground/60 mb-2">Planned Updates</h4>
                <ul className="list-disc list-inside space-y-1">
                  {updates.planned.map((update, index) => (
                    <motion.li 
                      key={index}
                      className="text-foreground/80 text-sm"
                      {...animations.updates.item(index)}
                    >
                      {update}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>
        )}

        <div className="mt-6 flex flex-wrap gap-2">
          {technologies.map((tech, techIndex) => (
            <motion.div
              key={tech.name}
              {...animations.badge(techIndex)}
            >
              <TechnologyBadge {...tech} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/**
 * Work history page component displaying multiple work experience cards with animations
 */
export default function WorkHistoryPage() {
  return (
    <div className="flex flex-col gap-8">
      <motion.div 
        className="rounded-lg"
        {...animations.pageSection}
      >
        <h1 className="text-3xl font-bold">Work History</h1>
        <motion.p 
          className="mt-6 text-lg text-foreground/80 leading-relaxed max-w-[65ch]"
          {...animations.delayedContent}
        >
          A comprehensive overview of my professional experience and achievements.
        </motion.p>
      </motion.div>

      <div className="flex flex-col gap-6">
        {experiences.map((experience, index) => (
          <WorkCard 
            key={`${experience.company}-${experience.period}`} 
            {...experience} 
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
