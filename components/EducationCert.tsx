import React from 'react';
import Section from './ui/Section';
import { GraduationCap, Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const EducationCert: React.FC = () => {
  const { messages } = useLanguage();
  const e = messages.education;

  return (
    <Section id="education" eyebrow={e.eyebrow} title={e.title} subtitle={e.subtitle} muted>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
        <div>
          <h3 className="text-lg font-semibold text-apple-text mb-6 flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white border border-black/[0.06] shadow-apple">
              <GraduationCap className="text-apple-blue" size={20} />
            </span>
            {e.educationHeading}
          </h3>
          <div className="bg-white border border-black/[0.06] border-l-4 border-l-apple-blue p-6 md:p-7 rounded-2xl shadow-apple">
            <h4 className="text-base font-semibold text-apple-text leading-snug">{e.institution}</h4>
            <p className="text-apple-blue font-semibold text-sm mt-2">{e.degree}</p>
            <p className="text-apple-tertiary text-sm mb-4">{e.period}</p>
            <ul className="list-disc list-outside ml-4 text-apple-secondary text-sm space-y-1 leading-relaxed">
              <li>{e.detail}</li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-apple-text mb-6 flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white border border-black/[0.06] shadow-apple">
              <Award className="text-apple-blue" size={20} />
            </span>
            {e.certHeading}
          </h3>
          <div className="space-y-3">
            {e.certs.map((cert, idx) => (
              <div
                key={idx}
                className="flex items-start sm:items-center justify-between gap-4 p-4 md:p-5 bg-white rounded-xl border border-black/[0.06] shadow-apple hover:shadow-apple-md transition-all duration-300"
              >
                <div className="min-w-0">
                  <h4 className="text-apple-text font-medium text-sm leading-snug">{cert.name}</h4>
                  <p className="text-apple-tertiary text-xs mt-1">{cert.issuer}</p>
                </div>
                <span className="text-apple-tertiary text-xs font-mono bg-apple-surface px-2.5 py-1 rounded-lg border border-black/[0.04] shrink-0">
                  {cert.year}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default EducationCert;
