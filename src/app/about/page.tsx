import { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import CompanyOverview from "@/components/about/CompanyOverview";
import AboutJourney from "@/components/about/AboutJourney";
import AboutVision from "@/components/about/AboutVision";
import AboutMission from "@/components/about/AboutMission";
import AboutAim from "@/components/about/AboutAim";
import CoreValues from "@/components/about/CoreValues";
import OurDifference from "@/components/about/OurDifference";
import OurTeam from "@/components/about/OurTeam";
import IndustriesReach from "@/components/about/IndustriesReach";
import AboutRoadmap from "@/components/about/AboutRoadmap";
import AboutKPIs from "@/components/about/AboutKPIs";
import AboutCommitment from "@/components/about/AboutCommitment";
import AboutCTA from "@/components/about/AboutCTA";

export const metadata: Metadata = {
  title: "About IGLOBLE TECHNOLOGIES | Mechanical Design Engineering Company, Pune",
  description: "Founded in 2021, IGLOBLE TECHNOLOGIES has grown from a small team of design engineers into a trusted mechanical product design partner serving automotive, machinery, consumer product and heavy engineering clients across domestic and international markets.",
};

export default function AboutPage() {
  return (
    <div className="w-full flex flex-col">
      <AboutHero />
      <CompanyOverview />
      <AboutJourney />
      <AboutVision />
      <AboutMission />
      <AboutAim />
      <CoreValues />
      <OurDifference />
      <OurTeam />
      <IndustriesReach />
      <AboutRoadmap />
      <AboutKPIs />
      <AboutCommitment />
      <AboutCTA />
    </div>
  );
}