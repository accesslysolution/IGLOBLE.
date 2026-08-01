"use client";

import styles from "@/css/components/sections/Deliverables.module.css";
import { motion, Variants } from "framer-motion";
import { FiCheck } from "react-icons/fi";

export default function Deliverables() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const deliverables = [
    "Native CAD files (Creo, CATIA, NX) and neutral formats (STEP, IGES, Parasolid)",
    "Production-ready 2D drawings with full GD&T",
    "Analysis reports with results, interpretation and recommendations",
    "Structured Bill of Materials",
    "DFM/DFA review notes",
    "Engineering documentation and specification sheets",
    "Full design intent handover, so your team can carry the design forward independently",
  ];

  return (
    <section className={`${styles.sectionContainer} py-24 md:py-32`} id="deliverables">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Copy & Checklist */}
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col"
          >
            {/* Section Header */}
            <motion.div variants={fadeUpVariant} className="flex items-center gap-4 mb-6">
              <span className="text-sm font-semibold tracking-widest text-brand-primary">09</span>
              <div className="h-px w-12 bg-brand-primary/50"></div>
              <span className="text-sm font-semibold tracking-widest text-foreground/60 uppercase">
                Deliverables
              </span>
            </motion.div>
            
            <motion.h2 variants={fadeUpVariant} className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
              Every project ends with a <br className="hidden md:block" />
              <span className="text-foreground/70">complete handover.</span>
            </motion.h2>
            
            <motion.p variants={fadeUpVariant} className="text-foreground/70 text-lg leading-relaxed mb-10">
              No partial files. No missing documentation. No dependency on us to move forward.
            </motion.p>

            {/* Checklist */}
            <motion.div 
              variants={containerVariants} 
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {deliverables.map((item, index) => (
                <motion.div key={index} variants={itemVariants} className={styles.checkItem}>
                  <div className={styles.checkIconWrapper}>
                    <FiCheck strokeWidth={3} size={16} />
                  </div>
                  <p className="text-foreground/80 text-sm md:text-base leading-relaxed font-medium">
                    {item}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full h-full lg:h-[600px]"
          >
            <div className={styles.imageWrapper}>
              {/* Note: Use Next.js <Image> component with the final asset in production */}
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" 
                alt="Technical engineering documentation and CAD models" 
                className={styles.image}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/10 to-transparent mix-blend-overlay"></div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}