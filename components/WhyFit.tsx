import React from 'react';
import Section from './ui/Section';
import { UserCheck, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const WhyFit: React.FC = () => {
  const { messages } = useLanguage();
  const w = messages.whyFit;

  return (
    <Section id="why-fit" eyebrow={w.eyebrow} title={w.title} subtitle={w.subtitle}>
      <div className="max-w-3xl mx-auto">
        <div className="contact-card bg-apple-bg rounded-2xl border border-apple-border/40 shadow-apple p-6 md:p-8">
          <div className="flex items-start gap-4 mb-6">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 text-white shadow-md shadow-blue-500/20">
              <UserCheck size={22} aria-hidden />
            </span>
            <p className="text-apple-secondary leading-relaxed text-[15px] md:text-base pt-0.5">{w.intro}</p>
          </div>
          <ul className="space-y-4">
            {w.points.map((point, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                className="flex gap-3 text-apple-secondary text-[15px] md:text-base leading-relaxed group"
              >
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-emerald-500 group-hover:text-apple-blue transition-colors" aria-hidden />
                <span>{point}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default WhyFit;
