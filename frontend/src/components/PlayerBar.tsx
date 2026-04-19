import { Heart, Shuffle, SkipBack, Play, SkipForward, Repeat, Volume2, ListMusic } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const formatTime = (time: number) => {
  if (!time) return "0:00";

  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);

  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};


const PlayerBar = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);

  // Sync audio time
  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const setMeta = () => setDuration(audio.duration);

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", setMeta);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", setMeta);
    };
  }, []);

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 glass-player h-20 lg:h-[88px] flex items-center justify-between px-4 lg:px-6">
      {/* Left: Track info */}
      <div className="flex items-center gap-3 w-1/4 min-w-[180px]">
        <div className="relative h-12 w-12 lg:h-14 lg:w-14 rounded-md overflow-hidden bg-surface shrink-0 group cursor-pointer shadow-md">
          <img src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=120&h=120&fit=crop" alt="Album art" className="h-full w-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="min-w-0 hidden sm:block">
          <p className="text-sm font-medium text-foreground truncate">Blinding Lights</p>
          <p className="text-xs text-muted-foreground truncate">The Weeknd</p>
        </div>
        <button className="hidden sm:block text-muted-foreground hover:text-primary transition-colors ml-1">
          <Heart className="h-4 w-4" />
        </button>
      </div>

      <audio
        ref={audioRef}
        src="/song.mp3"   // 🔁 change to your real song
        className="hidden"
      />
      {/* Center: Controls */}
      <div className="flex-1 flex flex-col items-center justify-center gap-1 max-w-xl">
        <div className="flex items-center gap-4 lg:gap-5">
          <button className="text-muted-foreground hover:text-foreground transition-colors hidden sm:block">
            <Shuffle className="h-4 w-4" />
          </button>
          <button className="text-foreground hover:text-primary transition-transform hover:scale-110">
            <SkipBack className="h-5 w-5" fill="currentColor" />
          </button>
          <button className="h-9 w-9 lg:h-10 lg:w-10 rounded-full bg-foreground flex items-center justify-center hover:scale-110 hover:shadow-lg hover:shadow-foreground/30 transition-all">
            <Play className="h-5 w-5 text-background ml-0.5" fill="currentColor" />
          </button>
          <button className="text-foreground hover:text-primary transition-transform hover:scale-110">
            <SkipForward className="h-5 w-5" fill="currentColor" />
          </button>
          <button className="text-muted-foreground hover:text-foreground transition-colors hidden sm:block">
            <Repeat className="h-4 w-4" />
          </button>
        </div>

        {/* Progress */}
        <div className="flex items-center justify-center gap-2 w-full max-w-md">
          {/* Current Time */}
          <span className="text-[11px] text-muted-foreground w-8 text-right">{formatTime(currentTime)}</span>

          {/* Progress Bar */}
          <div
            className="flex-1 h-1 bg-muted rounded-full group cursor-pointer relative"
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const clickX = e.clientX - rect.left;
              const width = rect.width;

              const newTime = (clickX / width) * duration;
              if (audioRef.current) {
                audioRef.current.currentTime = newTime;
              }
              setCurrentTime(newTime);
            }}
          >
            {/* Filled Bar */}
            <div style={{ width: `${(currentTime / duration) * 100 || 0}%` }} className="h-full bg-foreground rounded-full group-hover:bg-primary group-hover:shadow-[0_0_8px_var(--color-primary)] transition-colors relative">
              {/* Circle */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 h-3 w-3 bg-foreground rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-50 group-hover:scale-100 shadow-md" />
            </div>
          </div>

          {/* Duration */}
          <span className="text-[11px] text-muted-foreground w-8">{formatTime(duration)}</span>
        </div>
      </div>

      {/* Right: Volume & extras */}
      <div className="w-1/4 flex items-center justify-end gap-3">
        <div className="hidden md:flex items-center gap-2">
          <Volume2 className="h-4 w-4 text-muted-foreground" />
          <div className="w-24 h-1 bg-muted rounded-full group cursor-pointer">
            <div className="h-full w-[50%] bg-foreground rounded-full group-hover:bg-primary transition-colors" />
          </div>
        </div>
        <button className="text-muted-foreground hover:text-foreground transition-colors hidden md:block">
          <ListMusic className="h-4 w-4" />
        </button>
      </div>
    </footer>
  );
}

export default PlayerBar;