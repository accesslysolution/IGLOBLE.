"use client";

import styles from "@/css/components/sections/WhoWeAre.module.css";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function WhoWeAre() {
  // Explicitly typed as Variants to resolve the TypeScript error
  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section className={`${styles.sectionContainer} py-24 md:py-32`} id="about">
      <div className={styles.glowBlob}></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Copy */}
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.2 }}
            className="flex flex-col max-w-2xl"
          >
            {/* Section Label */}
            <motion.div variants={fadeUpVariant} className="flex items-center gap-4 mb-8">
              <span className="text-sm font-semibold tracking-widest text-brand-primary">01</span>
              <div className="h-px w-12 bg-brand-primary/50"></div>
              <span className="text-sm font-semibold tracking-widest text-foreground/60 uppercase">
                Who We Are
              </span>
            </motion.div>

            {/* H2 */}
            <motion.h2 variants={fadeUpVariant} className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-8">
              Engineering partners, <br className="hidden md:block" />
              <span className="text-foreground/70">not just service providers.</span>
            </motion.h2>

            {/* Body Copy */}
            <motion.div variants={fadeUpVariant} className="space-y-6 text-foreground/70 text-lg leading-relaxed">
              <p>
                We provide end-to-end mechanical product design services, including concept development, 3D CAD modeling, engineering analysis, design validation, prototyping support, and manufacturing documentation. Our goal is to deliver innovative, manufacturable, and cost-effective engineering solutions tailored to our clients' needs.
              </p>
              <p>
                What that means in practice: you don't hand us a problem and wait. You get a design team that questions the requirement, models the solution, proves it under load, and hands over a drawing pack your supplier can quote from without a single clarification email.
              </p>
              <p>
                Founded in 2021 with a small team of experienced design engineers, IGLOBLE TECHNOLOGIES has grown into a complete engineering design capability — built entirely on the quality of the work we deliver and the clients who keep returning.
              </p>
            </motion.div>

            {/* Text Link */}
            <motion.div variants={fadeUpVariant} className="mt-10">
              <Link 
                href="/about" 
                className="group inline-flex items-center gap-2 text-brand-primary font-semibold text-lg hover:text-brand-accent transition-colors"
              >
                More about our story
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full h-full min-h-[400px] lg:min-h-[600px] flex items-center justify-center"
          >
            {/* 
              In Next.js, swap this out with the actual <Image> component 
              when you have the final high-res asset in your public folder.
            */}
            <div className={`${styles.imageWrapper} w-full h-full absolute inset-0`}>
              <img 
                src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=2070&auto=format&fit=crop" 
                alt="Engineer working at a CAD workstation" 
                className="w-full h-full object-cover object-center opacity-90 hover:scale-105 transition-transform duration-700"
              />
              {/* Optional Glassy Overlay matching the premium theme */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/10 to-transparent mix-blend-overlay"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}