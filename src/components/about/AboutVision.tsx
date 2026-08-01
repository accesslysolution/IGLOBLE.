"use client";

import styles from "@/css/components/sections/AboutVision.module.css";
import { motion, Variants } from "framer-motion";

export default function AboutVision() {
  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className={`${styles.sectionContainer} py-24 md:py-32`} id="vision">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className={styles.contentWrapper}>
          
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUpVariant}
            className="flex items-center gap-4 mb-6"
          >
            <span className="text-sm font-semibold tracking-widest text-[#f59e0b]">03</span>
            <div className="h-px w-12 bg-[#f59e0b]/50"></div>
            <span className="text-sm font-semibold tracking-widest text-white/60 uppercase">
              Our Vision
            </span>
          </motion.div>
          
          <motion.h2 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUpVariant}
            className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-10"
          >
            Our Vision
          </motion.h2>

          <motion.blockquote 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUpVariant}
            className="text-2xl md:text-3xl font-light text-white/90 leading-relaxed mb-10"
          >
            "To be the most trusted global partner in mechanical product design, empowering innovation through engineering excellence, precision, and sustainable solutions."
          </motion.blockquote>

          <motion.p 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUpVariant}
            className="text-white/60 text-lg leading-relaxed font-light"
          >
            Trust in engineering is not built through claims — it is built one delivered project at a time, over years, with clients who return because the last drawing pack worked exactly as promised. That is the standard we are working toward on a global scale.
          </motion.p>

        </div>

      </div>
    </section>
  );
}