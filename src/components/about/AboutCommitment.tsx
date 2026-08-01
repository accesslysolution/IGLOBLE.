"use client";

import styles from "@/css/components/sections/AboutCommitment.module.css";
import { motion, Variants } from "framer-motion";
import { FiKey, FiLock, FiCheckSquare, FiAward } from "react-icons/fi";

export default function AboutCommitment() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
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

  const points = [
    {
      title: "Point 1",
      description: "NDAs signed before data is shared",
      icon: <FiKey size={24} />,
    },
    {
      title: "Point 2",
      description: "Project data restricted to assigned engineers",
      icon: <FiLock size={24} />,
    },
    {
      title: "Point 3",
      description: "Internal design review and drawing check before every release",
      icon: <FiCheckSquare size={24} />,
    },
    {
      title: "Point 4",
      description: "ISO 9001 certification defined as a long-term company goal",
      icon: <FiAward size={24} />,
    },
  ];

  return (
    <section className={`${styles.sectionContainer} py-24 md:py-32`} id="commitment">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Copy */}
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUpVariant}
            className="lg:col-span-5 flex flex-col"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm font-semibold tracking-widest text-[#38bdf8]">12</span>
              <div className="h-px w-12 bg-[#38bdf8]/50"></div>
              <span className="text-sm font-semibold tracking-widest text-white/60 uppercase">
                Confidentiality & Quality
              </span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Your intellectual property, <span className="text-white/60">protected as our own.</span>
            </h2>
            
            <p className="text-white/70 text-lg leading-relaxed font-light">
              Mechanical design work means handling a client's most sensitive intellectual property — concepts, tooling data, cost structures and unreleased products. Every file we receive is treated as confidential by default.
            </p>
          </motion.div>

          {/* Right Column: 2x2 Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {points.map((pt, index) => (
              <motion.div key={index} variants={cardVariants} className={styles.commitmentCard}>
                <div className="text-[#38bdf8] mb-4">
                  {pt.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {pt.title}
                </h3>
                <p className="text-white/70 text-sm md:text-base leading-relaxed">
                  {pt.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
}