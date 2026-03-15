import HeroMerch from "./sections/hero_merch";
import FeaturedMerch from "./sections/featured__merch";
import GridMerch from "./sections/grid_merch";
import CtaMerch from "./sections/cta_merch";

export default function MerchPage() {
  return (
    <main className="bg-[#0a0a0a]">
      <HeroMerch />
      <FeaturedMerch />
      <GridMerch />
      <CtaMerch />
    </main>
  );
}
