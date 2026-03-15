import HeroAbout from "./sections/hero_about";
import StoryAbout from "./sections/story_about";
import StatsAbout from "./sections/stats_about";
import ValuesAbout from "./sections/values_about";
import TeamAbout from "./sections/team_about";
import CtaAbout from "./sections/cta_about";

export default function AboutPage() {
  return (
    <main className="bg-[#0a0a0a]">
      <HeroAbout />
      <StoryAbout />
      <StatsAbout />
      <ValuesAbout />
      <TeamAbout />
      <CtaAbout />
    </main>
  );
}