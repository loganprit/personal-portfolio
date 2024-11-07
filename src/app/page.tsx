import { GlassCard } from "@/components/ui/GlassCard";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4 sm:p-8">
      <GlassCard className="w-full min-h-[calc(100vh-2rem)] sm:min-h-[calc(100vh-4rem)] p-8 relative">
        <div className="absolute top-8 right-8">
          <ThemeToggle />
        </div>
        {/* Your content goes here */}
        <h1 className="text-3xl font-bold">Your Content</h1>
      </GlassCard>
    </div>
  );
}
