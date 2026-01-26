import React from 'react';
import Section from './ui/Section';
import { SkillCategory } from '../types';

const Skills: React.FC = () => {
  const skillsData: SkillCategory[] = [
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "JavaScript (ES6+)", "Next.js", "Vite", "TailwindCSS", "Ant Design", "HTML5", "CSS3"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "NestJS", "RESTful APIs", "JWT Authentication", "Prisma ORM"]
    },
    {
      title: "Database",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Database Design & Optimization"]
    },
    {
      title: "State Management",
      skills: ["React Query", "Context API", "SSR/SSG"]
    },
    {
      title: "DevOps & Tools",
      skills: ["Git/GitHub", "Docker", "Linux", "Swagger", "Jira", "Figma", "Vercel", "Render"]
    },
    {
      title: "Testing",
      skills: ["Jest", "React Testing Library", "Unit & Integration Testing"]
    }
  ];

  return (
    <Section id="skills" title="Technical Skills" subtitle="My comprehensive technical arsenal for modern web development.">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillsData.map((category, idx) => (
          <div 
            key={idx} 
            className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all flex flex-col"
          >
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <span className="w-2 h-6 bg-primary-500 rounded-full mr-3"></span>
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2 mt-auto">
              {category.skills.map((skill) => (
                <span 
                  key={skill}
                  className="px-3 py-1.5 bg-slate-800 text-slate-300 text-sm rounded-md border border-slate-700/50 hover:text-white hover:border-primary-500/50 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;