export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      {/* Top section */}
      <div className="rounded-lg p-8">
        <h1 className="text-2xl font-bold">Welcome to my portfolio</h1>
        <p className="mt-4 text-muted-foreground">
          I'm a software engineer focused on building robust and scalable applications.
        </p>
      </div>

      {/* Bottom section */} 
      <div className="rounded-lg p-8">
        <h2 className="text-xl font-semibold">Current Role</h2>
        <p className="mt-4 text-muted-foreground">
          Description of role and responsibilities.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          <span className="px-4 py-1.5 rounded-full bg-foreground/10 text-sm">Skill 1</span>
          <span className="px-4 py-1.5 rounded-full bg-foreground/10 text-sm">Skill 2</span>
          <span className="px-4 py-1.5 rounded-full bg-foreground/10 text-sm">Skill 3</span>
          <span className="px-4 py-1.5 rounded-full bg-foreground/10 text-sm">Skill 4</span>
        </div>
      </div>
    </div>
  );
}