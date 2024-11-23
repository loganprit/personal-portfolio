import { GlassCard } from "@/components/ui/GlassCard";
import { Header } from "@/components/ui/Header";
import { Nav } from "@/components/ui/Nav";
import { Socials } from "@/components/ui/Socials";
import { PageTransition } from "./PageTransition";

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="fixed inset-0 landscape:p-8 portrait:p-4 overflow-y-auto landscape:overflow-hidden">
      <GlassCard className="w-full portrait:min-h-[calc(100vh-2rem)] landscape:h-[calc(100vh-4rem)] p-4 landscape:p-8 lg:p-12 relative flex flex-col">
        {/* Portrait Layout */}
        <div className="flex flex-col landscape:hidden h-full px-6">
          {/* Static Content */}
          <div className="flex flex-col gap-6 items-center">
            <Header
              name="Logan Pritchett"
              title="Software Engineer // Bringing Engineering Precision to Every Line of Code"
              avatarUrl="/images/profile.jpg"
              initials="LP"
            />
            <Nav className="mx-auto" />
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
            <div className="flex flex-col h-full">
              <Header
                name="Logan Pritchett"
                title="Software Engineer // Bringing Engineering Precision to Every Line of Code"
                avatarUrl="/images/profile.jpg"
                initials="LP"
              />
              <Nav className="mt-8 lg:mt-12 mx-auto" />
              <div className="mt-8 lg:mt-auto mx-auto">
                <Socials />
              </div>
            </div>
          </div>
          
          {/* Separator */}
          <div className="lg:block w-px bg-gradient-to-b from-transparent via-foreground/10 to-transparent" />
          
          {/* Right Side - Dynamic Content */}
          <div className="flex-1 lg:w-[60%] overflow-y-auto custom-scrollbar">
            <PageTransition>
              {children}
            </PageTransition>
          </div>
        </div>
      </GlassCard>
    </div>
  );
}
