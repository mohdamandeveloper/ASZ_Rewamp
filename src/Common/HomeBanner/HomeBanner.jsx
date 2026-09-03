import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";

import TextType from "./TextType";
import { useLanguage, useTranslation } from "../../Context/LanguageContext";

import "./HomeBanner.scss";

const SLIDE_INTERVAL = 5000;

const slides = [
  {
    id: 1,
    type: "video",
    src: "/images/hero-globe.mp4",
    alt: "AI digital globe",
  },
  {
    id: 2,
    type: "image",
    src: "/images/hero-code.jpg",
    alt: "AI software development and code",
  },
  {
    id: 3,
    type: "image",
    src: "/images/hero-globe-frame-10.jpg",
    alt: "Artificial intelligence digital globe",
  },
];

export default function HomeBanner() {
  const { isRTL } = useLanguage();
  const t = useTranslation();
  const [activeSlide, setActiveSlide] = useState(0);
  const [isVideoHovered, setIsVideoHovered] = useState(false);
  const [isMediaActive, setIsMediaActive] = useState(false);
  const dir = isRTL ? "rtl" : "ltr";

  const videoRefs = useRef({});

  /*
   * Cursor-driven media movement.
   * The pointer values stay between -1 and 1, then Motion springs
   * make the media follow the cursor with a soft, premium feel.
   */
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const springX = useSpring(pointerX, {
    stiffness: 85,
    damping: 18,
    mass: 0.65,
  });

  const springY = useSpring(pointerY, {
    stiffness: 85,
    damping: 18,
    mass: 0.65,
  });

  const mediaX = useTransform(springX, [-1, 1], [-22, 22]);
  const mediaY = useTransform(springY, [-1, 1], [-14, 14]);

  const rotateY = useTransform(springX, [-1, 1], [-2.2, 2.2]);
  const rotateX = useTransform(springY, [-1, 1], [2.2, -2.2]);

  const mediaScale = useTransform(
    [springX, springY],
    ([x, y]) => 1.085 + Math.min(0.02, (Math.abs(x) + Math.abs(y)) * 0.006)
  );

  /*
   * Tilted-Card style hover boost (inspired by React Bits' TiltedCard):
   * the slide lifts slightly extra the moment the cursor enters the
   * media, on top of the tilt it already gets from pointer position.
   */
  const hoverBoost = useSpring(0, {
    stiffness: 120,
    damping: 18,
    mass: 0.6,
  });

  useEffect(() => {
    hoverBoost.set(isMediaActive ? 1 : 0);
  }, [isMediaActive, hoverBoost]);

  const combinedScale = useTransform(
    [mediaScale, hoverBoost],
    ([base, boost]) => base + boost * 0.035
  );

  const cursorGlowX = useTransform(
    springX,
    [-1, 1],
    ["-15%", "15%"]
  );

  const cursorGlowY = useTransform(
    springY,
    [-1, 1],
    ["-15%", "15%"]
  );

  /*
   * Small bright "shine" highlight that tracks the cursor across the
   * media, like the glare on React Bits' TiltedCard.
   */
  const shineLeft = useTransform(springX, [-1, 1], ["10%", "90%"]);
  const shineTop = useTransform(springY, [-1, 1], ["10%", "90%"]);
  const shineOpacity = useSpring(0, {
    stiffness: 140,
    damping: 22,
  });

  useEffect(() => {
    shineOpacity.set(isMediaActive ? 1 : 0);
  }, [isMediaActive, shineOpacity]);

  const nextSlide = useCallback(() => {
    setActiveSlide((current) => (current + 1) % slides.length);
  }, []);

  const goToSlide = useCallback((index) => {
    setActiveSlide(index);
  }, []);

  /*
   * The carousel keeps running while the user interacts with the
   * content. Only the VIDEO itself is paused on hover.
   */
  useEffect(() => {
    const timer = setInterval(nextSlide, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, [nextSlide]);

  /*
   * Keep the active video playing and all inactive videos paused.
   * Hovering the video overrides this and pauses it.
   */
  useEffect(() => {
    Object.entries(videoRefs.current).forEach(([index, video]) => {
      if (!video) return;

      if (Number(index) === activeSlide && !isVideoHovered) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [activeSlide, isVideoHovered]);

  const handlePointerMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();

    const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((event.clientY - rect.top) / rect.height) * 2 - 1;

    pointerX.set(Math.max(-1, Math.min(1, x)));
    pointerY.set(Math.max(-1, Math.min(1, y)));
  };

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  const handleMediaEnter = () => {
    setIsMediaActive(true);
  };

  const handleMediaLeave = () => {
    setIsMediaActive(false);
    resetPointer();
  };

  const handleVideoEnter = () => {
    setIsVideoHovered(true);
  };

  const handleVideoLeave = () => {
    setIsVideoHovered(false);
  };

  return (
    <section className={`hero-banner${isRTL ? " rtl" : ""}`}>
      <div
        className="hero-media"
        onPointerMove={handlePointerMove}
        onPointerEnter={handleMediaEnter}
        onPointerLeave={handleMediaLeave}
      >
        
        <AnimatePresence initial={false} mode="sync">
          <motion.div
            key={slides[activeSlide].id}
            className="hero-media-slide"
            initial={{
              x: "100%",
              opacity: 0,
              scale: 1.04,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            exit={{
              x: "-14%",
              opacity: 0,
              scale: 1.025,
            }}
            transition={{
              x: {
                duration: 1.15,
                ease: [0.76, 0, 0.24, 1],
              },
              opacity: {
                duration: 0.7,
              },
              scale: {
                duration: 1.2,
                ease: [0.76, 0, 0.24, 1],
              },
            }}
          >
            <motion.div
              className="hero-media-inner"
              style={{
                x: mediaX,
                y: mediaY,
                rotateX,
                rotateY,
                scale: combinedScale,
              }}
            >
              {slides[activeSlide].type === "video" ? (
                <video
                  key={`video-${slides[activeSlide].id}`}
                  ref={(element) => {
                    videoRefs.current[activeSlide] = element;
                  }}
                  className="hero-media-element"
                  src={slides[activeSlide].src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  onPointerEnter={handleVideoEnter}
                  onPointerLeave={handleVideoLeave}
                />
              ) : (
                <img
                  key={`image-${slides[activeSlide].id}`}
                  className="hero-media-element"
                  src={slides[activeSlide].src}
                  alt={slides[activeSlide].alt}
                  draggable="false"
                />
              )}

              {/* Cursor-tracked shine / glare, Tilted-Card style */}
              <motion.div
                className="hero-media-shine"
                style={{
                  left: shineLeft,
                  top: shineTop,
                  opacity: shineOpacity,
                }}
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Dark cinematic overlay */}
        <div className="hero-overlay" />

        {/* Left readability gradient */}
        <div className="hero-gradient" />

        {/* Vignette */}
        <div className="hero-vignette" />

        {/* Subtle technical grid */}
        <div className="hero-grid" />

        {/* Small cursor-follow glow */}
        <motion.div
          className="hero-cursor-glow"
          style={{
            x: cursorGlowX,
            y: cursorGlowY,
          }}
        />
      </div>

      {/* ==================================================
          RECURRING RIGHT → LEFT LIGHT / SPARK
          Runs independently from the carousel.
      ================================================== */}
      <div className="hero-sweep" aria-hidden="true">
        <span className="hero-sweep-line" />
        <span className="hero-sweep-glow" />
      </div>

      {/* ==================================================
          FIXED CONTENT
          This content NEVER changes when slides change.
      ================================================== */}
      <div className="hero-container">
        {/* <motion.div className="bg_color_overlay text_overlay" initial={{
              x: "100%",
              opacity: 0,
              scale: 1.04,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            exit={{
              x: "-14%",
              opacity: 0,
              scale: 1.025,
            }}
            transition={{
              x: {
                duration: 1.15,
                ease: [0.76, 0, 0.24, 1],
              },
              opacity: {
                duration: 0.7,
              },
              scale: {
                duration: 1.2,
                ease: [0.76, 0, 0.24, 1],
              },
            }}>

        </motion.div> */}
        <div className="hero-content">
          <motion.div
            className="hero-eyebrow"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <span className="hero-eyebrow-dot" />
            {t.banner_eyebrow}
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className="hero-title-typed">
              <TextType
                key={t.banner_title_typed}
                text={t.banner_title_typed}
                typingSpeed={60}
                initialDelay={350}
                cursorCharacter="|"
              />
            </span>
            <motion.span
              className="hero-title-gradient"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.1 }}
            >
              {t.banner_title_gradient}
            </motion.span>
            <motion.span
              className="hero-title-muted"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.25 }}
              style={{marginTop: '6px'}}
            >
              {t.banner_title_muted}
            </motion.span>
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.4 }}
          >
            {t.banner_description_line1}
            <br />
            {t.banner_description_line2}
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.55 }}
          >
            <a href="#contact" className="hero-button hero-button-primary">
              <span>{t.banner_btn_primary}</span>
              <span className="hero-button-arrow"><i className={`bi bi-chevron-${dir === "rtl" ? "left" : "right"}`}></i></span>
            </a>

            <a href="#services" className="hero-button hero-button-secondary">
              <span>{t.banner_btn_secondary}</span>
              <span className="hero-button-arrow">→</span>
            </a>
          </motion.div>
        </div>
        <div className="hero-controls">
          <div className="hero-slide-number">
            <span>0{activeSlide + 1}</span>
            <small>/ 03</small>
          </div>

          <div className="hero-progress">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                className={
                  index === activeSlide
                    ? "hero-progress-item active"
                    : "hero-progress-item"
                }
                onClick={() => goToSlide(index)}
              >
                <span key={`${slide.id}-${activeSlide}`} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}