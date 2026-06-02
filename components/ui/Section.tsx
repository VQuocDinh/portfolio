import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  /** Small label above title (e.g. "Overview") */
  eyebrow?: string;
  /** Soft gray band for visual rhythm */
  muted?: boolean;
}

const Section: React.FC<SectionProps> = ({ id, children, className = "", title, subtitle, eyebrow, muted = false }) => {
  return (
    <section
      id={id}
      className={`scroll-mt-24 ${muted ? 'bg-apple-muted/75' : ''}`}
    >
      <div className={`max-w-6xl mx-auto px-4 md:px-8 py-20 md:py-28 ${className}`}>
        {(title || subtitle || eyebrow) && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="mb-14 md:mb-18 text-center max-w-3xl mx-auto"
          >
            {eyebrow && (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 }}
                className="neu-inset-sm inline-flex items-center gap-2 text-[11px] md:text-xs font-semibold uppercase tracking-[0.22em] text-apple-blue mb-4 px-3 py-1.5 rounded-full"
              >
                {eyebrow}
              </motion.p>
            )}
            {title && (
              <h2 className="text-3xl md:text-[2.25rem] lg:text-[2.5rem] font-bold text-apple-text mb-4 tracking-tighter-plus leading-tight">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-apple-secondary text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
            <div className="mt-8 flex justify-center">
              <div className="section-divider" aria-hidden />
            </div>
          </motion.div>
        )}
        
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default Section;
