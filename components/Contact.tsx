import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import Section from './ui/Section';
import emailjs from '@emailjs/browser';
import { useLanguage } from '../contexts/LanguageContext';
import { useRecruiterLetter } from '../contexts/RecruiterLetterContext';

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
    'w-full bg-white border border-black/[0.08] rounded-xl px-4 py-3 text-apple-text text-sm placeholder:text-apple-tertiary ' +
    'focus:outline-none focus:border-apple-blue focus:ring-2 focus:ring-apple-blue/15 transition-all ' +
    'disabled:opacity-50 disabled:cursor-not-allowed';

  return (
    <footer className="bg-apple-surface/80 pt-14 pb-10 border-t border-apple-border/60">
      <Section id="contact" eyebrow={c.eyebrow} title={c.title} subtitle={c.subtitle}>
        <div className="grid md:grid-cols-2 gap-10 lg:gap-12 max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="bg-white p-6 md:p-7 rounded-2xl border border-black/[0.06] shadow-apple">
              <h3 className="text-lg font-semibold text-apple-text mb-6">{c.infoTitle}</h3>
              <div className="space-y-4">
                <a
                  href="mailto:vqdinh2202@gmail.com"
                  className="flex items-center gap-4 text-apple-secondary hover:text-apple-blue transition-colors group rounded-xl -mx-1 px-1 py-0.5"
                >
                  <div className="p-2.5 bg-apple-surface rounded-xl group-hover:bg-blue-50 transition-colors border border-black/[0.04]">
                    <Mail size={18} aria-hidden />
                  </div>
                  <span className="text-sm font-medium break-all">vqdinh2202@gmail.com</span>
                </a>
                <div className="flex items-center gap-4 text-apple-secondary">
                  <div className="p-2.5 bg-apple-surface rounded-xl border border-black/[0.04]">
                    <Phone size={18} aria-hidden />
                  </div>
                  <span className="text-sm font-medium">+84 399 967 453</span>
                </div>
                <div className="flex items-center gap-4 text-apple-secondary">
                  <div className="p-2.5 bg-apple-surface rounded-xl border border-black/[0.04]">
                    <MapPin size={18} aria-hidden />
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
                className="flex-1 bg-apple-text hover:bg-gray-800 text-white py-3.5 rounded-xl flex justify-center items-center gap-2 transition-colors text-sm font-semibold shadow-apple"
              >
                <Github size={18} aria-hidden />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/voquocdinh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#0077b5] hover:bg-[#006396] text-white py-3.5 rounded-xl flex justify-center items-center gap-2 transition-colors text-sm font-semibold shadow-apple"
              >
                <Linkedin size={18} aria-hidden />
                LinkedIn
              </a>
            </div>
          </div>

          <form className="space-y-4 bg-white p-6 md:p-7 rounded-2xl border border-black/[0.06] shadow-apple" onSubmit={handleSubmit} noValidate>
            <h3 className="text-lg font-semibold text-apple-text mb-1">{c.formTitle}</h3>
            <p className="text-apple-tertiary text-sm mb-4">{c.formHint}</p>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wide text-apple-secondary mb-1.5">
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
                <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wide text-apple-secondary mb-1.5">
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
                <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wide text-apple-secondary mb-1.5">
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
                className={`w-full font-semibold text-sm py-3.5 rounded-xl transition-all flex justify-center items-center gap-2 shadow-apple ${
                  status === 'success'
                    ? 'bg-green-600 text-white cursor-default'
                    : status === 'error'
                      ? 'bg-red-500 text-white'
                      : 'bg-apple-blue hover:bg-apple-blue-hover text-white disabled:opacity-70 disabled:cursor-not-allowed'
                }`}
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 size={16} className="animate-spin" aria-hidden />
                    {c.sending}
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
                    <Send size={16} aria-hidden />
                    {c.send}
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        <div className="mt-16 md:mt-20 pt-8 border-t border-apple-border/50 text-center space-y-3">
          <button
            type="button"
            onClick={openLetter}
            className="text-sm font-medium text-apple-blue hover:text-apple-blue-hover underline-offset-4 hover:underline"
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
