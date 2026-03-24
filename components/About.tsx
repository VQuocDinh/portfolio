import React, { useMemo } from 'react';
import Section from './ui/Section';
import { Award, Briefcase, Clock, Code, Target, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { messages } = useLanguage();
  const a = messages.about;
  const s = a.stats;

  const stats = useMemo(
    () => [
      { label: s.experience, value: s.experienceValue, icon: <Clock size={20} className="text-apple-blue" /> },
      { label: s.projects, value: s.projectsValue, icon: <Briefcase size={20} className="text-apple-blue" /> },
      { label: s.toeic, value: '725', icon: <Award size={20} className="text-apple-blue" /> },
      { label: s.degree, value: s.degreeValue, icon: <Code size={20} className="text-apple-blue" /> },
    ],
    [s]
  );

  return (
    <Section id="about" eyebrow={a.eyebrow} title={a.title} subtitle={a.subtitle} muted>
      <div className="grid md:grid-cols-2 gap-14 lg:gap-16 items-start">
        <div className="space-y-6 text-apple-secondary leading-[1.75] text-[15px] md:text-base">
          <p>{a.p1}</p>
          <p>{a.p2}</p>

          <div className="pt-6 border-t border-apple-border/50">
            <h3 className="text-apple-text font-semibold mb-3 flex items-center gap-2 text-base">
              <Users size={18} className="text-apple-blue shrink-0" />
              {a.leadershipHeading}
            </h3>
            <p className="text-sm font-medium text-apple-text">{a.leadershipOrg}</p>
            <p className="text-apple-blue font-semibold text-sm mt-1 mb-3">{a.leadershipRole}</p>
            <ul className="list-disc list-outside ml-4 text-sm space-y-2 leading-relaxed">
              {a.leadershipPoints.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          </div>

          <div className="pt-6 border-t border-apple-border/50">
            <h3 className="text-apple-text font-semibold mb-4 flex items-center gap-2 text-base">
              <Target size={18} className="text-apple-blue shrink-0" />
              {a.careerGoals}
            </h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="mt-2 min-w-[6px] h-[6px] bg-apple-blue rounded-full shrink-0" />
                <p className="text-sm leading-relaxed">
                  <strong className="text-apple-text font-medium">{a.shortTermLabel}</strong> {a.shortTerm}
                </p>
              </div>
              <div className="flex gap-3">
                <div className="mt-2 min-w-[6px] h-[6px] bg-apple-blue rounded-full shrink-0" />
                <p className="text-sm leading-relaxed">
                  <strong className="text-apple-text font-medium">{a.longTermLabel}</strong> {a.longTerm}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group bg-white p-6 rounded-2xl border border-black/[0.06] shadow-apple hover:shadow-apple-md hover:border-black/[0.08] transition-all duration-300"
            >
              <div className="mb-4 p-3 bg-apple-surface/80 w-fit rounded-xl border border-black/[0.04] group-hover:bg-white transition-colors">
                {stat.icon}
              </div>
              <h3 className="text-2xl font-semibold text-apple-text mb-1 tracking-tight">{stat.value}</h3>
              <p className="text-apple-tertiary text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default About;
