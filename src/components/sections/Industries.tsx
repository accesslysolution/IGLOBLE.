"use client";

import styles from "@/css/components/sections/Industries.module.css";
import { motion, Variants } from "framer-motion";

export default function Industries() {
  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const industries = [
    {
      title: "Automotive",
      description: "Components, sub-assemblies, brackets, enclosures and systems designed to OEM and Tier-1 documentation standards.",
      image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?q=80&w=1000&auto=format&fit=crop",
    },
    {
      title: "Industrial Machinery",
      description: "Equipment, mechanisms, fixtures and special-purpose machines built for uptime and serviceability.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop",
    },
    {
      title: "Consumer Products",
      description: "Product design that balances aesthetics, ergonomics, tooling cost and assembly simplicity.",
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop",
    },
    {
      title: "Heavy Engineering",
      description: "Large fabricated structures and load-bearing assemblies, verified through engineering analysis.",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1000&auto=format&fit=crop",
    },
  ];

  return (
    <section className={`${styles.sectionContainer} py-24 md:py-32`} id="industries">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.1 }}
          className="max-w-3xl mb-16"
        >
          <motion.div variants={fadeUpVariant} className="flex items-center gap-4 mb-6">
            <span className="text-sm font-semibold tracking-widest text-brand-primary">03</span>
            <div className="h-px w-12 bg-brand-primary/50"></div>
            <span className="text-sm font-semibold tracking-widest text-foreground/60 uppercase">
              Industries Served
            </span>
          </motion.div>
          
          <motion.h2 variants={fadeUpVariant} className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            Different sectors. <br />
            <span className="text-foreground/70">The same engineering discipline.</span>
          </motion.h2>
          
          <motion.p variants={fadeUpVariant} className="text-foreground/70 text-lg leading-relaxed">
            Over the years, the company expanded its expertise across multiple industries, including automotive, industrial machinery, consumer products, and heavy engineering.
          </motion.p>
        </motion.div>

        {/* Image Tiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {industries.map((industry, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={styles.cardContainer}
            >
              <img 
                src={industry.image} 
                alt={industry.title} 
                className={styles.cardImage}
              />
              <div className={styles.cardOverlay}></div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{industry.title}</h3>
                <p className={styles.cardDescription}>{industry.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing Line */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center md:text-left border-l-2 border-brand-primary pl-6 py-2"
        >
          <p className="text-foreground/80 font-medium text-lg">
            We are actively extending our capability into aerospace, medical devices and industrial equipment.
          </p>
        </motion.div>

      </div>
    </section>
  );
}