"use client";

import styles from "@/css/components/sections/PortfolioTeaser.module.css";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function PortfolioTeaser() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
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

  const projects = [
    {
      title: "Suspension Sub-Assembly Restructure",
      outcome: "Part count reduced from 14 to 6. Manufacturing cost lowered by 22%.",
      industry: "Automotive",
      image: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTn_Db4V-hOoPjYMdNcOJCVHpO4RC-gGMyhaID1lvI0N2qqIy0LG1WPBn9rw41G3aTV3UE2XEKuev7JO_4",
    },
    {
      title: "High-Load Bracket FEA Optimization",
      outcome: "Identified and resolved stress concentrations before physical tooling.",
      industry: "Heavy Engineering",
      image: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTrL8w9d8ZilnO1gPcejUb7x0F0AOOKXOps-DQnK1OjyKz-6IHgNt5EYimrEqGZqCDrBLi4vMY3a48O4lI",
    },
    {
      title: "Modular Drive Mechanism",
      outcome: "Parametric wireframe and solid model built for rapid future iterations.",
      industry: "Industrial Machinery",
      image: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcRCpiSd1VTHsjMweSsCcCRWMip739ClJUu8qv8Mi1-zxbVeyHpMRj3YPTzq2EAbn-6xidTvF1ajqPAR_tM",
    },
  ];

  return (
    <section className={`${styles.sectionContainer} py-24 md:py-32`} id="portfolio">
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
            <span className="text-sm font-semibold tracking-widest text-brand-primary">13</span>
            <div className="h-px w-12 bg-brand-primary/50"></div>
            <span className="text-sm font-semibold tracking-widest text-foreground/60 uppercase">
              Selected Work
            </span>
          </motion.div>
          
          <motion.h2 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUpVariant}
            className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6"
          >
            Work that ships.
          </motion.h2>
          
          <motion.p 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUpVariant}
            className="text-foreground/70 text-lg leading-relaxed"
          >
            Five years of design projects across automotive, industrial machinery, consumer products and heavy engineering — delivered to production, on schedule. Much of our work sits under client confidentiality agreements; what we can show, we show in full technical detail.
          </motion.p>
        </div>

        {/* 3-Card Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={cardVariants} className={styles.cardContainer}>
              <img 
                src={project.image} 
                alt={project.title} 
                className={styles.image}
              />
              <div className={styles.overlay}>
                <div className={styles.contentWrapper}>
                  <span className={styles.industryTag}>{project.industry}</span>
                  <h3 className={styles.title}>{project.title}</h3>
                  <p className={styles.outcome}>{project.outcome}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center md:justify-start"
        >
          <Link 
            href="/portfolio" 
            className="group flex items-center gap-2 bg-foreground text-background dark:bg-white dark:text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            View Full Portfolio
            <FiArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}