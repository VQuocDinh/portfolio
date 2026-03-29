import React from 'react';
import Section from './ui/Section';
import { GraduationCap, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const EducationCert: React.FC = () => {
  const { messages } = useLanguage();
  const e = messages.education;

  return (
    <Section id="education" eyebrow={e.eyebrow} title={e.title} subtitle={e.subtitle} muted>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-lg font-bold text-apple-text mb-6 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 text-white shadow-md shadow-blue-500/20">
              <GraduationCap size={20} />
            </span>
            {e.educationHeading}
          </h3>
          <div className="bg-apple-bg edu-card-gradient p-6 md:p-7 rounded-2xl shadow-apple">
            <h4 className="text-base font-bold text-apple-text leading-snug">{e.institution}</h4>
            <p className="gradient-text-blue font-semibold text-sm mt-2">{e.degree}</p>
            <p className="text-apple-tertiary text-sm mb-4">{e.period}</p>
            <ul className="list-none ml-0 text-apple-secondary text-sm space-y-2 leading-relaxed">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" aria-hidden />
                <span>{e.detail}</span>
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className="text-lg font-bold text-apple-text mb-6 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 text-white shadow-md shadow-amber-500/20">
              <Award size={20} />
            </span>
            {e.certHeading}
          </h3>
          <div className="space-y-3">
            {e.certs.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.06 }}
                className="flex items-start sm:items-center justify-between gap-4 p-4 md:p-5 bg-apple-bg rounded-xl border border-apple-border/40 shadow-apple hover:shadow-apple-md hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <div className="min-w-0">
                  <h4 className="text-apple-text font-medium text-sm leading-snug group-hover:text-apple-blue transition-colors">{cert.name}</h4>
                  <p className="text-apple-tertiary text-xs mt-1">{cert.issuer}</p>
                </div>
                <span className="text-apple-tertiary text-xs font-mono bg-apple-surface px-2.5 py-1 rounded-lg border border-apple-border/35 shrink-0">
                  {cert.year}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default EducationCert;
