"use client";

import styles from "@/css/components/sections/AboutHero.module.css";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";

export default function AboutHero() {
  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section className={styles.heroContainer}>
      <div className={styles.isometricGrid}></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Breadcrumb */}
        <motion.nav 
          initial="hidden"
          animate="show"
          variants={fadeUpVariant}
          className="flex items-center gap-2 text-sm font-medium text-white/50 mb-8"
        >
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <FiChevronRight size={14} />
          <span className="text-white">About Us</span>
        </motion.nav>

        {/* Section Label */}
        <motion.div 
          initial="hidden"
          animate="show"
          variants={fadeUpVariant}
          transition={{ delay: 0.1 }}
          className="flex items-center gap-4 mb-6"
        >
          <span className="text-sm font-semibold tracking-widest text-[#f59e0b]">ABOUT US</span>
          <div className="h-px w-12 bg-[#f59e0b]/50"></div>
        </motion.div>

        {/* H1 */}
        <motion.h1 
          initial="hidden"
          animate="show"
          variants={fadeUpVariant}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 max-w-5xl leading-tight"
        >
          Five years of turning engineering ideas into <span className="text-white/60">manufacturable products.</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p 
          initial="hidden"
          animate="show"
          variants={fadeUpVariant}
          transition={{ delay: 0.3 }}
          className="text-white/70 text-xl md:text-2xl font-light leading-relaxed max-w-3xl"
        >
          Founded in 2021 in Pune. Built on precision, delivery discipline and long-term client relationships.
        </motion.p>

      </div>
    </section>
  );
}