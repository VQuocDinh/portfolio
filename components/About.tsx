import React, { useMemo } from 'react';
import Section from './ui/Section';
import { Award, Briefcase, Clock, Code, Target, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { messages } = useLanguage();
  const a = messages.about;
  const s = a.stats;

  const stats = useMemo(
    () => [
      { label: s.experience, value: s.experienceValue, icon: <Clock size={22} />, gradient: 'from-blue-500 to-cyan-400' },
      { label: s.projects, value: s.projectsValue, icon: <Briefcase size={22} />, gradient: 'from-purple-500 to-pink-400' },
      { label: s.toeic, value: '725', icon: <Award size={22} />, gradient: 'from-amber-500 to-orange-400' },
      { label: s.degree, value: s.degreeValue, icon: <Code size={22} />, gradient: 'from-emerald-500 to-teal-400' },
    ],
    [s]
  );

  return (
    <Section id="about" eyebrow={a.eyebrow} title={a.title} subtitle={a.subtitle} muted>
      <div className="grid md:grid-cols-2 gap-14 lg:gap-16 items-start">
        <div className="space-y-6 text-apple-secondary leading-[1.75] text-[15px] md:text-base">
          <p>{a.p1}</p>
          <p>{a.p2}</p>

          <div className="pt-6 border-t border-apple-border/40">
            <h3 className="text-apple-text font-semibold mb-3 flex items-center gap-2.5 text-base">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 text-white">
                <Users size={16} />
              </span>
              {a.leadershipHeading}
            </h3>
            <p className="text-sm font-medium text-apple-text">{a.leadershipOrg}</p>
            <p className="gradient-text-blue font-semibold text-sm mt-1 mb-3">{a.leadershipRole}</p>
            <ul className="list-none ml-0 text-sm space-y-2.5 leading-relaxed">
              {a.leadershipPoints.map((line, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" aria-hidden />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-6 border-t border-apple-border/40">
            <h3 className="text-apple-text font-semibold mb-4 flex items-center gap-2.5 text-base">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-cyan-500 text-white">
                <Target size={16} />
              </span>
              {a.careerGoals}
            </h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="mt-2 min-w-[6px] h-[6px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shrink-0" />
                <p className="text-sm leading-relaxed">
                  <strong className="text-apple-text font-medium">{a.shortTermLabel}</strong> {a.shortTerm}
                </p>
              </div>
              <div className="flex gap-3">
                <div className="mt-2 min-w-[6px] h-[6px] bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shrink-0" />
                <p className="text-sm leading-relaxed">
                  <strong className="text-apple-text font-medium">{a.longTermLabel}</strong> {a.longTerm}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="stat-card group bg-apple-bg p-6 rounded-2xl border border-apple-border/40 shadow-apple overflow-hidden"
            >
              <div className={`mb-4 p-2.5 w-fit rounded-xl bg-gradient-to-br ${stat.gradient} text-white shadow-lg shadow-${stat.gradient.split('-')[1]}-500/20`}>
                {stat.icon}
              </div>
              <h3 className="text-2xl font-bold text-apple-text mb-1 tracking-tight stat-number">{stat.value}</h3>
              <p className="text-apple-tertiary text-sm font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default About;
