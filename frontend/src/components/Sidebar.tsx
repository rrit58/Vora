import { Home, Compass, Library, Heart, Plus } from "lucide-react";
import { Link } from "react-router-dom";

const navItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: Compass, label: "Explore", path: "/explore" },
  { icon: Library, label: "Library", path: "/library" },
  { icon: Heart, label: "Liked Songs", path: "/liked" },
];

const playlists = [
  "Chill Vibes",
  "Workout Mix",
  "Late Night Jazz",
  "Focus Flow",
  "Road Trip",
  "Throwback Hits",
  "Acoustic Morning",
  "Electronic Beats",
  "Indie Favorites",
  "Classical Study",
];

const Sidebar = () => {
  return (
    <div className="hidden lg:flex w-[15%] flex-col bg-sidebar border-r border-sidebar-border h-[calc(100vh-65px)] sticky top-[65px]">
      {/* Nav */}
      <nav className="p-3 space-y-1">
        {navItems.map((item) => (
          <Link key={item.label} to={item.path} className="group flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300">
            <item.icon className="h-5 w-5 transform group-hover:scale-110 transition-transform duration-300" />
            <span className="group-hover:translate-x-1 transition-transform duration-300">{item.label}</span>
          </Link>
        ))}
        <div className="mx-3 mt-3 border-b-2 border-sidebar-border"></div>
      </nav>

      {/* Playlists */}
      <div className="mt-2 px-3 flex-1 overflow-hidden flex flex-col pb-4">
        <div className="flex items-center justify-between px-3 mb-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Your Playlists
          </span>
          <button className="text-muted-foreground hover:text-foreground transition-colors group">
            <Plus className="h-4 w-4 transform group-hover:scale-110 transition-transform" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden space-y-0.5">
          {playlists.map((playlist) => (
            <button key={playlist} className="group w-full text-left px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-primary hover:bg-linear-to-r hover:from-primary/10 hover:to-transparent transition-all duration-300 truncate relative">
              <span className="relative z-10 group-hover:translate-x-1 inline-block transition-transform duration-300">{playlist}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
