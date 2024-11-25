"use client";

import { motion } from "framer-motion";
import { currentRole } from "@/data/current-role";
import { TechnologyBadge } from "@/components/ui/TechnologyBadge";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { animations } from "@/lib/animations";
import Image from "next/image";
import { LuLanguages } from "react-icons/lu";
import { FiCpu } from "react-icons/fi";
import { FaCross } from "react-icons/fa";

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
      </motion.div>

      {/* About Me Section */}
      <motion.div 
        {...animations.pageSection}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div>
          <h2 className="text-2xl font-bold mb-6">
            About Me
          </h2>
          <h3 className="text-xl font-semibold mb-6">As a Developer</h3>
          <motion.p 
          className="mt-6 text-lg text-foreground/80 leading-relaxed max-w-[65ch]"
          {...animations.delayedContent}
        >
            I&apos;m a software developer based in Lafayette, Louisiana with a background in chemical engineering, bringing a unique blend of analytical thinking and technical expertise to software development. My experience spans from process optimization in refineries to building full-stack web applications, always focusing on creating efficient, scalable solutions.
          </motion.p>
        </div>
        
        <motion.div 
          className="relative h-[300px] rounded-lg overflow-hidden"
          {...animations.delayedContent}
        >
          <Image
            src="/images/about-me.jpg"
            alt="Logan presenting at a conference"
            width={800}
            height={600}
            className="object-cover object-left w-full h-full"
            priority
          />
        </motion.div>

        {/* Beyond Coding Section */}
        <motion.div 
          className="md:col-span-2 mt-6"
          {...animations.delayedContent}
        >
          <h3 className="text-xl font-semibold mb-6">Beyond Coding</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Languages Section */}
            <div className="space-y-3 p-4 rounded-lg bg-foreground/5 h-full">
              <div className="flex items-center gap-2">
                <LuLanguages size={24} />
                <h3 className="font-semibold text-lg">Languages</h3>
              </div>
              <div className="space-y-2 flex flex-col justify-between h-[calc(100%-40px)]">
                <div className="space-y-2">
                  <div className="flex flex-col">
                    <span className="font-medium text-foreground/60">Fluent</span>
                    <span>English</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium text-foreground/60">Conversational</span>
                    <span>Spanish (Emphasis on Mexican Spanish)</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium text-foreground/60">Learning</span>
                    <span>German, French, Polish</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Technology Section */}
            <div className="space-y-3 p-4 rounded-lg bg-foreground/5">
              <div className="flex items-center gap-2">
                <FiCpu size={24} />
                <h3 className="font-semibold text-lg">Technology</h3>
              </div>
              <div className="space-y-2">
                <div className="flex flex-col">
                  <span className="font-medium text-foreground/60">Expertise</span>
                  <span>The Apple Ecosystem, LLMs</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-medium text-foreground/60">Interests</span>
                  <span>Apple, AI, Web Development, Electric Vehicles</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-medium text-foreground/60">YouTube</span>
                  <span>Want to start a channel</span>
                </div>
              </div>
            </div>

            {/* Christianity Section */}
            <div className="space-y-3 p-4 rounded-lg bg-foreground/5">
              <div className="flex items-center gap-2">
                <FaCross size={24} />
                <h3 className="font-semibold text-lg">Christianity</h3>
              </div>
              <div className="space-y-2">
                <div className="flex flex-col">
                  <span className="font-medium text-foreground/60">Denomination</span>
                  <span>Southern Baptist</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-medium text-foreground/60">Service</span>
                  <span>College and Young Adults Ministry</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-medium text-foreground/60">Study</span>
                  <span>Biblical Languages, Apologetics</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Current Role section */}
      <motion.div 
        {...animations.pageSection}
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