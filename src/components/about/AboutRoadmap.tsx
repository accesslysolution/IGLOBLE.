"use client";

import styles from "@/css/components/sections/AboutRoadmap.module.css";
import { motion, Variants } from "framer-motion";

export default function AboutRoadmap() {
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

  const roadmaps = [
    {
      horizon: "1–2 Years",
      title: "Short-Term Goals",
      accentClass: styles.accentBar1,
      items: [
        "Build a strong portfolio of successful product design projects",
        "Acquire 10–20 recurring clients",
        "Deliver projects on time with high quality",
        "Develop expertise in CAD, CAE, and product development",
        "Achieve high customer satisfaction (90%+ positive feedback)",
      ],
    },
    {
      horizon: "3–5 Years",
      title: "Medium-Term Goals",
      accentClass: styles.accentBar2,
      items: [
        "Expand into industries such as automotive, aerospace, medical devices, consumer products, and industrial equipment",
        "Offer complete product development services including concept design, CAD modeling, simulation, prototyping, and manufacturing support",
        "Increase annual revenue by 20–30%",
        "Build a team of experienced design engineers",
      ],
    },
    {
      horizon: "5+ Years",
      title: "Long-Term Goals",
      accentClass: styles.accentBar3,
      items: [
        "Become a preferred global engineering design partner",
        "Establish offices in multiple regions or countries",
        "Develop proprietary tools or methodologies",
        "Introduce in-house products",
        "Achieve international certifications like ISO 9001",
      ],
    },
  ];

  return (
    <section className={`${styles.sectionContainer} py-24 md:py-32`} id="roadmap">
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
            <span className="text-sm font-semibold tracking-widest text-brand-primary">10</span>
            <div className="h-px w-12 bg-brand-primary/50"></div>
            <span className="text-sm font-semibold tracking-widest text-foreground/60 uppercase">
              Where We're Going
            </span>
          </motion.div>
          
          <motion.h2 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUpVariant}
            className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-6"
          >
            Clear goals. <span className="text-foreground/60">Measured progress.</span>
          </motion.h2>
          
          <motion.p 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUpVariant}
            className="text-foreground/70 text-lg leading-relaxed"
          >
            We publish our goals because a client engaging a design partner deserves to know where that partner is headed over the life of a programme.
          </motion.p>
        </div>

        {/* 3-Column Card Layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {roadmaps.map((rm, index) => (
            <motion.div key={index} variants={cardVariants} className={styles.roadmapCard}>
              <div className={rm.accentClass}></div>
              <span className={styles.horizonLabel}>{rm.horizon}</span>
              <h3 className="text-xl font-bold text-foreground mb-6">
                {rm.title}
              </h3>
              <ul className="space-y-3 flex-grow">
                {rm.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-3 text-foreground/80 text-sm md:text-base leading-relaxed">
                    <span className="text-brand-primary font-bold mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}