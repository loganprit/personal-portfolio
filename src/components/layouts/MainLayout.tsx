import { GlassCard } from "@/components/ui/GlassCard";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { Header } from "@/components/ui/Header";
import { Nav } from "@/components/ui/Nav";
import { Socials } from "@/components/ui/Socials";
import { PageTransition } from "./PageTransition";

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="fixed inset-0 p-4 sm:p-8 overflow-hidden">
      {/* Updated ThemeToggle positioning */}
      <div className="absolute top-4 right-4 sm:top-8 sm:right-8 z-50">
        <ThemeToggle />
      </div>

      <GlassCard className="w-full h-full p-8 relative flex flex-col">
        <div className="flex flex-1 gap-8 h-full">
          {/* Left Side - Static Content */}
          <div className="flex flex-col w-1/2 shrink-0 relative">
            <div className="flex flex-col h-full">
              <Header
                name="Logan Pritchett"
                title="Software Engineer // Bringing Engineering Precision to Every Line of Code"
                avatarUrl="/images/profile.jpg"
                initials="LP"
              />
              <div className="flex-1 flex items-center">
                <Nav />
              </div>
              <Socials />
            </div>
          </div>
          
          {/* Right Side - Dynamic Content */}
          <div className="flex-1 w-1/2 overflow-y-auto custom-scrollbar">
            <PageTransition>
              {children}
            </PageTransition>
          </div>
        </div>
      </GlassCard>
    </div>
  );
}
