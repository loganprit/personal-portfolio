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
    <div className="fixed inset-0 p-4 sm:p-8 overflow-hidden">

      <GlassCard className="w-full h-full p-12 sm:p-16 relative flex flex-col">
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
              <Nav className="mt-12 mx-auto" />
              <div className="mt-auto mx-auto">
                <Socials />
              </div>
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
