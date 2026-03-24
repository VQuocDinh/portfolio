import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import type { Locale } from '../i18n/types';
import { LOCALE_STORAGE_KEY } from '../i18n/types';
import { getMessage } from '../i18n/getMessage';
import { en } from '../i18n/messages/en';
import { vi } from '../i18n/messages/vi';

const dictionaries = { en, vi } as const;

type Messages = (typeof dictionaries)[Locale];

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (path: string) => string;
  messages: Messages;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function readInitialLocale(): Locale {
  if (typeof window === 'undefined') return 'en';
  const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY);
  if (stored === 'vi' || stored === 'en') return stored;
  const nav = window.navigator.language?.toLowerCase() ?? '';
  if (nav.startsWith('vi')) return 'vi';
  return 'en';
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(readInitialLocale);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
    document.documentElement.lang = next === 'vi' ? 'vi' : 'en';
  }, []);

  const messages = useMemo(() => dictionaries[locale], [locale]);

  useEffect(() => {
    document.documentElement.lang = locale === 'vi' ? 'vi' : 'en';
    document.title = messages.meta.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', messages.meta.description);
    }
  }, [locale, messages.meta.description, messages.meta.title]);

  const t = useCallback((path: string) => getMessage(locale, path), [locale]);

  const value = useMemo(
    () => ({ locale, setLocale, t, messages }),
    [locale, setLocale, t, messages]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return ctx;
}
