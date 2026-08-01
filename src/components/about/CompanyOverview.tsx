"use client";

import styles from "@/css/components/sections/CompanyOverview.module.css";
import { motion, Variants } from "framer-motion";
import { FiCheck } from "react-icons/fi";

export default function CompanyOverview() {
  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const services = [
    "Product Design & Development",
    "3D CAD Modeling",
    "Sheet Metal & Plastic Part Design",
    "Machine Design",
    "FEA/CAE Analysis",
    "Engineering Drawings & GD&T",
    "Prototype Development",
    "Design Validation and Manufacturing Support",
  ];

  return (
    <section className={`${styles.sectionContainer} py-24 md:py-32`} id="our-story">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className={styles.contentWrapper}>
          
          {/* Section Header */}
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUpVariant}
            className="flex items-center gap-4 mb-6"
          >
            <span className="text-sm font-semibold tracking-widest text-brand-primary">01</span>
            <div className="h-px w-12 bg-brand-primary/50"></div>
            <span className="text-sm font-semibold tracking-widest text-foreground/60 uppercase">
              Our Story
            </span>
          </motion.div>
          
          <motion.h2 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUpVariant}
            className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-8 leading-tight"
          >
            From a small design team to a full-capability engineering partner.
          </motion.h2>

          {/* Editorial Body Copy */}
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            className="space-y-6 text-foreground/80 text-lg leading-relaxed font-light"
          >
            <p>
              Founded in 2021, IGLOBLE TECHNOLOGIES was established with the vision of delivering innovative and cost-effective mechanical product design and engineering solutions. The company began with a small team of experienced design engineers specializing in CAD modeling, product development, and engineering analysis.
            </p>
            <p>
              Over the years, the company expanded its expertise across multiple industries, including automotive, industrial machinery, consumer products, and heavy engineering. By consistently delivering high-quality designs, timely project execution, and customer-focused engineering support, the company built long-term relationships with clients in domestic and international markets.
            </p>
            <p>
              That growth was never accidental. Each new capability was added because a client needed it — analysis because designs needed proving, GD&T because drawings needed to survive the shop floor, prototyping support because concepts needed physical validation. The result is a service portfolio shaped by real project demand rather than a brochure.
            </p>
          </motion.div>

        </div>

        {/* Supporting Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className={`${styles.imageWrapper} max-w-5xl mx-auto`}
        >
          <img 
            src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1600&auto=format&fit=crop" 
            alt="Engineering design review and team collaboration in progress" 
            className="w-full h-[400px] md:h-[500px] object-cover"
          />
        </motion.div>

        {/* Sub-heading & Service List Grid */}
        <div className={styles.contentWrapper}>
          <motion.h3 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUpVariant}
            className="text-2xl font-bold text-foreground mb-8"
          >
            Today, IGLOBLE TECHNOLOGIES offers a comprehensive range of engineering services, including:
          </motion.h3>

          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              show: { transition: { staggerChildren: 0.08 } }
            }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeUpVariant} className={styles.serviceListItem}>
                <div className="text-brand-primary flex-shrink-0">
                  <FiCheck size={18} />
                </div>
                <span>{service}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}