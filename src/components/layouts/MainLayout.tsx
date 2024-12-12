import { GlassCard } from "@/components/ui/GlassCard";
import { Header } from "@/components/ui/Header";
import { Nav } from "@/components/ui/Nav";
import { Socials } from "@/components/ui/Socials";
import { PageTransition } from "./PageTransition";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="fixed inset-0 landscape:p-8 portrait:p-4 overflow-y-auto landscape:overflow-hidden">
      <GlassCard className="w-full portrait:min-h-[calc(var(--real-vh,1vh)*100-2rem)] landscape:h-[calc(var(--real-vh,1vh)*100-4rem)] p-4 landscape:p-8 lg:p-12 relative flex flex-col">
        {/* Portrait Layout */}
        <div className="flex flex-col h-full px-6 landscape:!hidden">
          {/* Static Content */}
          <div className="flex flex-col gap-6 items-center">
            <Header
              name="Logan Pritchett"
              title="Full-Stack Web Developer"
              location="Lafayette, LA"
              avatarUrl="/images/profile.jpg"
              initials="LP"
            />
            <div className="flex flex-col items-center gap-4">
              <ThemeToggle />
              <Nav className="mx-auto" />
            </div>
          </div>

          {/* Dynamic Content */}
          <div className="flex-1 my-6">
            <PageTransition>
              {children}
            </PageTransition>
          </div>

          {/* Footer with Socials */}
          <div className="mt-auto flex justify-center">
            <Socials />
          </div>
        </div>

        {/* Landscape Layout */}
        <div className="hidden landscape:flex flex-col lg:flex-row flex-1 gap-8 h-full">
          {/* Left Side - Static Content */}
          <div className="flex flex-col lg:w-[40%] shrink-0 relative">
            <div className="flex flex-col h-full items-center">
              <Header
                name="Logan Pritchett"
                title="Full-Stack Web Developer"
                location="Orange, TX"
                avatarUrl="/images/profile.jpg"
                priority={true}
                initials="LP"
              />
              <div className="flex flex-col items-center gap-4 mt-8 lg:mt-12">
                <ThemeToggle />
                <Nav className="mx-auto" />
              </div>
              <div className="mt-8 lg:mt-auto mx-auto">
                <Socials />
              </div>
            </div>
          </div>
          
          {/* Right Side - Dynamic Content */}
          <div className="flex-1 lg:w-[60%] overflow-y-auto custom-scrollbar pr-2 landscape:pr-4">
            <PageTransition>
              {children}
            </PageTransition>
          </div>
        </div>
      </GlassCard>
    </div>
  );
}
