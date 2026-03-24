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

  const items = p.items.map((project, index) => ({
    project,
    meta: PROJECT_CARD_META[index],
    index,
  }));
  const [featured, ...rest] = items;

  const liveBtnBase =
    'inline-flex items-center justify-center gap-2 w-full sm:w-auto px-4 py-2.5 rounded-xl text-sm font-semibold border transition-colors';
  const liveEnabled = `${liveBtnBase} bg-zinc-900 text-white border-transparent hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200`;
  const liveDisabled = `${liveBtnBase} bg-apple-surface text-apple-tertiary border-apple-border/45 cursor-not-allowed opacity-65`;

  const renderLiveAndLinks = (project: (typeof items)[0]['project'], meta: (typeof items)[0]['meta']) => (
    <div className="mt-auto flex flex-col gap-3 pt-1">
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
          <a href={meta.liveUrl} target="_blank" rel="noopener noreferrer" className={liveEnabled}>
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
  );

  return (
    <Section id="projects" eyebrow={p.eyebrow} title={p.title} subtitle={p.subtitle} className="!max-w-7xl">
      <LiveSiteNoticeModal
        open={liveModal.open}
        onClose={() => setLiveModal({ open: false, url: '' })}
        liveUrl={liveModal.url}
      />

      <div className="flex flex-col gap-10 lg:gap-12">
        {/* Featured — full-width horizontal card on large screens */}
        {featured && (
          <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-apple-border/45 bg-apple-bg shadow-apple transition-all duration-300 hover:-translate-y-0.5 hover:border-apple-border/55 hover:shadow-apple-lg lg:flex-row lg:min-h-[min(22rem,42vw)]">
            <Link
              to={`/projects/${featured.project.slug}`}
              className="relative block aspect-[16/10] shrink-0 overflow-hidden bg-apple-surface lg:aspect-auto lg:w-[46%] lg:max-w-xl lg:min-h-[min(22rem,42vw)]"
            >
              <img
                src={featured.meta.image.replace('w=1200', 'w=960')}
                alt=""
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
              />
              <span className="absolute left-4 top-4 inline-flex h-9 min-w-[2.25rem] items-center justify-center rounded-full border border-apple-border/40 bg-apple-bg/90 px-2.5 text-xs font-semibold tabular-nums text-apple-secondary backdrop-blur-sm">
                01
              </span>
              <div className="absolute right-4 top-4 rounded-full border border-apple-border/45 bg-apple-bg/95 p-2 shadow-apple backdrop-blur-sm">
                <FolderGit2 size={18} className="text-apple-blue" aria-hidden />
              </div>
            </Link>

            <div className="flex flex-1 flex-col p-6 sm:p-8 lg:py-8 lg:pr-10">
              <h3 className="mb-2 text-xl font-semibold tracking-tight text-apple-text transition-colors group-hover:text-apple-blue sm:text-2xl">
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
                    className="rounded-md border border-apple-border/35 bg-apple-surface px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-apple-secondary"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {renderLiveAndLinks(featured.project, featured.meta)}
            </div>
          </article>
        )}

        {/* Remaining projects — balanced row of three */}
        {rest.length > 0 && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {rest.map(({ project, meta, index }) => {
              const n = String(index + 1).padStart(2, '0');
              return (
                <article
                  key={project.slug}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-apple-border/45 bg-apple-bg shadow-apple transition-all duration-300 hover:-translate-y-0.5 hover:border-apple-border/55 hover:shadow-apple-lg"
                >
                  <Link to={`/projects/${project.slug}`} className="relative block aspect-[16/10] overflow-hidden bg-apple-surface">
                    <img
                      src={meta.image.replace('w=1200', 'w=800')}
                      alt=""
                      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    />
                    <span className="absolute left-3 top-3 inline-flex h-8 min-w-[2rem] items-center justify-center rounded-full border border-apple-border/40 bg-apple-bg/90 px-2 text-[11px] font-semibold tabular-nums text-apple-secondary backdrop-blur-sm">
                      {n}
                    </span>
                    <div className="absolute right-3 top-3 rounded-full border border-apple-border/45 bg-apple-bg/95 p-2 shadow-apple backdrop-blur-sm">
                      <FolderGit2 size={18} className="text-apple-blue" aria-hidden />
                    </div>
                  </Link>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="mb-2 text-lg font-semibold tracking-tight text-apple-text transition-colors group-hover:text-apple-blue">
                      <Link to={`/projects/${project.slug}`} className="rounded focus-visible:outline-offset-2">
                        {project.title}
                      </Link>
                    </h3>
                    <p className="mb-5 flex-1 text-sm leading-relaxed text-apple-secondary line-clamp-3">{project.description}</p>

                    <div className="mb-4 flex flex-wrap gap-1.5">
                      {meta.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-apple-border/35 bg-apple-surface px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-apple-secondary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {renderLiveAndLinks(project, meta)}
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </Section>
  );
};

export default Projects;
