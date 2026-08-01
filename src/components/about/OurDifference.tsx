"use client";

import styles from "@/css/components/sections/OurDifference.module.css";
import { motion, Variants } from "framer-motion";

export default function OurDifference() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const rowVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const points = [
    {
      number: "01",
      title: "We question the requirement",
      description: "The cheapest design change is the one made before modeling begins. We interrogate the brief — load case, environment, volume, target cost — before committing to a direction.",
    },
    {
      number: "02",
      title: "Design and validation live together",
      description: "CAD and FEA sit in the same team, on the same model. Design decisions are verified as they are made, not months later by an external specialist.",
    },
    {
      number: "03",
      title: "Drawings built for the shop floor",
      description: "We tolerance for function and inspection, not for appearance. The measure of a good drawing is that the supplier never has to call.",
    },
    {
      number: "04",
      title: "Cost is a design parameter",
      description: "Material, process, part count and tolerance all carry a price. We treat cost as an engineering constraint from the first concept.",
    },
    {
      number: "05",
      title: "One accountable team",
      description: "No handovers between vendors. No lost design intent. One team owns the project from brief to production support.",
    },
  ];

  return (
    <section className={`${styles.sectionContainer} py-24 md:py-32`} id="difference">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUpVariant}
            className="flex items-center gap-4 mb-6"
          >
            <span className="text-sm font-semibold tracking-widest text-[#f59e0b]">07</span>
            <div className="h-px w-12 bg-[#f59e0b]/50"></div>
            <span className="text-sm font-semibold tracking-widest text-white/60 uppercase">
              Our Difference
            </span>
          </motion.div>
          
          <motion.h2 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUpVariant}
            className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6"
          >
            Why clients choose an engineering partner <span className="text-white/60">over a drafting vendor.</span>
          </motion.h2>
        </div>

        {/* Numbered Point Rows */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-col"
        >
          {points.map((pt, index) => (
            <motion.div key={index} variants={rowVariants} className={styles.pointRow}>
              <div className="flex items-center gap-6 md:w-1/3">
                <span className={styles.numberBadge}>{pt.number}</span>
                <h3 className="text-2xl font-bold text-white">
                  {pt.title}
                </h3>
              </div>
              <div className="md:w-2/3">
                <p className="text-white/70 text-lg leading-relaxed font-light">
                  {pt.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}