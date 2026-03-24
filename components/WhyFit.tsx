import React from 'react';
import Section from './ui/Section';
import { UserCheck } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const WhyFit: React.FC = () => {
  const { messages } = useLanguage();
  const w = messages.whyFit;

  return (
    <Section id="why-fit" eyebrow={w.eyebrow} title={w.title} subtitle={w.subtitle}>
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl border border-black/[0.06] shadow-apple p-6 md:p-8">
          <div className="flex items-start gap-4 mb-6">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-apple-blue border border-blue-100">
              <UserCheck size={22} aria-hidden />
            </span>
            <p className="text-apple-secondary leading-relaxed text-[15px] md:text-base pt-0.5">{w.intro}</p>
          </div>
          <ul className="space-y-4">
            {w.points.map((point, index) => (
              <li key={index} className="flex gap-3 text-apple-secondary text-[15px] md:text-base leading-relaxed">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-apple-blue" aria-hidden />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default WhyFit;
