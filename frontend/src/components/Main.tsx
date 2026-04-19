import HeroHeader from './HeroHeader.tsx'
import RecentlyPlayed from './RecentlyPlayed.tsx'
import TrendingSection from './TrendingSection.tsx'
import RecommendedSection from './RecommendedSection.tsx'
import PlayerBar from './PlayerBar.tsx'

const Main = () => {
  return (
    <div className="flex-1 overflow-x-hidden p-3 lg:p-5 space-y-8 lg:space-y-12 pb-10 lg:pb-15">
      <HeroHeader />
      <RecentlyPlayed />
      <TrendingSection />
      <RecommendedSection />
      <PlayerBar />
    </div>
  )
}

export default Main
