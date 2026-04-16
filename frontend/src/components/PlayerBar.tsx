import { Heart, Shuffle, SkipBack, Play, SkipForward, Repeat, Volume2, ListMusic, Monitor } from "lucide-react";

export function PlayerBar() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 glass-player h-20 lg:h-[88px] flex items-center px-4 lg:px-6">
      {/* Left: Track info */}
      <div className="flex items-center gap-3 w-1/4 min-w-0">
        <div className="h-12 w-12 lg:h-14 lg:w-14 rounded-md bg-surface flex-shrink-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=120&h=120&fit=crop"
            alt="Album art"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="min-w-0 hidden sm:block">
          <p className="text-sm font-medium text-foreground truncate">Blinding Lights</p>
          <p className="text-xs text-muted-foreground truncate">The Weeknd</p>
        </div>
        <button className="hidden sm:block text-muted-foreground hover:text-primary transition-colors ml-1">
          <Heart className="h-4 w-4" />
        </button>
      </div>

      {/* Center: Controls */}
      <div className="flex-1 flex flex-col items-center justify-center gap-1 max-w-xl">
        <div className="flex items-center gap-4 lg:gap-5">
          <button className="text-muted-foreground hover:text-foreground transition-colors hidden sm:block">
            <Shuffle className="h-4 w-4" />
          </button>
          <button className="text-foreground hover:text-primary transition-colors">
            <SkipBack className="h-5 w-5" fill="currentColor" />
          </button>
          <button className="h-9 w-9 lg:h-10 lg:w-10 rounded-full bg-foreground flex items-center justify-center hover:scale-105 transition-transform">
            <Play className="h-5 w-5 text-background ml-0.5" fill="currentColor" />
          </button>
          <button className="text-foreground hover:text-primary transition-colors">
            <SkipForward className="h-5 w-5" fill="currentColor" />
          </button>
          <button className="text-muted-foreground hover:text-foreground transition-colors hidden sm:block">
            <Repeat className="h-4 w-4" />
          </button>
        </div>
        {/* Progress */}
        <div className="flex items-center gap-2 w-full max-w-md">
          <span className="text-[11px] text-muted-foreground tabular-nums w-8 text-right">1:23</span>
          <div className="flex-1 h-1 bg-muted rounded-full group cursor-pointer relative">
            <div className="h-full w-[38%] bg-foreground rounded-full group-hover:bg-primary transition-colors relative">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 h-3 w-3 bg-foreground rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
          <span className="text-[11px] text-muted-foreground tabular-nums w-8">3:20</span>
        </div>
      </div>

      {/* Right: Volume & extras */}
      <div className="w-1/4 flex items-center justify-end gap-3">
        <button className="text-muted-foreground hover:text-foreground transition-colors hidden md:block">
          <ListMusic className="h-4 w-4" />
        </button>
        <button className="text-muted-foreground hover:text-foreground transition-colors hidden md:block">
          <Monitor className="h-4 w-4" />
        </button>
        <div className="hidden md:flex items-center gap-2">
          <Volume2 className="h-4 w-4 text-muted-foreground" />
          <div className="w-24 h-1 bg-muted rounded-full group cursor-pointer">
            <div className="h-full w-[70%] bg-foreground rounded-full group-hover:bg-primary transition-colors" />
          </div>
        </div>
      </div>
    </footer>
  );
}
