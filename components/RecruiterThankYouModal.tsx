import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { HeartHandshake, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface RecruiterThankYouModalProps {
  open: boolean;
  onDismiss: () => void;
}

const RecruiterThankYouModal: React.FC<RecruiterThankYouModalProps> = ({ open, onDismiss }) => {
  const { messages, locale, setLocale } = useLanguage();
  const r = messages.recruiterLetter;
  const lang = messages.lang;

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (typeof document === 'undefined') {
    return null;
  }

  const content = (
    <AnimatePresence mode="sync">
      {open && (
        <motion.div
          key="recruiter-thank-you"
          role="dialog"
          aria-modal="true"
          aria-labelledby="recruiter-letter-title"
          aria-describedby="recruiter-letter-body"
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-6"
          style={{ isolation: 'isolate' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <button
            type="button"
            className="absolute inset-0 z-0 bg-black/35 backdrop-blur-[2px]"
            aria-label={r.ariaClose}
            onClick={onDismiss}
          />
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 380, damping: 32 }}
            className="relative z-10 w-full max-w-lg rounded-2xl bg-white shadow-apple-xl border border-black/[0.08] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-apple-blue/90" aria-hidden />
            <button
              type="button"
              onClick={onDismiss}
              className="absolute top-3 right-3 p-2 rounded-lg text-apple-tertiary hover:text-apple-text hover:bg-apple-surface transition-colors z-10"
              aria-label={r.ariaClose}
            >
              <X size={20} />
            </button>

            <div className="px-6 pt-8 pb-6 md:px-8 md:pt-10 md:pb-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-4 pr-8 sm:pr-10">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-apple-blue border border-blue-100">
                    <HeartHandshake size={22} aria-hidden />
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-apple-blue">{r.badge}</span>
                </div>
                <div className="flex flex-col gap-1.5 sm:items-end">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-apple-tertiary">{r.letterLanguage}</span>
                  <div
                    className="flex items-center rounded-xl border border-black/[0.08] bg-apple-surface/90 p-1 shadow-inner-soft"
                    role="group"
                    aria-label={r.ariaLanguageGroup}
                  >
                    <button
                      type="button"
                      onClick={() => setLocale('en')}
                      className={`px-2.5 py-1.5 text-[11px] font-semibold rounded-lg transition-all ${
                        locale === 'en'
                          ? 'bg-white text-apple-text shadow-apple'
                          : 'text-apple-secondary hover:text-apple-text'
                      }`}
                    >
                      {lang.en}
                    </button>
                    <button
                      type="button"
                      onClick={() => setLocale('vi')}
                      className={`px-2.5 py-1.5 text-[11px] font-semibold rounded-lg transition-all ${
                        locale === 'vi'
                          ? 'bg-white text-apple-text shadow-apple'
                          : 'text-apple-secondary hover:text-apple-text'
                      }`}
                    >
                      {lang.vi}
                    </button>
                  </div>
                </div>
              </div>

              <h2 id="recruiter-letter-title" className="text-xl md:text-2xl font-semibold text-apple-text tracking-tight mb-5">
                {r.title}
              </h2>

              <div id="recruiter-letter-body" className="space-y-4 text-[15px] md:text-base text-apple-secondary leading-relaxed">
                <p>{r.p1}</p>
                <p>{r.p2}</p>
                <p>{r.p3}</p>
              </div>

              <div className="mt-8 pt-6 border-t border-apple-border/60">
                <p className="text-sm text-apple-tertiary">{r.closing}</p>
                <p className="text-lg font-semibold text-apple-text mt-1">{r.signature}</p>
              </div>

              <button
                type="button"
                onClick={onDismiss}
                className="mt-8 w-full py-3.5 rounded-xl bg-apple-blue hover:bg-apple-blue-hover text-white text-sm font-semibold transition-colors shadow-apple-md"
              >
                {r.continue}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return createPortal(content, document.body);
};

export default RecruiterThankYouModal;
