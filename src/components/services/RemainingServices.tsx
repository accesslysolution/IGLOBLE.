"use client";

import styles from "@/css/components/services/ServiceCard.module.css";
import { motion, Variants } from "framer-motion";

export function DrawingsAndGDT() {
  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const deliverables = [
    "Production-ready 2D manufacturing drawings",
    "Geometric Dimensioning & Tolerancing to international standards",
    "Datum structure and tolerance stack-up review",
    "Weld, surface finish and treatment callouts",
    "Drawing packs in your required format and title block",
  ];

  return (
    <section className={`${styles.sectionContainer} py-24 md:py-32`} id="drawings">
      <div className="max-w-7xl mx-auto px-6">
        <div className={styles.serviceContentBox}>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} variants={fadeUpVariant} className="flex items-center gap-4 mb-6">
            <span className="text-sm font-semibold tracking-widest text-brand-primary">03</span>
            <div className="h-px w-12 bg-brand-primary/50"></div>
            <span className="text-sm font-semibold tracking-widest text-foreground/60 uppercase">2D Drawings & GD&T</span>
          </motion.div>
          <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} variants={fadeUpVariant} className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-8">
            2D Manufacturing Drawings & GD&T
          </motion.h2>
          <motion.p initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} variants={fadeUpVariant} className="text-foreground/80 text-lg leading-relaxed font-light mb-8">
            The drawing is the contract between design and manufacturing. Ours are built so your supplier can quote and produce without a clarification cycle: correct views, correct datum schemes, functional tolerancing and complete callouts.
          </motion.p>
          <motion.h3 initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} variants={fadeUpVariant} className="text-xl font-bold text-foreground mb-4">
            What you receive:
          </motion.h3>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={{ show: { transition: { staggerChildren: 0.08 } } }} className={styles.deliverablesList}>
            {deliverables.map((item, index) => (
              <motion.div key={index} variants={fadeUpVariant} className={styles.deliverableItem}>
                <span className={styles.bullet}>•</span>
                <span>{item}</span>
              </motion.div>
            ))}
          </motion.div>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} variants={fadeUpVariant} className={styles.bestForBox}>
            <h4 className="font-bold text-foreground mb-1">Best for:</h4>
            <p className="text-foreground/70 text-base font-light">Any component or assembly heading to a supplier, tool room or machine shop.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function SheetMetalPlastics() {
  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const sheetMetal = [
    "Formed and stamped part design",
    "Flat pattern development",
    "Bend allowance and relief design",
    "Fabrication and weldment drawings",
  ];

  const plastics = [
    "Injection-mould-aware part design",
    "Draft, ribbing and boss design",
    "Wall thickness optimisation",
    "Snap-fit and assembly feature design",
  ];

  return (
    <section className={`${styles.sectionContainer} py-24 md:py-32`} id="sheetmetal">
      <div className="max-w-7xl mx-auto px-6">
        <div className={styles.serviceContentBox}>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} variants={fadeUpVariant} className="flex items-center gap-4 mb-6">
            <span className="text-sm font-semibold tracking-widest text-brand-primary">04</span>
            <div className="h-px w-12 bg-brand-primary/50"></div>
            <span className="text-sm font-semibold tracking-widest text-foreground/60 uppercase">Sheet Metal & Plastic Part Design</span>
          </motion.div>
          <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} variants={fadeUpVariant} className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-8">
            Sheet Metal & Plastic Part Design
          </motion.h2>
          <motion.p initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} variants={fadeUpVariant} className="text-foreground/80 text-lg leading-relaxed font-light mb-8">
            Formed and moulded parts fail for process reasons, not aesthetic ones. We design with bend allowances, tool access, draft, wall thickness, gate location, shrinkage and parting lines accounted for from the first feature.
          </motion.p>
          
          <motion.h3 initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} variants={fadeUpVariant} className="text-xl font-bold text-foreground mb-4">
            Sheet metal capability:
          </motion.h3>
          <div className={`${styles.deliverablesList} mb-8`}>
            {sheetMetal.map((item, idx) => (
              <div key={idx} className={styles.deliverableItem}>
                <span className={styles.bullet}>•</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <motion.h3 initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} variants={fadeUpVariant} className="text-xl font-bold text-foreground mb-4">
            Plastic part capability:
          </motion.h3>
          <div className={styles.deliverablesList}>
            {plastics.map((item, idx) => (
              <div key={idx} className={styles.deliverableItem}>
                <span className={styles.bullet}>•</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} variants={fadeUpVariant} className={styles.bestForBox}>
            <h4 className="font-bold text-foreground mb-1">Best for:</h4>
            <p className="text-foreground/70 text-base font-light">Enclosures, brackets, housings, panels, covers and high-volume moulded components.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function MachineDesign() {
  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const deliverables = [
    "Machine layout and general assembly design",
    "Mechanism and motion design",
    "Structural frame and base design",
    "Fixture and tooling design",
    "Bought-out component selection",
    "Complete assembly and part drawing sets",
  ];

  return (
    <section className={`${styles.sectionContainer} py-24 md:py-32`} id="machine">
      <div className="max-w-7xl mx-auto px-6">
        <div className={styles.serviceContentBox}>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} variants={fadeUpVariant} className="flex items-center gap-4 mb-6">
            <span className="text-sm font-semibold tracking-widest text-brand-primary">05</span>
            <div className="h-px w-12 bg-brand-primary/50"></div>
            <span className="text-sm font-semibold tracking-widest text-foreground/60 uppercase">Machine & Equipment Design</span>
          </motion.div>
          <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} variants={fadeUpVariant} className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-8">
            Machine & Equipment Design
          </motion.h2>
          <motion.p initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} variants={fadeUpVariant} className="text-foreground/80 text-lg leading-relaxed font-light mb-8">
            Machines are judged in service, not on screen. We design special-purpose machines, equipment, fixtures and mechanisms with maintenance access, standard-component availability, safety and assembly sequence considered from the start.
          </motion.p>
          <motion.h3 initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} variants={fadeUpVariant} className="text-xl font-bold text-foreground mb-4">
            What you receive:
          </motion.h3>
          <div className={styles.deliverablesList}>
            {deliverables.map((item, idx) => (
              <div key={idx} className={styles.deliverableItem}>
                <span className={styles.bullet}>•</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} variants={fadeUpVariant} className={styles.bestForBox}>
            <h4 className="font-bold text-foreground mb-1">Best for:</h4>
            <p className="text-foreground/70 text-base font-light">Automation builders, SPM manufacturers, production line upgrades and industrial equipment makers.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function FeaAnalysis() {
  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const deliverables = [
    "Structural and stress analysis",
    "Deflection and stiffness studies",
    "Thermal analysis",
    "Durability and fatigue assessment",
    "Design optimisation recommendations",
    "Reported results with engineering interpretation, not just colour plots",
  ];

  return (
    <section className={`${styles.sectionContainer} py-24 md:py-32`} id="fea">
      <div className="max-w-7xl mx-auto px-6">
        <div className={styles.serviceContentBox}>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} variants={fadeUpVariant} className="flex items-center gap-4 mb-6">
            <span className="text-sm font-semibold tracking-widest text-brand-primary">06</span>
            <div className="h-px w-12 bg-brand-primary/50"></div>
            <span className="text-sm font-semibold tracking-widest text-foreground/60 uppercase">FEA / CAE Analysis</span>
          </motion.div>
          <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} variants={fadeUpVariant} className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-8">
            FEA / CAE Analysis
          </motion.h2>
          <motion.p initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} variants={fadeUpVariant} className="text-foreground/80 text-lg leading-relaxed font-light mb-8">
            Find the failure before it costs anything. Simulation tells you where a design is over-engineered and where it is at risk — and lets you make both decisions with data instead of margin.
          </motion.p>
          <motion.h3 initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} variants={fadeUpVariant} className="text-xl font-bold text-foreground mb-4">
            What you receive:
          </motion.h3>
          <div className={styles.deliverablesList}>
            {deliverables.map((item, idx) => (
              <div key={idx} className={styles.deliverableItem}>
                <span className={styles.bullet}>•</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} variants={fadeUpVariant} className={styles.bestForBox}>
            <h4 className="font-bold text-foreground mb-1">Best for:</h4>
            <p className="text-foreground/70 text-base font-light">Load-bearing structures, safety-critical parts, weight reduction programmes and any design where physical testing is expensive.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function DfmDfa() {
  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const deliverables = [
    "Manufacturability review against target process",
    "Part count reduction opportunities",
    "Tolerance rationalisation",
    "Assembly sequence simplification",
    "Documented recommendations with cost impact",
  ];

  return (
    <section className={`${styles.sectionContainer} py-24 md:py-32`} id="dfm">
      <div className="max-w-7xl mx-auto px-6">
        <div className={styles.serviceContentBox}>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} variants={fadeUpVariant} className="flex items-center gap-4 mb-6">
            <span className="text-sm font-semibold tracking-widest text-brand-primary">07</span>
            <div className="h-px w-12 bg-brand-primary/50"></div>
            <span className="text-sm font-semibold tracking-widest text-foreground/60 uppercase">DFM & DFA</span>
          </motion.div>
          <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} variants={fadeUpVariant} className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-8">
            Design for Manufacturing & Design for Assembly
          </motion.h2>
          <motion.p initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} variants={fadeUpVariant} className="text-foreground/80 text-lg leading-relaxed font-light mb-8">
            Most of a product's cost is locked in during design. DFM and DFA reviews recover that cost while it is still cheap to change — by simplifying geometry, consolidating parts, relaxing non-functional tolerances and matching design to available process.
          </motion.p>
          <motion.h3 initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} variants={fadeUpVariant} className="text-xl font-bold text-foreground mb-4">
            What you receive:
          </motion.h3>
          <div className={styles.deliverablesList}>
            {deliverables.map((item, idx) => (
              <div key={idx} className={styles.deliverableItem}>
                <span className={styles.bullet}>•</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} variants={fadeUpVariant} className={styles.bestForBox}>
            <h4 className="font-bold text-foreground mb-1">Best for:</h4>
            <p className="text-foreground/70 text-base font-light">Pre-production design freeze, and existing products with unexplained unit cost.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function PrototypeSupport() {
  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const deliverables = [
    "Prototype-ready design data",
    "Rapid prototyping and machining file preparation",
    "Vendor coordination support",
    "Design iteration based on physical test results",
    "Validation support",
  ];

  return (
    <section className={`${styles.sectionContainer} py-24 md:py-32`} id="prototype">
      <div className="max-w-7xl mx-auto px-6">
        <div className={styles.serviceContentBox}>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} variants={fadeUpVariant} className="flex items-center gap-4 mb-6">
            <span className="text-sm font-semibold tracking-widest text-brand-primary">08</span>
            <div className="h-px w-12 bg-brand-primary/50"></div>
            <span className="text-sm font-semibold tracking-widest text-foreground/60 uppercase">Prototype Development Support</span>
          </motion.div>
          <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} variants={fadeUpVariant} className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-8">
            Prototype Development Support
          </motion.h2>
          <motion.p initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} variants={fadeUpVariant} className="text-foreground/80 text-lg leading-relaxed font-light mb-8">
            The gap between a validated model and a working prototype is where most programmes lose time. We support that transition — preparing prototype-ready data, supporting vendor communication, and feeding physical learnings back into the design.
          </motion.p>
          <motion.h3 initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} variants={fadeUpVariant} className="text-xl font-bold text-foreground mb-4">
            What you receive:
          </motion.h3>
          <div className={styles.deliverablesList}>
            {deliverables.map((item, idx) => (
              <div key={idx} className={styles.deliverableItem}>
                <span className={styles.bullet}>•</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} variants={fadeUpVariant} className={styles.bestForBox}>
            <h4 className="font-bold text-foreground mb-1">Best for:</h4>
            <p className="text-foreground/70 text-base font-light">New products approaching physical proof-of-concept and design verification.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function BomDocs() {
  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const deliverables = [
    "Structured Bills of Material",
    "Part numbering and revision control",
    "Assembly and installation documentation",
    "Engineering change documentation",
    "Technical specification sheets",
  ];

  return (
    <section className={`${styles.sectionContainer} py-24 md:py-32`} id="bom">
      <div className="max-w-7xl mx-auto px-6">
        <div className={styles.serviceContentBox}>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} variants={fadeUpVariant} className="flex items-center gap-4 mb-6">
            <span className="text-sm font-semibold tracking-widest text-brand-primary">09</span>
            <div className="h-px w-12 bg-brand-primary/50"></div>
            <span className="text-sm font-semibold tracking-widest text-foreground/60 uppercase">BOM & Documentation</span>
          </motion.div>
          <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} variants={fadeUpVariant} className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-8">
            BOM Creation & Engineering Documentation
          </motion.h2>
          <motion.p initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} variants={fadeUpVariant} className="text-foreground/80 text-lg leading-relaxed font-light mb-8">
            Complete, structured documentation is what makes a design transferable — to a supplier, a factory, a certification body or a future engineer.
          </motion.p>
          <motion.h3 initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} variants={fadeUpVariant} className="text-xl font-bold text-foreground mb-4">
            What you receive:
          </motion.h3>
          <div className={styles.deliverablesList}>
            {deliverables.map((item, idx) => (
              <div key={idx} className={styles.deliverableItem}>
                <span className={styles.bullet}>•</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} variants={fadeUpVariant} className={styles.bestForBox}>
            <h4 className="font-bold text-foreground mb-1">Best for:</h4>
            <p className="text-foreground/70 text-base font-light">Production release, ERP handover and regulated or audited environments.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function ProductRedesign() {
  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const deliverables = [
    "Existing design analysis",
    "Failure and root-cause assessment",
    "Material and process alternatives",
    "Part consolidation and value engineering",
    "Redesigned models and updated drawing packs",
  ];

  return (
    <section className={`${styles.sectionContainer} py-24 md:py-32`} id="redesign">
      <div className="max-w-7xl mx-auto px-6">
        <div className={styles.serviceContentBox}>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} variants={fadeUpVariant} className="flex items-center gap-4 mb-6">
            <span className="text-sm font-semibold tracking-widest text-brand-primary">10</span>
            <div className="h-px w-12 bg-brand-primary/50"></div>
            <span className="text-sm font-semibold tracking-widest text-foreground/60 uppercase">Product Redesign & Cost Optimisation</span>
          </motion.div>
          <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} variants={fadeUpVariant} className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-8">
            Product Redesign & Cost Optimisation
          </motion.h2>
          <motion.p initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} variants={fadeUpVariant} className="text-foreground/80 text-lg leading-relaxed font-light mb-8">
            An existing product that is expensive, failing in the field or difficult to assemble is a design problem with a design solution. We reverse-engineer, analyse and redesign — targeting cost, performance or manufacturability without losing what already works.
          </motion.p>
          <motion.h3 initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} variants={fadeUpVariant} className="text-xl font-bold text-foreground mb-4">
            What you receive:
          </motion.h3>
          <div className={styles.deliverablesList}>
            {deliverables.map((item, idx) => (
              <div key={idx} className={styles.deliverableItem}>
                <span className={styles.bullet}>•</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} variants={fadeUpVariant} className={styles.bestForBox}>
            <h4 className="font-bold text-foreground mb-1">Best for:</h4>
            <p className="text-foreground/70 text-base font-light">Mature products under margin pressure, warranty issues or supply chain change.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}