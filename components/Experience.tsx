import React, { useMemo } from 'react';
import Section from './ui/Section';
import {
  Calendar,
  MapPin,
  Briefcase,
  CheckCircle2,
  Server,
  Layout,
  Code2,
  Database,
  Zap,
  Users,
  FileText,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const Experience: React.FC = () => {
  const { messages } = useLanguage();
  const ex = messages.experience;

  const iconSets = useMemo(
    () => [
      [
        <Layout key="0" size={16} className="text-blue-500" />,
        <Zap key="1" size={16} className="text-orange-500" />,
        <Server key="2" size={16} className="text-purple-500" />,
        <Users key="3" size={16} className="text-cyan-500" />,
        <CheckCircle2 key="4" size={16} className="text-green-500" />,
        <Code2 key="5" size={16} className="text-pink-500" />,
        <FileText key="6" size={16} className="text-slate-500" />,
      ],
      [
        <Layout key="0" size={16} className="text-blue-500" />,
        <Zap key="1" size={16} className="text-orange-500" />,
        <Database key="2" size={16} className="text-purple-500" />,
        <Code2 key="3" size={16} className="text-green-500" />,
        <Users key="4" size={16} className="text-cyan-500" />,
        <FileText key="5" size={16} className="text-slate-500" />,
      ],
    ],
    []
  );

  const stacks = useMemo(
    () => [
      ['React', 'Vite', 'TailwindCSS', 'TypeScript', 'NestJS', 'Prisma ORM', 'PostgreSQL', 'JWT', 'Cloudinary', 'Vercel', 'Render'],
      ['React', 'Next.js', 'TailwindCSS', 'Node.js', 'TypeScript', 'Prisma ORM'],
    ],
    []
  );

  return (
    <Section id="experience" eyebrow={ex.eyebrow} title={ex.title} subtitle={ex.subtitle} muted>
      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px timeline-line hidden md:block" aria-hidden />

        <div className="space-y-10">
          {ex.items.map((exp, index) => (
            <motion.div
              key={exp.company + exp.period}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="relative md:pl-20"
            >
              <div
                className="timeline-dot absolute left-8 -translate-x-1/2 top-0 w-3.5 h-3.5 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 ring-4 ring-white dark:ring-apple-surface hidden md:block"
                aria-hidden
              />

              <div className="experience-card neu-raised rounded-2xl overflow-hidden">
                <div className="p-6 md:p-8 border-b border-apple-border/40">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div className="space-y-2">
                      <span className="inline-flex text-[11px] font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-blue-500 to-purple-500 px-3 py-1 rounded-full">
                        {exp.type}
                      </span>
                      <h3 className="text-xl font-bold text-apple-text tracking-tight">{exp.role}</h3>
                      <div className="flex items-center gap-2 text-apple-blue font-medium mt-1">
                        <Briefcase size={16} className="shrink-0" />
                        {exp.company}
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5 text-sm text-apple-tertiary">
                      <div className="flex items-center gap-2">
                        <Calendar size={14} className="shrink-0" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={14} className="shrink-0" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-apple-secondary leading-relaxed text-sm border-l-2 border-transparent pl-4 py-1" style={{ borderImage: 'linear-gradient(180deg, #0071e3, #6e5ce6) 1' }}>{exp.summary}</p>
                </div>

                <div className="p-6 md:p-8 bg-apple-surface/30">
                  <h4 className="text-[11px] uppercase tracking-[0.15em] text-apple-tertiary font-semibold mb-4">{ex.keyAchievements}</h4>
                  <div className="grid gap-3 mb-8">
                    {exp.achievements.map((text, idx) => (
                      <div key={idx} className="flex gap-3 group">
                        <div className="achievement-icon neu-inset-sm mt-0.5 flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all">
                          {iconSets[index][idx]}
                        </div>
                        <p className="text-apple-secondary text-sm leading-relaxed pt-1">{text}</p>
                      </div>
                    ))}
                  </div>

                  <div>
                    <h4 className="text-[11px] uppercase tracking-[0.15em] text-apple-tertiary font-semibold mb-3">{ex.technologies}</h4>
                    <div className="flex flex-wrap gap-2">
                      {stacks[index].map((tech) => (
                        <span key={tech} className="tag-pill px-3 py-1 text-xs font-medium text-apple-blue rounded-full transition-all">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Experience;
