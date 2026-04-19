import { Play } from "lucide-react";

const HeroHeader = () => {
  return (
    <section className="relative rounded-xl lg:rounded-2xl p-6 lg:p-10 flex flex-col justify-end min-h-[220px] lg:min-h-[300px] overflow-hidden bg-card border border-border bg-linear-to-br from-primary/10 via-background to-secondary shadow-2xl transition-all duration-700 hover:shadow-primary/20 group">
      {/* Decorative background gradient glow */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-500/30 via-purple-500/20 to-transparent pointer-events-none z-0 opacity-50 group-hover:opacity-80 transition-opacity duration-1000" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-3xl rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />

      <div className="relative z-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">Featured Playlist</p>
        <h1 className="text-3xl lg:text-5xl font-extrabold text-foreground leading-tight">
          Today's Top Hits
        </h1>
        <p className="text-sm lg:text-base text-muted-foreground mt-2 max-w-md">
          The biggest songs right now. Updated every Friday with the freshest tracks.
        </p>
        <div className="mt-5 flex items-center gap-3">
          <button className="h-12 w-12 rounded-full bg-primary flex items-center justify-center hover:scale-110 hover:brightness-125 transition-all shadow-lg shadow-primary/30 ring-4 ring-transparent hover:ring-primary/40">
            <Play className="h-5 w-5 text-primary-foreground ml-0.5" fill="currentColor" />
          </button>
          <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">50 songs • 2 hr 45 min</span>
        </div>
      </div>
    </section>
  );
}

export default HeroHeader