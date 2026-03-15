import HeroContact from "./sections/hero_contact";
import FormContact from "./sections/form_contact";
import MapContact from "./sections/map_contact";
import SocialContact from "./sections/social_contact";
import FaqContact from "./sections/faq_contact";

export default function ContactPage() {
  return (
    <main className="bg-[#0a0a0a]">
      <HeroContact />
      <FormContact />
      <MapContact />
      <SocialContact />
      <FaqContact />
    </main>
  );
}
