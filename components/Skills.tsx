import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import Section from './ui/Section';
import { useLanguage } from '../contexts/LanguageContext';
import type { SkillDetailEntry } from '../lib/skills';
import { SKILLS_STRUCTURE } from '../lib/skillsRegistry';

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
        {SKILLS_STRUCTURE.map((row) => (
          <div
            key={row.key}
            className="bg-apple-bg p-6 md:p-7 rounded-2xl border border-apple-border/45 shadow-apple hover:shadow-apple-md hover:border-apple-border/50 transition-all duration-300 flex flex-col min-h-[200px]"
          >
            <h3 className="text-[15px] font-semibold text-apple-text mb-5 flex items-center">
              <span className="w-1 h-5 bg-apple-blue rounded-full mr-3 shrink-0" aria-hidden />
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
                    className="px-3 py-1.5 bg-apple-surface/90 text-apple-secondary text-[13px] rounded-lg border border-apple-border/35 font-medium hover:text-apple-text hover:bg-apple-bg hover:border-apple-blue/25 hover:shadow-apple transition-all cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-apple-blue"
                    aria-label={`${sd.learnMoreAria} ${entry.title}`}
                  >
                    {entry.title}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
