"use client";

import styles from "@/css/components/services/ServicesIndex.module.css";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

export default function ServicesIndex() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const jumpLinks = [
    { number: "01", title: "Product Concept Development", href: "#concept" },
    { number: "02", title: "3D CAD Modeling", href: "#cad" },
    { number: "03", title: "2D Drawings & GD&T", href: "#drawings" },
    { number: "04", title: "Sheet Metal & Plastic Part Design", href: "#sheetmetal" },
    { number: "05", title: "Machine & Equipment Design", href: "#machine" },
    { number: "06", title: "FEA / CAE Analysis", href: "#fea" },
    { number: "07", title: "DFM & DFA", href: "#dfm" },
    { number: "08", title: "Prototype Development Support", href: "#prototype" },
    { number: "09", title: "BOM & Engineering Documentation", href: "#bom" },
    { number: "10", title: "Product Redesign & Cost Optimisation", href: "#redesign" },
  ];

  return (
    <section className={`${styles.sectionContainer} py-24 md:py-32`} id="services-index">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="max-w-4xl">
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
              Our Services
            </span>
          </motion.div>
          
          <motion.h2 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUpVariant}
            className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-6"
          >
            Ten capabilities. <span className="text-foreground/60">One continuous workflow.</span>
          </motion.h2>
          
          <motion.p 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUpVariant}
            className="text-foreground/70 text-lg leading-relaxed font-light mb-12"
          >
            Each service below can be engaged independently — or combined into a single end-to-end programme where we own the product from concept through to production support.
          </motion.p>
        </div>

        {/* Jump-Link Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className={styles.indexGrid}
        >
          {jumpLinks.map((link, index) => (
            <motion.a key={index} variants={cardVariants} href={link.href} className={styles.indexCard}>
              <span className={styles.indexNumber}>{link.number}</span>
              <span className={styles.indexTitle}>{link.title}</span>
            </motion.a>
          ))}
        </motion.div>

      </div>
    </section>
  );
}