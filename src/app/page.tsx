import { currentRole } from "@/data/current-role";
import { TechnologyBadge } from "@/components/ui/TechnologyBadge";

/**
 * Home page component displaying welcome message and current role
 */
export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      {/* Top section */}
      <div className="rounded-lg">
        <h1 className="text-2xl font-bold">Welcome to my portfolio!</h1>
        <p className="mt-4 text-foreground/80 leading-relaxed">
          I'm a software engineer with a background in chemical engineering, bringing a unique blend of analytical thinking and technical expertise to software development. My experience spans from process optimization in refineries to building full-stack web applications, always focusing on creating efficient, scalable solutions.
        </p>
      </div>

      {/* Current Role section */}
      <div className="rounded-lg">
        <h2 className="text-xl font-semibold">Current Role</h2>
        {currentRole.isActive ? (
          <div className="mt-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-medium">{currentRole.title}</h3>
                <p className="text-foreground/60 mt-1">
                  {currentRole.company} • {currentRole.location}
                </p>
                <p className="text-sm text-foreground/40 mt-0.5">{currentRole.period}</p>
              </div>
            </div>
            
            <p className="mt-4 text-foreground/80 leading-relaxed">
              {currentRole.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {currentRole.technologies.map((tech) => (
                <TechnologyBadge key={tech.name} {...tech} />
              ))}
            </div>
          </div>
        ) : (
          <div className="mt-4">
            <p className="text-foreground/80 leading-relaxed">
              I'm currently seeking new opportunities in software engineering. 
              With a strong foundation in full-stack development and a background in engineering, 
              I'm excited to bring my skills to a team focused on building innovative solutions.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}