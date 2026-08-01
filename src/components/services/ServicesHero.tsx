"use client";

import styles from "@/css/components/services/ServicesHero.module.css";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { FiChevronRight, FiMail } from "react-icons/fi";

export default function ServicesHero() {
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
          <span className="text-white">Services</span>
        </motion.nav>

        {/* Section Label */}
        <motion.div 
          initial="hidden"
          animate="show"
          variants={fadeUpVariant}
          transition={{ delay: 0.1 }}
          className="flex items-center gap-4 mb-6"
        >
          <span className="text-sm font-semibold tracking-widest text-[#f59e0b]">SERVICES</span>
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
          Engineering services that carry a product <span className="text-white/60">from idea to production.</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p 
          initial="hidden"
          animate="show"
          variants={fadeUpVariant}
          transition={{ delay: 0.3 }}
          className="text-white/70 text-lg md:text-xl font-light leading-relaxed max-w-4xl mb-10"
        >
          We provide end-to-end mechanical product design services, including concept development, 3D CAD modeling, engineering analysis, design validation, prototyping support, and manufacturing documentation. Our goal is to deliver innovative, manufacturable, and cost-effective engineering solutions tailored to our clients' needs.
        </motion.p>

        {/* Button */}
        <motion.div 
          initial="hidden"
          animate="show"
          variants={fadeUpVariant}
          transition={{ delay: 0.4 }}
        >
          <Link 
            href="#contact" 
            className={`${styles.primaryButton} inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-lg`}
          >
            <FiMail size={20} />
            Request a Quote
          </Link>
        </motion.div>

      </div>
    </section>
  );
}