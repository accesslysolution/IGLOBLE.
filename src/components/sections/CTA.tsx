"use client";

import styles from "@/css/components/sections/CTA.module.css";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { FiMail, FiPhone, FiLock } from "react-icons/fi";

export default function CTA() {
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
          Have a design on your desk that needs to move forward?
        </motion.h2>
        
        <motion.p 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUpVariant}
          className="text-white/80 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12"
        >
          Send us your concept, sketch, sample part or existing drawing. We'll come back with a scope, a timeline and a fixed cost — usually within 48 hours.
        </motion.p>
        
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUpVariant}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full mb-10"
        >
          <Link 
            href="/quote" 
            className={`${styles.primaryButton} flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-lg w-full sm:w-auto`}
          >
            <FiMail size={20} />
            Request a Quote
          </Link>
          
          <a 
            href="tel:+919665410263" 
            className={`${styles.secondaryButton} flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-lg w-full sm:w-auto`}
          >
            <FiPhone size={20} />
            Call +91 96654 10263
          </a>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUpVariant}
          className="flex items-center justify-center gap-2 text-white/70 text-sm md:text-base font-medium"
        >
          <FiLock size={16} />
          <p>All enquiries are treated confidentially. We're happy to sign an NDA before you share anything sensitive.</p>
        </motion.div>

      </div>
    </section>
  );
}