"use client";

import styles from "@/css/components/sections/AboutJourney.module.css";
import { motion, Variants } from "framer-motion";

export default function AboutJourney() {
  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const milestones = [
    {
      year: "2021 — Founded",
      description: "IGLOBLE TECHNOLOGIES is established in Pune with a small team of experienced design engineers specialising in CAD modeling, product development and engineering analysis.",
    },
    {
      year: "2022 — Capability Deepens",
      description: "Engineering analysis and detailed drawing capability expand, allowing full design-and-validate ownership on client programmes.",
    },
    {
      year: "2023 — Industry Expansion",
      description: "Project work broadens across automotive, industrial machinery, consumer products and heavy engineering.",
    },
    {
      year: "2024 — International Delivery",
      description: "Long-term client relationships established in international markets alongside a growing domestic base.",
    },
    {
      year: "2025 — End-to-End Services",
      description: "The complete concept-to-manufacturing-support portfolio consolidates under one team.",
    },
    {
      year: "2026 — Five Years In",
      description: "A full mechanical product design capability, with expansion planned into aerospace, medical devices and industrial equipment.",
    },
  ];

  return (
    <section className={`${styles.sectionContainer} py-24 md:py-32`} id="journey">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUpVariant}
            className="inline-flex items-center gap-4 mb-6"
          >
            <span className="text-sm font-semibold tracking-widest text-brand-primary">02</span>
            <div className="h-px w-12 bg-brand-primary/50"></div>
            <span className="text-sm font-semibold tracking-widest text-foreground/60 uppercase">
              Our Journey
            </span>
          </motion.div>
          
          <motion.h2 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUpVariant}
            className="text-3xl md:text-5xl font-bold tracking-tight text-foreground"
          >
            Five years, milestone by milestone.
          </motion.h2>
        </div>

        {/* Vertical Timeline */}
        <div className={styles.timelineContainer}>
          <div className={styles.leftRail}></div>

          {milestones.map((item, index) => (
            <motion.div 
              key={index}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUpVariant}
              className={styles.timelineItem}
            >
              <div className={styles.nodeDot}></div>
              <span className={styles.year}>{item.year}</span>
              <p className="text-foreground/80 text-lg leading-relaxed font-light">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}