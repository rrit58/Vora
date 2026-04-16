import { Search, Bell, Menu } from "lucide-react";
import favicon from "/favicon.png";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between gap-4 px-3 lg:px-5 py-3 bg-background/80 backdrop-blur-md border-b border-border/50">
      {/* Left */}
      <div className="flex items-center gap-5 flex-1">
        {/* Hamburger */}
        <button className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-blue-500 hover:bg-blue-500/10 transition-colors relative">
          <Menu className="h-5 w-5" />
        </button>

        {/* Vora */}
        <div className="flex items-center gap-2">
          <img src={favicon} alt="Vora Logo" className="h-9 w-9" />
          <span className="text-xl font-bold text-foreground hidden sm:block">Vora</span>
        </div>

        {/* Search */}
        <div className={`hidden sm:block relative flex-1 max-w-md transition-all`}>
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search songs, albums, artists, playlists..."
            className="w-full h-10 pl-10 pr-4 rounded-full bg-surface text-sm text-foreground placeholder:text-muted-foreground border border-gray-400 focus:border-blue-500/50 focus:bg-surface-hover outline-none transition-colors"
          />
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">
        {/* Notification */}
        <button className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-blue-500 hover:bg-blue-500/10 transition-colors relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-2 right-2.5 h-2 w-2 rounded-full bg-blue-500" />
        </button>

        {/* Profile */}
        <div className="relative h-10 w-10 rounded-full overflow-hidden cursor-pointer ring-2 ring-transparent hover:ring-blue-500/50 transition-all flex items-center justify-center bg-blue-500 text-white text-sm">
          <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop" alt="User" className="absolute inset-0 w-full h-full object-cover z-10" />
        </div>
      </div>
    </header>
  );
}

export default Navbar
