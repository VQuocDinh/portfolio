import React, { useRef, useCallback } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, MapPin, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import InteractiveTerminal from './InteractiveTerminal';

const Hero: React.FC = () => {
  const { messages } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  // Raw mouse position values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring physics for fluid movement
  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Different parallax layers with different intensities
  // Glow blobs — move most (background layer)
  const glowX = useTransform(smoothX, [-0.5, 0.5], [-40, 40]);
  const glowY = useTransform(smoothY, [-0.5, 0.5], [-30, 30]);

  // Code window — medium movement
  const codeX = useTransform(smoothX, [-0.5, 0.5], [12, -12]);
  const codeY = useTransform(smoothY, [-0.5, 0.5], [10, -10]);
  const codeRotateX = useTransform(smoothY, [-0.5, 0.5], [3, -3]);
  const codeRotateY = useTransform(smoothX, [-0.5, 0.5], [-3, 3]);

  // Floating badges — fastest movement (foreground)
  const badgeX = useTransform(smoothX, [-0.5, 0.5], [18, -18]);
  const badgeY = useTransform(smoothY, [-0.5, 0.5], [14, -14]);
  const badge2X = useTransform(smoothX, [-0.5, 0.5], [-20, 20]);
  const badge2Y = useTransform(smoothY, [-0.5, 0.5], [-16, 16]);

  // Text & buttons — very subtle
  const textX = useTransform(smoothX, [-0.5, 0.5], [5, -5]);
  const textY = useTransform(smoothY, [-0.5, 0.5], [4, -4]);

  // Grid pattern shift
  const gridX = useTransform(smoothX, [-0.5, 0.5], [-8, 8]);
  const gridY = useTransform(smoothY, [-0.5, 0.5], [-6, 6]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      // Normalize to -0.5 to 0.5
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    },
    [mouseX, mouseY]
  );

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const h = messages.hero;

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-[100vh] flex items-center pt-14 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Parallax grid background */}
      <motion.div
        className="absolute inset-0 hero-pattern pointer-events-none"
        style={{ x: gridX, y: gridY }}
        aria-hidden
      />

      {/* Ambient glow blobs — parallax layer 1 (deepest) */}
      <motion.div
        className="hero-glow hero-glow--blue"
        style={{ x: glowX, y: glowY }}
        aria-hidden
      />
      <motion.div
        className="hero-glow hero-glow--purple"
        style={{
          x: useTransform(smoothX, [-0.5, 0.5], [30, -30]),
          y: useTransform(smoothY, [-0.5, 0.5], [25, -25]),
        }}
        aria-hidden
      />
      <motion.div
        className="hero-glow hero-glow--pink"
        style={{
          x: useTransform(smoothX, [-0.5, 0.5], [-25, 25]),
          y: useTransform(smoothY, [-0.5, 0.5], [-20, 20]),
        }}
        aria-hidden
      />

      <div className="absolute inset-0 pointer-events-none border-b border-apple-border/20" aria-hidden />

      <div className="max-w-6xl mx-auto px-4 md:px-8 w-full relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-14 lg:gap-20">
          {/* Text content — parallax layer 3 (subtle) */}
          <motion.div className="flex-1 text-center md:text-left" style={{ x: textX, y: textY }}>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.4 }}
                className="neu-hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                <span className="text-[12px] font-semibold tracking-wide text-apple-blue">{h.role}</span>
              </motion.div>

              <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[3.75rem] font-bold text-apple-text mb-6 leading-[1.06] tracking-tighter-plus">
                {h.greeting} <br className="hidden sm:block" />
                <span className="gradient-text">{h.name}</span>
              </h1>

              <p className="text-apple-secondary text-lg md:text-[1.15rem] max-w-xl mb-8 leading-relaxed mx-auto md:mx-0">{h.intro}</p>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-2 mb-10 text-sm text-apple-tertiary">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin size={14} className="text-apple-blue shrink-0" aria-hidden />
                  {h.location}
                </span>
                <span className="hidden sm:inline text-apple-border/80" aria-hidden>
                  •
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Sparkles size={14} className="text-apple-blue shrink-0" aria-hidden />
                  {h.openToOpportunities}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <a
                  href="#projects"
                  onClick={(e) => handleScroll(e, 'projects')}
                  className="cta-gradient inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-semibold group"
                >
                  <span className="inline-flex items-center gap-2">
                    {h.viewWork}
                    <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" aria-hidden />
                  </span>
                </a>
                <a
                  href="#contact"
                  onClick={(e) => handleScroll(e, 'contact')}
                  className="neu-btn-ghost inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-semibold"
                >
                  {h.contactMe}
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Code window — parallax layer 2 (medium, with 3D tilt) */}
          <div className="flex-1 flex justify-center md:justify-end w-full max-w-md md:max-w-none" style={{ perspective: 800 }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              style={{
                x: codeX,
                y: codeY,
                rotateX: codeRotateX,
                rotateY: codeRotateY,
                transformStyle: 'preserve-3d',
              }}
              className="relative w-full max-w-[360px] aspect-square md:w-[400px] md:h-[400px] md:max-w-none float-animation"
            >
              <InteractiveTerminal />

              {/* Floating badge bottom-left — parallax layer 4 (foreground, fast) */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                style={{ x: badgeX, y: badgeY }}
                className="absolute -bottom-4 -left-4 md:-left-6 px-4 py-2.5 rounded-xl neu-float"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">⚡</span>
                  </div>
                  <div className="text-left">
                    <p className="text-[11px] font-semibold text-apple-text">2+ years</p>
                    <p className="text-[10px] text-apple-tertiary">Shipping products</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating badge top-right — parallax layer 4 (opposite direction) */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.5 }}
                style={{ x: badge2X, y: badge2Y }}
                className="absolute -top-3 -right-3 md:-right-5 px-3 py-2 rounded-xl neu-float"
              >
                <div className="flex items-center gap-1.5">
                  <span className="text-sm">🎯</span>
                  <span className="text-[11px] font-semibold text-apple-text">Open to work</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-apple-blue/30"
            style={{
              left: `${15 + i * 18}%`,
              top: `${20 + i * 12}%`,
              x: useTransform(smoothX, [-0.5, 0.5], [-(10 + i * 8), 10 + i * 8]),
              y: useTransform(smoothY, [-0.5, 0.5], [-(8 + i * 6), 8 + i * 6]),
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.4,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
