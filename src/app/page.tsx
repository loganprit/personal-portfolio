export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      {/* Top section */}
      <div className="rounded-lg border p-8">
        <h1 className="text-2xl font-bold">Welcome to my portfolio</h1>
        <p className="mt-4 text-muted-foreground">
          I'm a software engineer focused on building robust and scalable applications.
        </p>
      </div>

      {/* Bottom section */} 
      <div className="rounded-lg border p-8">
        <h2 className="text-xl font-semibold">Featured Projects</h2>
        <p className="mt-4 text-muted-foreground">
          Check out some of my recent work in the projects section.
        </p>
      </div>
    </div>
  );
}
