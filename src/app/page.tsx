"use client";

import { motion } from "framer-motion";
import { currentRole } from "@/data/current-role";
import { TechnologyBadge } from "@/components/ui/TechnologyBadge";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { animations } from "@/lib/animations";
import { LuLanguages } from "react-icons/lu";
import { FiCpu, FiCode, FiActivity, FiBookOpen } from "react-icons/fi";
import { FaCross } from "react-icons/fa";

/**
 * Home page component displaying welcome message and current role
 */
export default function Home() {
  return (
    <div className="flex flex-col gap-8 max-w-full">
      <motion.div 
        className="rounded-lg"
        {...animations.pageSection}
      >
        <h1 className="text-3xl font-bold text-center landscape:text-left">
          Welcome to my portfolio!
        </h1>
      </motion.div>

      {/* About Me Section */}
      <motion.div 
        {...animations.pageSection}
      >
        <h2 className="text-2xl font-bold mb-6 text-center landscape:text-left">
          About Me
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 overflow-hidden">
          {/* Developer Section */}
          <div className="flex flex-col h-full min-w-0">
            <h3 className="text-xl font-semibold mb-4">As a Developer</h3>
            <div className="flex flex-col gap-4">
              {/* Full Stack Development Section */}
              <div className="space-y-2 pl-0 p-4 rounded-lg bg-foreground/5">
                <div className="flex items-center gap-2">
                  <FiCode size={20} />
                  <h4 className="font-semibold">Full Stack Development</h4>
                </div>
                <p className="text-sm text-foreground/80">
                  I specialize in building efficient web applications using React, Node.js, and Express.js, with a focus on clean, maintainable code.
                </p>
              </div>

              {/* Engineering Background Section */}
              <div className="space-y-2 pl-0 p-4 rounded-lg bg-foreground/5">
                <div className="flex items-center gap-2">
                  <FiActivity size={20} />
                  <h4 className="font-semibold">Engineering Background</h4>
                </div>
                <p className="text-sm text-foreground/80">
                  My chemical engineering background brings unique analytical and problem-solving skills to software development.
                </p>
              </div>

              {/* Learning Focus Section */}
              <div className="space-y-2 pl-0 p-4 rounded-lg bg-foreground/5">
                <div className="flex items-center gap-2">
                  <FiBookOpen size={20} />
                  <h4 className="font-semibold">Learning Focus</h4>
                </div>
                <p className="text-sm text-foreground/80">
                  Currently expanding my expertise in TypeScript, Next.js, and cloud technologies while staying current with industry trends.
                </p>
              </div>
            </div>
          </div>

          {/* Beyond Coding Section */}
          <div className="flex flex-col h-full min-w-0">
            <h3 className="text-xl font-semibold mb-4">Beyond Coding</h3>
            <div className="flex flex-col gap-4">
              {/* Languages Section */}
              <div className="space-y-2 pl-0 p-4 rounded-lg bg-foreground/5 min-w-0">
                <div className="flex items-center gap-2">
                  <LuLanguages size={20} />
                  <h4 className="font-semibold">Languages</h4>
                </div>
                <p className="text-sm text-foreground/80 break-words whitespace-normal">
                  I&apos;m fluent in English, conversational in Spanish and learning German.
                </p>
              </div>

              {/* Technology Section */}
              <div className="space-y-2 pl-0 p-4 rounded-lg bg-foreground/5 min-w-0">
                <div className="flex items-center gap-2">
                  <FiCpu size={20} />
                  <h4 className="font-semibold">Technology</h4>
                </div>
                <p className="text-sm text-foreground/80 break-words whitespace-normal">
                  I&apos;m passionate about the Apple ecosystem and exploring AI/ML.
                </p>
              </div>

              {/* Christianity Section */}
              <div className="space-y-2 pl-0 p-4 rounded-lg bg-foreground/5 min-w-0">
                <div className="flex items-center gap-2">
                  <FaCross size={20} />
                  <h4 className="font-semibold">Christianity</h4>
                </div>
                <p className="text-sm text-foreground/80 break-words whitespace-normal">
                  I serve in the college and young adults ministry at my church.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Current Role section */}
      <motion.div 
        {...animations.pageSection}
        className="min-w-0"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">
            Current Role
          </h2>
          <StatusBadge status={currentRole.isActive} />
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
              Technologies Used
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