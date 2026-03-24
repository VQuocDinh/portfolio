import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import RecruiterThankYouModal from '../components/RecruiterThankYouModal';

/** Bump if you need everyone to see the modal again */
const STORAGE_KEY = 'portfolio-recruiter-letter-dismissed-v2';

function readShouldShowOnLoad(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    return !window.localStorage.getItem(STORAGE_KEY);
  } catch {
    return true;
  }
}

type RecruiterLetterContextValue = {
  openLetter: () => void;
};

const RecruiterLetterContext = createContext<RecruiterLetterContextValue | null>(null);

export function RecruiterLetterProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(readShouldShowOnLoad);

  const openLetter = useCallback(() => setOpen(true), []);

  const dismiss = useCallback(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, '1');
    } catch {
      /* ignore */
    }
    setOpen(false);
  }, []);

  const value = useMemo(() => ({ openLetter }), [openLetter]);

  return (
    <RecruiterLetterContext.Provider value={value}>
      {children}
      <RecruiterThankYouModal open={open} onDismiss={dismiss} />
    </RecruiterLetterContext.Provider>
  );
}

export function useRecruiterLetter(): RecruiterLetterContextValue {
  const ctx = useContext(RecruiterLetterContext);
  if (!ctx) {
    throw new Error('useRecruiterLetter must be used within RecruiterLetterProvider');
  }
  return ctx;
}
