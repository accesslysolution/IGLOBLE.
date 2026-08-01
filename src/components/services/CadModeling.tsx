"use client";

import styles from "@/css/components/services/ServiceCard.module.css";
import { motion, Variants } from "framer-motion";

export default function CadModeling() {
  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const deliverables = [
    "Detailed part and assembly models",
    "Large assembly design and management",
    "Surface and solid modeling",
    "Design tables and configurations",
    "Native files plus neutral formats (STEP, IGES, Parasolid)",
  ];

  return (
    <section className={`${styles.sectionContainer} py-24 md:py-32`} id="cad">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className={styles.serviceContentBox}>
          
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUpVariant}
            className="flex items-center gap-4 mb-6"
          >
            <span className="text-sm font-semibold tracking-widest text-brand-primary">02</span>
            <div className="h-px w-12 bg-brand-primary/50"></div>
            <span className="text-sm font-semibold tracking-widest text-foreground/60 uppercase">
              3D CAD Modeling
            </span>
          </motion.div>
          
          <motion.h2 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUpVariant}
            className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-8"
          >
            3D CAD Modeling — Creo, CATIA, NX
          </motion.h2>

          <motion.p 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUpVariant}
            className="text-foreground/80 text-lg leading-relaxed font-light mb-8"
          >
            Parametric models built to be worked on, not just looked at. Clean feature trees, logical assembly structure and controlled parameters mean revisions take hours instead of restarting the model.
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
              Clients needing production-grade CAD delivered in their own working environment and to their own standards.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}