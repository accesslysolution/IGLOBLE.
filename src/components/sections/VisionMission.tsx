"use client";

import styles from "@/css/components/sections/VisionMission.module.css";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function VisionMission() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const panelVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className={`${styles.sectionContainer} py-24 md:py-32`} id="vision-mission">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUpVariant}
            className="flex items-center gap-4"
          >
            <span className="text-sm font-semibold tracking-widest text-[#f59e0b]">08</span>
            <div className="h-px w-12 bg-[#f59e0b]/50"></div>
            <span className="text-sm font-semibold tracking-widest text-white/60 uppercase">
              What Drives Us
            </span>
          </motion.div>
        </div>

        {/* 2-Column Grid for Vision & Mission */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
        >
          {/* Vision Panel */}
          <motion.div variants={panelVariants} className={styles.panel}>
            <div className={styles.contentWrapper}>
              <h3 className={styles.heading}>Our Vision</h3>
              <p className="text-white/80 text-xl md:text-2xl leading-relaxed font-light">
                "To be the most trusted global partner in mechanical product design, empowering innovation through engineering excellence, precision, and sustainable solutions."
              </p>
            </div>
          </motion.div>

          {/* Mission Panel */}
          <motion.div variants={panelVariants} className={styles.panel}>
            <div className={styles.contentWrapper}>
              <h3 className={styles.heading}>Our Mission</h3>
              <p className="text-white/80 text-xl md:text-2xl leading-relaxed font-light">
                "Our mission is to provide innovative, reliable, and manufacturable mechanical product design services that enable our clients to develop high-quality products faster, reduce development costs, and achieve sustainable business success through engineering excellence and customer collaboration."
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Text Link CTA */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          className="flex justify-center"
        >
          <Link 
            href="/about" 
            className="group inline-flex items-center gap-2 text-[#f59e0b] font-semibold text-lg hover:text-[#fbbf24] transition-colors"
          >
            Read more about our company
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}