import HeroPrograms from "./sections/hero_programs";
import GridPrograms from "./sections/grid_programs";
import HowItWorksPrograms from "./sections/howitworks_programs";
import AgeGroupsPrograms from "./sections/agegroups_programs";
import CtaPrograms from "./sections/cta_programs";

export default function ProgramsPage() {
  return (
    <main className="bg-[#0a0a0a]">
      <HeroPrograms />
      <GridPrograms />
      <HowItWorksPrograms />
      <AgeGroupsPrograms />
      <CtaPrograms />
    </main>
  );
}
