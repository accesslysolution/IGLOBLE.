"use client";

import styles from "@/css/components/sections/IndustriesReach.module.css";
import { motion, Variants } from "framer-motion";

export default function IndustriesReach() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const industries = [
    {
      title: "Automotive",
      description: "Components, sub-assemblies, brackets, enclosures and systems designed to OEM and Tier-1 documentation standards.",
    },
    {
      title: "Industrial Machinery",
      description: "Equipment, mechanisms, fixtures and special-purpose machines built for uptime and serviceability.",
    },
    {
      title: "Consumer Products",
      description: "Product design that balances aesthetics, ergonomics, tooling cost and assembly simplicity.",
    },
    {
      title: "Heavy Engineering",
      description: "Large fabricated structures and load-bearing assemblies, verified through engineering analysis.",
    },
  ];

  return (
    <section className={`${styles.sectionContainer} py-24 md:py-32`} id="industries">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUpVariant}
            className="flex items-center gap-4 mb-6"
          >
            <span className="text-sm font-semibold tracking-widest text-brand-primary">09</span>
            <div className="h-px w-12 bg-brand-primary/50"></div>
            <span className="text-sm font-semibold tracking-widest text-foreground/60 uppercase">
              Where We Work
            </span>
          </motion.div>
          
          <motion.h2 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUpVariant}
            className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-6"
          >
            Four industries. Two markets. <span className="text-foreground/60">One standard.</span>
          </motion.h2>
        </div>

        {/* 4 Industry Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20"
        >
          {industries.map((ind, index) => (
            <motion.div key={index} variants={cardVariants} className={styles.industryCard}>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {ind.title}
              </h3>
              <p className="text-foreground/70 text-lg leading-relaxed font-light">
                {ind.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Market Reach Copy & Expansion Line */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpVariant}
          className="max-w-4xl bg-foreground/5 p-8 md:p-12 rounded-2xl border border-foreground/10"
        >
          <p className="text-foreground/80 text-lg md:text-xl leading-relaxed font-light mb-6">
            Our office is located in Akurdi, Pune — inside one of India's densest concentrations of automotive, machinery and engineering manufacturing. That proximity means shop-floor visits and supplier meetings happen in person. At the same time, we have built long-term client relationships in international markets, delivering to regional drawing standards and working across time zones.
          </p>
          <div className="border-l-2 border-brand-primary pl-6 py-1">
            <p className="text-foreground font-semibold text-lg">
              We are actively extending our capability into aerospace, medical devices and industrial equipment.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}