"use client";

import styles from "@/css/components/services/ServiceCard.module.css";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { FiMail, FiPhone } from "react-icons/fi";

export function IndustryApplications() {
  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const sectors = [
    { name: "Automotive", desc: "Component and sub-assembly design, brackets, enclosures, structural parts and systems — modeled and documented to OEM and Tier-1 standards, with FEA verification where load cases demand it." },
    { name: "Industrial Machinery", desc: "Special-purpose machines, fixtures, jigs, mechanisms and equipment frames, designed for serviceability, standard-part availability and assembly on a real shop floor." },
    { name: "Consumer Products", desc: "Product design balancing form, ergonomics, tooling cost and assembly simplicity — with plastic part design and DFM built in from the first concept." },
    { name: "Heavy Engineering", desc: "Large fabricated structures, weldments and load-bearing assemblies, with structural analysis and complete fabrication documentation." },
  ];

  return (
    <section className={`${styles.sectionContainer} py-24 md:py-32`} id="applications">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} variants={fadeUpVariant} className="flex items-center gap-4 mb-6">
            <span className="text-sm font-semibold tracking-widest text-brand-primary">02</span>
            <div className="h-px w-12 bg-brand-primary/50"></div>
            <span className="text-sm font-semibold tracking-widest text-foreground/60 uppercase">Applied By Industry</span>
          </motion.div>
          <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} variants={fadeUpVariant} className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            The same services, applied to your sector.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {sectors.map((sec, idx) => (
            <div key={idx} className="bg-foreground/5 p-8 rounded-2xl border border-foreground/10">
              <h3 className="text-2xl font-bold text-foreground mb-4">{sec.name}</h3>
              <p className="text-foreground/70 text-base leading-relaxed font-light">{sec.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-brand-primary/10 border-l-4 border-brand-primary p-6 rounded-r-2xl">
          <h4 className="font-bold text-foreground mb-1">Emerging sectors</h4>
          <p className="text-foreground/80 font-light">We are actively extending our capability into aerospace, medical devices and industrial equipment.</p>
        </div>
      </div>
    </section>
  );
}

export function ServiceProcess() {
  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const steps = [
    { num: "01", title: "Requirement & Feasibility", desc: "Functional requirement, operating environment, volume, budget and target manufacturing process defined. You get a written scope, timeline and cost before work begins." },
    { num: "02", title: "Concept Development", desc: "Multiple concept directions evaluated against function, cost and manufacturability, with trade-offs made visible." },
    { num: "03", title: "3D CAD Modeling", desc: "Detailed parametric modeling and assembly build-up in Creo, CATIA or NX." },
    { num: "04", title: "Engineering Analysis", desc: "FEA and CAE studies verifying strength, stiffness, thermal behaviour and durability." },
    { num: "05", title: "Drawings & Documentation", desc: "Production-ready 2D drawings with GD&T, BOM and complete engineering documentation." },
    { num: "06", title: "Prototype & Manufacturing Support", desc: "Support through prototype build, iteration, supplier queries, validation and production ramp." },
  ];

  return (
    <section className={`${styles.sectionContainer} py-24 md:py-32`} id="process">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} variants={fadeUpVariant} className="flex items-center gap-4 mb-6">
            <span className="text-sm font-semibold tracking-widest text-brand-primary">03</span>
            <div className="h-px w-12 bg-brand-primary/50"></div>
            <span className="text-sm font-semibold tracking-widest text-foreground/60 uppercase">Our Process</span>
          </motion.div>
          <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} variants={fadeUpVariant} className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            Six stages. No surprises.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((st, idx) => (
            <div key={idx} className="bg-foreground/5 p-8 rounded-2xl border border-foreground/10 relative">
              <span className="font-mono text-3xl font-bold text-brand-primary mb-4 block">{st.num}</span>
              <h3 className="text-xl font-bold text-foreground mb-3">{st.title}</h3>
              <p className="text-foreground/70 text-sm leading-relaxed font-light">{st.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServiceEngagement() {
  const models = [
    { title: "Project-Based", desc: "A defined scope, a fixed timeline and an agreed cost. Best for a specific component, assembly or complete product programme.", pricing: "Fixed cost per project." },
    { title: "Dedicated Engineering Capacity", desc: "One or more of our engineers working as an extension of your in-house team, to your standards and templates. Best for sustained design load and long programmes.", pricing: "Monthly per engineer." },
    { title: "Consulting & Design Review", desc: "Focused technical input — DFM audit, tolerance review, analysis verification or a second opinion on an existing design. Best for de-risking a design before release.", pricing: "Hourly or per review." },
  ];

  return (
    <section className={`${styles.sectionContainer} py-24 md:py-32`} id="engagement">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm font-semibold tracking-widest text-brand-primary">04</span>
            <div className="h-px w-12 bg-brand-primary/50"></div>
            <span className="text-sm font-semibold tracking-widest text-foreground/60 uppercase">How To Engage Us</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">Three ways to work with us.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {models.map((mod, idx) => (
            <div key={idx} className="bg-foreground/5 p-8 rounded-2xl border border-foreground/10 flex flex-col">
              <h3 className="text-2xl font-bold text-foreground mb-4">{mod.title}</h3>
              <p className="text-foreground/70 text-base leading-relaxed font-light mb-6 flex-grow">{mod.desc}</p>
              <div className="pt-4 border-t border-foreground/10 font-mono text-sm text-brand-primary font-semibold">
                {mod.pricing}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServiceStandards() {
  const standards = [
    { title: "CAD Platforms", items: "PTC Creo · CATIA · Siemens NX" },
    { title: "Modeling", items: "Solid & surface modeling · Large assembly design · Sheet metal · Plastic part & mould-aware design · Weldments & fabrication · Mechanism design" },
    { title: "Analysis", items: "Structural FEA · Thermal analysis · Durability & fatigue studies · Design verification" },
    { title: "Documentation", items: "2D manufacturing drawings · GD&T to international standards · BOM creation · Engineering change documentation" },
    { title: "Design for Manufacturing", items: "DFM · DFA · Tolerance review · Cost optimisation studies" },
    { title: "File Formats", items: "Native Creo, CATIA, NX · STEP · IGES · Parasolid · DWG · PDF" },
  ];

  return (
    <section className={`${styles.sectionContainer} py-24 md:py-32`} id="standards">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm font-semibold tracking-widest text-brand-primary">05</span>
            <div className="h-px w-12 bg-brand-primary/50"></div>
            <span className="text-sm font-semibold tracking-widest text-foreground/60 uppercase">Tools & Standards</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">Working in your environment, to your standards.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {standards.map((st, idx) => (
            <div key={idx} className="bg-foreground/5 p-6 rounded-xl border border-foreground/10">
              <h3 className="text-lg font-bold text-brand-primary mb-2">{st.title}</h3>
              <p className="text-foreground/70 text-sm leading-relaxed">{st.items}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServiceDeliverables() {
  const items = [
    "Native CAD files (Creo, CATIA, NX) and neutral formats (STEP, IGES, Parasolid)",
    "Production-ready 2D drawings with full GD&T",
    "Analysis reports with results, interpretation and recommendations",
    "Structured Bill of Materials",
    "DFM/DFA review notes",
    "Engineering documentation and specification sheets",
    "Full design intent handover, so your team can carry the design forward independently",
  ];

  return (
    <section className={`${styles.sectionContainer} py-24 md:py-32`} id="deliverables">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm font-semibold tracking-widest text-brand-primary">06</span>
            <div className="h-px w-12 bg-brand-primary/50"></div>
            <span className="text-sm font-semibold tracking-widest text-foreground/60 uppercase">What You Get</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">Every project ends with a complete handover.</h2>
          <p className="text-foreground/70 text-lg">No partial files. No missing documentation. No dependency on us to move forward.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3 p-4 bg-foreground/5 rounded-xl border border-foreground/10">
              <span className="text-brand-primary font-bold">✓</span>
              <span className="text-foreground/80 text-sm md:text-base font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServicesCTA() {
  return (
    <section className="bg-brand-primary text-white py-24 md:py-32 relative overflow-hidden" id="contact">
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Not sure which service you need?</h2>
        <p className="text-white/80 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-12">
          Most clients aren't, at first. Send us the problem — a sketch, a sample part, an existing drawing or just a description — and we'll tell you what's actually required, what it will cost and how long it will take.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/quote" className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-bold px-8 py-4 rounded-full flex items-center gap-2 transition-colors shadow-lg">
            <FiMail size={20} /> Request a Quote
          </Link>
          <a href="tel:+919665410263" className="border-2 border-white/80 hover:bg-white hover:text-brand-primary text-white font-bold px-8 py-4 rounded-full flex items-center gap-2 transition-colors">
            <FiPhone size={20} /> Call +91 96654 10263
          </a>
        </div>
      </div>
    </section>
  );
}