"use client";

import styles from "@/css/components/sections/OurTeam.module.css";
import { motion, Variants } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";

export default function OurTeam() {
  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const capabilities = [
    "Working knowledge of Creo, CATIA and NX",
    "Practical GD&T application, not textbook theory",
    "Manufacturing process awareness across machining, sheet metal, fabrication and moulding",
    "Analysis capability that informs design decisions rather than just reporting them",
    "Direct client communication — you speak to the engineer working on your project",
  ];

  return (
    <section className={`${styles.sectionContainer} py-24 md:py-32`} id="team">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-16">
          
          {/* Left Column: Copy */}
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUpVariant}
            className="lg:col-span-7 flex flex-col"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm font-semibold tracking-widest text-brand-primary">08</span>
              <div className="h-px w-12 bg-brand-primary/50"></div>
              <span className="text-sm font-semibold tracking-widest text-foreground/60 uppercase">
                Our People
              </span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-6 leading-tight">
              Experienced design engineers, <span className="text-foreground/60">not resource pools.</span>
            </h2>

            <div className="space-y-6 text-foreground/80 text-lg leading-relaxed font-light mb-8">
              <p>
                IGLOBLE TECHNOLOGIES began with a small team of experienced design engineers specializing in CAD modeling, product development, and engineering analysis — and that engineering-first culture still defines how we work. Projects are staffed with engineers who understand the manufacturing process behind the part they are modeling, not just the software used to draw it.
              </p>
              <p>
                Building a team of experienced design engineers remains one of our stated medium-term goals, and we grow deliberately: capability first, headcount second. A larger team that cannot hold the standard is not growth.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Workstation Imagery */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <div className={styles.imageWrapper}>
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop" 
                alt="Mechanical design workstation and CAD review" 
                className="w-full h-[400px] object-cover"
              />
            </div>
          </motion.div>

        </div>

        {/* Sub-heading & Engineer Traits */}
        <div className="max-w-4xl">
          <motion.h3 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUpVariant}
            className="text-2xl font-bold text-foreground mb-8"
          >
            What our engineers bring
          </motion.h3>

          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {capabilities.map((item, index) => (
              <motion.div key={index} variants={fadeUpVariant} className={styles.bulletItem}>
                <div className="text-brand-primary flex-shrink-0 mt-1">
                  <FiCheckCircle size={20} />
                </div>
                <p className="text-foreground/80 font-medium text-base">
                  {item}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}