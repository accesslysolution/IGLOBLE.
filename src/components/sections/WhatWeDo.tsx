"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import styles from "@/css/components/sections/WhatWeDo.module.css";
import {
  motion,
  Variants,
  MotionValue,
  useMotionValue,
  useTransform,
  useAnimationFrame,
  useReducedMotion,
} from "framer-motion";
import Link from "next/link";
import {
  FiArrowRight,
  FiPenTool,
  FiBox,
  FiLayers,
  FiSettings,
  FiActivity,
  FiFileText,
  FiTool,
  FiCheckCircle,
} from "react-icons/fi";

/* ------------------------------------------------------------------
   CAROUSEL CONFIG
------------------------------------------------------------------ */
const SPEED_DPS = 11; // degrees per second — ~33s per full revolution
const DRAG_SENSITIVITY = 0.28; // degrees of spin per pixel dragged
const BACK_OPACITY = 0.22; // how faint a card gets at the far side
const BACK_BRIGHTNESS = 0.45;

type Service = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const services: Service[] = [
  {
    title: "Product Design & Development",
    description:
      "Concept generation, feasibility assessment and detailed design that takes an idea from requirement to a producible product.",
    icon: <FiPenTool size={24} />,
  },
  {
    title: "3D CAD Modeling",
    description:
      "Parametric solid modeling, assemblies and large-assembly management in Creo, CATIA and NX.",
    icon: <FiBox size={24} />,
  },
  {
    title: "Sheet Metal & Plastic Part",
    description:
      "Manufacturing-aware design for formed, stamped, moulded and injection-tooled components.",
    icon: <FiLayers size={24} />,
  },
  {
    title: "Machine Design",
    description:
      "Special-purpose machines, equipment, fixtures and mechanisms designed for real production environments.",
    icon: <FiSettings size={24} />,
  },
  {
    title: "FEA / CAE Analysis",
    description:
      "Structural, thermal and durability simulation that finds failure on screen instead of on the shop floor.",
    icon: <FiActivity size={24} />,
  },
  {
    title: "Engineering Drawings & GD&T",
    description:
      "Production-ready 2D drawings with correct datum schemes and tolerancing that suppliers can build to.",
    icon: <FiFileText size={24} />,
  },
  {
    title: "Prototype Development",
    description:
      "Design support through prototyping, iteration and physical validation.",
    icon: <FiTool size={24} />,
  },
  {
    title: "Design Validation & Support",
    description:
      "DFM/DFA review, cost optimisation, BOM creation and hands-on support through to production.",
    icon: <FiCheckCircle size={24} />,
  },
];

const COUNT = services.length;
const STEP = 360 / COUNT; // 45deg between cards

/* ------------------------------------------------------------------
   CarouselCard

   Sits at a fixed angle on the ring. The ring rotates underneath it,
   so the card's own transform never changes — only its opacity and
   brightness, derived from where it currently is in world space.
------------------------------------------------------------------ */
function CarouselCard({
  service,
  index,
  radius,
  cardWidth,
  ringRotate,
}: {
  service: Service;
  index: number;
  radius: number;
  cardWidth: number;
  ringRotate: MotionValue<number>;
}) {
  /* cos(worldAngle) is +1 at the front of the cylinder, -1 at the back.
     Everything about a card's appearance falls out of that one number. */
  const facing = useTransform(ringRotate, (r) => {
    const world = (((r + index * STEP) % 360) + 360) % 360;
    return Math.cos((world * Math.PI) / 180);
  });

  const opacity = useTransform(
    facing,
    [-1, 1],
    [BACK_OPACITY, 1]
  );

  /* Brightness rather than blur — a filter blur on eight simultaneously
     animating elements is expensive; brightness is nearly free. */
  const filter = useTransform(
    facing,
    (c) => `brightness(${BACK_BRIGHTNESS + (1 - BACK_BRIGHTNESS) * (c + 1) / 2})`
  );

  return (
    <motion.article
      className={styles.card}
      style={{
        opacity,
        filter,
        width: cardWidth,
        /* Push out to the cylinder wall at this card's angle. Static —
           the ring is what spins. */
        transform: `rotateY(${index * STEP}deg) translateZ(${radius}px)`,
      }}
    >
      <div className={styles.iconWrapper}>{service.icon}</div>
      <h3 className={styles.cardTitle}>{service.title}</h3>
      <p className={styles.cardBody}>{service.description}</p>
      <span className={styles.cardIndex} aria-hidden="true">
        {String(index + 1).padStart(2, "0")}
      </span>
    </motion.article>
  );
}

