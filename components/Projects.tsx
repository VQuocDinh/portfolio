import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Section from './ui/Section';
import { Github, ArrowUpRight, FolderGit2, ChevronRight, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { LIVE_NOTICE_SLUGS, PROJECT_CARD_META } from '../lib/projectMeta';
import LiveSiteNoticeModal from './LiveSiteNoticeModal';

const Projects: React.FC = () => {
  const { messages } = useLanguage();
  const p = messages.projects;
  const [liveModal, setLiveModal] = useState<{ open: boolean; url: string }>({ open: false, url: '' });

  const items = p.items.map((project, index) => ({
    project,
    meta: PROJECT_CARD_META[index],
    index,
  }));
  const [featured, ...rest] = items;

  const liveBtnBase =
    'inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-2.5 rounded-xl text-sm font-semibold transition-all';
  const liveEnabled = `${liveBtnBase} cta-gradient text-white shadow-md shadow-blue-500/15 hover:shadow-lg hover:shadow-blue-500/20`;
  const liveDisabled = `${liveBtnBase} bg-apple-surface text-apple-tertiary border border-apple-border/45 cursor-not-allowed opacity-65`;

  const renderLiveAndLinks = (project: (typeof items)[0]['project'], meta: (typeof items)[0]['meta']) => (
    <div className="mt-auto flex flex-col gap-3 pt-1">
      {meta.liveUrl ? (
        LIVE_NOTICE_SLUGS.has(project.slug) ? (
          <button
            type="button"
            onClick={() => setLiveModal({ open: true, url: meta.liveUrl! })}
            className={liveEnabled}
          >
            <span className="inline-flex items-center gap-2 relative z-10">
              <Globe size={16} aria-hidden />
              {p.viewLive}
              <ArrowUpRight size={14} className="opacity-90" aria-hidden />
            </span>
          </button>
        ) : (
          <a href={meta.liveUrl} target="_blank" rel="noopener noreferrer" className={liveEnabled}>
            <span className="inline-flex items-center gap-2 relative z-10">
              <Globe size={16} aria-hidden />
              {p.viewLive}
              <ArrowUpRight size={14} className="opacity-90" aria-hidden />
            </span>
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
          className="inline-flex items-center gap-2 text-sm font-semibold text-apple-blue hover:text-apple-blue-hover transition-colors group/detail"
        >
          {p.viewDetails}
          <ChevronRight size={16} className="group-hover/detail:translate-x-0.5 transition-transform" aria-hidden />
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
  );

  return (
    <Section id="projects" eyebrow={p.eyebrow} title={p.title} subtitle={p.subtitle} className="!max-w-7xl">
      <LiveSiteNoticeModal
        open={liveModal.open}
        onClose={() => setLiveModal({ open: false, url: '' })}
        liveUrl={liveModal.url}
      />

      <div className="flex flex-col gap-10 lg:gap-12">
        {/* Featured — full-width horizontal card */}
        {featured && (
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="project-card group relative flex flex-col overflow-hidden rounded-2xl border border-apple-border/40 bg-apple-bg shadow-apple lg:flex-row lg:min-h-[min(22rem,42vw)]"
          >
            <Link
              to={`/projects/${featured.project.slug}`}
              className="relative block aspect-[16/10] shrink-0 overflow-hidden bg-apple-surface lg:aspect-auto lg:w-[46%] lg:max-w-xl lg:min-h-[min(22rem,42vw)]"
            >
              <img
                src={featured.meta.image.replace('w=1200', 'w=960')}
                alt=""
                className="project-image h-full w-full object-cover"
              />
              <div className="project-overlay absolute inset-0" />
              <span className="absolute left-4 top-4 inline-flex h-9 min-w-[2.25rem] items-center justify-center rounded-full bg-white/90 dark:bg-black/70 px-2.5 text-xs font-bold tabular-nums text-apple-text backdrop-blur-sm shadow-sm">
                01
              </span>
              <div className="absolute right-4 top-4 rounded-full bg-white/90 dark:bg-black/70 p-2 shadow-sm backdrop-blur-sm">
                <FolderGit2 size={18} className="text-apple-blue" aria-hidden />
              </div>
            </Link>

            <div className="flex flex-1 flex-col p-6 sm:p-8 lg:py-8 lg:pr-10">
              <h3 className="mb-2 text-xl font-bold tracking-tight text-apple-text transition-colors group-hover:text-apple-blue sm:text-2xl">
                <Link to={`/projects/${featured.project.slug}`} className="rounded focus-visible:outline-offset-2">
                  {featured.project.title}
                </Link>
              </h3>
              <p className="mb-5 text-base leading-relaxed text-apple-secondary sm:line-clamp-4 lg:line-clamp-5">
                {featured.project.description}
              </p>

              <div className="mb-5 flex flex-wrap gap-1.5">
                {featured.meta.tags.map((tag) => (
                  <span
                    key={tag}
                    className="tag-pill rounded-md border border-apple-border/35 bg-apple-surface px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-apple-secondary"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {renderLiveAndLinks(featured.project, featured.meta)}
            </div>
          </motion.article>
        )}

        {/* Remaining projects */}
        {rest.length > 0 && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {rest.map(({ project, meta, index }) => {
              const n = String(index + 1).padStart(2, '0');
              return (
                <motion.article
                  key={project.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (index - 1) * 0.08 }}
                  className="project-card group flex flex-col overflow-hidden rounded-2xl border border-apple-border/40 bg-apple-bg shadow-apple"
                >
                  <Link to={`/projects/${project.slug}`} className="relative block aspect-[16/10] overflow-hidden bg-apple-surface">
                    <img
                      src={meta.image.replace('w=1200', 'w=800')}
                      alt=""
                      className="project-image h-full w-full object-cover"
                    />
                    <div className="project-overlay absolute inset-0" />
                    <span className="absolute left-3 top-3 inline-flex h-8 min-w-[2rem] items-center justify-center rounded-full bg-white/90 dark:bg-black/70 px-2 text-[11px] font-bold tabular-nums text-apple-text backdrop-blur-sm shadow-sm">
                      {n}
                    </span>
                    <div className="absolute right-3 top-3 rounded-full bg-white/90 dark:bg-black/70 p-2 shadow-sm backdrop-blur-sm">
                      <FolderGit2 size={18} className="text-apple-blue" aria-hidden />
                    </div>
                  </Link>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="mb-2 text-lg font-bold tracking-tight text-apple-text transition-colors group-hover:text-apple-blue">
                      <Link to={`/projects/${project.slug}`} className="rounded focus-visible:outline-offset-2">
                        {project.title}
                      </Link>
                    </h3>
                    <p className="mb-5 flex-1 text-sm leading-relaxed text-apple-secondary line-clamp-3">{project.description}</p>

                    <div className="mb-4 flex flex-wrap gap-1.5">
                      {meta.tags.map((tag) => (
                        <span
                          key={tag}
                          className="tag-pill rounded-md border border-apple-border/35 bg-apple-surface px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-apple-secondary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {renderLiveAndLinks(project, meta)}
                  </div>
                </motion.article>
              );
            })}
          </div>
        )}
      </div>
    </Section>
  );
};

export default Projects;
