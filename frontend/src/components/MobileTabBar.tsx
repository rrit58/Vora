import { Home, Compass, Library, Heart } from "lucide-react";

const tabs = [
  { icon: Home, label: "Home" },
  { icon: Compass, label: "Explore" },
  { icon: Library, label: "Library" },
  { icon: Heart, label: "Liked" },
];

export function MobileTabBar() {
  return (
    <nav className="lg:hidden fixed bottom-20 left-0 right-0 z-40 bg-background/90 backdrop-blur-lg border-t border-border">
      <div className="flex items-center justify-around h-14">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            className="flex flex-col items-center gap-0.5 text-muted-foreground hover:text-foreground transition-colors px-4 py-1"
          >
            <tab.icon className="h-5 w-5" />
            <span className="text-[10px] font-medium">{tab.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
