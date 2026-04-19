import { useRef } from "react";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";

const trendingItems = [
  { title: "Anti-Hero", artist: "Taylor Swift", img: "https://images.unsplash.com/photo-1614680376573-3e4e112d09b6?w=300&h=300&fit=crop" },
  { title: "As It Was", artist: "Harry Styles", img: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=300&h=300&fit=crop" },
  { title: "Kill Bill", artist: "SZA", img: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&h=300&fit=crop" },
  { title: "Flowers", artist: "Miley Cyrus", img: "https://images.unsplash.com/photo-1490750967868-88cb4adec9f3?w=300&h=300&fit=crop" },
  { title: "Creepin'", artist: "Metro Boomin", img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop" },
  { title: "Die For You (Remix)", artist: "The Weeknd & Ariana Grande", img: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&h=300&fit=crop" },
  { title: "Boy's a liar Pt. 2", artist: "PinkPantheress & Ice Spice", img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&h=300&fit=crop" },
  { title: "Calm Down", artist: "Rema & Selena Gomez", img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop" },
  { title: "Anti-Hero", artist: "Taylor Swift", img: "https://images.unsplash.com/photo-1614680376573-3e4e112d09b6?w=300&h=300&fit=crop" },
  { title: "As It Was", artist: "Harry Styles", img: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=300&h=300&fit=crop" },
  { title: "Kill Bill", artist: "SZA", img: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&h=300&fit=crop" },
  { title: "Flowers", artist: "Miley Cyrus", img: "https://images.unsplash.com/photo-1490750967868-88cb4adec9f3?w=300&h=300&fit=crop" },
  { title: "Creepin'", artist: "Metro Boomin", img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop" },
  { title: "Die For You (Remix)", artist: "The Weeknd & Ariana Grande", img: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&h=300&fit=crop" },
  { title: "Boy's a liar Pt. 2", artist: "PinkPantheress & Ice Spice", img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&h=300&fit=crop" },
];

const TrendingSection = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;

    const amount = dir === "left" ? -300 : 300;

    scrollRef.current.scrollBy({
      left: amount,
      behavior: "smooth",
    });
  };

  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl lg:text-2xl font-bold text-foreground">Trending Now</h2>
        <div className="flex gap-2">
          <button onClick={() => scroll("left")} className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-surface-hover transition-colors">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button onClick={() => scroll("right")} className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-surface-hover transition-colors">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div ref={scrollRef} className="flex gap-4 overflow-auto pb-2">
        {trendingItems.map((item) => (
          <div key={item.title} className="group shrink-0 w-[160px] lg:w-[180px] bg-card rounded-lg p-3 card-hover cursor-pointer">
            <div className="relative aspect-square rounded-md overflow-hidden mb-3 shadow-md group-hover:shadow-primary/20 transition-all duration-300">
              <img src={item.img} alt={item.title} className="h-full w-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="play-overlay absolute bottom-2 right-2 h-10 w-10 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/40 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <Play className="h-4 w-4 text-primary-foreground ml-0.5" fill="currentColor" />
              </div>
            </div>
            <p className="text-sm font-semibold text-foreground truncate">{item.title}</p>
            <p className="text-xs text-muted-foreground truncate">{item.artist}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingSection;