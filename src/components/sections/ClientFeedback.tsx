"use client";

import styles from "@/css/components/sections/ClientFeedback.module.css";
import { motion, Variants } from "framer-motion";
import { useRef } from "react";

export default function ClientFeedback() {
  // BUILD NOTE: Set this to true ONLY when real quotes are collected.
  // When false, the section is completely hidden from the DOM.
  const isReadyForLaunch = false;

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const testimonials = [
    {
      quote: "The team at IGLOBLE consistently delivers manufacturing-ready drawings that our suppliers can actually work with. Their DFM process has saved us countless hours of revision.",
      name: "Client Name",
      designation: "Engineering Manager",
      company: "Automotive Component Manufacturer, Pune",
      industry: "Automotive",
    },
    {
      quote: "We brought them in to handle a complex assembly that was stalling our production schedule. They took full ownership, ran the FEA, and delivered the final models ahead of time.",
      name: "Client Name",
      designation: "Product Director",
      company: "Confidential Client",
      industry: "Consumer Products",
    },
    {
      quote: "It's rare to find an engineering partner who understands the realities of the shop floor. Their machine designs are built for actual uptime and serviceability.",
      name: "Client Name",
      designation: "Head of Operations",
      company: "Industrial Equipment Corp",
      industry: "Industrial Machinery",
    },
  ];

  if (!isReadyForLaunch) {
    return null; // Hides the section if real quotes aren't ready
  }

  return (
    <section className={`${styles.sectionContainer} py-24 md:py-32`} id="feedback">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUpVariant}
            className="flex items-center gap-4 mb-6"
          >
            <span className="text-sm font-semibold tracking-widest text-brand-primary">12</span>
            <div className="h-px w-12 bg-brand-primary/50"></div>
            <span className="text-sm font-semibold tracking-widest text-foreground/60 uppercase">
              Client Feedback
            </span>
          </motion.div>
          
          <motion.h2 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUpVariant}
            className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6"
          >
            Measured by the clients <br className="hidden md:block" />
            <span className="text-foreground/70">who return.</span>
          </motion.h2>

          <motion.p 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUpVariant}
            className="text-foreground/70 text-lg leading-relaxed max-w-2xl"
          >
            By consistently delivering high-quality designs, timely project execution, and customer-focused engineering support, the company built long-term relationships with clients in domestic and international markets.
          </motion.p>
        </div>

        {/* 3-Card Slider */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={styles.sliderWrapper}
        >
          <div className={styles.sliderContainer} ref={scrollContainerRef}>
            {testimonials.map((item, index) => (
              <div key={index} className={styles.testimonialCard}>
                
                <span className={styles.industryTag}>{item.industry}</span>
                
                {/* SVG Quote Icon */}
                <div className={styles.quoteIcon}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.58333 17.3333C3.50428 17.3333 2.625 16.4541 2.625 15.375V11.125C2.625 10.046 3.50428 9.16667 4.58333 9.16667H7.40698C7.63665 6.6432 9.07635 4.67205 11.2332 3.65825C11.5838 3.49348 11.9965 3.64415 12.1613 3.99477C12.326 4.34538 12.1754 4.75806 11.8247 4.92283C10.2798 5.64862 9.25555 7.15178 9.04944 9.16667H11.125C12.2041 9.16667 13.0833 10.046 13.0833 11.125V15.375C13.0833 16.4541 12.2041 17.3333 11.125 17.3333H4.58333ZM15.4583 17.3333C14.3793 17.3333 13.5 16.4541 13.5 15.375V11.125C13.5 10.046 14.3793 9.16667 15.4583 9.16667H18.282C18.5116 6.6432 19.9513 4.67205 22.1082 3.65825C22.4588 3.49348 22.8715 3.64415 23.0363 3.99477C23.201 4.34538 23.0504 4.75806 22.6997 4.92283C21.1548 5.64862 20.1306 7.15178 19.9244 9.16667H22C23.0791 9.16667 23.9583 10.046 23.9583 11.125V15.375C23.9583 16.4541 23.0791 17.3333 22 17.3333H15.4583Z"/>
                  </svg>
                </div>

                <p className="text-foreground/80 text-lg leading-relaxed flex-grow mb-8 italic">
                  "{item.quote}"
                </p>

                <div className="mt-auto border-t border-black/5 dark:border-white/10 pt-4">
                  <h4 className="font-bold text-foreground">{item.name}</h4>
                  <p className="text-sm font-medium text-foreground/70">{item.designation}</p>
                  <p className="text-sm text-foreground/50">{item.company}</p>
                </div>

              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}