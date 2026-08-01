import { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import CredibilityBar from "@/components/sections/CredibilityBar";
import WhoWeAre from "@/components/sections/WhoWeAre";
import WhatWeDo from "@/components/sections/WhatWeDo";
import Industries from "@/components/sections/Industries";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import OurProcess from "@/components/sections/OurProcess";
import SoftwareCapabilities from "@/components/sections/SoftwareCapabilities";
import EngagementModels from "@/components/sections/EngagementModels";
import VisionMission from "@/components/sections/VisionMission";
import Deliverables from "@/components/sections/Deliverables";
import QualityConfidentiality from "@/components/sections/QualityConfidentiality";
import ClientFeedback from "@/components/sections/ClientFeedback";
import PortfolioTeaser from "@/components/sections/PortfolioTeaser";
import BlogTeaser from "@/components/sections/BlogTeaser";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Mechanical Product Design & Engineering Services in Pune | IGLOBLE TECHNOLOGIES",
  description: "IGLOBLE TECHNOLOGIES delivers end-to-end mechanical product design — 3D CAD modeling, FEA/CAE analysis, GD&T drawings, machine design and prototype support. Founded 2021, based in Pune, serving clients worldwide.",
};

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <HeroSection />
      <CredibilityBar />
      <WhoWeAre />
      <WhatWeDo />
      <Industries />
      <WhyChooseUs />
      <OurProcess />
      <SoftwareCapabilities />
      <EngagementModels />
      <VisionMission />
      <Deliverables />
      <QualityConfidentiality />
      <ClientFeedback />
      <PortfolioTeaser />
      <BlogTeaser />
      <FAQ />
      <CTA />

      {/* Future sections (2 through 18) will be imported here as we build them */}
    </div>
  );
}