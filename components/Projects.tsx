import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Section from './ui/Section';
import { Github, ArrowUpRight, FolderGit2, ChevronRight, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { LIVE_NOTICE_SLUGS, PROJECT_CARD_META } from '../lib/projectMeta';
import LiveSiteNoticeModal from './LiveSiteNoticeModal';

const Projects: React.FC = () => {
  const { messages } = useLanguage();
  const p = messages.projects;
  const [liveModal, setLiveModal] = useState<{ open: boolean; url: string }>({ open: false, url: '' });

  return (
    <Section id="projects" eyebrow={p.eyebrow} title={p.title} subtitle={p.subtitle}>
      <LiveSiteNoticeModal
        open={liveModal.open}
        onClose={() => setLiveModal({ open: false, url: '' })}
        liveUrl={liveModal.url}
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {p.items.map((project, index) => {
          const meta = PROJECT_CARD_META[index];
          const liveBtnBase =
            'inline-flex items-center justify-center gap-2 w-full sm:w-auto px-4 py-2.5 rounded-xl text-sm font-semibold border transition-colors';
          const liveEnabled = `${liveBtnBase} bg-apple-text text-white border-transparent hover:bg-apple-text/90`;
          const liveDisabled = `${liveBtnBase} bg-apple-surface text-apple-tertiary border-black/[0.06] cursor-not-allowed opacity-65`;

          return (
            <article
              key={project.slug}
              className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-black/[0.06] shadow-apple hover:shadow-apple-lg hover:border-black/[0.1] transition-all duration-300"
            >
              <Link to={`/projects/${project.slug}`} className="block aspect-[16/10] overflow-hidden relative bg-apple-surface">
                <img
                  src={meta.image.replace('w=1200', 'w=800')}
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                />
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm p-2 rounded-full shadow-apple border border-black/[0.06]">
                  <FolderGit2 size={18} className="text-apple-blue" aria-hidden />
                </div>
              </Link>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-semibold text-apple-text mb-2 group-hover:text-apple-blue transition-colors tracking-tight">
                  <Link to={`/projects/${project.slug}`} className="focus-visible:outline-offset-2 rounded">
                    {project.title}
                  </Link>
                </h3>
                <p className="text-apple-secondary text-sm mb-5 line-clamp-3 flex-1 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {meta.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-semibold uppercase tracking-wide px-2.5 py-1 bg-apple-surface text-apple-secondary rounded-md border border-black/[0.04]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-1 flex flex-col gap-3">
                  {meta.liveUrl ? (
                    LIVE_NOTICE_SLUGS.has(project.slug) ? (
                      <button
                        type="button"
                        onClick={() => setLiveModal({ open: true, url: meta.liveUrl! })}
                        className={liveEnabled}
                      >
                        <Globe size={16} aria-hidden />
                        {p.viewLive}
                        <ArrowUpRight size={14} className="opacity-90" aria-hidden />
                      </button>
                    ) : (
                      <a
                        href={meta.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={liveEnabled}
                      >
                        <Globe size={16} aria-hidden />
                        {p.viewLive}
                        <ArrowUpRight size={14} className="opacity-90" aria-hidden />
                      </a>
                    )
                  ) : (
                    <button type="button" disabled className={liveDisabled} title={p.viewLiveDisabled} aria-label={p.viewLiveDisabled}>
                      <Globe size={16} aria-hidden />
                      {p.viewLive}
                    </button>
                  )}

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <Link
                      to={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-apple-blue hover:text-apple-blue-hover transition-colors"
                    >
                      {p.viewDetails}
                      <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform" aria-hidden />
                    </Link>
                    <a
                      href={meta.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-apple-text hover:text-apple-blue transition-colors group/link"
                    >
                      <Github size={16} aria-hidden />
                      <span>{p.viewSource}</span>
                      <ArrowUpRight
                        size={14}
                        className="opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all"
                        aria-hidden
                      />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
};

export default Projects;
