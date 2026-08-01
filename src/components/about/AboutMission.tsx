"use client";

import styles from "@/css/components/sections/AboutMission.module.css";
import { motion, Variants } from "framer-motion";

export default function AboutMission() {
  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className={`${styles.sectionContainer} py-24 md:py-32`} id="mission">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className={styles.contentWrapper}>
          
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUpVariant}
            className="flex items-center gap-4 mb-6"
          >
            <span className="text-sm font-semibold tracking-widest text-brand-primary">04</span>
            <div className="h-px w-12 bg-brand-primary/50"></div>
            <span className="text-sm font-semibold tracking-widest text-foreground/60 uppercase">
              Our Mission
            </span>
          </motion.div>
          
          <motion.h2 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUpVariant}
            className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-10"
          >
            Our Mission
          </motion.h2>

          <motion.blockquote 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUpVariant}
            className="text-2xl md:text-3xl font-light text-foreground/90 leading-relaxed mb-10 border-l-4 border-brand-primary pl-6 py-2"
          >
            "Our mission is to provide innovative, reliable, and manufacturable mechanical product design services that enable our clients to develop high-quality products faster, reduce development costs, and achieve sustainable business success through engineering excellence and customer collaboration."
          </motion.blockquote>

          <motion.p 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUpVariant}
            className="text-foreground/70 text-lg leading-relaxed font-light"
          >
            Three things in that sentence matter more than the rest: faster, lower cost, and manufacturable. A design that cannot be made, or that arrives after the launch window, has failed regardless of how elegant it is. Our entire process is arranged around those three outcomes.
          </motion.p>

        </div>

      </div>
    </section>
  );
}