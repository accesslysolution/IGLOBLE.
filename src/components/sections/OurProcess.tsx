"use client";

import styles from "@/css/components/sections/OurProcess.module.css";
import { motion, Variants } from "framer-motion";

export default function OurProcess() {
  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const steps = [
    {
      number: "01",
      title: "Requirement & Feasibility",
      description: "We start by understanding the functional requirement, environment, volume, budget and target manufacturing process. You get a written scope, timeline and cost before work begins.",
    },
    {
      number: "02",
      title: "Concept Development",
      description: "Multiple concept directions, evaluated against function, cost and manufacturability. You choose the direction with full visibility of the trade-offs.",
    },
    {
      number: "03",
      title: "3D CAD Modeling",
      description: "Detailed parametric modeling and assembly build-up in Creo, CATIA or NX — structured so future revisions take hours, not weeks.",
    },
    {
      number: "04",
      title: "Engineering Analysis",
      description: "FEA and CAE studies to verify strength, stiffness, thermal behaviour and durability before any material is cut.",
    },
    {
      number: "05",
      title: "Drawings & Documentation",
      description: "Production-ready 2D drawings with GD&T, BOM, and complete engineering documentation released in your required format.",
    },
    {
      number: "06",
      title: "Prototype & Mfg Support",
      description: "Support through prototype build, design iteration, supplier queries, validation and ramp to production.",
    },
  ];

  return (
    <section className={`${styles.sectionContainer} py-24 md:py-32`} id="process">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="max-w-3xl mb-12"
        >
          <motion.div variants={fadeUpVariant} className="flex items-center gap-4 mb-6">
            <span className="text-sm font-semibold tracking-widest text-brand-primary">05</span>
            <div className="h-px w-12 bg-brand-primary/50"></div>
            <span className="text-sm font-semibold tracking-widest text-foreground/60 uppercase">
              How We Work
            </span>
          </motion.div>
          
          <motion.h2 variants={fadeUpVariant} className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            A process built to <br className="hidden md:block" />
            <span className="text-foreground/70">remove surprises.</span>
          </motion.h2>
        </motion.div>

        {/* Timeline Flow */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.15 }}
          className={styles.timelineWrapper}
        >
          {/* Connecting Line */}
          <div className={styles.timelineLine}></div>
          
          {/* Steps */}
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              variants={fadeUpVariant} 
              className={styles.timelineItem}
            >
              <div className={styles.node}>{step.number}</div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-foreground/70 text-base leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}