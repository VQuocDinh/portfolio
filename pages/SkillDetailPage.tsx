import React, { useEffect, useMemo } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Breadcrumb from '../components/ui/Breadcrumb';
import { useLanguage } from '../contexts/LanguageContext';
import { findSkillBySlug } from '../lib/skills';

const SkillDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { messages, t } = useLanguage();
  const sd = messages.skillDetail;
  const breadcrumbHome = messages.projects.breadcrumbHome;

  const entry = useMemo(() => findSkillBySlug(slug, sd.entries), [slug, sd.entries]);

  useEffect(() => {
    if (!entry) return;
    document.title = `${entry.title} | ${sd.metaTitleSuffix}`;
    return () => {
      document.title = messages.meta.title;
    };
  }, [entry, sd.metaTitleSuffix, messages.meta.title]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!entry) {
    return <Navigate to="/" replace />;
  }

  const breadcrumbItems = [
    { label: breadcrumbHome, to: '/' },
    { label: t('nav.skills'), to: '/#skills' },
    { label: entry.title },
  ];

  return (
    <main className="min-h-screen bg-white pt-20 md:pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
          <Breadcrumb items={breadcrumbItems} ariaLabel={sd.breadcrumbAria} />

          <Link
            to="/#skills"
            className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-apple-blue hover:text-apple-blue-hover transition-colors"
          >
            <ArrowLeft size={16} aria-hidden />
            {sd.backToSkills}
          </Link>

          <header className="mt-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-apple-blue mb-3">{messages.skills.eyebrow}</p>
            <h1 className="text-3xl md:text-4xl font-semibold text-apple-text tracking-tighter-plus leading-tight">{entry.title}</h1>
          </header>

          <section className="mt-10">
            <h2 className="text-lg font-semibold text-apple-text mb-4">{sd.knowHeading}</h2>
            <ul className="space-y-3 text-apple-secondary text-[15px] leading-relaxed">
              {entry.know.map((line, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-apple-blue" aria-hidden />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="text-lg font-semibold text-apple-text mb-4">{sd.doneHeading}</h2>
            <ul className="space-y-3 text-apple-secondary text-[15px] leading-relaxed">
              {entry.done.map((line, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-apple-blue" aria-hidden />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </section>

          <div className="mt-12">
            <Link
              to="/#skills"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl border border-black/[0.1] bg-white text-apple-text text-sm font-semibold hover:bg-apple-surface transition-colors shadow-apple"
            >
              {sd.backToSkills}
            </Link>
          </div>

          <p
            className="mt-10 pt-8 border-t border-black/[0.06] text-[15px] text-apple-secondary leading-relaxed"
            role="note"
          >
            {sd.skillUpdatingNote.replace(/\{skill\}/g, entry.title)}
          </p>
        </motion.div>
      </div>
    </main>
  );
};

export default SkillDetailPage;
