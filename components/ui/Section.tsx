import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
}

const Section: React.FC<SectionProps> = ({ id, children, className = "", title, subtitle }) => {
  return (
    <section id={id} className={`scroll-mt-24 py-20 px-4 md:px-8 max-w-7xl mx-auto ${className}`}>
      {(title || subtitle) && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          {title && (
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4 tracking-tight">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-slate-400 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
          <div className="w-16 h-1 bg-primary-500 mx-auto mt-6 rounded-full"></div>
        </motion.div>
      )}
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default Section;