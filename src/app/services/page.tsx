import { Metadata } from "next";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesIndex from "@/components/services/ServicesIndex";
import ProductConcept from "@/components/services/ProductConcept";
import CadModeling from "@/components/services/CadModeling";
import { 
  DrawingsAndGDT, 
  SheetMetalPlastics, 
  MachineDesign, 
  FeaAnalysis, 
  DfmDfa, 
  PrototypeSupport, 
  BomDocs, 
  ProductRedesign 
} from "@/components/services/RemainingServices";
import { 
  IndustryApplications, 
  ServiceProcess, 
  ServiceEngagement, 
  ServiceStandards, 
  ServiceDeliverables, 
  ServicesCTA 
} from "@/components/services/RemainingWorkflow";

export const metadata: Metadata = {
  title: "Mechanical Design Services — CAD, FEA, GD&T, Machine Design | IGLOBLE TECHNOLOGIES",
  description: "End-to-end mechanical design services: product concept development, 3D CAD modeling in Creo, CATIA and NX, 2D drawings with GD&T, sheet metal and plastic part design, machine design, DFM & DFA, prototyping support, BOM and cost optimisation.",
};

export default function ServicesPage() {
  return (
    <div className="w-full flex flex-col">
      <ServicesHero />
      <ServicesIndex />
      <ProductConcept />
      <CadModeling />
      <DrawingsAndGDT />
      <SheetMetalPlastics />
      <MachineDesign />
      <FeaAnalysis />
      <DfmDfa />
      <PrototypeSupport />
      <BomDocs />
      <ProductRedesign />
      <IndustryApplications />
      <ServiceProcess />
      <ServiceEngagement />
      <ServiceStandards />
      <ServiceDeliverables />
      <ServicesCTA />
    </div>
  );
}