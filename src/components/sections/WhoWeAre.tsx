"use client";

import { useRef, useCallback } from "react";
import styles from "@/css/components/sections/WhoWeAre.module.css";
import {
  motion,
  Variants,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

/* ------------------------------------------------------------------
   Tilt config
------------------------------------------------------------------ */
const MAX_TILT = 7;
const SPRING = { stiffness: 140, damping: 20, mass: 0.7 };

/* ------------------------------------------------------------------
   Drawing sequence

   Order matters: a real drawing is built outline first, features
   second, dimensions last. The animation follows that order because
   it's how the audience for this site actually works.
------------------------------------------------------------------ */
const sheetBorder: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  show: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 1.1, ease: "easeInOut" },
      opacity: { duration: 0.01 },
    },
  },
};

const outline: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  show: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 1.0, delay: 0.5, ease: "easeInOut" },
      opacity: { duration: 0.01, delay: 0.5 },
    },
  },
};

const feature: Variants = {
  hidden: { scale: 0, opacity: 0 },
  show: (i: number) => ({
    scale: 1,
    opacity: 1,
    transition: { delay: 1.3 + i * 0.08, duration: 0.4, ease: "backOut" },
  }),
};

const centerline: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  show: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 0.5, delay: 1.7 },
  },
};

const dimension: Variants = {
  hidden: { opacity: 0, y: 6 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 2.0 + i * 0.15, duration: 0.45 },
  }),
};

const callout: Variants = {
  hidden: { opacity: 0, x: -8 },
  show: { opacity: 1, x: 0, transition: { delay: 2.5, duration: 0.5 } },
};

