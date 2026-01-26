import React from 'react';
import Section from './ui/Section';
import { Project } from '../types';
import { Github, ExternalLink, FolderGit2 } from 'lucide-react';

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Medical Record Management System",
      description: "Full-stack healthcare platform with JWT authentication & role-based access control (RBAC). Secure patient data management system ensuring HIPAA-compliant data handling.",
      tags: ["NestJS", "React", "PostgreSQL", "JWT", "RBAC"],
      githubUrl: "https://github.com/VQuocDinh/PRMS",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop" 
    },
    {
      title: "Coffee E-Commerce Platform",
      description: "Service-oriented architecture e-commerce system with microservices design pattern. Dockerized deployment enabling scalable, maintainable infrastructure.",
      tags: ["Docker", "Microservices", "React", "Node.js"],
      githubUrl: "https://github.com/VQuocDinh/hancoffee-service-oriented",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Online Music Streaming Platform",
      description: "Music streaming application with AI-powered recommendation engine using Python. Implemented machine learning algorithms for personalized music suggestions.",
      tags: ["Python", "React", "Machine Learning", "AI"],
      githubUrl: "https://github.com/VQuocDinh/play-music",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <Section id="projects" title="Key Projects" subtitle="Highlights of my technical implementation and problem-solving.">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="group bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-primary-900/10 hover:border-slate-700 transition-all duration-300 flex flex-col"
          >
            {/* Image Placeholder */}
            <div className="h-48 overflow-hidden bg-slate-800 relative">
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10 opacity-60"></div>
               <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
               />
               <div className="absolute top-4 right-4 z-20 bg-slate-900/80 backdrop-blur p-2 rounded-full border border-slate-700">
                  <FolderGit2 size={20} className="text-primary-400" />
               </div>
            </div>

            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm mb-4 line-clamp-3 flex-1">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs font-medium px-2 py-1 bg-slate-800 text-slate-300 rounded border border-slate-700">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-auto">
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-primary-400 transition-colors group/link"
                >
                  <Github size={16} />
                  <span className="group-hover/link:underline">View Source</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;