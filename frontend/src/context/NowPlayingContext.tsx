import { createContext, useContext, useState, type ReactNode } from "react";

export interface Track {
  title: string;
  artist: string;
  img: string;
}

interface NowPlayingContextType {
  selectedTrack: Track | null;
  setSelectedTrack: (track: Track | null) => void;
}

const NowPlayingContext = createContext<NowPlayingContextType>({
  selectedTrack: null,
  setSelectedTrack: () => {},
});

export function NowPlayingProvider({ children }: { children: ReactNode }) {
  const [selectedTrack, setSelectedTrack] = useState<Track | null>(null);
  return (
    <NowPlayingContext.Provider value={{ selectedTrack, setSelectedTrack }}>
      {children}
    </NowPlayingContext.Provider>
  );
}

export function useNowPlaying() {
  return useContext(NowPlayingContext);
}
