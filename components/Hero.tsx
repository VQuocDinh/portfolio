import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary-600/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-primary-500 font-semibold mb-4 tracking-wide uppercase text-sm">
                Fullstack Developer
              </h2>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-50 mb-6 leading-tight">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Vo Quoc Dinh</span>
              </h1>
              <p className="text-slate-400 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed mx-auto md:mx-0">
                I build scalable, high-performance web applications. Specializing in <span className="text-slate-200">React</span>, <span className="text-slate-200">TypeScript</span>, and <span className="text-slate-200">NestJS</span> with a focus on clean code and exceptional user experiences.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a 
                  href="#projects" 
                  onClick={(e) => handleScroll(e, 'projects')}
                  className="px-8 py-3.5 bg-primary-600 hover:bg-primary-500 text-white rounded-full font-medium transition-all shadow-lg shadow-primary-500/25 flex items-center justify-center gap-2 group"
                >
                  View My Work
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#contact" 
                  onClick={(e) => handleScroll(e, 'contact')}
                  className="px-8 py-3.5 bg-transparent border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white rounded-full font-medium transition-all flex items-center justify-center gap-2"
                >
                  Contact Me
                </a>
              </div>
            </motion.div>
          </div>
          
          <div className="flex-1 flex justify-center md:justify-end relative">
             {/* Abstract Code/Tech Visual Representation */}
             <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.7, delay: 0.2 }}
               className="relative w-72 h-72 md:w-96 md:h-96"
             >
                <div className="absolute inset-0 border-2 border-slate-800 rounded-2xl rotate-3"></div>
                <div className="absolute inset-0 border-2 border-slate-800/50 rounded-2xl -rotate-3"></div>
                <div className="absolute inset-0 bg-slate-900 rounded-2xl flex items-center justify-center overflow-hidden border border-slate-800 shadow-2xl">
                    <div className="p-8 text-slate-600 font-mono text-xs md:text-sm leading-relaxed opacity-70">
                        <span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> = <span className="text-yellow-400">{'{'}</span><br/>
                        &nbsp;&nbsp;name: <span className="text-green-400">'Vo Quoc Dinh'</span>,<br/>
                        &nbsp;&nbsp;role: <span className="text-green-400">'Fullstack'</span>,<br/>
                        &nbsp;&nbsp;stack: [<span className="text-green-400">'React'</span>, <span className="text-green-400">'NestJS'</span>],<br/>
                        &nbsp;&nbsp;hardWorker: <span className="text-orange-400">true</span><br/>
                        <span className="text-yellow-400">{'}'}</span>;
                    </div>
                </div>
             </motion.div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 animate-bounce hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-slate-400 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;