"use client";

import { motion } from "framer-motion";
import { currentRole } from "@/data/current-role";
import { TechnologyBadge } from "@/components/ui/TechnologyBadge";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { animations } from "@/lib/animations";

/**
 * Home page component displaying welcome message and current role
 */
export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <motion.div 
        className="rounded-lg"
        {...animations.pageSection}
      >
        <h1 className="text-3xl font-bold">
          Welcome to my portfolio!
        </h1>
        <motion.p 
          className="mt-6 text-lg text-foreground/80 leading-relaxed max-w-[65ch]"
          {...animations.delayedContent}
        >
          I'm a software engineer with a background in chemical engineering, bringing a unique blend of analytical thinking and technical expertise to software development. My experience spans from process optimization in refineries to building full-stack web applications, always focusing on creating efficient, scalable solutions.
        </motion.p>
      </motion.div>

      {/* Current Role section */}
      <motion.div 
        {...animations.pageSection}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">
            Current Role
          </h2>
          <StatusBadge status="seeking" />
        </div>

        <div className="space-y-6">
          <div className="flex flex-col gap-1">
            <h3 className="text-xl font-semibold">{currentRole.title}</h3>
            <p className="text-foreground/60">
              {currentRole.company} • {currentRole.location}
            </p>
            <p className="text-sm text-foreground/40">{currentRole.period}</p>
          </div>
          
          <motion.p 
            className="text-lg text-foreground/80 leading-relaxed"
            {...animations.delayedContent}
          >
            {currentRole.description}
          </motion.p>

          <div>
            <h4 className="text-sm font-semibold text-foreground/60 mb-3">
              Technical Expertise
            </h4>
            <div className="flex flex-wrap gap-2">
              {currentRole.technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  {...animations.badge(index)}
                >
                  <TechnologyBadge {...tech} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}