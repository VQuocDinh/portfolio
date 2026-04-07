import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import Section from './ui/Section';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import type { SkillDetailEntry } from '../lib/skills';
import { SKILLS_STRUCTURE } from '../lib/skillsRegistry';

const CATEGORY_GRADIENTS: Record<string, string> = {
  frontend: 'from-blue-500 to-cyan-400',
  backend: 'from-purple-500 to-indigo-400',
  mobile: 'from-pink-500 to-rose-400',
  databases: 'from-emerald-500 to-teal-400',
  stateManagement: 'from-amber-500 to-orange-400',
  devops: 'from-violet-500 to-purple-400',
  testing: 'from-red-500 to-pink-400',
  tools: 'from-sky-500 to-blue-400',
};

const CATEGORY_EMOJIS: Record<string, string> = {
  frontend: '🎨',
  backend: '⚙️',
  mobile: '📱',
  databases: '🗄️',
  stateManagement: '🔄',
  devops: '🚀',
  testing: '🧪',
  tools: '🛠️',
};

const Skills: React.FC = () => {
  const { messages } = useLanguage();
  const sk = messages.skills;
  const sd = messages.skillDetail;

  const detailBySlug = useMemo(() => {
    const m = new Map<string, SkillDetailEntry>();
    for (const e of sd.entries) {
      m.set(e.slug, e);
    }
    return m;
  }, [sd.entries]);

  return (
    <Section id="skills" eyebrow={sk.eyebrow} title={sk.title} subtitle={sk.subtitle}>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {SKILLS_STRUCTURE.map((row, catIndex) => {
          const gradient = CATEGORY_GRADIENTS[row.key] || 'from-blue-500 to-cyan-400';
          const emoji = CATEGORY_EMOJIS[row.key] || '💻';
          return (
            <motion.div
              key={row.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: catIndex * 0.06 }}
              className="skill-card neu-raised p-6 md:p-7 rounded-2xl flex flex-col min-h-[200px]"
            >
              <h3 className="text-[15px] font-semibold text-apple-text mb-5 flex items-center gap-3">
                <span className={`flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br ${gradient} text-white text-sm shadow-md`}>
                  {emoji}
                </span>
                {sk.categories[row.key]}
              </h3>
              <div className="flex flex-wrap gap-2 mt-auto">
                {row.slugs.map((slug) => {
                  const entry = detailBySlug.get(slug);
                  if (!entry) return null;
                  return (
                    <Link
                      key={slug}
                      to={`/skills/${slug}`}
                      className="skill-pill neu-inset-sm px-3.5 py-1.5 text-apple-secondary text-[13px] rounded-lg font-medium hover:text-apple-blue transition-all cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-apple-blue"
                      aria-label={`${sd.learnMoreAria} ${entry.title}`}
                    >
                      {entry.title}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
};

export default Skills;
