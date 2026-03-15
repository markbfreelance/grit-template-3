import HeroHome from "./sections/hero_home";
import OfferHome from "./sections/offer_home";
import MissionHome from "./sections/mission_home";
import NewsHome from "./sections/news_home";
import CoachesHome from "./sections/coaches_home";

export default function HomePage() {
  return (
    <main className="bg-[#0a0a0a]">
      <HeroHome />
      <OfferHome />
      <MissionHome />
      <NewsHome />
      <CoachesHome />
    </main>
  );
}
