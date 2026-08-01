"use client";

import styles from "@/css/components/sections/QualityConfidentiality.module.css";
import { motion, Variants } from "framer-motion";
import { FiShield, FiLock, FiKey, FiCheckSquare, FiAward } from "react-icons/fi";

export default function QualityConfidentiality() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const points = [
    {
      title: "NDAs as standard",
      description: "Non-disclosure agreements are signed before any confidential design data is shared with us.",
      icon: <FiKey size={24} />,
    },
    {
      title: "Controlled access",
      description: "Project data is accessible only to the engineers assigned to your project.",
      icon: <FiLock size={24} />,
    },
    {
      title: "Quality discipline",
      description: "Every deliverable passes internal design review and drawing check before release.",
      icon: <FiCheckSquare size={24} />,
    },
    {
      title: "Quality roadmap",
      description: "Achieving international certification such as ISO 9001 is a defined long-term goal for the company.",
      icon: <FiAward size={24} />,
    },
  ];

  return (
    <section className={`${styles.sectionContainer} py-24 md:py-32`} id="commitment">
      {/* Background Watermark Icon */}
      <div className={styles.watermark}>
        <FiShield />
      </div>

      <div className={`${styles.contentWrapper} max-w-7xl mx-auto px-6`}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Copy */}
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-5 flex flex-col"
          >
            <motion.div variants={fadeUpVariant} className="flex items-center gap-4 mb-6">
              <span className="text-sm font-semibold tracking-widest text-[#38bdf8]">11</span>
              <div className="h-px w-12 bg-[#38bdf8]/50"></div>
              <span className="text-sm font-semibold tracking-widest text-white/60 uppercase">
                Our Commitment
              </span>
            </motion.div>
            
            <motion.h2 variants={fadeUpVariant} className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Your design data never leaves <span className="text-white/60">our control.</span>
            </motion.h2>
            
            <motion.p variants={fadeUpVariant} className="text-white/70 text-lg leading-relaxed">
              Mechanical design work means handling a client's most sensitive intellectual property — concepts, tooling data, cost structures and unreleased products. We treat every file we receive as confidential by default.
            </motion.p>
          </motion.div>

          {/* Right Column: 2x2 Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {points.map((point, index) => (
              <motion.div key={index} variants={cardVariants} className={styles.pointCard}>
                <div className={styles.iconWrapper}>
                  {point.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {point.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}