import { Play } from "lucide-react";
// import { motion } from "framer-motion";
import { useNowPlaying } from "../context/NowPlayingContext";

const recentItems = [
  { title: "Starboy", artist: "The Weeknd", img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop" },
  { title: "Levitating", artist: "Dua Lipa", img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop" },
  { title: "Heat Waves", artist: "Glass Animals", img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&h=300&fit=crop" },
  { title: "Peaches", artist: "Justin Bieber", img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop" },
  { title: "Save Your Tears", artist: "The Weeknd", img: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&h=300&fit=crop" },
  { title: "drivers license", artist: "Olivia Rodrigo", img: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=300&h=300&fit=crop" },
];

export function RecentlyPlayed() {
  const { setSelectedTrack } = useNowPlaying();

  return (
    <section>
      <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-4">Recently Played</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-3 lg:gap-4">
        {recentItems.map((item, i) => (
          <div
            key={item.title}
            className="group relative bg-card rounded-lg p-3 card-hover cursor-pointer"
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
