"use client";

import styles from "@/css/components/sections/AboutKPIs.module.css";
import { motion, Variants } from "framer-motion";

export default function AboutKPIs() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const kpis = [
    "Revenue growth",
    "Profit margin",
    "Repeat clients",
    "On-time project delivery",
    "Design quality",
    "Customer retention",
    "Employee productivity",
  ];

  return (
    <section className={`${styles.sectionContainer} py-24 md:py-32`} id="kpis">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="max-w-4xl">
          
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUpVariant}
            className="flex items-center gap-4 mb-6"
          >
            <span className="text-sm font-semibold tracking-widest text-brand-primary">11</span>
            <div className="h-px w-12 bg-brand-primary/50"></div>
            <span className="text-sm font-semibold tracking-widest text-foreground/60 uppercase">
              Our KPIs
            </span>
          </motion.div>
          
          <motion.h2 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUpVariant}
            className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-6"
          >
            We hold ourselves to numbers, <span className="text-foreground/60">not adjectives.</span>
          </motion.h2>
          
          <motion.p 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUpVariant}
            className="text-foreground/70 text-lg leading-relaxed font-light mb-8"
          >
            Any engineering partner can claim quality. We track it. These are the indicators the business is run on:
          </motion.p>

          {/* Clean list with amber bullet markers */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className={styles.kpiList}
          >
            {kpis.map((kpi, index) => (
              <motion.div key={index} variants={itemVariants} className={styles.kpiItem}>
                <div className={styles.amberBullet}></div>
                <span>{kpi}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.p 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUpVariant}
            className="text-foreground/90 text-lg md:text-xl font-medium leading-relaxed border-l-4 border-brand-primary pl-6 py-2 mt-10"
          >
            Two of these matter most to you directly. On-time project delivery tells you whether we hit dates. Repeat clients tells you what our existing clients decided after we did.
          </motion.p>

        </div>

      </div>
    </section>
  );
}