import { Hero } from "@/components/Hero";
import { SocialProofWidget } from "@/components/SocialProofWidget";
import { CommunityOverview } from "@/components/CommunityOverview";
import { MarketStats } from "@/components/MarketStats";
import { FeaturedHomes } from "@/components/FeaturedHomes";
import { MarketInsiderAlert } from "@/components/MarketInsiderAlert";
import { LocalLandmarks } from "@/components/LocalLandmarks";
import { WhyChooseArcadia } from "@/components/WhyChooseArcadia";
import { AboutDrDuffy } from "@/components/AboutDrDuffy";
import { ContactCTA } from "@/components/ContactCTA";
import { LeadMagnetPopup } from "@/components/LeadMagnetPopup";
import { FloatingContactWidget } from "@/components/FloatingContactWidget";

export default function Home() {
  return (
    <>
      <Hero />
      <div id="home-content">
        <SocialProofWidget />
      <CommunityOverview />
      <MarketStats />
      <FeaturedHomes />
      <MarketInsiderAlert />
      <LocalLandmarks />
      <WhyChooseArcadia />
      <AboutDrDuffy />
      <ContactCTA />
      </div>
      <LeadMagnetPopup />
      <FloatingContactWidget />
    </>
  );
}
