"use client";

import styles from "@/css/components/sections/WhyChooseUs.module.css";
import { motion, Variants } from "framer-motion";

export default function WhyChooseUs() {
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

  const reasons = [
    {
      number: "01",
      title: "Designs that manufacture.",
      description: "A beautiful model that can't be tooled is a liability. Every design we release passes DFM and DFA review before it leaves our office.",
    },
    {
      number: "02",
      title: "Delivery you can plan around.",
      description: "On-time project delivery is one of the KPIs we measure ourselves on internally. Your production schedule depends on our schedule — we treat it that way.",
    },
    {
      number: "03",
      title: "Cost engineered in, not bolted on.",
      description: "Material selection, part consolidation, process choice and tolerance discipline all move the unit cost. We optimise them during design, when it is still free to do so.",
    },
    {
      number: "04",
      title: "One team, full ownership.",
      description: "Concept, CAD, simulation, drawings, prototype and manufacturing support all sit with the same engineers. Nothing is lost in handover, because there is no handover.",
    },
  ];

  return (
    <section className={`${styles.sectionContainer} py-24 md:py-32`} id="why-us">
      <div className={styles.gridOverlay}></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUpVariant}
            className="flex items-center gap-4 mb-6"
          >
            <span className="text-sm font-semibold tracking-widest text-[#f59e0b]">04</span>
            <div className="h-px w-12 bg-[#f59e0b]/50"></div>
            <span className="text-sm font-semibold tracking-widest text-white/60 uppercase">
              Why IGLOBLE
            </span>
          </motion.div>
          
          <motion.h2 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUpVariant}
            className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
          >
            Four reasons clients <br className="hidden md:block" />
            <span className="text-white/70">keep coming back.</span>
          </motion.h2>
        </div>

        {/* 2x2 Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {reasons.map((reason, index) => (
            <motion.div key={index} variants={cardVariants} className={styles.reasonCard}>
              <span className={styles.number}>{reason.number}</span>
              <h3 className="text-2xl font-bold text-white mb-4">
                {reason.title}
              </h3>
              <p className="text-white/60 text-lg leading-relaxed flex-grow">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}