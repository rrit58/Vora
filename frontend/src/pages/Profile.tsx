import { Play, Shuffle, MoreHorizontal, Clock } from 'lucide-react';
import Navbar from '../components/Navbar.tsx';
import Sidebar from '../components/Sidebar.tsx';
import PlayerBar from '../components/PlayerBar.tsx';

const topTracks = [
  { id: 1, title: "Starboy", artist: "The Weeknd, Daft Punk", album: "Starboy", plays: "1,204,500", time: "3:50", img: "https://images.unsplash.com/photo-1618090584126-11ac94b8e0c8?w=100&h=100&fit=crop" },
  { id: 2, title: "Levitating", artist: "Dua Lipa", album: "Future Nostalgia", plays: "945,120", time: "3:23", img: "https://images.unsplash.com/photo-1526478806334-5fd488fcaabc?w=100&h=100&fit=crop" },
  { id: 3, title: "Blinding Lights", artist: "The Weeknd", album: "After Hours", plays: "2,504,115", time: "3:20", img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=100&h=100&fit=crop" },
  { id: 4, title: "As It Was", artist: "Harry Styles", album: "Harry's House", plays: "830,221", time: "2:47", img: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=100&h=100&fit=crop" },
  { id: 5, title: "Save Your Tears", artist: "The Weeknd", album: "After Hours", plays: "780,105", time: "3:35", img: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=100&h=100&fit=crop" },
];

const favoriteArtists = [
  { name: "The Weeknd", type: "Artist", img: "https://images.unsplash.com/photo-1618090584126-11ac94b8e0c8?w=300&h=300&fit=crop" },
  { name: "Dua Lipa", type: "Artist", img: "https://images.unsplash.com/photo-1526478806334-5fd488fcaabc?w=300&h=300&fit=crop" },
  { name: "Harry Styles", type: "Artist", img: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=300&h=300&fit=crop" },
  { name: "Taylor Swift", type: "Artist", img: "https://images.unsplash.com/photo-1614680376573-3e4e112d09b6?w=300&h=300&fit=crop" },
  { name: "SZA", type: "Artist", img: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&h=300&fit=crop" },
];

const Profile = () => {
  return (
    <div>
      <Navbar />

      <div className="flex">
        <Sidebar />

        {/* Main Content Area */}
        <div className="flex-1 overflow-x-hidden p-3 lg:p-5 pb-32 lg:pb-36 bg-background">
          {/* Header Strip */}
          <div className="w-full h-48 lg:h-64 rounded-xl lg:rounded-2xl overflow-hidden bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 shadow-xl group relative">
            {/* Animated Glow */}
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 mix-blend-overlay" />
            <div className="absolute top-0 right-0 w-full h-full bg-linear-to-b from-transparent to-black/40" />
          </div>

          {/* User Info (Pulled up via negative margin to overlap banner) */}
          <div className="px-6 lg:px-10 flex flex-col md:flex-row md:items-end gap-4 lg:gap-6 -mt-16 lg:-mt-20 mb-8 relative z-10 w-full">
            <div className="h-32 w-32 lg:h-40 lg:w-40 rounded-full border-4 border-background bg-surface overflow-hidden relative shadow-2xl transition-transform duration-500 shrink-0">
              <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400&fit=crop" alt="Profile" className="h-full w-full object-cover" />
            </div>

            <div className="pb-2 lg:pb-4">
              <div className="flex items-center gap-2 mb-1 lg:mb-2">
                <span className="px-2 py-0.5 rounded-full bg-primary text-[10px] uppercase font-bold tracking-wider text-primary-foreground shadow-sm">Premium</span>
                <span className="text-xs text-foreground font-medium tracking-wide">Profile</span>
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-foreground tracking-tight drop-shadow-md">Rohit Raj</h1>
              <p className="text-sm text-muted-foreground mt-1 lg:mt-2 font-medium">12 Public Playlists • 4,502 Followers • Following 45</p>
            </div>
          </div>

          {/* Action Row */}
          <div className="px-6 lg:px-10 flex items-center gap-4 mb-10">
            <button className="h-14 w-14 rounded-full bg-primary flex items-center justify-center hover:scale-110 hover:shadow-[0_0_20px_var(--color-primary)] hover:brightness-125 transition-all">
              <Play className="h-6 w-6 text-primary-foreground ml-1" fill="currentColor" />
            </button>
            <button className="h-10 w-10 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors hover:scale-110">
              <Shuffle className="h-6 w-6" />
            </button>
            <button className="h-9 px-4 rounded-full border border-border bg-surface text-sm font-semibold text-foreground hover:bg-surface-hover hover:border-primary/50 transition-all ml-auto md:ml-4">
              Edit Profile
            </button>
            <button className="hidden md:flex h-10 w-10 items-center justify-center text-muted-foreground hover:text-foreground transition-colors hover:scale-110">
              <MoreHorizontal className="h-6 w-6" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-2 lg:px-6">

            {/* Top Tracks List */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-bold text-foreground mb-4 pl-2">Top Tracks this Month</h2>
              <div className="w-full">
                {/* Table Header */}
                <div className="flex items-center px-4 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground border-b border-border/50 mb-2">
                  <span className="w-8">#</span>
                  <span className="flex-1">Title</span>
                  <span className="w-32 hidden sm:block">Album</span>
                  <span className="w-32 text-right">Plays</span>
                  <span className="w-16 text-right flex justify-end"><Clock className="h-4 w-4" /></span>
                </div>

                {/* Tracks */}
                <div className="space-y-1">
                  {topTracks.map((track, i) => (
                    <div key={track.id} className="group flex items-center px-4 py-2.5 rounded-lg hover:bg-card hover:shadow-sm hover:shadow-primary/5 transition-all duration-300">
                      <span className="w-8 text-sm text-muted-foreground group-hover:text-primary transition-colors">{i + 1}</span>
                      <div className="flex-1 flex items-center gap-3">
                        <div className="h-10 w-10 rounded overflow-hidden relative shadow-sm group-hover:shadow-md transition-shadow">
                          <img src={track.img} alt={track.title} className="h-full w-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <Play className="h-4 w-4 text-white" fill="currentColor" />
                          </div>
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-foreground truncate group-hover:text-primary transition-colors">{track.title}</p>
                          <p className="text-xs text-muted-foreground truncate">{track.artist}</p>
                        </div>
                      </div>
                      <span className="w-32 text-xs text-muted-foreground truncate hidden sm:block">{track.album}</span>
                      <span className="w-32 text-xs text-muted-foreground text-right">{track.plays}</span>
                      <span className="w-16 text-xs text-muted-foreground text-right">{track.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Favorite Artists */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4 pl-2">Favorite Artists</h2>
              <div className="grid grid-cols-2 gap-4">
                {favoriteArtists.slice(0, 4).map((artist) => (
                  <div key={artist.name} className="group bg-card rounded-lg p-4 card-hover cursor-pointer flex flex-col items-center text-center">
                    <div className="relative w-full aspect-square rounded-full overflow-hidden mb-3 shadow-md group-hover:shadow-primary/20 transition-all duration-300">
                      <img src={artist.img} alt={artist.name} className="h-full w-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                      <div className="play-overlay absolute bottom-2 right-2 h-10 w-10 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/40 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        <Play className="h-4 w-4 text-primary-foreground ml-0.5" fill="currentColor" />
                      </div>
                    </div>
                    <p className="text-sm font-semibold text-foreground truncate w-full">{artist.name}</p>
                    <p className="text-xs text-muted-foreground truncate">{artist.type}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      <PlayerBar />
    </div>
  )
}

export default Profile