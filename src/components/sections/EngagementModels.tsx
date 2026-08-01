"use client";

import styles from "@/css/components/sections/EngagementModels.module.css";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { FiArrowRight, FiBriefcase, FiUsers, FiTarget } from "react-icons/fi";

export default function EngagementModels() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const models = [
    {
      title: "Project-Based",
      description: "A defined scope, a fixed timeline and an agreed cost. Best for a specific component, assembly or complete product programme.",
      icon: <FiBriefcase size={28} />,
      isElevated: false,
    },
    {
      title: "Dedicated Engineering Capacity",
      description: "One or more of our engineers working as an extension of your in-house team, to your standards and templates. Best for sustained design load and long programmes.",
      icon: <FiUsers size={28} />,
      isElevated: true,
    },
    {
      title: "Consulting & Design Review",
      description: "Focused technical input — DFM audit, tolerance review, analysis verification or a second opinion on an existing design. Best for de-risking a design before release.",
      icon: <FiTarget size={28} />,
      isElevated: false,
    },
  ];

  return (
    <section className={`${styles.sectionContainer} py-24 md:py-32`} id="engagement">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUpVariant}
            className="flex items-center gap-4 mb-6"
          >
            <span className="text-sm font-semibold tracking-widest text-brand-primary">07</span>
            <div className="h-px w-12 bg-brand-primary/50"></div>
            <span className="text-sm font-semibold tracking-widest text-foreground/60 uppercase">
              How To Engage Us
            </span>
          </motion.div>
          
          <motion.h2 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUpVariant}
            className="text-4xl md:text-5xl font-bold tracking-tight text-foreground"
          >
            Three ways to work with us.
          </motion.h2>
        </div>

        {/* 3 Vertical Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8 items-center mb-16"
        >
          {models.map((model, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants} 
              className={`${styles.cardContainer} ${model.isElevated ? styles.elevatedCard : styles.standardCard}`}
            >
              <div className={styles.iconWrapper}>
                {model.icon}
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {model.title}
              </h3>
              <p className="text-foreground/70 text-base leading-relaxed flex-grow">
                {model.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Link 
            href="#contact" 
            className="group flex items-center gap-2 bg-brand-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-brand-primary/90 hover:scale-105 transition-all duration-300 shadow-lg shadow-brand-primary/25"
          >
            Discuss Your Requirement
            <FiArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}