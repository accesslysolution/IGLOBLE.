"use client";

import styles from "@/css/components/sections/AboutAim.module.css";
import { motion, Variants } from "framer-motion";

export default function AboutAim() {
  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className={`${styles.sectionContainer} py-24 md:py-32`} id="aim">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className={styles.aimBox}>
          
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUpVariant}
            className="inline-flex items-center gap-4 mb-6"
          >
            <span className="text-sm font-semibold tracking-widest text-brand-primary">05</span>
            <div className="h-px w-12 bg-brand-primary/50"></div>
            <span className="text-sm font-semibold tracking-widest text-foreground/60 uppercase">
              Our Aim
            </span>
          </motion.div>
          
          <motion.h2 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUpVariant}
            className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-8"
          >
            What We Are Working Toward
          </motion.h2>

          <div className={styles.thinRule}></div>

          <motion.blockquote 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUpVariant}
            className="text-xl md:text-2xl font-light text-foreground/80 leading-relaxed italic"
          >
            "To become a trusted global engineering design partner by delivering innovative, cost-effective, and high-quality mechanical product design solutions that help clients reduce development time, improve product performance, and accelerate market success."
          </motion.blockquote>

          <div className={styles.thinRule}></div>

        </div>

      </div>
    </section>
  );
}