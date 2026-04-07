import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle, HeartHandshake, Sparkles, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface ContactThankYouModalProps {
  open: boolean;
  onClose: () => void;
  senderName: string;
}

const ContactThankYouModal: React.FC<ContactThankYouModalProps> = ({ open, onClose, senderName }) => {
  const { messages } = useLanguage();
  const t = messages.contactThankYou;

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Auto-close after 8 seconds
  useEffect(() => {
    if (!open) return;
    const timer = setTimeout(onClose, 8000);
    return () => clearTimeout(timer);
  }, [open, onClose]);

  if (typeof document === 'undefined') return null;

  const content = (
    <AnimatePresence mode="sync">
      {open && (
        <motion.div
          key="contact-thank-you"
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-ty-title"
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-6"
          style={{ isolation: 'isolate' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <button
            type="button"
            className="absolute inset-0 z-0 bg-black/40 backdrop-blur-sm"
            aria-label={t.close}
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            className="relative z-10 w-full max-w-md rounded-2xl neu-raised-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Gradient top bar */}
            <div
              className="h-1.5 w-full"
              style={{ background: 'linear-gradient(90deg, #22c55e, #0071e3, #6e5ce6)' }}
              aria-hidden
            />

            {/* Close button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full text-apple-tertiary hover:text-apple-text neu-inset-sm transition-colors z-10"
              aria-label={t.close}
            >
              <X size={18} />
            </button>

            <div className="px-6 pt-8 pb-7 md:px-8 md:pt-10 md:pb-8 text-center">
              {/* Animated checkmark */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.15 }}
                className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-emerald-500 shadow-lg shadow-green-500/30"
              >
                <CheckCircle size={32} className="text-white" />
              </motion.div>

              {/* Sparkle accent */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full neu-inset-sm mb-4">
                  <Sparkles size={12} className="text-green-500" />
                  <span className="text-[11px] font-semibold text-green-600 dark:text-green-400 uppercase tracking-wider">{t.badge}</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.45 }}
              >
                <h2 id="contact-ty-title" className="text-xl md:text-2xl font-bold text-apple-text tracking-tight mb-3">
                  {t.title}
                </h2>

                <p className="text-apple-secondary text-[15px] leading-relaxed mb-2">
                  {senderName ? t.messagePersonal.replace('{name}', senderName) : t.message}
                </p>

                <p className="text-apple-tertiary text-sm leading-relaxed">
                  {t.responseTime}
                </p>
              </motion.div>

              {/* Social nudge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.4 }}
                className="mt-6 pt-5 border-t border-apple-border/40"
              >
                <div className="flex items-center justify-center gap-2 text-apple-tertiary text-sm mb-4">
                  <HeartHandshake size={16} className="text-apple-blue" />
                  <span>{t.connect}</span>
                </div>
                <div className="flex gap-3 justify-center">
                  <a
                    href="https://github.com/VQuocDinh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn neu-raised-sm px-5 py-2.5 rounded-xl bg-zinc-900 text-white text-sm font-semibold hover:bg-zinc-800 transition-all dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/voquocdinh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn neu-raised-sm px-5 py-2.5 rounded-xl bg-[#0077b5] text-white text-sm font-semibold hover:bg-[#006396] transition-all"
                  >
                    LinkedIn
                  </a>
                </div>
              </motion.div>

              {/* Close button */}
              <motion.button
                type="button"
                onClick={onClose}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.55 }}
                className="mt-6 w-full py-3 rounded-xl neu-inset text-apple-text text-sm font-semibold hover:opacity-95 transition-colors"
              >
                {t.dismiss}
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return createPortal(content, document.body);
};

export default ContactThankYouModal;