export default function WhoWeAre() {
  const prefersReducedMotion = useReducedMotion();
  const sheetRef = useRef<HTMLDivElement>(null);

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);

  const rotateX = useSpring(
    useTransform(py, [0, 1], [MAX_TILT, -MAX_TILT]),
    SPRING
  );
  const rotateY = useSpring(
    useTransform(px, [0, 1], [-MAX_TILT, MAX_TILT]),
    SPRING
  );

  const glareX = useTransform(px, (v) => `${v * 100}%`);
  const glareY = useTransform(py, (v) => `${v * 100}%`);
  const glare = useTransform(
    [glareX, glareY],
    ([x, y]) =>
      `radial-gradient(420px circle at ${x} ${y}, rgba(255,255,255,0.9), rgba(255,255,255,0) 65%)`
  );

  const onPointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (e.pointerType !== "mouse" || prefersReducedMotion) return;
      const el = sheetRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      px.set((e.clientX - r.left) / r.width);
      py.set((e.clientY - r.top) / r.height);
    },
    [px, py, prefersReducedMotion]
  );

  const onPointerLeave = useCallback(() => {
    px.set(0.5);
    py.set(0.5);
  }, [px, py]);

  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section className={styles.sectionContainer} id="about">
      {/* Millimetre graph paper, the way a drawing sheet is ruled */}
      <div className={styles.paperGrid} aria-hidden="true" />
      <div className={styles.glowBlob} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.layout}>
          {/* ---------------- Left: copy ---------------- */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            transition={{ staggerChildren: 0.15 }}
            className={styles.copyColumn}
          >
            <motion.div variants={fadeUpVariant} className={styles.eyebrow}>
              <span className={styles.eyebrowNum}>01</span>
              <span className={styles.eyebrowRule} />
              <span className={styles.eyebrowText}>Who We Are</span>
            </motion.div>

            <motion.h2 variants={fadeUpVariant} className={styles.heading}>
              Engineering partners,
              <br />
              <span className={styles.headingMuted}>
                not just service providers.
              </span>
            </motion.h2>

            <motion.div variants={fadeUpVariant} className={styles.body}>
              <p>
                We provide end-to-end mechanical product design services,
                including concept development, 3D CAD modeling, engineering
                analysis, design validation, prototyping support, and
                manufacturing documentation.
              </p>
              <p>
                What that means in practice: you don&rsquo;t hand us a problem
                and wait. You get a design team that questions the requirement,
                models the solution, proves it under load, and hands over a
                drawing pack your supplier can quote from without a single
                clarification email.
              </p>
              <p>
                Founded in 2021 with a small team of experienced design
                engineers, IGLOBLE TECHNOLOGIES has grown into a complete
                engineering design capability &mdash; built entirely on the
                quality of the work we deliver and the clients who keep
                returning.
              </p>
            </motion.div>

            <motion.div variants={fadeUpVariant} className={styles.linkRow}>
              <Link href="/about" className={styles.textLink}>
                More about our story
                <FiArrowRight className={styles.linkArrow} />
              </Link>
            </motion.div>
          </motion.div>

          {/* ---------------- Right: drawing sheet ---------------- */}
          <div
            className={styles.sheetPerspective}
            onPointerMove={onPointerMove}
            onPointerLeave={onPointerLeave}
          >
            <motion.div
              ref={sheetRef}
              className={styles.sheet}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={prefersReducedMotion ? undefined : { rotateX, rotateY }}
            >
              {/* Paper light. Sits under the ink so lines stay crisp. */}
              {!prefersReducedMotion && (
                <motion.div
                  aria-hidden="true"
                  className={styles.sheetGlare}
                  style={{ background: glare }}
                />
              )}

              <motion.svg
                viewBox="0 0 560 430"
                className={styles.drawing}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }}
                role="img"
                aria-label="Animated engineering drawing of a mounting flange with dimensions and geometric tolerances"
              >
                <defs>
                  <marker
                    id="arrowStart"
                    markerWidth="8"
                    markerHeight="8"
                    refX="7"
                    refY="4"
                    orient="auto"
                  >
                    <path d="M8,4 L0,1.5 L0,6.5 Z" fill="#2563eb" />
                  </marker>
                  <marker
                    id="arrowEnd"
                    markerWidth="8"
                    markerHeight="8"
                    refX="1"
                    refY="4"
                    orient="auto"
                  >
                    <path d="M0,4 L8,1.5 L8,6.5 Z" fill="#2563eb" />
                  </marker>
                </defs>

                {/* Drawing frame */}
                <motion.rect
                  variants={sheetBorder}
                  x="18"
                  y="18"
                  width="524"
                  height="394"
                  rx="2"
                  fill="none"
                  stroke="#cbd5e1"
                  strokeWidth="1.5"
                />

                {/* Centrelines — drawn before the part, as on a real sheet */}
                <motion.line
                  variants={centerline}
                  x1="90"
                  y1="215"
                  x2="470"
                  y2="215"
                  stroke="#94a3b8"
                  strokeWidth="1"
                  strokeDasharray="14 4 3 4"
                />
                <motion.line
                  variants={centerline}
                  x1="280"
                  y1="80"
                  x2="280"
                  y2="350"
                  stroke="#94a3b8"
                  strokeWidth="1"
                  strokeDasharray="14 4 3 4"
                />

                {/* Part outline */}
                <motion.rect
                  variants={outline}
                  x="130"
                  y="115"
                  width="300"
                  height="200"
                  rx="18"
                  fill="none"
                  stroke="#0f172a"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                />

                {/* Central bore */}
                <motion.circle
                  variants={feature}
                  custom={0}
                  cx="280"
                  cy="215"
                  r="54"
                  fill="none"
                  stroke="#0f172a"
                  strokeWidth="2.5"
                />
                <motion.circle
                  variants={feature}
                  custom={1}
                  cx="280"
                  cy="215"
                  r="40"
                  fill="none"
                  stroke="#94a3b8"
                  strokeWidth="1.5"
                  strokeDasharray="7 5"
                />

                {/* Bolt holes */}
                {[
                  [172, 157],
                  [388, 157],
                  [172, 273],
                  [388, 273],
                ].map(([cx, cy], i) => (
                  <motion.g key={`${cx}-${cy}`} variants={feature} custom={i + 2}>
                    <circle
                      cx={cx}
                      cy={cy}
                      r="14"
                      fill="none"
                      stroke="#0f172a"
                      strokeWidth="2"
                    />
                    <line
                      x1={cx - 20}
                      y1={cy}
                      x2={cx + 20}
                      y2={cy}
                      stroke="#94a3b8"
                      strokeWidth="0.9"
                    />
                    <line
                      x1={cx}
                      y1={cy - 20}
                      x2={cx}
                      y2={cy + 20}
                      stroke="#94a3b8"
                      strokeWidth="0.9"
                    />
                  </motion.g>
                ))}

                {/* Overall width dimension */}
                <motion.g variants={dimension} custom={0}>
                  <line
                    x1="130"
                    y1="78"
                    x2="430"
                    y2="78"
                    stroke="#2563eb"
                    strokeWidth="1.2"
                    markerStart="url(#arrowStart)"
                    markerEnd="url(#arrowEnd)"
                  />
                  <line x1="130" y1="70" x2="130" y2="112" stroke="#2563eb" strokeWidth="0.9" />
                  <line x1="430" y1="70" x2="430" y2="112" stroke="#2563eb" strokeWidth="0.9" />
                  <rect x="258" y="66" width="44" height="18" fill="#ffffff" />
                  <text x="280" y="80" className={styles.dimText}>
                    300
                  </text>
                </motion.g>

                {/* Overall height dimension */}
                <motion.g variants={dimension} custom={1}>
                  <line
                    x1="472"
                    y1="115"
                    x2="472"
                    y2="315"
                    stroke="#2563eb"
                    strokeWidth="1.2"
                    markerStart="url(#arrowStart)"
                    markerEnd="url(#arrowEnd)"
                  />
                  <line x1="434" y1="115" x2="480" y2="115" stroke="#2563eb" strokeWidth="0.9" />
                  <line x1="434" y1="315" x2="480" y2="315" stroke="#2563eb" strokeWidth="0.9" />
                  <rect x="450" y="206" width="44" height="18" fill="#ffffff" />
                  <text x="472" y="220" className={styles.dimText}>
                    200
                  </text>
                </motion.g>

                {/* Bore leader */}
                <motion.g variants={dimension} custom={2}>
                  <path
                    d="M318,177 L356,140 L432,140"
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="1.2"
                    markerStart="url(#arrowStart)"
                  />
                  <text x="436" y="136" className={styles.leaderText}>
                    &#8960;108 H7
                  </text>
                </motion.g>

                {/* Datum feature + geometric tolerance */}
                <motion.g variants={callout}>
                  <path d="M172,315 L172,340" stroke="#f59e0b" strokeWidth="1.2" />
                  <path d="M166,340 L178,340 L172,331 Z" fill="#f59e0b" />
                  <rect
                    x="158"
                    y="340"
                    width="28"
                    height="20"
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="1.2"
                  />
                  <text x="172" y="354" className={styles.datumText}>
                    A
                  </text>

                  <g>
                    <rect
                      x="236"
                      y="340"
                      width="132"
                      height="22"
                      fill="none"
                      stroke="#f59e0b"
                      strokeWidth="1.2"
                    />
                    <line x1="266" y1="340" x2="266" y2="362" stroke="#f59e0b" strokeWidth="1.2" />
                    <line x1="336" y1="340" x2="336" y2="362" stroke="#f59e0b" strokeWidth="1.2" />
                    <text x="251" y="355" className={styles.gdtSymbol}>
                      &#8853;
                    </text>
                    <text x="301" y="355" className={styles.gdtText}>
                      &#8960;0.05
                    </text>
                    <text x="352" y="355" className={styles.gdtText}>
                      A
                    </text>
                  </g>
                </motion.g>
              </motion.svg>

              {/* Title block — real fields, real values */}
              <motion.div
                className={styles.titleBlock}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: 2.7, duration: 0.6 }}
              >
                <div className={styles.tbCell}>
                  <span className={styles.tbLabel}>Drawn by</span>
                  <span className={styles.tbValue}>IGLOBLE</span>
                </div>
                <div className={styles.tbCell}>
                  <span className={styles.tbLabel}>Since</span>
                  <span className={styles.tbValue}>2021</span>
                </div>
                <div className={styles.tbCell}>
                  <span className={styles.tbLabel}>Location</span>
                  <span className={styles.tbValue}>Pune, IN</span>
                </div>
                <div className={styles.tbCell}>
                  <span className={styles.tbLabel}>Projection</span>
                  <span className={styles.tbValue}>1st angle</span>
                </div>
                <div className={styles.tbCell}>
                  <span className={styles.tbLabel}>Rev</span>
                  <span className={styles.tbValue}>A</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}