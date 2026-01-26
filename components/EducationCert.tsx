import React from 'react';
import Section from './ui/Section';
import { GraduationCap, Award } from 'lucide-react';
import { Education, Certificate } from '../types';

const EducationCert: React.FC = () => {
  const education: Education = {
    institution: "Posts and Telecommunications Institute of Technology (PTIT)",
    degree: "Bachelor of Software Engineering",
    period: "2020 – 2025",
    details: ["Awarded Excellent Academic Scholarship (3 consecutive years) for maintaining GPA > 3.5/4.0"]
  };

  const certifications: Certificate[] = [
    { name: "The Ultimate React Course 2025", issuer: "Udemy", year: "2025" },
    { name: "Front End Development Libraries", issuer: "freeCodeCamp", year: "2024" },
    { name: "JavaScript Algorithms and Data Structures", issuer: "freeCodeCamp", year: "2023" },
    { name: "TOEIC Listening & Reading: 725", issuer: "IIG Vietnam", year: "2024" },
  ];

  return (
    <Section id="education" className="bg-slate-900/30 rounded-3xl my-10" title="Education & Certifications">
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Education Column */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-8 flex items-center gap-2">
            <GraduationCap className="text-primary-500" />
            Education
          </h3>
          <div className="bg-slate-900 border-l-4 border-primary-500 p-6 rounded-r-xl shadow-sm">
            <h4 className="text-lg font-bold text-white">{education.institution}</h4>
            <p className="text-primary-400 font-medium mb-1">{education.degree}</p>
            <p className="text-slate-500 text-sm mb-4">{education.period}</p>
            <ul className="list-disc list-inside text-slate-400 text-sm">
              {education.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Certifications Column */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-8 flex items-center gap-2">
            <Award className="text-primary-500" />
            Certifications & Training
          </h3>
          <div className="space-y-4">
            {certifications.map((cert, idx) => (
              <div 
                key={idx} 
                className="flex items-center justify-between p-4 bg-slate-900 rounded-lg border border-slate-800 hover:border-slate-700 transition-colors"
              >
                <div>
                  <h4 className="text-white font-medium">{cert.name}</h4>
                  <p className="text-slate-500 text-sm">{cert.issuer}</p>
                </div>
                <span className="text-slate-600 text-xs font-mono border border-slate-800 px-2 py-1 rounded">
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