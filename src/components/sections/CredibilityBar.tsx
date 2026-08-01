"use client";

import styles from "@/css/components/sections/CredibilityBar.module.css";
import { motion, Variants } from "framer-motion";

export default function CredibilityBar() {
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const stats = [
    {
      value: "2021",
      label: "Year Established",
      detail: "Founded in Pune, India",
    },
    {
      value: "5 Years",
      label: "Continuous Delivery",
      detail: "Engineering precision & execution",
    },
    {
      value: "4+",
      label: "Key Industries",
      detail: "Automotive · Machinery · Consumer · Heavy Eng.",
    },
    {
      value: "Domestic & Int'l",
      label: "Client Relationships",
      detail: "Long-term engineering partnerships",
    },
  ];

  return (
    <section className={`${styles.credibilitySection} py-12 md:py-16`}>
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Optional Section Header */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-widest text-slate-500 font-semibold text-center mb-8"
        >
          Trusted engineering delivery since 2021
        </motion.p>

        {/* 4-Column Stats Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-0"
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className={`${styles.statCard} flex flex-col items-center text-center px-4 md:px-6 py-2`}
            >
              <span className={`${styles.statNumber} text-3xl md:text-4xl lg:text-5xl font-bold mb-2`}>
                {stat.value}
              </span>
              <span className="text-slate-900 font-semibold text-base mb-1">
                {stat.label}
              </span>
              <span className="text-slate-500 text-xs leading-relaxed max-w-[200px]">
                {stat.detail}
              </span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}