/* ------------------------------------------------------------------
   Static grid — reduced-motion fallback
------------------------------------------------------------------ */
function ServiceGrid({ variants }: { variants: Variants }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {services.map((service) => (
        <motion.article
          key={service.title}
          variants={variants}
          className={styles.staticCard}
        >
          <div className={styles.iconWrapper}>{service.icon}</div>
          <h3 className={styles.cardTitle}>{service.title}</h3>
          <p className={styles.cardBody}>{service.description}</p>
        </motion.article>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */

export default function WhatWeDo() {
  const prefersReducedMotion = useReducedMotion();

  const ringRotate = useMotionValue(0);
  const paused = useRef(false);
  const drag = useRef<{ active: boolean; startX: number; startRot: number }>({
    active: false,
    startX: 0,
    startRot: 0,
  });

  /* Cylinder radius is derived, not guessed: to seat N cards of width w
     around a circle without overlap, r = (w/2 + gap) / tan(PI/N). */
  const [geometry, setGeometry] = useState({ radius: 420, cardWidth: 300 });

  useEffect(() => {
    const compute = () => {
      const vw = window.innerWidth;
      const cardWidth = vw < 640 ? 210 : vw < 1024 ? 250 : 300;
      const gap = vw < 640 ? 10 : 18;
      const radius = Math.round(
        (cardWidth / 2 + gap) / Math.tan(Math.PI / COUNT)
      );
      setGeometry({ radius, cardWidth });
    };

    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  /* Continuous spin. Driven off delta rather than a fixed increment so
     the speed is identical on 60Hz and 144Hz displays. */
  useAnimationFrame((_t, delta) => {
    if (paused.current || drag.current.active) return;
    ringRotate.set(ringRotate.get() + (delta / 1000) * SPEED_DPS);
  });

  const onPointerDown = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      drag.current = {
        active: true,
        startX: e.clientX,
        startRot: ringRotate.get(),
      };
      e.currentTarget.setPointerCapture(e.pointerId);
    },
    [ringRotate]
  );

  const onPointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!drag.current.active) return;
      const dx = e.clientX - drag.current.startX;
      ringRotate.set(drag.current.startRot + dx * DRAG_SENSITIVITY);
    },
    [ringRotate]
  );

  const onPointerUp = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    drag.current.active = false;
    e.currentTarget.releasePointerCapture(e.pointerId);
  }, []);

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

  return (
    <section
      className={`${styles.sectionContainer} py-24 md:py-32`}
      id="services"
    >
      <div className={styles.gridPattern} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="text-sm font-semibold tracking-widest text-brand-primary">
              02
            </span>
            <div className="h-px w-12 bg-brand-primary/50" />
            <span className="text-sm font-semibold tracking-widest text-foreground/60 uppercase">
              What We Do
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6"
          >
            A complete engineering capability under one roof.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-foreground/70 text-lg leading-relaxed"
          >
            Most companies lose weeks moving a project between a design
            consultant, an analysis specialist and a drafting vendor. We
            collapse that chain. Every stage &mdash; from the first concept
            sketch to the released manufacturing drawing &mdash; happens inside
            one team, on one model, with one point of accountability.
          </motion.p>
        </div>
      </div>

      {/* Carousel breaks out of the max-w-7xl container so the cylinder
          can extend past the content column on both sides. */}
      {prefersReducedMotion ? (
        <div className="max-w-7xl mx-auto px-6 relative z-10 mb-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            <ServiceGrid variants={cardVariants} />
          </motion.div>
        </div>
      ) : (
        <div className={styles.carouselViewport}>
          <div
            className={styles.stage}
            onPointerEnter={() => (paused.current = true)}
            onPointerLeave={() => {
              paused.current = false;
              drag.current.active = false;
            }}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
          >
            <motion.div
              className={styles.ring}
              style={{ rotateY: ringRotate }}
            >
              {services.map((service, i) => (
                <CarouselCard
                  key={service.title}
                  service={service}
                  index={i}
                  radius={geometry.radius}
                  cardWidth={geometry.cardWidth}
                  ringRotate={ringRotate}
                />
              ))}
            </motion.div>
          </div>

          <p className={styles.hint}>Hover to pause &middot; drag to spin</p>

          {/* The rotating cards are decorative duplicates of this list as
              far as assistive tech is concerned. */}
          <ul className="sr-only">
            {services.map((s) => (
              <li key={s.title}>
                {s.title}. {s.description}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center md:justify-start"
        >
          <Link
            href="/services"
            className="group flex items-center gap-2 bg-foreground text-background dark:bg-white dark:text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            View All Services
            <FiArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}