import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b border-foreground/5 bg-background/70">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <span className="text-foreground font-extrabold text-lg tracking-tight">
          Flux Logic AI
        </span>

        <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-muted-foreground">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          SYSTEM_STATUS: OPERATIONAL
        </div>

        <Button
          variant="outline"
          className="border-primary text-primary hover:bg-primary/10 font-medium text-sm"
          onClick={() => document.getElementById("lead-capture")?.scrollIntoView({ behavior: "smooth" })}
        >
          Audit My Business
        </Button>
      </div>
    </header>
  );
};

export default Header;
