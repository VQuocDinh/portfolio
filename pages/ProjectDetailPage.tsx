import React, { useEffect, useMemo, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ArrowUpRight, Globe } from 'lucide-react';
import Breadcrumb from '../components/ui/Breadcrumb';
import LiveSiteNoticeModal from '../components/LiveSiteNoticeModal';
import { useLanguage } from '../contexts/LanguageContext';
import { findProjectBySlug } from '../lib/projects';
import { LIVE_NOTICE_SLUGS, PROJECT_CARD_META } from '../lib/projectMeta';

const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { messages } = useLanguage();
  const p = messages.projects;
  const [liveModal, setLiveModal] = useState<{ open: boolean; url: string }>({ open: false, url: '' });

  const project = useMemo(
    () => findProjectBySlug(slug, p.items as readonly { slug: string }[]),
    [slug, p.items]
  );

  const index = useMemo(() => {
    if (!project) return -1;
    return p.items.findIndex((item) => item.slug === project.slug);
  }, [project, p.items]);

  useEffect(() => {
    if (!project) return;
    document.title = `${project.title} | ${p.metaTitleSuffix}`;
    return () => {
      document.title = messages.meta.title;
    };
  }, [project, p.metaTitleSuffix, messages.meta.title]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project || index < 0) {
    return <Navigate to="/" replace />;
  }

  const meta = PROJECT_CARD_META[index];
  const breadcrumbItems = [
    { label: p.breadcrumbHome, to: '/' },
    { label: p.title, to: '/#projects' },
    { label: project.title },
  ];

  const liveBtnClass =
    'inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold transition-colors';
  const liveEnabledClass = `${liveBtnClass} neu-raised-sm bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200`;
  const liveDisabledClass = `${liveBtnClass} neu-inset text-apple-tertiary cursor-not-allowed opacity-60`;

  return (
    <main className="min-h-screen bg-transparent pt-20 md:pt-24 pb-16">
      <LiveSiteNoticeModal
        open={liveModal.open}
        onClose={() => setLiveModal({ open: false, url: '' })}
        liveUrl={liveModal.url}
      />
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
          <Breadcrumb items={breadcrumbItems} ariaLabel={p.breadcrumbAria} />

          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-apple-blue hover:text-apple-blue-hover transition-colors"
          >
            <ArrowLeft size={16} aria-hidden />
            {p.backToProjects}
          </Link>

          <div className="mt-8 rounded-2xl overflow-hidden neu-raised-lg">
            <div className="aspect-[21/9] md:aspect-[2/1] w-full overflow-hidden">
              <img src={meta.image} alt={project.title} className="w-full h-full object-cover" />
            </div>
          </div>

          <header className="mt-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-apple-blue mb-3">{p.eyebrow}</p>
            <h1 className="text-3xl md:text-4xl font-semibold text-apple-text tracking-tighter-plus leading-tight">{project.title}</h1>
            <div className="flex flex-wrap gap-2 mt-5">
              {meta.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-semibold uppercase tracking-wide px-2.5 py-1 text-apple-secondary rounded-md neu-inset-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>

          <section className="mt-10 space-y-4">
            <h2 className="text-lg font-semibold text-apple-text">{p.overviewHeading}</h2>
            <p className="text-apple-secondary leading-relaxed text-[15px] md:text-base whitespace-pre-line">{project.detailOverview}</p>
          </section>

          <section className="mt-10">
            <h2 className="text-lg font-semibold text-apple-text mb-4">{p.highlightsHeading}</h2>
            <ul className="space-y-3 text-apple-secondary text-[15px] leading-relaxed">
              {project.highlights.map((line, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-apple-blue" aria-hidden />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </section>

          <div className="mt-12 flex flex-col gap-3">
            <div className="flex flex-col sm:flex-row flex-wrap gap-3">
              {meta.liveUrl ? (
                LIVE_NOTICE_SLUGS.has(project.slug) ? (
                  <button
                    type="button"
                    onClick={() => setLiveModal({ open: true, url: meta.liveUrl! })}
                    className={liveEnabledClass}
                  >
                    <Globe size={18} aria-hidden />
                    {p.viewLive}
                    <ArrowUpRight size={16} className="opacity-90" aria-hidden />
                  </button>
                ) : (
                  <a
                    href={meta.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={liveEnabledClass}
                  >
                    <Globe size={18} aria-hidden />
                    {p.viewLive}
                    <ArrowUpRight size={16} className="opacity-90" aria-hidden />
                  </a>
                )
              ) : (
                <button type="button" disabled className={liveDisabledClass} title={p.viewLiveDisabled} aria-label={p.viewLiveDisabled}>
                  <Globe size={18} aria-hidden />
                  {p.viewLive}
                </button>
              )}
              <a
                href={meta.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl cta-gradient text-white text-sm font-semibold transition-colors"
              >
                <Github size={18} aria-hidden />
                {p.viewSource}
                <ArrowUpRight size={16} className="opacity-90" aria-hidden />
              </a>
            </div>
            <Link
              to="/#projects"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl neu-btn-ghost text-sm font-semibold sm:self-start"
            >
              {p.backToProjects}
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default ProjectDetailPage;
