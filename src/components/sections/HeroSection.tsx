"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import {
  motion,
  Variants,
  useReducedMotion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { FiArrowRight, FiSettings } from "react-icons/fi";
import type {
  Application as SplineApplication,
  SPEObject,
} from "@splinetool/runtime";
import styles from "@/css/components/sections/HeroSection.module.css";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
});

/* ------------------------------------------------------------------
   CONFIG
------------------------------------------------------------------ */

const SPLINE_SCENE = "/scene.splinecode";
const FALLBACK_IMAGE = "/images/hero-vehicle-wireframe.webp";

/* Name of the group to drive. Must match the Objects panel in Spline
   exactly. If it's wrong, the dev console prints every available name. */
const TARGET_OBJECT = "CAR";

/* How far the model travels across the full scroll track. These three
   numbers are the whole animation — tune them, not the code. */
const SCROLL_ROTATION = Math.PI * 1.4; // radians of Y spin, ~250deg
const SCROLL_DRIFT_X = 180; // scene units moved left
const SCROLL_LIFT_Y = 60; // scene units raised at the midpoint

export default function HeroSection() {
  const prefersReducedMotion = useReducedMotion();
  const [isDesktop, setIsDesktop] = useState(false);
  const [sceneVisible, setSceneVisible] = useState(false);
  const [mountScene, setMountScene] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);

  const trackRef = useRef<HTMLElement | null>(null);
  const splineApp = useRef<SplineApplication | null>(null);
  const targetObj = useRef<SPEObject | null>(null);
  const baseTransform = useRef<{ ry: number; px: number; py: number } | null>(
    null
  );

  /* --- Scroll progress across the whole track, 0 to 1 --- */
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  /* ----------------------------------------------------------------
     Copy beats

     Timings leave a deliberate 0.30 -> 0.42 gap where neither beat is
     on screen. That empty stretch — model alone, mid-rotation — is
     what makes the swap read as intentional instead of as two
     elements fighting over the same space.
  ---------------------------------------------------------------- */
  const beatOneOpacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.3],
    [1, 1, 0]
  );
  const beatOneY = useTransform(scrollYProgress, [0, 0.3], [0, -40]);

  const beatTwoOpacity = useTransform(
    scrollYProgress,
    [0.42, 0.52, 0.8, 0.92],
    [0, 1, 1, 0]
  );
  const beatTwoY = useTransform(scrollYProgress, [0.42, 0.52], [30, 0]);

  const cueOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);

  /* Opacity 0 still leaves an element in the paint tree and in the tab
     order. Swapping visibility removes it from both. */
  const beatOneVisibility = useTransform(beatOneOpacity, (v) =>
    v < 0.01 ? "hidden" : "visible"
  );
  const beatTwoVisibility = useTransform(beatTwoOpacity, (v) =>
    v < 0.01 ? "hidden" : "visible"
  );

  /* --- Desktop gate --- */
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    setIsDesktop(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  /* --- Defer the scene until after first paint --- */
  useEffect(() => {
    const schedule =
      typeof window.requestIdleCallback === "function"
        ? window.requestIdleCallback
        : (cb: () => void) => window.setTimeout(cb, 300);

    const id = schedule(() => setMountScene(true));

    return () => {
      if (typeof window.cancelIdleCallback === "function") {
        window.cancelIdleCallback(id as number);
      } else {
        window.clearTimeout(id as number);
      }
    };
  }, []);

  /* ----------------------------------------------------------------
     Scrubbing only exists where the 320vh track exists. Below 1024px
     and under prefers-reduced-motion the track collapses to one
     viewport, the scroll range is zero-length, and scrollYProgress
     goes NaN — which the browser silently drops, leaving every beat
     at full opacity and stacked. This flag must stay in sync with the
     height rules in HeroSection.module.css.
  ---------------------------------------------------------------- */
  const scrubActive = isDesktop && !prefersReducedMotion;
  const showLiveScene = scrubActive && mountScene;

  const handleSceneLoad = useCallback((app: SplineApplication) => {
    splineApp.current = app;

    const obj = app.findObjectByName(TARGET_OBJECT);
    if (obj) {
      targetObj.current = obj;
      /* Animate relative to wherever Spline placed it, so the scene
         still reads correctly if you reposition it in the editor. */
      baseTransform.current = {
        ry: obj.rotation.y,
        px: obj.position.x,
        py: obj.position.y,
      };
    } else if (process.env.NODE_ENV === "development") {
      console.warn(
        `[Spline] "${TARGET_OBJECT}" not found. Available objects:`,
        app.getAllObjects().map((o) => o.name)
      );
    }

    requestAnimationFrame(() => setSceneVisible(true));
  }, []);

  /* --- Drive the model from scroll progress --- */
  useMotionValueEvent(scrollYProgress, "change", (p) => {
    /* A NaN written into position removes the object from the scene
       permanently — no error, no warning, just a blank canvas that
       scrolling never recovers. */
    if (!Number.isFinite(p)) return;

    const obj = targetObj.current;
    const base = baseTransform.current;
    if (!obj || !base) return;

    obj.rotation.y = base.ry + p * SCROLL_ROTATION;
    obj.position.x = base.px - p * SCROLL_DRIFT_X;
    obj.position.y = base.py + Math.sin(p * Math.PI) * SCROLL_LIFT_Y;
  });

  /* --- Stop rendering once the hero is fully off screen --- */
  useEffect(() => {
    if (!showLiveScene || !trackRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const app = splineApp.current;
        if (!app) return;
        if (entry.isIntersecting) {
          if (typeof app.play === "function") app.play();
        } else if (typeof app.stop === "function") {
          app.stop();
        }
      },
      { threshold: 0 }
    );

    observer.observe(trackRef.current);
    return () => observer.disconnect();
  }, [showLiveScene]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.25 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section ref={trackRef} className={styles.heroTrack}>
      <div className={styles.heroSticky}>
        {/* Ambient glow behind the model */}
        <div className={styles.accentGlow} aria-hidden="true" />

        {/* 3D layer */}
        <div className={styles.splineContainer} aria-hidden="true">
          {(!showLiveScene || !sceneVisible) && (
            <div className={styles.splineSkeleton}>
              {imageFailed ? (
                <div className={styles.skeletonPulse} />
              ) : (
                <Image
                  src={FALLBACK_IMAGE}
                  alt=""
                  fill
                  priority
                  sizes="100vw"
                  className={styles.fallbackImage}
                  onError={() => setImageFailed(true)}
                />
              )}
            </div>
          )}

          {showLiveScene && (
            <div
              className={styles.splineStage}
              style={{ opacity: sceneVisible ? 1 : 0 }}
            >
              <Spline
                scene={SPLINE_SCENE}
                onLoad={handleSceneLoad}
                renderOnDemand={false}
                className={styles.splineCanvas}
              />
            </div>
          )}
        </div>

        {/* Technical grid */}
        <div className={styles.gridOverlay} aria-hidden="true" />

        {/* Readability scrim */}
        <div className={styles.scrimOverlay} aria-hidden="true" />

        {/* Beat one — the pitch. Static when scrubbing is off. */}
        <motion.div
          style={
            scrubActive
              ? {
                  opacity: beatOneOpacity,
                  y: beatOneY,
                  visibility: beatOneVisibility,
                }
              : undefined
          }
          className={styles.beatLayer}
        >
          <div className="mx-auto w-full max-w-7xl px-6">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="max-w-2xl text-center lg:text-left"
            >
              <motion.div
                variants={itemVariants}
                className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[0.8125rem] font-medium uppercase tracking-[0.14em] text-brand-accent backdrop-blur-sm"
              >
                <FiSettings className={styles.spinSlow} aria-hidden="true" />
                Mechanical Product Design &amp; Engineering
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="mb-7 text-[clamp(2.75rem,7vw,5.5rem)] font-bold leading-[1.02] tracking-tighter text-white"
              >
                Design the{" "}
                <span className="bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">
                  future.
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-gray-300 md:text-lg lg:mx-0"
              >
                From first concept to production-ready drawings, IGLOBLE
                TECHNOLOGIES turns engineering ideas into manufacturable
                products &mdash; designed with precision, validated through
                analysis, and delivered on schedule.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row lg:justify-start"
              >
                <button className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-primary px-8 py-4 font-semibold text-white shadow-[0_0_28px_rgba(37,99,235,0.35)] transition-all duration-300 hover:scale-[1.03] hover:bg-brand-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent sm:w-auto">
                  Request a Quote
                  <FiArrowRight aria-hidden="true" />
                </button>
                <button className="w-full rounded-full border border-white/10 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent sm:w-auto">
                  Explore Our Services
                </button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Beat two — only exists when there is a scroll range to drive
            it. Rendering it otherwise stacks it on top of beat one. */}
        {scrubActive && (
          <motion.div
            style={{
              opacity: beatTwoOpacity,
              y: beatTwoY,
              visibility: beatTwoVisibility,
            }}
            className={styles.beatLayer}
            aria-hidden="true"
          >
            <div className="mx-auto w-full max-w-7xl px-6">
              <div className="max-w-2xl text-center lg:text-left">
                <p className="mb-8 text-[clamp(1.5rem,3.2vw,2.5rem)] font-semibold leading-tight tracking-tight text-white">
                  Every part starts as a question about how it will be made.
                </p>
                <div className="border-t border-white/10 pt-7">
                  <div className="flex flex-wrap justify-center gap-x-5 gap-y-2.5 font-mono text-[0.8125rem] tracking-wide text-gray-400 lg:justify-start">
                    {[
                      "Product Design",
                      "3D CAD Modeling",
                      "FEA/CAE Analysis",
                      "GD&T Drawings",
                      "Prototyping",
                      "Manufacturing Support",
                    ].map((item, i, arr) => (
                      <span key={item} className="flex items-center gap-5">
                        {item}
                        {i < arr.length - 1 && (
                          <span className="hidden text-white/20 md:inline">
                            /
                          </span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Scroll cue */}
        <motion.div
          style={scrubActive ? { opacity: cueOpacity } : undefined}
          className={styles.scrollCue}
          aria-hidden="true"
        />
      </div>

      {/* Beat two is aria-hidden because it only exists visually. This
          keeps the capability list in the accessibility tree. */}
      <div className="sr-only">
        <h2>IGLOBLE Technologies capabilities</h2>
        <ul>
          <li>Product Design</li>
          <li>3D CAD Modeling</li>
          <li>FEA and CAE Analysis</li>
          <li>GD&amp;T Drawings</li>
          <li>Prototyping</li>
          <li>Manufacturing Support</li>
        </ul>
      </div>
    </section>
  );
}