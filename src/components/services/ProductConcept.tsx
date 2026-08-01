"use client";

import styles from "@/css/components/services/ServiceCard.module.css";
import { motion, Variants } from "framer-motion";

export default function ProductConcept() {
  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const deliverables = [
    "Concept sketches and layouts",
    "Feasibility assessment",
    "Material and manufacturing process direction",
    "Comparative evaluation of concept options",
    "Recommended design direction with documented reasoning",
  ];

  return (
    <section className={`${styles.sectionContainer} py-24 md:py-32`} id="concept">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className={styles.serviceContentBox}>
          
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUpVariant}
            className="flex items-center gap-4 mb-6"
          >
            <span className="text-sm font-semibold tracking-widest text-brand-primary">01</span>
            <div className="h-px w-12 bg-brand-primary/50"></div>
            <span className="text-sm font-semibold tracking-widest text-foreground/60 uppercase">
              Product Concept Development
            </span>
          </motion.div>
          
          <motion.h2 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUpVariant}
            className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-8"
          >
            Product Concept Development
          </motion.h2>

          <motion.p 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUpVariant}
            className="text-foreground/80 text-lg leading-relaxed font-light mb-8"
          >
            Every product begins as a requirement, not a shape. We translate functional needs, operating conditions, volume targets and cost constraints into viable concept directions — then evaluate each one honestly before any detailed modeling starts.
          </motion.p>

          <motion.h3 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUpVariant}
            className="text-xl font-bold text-foreground mb-4"
          >
            What you receive:
          </motion.h3>

          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ show: { transition: { staggerChildren: 0.08 } } }}
            className={styles.deliverablesList}
          >
            {deliverables.map((item, index) => (
              <motion.div key={index} variants={fadeUpVariant} className={styles.deliverableItem}>
                <span className={styles.bullet}>•</span>
                <span>{item}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUpVariant}
            className={styles.bestForBox}
          >
            <h4 className="font-bold text-foreground mb-1">Best for:</h4>
            <p className="text-foreground/70 text-base font-light">
              New product programmes, clean-sheet designs, and clients who need a technical partner at the earliest stage.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}