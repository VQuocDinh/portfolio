import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, Loader2, CheckCircle, AlertCircle, FileDown } from 'lucide-react';
import Section from './ui/Section';
import emailjs from '@emailjs/browser';
import { useLanguage } from '../contexts/LanguageContext';
import { useRecruiterLetter } from '../contexts/RecruiterLetterContext';
import { CV_DOWNLOAD_NAME, CV_HREF } from '../lib/cv';
import ContactThankYouModal from './ContactThankYouModal';

const Contact: React.FC = () => {
  const { messages } = useLanguage();
  const { openLetter } = useRecruiterLetter();
  const c = messages.contact;
  const r = messages.recruiterLetter;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [showModal, setShowModal] = useState(false);
  const [submittedName, setSubmittedName] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('submitting');

    const SERVICE_ID = 'service_fpmso35';
    const TEMPLATE_ID = 'template_bx8vyrc';
    const PUBLIC_KEY = '_rhZJfubFCTvxKkED';

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Vo Quoc Dinh',
        },
        PUBLIC_KEY
      );

      setStatus('success');
      setSubmittedName(formData.name);
      setShowModal(true);
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Email sending failed:', error);
      setStatus('error');

      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    }
  };

  const inputClass =
    'form-input-enhanced w-full bg-apple-bg border border-apple-border/45 rounded-xl px-4 py-3.5 text-apple-text text-sm placeholder:text-apple-tertiary/60 ' +
    'focus:outline-none focus:border-apple-blue focus:ring-3 focus:ring-apple-blue/10 transition-all ' +
    'disabled:opacity-50 disabled:cursor-not-allowed';

  return (
    <footer className="relative bg-apple-surface/60 pt-14 pb-10 border-t border-apple-border/50 overflow-hidden">
      <ContactThankYouModal open={showModal} onClose={() => setShowModal(false)} senderName={submittedName} />
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/5 to-transparent rounded-full blur-3xl pointer-events-none" aria-hidden />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-purple-500/5 to-transparent rounded-full blur-3xl pointer-events-none" aria-hidden />
      
      <Section id="contact" eyebrow={c.eyebrow} title={c.title} subtitle={c.subtitle}>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10 max-w-4xl mx-auto">
          <div className="space-y-5">
            <div className="contact-card bg-apple-bg p-6 md:p-7 rounded-2xl border border-apple-border/40 shadow-apple">
              <h3 className="text-lg font-bold text-apple-text mb-6">{c.infoTitle}</h3>
              <div className="space-y-4">
                <a
                  href="mailto:vqdinh2202@gmail.com"
                  className="flex items-center gap-4 text-apple-secondary hover:text-apple-blue transition-colors group rounded-xl -mx-1 px-1 py-1"
                >
                  <div className="icon-container p-2.5 bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-950/40 dark:to-blue-900/20 rounded-xl group-hover:from-blue-100 dark:group-hover:from-blue-900/50 transition-all border border-blue-100/60 dark:border-blue-800/30">
                    <Mail size={18} className="text-blue-500" aria-hidden />
                  </div>
                  <span className="text-sm font-medium break-all">vqdinh2202@gmail.com</span>
                </a>
                <div className="flex items-center gap-4 text-apple-secondary">
                  <div className="p-2.5 bg-gradient-to-br from-green-50 to-emerald-100/50 dark:from-green-950/40 dark:to-emerald-900/20 rounded-xl border border-green-100/60 dark:border-green-800/30">
                    <Phone size={18} className="text-green-500" aria-hidden />
                  </div>
                  <span className="text-sm font-medium">+84 399 967 453</span>
                </div>
                <div className="flex items-center gap-4 text-apple-secondary">
                  <div className="p-2.5 bg-gradient-to-br from-orange-50 to-amber-100/50 dark:from-orange-950/40 dark:to-amber-900/20 rounded-xl border border-orange-100/60 dark:border-orange-800/30">
                    <MapPin size={18} className="text-orange-500" aria-hidden />
                  </div>
                  <span className="text-sm font-medium">{c.address}</span>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <a
                href="https://github.com/VQuocDinh"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn flex-1 bg-zinc-900 hover:bg-zinc-800 text-white py-3.5 rounded-xl flex justify-center items-center gap-2 transition-all text-sm font-semibold shadow-md dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
              >
                <Github size={18} aria-hidden />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/voquocdinh"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn flex-1 bg-gradient-to-r from-[#0077b5] to-[#0088cc] hover:from-[#006396] hover:to-[#0077b5] text-white py-3.5 rounded-xl flex justify-center items-center gap-2 transition-all text-sm font-semibold shadow-md"
              >
                <Linkedin size={18} aria-hidden />
                LinkedIn
              </a>
            </div>
            <a
              href={CV_HREF}
              download={CV_DOWNLOAD_NAME}
              className="social-btn flex w-full items-center justify-center gap-2 py-3.5 rounded-xl border border-apple-border/45 bg-apple-bg text-apple-text text-sm font-semibold hover:bg-apple-surface hover:border-apple-blue/25 transition-all shadow-apple"
            >
              <FileDown size={18} aria-hidden />
              {c.downloadCv}
            </a>
          </div>

          <form className="contact-card space-y-4 bg-apple-bg p-6 md:p-7 rounded-2xl border border-apple-border/40 shadow-apple" onSubmit={handleSubmit} noValidate>
            <h3 className="text-lg font-bold text-apple-text mb-1">{c.formTitle}</h3>
            <p className="text-apple-tertiary text-sm mb-4">{c.formHint}</p>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wide text-apple-secondary mb-2">
                  {c.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={status === 'submitting'}
                  required
                  className={inputClass}
                  placeholder={c.placeholderName}
                  autoComplete="name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wide text-apple-secondary mb-2">
                  {c.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={status === 'submitting'}
                  required
                  className={inputClass}
                  placeholder={c.placeholderEmail}
                  autoComplete="email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wide text-apple-secondary mb-2">
                  {c.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  disabled={status === 'submitting'}
                  required
                  className={`${inputClass} resize-none min-h-[120px]`}
                  placeholder={c.placeholderMessage}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting' || status === 'success'}
                className={`w-full font-semibold text-sm py-3.5 rounded-xl transition-all flex justify-center items-center gap-2 ${
                  status === 'success'
                    ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white cursor-default shadow-md'
                    : status === 'error'
                      ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-md'
                      : 'cta-gradient text-white disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/25'
                }`}
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 size={16} className="animate-spin" aria-hidden />
                    <span className="relative z-10">{c.sending}</span>
                  </>
                ) : status === 'success' ? (
                  <>
                    <CheckCircle size={16} aria-hidden />
                    {c.sent}
                  </>
                ) : status === 'error' ? (
                  <>
                    <AlertCircle size={16} aria-hidden />
                    {c.failed}
                  </>
                ) : (
                  <>
                    <span className="relative z-10 inline-flex items-center gap-2">
                      <Send size={16} aria-hidden />
                      {c.send}
                    </span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        <div className="mt-16 md:mt-20 pt-8 border-t border-apple-border/40 text-center space-y-3">
          <button
            type="button"
            onClick={openLetter}
            className="text-sm font-medium gradient-text-blue hover:opacity-80 underline-offset-4 hover:underline transition-opacity"
          >
            {r.reopen}
          </button>
          <p className="text-apple-tertiary text-sm">
            &copy; {new Date().getFullYear()} Vo Quoc Dinh. {c.footer}
          </p>
        </div>
      </Section>
    </footer>
  );
};

export default Contact;
