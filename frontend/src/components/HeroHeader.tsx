import { Play } from "lucide-react";

export function HeroHeader() {
  return (
    <section className="mesh-gradient rounded-xl lg:rounded-2xl p-6 lg:p-10 flex flex-col justify-end min-h-[220px] lg:min-h-[300px] relative overflow-hidden">
      <div className="relative z-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">Featured Playlist</p>
        <h1 className="text-3xl lg:text-5xl font-extrabold text-foreground leading-tight">
          Today's Top Hits
        </h1>
        <p className="text-sm lg:text-base text-muted-foreground mt-2 max-w-md">
          The biggest songs right now. Updated every Friday with the freshest tracks.
        </p>
        <div className="mt-5 flex items-center gap-3">
          <button className="h-12 w-12 rounded-full bg-primary flex items-center justify-center hover:scale-105 hover:brightness-110 transition-all shadow-lg shadow-primary/25">
            <Play className="h-5 w-5 text-primary-foreground ml-0.5" fill="currentColor" />
          </button>
          <span className="text-sm text-muted-foreground">50 songs • 2 hr 45 min</span>
        </div>
      </div>
    </section>
  );
}
