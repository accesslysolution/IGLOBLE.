"use client";

import styles from "@/css/components/sections/AboutCTA.module.css";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { FiMail, FiArrowRight } from "react-icons/fi";

export default function AboutCTA() {
  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className={`${styles.sectionContainer} py-24 md:py-32`} id="contact">
      <div className={styles.patternOverlay}></div>
      
      <div className={`${styles.contentWrapper} max-w-4xl mx-auto px-6`}>
        
        <motion.h2 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUpVariant}
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight"
        >
          Let's talk about what you're building.
        </motion.h2>
        
        <motion.p 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUpVariant}
          className="text-white/80 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12"
        >
          Whether you have a finished specification or a rough sketch, we can tell you what's involved, what it will cost and how long it will take.
        </motion.p>
        
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUpVariant}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full"
        >
          <Link 
            href="/quote" 
            className={`${styles.primaryButton} flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-lg w-full sm:w-auto`}
          >
            <FiMail size={20} />
            Request a Quote
          </Link>
          
          <Link 
            href="/#services" 
            className={`${styles.secondaryButton} flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-lg w-full sm:w-auto`}
          >
            View Our Services
            <FiArrowRight size={20} />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}