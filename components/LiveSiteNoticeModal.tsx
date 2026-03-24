import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Globe, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface LiveSiteNoticeModalProps {
  open: boolean;
  onClose: () => void;
  /** Opens in new tab when user confirms */
  liveUrl: string;
}

const LiveSiteNoticeModal: React.FC<LiveSiteNoticeModalProps> = ({ open, onClose, liveUrl }) => {
  const { messages } = useLanguage();
  const p = messages.projects;

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const handleContinue = () => {
    window.open(liveUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  if (typeof document === 'undefined') {
    return null;
  }

  const content = (
    <AnimatePresence mode="sync">
      {open && (
        <motion.div
          key="live-site-notice"
          role="dialog"
          aria-modal="true"
          aria-labelledby="live-site-notice-title"
          aria-describedby="live-site-notice-desc"
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
            aria-label={p.liveSiteNoticeClose}
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 380, damping: 32 }}
            className="relative z-10 w-full max-w-md rounded-2xl bg-white shadow-apple-xl border border-black/[0.08] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-apple-blue/90" aria-hidden />
            <div className="p-6 md:p-8">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-apple-surface border border-black/[0.06]">
                  <Globe className="text-apple-blue" size={22} aria-hidden />
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="p-2 rounded-full text-apple-tertiary hover:text-apple-text hover:bg-apple-surface transition-colors -mr-2 -mt-2"
                  aria-label={p.liveSiteNoticeClose}
                >
                  <X size={20} />
                </button>
              </div>
              <h2 id="live-site-notice-title" className="text-lg font-semibold text-apple-text tracking-tight pr-8">
                {p.liveSiteNoticeTitle}
              </h2>
              <p id="live-site-notice-desc" className="mt-3 text-[15px] text-apple-secondary leading-relaxed">
                {p.liveSiteNoticeBody}
              </p>
              <div className="mt-8 flex flex-col-reverse sm:flex-row gap-3 sm:justify-end">
                <button
                  type="button"
                  onClick={onClose}
                  className="inline-flex items-center justify-center px-5 py-3 rounded-xl border border-black/[0.1] bg-white text-apple-text text-sm font-semibold hover:bg-apple-surface transition-colors"
                >
                  {p.liveSiteNoticeCancel}
                </button>
                <button
                  type="button"
                  onClick={handleContinue}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-apple-blue hover:bg-apple-blue-hover text-white text-sm font-semibold shadow-apple-md transition-colors"
                >
                  {p.liveSiteNoticeContinue}
                  <ArrowUpRight size={16} className="opacity-90 shrink-0" aria-hidden />
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return createPortal(content, document.body);
};

export default LiveSiteNoticeModal;
