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
      className={`scroll-mt-24 ${muted ? 'bg-apple-surface/60' : ''}`}
    >
      <div className={`max-w-6xl mx-auto px-4 md:px-8 py-20 md:py-24 ${className}`}>
        {(title || subtitle || eyebrow) && (
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.45 }}
            className="mb-14 md:mb-16 text-center max-w-3xl mx-auto"
          >
            {eyebrow && (
              <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] text-apple-blue mb-3">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-3xl md:text-[2.125rem] font-semibold text-apple-text mb-4 tracking-tighter-plus leading-tight">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-apple-secondary text-base md:text-lg leading-relaxed">
                {subtitle}
              </p>
            )}
            <div className="mt-8 flex justify-center">
              <div className="h-px w-12 bg-apple-border rounded-full" aria-hidden />
            </div>
          </motion.div>
        )}
        
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default Section;
