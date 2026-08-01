"use client";

import styles from "@/css/components/sections/BlogTeaser.module.css";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { FiArrowRight, FiClock } from "react-icons/fi";

export default function BlogTeaser() {
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

  const articles = [
    {
      title: "The True Cost of Tight Tolerances in Machined Parts",
      excerpt: "Why slapping a ±0.01mm tolerance on every dimension is destroying your unit cost, and how to use GD&T to fix it.",
      category: "DFM & Tolerancing",
      date: "July 12, 2026",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Sheet Metal Bending: Designing for the Real World",
      excerpt: "K-factors, bend reliefs, and the minimum flange lengths your fabricator wishes you knew about before you hit release.",
      category: "Sheet Metal",
      date: "June 28, 2026",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "FEA is a Tool, Not an Answer",
      excerpt: "Pretty stress plots won't save a bad design. How to apply boundary conditions that actually match physical reality.",
      category: "Analysis",
      date: "June 05, 2026",
      image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <section className={`${styles.sectionContainer} py-24 md:py-32`} id="insights">
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
            <span className="text-sm font-semibold tracking-widest text-brand-primary">14</span>
            <div className="h-px w-12 bg-brand-primary/50"></div>
            <span className="text-sm font-semibold tracking-widest text-foreground/60 uppercase">
              Engineering Insights
            </span>
          </motion.div>
          
          <motion.h2 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUpVariant}
            className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6"
          >
            Notes from the <br className="hidden md:block" />
            <span className="text-foreground/70">design desk.</span>
          </motion.h2>
          
          <motion.p 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUpVariant}
            className="text-foreground/70 text-lg leading-relaxed"
          >
            Practical writing on mechanical design — GD&T, DFM, sheet metal, plastics, FEA and cost optimisation. Written by engineers who have had drawings rejected and parts fail, and learned from both.
          </motion.p>
        </div>

        {/* 3-Card Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {articles.map((article, index) => (
            <Link key={index} href="/blog" className="block h-full group">
              <motion.article variants={cardVariants} className={styles.blogCard}>
                <div className={styles.imageWrapper}>
                  <span className={styles.categoryTag}>{article.category}</span>
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className={styles.image}
                  />
                </div>
                <div className={styles.contentWrapper}>
                  <h3 className={styles.title}>{article.title}</h3>
                  <p className={styles.excerpt}>{article.excerpt}</p>
                  <div className={styles.dateWrapper}>
                    <FiClock size={14} />
                    <span>{article.date}</span>
                  </div>
                </div>
              </motion.article>
            </Link>
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
            href="/blog" 
            className="group flex items-center gap-2 bg-foreground text-background dark:bg-white dark:text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            Read the Blog
            <FiArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}