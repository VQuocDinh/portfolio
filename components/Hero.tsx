import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { messages } = useLanguage();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const h = messages.hero;

  return (
    <section id="hero" className="relative min-h-[100vh] flex items-center pt-14 overflow-hidden hero-pattern">
      <div className="absolute inset-0 pointer-events-none border-b border-apple-border/40" aria-hidden />

      <div className="max-w-6xl mx-auto px-4 md:px-8 w-full relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-14 lg:gap-20">
          <div className="flex-1 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] text-apple-blue mb-4">{h.role}</p>
              <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[3.5rem] font-semibold text-apple-text mb-6 leading-[1.08] tracking-tighter-plus">
                {h.greeting} <br className="hidden sm:block" />
                <span className="text-apple-text">{h.name}</span>
              </h1>
              <p className="text-apple-secondary text-lg md:text-[1.125rem] max-w-xl mb-8 leading-relaxed mx-auto md:mx-0">{h.intro}</p>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-2 mb-10 text-sm text-apple-tertiary">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin size={14} className="text-apple-blue shrink-0" aria-hidden />
                  {h.location}
                </span>
                <span className="hidden sm:inline text-apple-border" aria-hidden>
                  |
                </span>
                <span>{h.openToOpportunities}</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <a
                  href="#projects"
                  onClick={(e) => handleScroll(e, 'projects')}
                  className="inline-flex items-center justify-center px-8 py-3.5 bg-apple-blue hover:bg-apple-blue-hover text-white rounded-full text-sm font-semibold transition-colors shadow-apple-md hover:shadow-apple-lg group"
                >
                  {h.viewWork}
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-0.5 transition-transform" aria-hidden />
                </a>
                <a
                  href="#contact"
                  onClick={(e) => handleScroll(e, 'contact')}
                  className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-apple-text rounded-full text-sm font-semibold border border-apple-border/80 hover:border-apple-border hover:bg-apple-surface/80 transition-all shadow-apple"
                >
                  {h.contactMe}
                </a>
              </div>
            </motion.div>
          </div>

          <div className="flex-1 flex justify-center md:justify-end w-full max-w-md md:max-w-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.65, delay: 0.15 }}
              className="relative w-full max-w-[340px] aspect-square md:w-[380px] md:h-[380px] md:max-w-none"
            >
              <div className="absolute inset-0 rounded-3xl bg-white shadow-apple-xl border border-black/[0.06] flex flex-col overflow-hidden">
                <div className="flex items-center gap-2 px-5 py-3 border-b border-black/[0.06] bg-white/80 backdrop-blur-sm">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57] ring-1 ring-black/5" />
                  <div className="w-3 h-3 rounded-full bg-[#febc2e] ring-1 ring-black/5" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840] ring-1 ring-black/5" />
                  <span className="text-apple-tertiary text-[11px] ml-2 font-mono tracking-tight">developer.ts</span>
                </div>
                <div className="p-6 font-mono text-[11px] sm:text-xs md:text-sm leading-relaxed text-left flex-1 bg-apple-surface/30">
                  <span className="text-purple-600">const</span> <span className="text-blue-600">developer</span> = {'{'}
                  <br />
                  &nbsp;&nbsp;name: <span className="text-green-600">&apos;{h.name}&apos;</span>,<br />
                  &nbsp;&nbsp;role: <span className="text-green-600">&apos;Fullstack&apos;</span>,<br />
                  &nbsp;&nbsp;stack: [<span className="text-green-600">&apos;React&apos;</span>,{' '}
                  <span className="text-green-600">&apos;NestJS&apos;</span>],<br />
                  &nbsp;&nbsp;hardWorker: <span className="text-orange-600">true</span>
                  <br />
                  {'}'};
                  <span className="hero-code-cursor" aria-hidden />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
