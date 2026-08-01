"use client";

import styles from "@/css/components/sections/SoftwareCapabilities.module.css";
import { motion, Variants } from "framer-motion";
import { 
  FiMonitor, 
  FiLayers, 
  FiActivity, 
  FiFileText, 
  FiSettings, 
  FiHardDrive 
} from "react-icons/fi";

export default function SoftwareCapabilities() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const blocks = [
    {
      icon: <FiMonitor size={32} />,
      title: "CAD Platforms",
      items: ["PTC Creo", "CATIA", "Siemens NX"],
    },
    {
      icon: <FiLayers size={32} />,
      title: "Modeling Capability",
      items: [
        "Solid & surface modeling",
        "Large assembly design",
        "Sheet metal",
        "Plastic part & mould-aware design",
        "Weldments & fabrication",
        "Mechanism design"
      ],
    },
    {
      icon: <FiActivity size={32} />,
      title: "Analysis",
      items: [
        "Structural FEA",
        "Thermal analysis",
        "Durability & fatigue studies",
        "Design verification"
      ],
    },
    {
      icon: <FiFileText size={32} />,
      title: "Documentation",
      items: [
        "2D manufacturing drawings",
        "GD&T to international standards",
        "BOM creation",
        "Engineering change documentation"
      ],
    },
    {
      icon: <FiSettings size={32} />,
      title: "Design for Manufacturing",
      items: [
        "DFM & DFA",
        "Tolerance review",
        "Cost optimisation studies"
      ],
    },
    {
      icon: <FiHardDrive size={32} />,
      title: "File Formats",
      items: [
        "Native: Creo, CATIA, NX",
        "STEP / IGES / Parasolid",
        "DWG / PDF"
      ],
    },
  ];

  return (
    <section className={`${styles.sectionContainer} py-24 md:py-32`} id="capabilities">
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
              Tools & Standards
            </span>
          </motion.div>
          
          <motion.h2 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUpVariant}
            className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6"
          >
            Working in your environment, <br className="hidden md:block" />
            <span className="text-foreground/70">to your standards.</span>
          </motion.h2>
          
          <motion.p 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUpVariant}
            className="text-foreground/70 text-lg leading-relaxed"
          >
            We deliver in the platforms our clients already use, following their drawing standards, title blocks and naming conventions — so our output drops straight into your existing engineering workflow.
          </motion.p>
        </div>

        {/* 6-Block Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {blocks.map((block, index) => (
            <motion.div key={index} variants={cardVariants} className={styles.capabilityCard}>
              <div className={styles.iconWrapper}>
                {block.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-6">
                {block.title}
              </h3>
              <ul className={styles.capabilityList}>
                {block.items.map((item, itemIdx) => (
                  <li key={itemIdx} className={styles.listItem}>
                    <span className={styles.bullet}>•</span>
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