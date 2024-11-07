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
    <div className="flex min-h-screen items-center justify-center p-4 sm:p-8">
      <GlassCard className="w-full min-h-[calc(100vh-2rem)] sm:min-h-[calc(100vh-4rem)] p-8 relative">
        <div className="absolute top-8 right-8">
          <ThemeToggle />
        </div>
        <div className="flex h-full gap-8">
          {/* Left Side - Static Content */}
          <div className="flex flex-col w-1/2 shrink-0">
            <div>
              <Header
                name="Logan Pritchett"
                title="Software Engineer // Bringing Engineering Precision to Every Line of Code"
                avatarUrl="/images/profile.jpg"
                initials="LP"
              />
            </div>
            <div className="mt-8">
              <Nav />
            </div>
            <div className="mt-auto pt-8">
              <Socials />
            </div>
          </div>
          
          {/* Right Side - Dynamic Content */}
          <div className="flex-1 w-1/2 overflow-auto">
            <PageTransition>
              {children}
            </PageTransition>
          </div>
        </div>
      </GlassCard>
    </div>
  );
}
