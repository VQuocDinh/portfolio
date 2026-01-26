import React from 'react';
import Section from './ui/Section';
import { Calendar, MapPin, Briefcase, CheckCircle2, Server, Layout, Code2, Database, Zap, Users, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: "BridgeUp Education",
      role: "Fullstack Developer",
      period: "Jan 2025 – Present",
      location: "HCMC",
      type: "EdTech Startup",
      summary: "Leading full-stack development of BridgeUp, a comprehensive career development platform serving 500+ users with 4 integrated modules (ScoreCard, GrowCap, LearnCap, ChallengeCap).",
      achievements: [
        {
          text: "Architected and built scalable frontend using React + TypeScript + Vite + TailwindCSS, implementing code splitting and lazy loading that improved initial page load.",
          icon: <Layout size={16} className="text-teal-400" />
        },
        {
          text: "Optimized application performance with React Query for data fetching, reducing API calls and enhancing user experience.",
          icon: <Zap size={16} className="text-yellow-400" />
        },
        {
          text: "Designed and implemented RESTful APIs with NestJS & Prisma ORM, optimizing PostgreSQL queries that reduced response time.",
          icon: <Server size={16} className="text-blue-400" />
        },
        {
          text: "Built social networking features (posts, likes, comments, sharing) handling 1,000+ daily interactions with real-time updates.",
          icon: <Users size={16} className="text-purple-400" />
        },
        {
          text: "Implemented secure JWT-based authentication & role-based authorization protecting user data across multiple modules.",
          icon: <CheckCircle2 size={16} className="text-green-400" />
        },
        {
          text: "Wrote comprehensive unit & integration tests using Jest + Testing Library, achieving 80% code coverage.",
          icon: <Code2 size={16} className="text-pink-400" />
        },
        {
          text: "Collaborated in Agile environment with Product, Data, and Content teams using Jira, consistently delivering features within sprint deadlines.",
          icon: <FileText size={16} className="text-slate-400" />
        }
      ],
      stack: ["React", "Vite", "TailwindCSS", "TypeScript", "NestJS", "Prisma ORM", "PostgreSQL", "JWT", "Cloudinary", "Vercel", "Render"]
    },
    {
      company: "DXT Technology Company",
      role: "Fullstack Developer",
      period: "Jul 2023 – Dec 2024",
      location: "HCMC",
      type: "Technology Company",
      summary: "Developed enterprise-grade web applications serving 2,000+ users with focus on performance optimization and scalability.",
      achievements: [
        {
          text: "Built responsive web applications using React, Next.js, and TypeScript with mobile-first design principles.",
          icon: <Layout size={16} className="text-indigo-400" />
        },
        {
          text: "Implemented Server-Side Rendering (SSR) & Static Site Generation (SSG) with Next.js, improving SEO rankings and reducing page load time.",
          icon: <Zap size={16} className="text-orange-400" />
        },
        {
          text: "Integrated RESTful APIs and third-party payment gateways, processing 500+ transactions monthly with 99.9% success rate.",
          icon: <Database size={16} className="text-blue-400" />
        },
        {
          text: "Managed complex state with React Query & Context API, eliminating prop drilling and improving code maintainability.",
          icon: <Code2 size={16} className="text-green-400" />
        },
        {
          text: "Conducted code reviews for 3 junior developers, establishing best practices and reducing bug rate.",
          icon: <Users size={16} className="text-yellow-400" />
        },
        {
          text: "Created comprehensive API documentation using Swagger, improving frontend-backend collaboration efficiency.",
          icon: <FileText size={16} className="text-slate-400" />
        }
      ],
      stack: ["React", "Next.js", "TailwindCSS", "Node.js", "TypeScript", "Prisma ORM"]
    }
  ];

  return (
    <Section id="experience" title="Work Experience" subtitle="My professional journey and key contributions in the tech industry.">
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Timeline Line */}
        <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-slate-800 hidden md:block"></div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative md:pl-20"
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 -translate-x-1/2 top-0 w-4 h-4 rounded-full bg-primary-500 ring-4 ring-slate-950 shadow-[0_0_15px_rgba(59,130,246,0.5)] hidden md:block"></div>
              
              <div className="bg-slate-900/40 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-all duration-300 shadow-lg">
                {/* Header Card */}
                <div className="p-6 md:p-8 border-b border-slate-800/50 bg-slate-900/60 backdrop-blur-sm">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-100 flex items-center gap-2">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-primary-400 font-semibold text-lg mt-1">
                        <Briefcase size={18} />
                        {exp.company}
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-2 text-sm font-medium text-slate-400 bg-slate-950/50 p-3 rounded-lg border border-slate-800/50">
                      <div className="flex items-center gap-2">
                        <Calendar size={14} className="text-slate-500" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={14} className="text-slate-500" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-slate-300 leading-relaxed italic border-l-2 border-slate-700 pl-4 py-1">
                    "{exp.summary}"
                  </p>
                </div>

                {/* Details Body */}
                <div className="p-6 md:p-8 bg-gradient-to-b from-slate-900/20 to-transparent">
                  <h4 className="text-sm uppercase tracking-wider text-slate-500 font-bold mb-4">Key Responsibilities & Achievements</h4>
                  <div className="grid gap-4 mb-8">
                    {exp.achievements.map((item, idx) => (
                      <div key={idx} className="flex gap-4 group">
                        <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-slate-700 transition-colors border border-slate-700/50">
                          {item.icon}
                        </div>
                        <p className="text-slate-300 text-sm md:text-base leading-relaxed pt-0.5">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Footer */}
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-slate-600 font-bold mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.stack.map((tech) => (
                        <span 
                          key={tech} 
                          className="px-3 py-1 text-xs font-medium text-primary-300 bg-primary-500/10 border border-primary-500/20 rounded-full hover:bg-primary-500/20 transition-colors cursor-default"
                        >
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