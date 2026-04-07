import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Mail, HeartHandshake, FileDown, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { useRecruiterLetter } from '../contexts/RecruiterLetterContext';
import { CV_DOWNLOAD_NAME, CV_HREF } from '../lib/cv';
import { useTheme } from '../contexts/ThemeContext';

function scrollToSection(sectionId: string) {
  const el = document.getElementById(sectionId);
  if (!el) return;
  const headerOffset = 80;
  const y = el.getBoundingClientRect().top + window.pageYOffset - headerOffset;
  window.scrollTo({ top: y, behavior: 'smooth' });
}

const Header: React.FC = () => {
  const { t, locale, setLocale, messages } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const { openLetter } = useRecruiterLetter();
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navLinks = useMemo(
    () => [
      { name: t('nav.about'), id: 'about' as const },
      { name: t('nav.whyFit'), id: 'why-fit' as const },
      { name: t('nav.skills'), id: 'skills' as const },
      { name: t('nav.experience'), id: 'experience' as const },
      { name: t('nav.projects'), id: 'projects' as const },
      { name: t('nav.contact'), id: 'contact' as const },
    ],
    [t]
  );

  const goToSection = useCallback(
    (sectionId: string) => {
      setIsMobileMenuOpen(false);
      if (!isHome) {
        navigate({ pathname: '/', hash: `#${sectionId}` });
      } else {
        scrollToSection(sectionId);
      }
    },
    [isHome, navigate]
  );

  useEffect(() => {
    if (!isHome) {
      setActiveSection('');
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 100;

      for (const link of navLinks) {
        const element = document.getElementById(link.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(link.id);
          }
        }
      }

      if (window.scrollY < 100) setActiveSection('');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navLinks, isHome]);

  const langSwitcher = (
    <div
      className="flex items-center rounded-xl neu-inset p-1"
      role="group"
      aria-label={t('a11y.language')}
    >
      <button
        type="button"
        onClick={() => setLocale('en')}
        className={`px-2.5 py-1.5 text-[11px] font-semibold rounded-lg transition-all ${
          locale === 'en'
            ? 'bg-apple-bg text-apple-text neu-raised-sm'
            : 'text-apple-secondary hover:text-apple-text'
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLocale('vi')}
        className={`px-2.5 py-1.5 text-[11px] font-semibold rounded-lg transition-all ${
          locale === 'vi'
            ? 'bg-apple-bg text-apple-text neu-raised-sm'
            : 'text-apple-secondary hover:text-apple-text'
        }`}
      >
        VI
      </button>
    </div>
  );

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-apple-bg/80 backdrop-blur-2xl border-b border-apple-border/35 shadow-apple'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center h-14 md:h-16 gap-3">
          <Link
            to="/"
            className="text-lg md:text-xl font-bold text-apple-text tracking-tight focus-visible:outline-offset-4 rounded-md shrink-0"
            aria-label={t('a11y.home')}
            onClick={(e) => {
              if (isHome) {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
          >
            VQD<span className="gradient-text">.</span>
          </Link>

          <div className="flex items-center gap-2 md:gap-3">
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 rounded-xl text-apple-tertiary hover:text-apple-blue neu-inset-sm transition-all shrink-0"
              aria-label={t('a11y.themeToggle')}
              title={theme === 'dark' ? t('a11y.themeLight') : t('a11y.themeDark')}
            >
              {theme === 'dark' ? <Sun size={20} aria-hidden /> : <Moon size={20} aria-hidden />}
            </button>
            <button
              type="button"
              onClick={openLetter}
              className="p-2 rounded-xl text-apple-tertiary hover:text-apple-blue neu-inset-sm transition-all shrink-0"
              aria-label={messages.recruiterLetter.ariaModal}
              title={messages.recruiterLetter.reopen}
            >
              <HeartHandshake size={20} />
            </button>
            <div className="md:hidden">{langSwitcher}</div>

            <nav className="hidden md:flex items-center gap-0.5" aria-label={t('a11y.primaryNav')}>
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    type="button"
                    onClick={() => goToSection(link.id)}
                    className={`nav-link-hover relative px-3 py-2 text-[13px] font-medium transition-colors rounded-lg ${
                      isActive
                        ? 'text-apple-text'
                        : 'text-apple-secondary hover:text-apple-text'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute bottom-0.5 left-3 right-3 h-0.5 rounded-full"
                        style={{ background: 'linear-gradient(90deg, #0071e3, #6e5ce6)' }}
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
              <div className="flex items-center gap-2 ml-2 pl-4 border-l border-apple-border/60">
                {langSwitcher}
                <a
                  href="https://github.com/VQuocDinh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl text-apple-tertiary hover:text-apple-text neu-inset-sm transition-all"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://linkedin.com/in/voquocdinh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl text-apple-tertiary hover:text-apple-text neu-inset-sm transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href={CV_HREF}
                  download={CV_DOWNLOAD_NAME}
                  className="p-2 rounded-xl text-apple-tertiary hover:text-apple-blue neu-inset-sm transition-all"
                  aria-label={t('a11y.downloadCv')}
                  title={messages.contact.downloadCv}
                >
                  <FileDown size={18} />
                </a>
              </div>
            </nav>

            <button
              type="button"
              className="md:hidden p-2 -mr-2 rounded-xl text-apple-secondary hover:text-apple-text hover:bg-apple-text/10 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? t('a11y.closeMenu') : t('a11y.openMenu')}
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden neu-header-bar border-b border-transparent overflow-hidden"
          >
            <div className="px-4 py-6 space-y-1 flex flex-col items-stretch max-w-md mx-auto">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    type="button"
                    onClick={() => goToSection(link.id)}
                    className={`font-medium text-[15px] py-3 px-3 rounded-xl text-center transition-all ${
                      isActive
                        ? 'text-apple-text neu-raised-sm'
                        : 'text-apple-secondary hover:text-apple-text'
                    }`}
                  >
                    {link.name}
                  </button>
                );
              })}
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openLetter();
                }}
                className="mt-4 py-3 px-3 rounded-xl text-center text-sm font-medium gradient-text-blue neu-inset-sm transition-colors"
              >
                {messages.recruiterLetter.reopen}
              </button>
              <a
                href={CV_HREF}
                download={CV_DOWNLOAD_NAME}
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-2 py-3 px-3 rounded-xl text-center text-sm font-semibold text-apple-text neu-raised-sm flex items-center justify-center gap-2 transition-all"
              >
                <FileDown size={18} aria-hidden />
                {messages.contact.downloadCv}
              </a>
              <div className="flex justify-center gap-6 mt-6 pt-6 border-t border-apple-border/60">
                <a
                  href="https://github.com/VQuocDinh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-apple-tertiary hover:text-apple-text transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={22} />
                </a>
                <a
                  href="https://linkedin.com/in/voquocdinh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-apple-tertiary hover:text-apple-text transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={22} />
                </a>
                <a href="mailto:vqdinh2202@gmail.com" className="p-2 text-apple-tertiary hover:text-apple-text transition-colors" aria-label="Email">
                  <Mail size={22} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
