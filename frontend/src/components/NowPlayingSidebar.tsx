import { X, MapPin, Calendar, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNowPlaying } from "../context/NowPlayingContext";

const artistBios: Record<string, string> = {
  "The Weeknd":
    "Abel Tesfaye, known as The Weeknd, is a Canadian singer-songwriter and record producer. He's known for his genre-blending style that fuses R&B, pop, and electronic music. With over 75 million records sold worldwide, he's one of the best-selling music artists of all time.",
  "Dua Lipa":
    "Dua Lipa is an English-Albanian singer and songwriter known for her disco-influenced pop sound. Her breakthrough hit 'New Rules' catapulted her to international stardom. She has won multiple Grammy Awards and BRIT Awards.",
  "Glass Animals":
    "Glass Animals are an English indie rock band from Oxford. Known for their genre-defying sound that blends psychedelic pop, electronic, and hip-hop influences. Their hit 'Heat Waves' became one of the most-streamed songs globally.",
  "Justin Bieber":
    "Justin Bieber is a Canadian singer who rose to fame as a teenager. He's one of the best-selling music artists with over 150 million records sold. His music spans pop, R&B, and EDM genres.",
  "Olivia Rodrigo":
    "Olivia Rodrigo is an American singer-songwriter and actress who shot to fame with 'drivers license.' Her debut album 'SOUR' earned critical acclaim and multiple Grammy Awards, establishing her as a defining voice of Gen Z pop.",
  "Billie Eilish":
    "Billie Eilish is an American singer-songwriter known for her whispery vocals and genre-bending style. She became the youngest artist to win all four major Grammy categories in a single night at age 18.",
  "Doja Cat":
    "Doja Cat is an American rapper, singer, and songwriter. Known for her creative versatility, viral internet presence, and genre-blending music that spans hip-hop, pop, R&B, and electronic dance.",
  "Lil Nas X":
    "Lil Nas X is an American rapper and singer who achieved massive viral success with 'Old Town Road.' He's known for his bold artistic vision and boundary-pushing music videos.",
};

const artistTours: Record<string, { city: string; date: string; venue: string }[]> = {
  "The Weeknd": [
    { city: "Los Angeles, CA", date: "Jun 15, 2026", venue: "SoFi Stadium" },
    { city: "New York, NY", date: "Jul 2, 2026", venue: "Madison Square Garden" },
    { city: "London, UK", date: "Aug 10, 2026", venue: "Wembley Stadium" },
  ],
  "Dua Lipa": [
    { city: "Paris, FR", date: "May 20, 2026", venue: "Stade de France" },
    { city: "Berlin, DE", date: "Jun 5, 2026", venue: "Olympiastadion" },
    { city: "Tokyo, JP", date: "Jul 18, 2026", venue: "Tokyo Dome" },
  ],
  "Glass Animals": [
    { city: "Austin, TX", date: "Sep 12, 2026", venue: "Moody Center" },
    { city: "Chicago, IL", date: "Sep 20, 2026", venue: "United Center" },
  ],
  "Olivia Rodrigo": [
    { city: "Toronto, CA", date: "Aug 1, 2026", venue: "Scotiabank Arena" },
    { city: "Sydney, AU", date: "Oct 5, 2026", venue: "Qudos Bank Arena" },
    { city: "Mexico City, MX", date: "Nov 12, 2026", venue: "Foro Sol" },
  ],
};

function getFallbackBio(artist: string) {
  return `${artist} is a talented artist making waves in the music industry with their unique sound and creative vision.`;
}

export function NowPlayingSidebar() {
  const { selectedTrack, setSelectedTrack } = useNowPlaying();

  return (
    <AnimatePresence>
      {selectedTrack && (
        <>
          {/* Mobile overlay backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-40 lg:hidden"
            onClick={() => setSelectedTrack(null)}
          />

          <motion.aside
            initial={{ x: 320, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 320, opacity: 0 }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 z-50 w-[320px] lg:w-[340px] bg-sidebar border-l border-sidebar-border flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-sidebar-border">
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">Now Playing</h3>
              <button
                onClick={() => setSelectedTrack(null)}
                className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-surface-hover transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto hide-scrollbar px-5 py-5 space-y-6">
              {/* Album art & track info */}
              <div className="space-y-4">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="aspect-square rounded-xl overflow-hidden shadow-2xl"
                >
                  <img
                    src={selectedTrack.img}
                    alt={selectedTrack.title}
                    className="h-full w-full object-cover"
                  />
                </motion.div>
                <div>
                  <h4 className="text-lg font-bold text-foreground">{selectedTrack.title}</h4>
                  <p className="text-sm text-muted-foreground">{selectedTrack.artist}</p>
                </div>
              </div>

              {/* Artist Bio */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.15 }}
                className="space-y-2"
              >
                <h5 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">About the Artist</h5>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  {artistBios[selectedTrack.artist] || getFallbackBio(selectedTrack.artist)}
                </p>
              </motion.div>

              {/* Tour Dates */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="space-y-3"
              >
                <h5 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Upcoming Tour Dates</h5>
                {(artistTours[selectedTrack.artist] || []).length > 0 ? (
                  <div className="space-y-2">
                    {artistTours[selectedTrack.artist]!.map((tour) => (
                      <div
                        key={`${tour.city}-${tour.date}`}
                        className="bg-surface rounded-lg p-3 space-y-1.5 hover:bg-surface-hover transition-colors cursor-pointer"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5 text-foreground">
                            <MapPin className="h-3.5 w-3.5 text-primary" />
                            <span className="text-sm font-medium">{tour.city}</span>
                          </div>
                          <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
                        </div>
                        <div className="flex items-center gap-1.5 text-muted-foreground">
                          <Calendar className="h-3.5 w-3.5" />
                          <span className="text-xs">{tour.date}</span>
                          <span className="text-xs">• {tour.venue}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground italic">No upcoming tour dates announced.</p>
                )}
              </motion.div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
