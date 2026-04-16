import { createFileRoute } from "@tanstack/react-router";
import { MusicSidebar } from "../components/Sidebar";
import { PlayerBar } from "../components/PlayerBar";
import { MobileTabBar } from "../components/MobileTabBar";
import { HeroHeader } from "../components/HeroHeader";
import { RecentlyPlayed } from "../components/RecentlyPlayed";
import { RecommendedSection } from "../components/RecommendedSection";
import { NowPlayingSidebar } from "../components/NowPlayingSidebar";
import { NowPlayingProvider } from "../context/NowPlayingContext";
import { TopNavBar } from "../components/Navbar";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wavify — Your Music, Your Way" },
      { name: "description", content: "A modern music streaming dashboard with curated playlists and personalized recommendations." },
      { property: "og:title", content: "Wavify — Your Music, Your Way" },
      { property: "og:description", content: "Stream your favorite music with a beautiful, modern interface." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <NowPlayingProvider>
      <div className="flex min-h-screen bg-background">
        <MusicSidebar />
        <main className="flex-1 overflow-y-auto pb-36 lg:pb-28">
          <TopNavBar />
          <div className="px-4 lg:px-8 py-4 lg:py-6 space-y-8">
            <HeroHeader />
            <RecentlyPlayed />
            <RecommendedSection />
          </div>
        </main>
        <NowPlayingSidebar />
        <PlayerBar />
        <MobileTabBar />
      </div>
    </NowPlayingProvider>
  );
}
