"use client";

import styles from "@/css/components/sections/FAQ.module.css";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

export default function FAQ() {
  // State to track which accordion is open. Set to number | null.
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const faqs = [
    {
      question: "What kind of projects does IGLOBLE TECHNOLOGIES take on?",
      answer: "Anything from a single component redesign to a complete product development programme — concept through to manufacturing documentation. We work across automotive, industrial machinery, consumer products and heavy engineering.",
    },
    {
      question: "Which CAD software do you work in?",
      answer: "Creo, CATIA and NX. We can deliver in your preferred native format and in neutral formats such as STEP and IGES.",
    },
    {
      question: "Can you work as an extension of our in-house design team?",
      answer: "Yes. Many clients engage us for dedicated design capacity during peak programme loads, with our engineers working to their internal drawing standards and templates.",
    },
    {
      question: "Do you provide FEA and simulation, or only CAD?",
      answer: "Both. Structural, thermal and durability analysis is an in-house capability, which means design and validation happen on the same model without external handoffs.",
    },
    {
      question: "How do you protect our design data?",
      answer: "All client data, drawings and models are treated as strictly confidential. NDAs are signed before project initiation as standard practice.",
    },
    {
      question: "Do you work with international clients?",
      answer: "Yes. We have delivered projects in both domestic and international markets and can work to your regional drawing standards and file formats.",
    },
    {
      question: "How quickly can you start?",
      answer: "Send us your requirement and we will respond with a scope, timeline and cost — typically within 48 hours.",
    },
  ];

  // Generate the JSON-LD schema for FAQPage
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <section className={`${styles.sectionContainer} py-24 md:py-32`} id="faq">
      {/* Inject SEO Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-3xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUpVariant}
            className="flex items-center gap-4 mb-6"
          >
            <span className="text-sm font-semibold tracking-widest text-brand-primary">15</span>
            <div className="h-px w-12 bg-brand-primary/50"></div>
            <span className="text-sm font-semibold tracking-widest text-foreground/60 uppercase">
              Common Questions
            </span>
          </motion.div>
          
          <motion.h2 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUpVariant}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6"
          >
            Questions we're asked <br className="hidden sm:block" />
            <span className="text-foreground/70">before every project.</span>
          </motion.h2>
        </div>

        {/* Accordion */}
        <div className={styles.accordionContainer}>
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            
            return (
              <div key={index} className={styles.accordionItem}>
                <button
                  className={styles.questionButton}
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                >
                  <span className={styles.questionText}>{faq.question}</span>
                  <div className={styles.iconWrapper}>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {isOpen ? <FiMinus size={20} /> : <FiPlus size={20} />}
                    </motion.div>
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className={styles.answerContent}>
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}