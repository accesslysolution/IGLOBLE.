"use client";

import styles from "@/css/components/sections/CoreValues.module.css";
import { motion, Variants } from "framer-motion";
import { FiAward, FiTarget, FiTool, FiDollarSign, FiClock, FiUsers, FiTrendingUp } from "react-icons/fi";

export default function CoreValues() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
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

  const values = [
    {
      title: "Engineering Excellence",
      description: "Technical rigour is not negotiable. Every model, analysis and drawing is built to a standard we would be willing to defend in a design review.",
      icon: <FiAward size={26} />,
    },
    {
      title: "Precision",
      description: "In mechanical design, small errors become expensive corrections. We build accuracy into the process rather than relying on downstream checking.",
      icon: <FiTarget size={26} />,
    },
    {
      title: "Manufacturability",
      description: "A design is only successful when it can be made — repeatably, at cost, at volume. Manufacturability is a design input, not an afterthought.",
      icon: <FiTool size={26} />,
    },
    {
      title: "Cost Consciousness",
      description: "We help clients reduce development cost and product cost by making the right decisions early, when changes are still inexpensive.",
      icon: <FiDollarSign size={26} />,
    },
    {
      title: "Reliability",
      description: "On-time delivery is a commitment, not an aspiration. Our clients build their schedules on ours.",
      icon: <FiClock size={26} />,
    },
    {
      title: "Collaboration",
      description: "The best products come from open, continuous dialogue between our engineers and our clients' teams.",
      icon: <FiUsers size={26} />,
    },
    {
      title: "Sustainability",
      description: "Efficient material use, part consolidation and longer product life are good engineering and good practice.",
      icon: <FiTrendingUp size={26} />,
    },
  ];

  return (
    <section className={`${styles.sectionContainer} py-24 md:py-32`} id="values">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUpVariant}
            className="flex items-center gap-4 mb-6"
          >
            <span className="text-sm font-semibold tracking-widest text-brand-primary">06</span>
            <div className="h-px w-12 bg-brand-primary/50"></div>
            <span className="text-sm font-semibold tracking-widest text-foreground/60 uppercase">
              What We Stand For
            </span>
          </motion.div>
          
          <motion.h2 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUpVariant}
            className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-6"
          >
            The principles behind every drawing we release.
          </motion.h2>
        </div>

        {/* 3-Across Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {values.map((val, index) => (
            <motion.div key={index} variants={cardVariants} className={styles.valueCard}>
              <div className={styles.iconWrapper}>
                {val.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {val.title}
              </h3>
              <p className="text-foreground/70 text-base leading-relaxed font-light">
                {val.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}