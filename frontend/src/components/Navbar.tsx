import { Search, Bell, Menu, User2, Sun, Moon } from "lucide-react";
import favicon from "/favicon.png";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeProvider";
import { useState, useRef, useEffect } from "react";
import Notification from "./Notification";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [showNotifications, setShowNotifications] = useState(false);
  const notificationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
        setShowNotifications(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between gap-4 px-3 lg:px-5 py-3 bg-background/60 backdrop-blur-2xl border-b border-border/50 shadow-xs transition-colors duration-300">
      {/* Left */}
      <div className="flex items-center gap-5 flex-1">
        {/* Hamburger */}
        <button className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-blue-500 hover:bg-blue-500/10 transition-colors relative">
          <Menu className="h-5 w-5" />
        </button>

        {/* Vora */}
        <Link to="/" className="flex items-center gap-2">
          <img src={favicon} alt="Vora Logo" className="h-9 w-9" />
          <span className="text-xl font-bold text-foreground hidden sm:block">Vora</span>
        </Link>

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
        {/* Theme Toggle */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors relative"
        >
          {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </button>

        {/* Notification */}
        <div className="relative" ref={notificationRef}>
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className={`h-10 w-10 rounded-full flex items-center justify-center transition-colors relative ${showNotifications ? 'bg-primary/20 text-primary' : 'bg-secondary text-muted-foreground hover:text-primary hover:bg-primary/10'}`}
          >
            <Bell className="h-5 w-5" />
            <span className="absolute top-0 right-0 bg-primary text-primary-foreground text-[10px] min-w-[16px] h-[16px] flex items-center justify-center rounded-full font-bold border-2 border-background">
              2
            </span>
          </button>

          {showNotifications && (
            <Notification onClose={() => setShowNotifications(false)} />
          )}
        </div>

        {/* Profile */}
        <Link to="/profile" className="relative h-10 w-10 rounded-full overflow-hidden cursor-pointer  transition-all flex items-center justify-center bg-primary shadow-lg hover:shadow-primary/30">
          <User2 className="h-5 w-5" />
        </Link>
      </div>
    </header>
  );
}

export default Navbar
