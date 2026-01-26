import React from 'react';
import Section from './ui/Section';
import { Award, Briefcase, Clock, Code, Target } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { label: 'Experience', value: '1.5+ Years', icon: <Clock size={20} className="text-primary-400" /> },
    { label: 'Projects', value: '3+ Major', icon: <Briefcase size={20} className="text-primary-400" /> },
    { label: 'TOEIC', value: '725', icon: <Award size={20} className="text-primary-400" /> },
    { label: 'Degree', value: 'Software Eng', icon: <Code size={20} className="text-primary-400" /> },
  ];

  return (
    <Section id="about" title="About Me" subtitle="Results-driven developer focused on performance and scalability.">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6 text-slate-300 leading-relaxed">
          <p>
            I am a <strong className="text-white">Results-driven Fullstack Developer</strong> with <strong className="text-white">1.5+ years</strong> of experience delivering high-performance EdTech and enterprise web applications. Specialized in building scalable <strong className="text-white">React/TypeScript</strong> frontends and RESTful APIs with <strong className="text-white">NestJS</strong>.
          </p>
          <p>
            I have a proven track record of optimizing application performance by <strong className="text-primary-400">40%</strong> and reducing API response times by <strong className="text-primary-400">30%</strong>. My expertise lies in writing maintainable code and creating exceptional user experiences using modern technologies like PostgreSQL, Prisma ORM, and Next.js.
          </p>

          <div className="pt-4 border-t border-slate-800 mt-6">
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <Target size={18} className="text-primary-500" /> 
              Career Goals
            </h3>
            <div className="space-y-3">
              <div className="flex gap-3">
                <div className="mt-1 min-w-[4px] h-[4px] bg-primary-500 rounded-full"></div>
                <p className="text-sm"><strong className="text-slate-200">Short-term (1–2 years):</strong> Deepen expertise in frontend architecture & system design, contribute to impactful products.</p>
              </div>
              <div className="flex gap-3">
                <div className="mt-1 min-w-[4px] h-[4px] bg-primary-500 rounded-full"></div>
                <p className="text-sm"><strong className="text-slate-200">Long-term (5 years):</strong> Grow into a <strong className="text-white">Lead Developer</strong>, driving technical direction and mentoring teams.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:border-primary-500/30 transition-colors group"
              >
                <div className="mb-3 p-3 bg-slate-800 w-fit rounded-lg group-hover:bg-primary-900/20 transition-colors">
                  {stat.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
                <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;