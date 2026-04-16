import { Play } from "lucide-react";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { useNowPlaying } from "../context/NowPlayingContext";

const recommended = [
  { title: "After Hours", artist: "The Weeknd", img: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=300&h=300&fit=crop" },
  { title: "Future Nostalgia", artist: "Dua Lipa", img: "https://images.unsplash.com/photo-1526478806334-5fd488fcaabc?w=300&h=300&fit=crop" },
  { title: "Happier Than Ever", artist: "Billie Eilish", img: "https://images.unsplash.com/photo-1504898770365-14faca6a7320?w=300&h=300&fit=crop" },
  { title: "Sour", artist: "Olivia Rodrigo", img: "https://images.unsplash.com/photo-1484755560615-a67c1ab3b3f3?w=300&h=300&fit=crop" },
  { title: "Justice", artist: "Justin Bieber", img: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=300&h=300&fit=crop" },
  { title: "Planet Her", artist: "Doja Cat", img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=300&h=300&fit=crop" },
  { title: "Montero", artist: "Lil Nas X", img: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=300&h=300&fit=crop" },
  { title: "Dawn FM", artist: "The Weeknd", img: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=300&h=300&fit=crop" },
];

export function RecommendedSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { setSelectedTrack } = useNowPlaying();

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      const amount = dir === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl lg:text-2xl font-bold text-foreground">Recommended for You</h2>
        <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-surface-hover transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-surface-hover transition-colors"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div ref={scrollRef} className="flex gap-4 overflow-x-auto hide-scrollbar pb-2">
        {recommended.map((item, i) => (
          <div
            key={item.title}
            className="group flex-shrink-0 w-[160px] lg:w-[180px] bg-card rounded-lg p-3 card-hover cursor-pointer"
            onClick={() => setSelectedTrack(item)}
          >
            <div className="relative aspect-square rounded-md overflow-hidden mb-3">
              <img src={item.img} alt={item.title} className="h-full w-full object-cover" />
              <div className="play-overlay absolute bottom-2 right-2">
                <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
                  <Play className="h-4 w-4 text-primary-foreground ml-0.5" fill="currentColor" />
                </div>
              </div>
            </div>
            <p className="text-sm font-semibold text-foreground truncate">{item.title}</p>
            <p className="text-xs text-muted-foreground truncate">{item.artist}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
